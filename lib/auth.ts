import { compare } from "bcrypt";
import { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "email",
          type: "text",
          placeholder: "email@example.com",
        },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const existingUser = await prisma.user.findUnique({
          where: { email: credentials.email },
          include: {
            intern: true,
            enterprise: true,
          },
        });

        if (!existingUser || !existingUser.password) {
          return null;
        }

        const passwordMatch = await compare(
          credentials.password,
          existingUser.password
        );

        if (!passwordMatch) {
          return null;
        }

        return {
          id: existingUser.id as string,
          name: existingUser.name,
          email: existingUser.email,
          image: existingUser.image,
          isIntern: !!existingUser.intern,
          isEnterprise: !!existingUser.enterprise,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // @ts-ignore: Only used for initial JWT generation
        token.isIntern = !!user.intern;
        // @ts-ignore: Only used for initial JWT generation
        token.isEnterprise = !!user.entreprise;
      } else if (token.sub) {
        const existingUser = await prisma.user.findUnique({
          where: { id: token.sub },
          include: {
            intern: true,
            enterprise: true,
          },
        });

        if (existingUser) {
          token.isIntern = !!existingUser.intern;
          token.isEnterprise = !!existingUser.enterprise;
        }
      }
      return token;
    },
    async session({ session, token }) {
      session.user = {
        // @ts-ignore: Randomly getting an error here, but it works.
        id: token.sub as string,
        name: token.name,
        email: token.email,
        image: token.picture,
        isIntern: token.isIntern,
        isEnterprise: token.isEnterprise,
      };
      return session;
    },
  },
  secret: process.env.JWT_TOKEN as string,
};
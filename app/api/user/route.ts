import { hash } from "bcrypt";

import { prisma } from "@lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { username, email, password } = body;

    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (existingUser) {
      return NextResponse.json(
        {
          user: null,
          message: "L'utilisateur deja existe, avec cet email.",
        },
        {
          status: 409,
        }
      );
    }

    const hashedPassword = await hash(password, 10);
    const newUser = await prisma.user.create({
      data: {
        name: username,
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json(
      {
        user: {
          id: newUser.id,
          name: newUser.name,
          email: newUser.email,
        },
        message: "L'utilisateur a ete cree avec succes.",
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        user: null,
        message:
          "Une erreur s'est produite lors de la creation de l'utilisateur.",
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      return NextResponse.json(
        {
          user: null,
          message: "L'utilisateur n'existe pas.",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(
      {
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
        message: "L'utilisateur a ete trouve avec succes.",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        user: null,
        message:
          "Une erreur s'est produite lors de la recherche de l'utilisateur.",
      },
      {
        status: 500,
      }
    );
  }
}

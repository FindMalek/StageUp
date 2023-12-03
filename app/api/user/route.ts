import { hash } from "bcrypt";

import { prisma } from "@lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

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
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json(
      {
        user: {
          id: newUser.id,
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

import { prisma } from "@lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      user,
      university,
      fieldOfStudy,
      overview,
      resumeUrl,
      portfolioUrl,
    } = body;

    const existingUser = await prisma.user.findUnique({
      where: {
        id: user.id,
      },
    });

    if (!existingUser) {
      return NextResponse.json(
        {
          intern: null,
          message: "L'utilisateur n'existe pas.",
        },
        {
          status: 404,
        },
      );
    }

    const intern = await prisma.intern.create({
      data: {
        university,
        fieldOfStudy,
        overview,
        resumeUrl,
        portfolioUrl,
        user: {
          connect: {
            id: user.id,
          },
        },
      },
    });

    return NextResponse.json(
      {
        intern: {
          id: intern.id,
          university: intern.university,
          fieldOfStudy: intern.fieldOfStudy,
          overview: intern.overview,
          resumeUrl: intern.resumeUrl,
          portfolioUrl: intern.portfolioUrl,
        },
        message: "L'intern a été créé avec succès.",
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Une erreur s'est produite lors de la création de l'intern.",
      },
      {
        status: 500,
      },
    );
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { id, university, fieldOfStudy, overview, resumeUrl, portfolioUrl } =
      body;

    const existingIntern = await prisma.intern.findUnique({
      where: {
        id,
      },
    });

    console.log(existingIntern);

    if (!existingIntern) {
      return NextResponse.json(
        {
          intern: null,
          message: "L'intern n'existe pas.",
        },
        {
          status: 404,
        },
      );
    }

    const intern = await prisma.intern.update({
      where: {
        id,
      },
      data: {
        university,
        fieldOfStudy,
        overview,
        resumeUrl,
        portfolioUrl,
      },
    });

    return NextResponse.json(
      {
        intern: {
          id: intern.id,
          university: intern.university,
          fieldOfStudy: intern.fieldOfStudy,
          overview: intern.overview,
          resumeUrl: intern.resumeUrl,
          portfolioUrl: intern.portfolioUrl,
        },
        message: "L'intern a été mis à jour avec succès.",
      },
      {
        status: 201,
      },
    );
  } catch (error) {
    return NextResponse.json(
      {
        intern: null,
        message:
          "Une erreur s'est produite lors de la mise à jour de l'intern.",
      },
      {
        status: 500,
      },
    );
  }
}

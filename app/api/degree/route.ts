import { prisma } from "@lib/prisma";
import { NextResponse } from "next/server";
import { DegreeType } from "@/types/degree";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { intern, degrees } = body;

    const existingIntern = await prisma.intern.findUnique({
      where: {
        id: intern.id,
      },
    });

    if (!existingIntern) {
      return NextResponse.json(
        {
          intern: null,
          message: "L'intern n'existe pas.",
        },
        {
          status: 404,
        }
      );
    }

    const createdDegrees = await Promise.all(
      degrees.map((degree: DegreeType) =>
        prisma.degree.create({
          data: {
            ...degree,
            intern: {
              connect: {
                id: intern.id,
              },
            },
          },
        })
      )
    );

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
        degrees: createdDegrees,
        message: "Les diplômes ont été créés avec succès.",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        intern: null,
        message:
          "Une erreur s'est produite lors de la création de les diplômes.",
      },
      {
        status: 500,
      }
    );
  }
}

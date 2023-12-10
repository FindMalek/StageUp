import { prisma } from "@lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      user,
      companyName,
      imageUrl,
      industry,
      foundedDate,
      description,
      websiteUrl,
      companySize,
    } = body;

    const existingUser = await prisma.user.findUnique({
      where: {
        id: user.id,
      },
    });

    if (!existingUser) {
      return NextResponse.json(
        {
          entreprise: null,
          message: "L'utilisateur n'existe pas.",
        },
        {
          status: 404,
        }
      );
    }

    const entreprise = await prisma.enterprise.create({
      data: {
        companyName,
        industry,
        imageUrl: imageUrl || "https://placehold.co/400x400",
        foundedDate,
        description,
        websiteUrl,
        companySize,
        user: {
          connect: {
            id: user.id,
          },
        },
      },
    });

    return NextResponse.json(
      {
        entreprise: {
          id: entreprise.id,
          companyName: entreprise.companyName,
          industry: entreprise.industry,
          foundedDate:
            foundedDate instanceof Date ? foundedDate : new Date(foundedDate),
          description: entreprise.description,
          websiteUrl: entreprise.websiteUrl,
        },
        message: "L'entreprise a ete mis a jour avec succes.",
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
          "Une erreur s'est produite lors de la creation de l'utilisateur.",
      },
      {
        status: 500,
      }
    );
  }
}

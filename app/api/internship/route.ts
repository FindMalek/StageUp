import { prisma } from '@lib/prisma';
import { NextResponse } from 'next/server';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';

export async function POST(request: Request) {
  const session = (await getServerSession(authOptions)) as any;
  const enterpriseUser = session?.user;

  try {
    const body = await request.json();
    const {
      positionTitle,
      description,
      location,
      duration,
      documentationFileUrl,
      keywords
    } = body;

    const existingEnterprise = await prisma.enterprise.findUnique({
      where: {
        userId: enterpriseUser.id
      }
    });

    if (!existingEnterprise) {
      return NextResponse.json(
        {
          internship: null,
          message: "L'entreprise n'existe pas."
        },
        {
          status: 404
        }
      );
    }

    const internship = await prisma.internship.create({
      data: {
        positionTitle,
        description,
        location,
        duration,
        documentationFileUrl,
        keywords,
        enterprise: {
          connect: {
            userId: enterpriseUser.id
          }
        }
      }
    });

    return NextResponse.json(
      {
        internship: {
          id: internship.id,
          positionTitle: internship.positionTitle,
          description: internship.description,
          location: internship.location,
          duration: internship.duration,
          documentationFileUrl: internship.documentationFileUrl,
          keywords: internship.keywords
        },
        message: 'Le stage a été créé avec succès.'
      },
      {
        status: 201
      }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        internship: null,
        message: 'Une erreur est survenue lors de la création du stage.'
      },
      {
        status: 500
      }
    );
  }
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const userId = url.searchParams.get('userId');

  if (userId) {
    try {
      if (!userId) {
        return NextResponse.json(
          {
            message: "L'identifiant de l'user est manquant.",
            enterprise: null
          },
          {
            status: 400
          }
        );
      }

      const enterpriseEntity = await prisma.enterprise.findUnique({
        where: {
          userId
        }
      });

      if (!enterpriseEntity) {
        return NextResponse.json(
          {
            message: "L'entreprise n'existe pas.",
            enterprise: null
          },
          {
            status: 404
          }
        );
      }

      const internships = await prisma.internship.findMany({
        where: {
          enterpriseId: enterpriseEntity.id
        },
        include: {
          enterprise: true,
          feedbacks: true,
          questions: true
        }
      });

      return NextResponse.json(
        {
          internships,
          message: 'Les stages ont été récupérés avec succès.'
        },
        {
          status: 200
        }
      );
    } catch (error) {
      return NextResponse.json(
        {
          internships: null,
          message: 'Une erreur est survenue lors de la récupération des stages.'
        },
        {
          status: 500
        }
      );
    }
  } else {
    try {
      const internships = await prisma.internship.findMany({
        include: {
          enterprise: true,
          feedbacks: true,
          questions: true
        }
      });

      return NextResponse.json(
        {
          internships,
          message: 'Les stages ont été récupérés avec succès.'
        },
        {
          status: 200
        }
      );
    } catch (error) {
      return NextResponse.json(
        {
          internships: null,
          message: 'Une erreur est survenue lors de la récupération des stages.'
        },
        {
          status: 500
        }
      );
    }
  }
}

export async function PUT(request: Request) {
  const session = (await getServerSession(authOptions)) as any;
  const enterpriseUser = session?.user;

  try {
    const body = await request.json();
    const {
      id,
      positionTitle,
      description,
      location,
      duration,
      documentationFileUrl,
      keywords
    } = body;

    const existingEnterprise = await prisma.enterprise.findUnique({
      where: {
        userId: enterpriseUser.id
      }
    });

    if (!existingEnterprise) {
      return NextResponse.json(
        {
          internship: null,
          message: "L'entreprise n'existe pas."
        },
        {
          status: 404
        }
      );
    }

    const internship = await prisma.internship.update({
      where: {
        id
      },
      data: {
        positionTitle,
        description,
        location,
        duration,
        documentationFileUrl,
        keywords
      }
    });

    return NextResponse.json(
      {
        internship: {
          id: internship.id,
          positionTitle: internship.positionTitle,
          description: internship.description,
          location: internship.location,
          duration: internship.duration,
          documentationFileUrl: internship.documentationFileUrl,
          keywords: internship.keywords
        },
        message: 'Le stage a été modifié avec succès.'
      },
      {
        status: 201
      }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        internship: null,
        message: 'Une erreur est survenue lors de la modification du stage.'
      },
      {
        status: 500
      }
    );
  }
}

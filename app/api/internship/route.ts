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

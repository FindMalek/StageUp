import { prisma } from '@lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { internshipId, questions  } = body;

    const existingInternship = await prisma.internship.findUnique({
      where: {
        id: internshipId
      }
    });

    if (!existingInternship) {
      return NextResponse.json(
        {
          question: null,
          message: "Le stage n'existe pas."
        },
        {
          status: 404
        }
      );
    }

    const createdQuestions = await Promise.all(
      questions.map((question: any) =>
        prisma.question.create({
          data: {
            question,
            internship: {
              connect: {
                id: internshipId
              }
            }
          }
        })
      )
    );

    return NextResponse.json(
      {
        questions: createdQuestions,
        message: 'Les questions ont été créées avec succès.'
      },
      {
        status: 200
      }
    );
  } catch (error: any) {
    console.log(error);
    return NextResponse.json(
      {
        question: null,
        message: error.message
      },
      {
        status: 500
      }
    );
  }
}

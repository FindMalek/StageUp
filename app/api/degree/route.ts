import { prisma } from "@lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const {
            degreeName,
            institution,
            dateObtained
        }
    } catch (error) {
        
    }
}
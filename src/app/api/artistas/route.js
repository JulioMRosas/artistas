import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export const GET = async () => {
    const artists = await prisma.artist.findMany();
    return NextResponse.json(artists);
}

export const POST = async (request) => {
    const { name, age, band, genre } = await request.json();

    const newArtist = await prisma.artist.create({
        data: {
            name,
            age: parseInt(age),
            band,
            genre
        }
    })

    return NextResponse.json(newArtist);
} 
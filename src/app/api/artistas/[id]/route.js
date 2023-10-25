import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export const GET = async ({ params: {id} }) => {
    const artist = await prisma.artist.findFirst({
        where: {
            id: parseInt(id)
        }
    })

    return NextResponse.json(artist);
}

export const PUT = async (request, { params: {id} }) => {
    const { name, age, band, genre } = await request.json();

    const updatedArtist = await prisma.artist.update({
        where: {
            id: parseInt(id)
        },
        data: {
            name,
            age,
            band,
            genre
        }
    })

    return NextResponse.json(updatedArtist);
}

export const DELETE = async ({ params: {id} }) => {
    const deletedArtist = await prisma.artist.delete({
        where: {
            id: parseInt(id)
        }
    })

    return NextResponse.json(deletedArtist);
}
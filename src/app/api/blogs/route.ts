import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const dbConnect = async () => {

    try {

        await prisma.$connect();

    } catch (error) {

        return Error("Connection Error");

    }

};

export const GET = async (request: NextRequest) => {

    try {

        await dbConnect();

        const blogs = await prisma.post.findMany();

        return NextResponse.json(
            { data: blogs }, { status: 200 }
        );

    } catch (error) {

        console.log(error);

    } finally {

        await prisma.$disconnect();

    }

};

export const POST = async (request: NextRequest) => {

    try {

        const { title, description, username } = await request.json();

        await dbConnect();

        const post = await prisma.post.create({
            data: {
                title,
                description,
                username
            }
        });

        return NextResponse.json(
            { message: "Data Added", data: post }, { status: 201 }
        );

    } catch (error) {

        console.log(error);

    } finally {

        await prisma.$disconnect();

    }

};
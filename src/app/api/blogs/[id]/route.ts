import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "../route";
import prisma from "@/lib/prisma";

export const GET = async (request: NextRequest) => {

    try {

        const id = request.url.split("/blogs/")[1];

        await dbConnect();

        const blogData = await prisma.post.findFirst({
            where: {
                id
            }
        });

        if (!blogData) {

            return NextResponse.json(
                { message: "ID Not Found...!" }, { status: 404 }
            );

        }

        return NextResponse.json(
            { data: blogData }
        );

    } catch (error) {

        console.log(error);

    } finally {

        await prisma.$disconnect();

    }

};

export const PUT = async (request: NextRequest) => {

    try {

        const id = request.url.split("/blogs/")[1];

        const { title, description, username } = await request.json();

        await dbConnect();

        const updateData = await prisma.post.update({
            data: {
                title,
                description,
                username
            },
            where: {
                id
            }
        });

        return NextResponse.json(
            { message: "Data Updated", data: updateData }
        );

    } catch (error) {

        console.log(error);

    } finally {

        await prisma.$disconnect();

    }

};

export const DELETE = async (request: NextRequest) => {

    try {

        const id = request.url.split("/blogs/")[1];

        await dbConnect();

        await prisma.post.delete({
            where: {
                id
            }
        });

        return NextResponse.json(
            { message: "Data Deleted" }
        );

    } catch (error) {

        console.log(error);

    } finally {

        await prisma.$disconnect();

    }

};
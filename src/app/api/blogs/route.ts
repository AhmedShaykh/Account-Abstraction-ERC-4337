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

        return NextResponse.json({
            message: "ok", data: blogs
        }, { status: 200 });

    } catch (error) {

        console.log(error);

    } finally {

        await prisma.$disconnect();

    }

};
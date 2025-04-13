import { Project } from "@/constants/type";
import { connectDB } from "@/libs/connectDB";
import { NextRequest, NextResponse } from "next/server";

// POST /api/gists
export const POST = async (req: NextRequest) => {
    try {
        const gist: Project = await req.json();
        const db = await connectDB();
        const gistCollection = db.collection<Project>("gists");
        const result = await gistCollection.insertOne(gist);

        return NextResponse.json(
            { message: "Gist posted successfully", insertedId: result.insertedId },
            { status: 201 }
        );

    } catch (error) {
        console.error("POST /gists error:", error);
        return NextResponse.json({ message: "Server error", error }, { status: 500 });
    }
};

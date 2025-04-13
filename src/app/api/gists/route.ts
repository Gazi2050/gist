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

// GET /api/gists
export const GET = async () => {
    try {
        const db = await connectDB();
        const gistCollection = db.collection<Project>("gists");
        const gists = await gistCollection.find({}).toArray();

        return NextResponse.json(gists, { status: 200 });

    } catch (error) {
        console.error("GET /gists error:", error);
        return NextResponse.json({ message: "Server error", error }, { status: 500 });
    }
};
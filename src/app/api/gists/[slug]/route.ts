import { ProjectDB } from "@/constants/type";
import { connectDB } from "@/libs/connectDB";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";


// GET /api/gists/:id
export const GET = async (_req: NextRequest, { params }: { params: { slug: string } }) => {
    try {
        const { slug } = await params;

        if (!ObjectId.isValid(slug)) {
            return NextResponse.json({ message: "Invalid ID format" }, { status: 400 });
        }

        const db = await connectDB();
        const gistCollection = db.collection<ProjectDB>("gists");
        const gist = await gistCollection.findOne({ _id: new ObjectId(slug) });

        if (!gist) {
            return NextResponse.json({ message: "Gist not found" }, { status: 404 });
        }

        return NextResponse.json(gist, { status: 200 });

    } catch (error) {
        console.error(`GET /gists/${params.slug} error:`, error);
        return NextResponse.json({ message: "Server error", error }, { status: 500 });
    }
};

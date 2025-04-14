import { ProjectDB } from "@/constants/type";
import { connectDB } from "@/libs/connectDB";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";


// GET /api/userGists/:id
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

// PUT /api/userGists/:id
export const PUT = async (_req: NextRequest, { params }: { params: { slug: string } }) => {
    try {
        const { slug } = await params;

        if (!ObjectId.isValid(slug)) {
            return NextResponse.json({ message: "Invalid ID format" }, { status: 400 });
        }

        const db = await connectDB();
        const gistCollection = db.collection<ProjectDB>("gists");
        const requestBody = await _req.json();
        const { title, description, language, code, updatedAt } = requestBody;

        if (!title) {
            return NextResponse.json({ message: "Missing required field: title" }, { status: 400 });
        }

        if (!description) {
            return NextResponse.json({ message: "Missing required field: description" }, { status: 400 });
        }

        if (!language) {
            return NextResponse.json({ message: "Missing required field: language" }, { status: 400 });
        }

        if (!code) {
            return NextResponse.json({ message: "Missing required field: code" }, { status: 400 });
        }

        if (!updatedAt) {
            return NextResponse.json({ message: "Missing required field: updatedAt" }, { status: 400 });
        }


        const updateResult = await gistCollection.updateOne(
            { _id: new ObjectId(slug) },
            {
                $set: {
                    title: requestBody.title,
                    description: requestBody.description,
                    language: requestBody.language,
                    code: requestBody.code,
                    updatedAt: requestBody.updatedAt,
                },
            }
        );

        if (updateResult.matchedCount === 0) {
            return NextResponse.json({ message: "Gist not found" }, { status: 404 });
        }

        const updatedGist = await gistCollection.findOne({ _id: new ObjectId(slug) });
        return NextResponse.json(updatedGist, { status: 200 });

    } catch (error) {
        console.error(`PUT /gists/${params.slug} error:`, error);
        return NextResponse.json({ message: "Server error", error }, { status: 500 });
    }
};


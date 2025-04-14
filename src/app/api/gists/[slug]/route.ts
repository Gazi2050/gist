import { ProjectDB } from "@/constants/type";
import { connectDB } from "@/libs/connectDB";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

// GET /api/gists/:slug
export const GET = async (_req: NextRequest, context: { params: Promise<{ slug: string }> }) => {
    const { slug } = await context.params;

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
};

// PATCH /api/gists/:slug
export const PATCH = async (req: NextRequest, context: { params: Promise<{ slug: string }> }) => {
    const { slug } = await context.params;

    if (!ObjectId.isValid(slug)) {
        return NextResponse.json({ message: "Invalid ID format" }, { status: 400 });
    }

    const body = await req.json();
    const { username, action } = body;

    if (!username || !["view", "vote"].includes(action)) {
        return NextResponse.json({ message: "Missing or invalid parameters" }, { status: 400 });
    }

    const db = await connectDB();
    const gistCollection = db.collection<ProjectDB>("gists");

    const updateField = action === "view" ? "views" : "stars";

    const result = await gistCollection.updateOne(
        { _id: new ObjectId(slug) },
        { $addToSet: { [updateField]: username } }
    );

    if (result.matchedCount === 0) {
        return NextResponse.json({ message: "Gist not found" }, { status: 404 });
    }

    return NextResponse.json({ message: `${action} updated` }, { status: 200 });
};

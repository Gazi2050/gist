import { Project } from "@/constants/type";
import { connectDB } from "@/libs/connectDB";
import { NextRequest, NextResponse } from "next/server";

// GET /api/userGists?username=someUser
export const GET = async (req: NextRequest) => {
    try {
        const { searchParams } = new URL(req.url);
        const username = searchParams.get("username");

        if (!username) {
            return NextResponse.json({ message: "Username is required" }, { status: 400 });
        }

        const db = await connectDB();
        const gistCollection = db.collection<Project>("gists");

        const gists = await gistCollection.find({ username }).toArray();

        return NextResponse.json(gists, { status: 200 });

    } catch (error) {
        console.error("GET /gists error:", error);
        return NextResponse.json({ message: "Server error", error }, { status: 500 });
    }
};

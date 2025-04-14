import { Project } from "@/constants/type";
import { connectDB } from "@/libs/connectDB";
import { NextResponse } from "next/server";

// GET /api/trending
export const GET = async () => {
    try {
        const db = await connectDB();
        const gistCollection = db.collection<Project>("gists");

        const gists = await gistCollection.aggregate([
            {
                $sort: {
                    views: -1,
                    _id: 1
                }
            }
        ]).toArray();

        return NextResponse.json(gists, { status: 200 });

    } catch (error) {
        console.error("GET /gists error:", error);
        return NextResponse.json({ message: "Server error", error }, { status: 500 });
    }
};

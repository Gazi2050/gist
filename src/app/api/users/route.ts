import { connectDB } from "@/libs/connectDB";
import { NextResponse, NextRequest } from "next/server";
import type { AuthFormData as User } from "@/constants/type";

// POST /api/users
export const POST = async (req: NextRequest) => {
    try {
        const user: User = await req.json();

        if (!user.email || !user.password) {
            return NextResponse.json({ message: "Email and password are required." }, { status: 400 });
        }

        const db = await connectDB();
        const userCollection = db.collection<User>("users");

        const existingEmail = await userCollection.findOne({ email: user.email });
        const existingUser = await userCollection.findOne({ username: user.username });

        if (existingEmail) {
            return NextResponse.json({ message: "Email is already registered." }, { status: 409 });
        }

        if (existingUser) {
            return NextResponse.json({ message: "Username is already taken." }, { status: 409 });
        }

        const result = await userCollection.insertOne(user);
        return NextResponse.json(
            { message: "User registered successfully", insertedId: result.insertedId },
            { status: 201 }
        );

    } catch (error) {
        console.error("POST /users error:", error);
        return NextResponse.json({ message: "Server error", error }, { status: 500 });
    }
};

//GET /api/users?email=example@example.com&password=yourPassword
export const GET = async (req: NextRequest) => {
    try {
        const { searchParams } = new URL(req.url);
        const email = searchParams.get("email");
        const password = searchParams.get("password");

        if (!email || !password) {
            return NextResponse.json(
                { error: "Email and password are required." },
                { status: 400 }
            );
        }

        const db = await connectDB();
        const userCollection = db.collection<User>("users");

        const user = await userCollection.findOne({ email, password });

        if (!user) {
            return NextResponse.json({ message: "Invalid credentials." }, { status: 401 });
        }

        const { username } = user;

        return NextResponse.json({ email, username });

    } catch (error) {
        console.error("GET /users error:", error);
        return NextResponse.json({ message: "Server error", error }, { status: 500 });
    }
};

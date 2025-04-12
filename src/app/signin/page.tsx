"use client";
import AuthForm from "@/components/AuthForm";
import { AuthFormData } from "@/constants/type";
import useAuthStore from "@/Hooks/useAuthStore";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const Page = () => {
    const { signin } = useAuthStore();
    const route = useRouter();

    const [loading, setLoading] = useState(false);

    const handleAuthSubmit = (authData: AuthFormData) => {
        const { email, password } = authData;
        console.log("Form submitted with the following data:", authData);

        if (!email || !password) {
            console.error("All fields are required.");
            return;
        }

        setLoading(true);

        signin(email, password)
            .then(() => {
                route.push('/feed');
                toast.success('You have successfully signed in! Welcome back to Gist!');
            })
            .catch((error) => {
                console.error("Error during signin:", error);
                toast.error(error.message || "Sign in failed. Please check your credentials.");
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <AuthForm authType="signin" onAuthSubmit={handleAuthSubmit} loading={loading} />
    );
};

export default Page;

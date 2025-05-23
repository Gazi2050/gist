"use client";
import AuthForm from "@/components/AuthForm";
import { AuthFormData } from "@/constants/type";
import useAuthStore from "@/Hooks/useAuthStore";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useState } from "react";

const Page = () => {
    const { signup } = useAuthStore();
    const route = useRouter();

    const [loading, setLoading] = useState(false);

    const handleAuthSubmit = (authData: AuthFormData) => {
        const { username, email, password } = authData;
        console.log("Form submitted with the following data:", authData);

        if (!username || !email || !password) {
            console.error("All fields are required.");
            return;
        }

        setLoading(true);

        signup(username, email, password)
            .then(() => {
                route.push('/feed');
                toast.success('Your account has been created successfully! Welcome to Gist!');
            })
            .catch((error) => {
                console.error("Error during signup:", error);
                const errorMessage = error?.message || "An unexpected error occurred. Please try again.";
                toast.error(errorMessage);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (

        <AuthForm
            authType="signup"
            onAuthSubmit={handleAuthSubmit}
            loading={loading}
        />

    );
};

export default Page;

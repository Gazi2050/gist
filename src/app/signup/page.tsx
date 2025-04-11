"use client";
import AuthForm from "@/components/AuthForm";
import { AuthFormData } from "@/constants/type";

const page = () => {
    const handleAuthSubmit = (authData: AuthFormData) => {
        console.log("Form submitted with the following data:");
        console.log(authData);
    };

    return (
        <AuthForm authType="signup" onAuthSubmit={handleAuthSubmit} />
    );
};

export default page;

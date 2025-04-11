"use client";

import { AuthFormFields } from "@/constants/data";
import { AuthFormData, AuthFormProps } from "@/constants/type";
import { Code, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

const AuthForm = ({ authType, onAuthSubmit }: AuthFormProps) => {
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<AuthFormData>({
        mode: "onChange",
    });

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const onSubmit = (data: AuthFormData) => {
        console.log("Form submitted with the following data:");
        console.log(data);
        if (onAuthSubmit) {
            onAuthSubmit(data);
        }
    };

    return (
        <div className="flex items-center justify-center py-6 px-4 sm:py-8 sm:px-6 md:py-12">
            <div className="w-full max-w-[90%] sm:max-w-md space-y-6 sm:space-y-8 bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-lg">
                <div className="flex justify-center items-center text-gray-900 mb-6">
                    <Link href="/" className="flex items-center space-x-2 cursor-pointer">
                        <Code className="h-9 w-9 text-violet-400" />
                        <span className="text-3xl font-bold">Gist</span>
                    </Link>
                </div>

                <div className="text-center">
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                        {authType === "signup" ? "Create New Account" : "Sign In"}
                    </h1>
                    <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-500">
                        {authType === "signup"
                            ? "Enter your details to get started on your journey"
                            : "Enter your credentials to access your account"}
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="mt-6 sm:mt-8 space-y-4 sm:space-y-6"
                >
                    <div className="rounded-md space-y-4 sm:space-y-5">
                        {authType === "signup" && (
                            <div className="group">
                                <label
                                    htmlFor="username"
                                    className="block text-sm font-semibold text-gray-700 mb-1"
                                >
                                    {AuthFormFields.username.label}
                                </label>
                                <input
                                    id="username"
                                    type="text"
                                    {...register("username", AuthFormFields.username.validation)}
                                    className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-gray-300 rounded-lg shadow-sm text-gray-900 placeholder-gray-400 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-gray-500"
                                    placeholder={AuthFormFields.username.placeholder}
                                />
                                {errors.username && (
                                    <p className="text-sm text-red-500 mt-1">
                                        {errors.username.message}
                                    </p>
                                )}
                            </div>
                        )}

                        <div className="group">
                            <label
                                htmlFor="email"
                                className="block text-sm font-semibold text-gray-700 mb-1"
                            >
                                {AuthFormFields.email.label}
                            </label>
                            <input
                                id="email"
                                type="email"
                                {...register("email", AuthFormFields.email.validation)}
                                className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-gray-300 rounded-lg shadow-sm text-gray-900 placeholder-gray-400 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-gray-500"
                                placeholder={AuthFormFields.email.placeholder}
                            />
                            {errors.email && (
                                <p className="text-sm text-red-500 mt-1">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>

                        <div className="group">
                            <label
                                htmlFor="password"
                                className="block text-sm font-semibold text-gray-700 mb-1"
                            >
                                {AuthFormFields.password.label}
                            </label>
                            <div className="relative">
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    {...register("password", AuthFormFields.password.validation)}
                                    className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-gray-300 rounded-lg shadow-sm text-gray-900 placeholder-gray-400 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-gray-500"
                                    placeholder={AuthFormFields.password.placeholder}
                                />
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                                >
                                    {showPassword ? <EyeOff /> : <Eye />}
                                </button>
                            </div>
                            {errors.password && (
                                <p className="text-sm text-red-500 mt-1">
                                    {errors.password.message}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="mt-6 sm:mt-8">
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2.5 sm:py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 shadow-sm transform transition duration-150 ease-in-out hover:translate-y-[-1px] hover:shadow-md"
                        >
                            {authType === "signup" ? "Create Account" : "Sign In"}
                        </button>
                    </div>
                </form>

                <div className="text-center mt-4 sm:mt-6 pt-4 sm:pt-5 border-t border-gray-200">
                    <p className="text-sm text-gray-600">
                        {authType === "signup"
                            ? "Already have an account?"
                            : "Don't have an account?"}{" "}
                        <Link
                            href={authType === "signup" ? "/signin" : "/signup"}
                            className="font-semibold text-gray-800 hover:text-gray-700 transition duration-150 ease-in-out underline underline-offset-2"
                        >
                            {authType === "signup" ? "Sign in" : "Sign up"}
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AuthForm;

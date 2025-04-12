"use client";

import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import useAuthStore from "@/Hooks/useAuthStore";

const publicRoutes = ["/trending", "/aboutUs"];
const dynamicPublicPrefix = "/trending/";
const authOnlyRoutes = ["/", "/signin", "/signup"];

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
    const pathname = usePathname();
    const router = useRouter();
    const {
        isAuthenticated,
        authLoaded,
        setAuthLoaded,
    } = useAuthStore();
    const [checking, setChecking] = useState(true);

    useEffect(() => {
        const initializeAndCheck = () => {
            if (!authLoaded) {
                const stored = localStorage.getItem("auth-storage");

                if (!stored) {
                    setAuthLoaded();
                    return;
                }

                const parsed = JSON.parse(stored)?.state;

                if (parsed?.isAuthenticated !== undefined) {
                    useAuthStore.setState({
                        username: parsed.username,
                        email: parsed.email,
                        isAuthenticated: parsed.isAuthenticated,
                        authLoaded: true,
                    });
                } else {
                    setAuthLoaded();
                }
                return;
            }

            // Once auth is loaded, apply redirect logic
            const isPublic =
                publicRoutes.includes(pathname) ||
                pathname.startsWith(dynamicPublicPrefix);

            if (!isAuthenticated) {
                if (!isPublic && !authOnlyRoutes.includes(pathname)) {
                    router.replace("/signin");
                }
            } else {
                if (authOnlyRoutes.includes(pathname)) {
                    router.replace("/feed");
                }
            }

            setChecking(false);
        };

        initializeAndCheck();
    }, [authLoaded, isAuthenticated, pathname, router, setAuthLoaded]);

    if (!authLoaded || checking) {
        return <div>Loading...</div>;
    }

    return <>{children}</>;
};

export default ProtectedRoute;

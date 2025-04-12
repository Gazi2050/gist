// components/ProtectedRoute.tsx
"use client";

import useAuthStore from "@/Hooks/useAuthStore";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
    const router = useRouter();
    const { isAuthenticated } = useAuthStore();

    useEffect(() => {
        if (!isAuthenticated) {
            router.push("/signin");
        }
    }, [isAuthenticated, router]);

    return <>{isAuthenticated && children}</>;
};

export default ProtectedRoute;

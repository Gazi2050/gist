"use client";

import useAuthStore from "@/Hooks/useAuthStore";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
    const router = useRouter();
    const { isAuthenticated, authLoaded } = useAuthStore();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!authLoaded) {
            setLoading(true);
            return;
        }

        if (isAuthenticated === false) {
            router.replace("/signin");
        }

        setLoading(false);
    }, [isAuthenticated, authLoaded, router]);

    if (loading) {
        return (
            <div>
                <h2>Loading...</h2>
            </div>
        );
    }

    return <>{isAuthenticated ? children : null}</>;
};

export default ProtectedRoute;

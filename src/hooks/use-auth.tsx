import { useState } from "react";
import { useRouter } from "next/navigation";
import { apiRequest } from "@/lib/api";
import { setCookie, deleteCookie } from "cookies-next";

type User = {
    name?: string;
    email: string;
    password?: string;
    address?: string;
    phone?: string;
    creditCard?: string;
};

export function useAuth() {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();


    async function login(email: string, password: string) {
        setLoading(true);
        setError(null);
        try {
            const userData = await apiRequest<User>("/auth/login", "POST", { email, password });
            setUser(userData);
            setCookie("auth-token", userData, {
                maxAge: 60 * 60 * 24 * 365,
                path: "/",
                secure: process.env.NODE_ENV === "production",
                sameSite: "lax",
            });

            router.push("/dashboard");
        } catch (err: any) {
            setError(err.message || "Login failed");
            throw err;
        } finally {
            setLoading(false);
        }
    }


    async function register(
        name: string,
        email: string,
        password: string,
        address?: string,
        phone?: string,
        creditCard?: string
    ) {
        setLoading(true);
        setError(null);
        try {
            const userData = await apiRequest<User>("/auth/register", "POST", {
                name,
                email,
                password,
                address,
                phone,
                creditCard,
            });
            setUser(userData);
            setCookie("auth-token", userData, {
                maxAge: 60 * 60 * 24 * 365,
                path: "/",
                secure: process.env.NODE_ENV === "production",
                sameSite: "lax",
            });

            router.push("/dashboard");
        } catch (err: any) {
            setError(err.message || "Register failed");
            throw err;
        } finally {
            setLoading(false);
        }
    }

    function logout() {
        setUser(null);
        deleteCookie("auth-token");
    }

    return {
        user,
        loading,
        error,
        login,
        register,
        logout,
        isAuthenticated: !!user,
    };
}
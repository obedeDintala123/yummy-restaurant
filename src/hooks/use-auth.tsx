import { useState } from "react";
import { useRouter } from "next/navigation";
import { setCookie, deleteCookie } from "cookies-next";

type User = {
    name?: string;
    email: string;
    password?: string;
};

export function useAuth() {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    // Simulação de login
    async function login(email: string, password: string) {
        setLoading(true);
        setError(null);
        try {
            await new Promise((res) => setTimeout(res, 1000));
            setUser({ email, password });
            setCookie("auth-token", "true");
            router.push("/dashboard");
        } catch (err) {
            setError("Login failed");
        } finally {
            setLoading(false);
        }
    }

    // Simulação de registro
    async function register(name: string, email: string, password: string) {
        setLoading(true);
        setError(null);
        try {
            // Aqui você faria a chamada real para sua API de registro
            await new Promise((res) => setTimeout(res, 1000));
            setUser({ name, email, password });
            setCookie("auth-token", "true");
            router.push("/dashboard");
        } catch (err) {
            setError("Register failed");
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
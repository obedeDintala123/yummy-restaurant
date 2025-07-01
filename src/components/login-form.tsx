"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/hooks/use-auth";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

const loginSchema = z.object({
    email: z.string().email("Enter a valid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export function LoginForm() {
    const { login, loading, error } = useAuth();
    const [formError, setFormError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
    });

    async function onSubmit(data: LoginFormValues) {
        setFormError(null);
        try {
            await login(data.email, data.password);
            toast.success("Login successful!", {
                style: { color: "#16a34a" },
                description: (
                    <span className="text-black">
                        Welcome back, ${data.email}!
                    </span>
                ),
            });
        } catch (err: any) {
            const message = err?.message || error || "Login failed";
            setFormError(message);
            toast.error("Login failed", {
                style: { color: "#cc0000" },
                description: (
                    <span className="text-black">
                        {message}
                    </span>
                ),
            });
        }
    }
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-[90%] md:w-1/3 p-6 flex flex-col gap-4"
            method="POST"
        >
            <h2 className="text-2xl font-semibold mb-4 text-center">Welcome back</h2>

            <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                    type="email"
                    {...register("email")}
                    className="w-full border rounded px-3 py-2"
                    disabled={loading}
                />
                {errors.email && (
                    <span className="text-red-500 text-xs">{errors.email.message}</span>
                )}
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Password</label>
                <input
                    type="password"
                    {...register("password")}
                    className="w-full border rounded px-3 py-2"
                    disabled={loading}
                />
                {errors.password && (
                    <span className="text-red-500 text-xs">{errors.password.message}</span>
                )}
            </div>

            <Button
                type="submit"
                className="bg-yummy-primary text-white font-semibold py-2 rounded mt-2 disabled:opacity-60"
                disabled={loading}
            >
                {loading ? "Logging in..." : "Login"}
            </Button>

            <div className="text-center text-sm mt-4">
                {"Don't have an account? "}
                <a href="/register" className="text-yummy-primary font-semibold hover:underline">
                    Sign up
                </a>
            </div>
        </form>
    );
}
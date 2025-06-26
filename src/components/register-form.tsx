"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/hooks/use-auth";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

const registerSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Enter a valid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

type RegisterFormValues = z.infer<typeof registerSchema>;

export default function RegisterForm() {
    const { register: registerUser, loading, error } = useAuth();
    const [formError, setFormError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterFormValues>({
        resolver: zodResolver(registerSchema),
    });

    async function onSubmit(data: RegisterFormValues) {
        setFormError(null);
        try {
            await registerUser(data.name, data.email, data.password);
            toast("Registration successful!", {
                description: `Welcome, ${data.name}!`,
            });
        } catch (err: any) {
            setFormError("Registration failed");
            toast("Registration failed", {
                description: "Please check your data and try again.",
                action: {
                    label: "Retry",
                    onClick: () => { },
                },
            });
        }
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-sm mx-auto p-6 bg-white rounded-xl shadow flex flex-col gap-4"
        >
            <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>

            <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                    type="text"
                    {...register("name")}
                    className="w-full border rounded px-3 py-2"
                    disabled={loading}
                />
                {errors.name && (
                    <span className="text-red-500 text-xs">{errors.name.message}</span>
                )}
            </div>

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

            {formError && <div className="text-red-500 text-sm">{formError}</div>}
            {error && <div className="text-red-500 text-sm">{error}</div>}

            <Button
                type="submit"
                className="bg-yummy-primary text-white font-semibold py-2 rounded mt-2 disabled:opacity-60"
                disabled={loading}
            >
                {loading ? "Registering..." : "Register"}
            </Button>
        </form>
    );
}
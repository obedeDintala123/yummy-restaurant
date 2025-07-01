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
    address: z.string().min(5, "Address is required"),
    phone: z.string().min(8, "Phone is required"),
    creditCard: z.string().min(12, "Credit card is required"),
});

type RegisterFormValues = z.infer<typeof registerSchema>;

export function RegisterForm() {
    const { register: registerUser, loading, error } = useAuth();
    const [formError, setFormError] = useState<string | null>(null);
    const [countryCode, setCountryCode] = useState("+244"); // Angola como padrão


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterFormValues>({
        resolver: zodResolver(registerSchema),
    });

    async function onSubmit(data: RegisterFormValues) {
        setFormError(null);

        const fullPhoneNumber = `${countryCode}${data.phone}`;

        try {
            await registerUser(
                data.name,
                data.email,
                data.password,
                data.address,
                fullPhoneNumber,
                data.creditCard
            );

            toast.success("Registration successful!", {
                style: { color: "#16a34a" },
                description: (
                    <span className="text-black">
                        Welcome, {data.name}!
                    </span>
                ),
            });

        } catch (err: any) {
            const message = err?.message || error || "Registration failed";
            setFormError("Registration failed");
            toast.error("Registration failed", {
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
            className="w-[90%] md:w-1/2 p-6 flex flex-col gap-4"
        >
            <h2 className="text-2xl font-semibold mb-4 text-center">Create an account</h2>

            <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
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
                <div className="flex-1">
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
            </div>

            <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
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
                <div className="flex-1">
                    <label className="block text-sm font-medium mb-1">Address</label>
                    <input
                        type="text"
                        {...register("address")}
                        className="w-full border rounded px-3 py-2"
                        disabled={loading}
                    />
                    {errors.address && (
                        <span className="text-red-500 text-xs">{errors.address.message}</span>
                    )}
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                    <label className="block text-sm font-medium mb-1">Phone</label>

                    <div className="flex gap-2">
                        <select
                            value={countryCode}
                            onChange={(e) => setCountryCode(e.target.value)}
                            disabled={loading}
                            className="border rounded px-2 py-2 bg-white text-sm"
                        >
                            <option value="+244">+244 (AO)</option>
                            <option value="+55">+55 (BR)</option>
                            <option value="+351">+351 (PT)</option>
                            <option value="+33">+33 (FR)</option>
                            <option value="+1">+1 (US)</option>
                            {/* Adicione outros se quiser */}
                        </select>

                        <input
                            type="text"
                            {...register("phone")}
                            className="w-full border rounded px-3 py-2"
                            placeholder="Número do WhatsApp"
                            disabled={loading}
                        />
                    </div>

                    {errors.phone && (
                        <span className="text-red-500 text-xs">{errors.phone.message}</span>
                    )}
                </div>

                <div className="flex-1">
                    <label className="block text-sm font-medium mb-1">Credit Card</label>
                    <input
                        type="text"
                        {...register("creditCard")}
                        className="w-full border rounded px-3 py-2"
                        disabled={loading}
                    />
                    {errors.creditCard && (
                        <span className="text-red-500 text-xs">{errors.creditCard.message}</span>
                    )}
                </div>
            </div>

            <Button
                type="submit"
                className="bg-yummy-primary text-white font-semibold py-2 rounded mt-2 disabled:opacity-60"
                disabled={loading}
            >
                {loading ? "Registering..." : "Register"}
            </Button>

            <div className="text-center text-sm mt-4">
                {"Already have an account? "}
                <a href="/login" className="text-yummy-primary font-semibold hover:underline">
                    Sign in
                </a>
            </div>
        </form>
    );
}
"use client";

import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { getCookie } from "cookies-next";
import { jwtDecode } from "jwt-decode";
import { useMemo } from "react";
import { ArrowLeft } from "lucide-react";
import { apiRequest } from "@/lib/api";
import { toast } from "sonner";
import { useRouter } from "next/navigation";


const orderSchema = z.object({
    productName: z.string().min(1, "Product name is required"),
    price: z.number().min(0.01, "Price must be greater than zero"),
    date: z.string().min(1, "Date is required"),
});

type OrderFormValues = z.infer<typeof orderSchema>;

type OrderFormProps = {
    onSuccess?: () => void;
    product?: {
        productName: string;
        price: number;
    };
};

const OrderForm = ({ onSuccess, product }: OrderFormProps) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();

    function sendWhatsAppMessage(phone: string, message: string) {
        const formatted = phone.replace(/[^0-9]/g, ""); // Remove espaços, + e parênteses
        const url = `https://wa.me/${formatted}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    }

    const userInfo = useMemo(() => {
        let name = "";
        let email = "";
        let userId = null;
        let phone = "";
        try {
            const tokenData = getCookie("auth-token");
            if (tokenData && typeof tokenData === "string") {
                const parsed = JSON.parse(tokenData);
                if (parsed.token) {
                    const decoded: any = jwtDecode(parsed.token);
                    name = decoded.name || "";
                    email = decoded.email || "";
                    userId = decoded.userId;
                    phone = decoded.phone || ""; // ADICIONADO
                }
            }
        } catch { }
        return { name, email, userId, phone }; // ADICIONADO
    }, []);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<OrderFormValues>({
        resolver: zodResolver(orderSchema),
        defaultValues: {
            productName: product?.productName ?? "",
            price: product?.price ?? 0,
        },
    });

    const onSubmit = (data: OrderFormValues) => {
        if (!userInfo.userId) {
            toast.error("User not authenticated");
            return;
        }

        setIsSubmitting(true);

        const payload = {
            userId: userInfo.userId,
            productName: data.productName,
            price: data.price,
            date: data.date,
        };

        apiRequest("/api/orders", "POST", payload)
            .then(() => {
                toast.success("Order created successfully!", {
                    style: { color: "#16a34a" },
                    duration: 1000,
                });

                closeForm();

                sendWhatsAppMessage(
                    userInfo.phone,
                    `✅ Hello ${userInfo.name}, your order for the product "${data.productName}" totaling ${data.price} USD has been confirmed for ${data.date}. Thank you for using Yummy Restaurant! 🍽️`
                );


            })
            .catch((err) => {
                toast.error("Error creating order", {
                    style: { color: "#cc0000" },
                    description: (
                        <span className="text-black">
                            {err?.message || "Unknown error"}
                        </span>
                    ),
                });
            })
            .finally(() => setIsSubmitting(false));
    };

    const closeForm = () => {

        setTimeout(() => {
            router.push("/dashboard/orders");
        }, 900);

        if (onSuccess) {
            setTimeout(() => {
                onSuccess();
            }, 1000);
        }
    };

    return (
        <form
            className="w-full md:w-[60%] flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold mb-2 text-yummy-terciary">
                    New Order
                </h2>

                <button
                    type="button"
                    title="back"
                    className="flex items-center gap-2 cursor-pointer text-yummy-primary hover:underline"
                    onClick={closeForm}
                >
                    <ArrowLeft size={20} />
                    <span>Voltar</span>
                </button>
            </div>

            <input
                type="text"
                placeholder="Product Name"
                {...register("productName")}
                className="border rounded px-3 py-2 bg-gray-100"
                disabled
            />
            {errors.productName && (
                <span className="text-red-500 text-xs">
                    {errors.productName.message}
                </span>
            )}

            <input
                type="number"
                placeholder="Price"
                {...register("price", { valueAsNumber: true })}
                className="border rounded px-3 py-2 bg-gray-100"
                step="0.01"
                disabled
            />
            {errors.price && (
                <span className="text-red-500 text-xs">{errors.price.message}</span>
            )}

            <input
                type="date"
                {...register("date")}
                className="border rounded px-3 py-2"
            />
            {errors.date && (
                <span className="text-red-500 text-xs">{errors.date.message}</span>
            )}

            <button
                type="submit"
                disabled={isSubmitting}
                className="bg-yummy-primary text-white font-semibold py-2 rounded cursor-pointer flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {isSubmitting ? (
                    <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                ) : (
                    "Create Order"
                )}
            </button>
        </form>
    );
};

const reservationSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Enter a valid email"),
    date: z.string().min(1, "Date is required"),
    time: z.string().min(1, "Time is required"),
    peopleCount: z.number().min(1, "At least 1 person"),
});

type ReservationFormValues = z.infer<typeof reservationSchema>;

const ReservationForm = ({ onSuccess }: { onSuccess?: () => void }) => {

    const [isSubmitting, setIsSubmitting] = useState(false);

    function sendWhatsAppMessage(phone: string, message: string) {
        const formatted = phone.replace(/[^0-9]/g, ""); // Remove espaços, + e parênteses
        const url = `https://wa.me/${formatted}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    }

    const userInfo = useMemo(() => {
        let name = "";
        let email = "";
        let userId = null;
        let phone = "";
        try {
            const tokenData = getCookie("auth-token");
            if (tokenData && typeof tokenData === "string") {
                const parsed = JSON.parse(tokenData);
                if (parsed.token) {
                    const decoded: any = jwtDecode(parsed.token);
                    name = decoded.name || "";
                    email = decoded.email || "";
                    userId = decoded.userId;
                    phone = decoded.phone || ""; // ADICIONADO
                }
            }
        } catch { }
        return { name, email, userId, phone }; // ADICIONADO
    }, []);


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ReservationFormValues>({
        resolver: zodResolver(reservationSchema),
        defaultValues: {
            name: userInfo.name,
            email: userInfo.email,
        },
    });

    function onSubmit(data: ReservationFormValues) {

        setIsSubmitting(true);

        const dateTime = `${data.date}T${data.time}`;
        const payload = {
            userId: userInfo.userId,
            date: dateTime,
            peopleCount: data.peopleCount,
        };
        apiRequest("/api/reservations", "POST", payload)
            .then(() => {

                toast.success("Reservation created successfully!", {
                    style: {
                        color: "#16a34a"
                    },
                    duration: 1000
                });

                closeForm();

                sendWhatsAppMessage(
                    userInfo.phone,
                    `✅ Hello ${userInfo.name}, your reservation for ${data.peopleCount} person(s) has been confirmed for ${data.date} at ${data.time}. Thank you for choosing Yummy Restaurant! 🥂`
                );


            })
            .catch((err) => {
                toast.error("Error creating reservation", {
                    style: { color: "#cc0000" },
                    description: (
                        <span className="text-black">
                            {err?.message || "Unknown error"}
                        </span>
                    ),
                });
            })

            .finally(() => setIsSubmitting(false));
    }

    const closeForm = () => {
        if (onSuccess) {
            setTimeout(() => {
                onSuccess();
            }, 1000);
        }
    }

    return (
        <form className="w-full md:w-[60%] flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold mb-2 text-yummy-terciary">New Reservation</h2>

                <button title="back" className="flex items-center gap-2 cursor-pointer text-yummy-primary hover:underline" onClick={() => closeForm()}>
                    <ArrowLeft size={20} />
                    <span>Voltar</span>
                </button>
            </div>
            <input
                type="text"
                placeholder="Name"
                {...register("name")}
                className="border rounded px-3 py-2 bg-gray-100"
                disabled
            />
            {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}

            <input
                type="email"
                placeholder="Email"
                {...register("email")}
                className="border rounded px-3 py-2 bg-gray-100"
                disabled
            />
            {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}

            <input
                type="date"
                {...register("date")}
                className="border rounded px-3 py-2"
            />
            {errors.date && <span className="text-red-500 text-xs">{errors.date.message}</span>}

            <input
                type="time"
                {...register("time")}
                className="border rounded px-3 py-2"
            />
            {errors.time && <span className="text-red-500 text-xs">{errors.time.message}</span>}

            <input
                type="number"
                placeholder="Number of people"
                {...register("peopleCount", { valueAsNumber: true })}
                className="border rounded px-3 py-2"
                min={1}
            />
            {errors.peopleCount && <span className="text-red-500 text-xs">{errors.peopleCount.message}</span>}

            <button
                type="submit"
                disabled={isSubmitting}
                className="bg-yummy-primary text-white font-semibold py-2 rounded cursor-pointer flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {isSubmitting ? (
                    <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                ) : (
                    "Reserve"
                )}
            </button>
        </form>
    );
};

export { ReservationForm, OrderForm };
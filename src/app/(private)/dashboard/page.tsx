"use client";

import { useEffect, useMemo, useState } from "react";
import { getCookie } from "cookies-next";
import { jwtDecode } from "jwt-decode";
import { ProductCard } from "@/components/cards";
import { Button } from "@/components/ui/button";
import { apiRequest } from "@/lib/api";

type Product = {
    title: string;
    src: string;
    description: string;
    price: number;
};

type Order = {
    id: string;
    productName: string;
    date: string;
    price: number;
};

type Reservation = {
    id: string;
    date: string;
    peopleCount: number;
};

export default function DashboardPage() {
    const [mainDishes, setMainDishes] = useState<Product[]>([]);
    const [orders, setOrders] = useState<Order[]>([]);
    const [reservation, setReservation] = useState<Reservation | null>(null);
    const [loading, setLoading] = useState(true);

    const user = useMemo(() => {
        try {
            const tokenData = getCookie("auth-token");
            if (tokenData && typeof tokenData === "string") {
                const parsed = JSON.parse(tokenData);
                if (parsed.token) {
                    const decoded: any = jwtDecode(parsed.token);
                    return {
                        name: decoded.name || "",
                    };
                }
            }
        } catch { }
    }, []);

    useEffect(() => {
        async function fetchDashboardData() {
            try {
                const data = await apiRequest("/api/dashboard");
                setMainDishes(data.menus || []);
                setOrders(data.recentOrders || []);
                setReservation(data.recentReservation || null);
            } catch (error: any) {
                console.error("Erro ao buscar dados do dashboard:", error.message);
            } finally {
                setLoading(false); 
            }
        }

        fetchDashboardData();
    }, []);

    if (loading) {
        return (
            <div className="h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-10 w-10 border-4 border-yummy-primary border-t-transparent"></div>
            </div>
        );
    }

    return (
        <div className="px-4 md:px-10 my-6 text-yummy-terciary">
            <h1 className="text-3xl font-bold mb-2">Hello, {user?.name} 👋</h1>
            <p className="text-gray-600 mb-8">
                Check your reservations, orders, and suggestions for your next meal!
            </p>

            {/* Next Reservation */}
            <section className="mb-10">
                <h2 className="text-xl font-semibold mb-2">Your next reservation</h2>
                {reservation ? (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <div>
                                <span className="block font-medium text-green-800">
                                    {new Date(reservation.date).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "short",
                                        day: "2-digit",
                                        hour: "2-digit",
                                        minute: "2-digit"
                                    })}
                                </span>
                                <span className="block text-sm text-green-700">
                                    {reservation.peopleCount} people • Status:
                                    <span
                                        className="ml-1 font-semibold text-green-700"
                                    >
                                        Confirmed
                                    </span>
                                </span>
                            </div>
                            <Button className="mt-3 md:mt-0" variant="outline">
                                View details
                            </Button>
                        </div>
                    </div>
                ) : (
                    <div className="text-gray-500 mb-4">
                        You haven't made any reservations yet.
                    </div>
                )}
                <Button className="w-full md:w-auto bg-yummy-primary">
                    Make a new reservation
                </Button>
            </section>

            {/* Recent Orders */}
            <section className="mb-10">
                <h2 className="text-xl font-semibold mb-2">Your recent orders</h2>
                {orders.length > 0 ? (
                    <div className="space-y-3">
                        {orders.map((order) => (
                            <div
                                key={order.id}
                                className="bg-white border rounded-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between"
                            >
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="font-semibold text-yummy-primary text-base">Order #{order.id}</span>
                                        <span className="text-xs text-gray-400">
                                            {new Date(order.date).toLocaleDateString("en-US", {
                                                year: "numeric",
                                                month: "short",
                                                day: "2-digit",
                                                hour: "2-digit",
                                                minute: "2-digit"
                                            })}
                                        </span>
                                    </div>

                                    <div className="flex flex-col gap-2 mt-3">
                                        <span className="font-medium text-yummy-terciary text-lg">{order.productName}</span>
                                        <span className="font-semibold text-yummy-terciary text-base">
                                            ${order.price}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 mt-2 md:mt-0">

                                    <span
                                        className="ml-1 font-semibold text-green-700"
                                    >
                                        Delivered
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-gray-500 mb-4">
                        You haven't placed any orders yet.
                    </div>
                )}
                <Button className="w-full md:w-auto mt-4 bg-yummy-primary">
                    Make a new order
                </Button>
            </section>

            {/* Dish Suggestions */}
            <section>
                <h2 className="text-xl font-semibold mb-2">Suggestions for you</h2>
                <div className="flex flex-wrap gap-6">
                    {mainDishes.map((dish, idx) => (
                        <div key={idx} className="w-full sm:w-64">
                            <ProductCard
                                title={dish.title}
                                src={dish.src}
                                description={dish.description}
                                price={dish.price}
                            />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

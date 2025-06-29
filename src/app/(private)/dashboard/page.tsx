"use client";

import { useMemo, useState } from "react";
import { getCookie } from "cookies-next";
import { jwtDecode } from "jwt-decode";
import { ProductCard } from "@/components/cards";
import { Button } from "@/components/ui/button";

type Product = {
    title: string;
    src: string;
    description: string;
    price: number;
};

type Order = {
    id: string;
    items: string[];
    total: number;
    status: string;
};

type Reservation = {
    id: string;
    date: string;
    people: number;
    status: string;
};

const mainDishes: Product[] = [
    { title: "Spaghetti Carbonara", src: "/product1.jpg", description: "Classic Italian pasta.", price: 32 },
    { title: "Grilled Salmon", src: "/product2.jpg", description: "Fresh salmon with herbs.", price: 45 },
    { title: "Chicken Parmesan", src: "/product3.jpg", description: "Breaded chicken with cheese.", price: 38 },
];

const orders: Order[] = [
    { id: "ORD-001", items: ["Spaghetti Carbonara", "Grilled Salmon"], total: 77, status: "Delivered" },
    { id: "ORD-002", items: ["Chicken Parmesan"], total: 38, status: "In Progress" },
];

const reservations: Reservation[] = [
    { id: "RES-001", date: "2025-06-28 19:00", people: 2, status: "Confirmed" },
    { id: "RES-002", date: "2025-07-01 20:30", people: 4, status: "Pending" },
];

export default function DashboardPage() {
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
        } catch {
            
        }

    }, []);

    return (
        <div className="px-4 md:px-10 my-6 text-yummy-terciary">
            <h1 className="text-3xl font-bold mb-2">Hello, {user?.name} 👋</h1>
            <p className="text-gray-600 mb-8">Check your reservations, orders, and suggestions for your next meal!</p>

            {/* Next Reservation */}
            <section className="mb-10">
                <h2 className="text-xl font-semibold mb-2">Your next reservation</h2>
                {reservations.length > 0 ? (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <div>
                                <span className="block font-medium text-green-800">
                                    {reservations[0].date}
                                </span>
                                <span className="block text-sm text-green-700">
                                    {reservations[0].people} people • Status:
                                    <span className={`ml-1 font-semibold ${reservations[0].status === "Confirmed" ? "text-green-700" : "text-yellow-700"}`}>
                                        {reservations[0].status}
                                    </span>
                                </span>
                            </div>
                            <Button className="mt-3 md:mt-0" variant="outline">
                                View details
                            </Button>
                        </div>
                    </div>
                ) : (
                    <div className="text-gray-500 mb-4">You haven't made any reservations yet.</div>
                )}
                <Button className="w-full md:w-auto bg-yummy-primary">Make a new reservation</Button>
            </section>

            {/* Recent Orders */}
            <section className="mb-10">
                <h2 className="text-xl font-semibold mb-2">Your recent orders</h2>
                {orders.length > 0 ? (
                    <div className="space-y-3">
                        {orders.map((order) => (
                            <div key={order.id} className="bg-white border rounded-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between">
                                <div>
                                    <span className="font-medium">Order #{order.id}</span>
                                    <div className="text-sm text-gray-600">{order.items.join(", ")}</div>
                                </div>
                                <div className="flex items-center gap-4 mt-2 md:mt-0">
                                    <span className="font-semibold text-yummy-primary">${order.total.toFixed(2)}</span>
                                    <span className={`px-2 py-1 rounded text-xs ${order.status === "Delivered" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
                                        {order.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-gray-500 mb-4">You haven't placed any orders yet.</div>
                )}
                <Button className="w-full md:w-auto mt-4 bg-yummy-primary">Make a new order</Button>
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
"use client";

import { useEffect, useState } from "react";
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
    name: string;
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
    { id: "RES-001", name: "Maria Silva", date: "2025-06-28 19:00", people: 2, status: "Confirmed" },
    { id: "RES-002", name: "João Souza", date: "2025-07-01 20:30", people: 4, status: "Pending" },
];

export default function DashboardPage() {
    const [userName, setUserName] = useState("John Doe");

    useEffect(() => {
        // Aqui você pode buscar dados reais do usuário/autenticação
        setUserName("John Doe");
    }, []);

    return (
        <div className="px-8 max-w-5xl mt-10">
            <h1 className="text-3xl font-bold mb-2">Welcome, {userName}!</h1>
            <p className="text-gray-600 mb-8">Here is your dashboard overview.</p>

            {/* Main Dishes */}
            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">Main Dishes</h2>
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

            {/* Orders */}
            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">Your Orders</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white rounded shadow">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 text-left">Order ID</th>
                                <th className="py-2 px-4 text-left">Items</th>
                                <th className="py-2 px-4 text-left">Total</th>
                                <th className="py-2 px-4 text-left">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => (
                                <tr key={order.id} className="border-t">
                                    <td className="py-2 px-4">{order.id}</td>
                                    <td className="py-2 px-4">{order.items.join(", ")}</td>
                                    <td className="py-2 px-4">R$ {order.total.toFixed(2)}</td>
                                    <td className="py-2 px-4">
                                        <span className={`px-2 py-1 rounded text-xs ${order.status === "Delivered" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
                                            {order.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Reservations */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Your Reservations</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white rounded shadow">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 text-left">Reservation ID</th>
                                <th className="py-2 px-4 text-left">Name</th>
                                <th className="py-2 px-4 text-left">Date</th>
                                <th className="py-2 px-4 text-left">People</th>
                                <th className="py-2 px-4 text-left">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reservations.map((res) => (
                                <tr key={res.id} className="border-t">
                                    <td className="py-2 px-4">{res.id}</td>
                                    <td className="py-2 px-4">{res.name}</td>
                                    <td className="py-2 px-4">{res.date}</td>
                                    <td className="py-2 px-4">{res.people}</td>
                                    <td className="py-2 px-4">
                                        <span className={`px-2 py-1 rounded text-xs ${res.status === "Confirmed" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
                                            {res.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}
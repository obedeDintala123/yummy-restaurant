"use client";

import { OrderCardList } from "@/components/cards";
export default function Orders() {

  const orders = [
    { id: "001", items: ["Spaghetti Carbonara", "Grilled Salmon"], total: 77, status: "Delivered" },
    { id: "002", items: ["Chicken Parmesan"], total: 38, status: "In progress" },
  ];


  return (
    <div className="px-10 mt-10 w-full">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-semibold text-yummy-terciary mb-2">My Orders</h1>
          <p className="mb-6 text-gray-600">See your order history below.</p>
        </div>

        <button title="new-order" className="bg-yummy-primary p-3 rounded-md font-semibold text-white text-sm">New order</button>
      </div>

      {/* Example order list */}
      <OrderCardList
        orders={orders}
        onViewDetails={(order) => alert(`Order: ${order.id}`)}
      />
    </div>
  );
}
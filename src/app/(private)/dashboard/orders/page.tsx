"use client";

import { OrderCardList } from "@/components/cards";
import { Plus } from "lucide-react";
import { useScreenType } from "@/hooks/screenType";
export default function Orders() {

  const screen = useScreenType();

  const orders = [
    { id: "001", items: ["Spaghetti Carbonara", "Grilled Salmon"], total: 77, status: "Delivered" },
    { id: "002", items: ["Chicken Parmesan"], total: 38, status: "In progress" },
  ];

  return (
    <div className="px-4 md:px-10 mt-10 w-full">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl md:text-3xl font-semibold text-yummy-terciary mb-2">My Orders</h1>
          <p className="text-xs mb-6 text-gray-600">See your order history below.</p>
        </div>

        {screen === "mobile" ? (
          <button title="new-order" className="bg-yummy-primary p-2 rounded-md font-semibold text-white text-sm">
            <Plus size={16} />
          </button>
        ) :
          (<button title="new-order" className="bg-yummy-primary p-3 rounded-md font-semibold text-white text-sm">New order</button>)
        }
      </div>

      {/* Example order list */}
      <OrderCardList
        orders={orders}
        onViewDetails={(order) => alert(`Order: ${order.id}`)}
      />
    </div >
  );
}
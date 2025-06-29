"use client";

import { OrderCardList } from "@/components/cards";
import { Plus } from "lucide-react";
import { useScreenType } from "@/hooks/screenType";
import { useState, useEffect } from "react";
import { apiRequest } from "@/lib/api";
import { OrderForm } from "@/components/forms";
import { Toaster } from "@/components/ui/sonner";

export default function Orders() {
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState<any[]>([]);
  const screen = useScreenType();

  useEffect(() => {
    const fetchOrders = () => {
      apiRequest("/api/orders")
        .then(setOrders)
        .finally(() => setLoading(false));
    };

    fetchOrders();

    const interval = setInterval(fetchOrders, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-4 md:px-10 my-10 w-full">
      {
        showOrderForm ? (
          <div className="mt-20 w-full flex justify-center items-center">
            <OrderForm onSuccess={() => setShowOrderForm(false)} />
          </div>
        ) : (
          <div>
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-xl md:text-3xl font-semibold text-yummy-terciary mb-2">My Orders</h1>
                <p className="text-xs mb-6 text-gray-600">See your order history below.</p>
              </div>

              {screen === "mobile" ? (
                <button title="new-order" className="bg-yummy-primary p-2 rounded-md font-semibold text-white text-sm cursor-pointer" onClick={() => setShowOrderForm(true)}>
                  <Plus size={16} />
                </button>
              ) : (
                <button title="new-order" className="bg-yummy-primary px-4 py-2 rounded-sm font-medium text-white text-sm cursor-pointer" onClick={() => setShowOrderForm(true)}>
                  New order
                </button>
              )}
            </div>

            {loading ? (
              <div className="text-center text-gray-500">Loading...</div>
            ) : (
              <OrderCardList orders={orders}  onViewDetails={(res) => alert(`Order ID: ${res.id}`)}/>
            )}
          </div>
        )
      }

      <Toaster />
    </div>
  );
}

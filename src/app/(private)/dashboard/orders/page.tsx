"use client";

import { OrderCardList } from "@/components/cards";
import { Plus } from "lucide-react";
import { useScreenType } from "@/hooks/screenType";
import { useState, useEffect, useMemo } from "react";
import { apiRequest } from "@/lib/api";
import { OrderForm } from "@/components/forms";
import { Toaster } from "@/components/ui/sonner";
import { useRouter } from "next/navigation";
import { getCookie } from "cookies-next";
import { jwtDecode } from "jwt-decode";

export default function Orders() {
  const router = useRouter();
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState<any[]>([]);
  const screen = useScreenType();

  const user = useMemo(() => {
    try {
      const tokenData = getCookie("auth-token");
      if (tokenData && typeof tokenData === "string") {
        const parsed = JSON.parse(tokenData);
        if (parsed.token) {
          const decoded: any = jwtDecode(parsed.token);
          return {
            id: decoded.userId || "", // cuidado: no seu backend você usou userId, não id
            name: decoded.name || "",
          };
        }
      }
    } catch (error) {
      console.error("Token decode error:", error);
    }
    return null;
  }, []);


  useEffect(() => {
    if (!user?.id) return;

    const fetchOrders = () => {
      apiRequest(`/api/orders/${user.id}`)
        .then(setOrders)
        .finally(() => setLoading(false));
    };

    fetchOrders();

    const interval = setInterval(fetchOrders, 1000);
    return () => clearInterval(interval);
  }, [user?.id]);


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
                <button title="new-order" className="bg-yummy-primary p-2 rounded-md font-semibold text-white text-sm cursor-pointer" onClick={() => router.push("/dashboard/menu")}>
                  <Plus size={16} />
                </button>
              ) : (
                <button title="new-order" className="bg-yummy-primary px-4 py-2 rounded-sm font-medium text-white text-sm cursor-pointer" onClick={() => router.push("/dashboard/menu")}>
                  New order
                </button>
              )}
            </div>

            {loading ? (
              <div className="min-h-[60vh] flex items-center justify-center">
                <div className="animate-spin rounded-full h-10 w-10 border-4 border-yummy-primary border-t-transparent"></div>
              </div>
            ) : (
              <div className="overflow-y-auto h-[70vh] mt-5">
                <OrderCardList orders={orders} onViewDetails={(res) => alert(`Order ID: ${res.id}`)} />
              </div>
            )}
          </div>
        )
      }

      <Toaster />
    </div>
  );
}

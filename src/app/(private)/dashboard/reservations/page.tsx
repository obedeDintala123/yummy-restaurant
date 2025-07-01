"use client";

import { ReservationCardList } from "@/components/cards";
import { Plus } from "lucide-react";
import { useScreenType } from "@/hooks/screenType";
import { useEffect, useState, useMemo } from "react";
import { apiRequest } from "@/lib/api";
import { ReservationForm } from "@/components/forms";
import { Toaster } from "@/components/ui/sonner";
import { getCookie } from "cookies-next";
import { jwtDecode } from "jwt-decode";

export default function Reservations() {

    const screen = useScreenType();

    const [reservations, setReservations] = useState<any[]>([]);
    const [showReservationForm, setShowReservationForm] = useState(false);
    const [loading, setLoading] = useState(true);

    const user = useMemo(() => {
        try {
            const tokenData = getCookie("auth-token");
            if (tokenData && typeof tokenData === "string") {
                const parsed = JSON.parse(tokenData);
                if (parsed.token) {
                    const decoded: any = jwtDecode(parsed.token);
                    return {
                        id: decoded.userId || "",
                        name: decoded.name || "",
                    };
                }
            }
        } catch { }
    }, []);

    useEffect(() => {
        const fetchReservations = () => {
            apiRequest(`/api/reservations/${user?.id}`)
                .then(setReservations)
                .finally(() => setLoading(false));
        };

        fetchReservations();

        const interval = setInterval(fetchReservations, 1000);

        return () => clearInterval(interval);
    }, []);


    return (
        <div className="px-4 md:px-10 my-10 w-full">

            {
                showReservationForm ? (
                    <div className="mt-20 w-full flex justify-center items-center">
                        <ReservationForm onSuccess={() => setShowReservationForm(false)} />
                    </div>
                ) : (
                    <div>
                        <div className="w-ful flex justify-between items-center">
                            <div>
                                <h1 className="text-xl md:text-3xl font-semibold text-yummy-terciary mb-2">My Reservations</h1>
                                <p className="mb-6 text-xs text-gray-600">View, edit or cancel your reservations below.</p>
                            </div>

                            {screen === "mobile" ? (
                                <button title="new-order" className="bg-yummy-primary p-2 rounded-md font-semibold text-white text-sm" onClick={() => setShowReservationForm(true)}>
                                    <Plus size={16} />
                                </button>
                            ) : (
                                <button title="new-order" className="bg-yummy-primary px-4 py-2 rounded-sm font-medium text-white text-sm cursor-pointer" onClick={() => setShowReservationForm(true)}>
                                    New reservation
                                </button>
                            )}
                        </div>
                        {
                            loading ? (
                                <div className="min-h-[60vh] flex items-center justify-center">
                                    <div className="animate-spin rounded-full h-10 w-10 border-4 border-yummy-primary border-t-transparent"></div>
                                </div>
                            ) : (
                                <div className="overflow-y-auto h-[70vh] mt-5">
                                    <ReservationCardList
                                        reservations={reservations}
                                        onViewDetails={(res) => alert(`Reservation ID: ${res.id}`)}
                                    />
                                </div>
                            )
                        }
                    </div >
                )
            }

            <Toaster />
        </div >
    );
}
"use client";

import { ReservationCardList } from "@/components/cards";
import { Plus } from "lucide-react";
import { useScreenType } from "@/hooks/screenType";
import { useEffect, useState } from "react";
import { apiRequest } from "@/lib/api";
import { ReservationForm } from "@/components/forms";
import { Toaster } from "@/components/ui/sonner";

export default function Reservations() {

    const screen = useScreenType();

    const [reservations, setReservations] = useState<any[]>([]);
    const [showReservationForm, setShowReservationForm] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchReservations = () => {
            apiRequest("/api/reservations")
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
                                <div className="w-full flex justify-center py-10" >
                                    <span className="text-gray-400 text-sm">Loading reservations...</span>
                                </div>
                            ) : (
                                <ReservationCardList
                                    reservations={reservations}
                                    onViewDetails={(res) => alert(`Reservation ID: ${res.id}`)}
                                />
                            )
                        }
                    </div >
                )
            }

            <Toaster />
        </div >
    );
}
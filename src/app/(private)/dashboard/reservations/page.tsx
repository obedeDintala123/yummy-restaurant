"use client";

import { ReservationCardList } from "@/components/cards";

export default function Reservations() {

    const reservations = [
        { id: "1", date: "06/28/2025 at 19:00", people: 2, status: "Confirmed" },
        { id: "2", date: "07/01/2025 at 20:30", people: 4, status: "Pending" },
    ];

    return (
        <div className="px-10 mt-10 w-full">
            <div className="w-ful flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-semibold text-yummy-terciary mb-2">My Reservations</h1>
                    <p className="mb-6 text-gray-600">View, edit or cancel your reservations below.</p>
                </div>

                <button title="new-reservation" className="text-sm bg-yummy-primary p-3 cursor-pointer text-white font-semibold rounded-md">New reservation</button>
            </div>

            {/* Example reservation list */}
            <ReservationCardList
                reservations={reservations}
                onViewDetails={(res) => alert(`Reservation: ${res.id}`)}
            />

        </div>
    );
}
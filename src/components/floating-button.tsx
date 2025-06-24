"use client"

import { useState } from "react";
import { Phone } from "lucide-react";

export const FloatingButton = () => {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <div className="fixed right-10 bottom-10 z-50 flex justify-center items-center w-16 h-16 rounded-full bg-yummy-primary animate-bounce group">

            {showTooltip && (
                <div className="absolute w-96 right-16 bottom-[80px] translate-y-1/2 flex flex-col items-end z-50">
                    <div className="bg-white text-gray-800 px-4 py-2 rounded-t-lg rounded-bl-lg shadow-lg font-semibold text-sm relative">
                        Chat with us
                    </div>
                </div>
            )}

            <a
                href="https://wa.me/244957532320"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                className="flex justify-center items-center w-full h-full"
            >
                <Phone size={24} className="text-white" />
            </a>
        </div>
    );
};
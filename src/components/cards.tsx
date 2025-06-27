import {
    Card,
    CardHeader,
    CardTitle,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter
} from "./ui/card";

import Image from "next/image";

type Order = {
    id: string;
    items: string[];
    total: number;
    date: string;
    status: "Delivered" | "In progress" | "Canceled" | string;
};

type OrderCardListProps = {
    orders: Order[];
    onViewDetails?: (order: Order) => void;
};

const OrderCardList = ({ orders, onViewDetails }: OrderCardListProps) => {
    return (
        <div className="bg-white rounded-xl shadow-lg p-4 space-y-6">
            {orders.map((order) => (
                <div
                    key={order.id}
                    className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b last:border-b-0 pb-4 last:pb-0"
                >
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="font-semibold text-yummy-primary text-base">Order #{order.id}</span>
                            <span className="text-xs text-gray-400">{order.date}</span>
                        </div>
                        <div className="text-lg font-medium text-yummy-terciary mb-1">
                            {order.items.join(", ")}
                        </div>
                        <div className="flex items-center gap-3 mb-1">
                            <span className="font-semibold text-yummy-primary text-base">
                                ${order.total.toFixed(2)}
                            </span>
                            <span
                                className={`font-semibold text-xs px-2 py-1 rounded 
                                    ${order.status === "Delivered"
                                        ? "bg-green-100 text-green-700"
                                        : order.status === "In progress"
                                            ? "bg-yellow-100 text-yellow-700"
                                            : "bg-gray-100 text-gray-700"
                                    }`}
                            >
                                {order.status}
                            </span>
                        </div>
                    </div>
                    {onViewDetails && (
                        <button
                            className="hidden md:block text-sm cursor-pointer hover:underline text-yummy-primary"
                            onClick={() => onViewDetails(order)}
                        >
                            View details
                        </button>
                    )}
                </div>
            ))}
        </div>
    );
}

type Reservation = {
    id: string;
    date: string;
    people: number;
    status: "Confirmed" | "Pending" | "Canceled" | string;
};

type ReservationCardList = {
    reservations: Reservation[];
    onViewDetails?: (reservation: Reservation) => void;
};

const ReservationCardList = ({ reservations, onViewDetails }: ReservationCardList) => {
    return (
        <div className="bg-white rounded-lg shadow p-4 space-y-4">
            {reservations.map((res) => (
                <div
                    key={res.id}
                    className="flex flex-col md:flex-row md:items-center md:justify-between border-b last:border-b-0 pb-3 last:pb-0"
                >
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <span className="font-semibold text-yummy-primary text-base">Reservation #{res.id}</span>
                            <span className="text-xs text-gray-400">{res.date}</span>
                        </div>
                        <div className="text-sm text-gray-500">
                            {res.people} people • Status:{" "}
                            <span
                                className={`font-semibold ${res.status === "Confirmed"
                                        ? "text-green-700"
                                        : res.status === "Pending"
                                            ? "text-yellow-700"
                                            : "text-gray-700"
                                    }`}
                            >
                                {res.status}
                            </span>
                        </div>
                    </div>
                    <button
                        className="hidden md:block mt-2 md:mt-0 text-sm text-yummy-primary hover:underline"
                        onClick={() => onViewDetails?.(res)}
                    >
                        View details
                    </button>
                </div>
            ))}
        </div>
    );
}

interface ProductCardProps {
    src: string;
    title: string;
    description: string;
    price: number;
}

const ProductCard = ({ src, title, description, price }: ProductCardProps) => {
    return (
        <Card className="mt-4 w-full sm:w-[90%] md:w-[45%] lg:w-full p-0">
            <CardHeader className="p-0">
                <div className="relative w-full h-60 flex items-center justify-center">
                    <Image
                        src={src}
                        alt="product1"
                        fill
                        className="rounded-md object-fill"
                    />
                </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-3 h-12 px-4">
                <CardTitle className="text-xl font-montserrat text-yummy-terciary">{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardContent>
            <CardFooter className="flex justify-between px-4 py-3">
                <span className=" font-montserrat text-xl font-semibold text-yummy-terciary">{price}$</span>
                <button className="bg-yummy-primary px-4 py-2 rounded-md text-white font-montserrat font-semibold cursor-pointer text-sm">Order Now</button>
            </CardFooter>
        </Card>
    )
}

export { ProductCard, ReservationCardList, OrderCardList }
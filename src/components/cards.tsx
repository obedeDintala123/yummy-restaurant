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
    status: "Delivered" | "In progress" | "Canceled" | string;
};

type OrderCardListProps = {
    orders: Order[];
    onViewDetails?: (order: Order) => void;
};

const OrderCardList = ({ orders, onViewDetails }: OrderCardListProps) => {
    return (
        <div className="bg-white rounded-lg shadow p-4 space-y-4">
            {orders.map((order) => (
                <div
                    key={order.id}
                    className="flex flex-col md:flex-row md:items-start md:justify-between border-b last:border-b-0 pb-3 last:pb-0"
                >
                    <div className="flex flex-col gap-2">
                        <div className="font-medium text-lg text-yummy-terciary">Order #{order.id}</div>

                        <div className="text-sm text-gray-500 mt-2">
                            {order.items.join(", ")} • Status:{" "}

                            <span
                                className={`font-semibold text-xs ${order.status === "Delivered"
                                    ? "text-green-700"
                                    : order.status === "In progress"
                                        ? "text-yellow-700"
                                        : "text-gray-700"
                                    }`}
                            >
                                {order.status}
                            </span>
                        </div>

                        <span className="font-semibold text-yummy-primary">$ {order.total.toFixed(2)}</span>
                    </div>
                    {onViewDetails && (
                        <button
                            className="mt-4 md:mt-0 text-sm text-yummy-primary hover:underline self-end md:self-auto cursor-pointer"
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
                        <div className="font-medium text-lg text-yummy-terciary">{res.date}</div>
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
                        className="mt-2 md:mt-0 text-sm text-yummy-primary hover:underline"
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
                <div className="relative w-full h-72 flex items-center justify-center bg-white">
                    <Image
                        src={src}
                        alt="product1"
                        fill
                        className="rounded-md object-fill"
                    />
                </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
                <CardTitle className="text-xl font-montserrat ">{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardContent>
            <CardFooter className="flex justify-between p-4">
                <span className=" font-montserrat text-2xl font-semibold">{price}$</span>
                <button className="bg-yummy-primary px-6 py-2 rounded-md text-white font-montserrat font-semibold cursor-pointer text-base">Order Now</button>
            </CardFooter>
        </Card>
    )
}

export { ProductCard, ReservationCardList, OrderCardList }
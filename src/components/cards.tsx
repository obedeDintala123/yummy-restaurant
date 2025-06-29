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
    price: number;
    productName: string;
    date: string;
};

type OrderCardListProps = {
    orders: Order[];
    onViewDetails?: (order: Order) => void;
};

const OrderCardList = ({ orders, onViewDetails }: OrderCardListProps) => {
    return (
        <div className="bg-white p-4 space-y-6 border-b-2">
            {
                orders.length > 0 ? (
                    orders.map((order) => (
                        <div
                            key={order.id}
                            className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b last:border-b-0 pb-4 last:pb-0"
                        >
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="font-semibold text-yummy-primary text-base">Order #{order.id}</span>
                                    <span className="text-xs text-gray-400">
                                        {new Date(order.date).toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "short",
                                            day: "2-digit",
                                            hour: "2-digit",
                                            minute: "2-digit"
                                        })}
                                    </span>
                                </div>

                                <div className="flex flex-col gap-2 mt-3">
                                    <span className="font-medium text-yummy-terciary text-lg">{order.productName}</span>
                                    <span className="font-semibold text-yummy-terciary text-base">
                                        ${order.price}
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
                    ))
                ) : (
                    <div className="text-center text-gray-500">
                        No orders found.
                    </div>
                )
            }
        </div>
    );
}

type Reservation = {
    id: string;
    date: string;
    peopleCount: number;
    status: "Confirmed" | "Pending" | "Canceled" | string;
};

type ReservationCardList = {
    reservations: Reservation[];
    onViewDetails?: (reservation: Reservation) => void;
};

const ReservationCardList = ({ reservations, onViewDetails }: ReservationCardList) => {
    return (
        <div className="bg-white p-4 space-y-4 border-b-2">
            {
                reservations.length > 0 ? (
                    reservations.map((res) => (
                        <div
                            key={res.id}
                            className="flex flex-col md:flex-row md:items-center md:justify-between border-b last:border-b-0 pb-3 last:pb-0"
                        >
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="font-semibold text-yummy-primary text-base">Reservation #{res.id}</span>
                                    <span className="text-xs text-gray-400">
                                        {new Date(res.date).toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "short",
                                            day: "2-digit",
                                            hour: "2-digit",
                                            minute: "2-digit"
                                        })}
                                    </span>
                                </div>
                                <div className="text-sm text-gray-500">
                                    {res.peopleCount} people
                                </div>
                            </div>
                            <button
                                className="hidden md:block mt-2 md:mt-0 text-sm text-yummy-primary hover:underline"
                                onClick={() => onViewDetails?.(res)}
                            >
                                View details
                            </button>
                        </div>
                    ))
                ) : (
                    <div className="text-center text-gray-500">
                        No reservations found.
                    </div>
                )
            }
        </div>
    );
}

type ProductCardProps = {
    src: string;
    title: string;
    description: string;
    price: number;
    onSelect?: () => void;
};
const ProductCard = ({ src, title, description, price, onSelect }: ProductCardProps) => {
    return (
        <Card className="mt-4 w-full sm:w-[90%] md:w-[45%] lg:w-full p-0">
            <CardHeader className="p-0">
                <div className="relative w-full h-60 flex items-center justify-center">
                    <Image
                        src={src}
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        className="rounded-md object-fill"
                        priority
                    />
                </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-3 h-12 px-4">
                <CardTitle className="text-xl font-montserrat text-yummy-terciary">{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardContent>
            <CardFooter className="flex justify-between px-4 py-3">
                <span className=" font-montserrat text-xl font-semibold text-yummy-terciary">{price}$</span>
                <button className="bg-yummy-primary px-4 py-2 rounded-md text-white font-montserrat font-semibold cursor-pointer text-sm" onClick={onSelect}>Order Now</button>
            </CardFooter>
        </Card>
    )
}

export { ProductCard, ReservationCardList, OrderCardList }
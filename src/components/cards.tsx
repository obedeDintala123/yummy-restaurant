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

interface orderCard {
    src: string;
    alt: string;
    title: string;
    description: string;
}

interface OrderCardProps {
    orderCard: orderCard[];
}

const OrderCard = ({ orderCard }: OrderCardProps) => {

    return (
        <>
            {
                orderCard.map((item, index) => (
                    <Card key={index} className="flex flex-col w-1/4">
                        <CardHeader>
                            <Image src={item.src} alt={item.alt} width={250} height={250} />
                        </CardHeader>
                        <CardContent>
                            <h1>{item.title}</h1>
                        </CardContent>
                        <CardFooter>
                            <span>{item.description}</span>
                        </CardFooter>
                    </Card>
                ))
            }
        </>
    )
}

interface ProductCardProps {
    src: string;
    title: string;
    description: string;
    price: number;
}

const ProductCard = ({ src, title, description, price }: ProductCardProps) => {
    return (
        <Card className="mt-4 w-full sm:w-[90%] md:w-[45%] lg:w-[24%] p-0">
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

export { OrderCard, ProductCard }
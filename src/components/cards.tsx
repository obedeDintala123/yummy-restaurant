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

const ProductCard = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
                <CardAction>Card Action</CardAction>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
    )
}

export { OrderCard, ProductCard }
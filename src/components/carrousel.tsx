"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
export const Carrousel = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

    const carrouselImage = [
        "/carrousel1.svg",
        "/carrousel2.svg",
        "/carrousel3.svg",
        "/carrousel4.svg",
    ]

    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-[80%] m-auto md:m-0 lg:w-full max-w-xl"
            
        >
            <CarouselContent className="flex gap-4">
                {carrouselImage.map((image, index) => (
                    <CarouselItem key={index}>
                        <img src={image} alt={`Carrousel Image ${index + 1}`} />
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export const HeroSlider = () => {
    const images = [
        "/herosection-image1.svg",
        "/herosection-image2.svg",
        "/herosection-image3.svg",
        "/herosection-image4.svg",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

    const animateSlide = () => {
        imageRefs.current.forEach((el, i) => {
            if (!el) return;

            const relativeIndex = (i - currentIndex + images.length) % images.length;

            // Posição visual com curva (tipo "parêntese")
            let config;

            if (relativeIndex === 0) {
                // Imagem central (maior e mais à esquerda)
                config = {
                    x: -150,
                    y: 0,
                    scale: 2.8,
                    opacity: 1,
                    zIndex: 3,
                };
            } else if (relativeIndex === 1) {
                // Imagem inferior (menor e mais à direita)
                config = {
                    x: 40,
                    y: 180,
                    scale: 0.8,
                    opacity: 0.6,
                    zIndex: 2,
                };
            } else if (relativeIndex === images.length - 1) {
                // Imagem superior (menor e mais à direita)
                config = {
                    x: 40,
                    y: -180,
                    scale: 0.8,
                    opacity: 0.6,
                    zIndex: 2,
                };
            } else {
                // Fora de cena
                config = {
                    x: 0,
                    y: 300,
                    scale: 0.5,
                    opacity: 0,
                    zIndex: 0,
                };
            }

            gsap.to(el, {
                ...config,
                duration: 0.6,
                ease: "power3.inOut",
            });
        });
    };

    useEffect(() => {
        animateSlide();
    }, [currentIndex]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 3500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-[400px] w-[400px] relative">
            {images.map((src, i) => (
                <div
                    key={i}
                    ref={(el) => {
                        imageRefs.current[i] = el;
                    }}
                    className="absolute transition-transform duration-500"
                    style={{ transformOrigin: "center center" }}
                >
                    <Image
                        src={src}
                        alt={`image-${i}`}
                        width={200}
                        height={200}
                        className="rounded-2xl object-cover"
                    />
                </div>
            ))}
        </div>
    );
};

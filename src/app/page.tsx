"use client"

import { Header } from "@/components/header";
import { HeroSlider } from "@/components/hero-slider";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/cards";
import Image from "next/image";
import {
  Leaf,
  ChefHat,
  Truck,
  HeartHandshake,
  ArrowRight
} from "lucide-react";
import { FaqAccordion } from "@/components/faq-accordion";
import { FloatingButton } from "@/components/floating-button";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  const headerRef = useRef<HTMLDivElement>(null);
  const aboutTextRef = useRef<HTMLDivElement>(null);
  const aboutListRef = useRef<HTMLUListElement>(null);
  const aboutImageRef = useRef<HTMLDivElement>(null);
  const storyTextRef = useRef<HTMLDivElement>(null);
  const storyImageRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const reserveTitleRef = useRef<HTMLHeadingElement>(null);
  const reserveSubtitleRef = useRef<HTMLSpanElement>(null);
  const reserveButtonRef = useRef<HTMLButtonElement>(null);
  const faqGridRef = useRef<HTMLDivElement>(null);
  const faqAccordionRef = useRef<HTMLDivElement>(null);



  useEffect(() => {
    if (headerRef.current) {
      gsap.from(headerRef.current, {
        y: -60,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });
    }

    // Hero-text (hero-title e hero-button) depois do header
    gsap.from(".hero-title", {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: "power2.out",
    });
    gsap.from(".hero-button", {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.8,
      ease: "power2.out",
    });

    // Hero-image por último
    gsap.from(".hero-image", {
      scale: 1.1,
      opacity: 0,
      delay: 1.1,
      duration: 1,
      ease: "power2.out",
    });


    if (aboutTextRef.current) {
      gsap.from(aboutTextRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: aboutTextRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse", // <-- aqui
        },
      });
    }
    if (aboutListRef.current) {
      gsap.from(aboutListRef.current.children, {
        opacity: 0,
        x: -40,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: aboutListRef.current,
          start: "top 85%",
          toggleActions: "play reverse play reverse", // <-- aqui
        },
      });
    }
    if (aboutImageRef.current) {
      gsap.from(aboutImageRef.current, {
        opacity: 0,
        x: 60,
        duration: 1,
        scrollTrigger: {
          trigger: aboutImageRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse", // <-- aqui
        },
      });
    }

    if (storyTextRef.current) {
      gsap.from(storyTextRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: storyTextRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });
    }
    if (storyImageRef.current) {
      gsap.from(storyImageRef.current, {
        opacity: 0,
        x: 60,
        duration: 1,
        scrollTrigger: {
          trigger: storyImageRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });
    }

    if (cardsContainerRef.current) {
      gsap.from(cardsContainerRef.current.children, {
        opacity: 0,
        x: 100, // Vem da direita para a esquerda
        stagger: 0.2,
        duration: 1.5,
        scrollTrigger: {
          trigger: cardsContainerRef.current,
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
      });
    }

    if (reserveTitleRef.current) {
      gsap.from(reserveTitleRef.current, {
        opacity: 0,
        y: 60,
        duration: 1,
        scrollTrigger: {
          trigger: reserveTitleRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });
    }
    if (reserveSubtitleRef.current) {
      gsap.from(reserveSubtitleRef.current, {
        opacity: 0,
        y: 60,
        delay: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: reserveSubtitleRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });
    }
    if (reserveButtonRef.current) {
      gsap.from(reserveButtonRef.current, {
        opacity: 0,
        y: 60,
        delay: 0.4,
        duration: 1,
        scrollTrigger: {
          trigger: reserveButtonRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });
    }

    if (faqGridRef.current) {
      gsap.from(faqGridRef.current.children, {
        opacity: 0,
        x: 100,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: faqGridRef.current,
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
      });
    }

    if (faqAccordionRef.current) {
      gsap.from(faqAccordionRef.current.children, {
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 0.7,
        scrollTrigger: {
          trigger: faqAccordionRef.current,
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
      });
    }
  }, []);

  const products = [
    { title: "Produto 1", src: "/product1.jpg", description: "Produto 1", price: 24 },

    { title: "Produto 2", src: "/product2.jpg", description: "Produto 2", price: 24 },

    { title: "Produto 3", src: "/product3.jpg", description: "Produto 3", price: 24 },

    { title: "Produto 4", src: "/product4.jpg", description: "Produto 4", price: 24 },
  ];

  const footerLinks = [
    { title: "Restaurant", options: ["About Us", "Menu", "Gallery"] },
    { title: "Visit", options: ["Location", "Hours", "Contact"] },
    { title: "Book", options: ["Reservations", "Private events"] },
    { title: "Social", options: ["Instagram", "Facebook", "TikTok"] },
  ]

  return (
    <div className="overflow-x-hidden">
      <div className="min-h-screen">
        <Header ref={headerRef} />

        <FloatingButton />

        <article className="grid grid-cols-[30%_70%] px-20 mt-10">
          <section className="flex flex-col gap-10">
            <h1 className="text-7xl font-semibold leading-24 text-yummy-terciary hero-title">Enjoy Your Healthy Delicious Food</h1>

            <div className="flex gap-10 hero-button">
              <Button className="w-2/6 py-6 rounded-full bg-yummy-primary font-semibold">Menu</Button>
              <Button variant={"outline"} className="w-2/6 py-6 rounded-full text-yummy-terciary bg-transparent font-semibold">Book a table</Button>
            </div>
          </section>

          <section className="flex justify-end w-full items-center">
            <HeroSlider className="hero-image" />
          </section>
        </article>
      </div>

      <section className="flex flex-col md:flex-row items-center gap-8 px-6 md:px-12 py-12 bg-yummy-secondary">
        {/* Imagem */}
        <div ref={aboutImageRef} className="relative w-full max-w-3xl h-[450px] flex-shrink-0">
          <Image
            src="/about-image1.jpg"
            alt="Interior of Yummy Restaurant"
            fill
            className="rounded-xl object-cover shadow-md"
          />
        </div>

        <div ref={aboutTextRef} className="w-full md:w-1/2 text-gray-800">
          <h2 className="text-4xl mb-4 font-montserrat font-semibold text-yummy-terciary">About Us</h2>
          <p className="text-lg mb-6 leading-relaxed text-justify font-montserrat text-[#212121]">
            Welcome to <strong>Yummy Restaurant</strong>! We are passionate about
            delivering healthy and delicious food made with fresh ingredients.
            Whether you're dining in or ordering delivery, we’re here to serve you
            with excellence!
          </p>

          <ul ref={aboutListRef} className="space-y-5 text-base">
            <li className="flex items-start gap-3">
              <Leaf className="text-yummy-primary w-5 h-5 mt-1" />
              <span>We prioritize locally sourced ingredients for freshness and flavor.</span>
            </li>
            <li className="flex items-start gap-3">
              <ChefHat className="text-yummy-primary w-5 h-5 mt-1" />
              <span>Our chefs blend tradition and creativity in every dish.</span>
            </li>
            <li className="flex items-start gap-3">
              <Truck className="text-yummy-primary w-5 h-5 mt-1" />
              <span>Fast and reliable delivery — your food arrives fresh and on time.</span>
            </li>
            <li className="flex items-start gap-3">
              <HeartHandshake className="text-yummy-primary w-5 h-5 mt-1" />
              <span>Customer satisfaction is at the heart of everything we do.</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center gap-8 px-6 md:px-12 py-12 bg-yummy-secondary">
        <div ref={storyTextRef} className="w-full md:w-1/2 text-gray-800">
          <h2 className="text-5xl mb-4 font-montserrat font-semibold text-yummy-terciary">Our Story</h2>
          <p className="text-lg mb-6 leading-8 text-justify font-montserrat text-[#212121]">
            Founded in 2010, Yummy Restaurant began as a small family business with a big dream: to bring healthy, flavorful meals to our community. Over the years, our passion for quality and hospitality has helped us grow, but our values remain the same. Every dish is a reflection of our journey, our culture, and our commitment to you. Join us and be part of our story!
          </p>
        </div>
        <div ref={storyImageRef} className="relative w-full max-w-3xl h-[450px] flex-shrink-0">
          <Image
            src="/about-image2.jpg"
            alt="Our restaurant history"
            fill
            className="rounded-xl object-cover shadow-md"
          />
        </div>
      </section>

      <section className="px-20 mt-20 min-h-screen">
        <div className="flex items-center gap-8">
          <h1 className="font-montserrat text-5xl font-semibold text-yummy-terciary">Main Dishes</h1>
          <ArrowRight size={36} color="#3a2d2d" />
        </div>

        <div ref={cardsContainerRef} className="mt-10 flex flex-wrap justify-between">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              src={product.src}
              description={product.description}
              price={product.price}
            />
          ))}
        </div>
      </section>

      <section
        className="min-h-screen flex flex-col gap-10 justify-center items-center w-full bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/reserve-table.jpg")` }}
      >
        <h1
          ref={reserveTitleRef}
          className="text-6xl font-montserrat font-semibold text-white"
        >
          Reserve your table
        </h1>

        <span
          ref={reserveSubtitleRef}
          className="text-5xl text-white font-light"
        >
          Book now for an unforgettable meal.
        </span>

        <Button
          ref={reserveButtonRef}
          className="w-1/8 py-6 rounded-full bg-yummy-primary font-semibold cursor-pointer transform transition animate-bounce"
        >
          Make a reservation
        </Button>
      </section>

      <section className="mt-20 px-20 min-h-screen flex flex-col">
        <h2 className="text-5xl font-semibold text-yummy-terciary">Frequently asked questions</h2>
        <div ref={faqGridRef} className="mt-20 grid grid-cols-[50%_50%] h-full flex-1">
          <Image
            src={"/model.png"}
            width={500}
            height={330}
            alt="model"
            className="h-full"
          />
          <div ref={faqAccordionRef} className="w-full">
            <FaqAccordion />
          </div>
        </div>
      </section>

      <footer className="min-h-[40vh] px-20 bg-yummy-secondary flex flex-col gap-2">
        <div className="flex justify-between items-start py-16">
          <Image
            src={"yummy-logo.svg"}
            width={130}
            height={130}
            alt="footer logo"
          />
          <div className="flex gap-20">
            {
              footerLinks.map((item, index) => (
                <div className="flex flex-col gap-2" key={index}>
                  <span className="text-yummy-terciary font-semibold text-base">{item.title}</span>
                  <div className="flex flex-col gap-1">
                    {item.options.map((option, index) => (
                      <div key={index}>
                        <a className="text-sm" href="#" target="_top" rel="noopener noreferrer">{option}</a>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            }
          </div>
        </div>

        <div className="w-full border-b-2"></div>

        <div className="w-full flex justify-center items-center">
          <span className="text-center text-sm">© 2025 yummy .All rights reserved</span>
        </div>
      </footer>
    </div>
  )
}
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

export default function Home() {

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
    <>
      <div className="min-h-screen">
        <Header />

        <FloatingButton />

        <article className="grid grid-cols-[30%_70%] px-20 mt-10">
          <section className="flex flex-col gap-10">
            <h1 className="text-7xl font-semibold leading-24 text-yummy-terciary">Enjoy Your Healthy Delicious Food</h1>

            <div className="flex gap-10">
              <Button className="w-2/6 py-6 rounded-full bg-yummy-primary font-semibold">Menu</Button>
              <Button variant={"outline"} className="w-2/6 py-6 rounded-full text-yummy-terciary bg-transparent font-semibold">Book a table</Button>
            </div>
          </section>

          <section className="flex justify-end w-full items-center">
            <HeroSlider />
          </section>
        </article>
      </div>

      <section className="flex flex-col md:flex-row items-center gap-8 px-6 md:px-12 py-12 bg-yummy-secondary">
        {/* Imagem */}
        <div className="relative w-full max-w-3xl h-[450px] flex-shrink-0">
          <Image
            src="/about-image1.jpg"
            alt="Interior of Yummy Restaurant"
            fill
            className="rounded-xl object-cover shadow-md"
          />
        </div>

        <div className="w-full md:w-1/2 text-gray-800">
          <h2 className="text-4xl mb-4 font-montserrat font-semibold text-yummy-terciary">About Us</h2>
          <p className="text-lg mb-6 leading-relaxed text-justify font-montserrat text-[#212121]">
            Welcome to <strong>Yummy Restaurant</strong>! We are passionate about
            delivering healthy and delicious food made with fresh ingredients.
            Whether you're dining in or ordering delivery, we’re here to serve you
            with excellence!
          </p>

          <ul className="space-y-5 text-base">
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
        <div className="w-full md:w-1/2 text-gray-800">
          <h2 className="text-5xl mb-4 font-montserrat font-semibold text-yummy-terciary">Our Story</h2>
          <p className="text-lg mb-6 leading-8 text-justify font-montserrat text-[#212121]">
            Founded in 2010, Yummy Restaurant began as a small family business with a big dream: to bring healthy, flavorful meals to our community. Over the years, our passion for quality and hospitality has helped us grow, but our values remain the same. Every dish is a reflection of our journey, our culture, and our commitment to you. Join us and be part of our story!
          </p>
        </div>
        <div className="relative w-full max-w-3xl h-[450px] flex-shrink-0">
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

        <div className="mt-10 flex flex-wrap justify-between">
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

        <h1 className="text-6xl font-montserrat font-semibold text-white">Reserve your table</h1>

        <span className="text-5xl text-white font-light">Book now for an unforgettable meal.</span>

        <Button className="w-1/8 py-6 rounded-full bg-yummy-primary font-semibold cursor-pointer transform transition hover:scale-105 hover:bg-yummy-primary">Make a reservation</Button>

      </section>

      <section className="mt-20 px-20 min-h-screen flex flex-col">
        <h2 className="text-5xl font-semibold text-yummy-terciary">Frequently asked questions</h2>

        <div className="mt-20 grid grid-cols-[50%_50%] h-full flex-1">
          <Image
            src={"/model.png"}
            width={500}
            height={330}
            alt="model"
            className="h-full"
          />

          <FaqAccordion />
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
    </>
  )
}
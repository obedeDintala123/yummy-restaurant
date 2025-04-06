"use client";

import { useState } from "react";
import { Carrousel } from "@/components/carrousel";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarWrapper } from "@/components/sidebar-wrapper";

export default function Home() {
  const [ showSidebar, setShowSidebar] = useState(false);
  
  const handleClick = () => {
    setShowSidebar(!showSidebar);
  }
  
  const closeSidebar = () => {
    setShowSidebar(false);
  }

  return (
    <div className="flex flex-col">
      { showSidebar && ( <AppSidebar closeSidebar={closeSidebar} />)}
      <div>
        <Image
          src="/bg.jpg"
          alt="Background"
          fill
          className="object-cover brightness-50"
          priority
        />

        <div className="relative z-10 flex flex-col">
          <Header handleClick={handleClick} />
          <div className="px-4 lg:px-10  grid md:grid-cols-[35%_65%] gap-14 md:gap-0">
            <section className="flex flex-col gap-10 md:gap-8">
              <div className="mt-6 text-center lg:mt-14 md:text-start">
                <span className="text-white text-3xl md:text-5xl lg:text-7xl leading-14 md:leading-16 lg:leading-24 font-medium">
                  Enjoy Your Healthy Delicious Food
                </span>
              </div>

              <div className="flex gap-4 justify-center md:justify-start">
                <Button className="bg-[#CF1113] text-sm lg:text-md px-6 lg:px-8 py-6 rounded-full hover:bg-[#cf1114e9]">
                  View Menu
                </Button>
                <Button className="bg-[#fff] hover:bg-[#f9f9f9ec] text-[#38363F] text-sm lg:text-md px-6 lg:px-8 py-6 rounded-full">
                  Book a Table
                </Button>
              </div>
            </section>

            <section className="flex justify-end items-center">
              <Carrousel />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Search, ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";

export const Header = () => {

    const navOption = [
        {
            src: "/",
            name: "Home",
            icon: ""
        },

        {
            src: "/about",
            name: "About Us",
            icon: ""
        },

        {
            src: "/menu",
            name: "Menu",
            icon: ""
        },

        {
            src: "/services",
            name: "Services",
            icon: <ChevronDown size={24} strokeWidth={1.5} />
        },

    ];

    return (
        <header className="flex items-center justify-between w-full px-20 py-10">
            <Image src={"/yummy-logo.svg"} alt="Logo" width={130} height={130}></Image>
            <nav className="flex gap-12">
                {
                    navOption.map((item, index) => (
                        <Link key={index} href={item.src} className="flex items-center text-sm font-medium text-yummy-terciary cursor-pointer">
                            {item.name}
                            {item.icon}
                        </Link>
                    ))
                }
            </nav>

            <div className="flex items-center gap-10">
                <button title="search" className="cursor-pointer">
                    <Search size={24} color="#3a2d2d"/>
                </button>

                <button title="cart" className="cursor-pointer">
                    <ShoppingBag size={24} color="#3a2d2d"/>
                </button>
            </div>

        </header>
    )
}
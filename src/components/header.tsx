import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Search, ShoppingBag, Menu } from "lucide-react";
import { useScreenType } from "@/hooks/screenType";

export const Header = ({ ...props }: React.ComponentPropsWithRef<"div">) => {

    const screen = useScreenType();

    const navOption = [
        { src: "/", name: "Home", icon: "" },
        { src: "#about", name: "About Us", icon: "" },
        { src: "/menu", name: "Menu", icon: "" },
        { src: "/services", name: "Services", icon: <ChevronDown size={24} strokeWidth={1.5} /> },
    ];

    return (
        <header className="flex items-center justify-between w-full p-6 md:px-20 md:py-10" {...props}>

            <Image
                src={"/yummy-logo.svg"}
                alt="Logo"
                {...screen === "mobile" ? { width: 90, height: 90 } : { width: 130, height: 130 }}
            />


            <nav className="hidden md:flex gap-12">
                {
                    navOption.map((item, index) => (
                        <Link key={index} href={item.src} className="flex items-center text-sm font-medium text-yummy-terciary cursor-pointer">
                            {item.name}
                            {item.icon}
                        </Link>
                    ))
                }
            </nav>

            <div className="hidden md:flex items-center gap-10">
                <button title="search" className="cursor-pointer">
                    <Search size={24} color="#3a2d2d" />
                </button>

                <button title="cart" className="cursor-pointer">
                    <ShoppingBag size={24} color="#3a2d2d" />
                </button>
            </div>

            {screen === "mobile" ? <Menu /> : null}

        </header>
    )
}
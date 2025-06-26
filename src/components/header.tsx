import { useState, useEffect } from "react";
import { ChevronDown, XIcon, Search, ShoppingBag, Menu } from "lucide-react";
import Link from "next/link";
import { useScreenType } from "@/hooks/screenType";
import Image from "next/image";
import { createPortal } from "react-dom";

const MenuNav = ({ setMenuOpen }: { setMenuOpen: (open: boolean) => void }) => {
    const navOption = [
        { src: "/", name: "Home", icon: "" },
        { src: "#about", name: "About Us", icon: "" },
        { src: "/menu", name: "Menu", icon: "" },
        { src: "/services", name: "Services", icon: <ChevronDown size={24} strokeWidth={1.5} /> },
    ];

    useEffect(() => {
        document.body.classList.add("overflow-hidden");
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, []);


    if (typeof window === "undefined") return null;

    return createPortal(
        <div className="fixed top-0 left-0 w-full h-screen bg-white z-[2147483647]">
            <div className="flex items-center justify-between p-6">
                <Image src={"/yummy-logo.svg"} alt="Logo" width={90} height={90} />
                <button
                    title="menu-close"
                    onClick={() => setMenuOpen(false)}
                    className="text-yummy-terciary transition-all duration-300 transform hover:rotate-90"
                >
                    <XIcon size={28} />
                </button>
            </div>
            <nav className="flex flex-col items-center gap-6 mt-10">
                {navOption.map((item, index) => (
                    <Link key={index} href={item.src} className="text-lg font-medium text-yummy-terciary flex items-center gap-2">
                        {item.name}
                        {item.icon}
                    </Link>
                ))}
            </nav>
        </div>,
        document.body
    );
};
export const Header = ({ ...props }: React.ComponentPropsWithRef<"div">) => {
    const screen = useScreenType();
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

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
                {navOption.map((item, index) => (
                    <Link key={index} href={item.src} className="flex items-center text-sm font-medium text-yummy-terciary cursor-pointer">
                        {item.name}
                        {item.icon}
                    </Link>
                ))}
            </nav>

            <div className="hidden md:flex items-center gap-10">
                <button title="search" className="cursor-pointer">
                    <Search size={24} color="#3a2d2d" />
                </button>
                <button title="cart" className="cursor-pointer">
                    <ShoppingBag size={24} color="#3a2d2d" />
                </button>
            </div>

            {screen === "mobile" && (
                <>
                    <button
                        onClick={() => setMenuOpen((open) => !open)}
                        className="md:hidden relative w-10 h-10 flex items-center justify-center"
                        title="menu"
                    >
                        <span
                            className={`absolute transition-all duration-300 ${menuOpen ? "opacity-0 scale-90 rotate-45" : "opacity-100 scale-100 rotate-0"}`}
                        >
                            <Menu size={28} />
                        </span>
                        <span
                            className={`absolute transition-all duration-300 ${menuOpen ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-90 -rotate-45"}`}
                        >
                            <XIcon size={28} />
                        </span>
                    </button>
                    {menuOpen && <MenuNav setMenuOpen={setMenuOpen} />}
                </>
            )}
        </header>
    );
};
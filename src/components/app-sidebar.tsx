import { X } from "lucide-react";
import Link from "next/link";

interface AppSidebarProps{
    closeSidebar: () => void;
}

export const AppSidebar = ( { closeSidebar }: AppSidebarProps ) => {
    const Links = [
        { name: "Home", href: "/" },
        { name: "Menu", href: "/menu" },
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/contact" },
        { name: "Login", href: "/login" },
    ]
    return (
        <div className="fixed top-0 right-0 w-1/3 h-screen bg-[#38363F] z-50 flex flex-col gap-2">
            <div className="flex items-center justify-between w-full p-4 lg:px-10">
                <h1 className="text-white text-xl font-medium">Yummy<span className="text-[#CF1113]">.</span></h1>

                <X color="#fff" width={15} onClick={() => closeSidebar()} className="cursor-pointer"/>
            </div>
            <nav className="flex flex-col gap-8 text-white font-light p-4">
                {Links.map((link, index) => (
                    <Link key={index} href={link.href} className="hover:text-[#CF1113] text-md font-light">{link.name}</Link>
                ))}
            </nav>
        </div>
    )
}
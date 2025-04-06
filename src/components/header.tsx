"use client"

import Link from "next/link"
import { Button } from "./ui/button"
import { AlignJustify } from "lucide-react"

interface HeaderProps{
    handleClick: () => void
}
export const Header = ( { handleClick }: HeaderProps) => {

    return (
        <header className="flex items-center justify-between w-full px-4 lg:px-10 py-6">
            <div>
                <h1 className="font-medium text-2xl lg:text-4xl text-white">Yummy<span className="text-[#CF1113]">.</span></h1>
            </div>

            <nav className="md:flex gap-8 text-white font-light hidden">
                <Link href='/'>Home</Link>
                <Link href='/menu'>Menu</Link>
                <Link href='/about'>About Us</Link>
                <Link href='/contact'>Contact</Link>
            </nav>

            <Button type="button" className="md:block hidden px-8 rounded-full bg-[#CF1113]">Login</Button>

            <AlignJustify className="block md:hidden cursor-pointer" color="#fff" onClick={() => handleClick()}/>
        </header>
    )
}
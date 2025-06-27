"use client";

import { Calendar, Home, ShoppingBag, Utensils, ArrowLeft } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarFooter,
    SidebarRail,
} from "@/components/ui/sidebar"
import Image from "next/image";
import { useScreenType } from "@/hooks/screenType";
import { NavUser } from "./nav-user";

const items = [
    { title: "Dashboard", url: "/dashboard", icon: Home },
    { title: "Menu", url: "/dashboard/menu", icon: Utensils },
    { title: "Reservations", url: "/dashboard/reservations", icon: Calendar },
    { title: "Orders", url: "/dashboard/orders", icon: ShoppingBag },
];

const data = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    }
}

export function AppSidebar() {
    const screen = useScreenType();
    return (
        <Sidebar>
            <SidebarHeader className="flex justify-center items-center border-b-2 p-4">
                <Image
                    src="/yummy-logo.svg"
                    alt="Yummy Logo"
                    {...screen === "mobile" ? { width: 90, height: 90 } : { width: 100, height: 100 }}
                />
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}
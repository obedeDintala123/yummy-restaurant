"use client";

import { Calendar, Home, ShoppingBag, Utensils, ArrowLeft } from "lucide-react";
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
} from "@/components/ui/sidebar";
import Image from "next/image";
import { useScreenType } from "@/hooks/screenType";
import { NavUser } from "./nav-user";
import { getCookie } from "cookies-next";
import { jwtDecode } from "jwt-decode";
import { useMemo } from "react";

const items = [
    { title: "Dashboard", url: "/dashboard", icon: Home },
    { title: "Menu", url: "/dashboard/menu", icon: Utensils },
    { title: "Reservations", url: "/dashboard/reservations", icon: Calendar },
    { title: "Orders", url: "/dashboard/orders", icon: ShoppingBag },
];

export function AppSidebar() {
    const screen = useScreenType();

    const user = useMemo(() => {
        let defaultUser = {
            name: "",
            email: "",
            avatar: "",
        };
        try {
            const tokenData = getCookie("auth-token");
            if (tokenData && typeof tokenData === "string") {
                const parsed = JSON.parse(tokenData);
                if (parsed.token) {
                    const decoded: any = jwtDecode(parsed.token);
                    // Gera as iniciais do nome
                    let initials = "";
                    if (decoded.name) {
                        initials = decoded.name
                            .split(" ")
                            .map((n: string) => n[0])
                            .join("")
                            .toUpperCase();
                    }
                    return {
                        ...defaultUser,
                        name: decoded.name || "",
                        email: decoded.email || "",
                        avatar: initials || "EX",
                    };
                }
            }
        } catch {
            // fallback
        }
        return defaultUser;
    }, []);

    return (
        <Sidebar>
            <SidebarHeader className="flex justify-center items-center border-b-2 p-4">
                <Image
                    src="/yummy-logo.svg"
                    alt="Yummy Logo"
                    {...(screen === "mobile"
                        ? { width: 90, height: 90 }
                        : { width: 100, height: 100 })}
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
                <NavUser user={user} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}
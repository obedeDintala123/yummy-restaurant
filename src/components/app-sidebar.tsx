import { Calendar, Home, ShoppingBag, Utensils, ArrowLeft } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"

const items = [
    { title: "Dashboard", url: "/dashboard", icon: Home },
    { title: "Menu", url: "/dashboard/menu", icon: Utensils },
    { title: "Reservations", url: "/dashboard/reservations", icon: Calendar },
    { title: "Orders", url: "/dashboard/orders", icon: ShoppingBag },
];

const backItem = { title: "Back", url: "/", icon: ArrowLeft };

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
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

                <div className="mt-auto py-2">
                    <SidebarMenu>
                        <SidebarMenuItem key={backItem.title}>
                            <SidebarMenuButton asChild>
                                <a href={backItem.url}>
                                    <backItem.icon />
                                    <span>{backItem.title}</span>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </div>
            </SidebarContent>
        </Sidebar>
    )
}
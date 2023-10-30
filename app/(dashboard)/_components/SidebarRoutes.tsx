"use client";
import React from 'react'
import { BarChart, Compass, Layout, List, ClipboardCheck, Cog, Users } from "lucide-react"
import { SidebarItem } from './SidebarItem';
import { usePathname } from 'next/navigation';
const guestRoutes = [
    {
        icon: Layout,
        label: 'Dashboard',
        href: '/dashboard'
    },
    {
        icon: Users,
        label: 'Customers',
        href: '/customers'
    },
    {
        icon: ClipboardCheck,
        label: 'Orders',
        href: '/orders'
    },
    {
        icon: Cog,
        label: 'Settings',
        href: '/settings'
    }
]


const SidebarRoutes = () => {

    return (
        <div className="flex flex-col w-full">
            {guestRoutes.map((route) => (
                <SidebarItem
                    key={route.href}
                    icon={route.icon}
                    label={route.label}
                    href={route.href}
                />
            ))}
        </div>
    )
}

export default SidebarRoutes
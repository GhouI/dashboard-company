"use client"

import { Button } from "@/components/ui/button"
import { Layout, ClipboardCheck, Cog, Users } from "lucide-react"

import { Icon } from "../_components/Icon";
import { useRouter } from "next/navigation";

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
const DashBoard = () => {
    const router = useRouter();

    const GoToPage = (href: string) => {
        router.push(href)
    }
    return (
        <div>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold">Welcome to The Horizon Group Dashboard</h1>
                <span>This dashboard allows you to view incoming orders, contact customers and view analytics.</span>
                <div className="flex flex-row items-center justify-center gap-10">
                    {guestRoutes.map((route) => (
                        <Button onClick={() => GoToPage(route.href)}><Icon icon={route.icon} />{route.label}</Button>))}
                </div>

            </div>
        </div>
    )
}
export default DashBoard
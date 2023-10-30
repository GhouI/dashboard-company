"use client"
import { UserButton } from "@clerk/nextjs";

export const NavbarRoutes = () => {
    return (
    <div className="flex flex-grow justify-end items-center">
        <UserButton afterSignOutUrl="/" />
    </div>)
}
import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import React from "react";
import {SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar";
import {AppSidebar} from "@/components/custom/AppSidebar";
import {NavbarProvider} from "@/components/ui/navbar";
import {TopNav} from "@/components/custom/Navbar";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Remindable- Your AI To-do List Tracker",
    description: "AI To-do List Tracker",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body
            suppressHydrationWarning
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <SidebarProvider>
            <AppSidebar/>
            <NavbarProvider>
                <TopNav/>
                <main>
                    {children}
                </main>
            </NavbarProvider>
        </SidebarProvider>
        </body>
        </html>
    );
}

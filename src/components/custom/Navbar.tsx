import {
    Navbar, NavbarItem, NavbarSection, NavbarSpacer, NavbarTrigger, NavbarMobile
} from "@/components/ui/navbar";
import {CircleQuestionMark, Grip, Megaphone, Settings} from "lucide-react";
import {Avatar, AvatarBadge, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {AnimatedThemeToggler} from "@/components/ui/animated-theme-toggler";
import {SearchBox} from "@/components/custom/SearchBox";
import {SidebarTrigger} from "@/components/ui/sidebar";

export function TopNav() {
    return (
        <>
            <NavbarMobile>
                <NavbarTrigger />
                <span className="font-bold">Remindable</span>
            </NavbarMobile>

            <Navbar intent="inset" isSticky className="bg-white dark:bg-background">
                <NavbarSection className="min-w-[60px]">
                    <NavbarItem>
                        <SidebarTrigger/>
                    </NavbarItem>
                </NavbarSection>

                <NavbarSection className="min-w-[120px]">
                    <NavbarItem href="/apps"><Grip/></NavbarItem>
                    <NavbarItem href="/"><span className="text-xl font-medium">To Do</span></NavbarItem>
                </NavbarSection>

                <NavbarSpacer />
                <NavbarSection>
                    <SearchBox />
                </NavbarSection>

                <NavbarSpacer/>

                <NavbarSection className="min-w-[120px] justify-end">
                    <NavbarItem><AnimatedThemeToggler /></NavbarItem>
                    <NavbarItem href="/settings"><Settings/></NavbarItem>
                    <NavbarItem href="/settings"><CircleQuestionMark /></NavbarItem>
                    <NavbarItem href="/settings"><Megaphone /></NavbarItem>
                        <Avatar className="ml-2">
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                            <AvatarBadge className="bg-green-600 dark:bg-green-800"/>
                        </Avatar>
                </NavbarSection>
            </Navbar>
        </>
    );
}
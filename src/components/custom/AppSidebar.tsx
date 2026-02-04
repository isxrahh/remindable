import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu, SidebarMenuAction, SidebarMenuButton, SidebarMenuItem
} from "@/components/ui/sidebar";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {
    Calendar,
    Calendar1Icon,
    ChevronDown,
    Home,
    House,
    List, Mail, Paperclip,
    Plus,
    SidebarIcon,
    Star,
    Sun, TicketIcon,
    User, Users
} from "lucide-react";
import {Separator} from "@/components/ui/separator";
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from "@/components/ui/collapsible";
import {RainbowButton} from "@/components/ui/rainbow-button";

export const SIDEBAR_FOOTER_ITEMS = [
    {
        id: 1,
        icon: <Mail/>,
    },
    {
        id: 2,
        icon: <Calendar/>,
    },
    {
        id: 3,
        icon: <Users/>,
    },
    {
        id: 4,
        icon: <Paperclip/>,
    },
    {
        id: 5,
        icon: <TicketIcon/>,
    },
]

export const LIST_ITEMS = [
    {
        id: 1,
        name: 'List1',
    },
    {
        id: 2,
        name: 'List2',
    },
    {
        id: 3,
        name: 'List3',
    },
    {
        id: 4,
        name: 'List4',
    },
]

export const SIDEBAR_ITEMS = [
    {
        id: 1,
        name: 'My Day',
        icon: <Sun/>,
    },
    {
        id: 2,
        name: 'Important',
        icon: <Star/>,
    },
    {
        id: 3,
        name: 'Planned',
        icon: <Calendar1Icon/>,
    },
    {
        id: 4,
        name: 'Assigned to me',
        icon: <User/>,
    },
    {
        id: 5,
        name: 'Tasks',
        icon: <Home/>,
    },
]

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader className="py-4">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton className="text-lg uppercase font-bold tracking-wider">
                                    My Workspace
                                    <ChevronDown className="ml-auto"/>
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-[--radix-popper-anchor-width]">
                                <DropdownMenuItem>
                                    <span>Personal</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <span>Official</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <span>Home</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <span>Academics</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                {SIDEBAR_ITEMS.map((item, index) => (
                    <SidebarGroup key={index}>
                        <div className="flex items-center w-full px-2 py-1.5 gap-3">
                            <div className="[&_svg]:size-5 text-gray-700">
                                {item.icon}
                            </div>
                            <span className="text-base flex-1 ml-2">{item.name}</span>
                        </div>
                    </SidebarGroup>
                ))}
                <Separator/>

                <Collapsible defaultOpen className="group/collapsible">
                    <SidebarGroup>
                        <SidebarGroupLabel asChild>
                            <CollapsibleTrigger
                                className="flex items-center w-full group-hover:bg-accent/50 transition-colors rounded-md p-2">
                                <ChevronDown
                                    className="mr-2 h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-0 -rotate-90"/>
                                <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Your Lists</span>
                            </CollapsibleTrigger>
                        </SidebarGroupLabel>
                        <CollapsibleContent>
                            <SidebarGroupContent>
                                <SidebarMenu className="mt-2">
                                    {LIST_ITEMS.map((item, index) => (
                                        <SidebarMenuItem key={index}>
                                            <SidebarMenuButton className="py-6 px-3 flex items-center w-full">
                                                <div
                                                    className={`${item.id === 5 ? "text-blue-500" : "text-muted-foreground"} [&_svg]:size-5`}>
                                                    <List/>
                                                </div>
                                                <span
                                                    className="text-lg flex-1 ml-3 text-left">{item.name}</span>
                                                <span className="text-sm text-slate-400">{item.id}</span>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    ))}
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </CollapsibleContent>
                    </SidebarGroup>
                </Collapsible>
                <SidebarMenuItem className="overflow-x-hidden">
                    <SidebarMenuButton asChild className="my-2">
                        <a className="text-blue-500 mx-7" href="#">
                            <Plus/>
                            <span className="text-lg">New List</span>
                        </a>
                    </SidebarMenuButton>
                    <SidebarMenuAction className="mx-7 my-2 text-blue-500">
                        <SidebarIcon/>
                    </SidebarMenuAction>
                </SidebarMenuItem>
                <Separator/>

                <SidebarGroup>
                    <SidebarGroupLabel className="font-medium text-md tracking-wider uppercase">AI
                        Corner</SidebarGroupLabel>
                    <div>
                        <SidebarMenuItem>
                            <RainbowButton className="w-10/12 py-5 rounded-full text-lg font-light my-4 mx-6">Remindable
                                AI</RainbowButton>
                        </SidebarMenuItem>
                    </div>
                </SidebarGroup>


            </SidebarContent>

            <SidebarFooter className="flex flex-row items-center justify-around w-full p-4 border-t">
                {SIDEBAR_FOOTER_ITEMS.map((item) => (
                    <SidebarGroup key={item.id} className="flex items-center justify-center">
                        <SidebarGroupLabel
                            className={`${
                                item.id === 5 ? "text-blue-500" : "text-slate-500"
                            } [&_svg]:size-8 hover:text-slate-800 transition-colors cursor-pointer`}
                        >
                            {item.icon}
                        </SidebarGroupLabel>
                    </SidebarGroup>
                ))}
            </SidebarFooter>
        </Sidebar>
    )
}
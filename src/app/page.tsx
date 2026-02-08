"use client"

import * as React from "react"
import { AppSidebar } from "@/components/custom/AppSidebar"
import { TopNav } from "@/components/custom/Navbar"
import { TodoList } from "@/components/todo/TodoList"
import { Button } from "@/components/ui/button"
import { List, Calendar as CalendarIcon } from "lucide-react"
import CalendarPage from "@/app/calendar/page";

export default function Home() {
    const [tasks, setTasks] = React.useState<any[]>([])
    const [view, setView] = React.useState<'list' | 'calendar'>('list')

    return (
        <div className="flex flex-1 flex-col gap-4 p-8 pt-0">
            <AppSidebar />

            <div className="flex flex-1 flex-col items-start gap-4 p-8 pt-0">

                <div className="w-full">
                    {view === 'list' ? (
                        <TodoList tasks={tasks} setTasks={setTasks} />
                    ) : (
                        <CalendarPage  />
                    )}
                </div>
            </div>
        </div>
    )
}
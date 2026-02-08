"use client"

import React from 'react'
import { CalendarView } from "@/components/calendar/CalendarView"
import {AuroraText} from "@/components/ui/aurora-text";

export default function CalendarPage() {
    return (
        <div className="p-8">
            <h1 className="text-4xl mb-6 text-gray-800 font-bold tracking-wide">Remindable <AuroraText>Calendar</AuroraText> </h1>
            <CalendarView tasks={[]} />
        </div>
    )
}
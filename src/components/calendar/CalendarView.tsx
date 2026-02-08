"use client"

import React, {useState} from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { Card } from '@/components/ui/card'
import {Dialog} from "@/components/ui/dialog";
import {DialogContent, DialogHeader, DialogTitle, DialogDescription} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label"
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input"
import bootstrap5Plugin from '@fullcalendar/bootstrap5'

import "@/app/globals.css"

export function CalendarView({ tasks, onDateClick }: { tasks: any[], onDateClick?: (date: Date) => void }) {
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [selectedDate, setSelectedDate] = useState<Date | null>(null)

    const handleDateClick = (info: { date: Date }) => {
        setSelectedDate(info.date)
        setIsDialogOpen(true)
    }
    // Transform your tasks into FullCalendar "events"
    const events = tasks.map(task => ({
        id: task.id,
        title: task.text.replace(/<[^>]*>?/gm, ''), // Strip HTML for the calendar title
        start: task.date, // Ensure your task object has a 'date' field
        allDay: true,
        backgroundColor: task.completed ? '#10b981' : '#3b82f6', // Green if done, Blue if pending
        borderColor: 'transparent'

    }))

    return (
        <Card className="bg-background/50 outline-none border-none shadow-xl backdrop-blur-md">
            <div className="calendar-wrapper">
                <FullCalendar
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    initialView="dayGridMonth"
                    headerToolbar={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek',
                    }}
                    events={[]}
                    height="80vh"
                    handleWindowResize={true}
                    dateClick={handleDateClick}
                />
            </div>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Add Event</DialogTitle>
                        <DialogDescription>
                            Fill out the details for your new calendar event.
                        </DialogDescription>
                    </DialogHeader>

                    {/* Your Form or Content Goes Here */}
                    <div className="grid gap-4 py-4">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="title">Event Title</Label>
                                <Input id="title" placeholder="Meeting with team..." className="focus-visible:ring-emerald-500" />
                            </div>
                            <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                                Save Event
                            </Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </Card>
    )
}
"use client"

import * as React from "react"
import { Plus, Trash2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Checkbox } from "@/components/ui/checkbox"
import { ContextMenu, ContextMenuTrigger } from "@/components/ui/context-menu"
import { cn } from "@/lib/utils" // Ensure this import exists

// Custom components
import { Click } from "@/components/custom/Click"
import { CustomDock } from "@/components/custom/Dock"

import {useState} from "react";

export function TodoList({ tasks, setTasks }: { tasks: any[], setTasks: any }) {
    const [inputValue, setInputValue] = React.useState("")

    const [editingTaskId, setEditingTaskId] = useState<string | null>(null)


    const addTask = () => {
        if (!inputValue.trim()) return
        setTasks([...tasks, { id: crypto.randomUUID(), text: inputValue, completed: false }])
        setInputValue("")
    }

    return (
        <>
            <Card className="h-[calc(100vh-8rem)] max-w-7xl w-full shadow-none border-none bg-transparent mx-auto">
                <CardHeader className="px-0">
                    <CardTitle className="text-2xl font-bold">My Tasks</CardTitle>
                    <div className="flex gap-2 pt-4">
                        <Input
                            placeholder="Add a new task (Enter)..."
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && addTask()}
                            className="rounded-md py-6 bg-background px-6 focus-visible:ring-1"
                        />
                        <Button onClick={addTask} size="icon" className="rounded-full shrink-0 p-6 mx-6">
                            <Plus className="size-6" />
                        </Button>
                    </div>
                </CardHeader>

                <CardContent className="px-0">
                    <ScrollArea className="h-[calc(100vh-18rem)] pr-4">
                        <div className="space-y-3">
                            {tasks.length === 0 && (
                                <p className="text-center text-muted-fg mt-10">No tasks yet. Start being productive!</p>
                            )}

                            {tasks.map((task) => (
                                <ContextMenu key={task.id}>
                                    <ContextMenuTrigger>
                                        <div className="group flex items-center justify-between p-3 rounded-xl border bg-card hover:bg-accent/50 transition-colors">
                                            <div className="flex items-center gap-3 w-full">
                                                <Checkbox
                                                    checked={task.completed}
                                                    onCheckedChange={(checked) => {
                                                        setTasks(tasks.map(t => t.id === task.id ? {
                                                            ...t,
                                                            completed: !!checked
                                                        } : t))
                                                    }}
                                                />

                                                {editingTaskId === task.id ? (
                                                    <div className="flex-1 flex items-center gap-2">

                                                        <Button
                                                            size="sm"
                                                            variant="outline"
                                                            className="h-8"
                                                            onClick={() => setEditingTaskId(null)}
                                                        >
                                                            Done
                                                        </Button>
                                                    </div>
                                                ) : (
                                                    <span
                                                        dangerouslySetInnerHTML={{ __html: task.text }}
                                                        className={cn("flex-1", task.completed && "line-through text-muted-fg")}
                                                    />
                                                )}
                                            </div>

                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="opacity-0 group-hover:opacity-100 text-destructive hover:text-destructive hover:bg-destructive/10"
                                                onClick={() => setTasks(tasks.filter(t => t.id !== task.id))}
                                            >
                                                <Trash2 className="size-4" />
                                            </Button>
                                        </div>
                                    </ContextMenuTrigger>
                                    <Click/>
                                </ContextMenu>
                            ))}
                        </div>
                    </ScrollArea>
                </CardContent>
            </Card>
            <CustomDock />
        </>
    )
}
"use client"

import * as React from "react"
import {Brain, Calculator, Calendar, CreditCard, List, Search, Settings, Smile, User} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import {
    Command,
    CommandInput,
    CommandList,
    CommandEmpty,
    CommandGroup,
    CommandItem,
    CommandSeparator, CommandShortcut
} from "@/components/ui/command"
import { Button } from "@/components/ui/button"
import {useEffect, useRef} from "react";

export function SearchBox() {
    const [isExpanded, setIsExpanded] = React.useState(false)
    const containerRef = React.useRef<HTMLDivElement>(null)
    const inputRef=useRef<HTMLInputElement>(null)

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                setIsExpanded(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key==='k'&&(e.metaKey||e.ctrlKey)){
                e.preventDefault()
                setIsExpanded(true)
                setTimeout(() => inputRef.current?.focus(), 50)
            }
        }
        document.addEventListener("keydown", down)
        return () => {
            document.removeEventListener("keydown", down)
        }
    }, []);


    return (
        <div className="relative flex items-center justify-center w-full">
            <motion.div
                initial={false}
                animate={{
                    width: isExpanded ? "540px" : "540px",
                    transition: { type: "spring", stiffness: 300, damping: 30 }
                }}
                className="relative z-50"
            >
                <Command className="rounded-full border bg-muted/50 focus-within:bg-background focus-within:ring-1 focus-within:ring-ring transition-all">
                    <div className="flex items-center px-3">
                        <CommandInput
                            ref={inputRef}
                            placeholder="Search tasks..."
                            onFocus={() => setIsExpanded(true)}
                            onBlur={() => setIsExpanded(false)}
                            // Added 'border-b-0' and 'focus:ring-offset-0' to clear the underline
                            className="h-9 text-md border-none border-b-0 outline-none focus:ring-0 focus:ring-offset-0 bg-transparent shadow-none"
                        />
                        <kbd className="pointer-events-none flex ml-auto h-9 select-none items-center gap-1 rounded-sm border bg-muted px-4 my-2 mx-6 font-mono text-xs font-medium opacity-100">
                            <span className="text-xs">⌘ K</span>
                        </kbd>
                    </div>

                    <AnimatePresence>
                        {isExpanded && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="absolute min-h-screen top-full left-0 w-full mt-2"
                            >
                                <CommandList className="bg-popover h-full border rounded-lg shadow-xl overflow-hidden">
                                    <CommandEmpty>No results found.</CommandEmpty>
                                    <CommandGroup heading="Recent">
                                        <CommandItem>
                                            <List/>
                                            <span>List1</span>
                                        </CommandItem>
                                        <CommandItem>
                                            <List/>
                                            <span>List3</span>
                                        </CommandItem>
                                        <CommandItem>
                                            <List/>
                                            <span>List3</span>
                                        </CommandItem>
                                        <CommandItem>
                                            <List/>
                                            <span>List4</span>
                                        </CommandItem>
                                    </CommandGroup>
                                    <CommandGroup heading="Suggestions">
                                        <CommandItem>
                                            <Calendar />
                                            <span>Calendar</span>
                                        </CommandItem>
                                        <CommandItem>
                                            <Smile />
                                            <span>Search Emoji</span>
                                        </CommandItem>
                                        <CommandItem disabled>
                                            <Calculator />
                                            <span>Calculator</span>
                                        </CommandItem>
                                    </CommandGroup>
                                    <CommandSeparator />
                                    <CommandGroup heading="Settings">
                                        <CommandItem>
                                            <User />
                                            <span>Profile</span>
                                            <CommandShortcut>⌘P</CommandShortcut>
                                        </CommandItem>
                                        <CommandItem>
                                            <Brain />
                                            <span>AI Assistant</span>
                                            <CommandShortcut>⌘R</CommandShortcut>
                                        </CommandItem>
                                        <CommandItem>
                                            <Settings />
                                            <span>Settings</span>
                                            <CommandShortcut>⌘S</CommandShortcut>
                                        </CommandItem>
                                    </CommandGroup>
                                </CommandList>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </Command>
            </motion.div>
        </div>
    )
}
'use client';

import {Badge} from "@/components/ui/badge"
import {Button} from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {AudioLinesIcon} from "@/components/ui/audio-lines";
import {CpuIcon} from "@/components/ui/cpu";
import {BookmarkCheckIcon} from "@/components/ui/bookmark-check";
import {FileStackIcon} from "@/components/ui/file-stack";
import {GitGraphIcon} from "@/components/ui/git-graph";
import {LayoutPanelTopIcon} from "@/components/ui/layout-panel-top";
import {useState} from "react";

type EventCardProps = {
    id: number;
    badge: string;
    badgeClassName: string; // Use this for custom Tailwind colors
    title: string;
    description: string;
    buttonText: string;
    icon: React.ComponentType<{ isHovered?: boolean; size?: number; className?: string }>;
};

const aiFeatures: EventCardProps[] = [
    {
        id: 1,
        badge: "Featured",
        badgeClassName: "bg-purple-500/10 text-purple-500 border-purple-500/20 hover:bg-purple-500/20",
        title: "Smart Task Prioritization",
        description: "Our AI analyzes your deadlines and habits to automatically rank your tasks by urgency and importance.",
        buttonText: "View Feature",
        icon:FileStackIcon
    },
    {
        id: 2,
        badge: "New",
        badgeClassName: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20 hover:bg-emerald-500/20",
        title: "AI Subtask Generator",
        description: "Break down overwhelming projects into manageable steps instantly with our natural language processing engine.",
        buttonText: "Try Generator",
        icon:GitGraphIcon
    },
    {
        id: 3,
        badge: "Beta",
        badgeClassName: "bg-amber-500/10 text-amber-500 border-amber-500/20 hover:bg-amber-500/20",
        title: "Voice-to-Task Sync",
        description: "Dictate your thoughts and let the AI extract dates, categories, and reminders directly into your list.",
        buttonText: "Enable Voice",
        icon: AudioLinesIcon
    },
    {
        id: 4,
        badge: "Advanced",
        badgeClassName: "bg-blue-500/10 text-blue-500 border-blue-500/20 hover:bg-blue-500/20",
        title: "Focus Window Predictor",
        description: "Predicts your high-energy hours based on past completion rates to suggest the best time for deep work.",
        buttonText: "Check Schedule",
        icon:LayoutPanelTopIcon
    },
    {
        id: 5,
        badge: "Core",
        badgeClassName: "bg-slate-500/10 text-slate-500 border-slate-500/20 hover:bg-slate-500/20",
        title: "Smart Rescheduling",
        description: "Missed a deadline? The AI intelligently reshuffles your week to ensure you stay on track without burnout.",
        buttonText: "Auto-Reschedule",
        icon:CpuIcon
    },
    {
        id: 6,
        badge: "System",
        badgeClassName: "bg-rose-500/10 text-rose-500 border-rose-500/20 hover:bg-rose-500/20",
        title: "Contextual Tagging",
        description: "Automatically organizes your tasks into categories like 'Work', 'Personal', or 'Errands' based on description.",
        buttonText: "Manage Tags",
        icon:BookmarkCheckIcon
    },
];


export default function RemindableAIPage() {
    return (
        <div className="min-h-screen p-8 flex items-center justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full">
                {aiFeatures.map((feature) => (
                    <HoverCard key={feature.id} feature={feature} />
                ))}
            </div>
        </div>
    );
}

function HoverCard({ feature }: { feature: (typeof aiFeatures)[0] }) {
    const [isHovered, setIsHovered] = useState(false);
    const Icon = feature.icon;

    const gradientColor = feature.badgeClassName.split(' ')[1].replace('text-', '');

    return (
        <Card
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative overflow-hidden transition-all duration-500 hover:shadow-xl"
        >
            <div
                className={`absolute inset-0 z-0 transition-opacity duration-700 ease-in-out ${
                    isHovered ? "opacity-20" : "opacity-0"
                }`}
                style={{
                    background: `radial-gradient(circle at 50% 30%, var(--${gradientColor}, currentColor), transparent 70%)`,
                }}
            />

            <div className="relative z-10 flex h-48 w-full items-center justify-center border-b">
                <div className={`transition-transform duration-500 ${isHovered ? "scale-125" : "scale-100"}`}>
                    <Icon
                        size={64}

                        className={`transition-colors duration-500 ${isHovered ? 'text-white' : 'text-slate-800 dark:text-slate-200'}`}
                        {...(isHovered ? { trigger: "hover" } : {})}
                    />
                </div>
            </div>

            <div className="relative z-10">
                <CardHeader>
                    <div className="mb-4">
                        <Badge variant="outline" className={`${feature.badgeClassName} backdrop-blur-md`}>
                            {feature.badge}
                        </Badge>
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-800 dark:text-white">{feature.title}</CardTitle>
                    <CardDescription className="text-slate-700 dark:text-slate-200 line-clamp-2 mb-4">
                        {feature.description}
                    </CardDescription>
                </CardHeader>

                <CardFooter>
                    <Button
                        className={`w-full transition-all duration-300 ${
                            isHovered
                                ? "bg-black text-white dark:text-black dark:bg-white/80 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                                : "bg-black/90 text-slate-100 dark:bg-white dark:text-black"
                        }`}
                    >
                        {feature.buttonText}
                    </Button>
                </CardFooter>
            </div>
        </Card>
    );
}
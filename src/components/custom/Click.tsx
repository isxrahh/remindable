import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuGroup,
    ContextMenuItem,
    ContextMenuLabel,
    ContextMenuSeparator,
    ContextMenuShortcut,
    ContextMenuTrigger,
} from "@/components/ui/context-menu"
import {Cross, CrossIcon, X} from "lucide-react";

export function Click() {
    return (
        <div className="mx-auto">
            <ContextMenuContent>
                <ContextMenuGroup>
                    <ContextMenuLabel>To-do</ContextMenuLabel>
                    <ContextMenuItem>
                        New Task
                        <ContextMenuShortcut>⌘ N</ContextMenuShortcut>
                    </ContextMenuItem>
                    <ContextMenuItem>
                        Open Task
                        <ContextMenuShortcut>⌘ O</ContextMenuShortcut>
                    </ContextMenuItem>
                    <ContextMenuItem>
                        Save
                        <ContextMenuShortcut>⌘ S</ContextMenuShortcut>
                    </ContextMenuItem>
                </ContextMenuGroup>
                <ContextMenuSeparator/>
                <ContextMenuGroup>
                    <ContextMenuLabel>Edit</ContextMenuLabel>
                    <ContextMenuItem>
                        Undo
                        <ContextMenuShortcut>⌘ Z</ContextMenuShortcut>
                    </ContextMenuItem>
                    <ContextMenuItem>
                        Redo
                        <ContextMenuShortcut>⌘ Z</ContextMenuShortcut>
                    </ContextMenuItem>
                </ContextMenuGroup>
                <ContextMenuSeparator/>
                <ContextMenuGroup>
                    <ContextMenuItem>
                        Cut
                        <ContextMenuShortcut>⌘ X</ContextMenuShortcut>
                    </ContextMenuItem>
                    <ContextMenuItem>
                        Copy
                        <ContextMenuShortcut>⌘ C</ContextMenuShortcut>
                    </ContextMenuItem>
                    <ContextMenuItem>
                        Paste
                        <ContextMenuShortcut>⌘ V</ContextMenuShortcut>
                    </ContextMenuItem>
                </ContextMenuGroup>
                <ContextMenuSeparator/>
                <ContextMenuGroup>
                    <ContextMenuItem variant="destructive">
                        Delete
                        <ContextMenuShortcut><X className="text-red-500"/></ContextMenuShortcut>
                    </ContextMenuItem>
                </ContextMenuGroup>
            </ContextMenuContent>
        </div>
    )
}

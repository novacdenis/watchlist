"use client";

import React from "react";
import { Bars3BottomLeftIcon } from "@heroicons/react/20/solid";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/providers/theme-provider";

function MainLayoutUser() {
  const theme = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="group flex items-center justify-center rounded-full bg-primary/5 p-1 transition-colors aria-expanded:bg-primary/10">
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://github.com/novacdenis.png" />
            <AvatarFallback>ND</AvatarFallback>
          </Avatar>
          <span className="px-2 text-muted-foreground transition-colors group-aria-expanded:text-primary">
            <Bars3BottomLeftIcon className="h-5 w-5" />
          </span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onSelect={(e) => e.preventDefault()} onClick={theme.toggle}>
          <span>Light mode</span>
          <Switch checked={theme.mode === "light"} className="ml-auto" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export { MainLayoutUser };

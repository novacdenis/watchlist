"use client";

import React from "react";
import { Bars3BottomLeftIcon } from "@heroicons/react/20/solid";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function MainLayoutUser() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="group flex items-center justify-center rounded-full bg-primary/10 p-1 transition-colors active:bg-primary/15 aria-expanded:bg-primary/15 md:hover:bg-primary/15">
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://github.com/novacdenis.png" />
            <AvatarFallback>ND</AvatarFallback>
          </Avatar>
          <span className="px-2 text-muted-foreground transition-colors group-active:text-primary group-aria-expanded:text-primary md:group-hover:text-primary">
            <Bars3BottomLeftIcon className="h-5 w-5" />
          </span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export { MainLayoutUser };

"use client";

import type { Theme } from "@/types";

import React from "react";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { cva } from "class-variance-authority";
import { MotionConfig, motion } from "framer-motion";
import { setUserTheme } from "@/features/auth/actions";
import { cn } from "@/utils/cn";

const buttonClasses = cva(
  [
    "absolute inset-y-0 flex h-8 w-8 items-center justify-center rounded-full bg-background/80 text-[10px] font-semibold uppercase text-muted-foreground shadow-sm",
  ],
  {
    variants: {
      effect: {
        enabled: [
          "colors active:bg-background active:text-primary md:hover:bg-background md:hover:text-primary",
        ],
      },
    },
    defaultVariants: {
      effect: null,
    },
  },
);

function MainLayoutTheme({ defaultTheme }: { defaultTheme: Theme }) {
  const [open, setOpen] = React.useState(false);
  const [effect, setEffect] = React.useState<"enabled" | null>(null);
  const [theme, setTheme] = React.useState<Theme>(defaultTheme);

  const updateTheme = React.useCallback((theme: Theme) => {
    setTheme(theme);
    setUserTheme(theme);
    document.documentElement.setAttribute("data-color-scheme", theme);
  }, []);

  const getInitialState = React.useCallback(
    (mode: "auto" | "light" | "dark") => {
      if (mode === theme) {
        return { opacity: 1, scale: 1, right: 0 };
      }

      return { opacity: 0, scale: 0, right: 0 };
    },
    [theme],
  );

  const getAnimationState = React.useCallback(
    (mode: "auto" | "light" | "dark") => {
      const right = { auto: 72, light: 36, dark: 0 };

      if (open) {
        return { opacity: 1, scale: 1, right: right[mode] };
      }

      if (mode === theme) {
        return { opacity: 1, scale: 1, right: 0 };
      }

      return { opacity: 0, scale: 0, right: 0 };
    },
    [open, theme],
  );

  const createClickHandler = React.useCallback(
    (mode: "auto" | "light" | "dark") => {
      return (event: React.MouseEvent<HTMLButtonElement>) => {
        if (!open) {
          return;
        }

        event.stopPropagation();
        setOpen(false);
        updateTheme(mode);
      };
    },
    [open, updateTheme],
  );

  const createKeydownHandler = React.useCallback(
    (mode: "auto" | "light" | "dark") => {
      return (event: React.KeyboardEvent<HTMLButtonElement>) => {
        if (!open) {
          return;
        }

        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          event.stopPropagation();
          setOpen(false);
          updateTheme(mode);
          event.currentTarget.parentElement?.parentElement?.focus();
        }
      };
    },
    [open, updateTheme],
  );

  return (
    <div
      role="button"
      aria-expanded={open}
      tabIndex={open ? -1 : 0}
      className={cn(
        "group flex cursor-auto items-center rounded-full bg-primary/10 p-1 transition-colors aria-expanded:bg-primary/15",
        {
          "cursor-pointer active:bg-primary/15 md:hover:bg-primary/15": !open,
        },
      )}
      onClick={() => setOpen(true)}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          setOpen(false);
          event.currentTarget.focus();
        } else if (event.key === "Enter" || event.key === " ") {
          setOpen(true);
          event.preventDefault();
          event.currentTarget.querySelector("button")?.focus();
        }
      }}
      onBlur={() => {
        requestAnimationFrame(() => {
          if (document.activeElement instanceof HTMLElement) {
            const parent = document.activeElement.parentElement;

            if (!parent || parent.id !== "theme-selector") {
              setOpen(false);
            }
          }
        });
      }}
    >
      <MotionConfig transition={{ type: "spring", stiffness: 400, damping: 30 }}>
        <motion.span
          animate={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
          className="flex items-center justify-center px-0.5 text-muted-foreground transition-colors group-active:text-primary group-aria-expanded:text-primary md:group-hover:text-primary"
        >
          <ChevronLeftIcon className="h-5 w-5" />
        </motion.span>

        <motion.div
          id="theme-selector"
          role="menu"
          initial={{ width: theme === "auto" ? 40 : 32 }}
          animate={{ width: open ? 112 : theme === "auto" ? 40 : 32 }}
          className="relative flex h-8 gap-1"
          onAnimationComplete={() => setEffect(open ? "enabled" : null)}
        >
          <motion.button
            tabIndex={open ? 0 : -1}
            initial={getInitialState("auto")}
            animate={getAnimationState("auto")}
            className={cn(buttonClasses({ effect }), "w-10")}
            onClick={createClickHandler("auto")}
            onKeyDown={createKeydownHandler("auto")}
          >
            Auto
          </motion.button>
          <motion.button
            tabIndex={open ? 0 : -1}
            initial={getInitialState("light")}
            animate={getAnimationState("light")}
            className={cn(buttonClasses({ effect }))}
            onClick={createClickHandler("light")}
            onKeyDown={createKeydownHandler("light")}
          >
            <SunIcon className="h-5 w-5" />
          </motion.button>
          <motion.button
            tabIndex={open ? 0 : -1}
            initial={getInitialState("dark")}
            animate={getAnimationState("dark")}
            className={cn(buttonClasses({ effect }))}
            onClick={createClickHandler("dark")}
            onKeyDown={createKeydownHandler("dark")}
          >
            <MoonIcon className="h-5 w-5" />
          </motion.button>
        </motion.div>
      </MotionConfig>
    </div>
  );
}

export { MainLayoutTheme };

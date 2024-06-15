"use client";

import type { Theme } from "@/types";

import React from "react";
import { setUserTheme } from "@/features/auth/actions";
import { disableAnimations } from "@/utils/disable-animations";

interface ThemeProviderContextValue {
  mode: Theme;
  toggle: () => void;
}

interface ThemeProviderProps {
  defaultTheme: Theme;
  children: React.ReactNode;
}

const ThemeProviderContext = React.createContext<ThemeProviderContextValue | null>(null);

const useTheme = () => {
  const context = React.useContext(ThemeProviderContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};

interface ThemeProviderProps {
  defaultTheme: Theme;
  children: React.ReactNode;
}
const ThemeProvider: React.FC<ThemeProviderProps> = ({ defaultTheme, children }) => {
  const [mode, setMode] = React.useState<Theme>(defaultTheme);

  const toggle = React.useCallback(() => {
    const newMode = mode === "light" ? "dark" : "light";
    const enableAnimations = disableAnimations();

    setMode(newMode);
    setUserTheme(newMode);
    document.documentElement.style.colorScheme = newMode;
    document.documentElement.classList.replace(mode, newMode);
    enableAnimations();
  }, [mode]);

  return (
    <ThemeProviderContext.Provider value={React.useMemo(() => ({ mode, toggle }), [mode, toggle])}>
      {children}
    </ThemeProviderContext.Provider>
  );
};

export { ThemeProvider, useTheme };

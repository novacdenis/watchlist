"use client";

import type { Theme } from "@/types";

import React from "react";
import { setUserTheme } from "@/features/auth/actions";
import { disableAnimations } from "@/utils/disable-animations";

interface ThemeProviderContextValue {
  theme: Theme;
  toggleTheme: () => void;
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
  const [theme, setTheme] = React.useState<Theme>(defaultTheme);

  const toggleTheme = React.useCallback(() => {
    const newTheme = theme === "light" ? "dark" : "light";
    const enableAnimations = disableAnimations();

    setTheme(newTheme);
    setUserTheme(newTheme);
    document.documentElement.style.colorScheme = newTheme;
    document.documentElement.classList.replace(theme, newTheme);
    enableAnimations();
  }, [theme]);

  return (
    <ThemeProviderContext.Provider
      value={React.useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme])}
    >
      {children}
    </ThemeProviderContext.Provider>
  );
};

export { ThemeProvider, useTheme };

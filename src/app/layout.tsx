import type { Theme } from "@/types";

import { cookies } from "next/headers";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { MainLayout } from "@/layouts/main-layout";
import { ThemeProvider } from "@/providers/theme-provider";
import { cn } from "@/utils/cn";

import "@/styles/index.css";

export const metadata = {
  title: "Watchlist",
  description: "A simple watchlist app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const theme = cookies().get("user_theme")?.value as Theme;
  const resolvedTheme = theme ?? "dark";

  return (
    <html
      lang="en"
      className={cn(GeistSans.variable, GeistMono.variable, resolvedTheme)}
      style={{ colorScheme: resolvedTheme }}
    >
      <body>
        <ThemeProvider defaultTheme={resolvedTheme}>
          <MainLayout>{children}</MainLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}

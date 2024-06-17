import { Inter, Fira_Code } from "next/font/google";
import { getUserTheme } from "@/features/auth/actions";
import { MainLayout } from "@/layouts/main-layout";
import { cn } from "@/utils/cn";

import "@/styles/index.css";

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter-sans",
});

const firacode = Fira_Code({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  variable: "--font-fira-mono",
});

export const metadata = {
  title: "Watchlist",
  description: "A simple watchlist app",
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const theme = await getUserTheme();

  return (
    <html lang="en" data-color-scheme={theme} className={cn(inter.variable, firacode.variable)}>
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}

import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { getUserTheme } from "@/features/auth/actions";
import { MainLayout } from "@/layouts/main-layout";
import { cn } from "@/utils/cn";

import "@/styles/index.css";

export const metadata = {
  title: "Watchlist",
  description: "A simple watchlist app",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const theme = await getUserTheme();

  return (
    <html
      lang="en"
      data-color-scheme={theme}
      className={cn(GeistSans.variable, GeistMono.variable)}
    >
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}

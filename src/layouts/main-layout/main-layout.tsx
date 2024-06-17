import Link from "next/link";
import { PlayCircleIcon } from "@heroicons/react/24/solid";
import { getUserTheme } from "@/features/auth/actions";

import { MainLayoutTheme } from "./main-layout-theme";
import { MainLayoutUser } from "./main-layout-user";

async function MainLayout({ children }: { children: React.ReactNode }) {
  const theme = await getUserTheme();

  return (
    <>
      <header className="flex items-center justify-between gap-x-2.5 p-5">
        <Link href="/" className="flex items-center gap-x-2 overflow-hidden text-xl font-medium">
          <PlayCircleIcon className="h-6 w-6 shrink-0 text-purple-500" />
          <span className="truncate">watchlist</span>
        </Link>

        <div className="flex gap-x-2.5">
          <MainLayoutTheme defaultTheme={theme} />
          <MainLayoutUser />
        </div>
      </header>

      <main>{children}</main>
    </>
  );
}

export { MainLayout };

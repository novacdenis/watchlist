import { getUserTheme } from "@/features/auth/actions";

import { MainLayoutTheme } from "./main-layout-theme";
import { MainLayoutUser } from "./main-layout-user";

async function MainLayout({ children }: { children: React.ReactNode }) {
  const theme = await getUserTheme();

  return (
    <>
      <header className="flex items-center justify-end gap-x-2 p-5">
        <MainLayoutTheme defaultTheme={theme} />
        <MainLayoutUser />
      </header>

      <main>{children}</main>
    </>
  );
}

export { MainLayout };

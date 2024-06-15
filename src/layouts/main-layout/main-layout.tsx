import { MainLayoutTheme } from "./main-layout-theme";
import { MainLayoutUser } from "./main-layout-user";

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="flex items-center justify-end gap-x-2">
        <MainLayoutTheme />
        <MainLayoutUser />
      </header>

      <main>{children}</main>
    </>
  );
}

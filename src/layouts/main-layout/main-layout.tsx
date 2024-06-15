import { MainLayoutUser } from "./main-layout-user";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="flex items-center justify-end gap-x-2 p-5">
        <MainLayoutUser />
      </header>

      <main>{children}</main>
    </>
  );
}

export { MainLayout };

import { Background } from "./background";
import { Sidebar } from "./sidebar";
import { Topbar } from "./topbar";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Background />
      <Sidebar />
      <main className="min-h-screen px-4 py-5 sm:px-6 lg:ml-64 lg:px-8 xl:px-10">
        <Topbar />
        {children}
      </main>
    </>
  );
}

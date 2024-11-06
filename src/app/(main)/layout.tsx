import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="relative flex min-h-screen w-full flex-col items-center justify-center">
        <SidebarTrigger className="absolute left-0 top-0" />
        {children}
      </main>
    </SidebarProvider>
  );
}

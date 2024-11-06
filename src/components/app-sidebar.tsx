import { type ComponentProps, Suspense } from "react";

import { NavLinks } from "@/components/nav-links";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import { UserNav } from "@/features/users/components/user-nav";

import { auth } from "@/server/auth";

export function AppSidebar({ ...props }: ComponentProps<typeof Sidebar>) {
  const sessionPromise = auth();

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>{/* LOGO */}</SidebarHeader>
      <SidebarContent>
        <NavLinks />
      </SidebarContent>
      <SidebarFooter>
        <Suspense
          fallback={
            <div className="flex h-16 w-full items-center justify-center gap-2 px-2 pt-2">
              <Skeleton className="size-11 rounded-lg" />
              <div className="flex grow flex-col gap-1.5">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
              </div>
            </div>
          }
        >
          <UserNav sessionPromise={sessionPromise} />
        </Suspense>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

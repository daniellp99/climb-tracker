"use client";
import { cn } from "@/lib/utils";
import { Calendar1Icon, PersonStandingIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export const links = [
  { title: "Calendar", url: "/calendar", icon: Calendar1Icon },
  { title: "Routines", url: "/routines", icon: PersonStandingIcon },
];

export function NavLinks() {
  const pathname = usePathname();
  return (
    <SidebarGroup>
      <SidebarMenu>
        {links.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton
              tooltip={item.title}
              asChild
              isActive={pathname.startsWith(item.url)}
              className={cn(
                pathname.startsWith(item.url) &&
                  "data-[active=true]:bg-primary data-[active=true]:text-primary-foreground data-[active=true]:hover:bg-primary/90",
              )}
            >
              <Link href={item.url}>
                {item.icon && <item.icon />}
                <span>{item.title}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}

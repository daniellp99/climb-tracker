"use client";
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

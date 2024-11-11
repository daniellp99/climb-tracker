"use client";
import { LogOutIcon } from "lucide-react";
import { type Session } from "next-auth";

import {
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import { LogOut } from "../actions/log-out";

export default function UserDropdownActions({
  name,
  email,
}: {
  name: Session["user"]["name"];
  email: Session["user"]["email"];
}) {
  return (
    <>
      <DropdownMenuLabel className="font-normal">
        <div className="grid space-y-1">
          <span className="truncate font-semibold">{name}</span>
          <span className="truncate text-xs text-muted-foreground">
            {email}
          </span>
        </div>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem
        onClick={async () => {
          await LogOut();
        }}
      >
        <LogOutIcon />
        Log out
      </DropdownMenuItem>
    </>
  );
}

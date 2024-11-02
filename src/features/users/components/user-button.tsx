import { LogOutIcon } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { auth, signIn, signOut } from "@/server/auth";

export default async function UserButton() {
  const session = await auth();

  if (!session?.user)
    return (
      <form
        action={async () => {
          "use server";
          await signIn("github", { redirectTo: "/calendar" });
        }}
      >
        <Button type="submit" variant="ghost">
          Sign in
        </Button>
      </form>
    );
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="size-10">
        <Button
          variant="ghost"
          className="ring-primary-foreground rounded-full ring-2"
        >
          <Avatar>
            <AvatarImage
              src={session.user.image ?? undefined}
              alt={session.user.name ?? "avatar"}
            />
            <AvatarFallback>{session.user?.name}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="grid space-y-1">
            <p className="text-sm font-semibold leading-none">
              {session.user.name}
            </p>
            <p className="text-muted-foreground text-xs leading-none">
              {session.user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={async () => {
            "use server";
            await signOut();
          }}
        >
          <LogOutIcon />
          Log Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

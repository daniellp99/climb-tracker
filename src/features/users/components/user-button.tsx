import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UserDropdownActions from "@/features/users/components/user-dropdown-actions";

import { generateInitials } from "@/lib/utils";
import { auth, signIn } from "@/server/auth";

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
          className="rounded-full ring-2 ring-primary-foreground"
        >
          <Avatar>
            <AvatarImage
              src={session.user.image ?? undefined}
              alt={session.user.name ?? "avatar"}
            />
            <AvatarFallback>
              {generateInitials(session.user.name ?? "")}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <UserDropdownActions
          name={session.user.name}
          email={session.user.email}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

import { PlusIcon } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { DialogTrigger } from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function RoutinesPage() {
  return (
    <>
      <h1 className="text-5xl font-extrabold tracking-tight text-primary-foreground sm:text-[5rem]">
        Routines
      </h1>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <DialogTrigger asChild>
              <Button size="icon" className="size-8 [&_svg]:size-6" asChild>
                <Link href="/routines/new">
                  <PlusIcon />
                </Link>
              </Button>
            </DialogTrigger>
          </TooltipTrigger>
          <TooltipContent>
            <p>New Routine</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
}

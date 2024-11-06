"use client";
import { useSidebar } from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export default function UserNavSkeleton() {
  const { state } = useSidebar();

  return (
    <div
      className={cn(
        "flex items-center justify-center",
        state === "collapsed" && "size-8",
        state === "expanded" && "h-14 w-full gap-2 px-2 pt-2",
      )}
    >
      <Skeleton
        className={cn(
          "rounded-lg",
          state === "collapsed" && "size-full",
          state == "expanded" && "size-11",
        )}
      />
      <div
        className={cn(
          "flex-col gap-1.5",
          state === "collapsed" && "hidden",
          state == "expanded" && "flex grow",
        )}
      >
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </div>
    </div>
  );
}

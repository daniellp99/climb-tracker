import React, { lazy, Suspense } from "react";
import { type LucideProps } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";

import { Skeleton } from "@/components/ui/skeleton";

import { cn } from "@/lib/utils";

interface IconProps extends Omit<LucideProps, "ref"> {
  name: keyof typeof dynamicIconImports;
  size: "sm" | "md";
}

const Icon = ({ name, size, ...props }: IconProps) => {
  const LucideIcon = lazy(dynamicIconImports[name]);

  return (
    <Suspense
      fallback={
        <Skeleton
          className={cn(size === "sm" && "size-4", size === "md" && "size-6")}
        />
      }
    >
      <LucideIcon {...props} />
    </Suspense>
  );
};

export default Icon;

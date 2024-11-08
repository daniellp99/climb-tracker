"use client";

import { useRouter } from "next/navigation";

import { Dialog } from "@/components/ui/dialog";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <Dialog onOpenChange={(open) => !open && router.back()}>{children}</Dialog>
  );
}

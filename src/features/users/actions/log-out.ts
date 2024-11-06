"use server";

import { signOut } from "@/server/auth";

export async function LogOut() {
  await signOut();
}

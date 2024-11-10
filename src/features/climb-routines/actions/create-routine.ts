"use server";
import { redirect } from "next/navigation";

import { insertClimbRoutineSchema } from "@/features/climb-routines/types";
import { type ActionState } from "@/lib/utils";
import { auth } from "@/server/auth";
import { db } from "@/server/db";
import { climbRoutines } from "@/server/db/schema";

export async function createClimbRoutine(
  prevState: ActionState<typeof insertClimbRoutineSchema>,
  formData: FormData,
): Promise<ActionState<typeof insertClimbRoutineSchema>> {
  const session = await auth();
  if (!session) redirect("/");

  const formFields = Object.fromEntries(formData.entries());

  const parsed = insertClimbRoutineSchema.safeParse(formFields);

  if (!parsed.success) {
    return {
      status: "error",
      message: "Validation Error",
      errors: parsed.error.flatten().fieldErrors,
      payload: { ...formFields },
    };
  }
  const insertedId = await db
    .insert(climbRoutines)
    .values({
      userId: session.user.id,
      ...parsed.data,
    })
    .returning({ insertedId: climbRoutines.id });

  if (insertedId.length === 0) {
    return {
      status: "error",
      message: "Error creating routine",
      payload: { ...formFields },
    };
  }
  // TODO:revalidate the cache

  return {
    status: "success",
    message: "Routine created successfully",
  };
}

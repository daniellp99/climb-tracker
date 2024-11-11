import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

import { climbRoutines } from "@/server/db/schema";
import { iconsEnum } from "@/features/climb-routines/data/icons";

export const insertClimbRoutineSchema = createInsertSchema(climbRoutines, {
  name: (schema) => schema.name.min(1, "Required"),
  description: (schema) => schema.description.min(1, "Required"),
  iconName: z.nativeEnum(iconsEnum, {
    message: "Invalid icon name",
  }),
}).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  userId: true,
});

export type CreateClimbRoutine = z.infer<typeof insertClimbRoutineSchema>;

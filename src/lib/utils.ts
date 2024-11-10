import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { type z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateInitials(name: string) {
  const [firstName, lastName] = name.split(" ", 2);
  return String(firstName?.slice(0, 1)) + String(lastName?.slice(0, 1));
}

export type ActionState<TSchemaType extends z.ZodType> = {
  status: "success" | "error" | "initial";
  message: string;
  errors?: z.inferFlattenedErrors<TSchemaType>["fieldErrors"];
  payload?: Partial<z.infer<TSchemaType>>;
};

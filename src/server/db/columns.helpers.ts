import { sql } from "drizzle-orm";
import { integer, text } from "drizzle-orm/sqlite-core";

export const timestamps = {
  createdAt: text()
    .default(sql`(CURRENT_TIMESTAMP)`)
    .notNull(),
  updatedAt: integer({ mode: "timestamp" }).$onUpdate(() => new Date()),
};

import { sqliteTable, text } from "drizzle-orm/sqlite-core";

import { timestamps } from "@/server/db/columns.helpers";
import { users } from "@/server/db/schema/users";

export const climbRoutines = sqliteTable("climbRoutine", {
  id: text()
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  userId: text()
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  iconName: text().notNull(),
  name: text().notNull(),
  description: text().notNull(),
  ...timestamps,
});

import { drizzle, type LibSQLDatabase } from "drizzle-orm/libsql";

import { env } from "@/env";

/**
 * Cache the database connection in development. This avoids creating a new connection on every HMR
 * update.
 */
const globalForDb = globalThis as unknown as {
  db: LibSQLDatabase | undefined;
};

export const db =
  globalForDb.db ??
  drizzle({
    connection: {
      url: env.DATABASE_URL,
      authToken: env.DATABASE_AUTH_TOKEN,
    },
  });
if (env.NODE_ENV !== "production") globalForDb.db = db;

import type { Database } from "sqlite";

export async function up(db: Database) {
  await db.exec(`
    CREATE TABLE IF NOT EXISTS products (
      id          INTEGER      PRIMARY KEY AUTOINCREMENT,
      name        VARCHAR(150) NOT NULL,
      description TEXT         DEFAULT NULL,
      status      INTEGER      NOT NULL DEFAULT 1 CHECK (status IN (0, 1)),
      created_at  DATETIME     DEFAULT CURRENT_TIMESTAMP,
      updated_at  DATETIME
    );
    `);
}

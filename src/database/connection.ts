import { Database, open } from "sqlite";
import sqlite3 from "sqlite3";

let db: Database | null = null;

export default async function getConnection(): Promise<Database> {
  if (db) return db;

  db = await open({
    filename: "./database.db",
    driver: sqlite3.Database,
  });

  console.log("SQLite Connected");

  return db;
}

import getConnection from "../database/connection.js";
import type { Product } from "../types/product.js";

const db = await getConnection();

export async function getAll(): Promise<Product[]> {
  const rows = await db.all(`
    SELECT id, name, description, status FROM products
    `);

  return rows as Product[];
}

export async function create(product: Product): Promise<void> {
  const { name, description } = product;

  const stmt = await db.prepare(
    "INSERT INTO products (name, description) VALUES (?, ?)",
  );

  await stmt.run([name, description]);

  await stmt.finalize();
}

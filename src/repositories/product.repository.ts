import getConnection from "../database/connection.js";
import type { Product } from "../types/product.js";

const db = await getConnection();

export async function getAll(): Promise<Product[] | null> {
  const rows = await db.all(`
    SELECT id, name, description, status FROM products
    `);

  return rows as Product[] | null;
}

export async function getById(id: number): Promise<Product | null> {
  const stmt = await db.prepare("SELECT * FROM products WHERE id = ?");

  const row = await stmt.get(id);

  await stmt.finalize();

  return row as Product | null;
}

export async function create(product: Product): Promise<void> {
  const { name, description } = product;

  const stmt = await db.prepare(
    "INSERT INTO products (name, description) VALUES (?, ?)",
  );

  await stmt.run([name, description]);

  await stmt.finalize();
}

export async function update(product: Product): Promise<void> {
  const stmt = await db.prepare(
    "UPDATE products SET name = ?, description = ?, status = ?, updated_at = ? WHERE id = ?",
  );

  await stmt.run(
    product.name,
    product.description,
    product.status,
    product.updated_at,
    product.id,
  );

  await stmt.finalize();
}

export async function destroy(id: number): Promise<void> {
  const stmt = await db.prepare("DELETE FROM products WHERE id = ?");

  await stmt.run(id);

  await stmt.finalize();
}

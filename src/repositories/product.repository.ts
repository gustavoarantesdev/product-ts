import getConnection from "../database/connection.js";
import type {
  CreateProductDTO,
  UpdateProductDTO,
} from "../schemas/product.schema.js";
import type { Product } from "../types/product.js";

const db = await getConnection();

export async function getAll(): Promise<Product[]> {
  const rows = await db.all(`
    SELECT
      id,
      name,
      description,
      status
    FROM products
  `);

  return rows as Product[];
}

export async function getById(id: number): Promise<Product | null> {
  const stmt = await db.prepare(`
    SELECT *
    FROM products
    WHERE id = ?
  `);

  const row = await stmt.get(id);

  await stmt.finalize();

  return row as Product | null;
}

export async function create(data: CreateProductDTO): Promise<void> {
  const { name, description } = data;

  const stmt = await db.prepare(`
    INSERT INTO products (
      name,
      description
    )
    VALUES (?, ?)
  `);

  await stmt.run([name, description]);

  await stmt.finalize();
}

export async function update(
  id: number,
  data: UpdateProductDTO,
): Promise<number | undefined> {
  const stmt = await db.prepare(`
    UPDATE products
    SET
      name = ?,
      description = ?,
      status = ?,
      updated_at = CURRENT_TIMESTAMP
    WHERE id = ?
  `);

  const result = await stmt.run(
    data.name,
    data.description,
    data.status,
    id,
  );

  await stmt.finalize();

  return result.changes;
}

export async function destroy(id: number): Promise<number | undefined> {
  const stmt = await db.prepare(`
    DELETE FROM products
    WHERE id = ?
  `);

  const result = await stmt.run(id);

  await stmt.finalize();

  return result.changes;
}

import getConnection from "../database/connection.js";
import type { Product } from "../types/product.js";

const db = await getConnection();

export async function findAllProducts(): Promise<Product[]> {
  const rows = await db.all(`
    SELECT id, name, description, status FROM products
    `);

  return rows as Product[];
}

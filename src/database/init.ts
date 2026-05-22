import getConnection from "./connection.js";
import { up as createProduct } from "./migrations/001_create_products.js";

export async function initDatabase() {
  const db = await getConnection();

  console.log("Running migrations...");

  await createProduct(db);

  console.log("Database ready");
}

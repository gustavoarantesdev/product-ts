import { findAllProducts } from "../repositories/product.repository.js";

export async function listAllProducts() {
  return await findAllProducts();
}

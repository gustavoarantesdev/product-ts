import * as productRepository from "../repositories/product.repository.js";
import type { Product } from "../types/product.js";

export async function getAll() {
  return await productRepository.getAll();
}

export async function create(product: Product): Promise<void> {
  return await productRepository.create(product);
}

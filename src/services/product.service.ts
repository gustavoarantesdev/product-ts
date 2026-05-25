import * as productRepository from "../repositories/product.repository.js";
import type { Product } from "../types/product.js";

export async function getAll(): Promise<Product[]> {
  return await productRepository.getAll();
}

export async function getById(id: number): Promise<Product> {
  const product = await productRepository.getById(id);

  if (!product) {
    throw new Error("Product not found");
  }

  return product;
}

export async function create(product: Product): Promise<void> {
  return await productRepository.create(product);
}

export async function update(product: Product): Promise<void> {
  return await productRepository.update(product);
}

export async function destroy(id: number): Promise<void> {
  return await productRepository.destroy(id);
}

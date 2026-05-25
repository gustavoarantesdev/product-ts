import * as productRepository from "../repositories/product.repository.js";
import type { CreateProductDTO } from "../schemas/product.schema.js";
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

export async function create(data: CreateProductDTO): Promise<void> {
  return await productRepository.create(data);
}

export async function update(product: Product): Promise<void> {
  const changes = await productRepository.update(product);

  if (!changes) {
    throw new Error("Product not found");
  }
}

export async function destroy(id: number): Promise<void> {
  const changes = await productRepository.destroy(id);

  if (!changes) {
    throw new Error("Product not found");
  }
}

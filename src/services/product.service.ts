import * as productRepository from "../repositories/product.repository.js";
import type {
  Product,
  CreateProductDTO,
  UpdateProductDTO,
} from "../schemas/product.schema.js";

export async function getAll(): Promise<Product[]> {
  return await productRepository.findAll();
}

export async function getById(id: number): Promise<Product> {
  const product = await productRepository.findById(id);

  if (!product) {
    throw new Error("Product not found");
  }

  return product;
}

export async function create(data: CreateProductDTO): Promise<void> {
  return await productRepository.create(data);
}

export async function update(
  id: number,
  data: UpdateProductDTO,
): Promise<void> {
  const changes = await productRepository.update(id, data);

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

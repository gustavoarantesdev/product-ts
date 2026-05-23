import type { Request, Response } from "express";
import { listAllProducts } from "../services/product.service.js";

export async function getAllProducts(req: Request, res: Response) {
  try {
    const products = await listAllProducts();

    return res.status(200).json(products);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
}

export function getProductById(req: Request, res: Response) {
  //
}

export function createProduct(req: Request, res: Response) {
  //
}

export function updateProduct(req: Request, res: Response) {
  //
}

export function deleteProduct(req: Request, res: Response) {
  //
}

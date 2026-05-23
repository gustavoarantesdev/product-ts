import type { Request, Response } from "express";
import * as productService from "../services/product.service.js";

export async function getAllProducts(
  req: Request,
  res: Response,
): Promise<Response> {
  try {
    const products = await productService.listAllProducts();

    return res.status(200).json(products);
  } catch (error: any) {
    return res.status(400).json({
      error: error.message,
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

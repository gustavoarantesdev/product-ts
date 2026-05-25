import type { Request, Response } from "express";
import * as productService from "../services/product.service.js";
import type { Product } from "../types/product.js";

export async function getAll(req: Request, res: Response): Promise<Response> {
  try {
    const products = await productService.getAll();

    return res.status(200).json(products);
  } catch (error: any) {
    return res.status(400).json({
      error: error.message,
    });
  }
}

export async function getById(req: Request, res: Response) {
  const productId: number = Number(req.params.id);

  if (isNaN(productId)) {
    return res.status(400).json({
      error: "Invalid product id",
    });
  }

  try {
    const product = await productService.getById(productId);

    return res.status(200).json(product);
  } catch (error: any) {
    return res.status(400).json({
      error: error.message,
    });
  }
}

export async function create(req: Request, res: Response): Promise<Response> {
  const product: Product = req.body;

  try {
    await productService.create(product);

    return res.status(201).json({ message: "Product created" });
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
}

export function updateProduct(req: Request, res: Response) {
  //
}

export function deleteProduct(req: Request, res: Response) {
  //
}

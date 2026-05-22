import type { Request, Response } from "express";
import type { Product } from "../types/product.js";

export function getProducts(req: Request, res: Response) {
  res.status(200).send("Todos os produtos");
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

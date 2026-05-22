import type { Request, Response } from "express";
import type { Product } from "../types/product.js";

export function getProducts(req: Request, res: Response) {
  res.status(200).send("Todos os produtos");
}

import type { Request, Response } from "express";
import * as productService from "../services/product.service.js";
import {
  createProductSchema,
  updateProductSchema,
} from "../schemas/product.schema.js";
import AppError from "../utils/AppError.js";

export async function getAll(_: Request, res: Response): Promise<Response> {
  const allData = await productService.getAll();

  if (allData.length === 0) {
    throw new AppError("Producs no found", 404);
  }

  return res.status(200).json(allData);
}

export async function getById(req: Request, res: Response): Promise<Response> {
  const id = isValidId(req.params.id);

  const data = await productService.getById(id);

  return res.status(200).json(data);
}

export async function create(req: Request, res: Response): Promise<Response> {
  const dataParsed = createProductSchema.safeParse(req.body);

  if (dataParsed.error) {
    return res.status(400).json({
      error: dataParsed.error.issues,
    });
  }

  await productService.create(dataParsed.data);

  return res.status(201).json({ message: "Product created" });
}

export async function update(req: Request, res: Response): Promise<Response> {
  const id = isValidId(req.params.id);

  const dataParsed = updateProductSchema.safeParse(req.body);

  if (dataParsed.error) {
    return res.status(400).json({
      error: dataParsed.error.issues,
    });
  }

  await productService.update(id, dataParsed.data);

  return res.status(200).json({ message: "Product updated" });
}

export async function destroy(req: Request, res: Response): Promise<Response> {
  const id = isValidId(req.params.id);

  await productService.destroy(id);

  return res.status(200).json({ message: "Product deleted" });
}

function isValidId(id: any): number {
  const idConverted = Number(id);

  if (isNaN(idConverted)) {
    throw new AppError("Invalid product id", 400);
  }

  return idConverted;
}

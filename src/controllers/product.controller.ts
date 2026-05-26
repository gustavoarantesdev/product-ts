import type { Request, Response } from "express";
import * as productService from "../services/product.service.js";
import type { Product } from "../types/product.js";
import {
  createProductSchema,
  updateProductSchema,
} from "../schemas/product.schema.js";

export async function getAll(req: Request, res: Response): Promise<Response> {
  try {
    const allData = await productService.getAll();

    return res.status(200).json(allData);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
}

export async function getById(req: Request, res: Response): Promise<Response> {
  const id = idIsNumber(req.params.id);

  if (id === null) {
    return res.status(400).json({ error: "Invalid product id" });
  }

  try {
    const data = await productService.getById(id);

    return res.status(200).json(data);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
}

export async function create(req: Request, res: Response): Promise<Response> {
  const dataParsed = createProductSchema.safeParse(req.body);

  if (dataParsed.error) {
    return res.status(400).json({
      error: dataParsed.error.issues,
    });
  }

  try {
    await productService.create(dataParsed.data);

    return res.status(201).json({ message: "Product created" });
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
}

export async function update(req: Request, res: Response): Promise<Response> {
  const id = idIsNumber(req.params.id);

  if (id === null) {
    return res.status(400).json({ error: "Invalid product id" });
  }

  const dataParsed = updateProductSchema.safeParse(req.body);

  if (dataParsed.error) {
    return res.status(400).json({
      error: dataParsed.error.issues,
    });
  }

  try {
    await productService.update(id, dataParsed.data);

    return res.status(200).json({ message: "Product updated" });
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
}

export async function destroy(req: Request, res: Response): Promise<Response> {
  const id = idIsNumber(req.params.id);

  if (id === null) {
    return res.status(400).json({ error: "Invalid product id" });
  }

  try {
    await productService.destroy(id);

    return res.status(200).json({ message: "Product deleted" });
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
}

function idIsNumber(id: any): number | null {
  const idConverted = Number(id);

  if (isNaN(idConverted)) {
    return null;
  }

  return idConverted;
}

import { z } from "zod";

export const productSchema = z.object({
  id: z.number(),
  name: z.string().min(3),
  description: z.string(),
  status: z.number(),
  updated_at: z.date(),
  created_at: z.date(),
});

export type Product = z.infer<typeof productSchema>;

export const createProductSchema = z.object({
  name: z.string().min(3),
  description: z.string(),
});

export type CreateProductDTO = z.infer<typeof createProductSchema>;

export const updateProductSchema = z.object({
  name: z.string().min(3),
  description: z.string(),
  status: z.number(),
});

export type UpdateProductDTO = z.infer<typeof updateProductSchema>;

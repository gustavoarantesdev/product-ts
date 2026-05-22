import { Router } from "express";
import * as ProductController from "../controllers/product.controller.js";

const productRoutes = Router();

productRoutes.get("/", ProductController.getProducts)

export default productRoutes;

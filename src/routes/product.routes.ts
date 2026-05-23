import { Router } from "express";
import * as productController from "../controllers/product.controller.js";

const productRoutes = Router();

productRoutes.get("/", productController.getAllProducts);

export default productRoutes;

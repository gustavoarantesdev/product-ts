import { Router } from "express";
import * as productController from "../controllers/product.controller.js";

const productRoutes = Router();

productRoutes.get("/", productController.getAll);

productRoutes.post("/create", productController.create);

export default productRoutes;

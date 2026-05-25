import { Router } from "express";
import * as productController from "../controllers/product.controller.js";

const productRoutes = Router();

productRoutes.get("/", productController.getAll);

productRoutes.get("/:id", productController.getById);

productRoutes.post("/create", productController.create);

productRoutes.put("/update/:id", productController.update);

productRoutes.delete("/delete/:id", productController.destroy);

export default productRoutes;

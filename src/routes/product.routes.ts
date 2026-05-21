import { Router } from "express";

import * as ProductController from "../controllers/product.controller.js";

const router = Router();

router.get("/");

export default router;

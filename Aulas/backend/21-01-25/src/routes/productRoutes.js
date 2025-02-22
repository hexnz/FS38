import express from "express";
import {
  getAllProductsHandler,
  createProductHandler,
  updateProductHandler,
  deleteProductHandler,
  getProductHandler,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", getAllProductsHandler);
router.get("/:id", getProductHandler);
router.post("/", createProductHandler);
router.put("/:id", updateProductHandler);
router.delete("/:id", deleteProductHandler);

export default router;
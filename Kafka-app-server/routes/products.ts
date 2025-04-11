import express from "express";
import { verifyToken } from "../lib/verifyToken";
import { getProduct, getProducts } from "../controllers/products";

const router = express.Router();
router.get("/api/products", verifyToken, getProducts);
router.get("/api/product/:productId", verifyToken, getProduct);

export default router;

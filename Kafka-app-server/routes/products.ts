import express from "express";
import { verifyToken } from "../lib/verifyToken";
import { getProducts } from "../controllers/products";

const router = express.Router();
router.get("/api/products", verifyToken, getProducts);

export default router;

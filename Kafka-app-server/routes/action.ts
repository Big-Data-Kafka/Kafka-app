import express from "express";
import { verifyToken } from "../lib/verifyToken";
import { publishAction } from "../controllers/action";

const router = express.Router();

router.post("/api/action", verifyToken, publishAction);

export default router;

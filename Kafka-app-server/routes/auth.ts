import express from "express";
import { hashPassword, login, logout } from "../controllers/auth";
const router = express.Router();

router.post("/api/login", login);
router.post("/api/logout", logout);
router.post("/api/password/:password", hashPassword);

export default router;

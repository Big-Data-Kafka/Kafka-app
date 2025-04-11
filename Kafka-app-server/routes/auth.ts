import express from "express";
import { checkAuth, createUser, login, logout } from "../controllers/auth";
const router = express.Router();

router.post("/api/login", login);
router.post("/api/logout", logout);
router.get("/api/check-auth", checkAuth);
router.post("/api/user", createUser);

export default router;

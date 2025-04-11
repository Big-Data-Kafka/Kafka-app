import express from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./screte";

// Extend the Request interface to include the user property
declare global {
	namespace Express {
		interface Request {
			user?: any;
		}
	}
}

export const verifyToken = (
	req: express.Request,
	res: express.Response,
	next: express.NextFunction,
) => {
	const token = req.cookies.token;

	if (!token) return res.status(401).json({ error: "Unauthorized: No token" });

	try {
		const decoded = jwt.verify(token, JWT_SECRET);
		req.user = decoded;
		next();
	} catch (err) {
		return res.status(401).json({ error: "Unauthorized: Invalid token" });
	}
};

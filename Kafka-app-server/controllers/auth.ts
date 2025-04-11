import express from "express";
import { db } from "../lib/db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../lib/screte";

const TOKEN_EXPIRES = "1h";

export const login = async (req: express.Request, res: express.Response) => {
	try {
		const { username, password } = req.body;
		console.log(username, password);
		if (!username || !password) {
			return res.status(400).json({ error: "Empty credentials!" });
		}
		const user = await db.user.findFirst({
			where: {
				username,
			},
		});

		if (!user) return res.status(401).json({ error: "Invalid credentials!" });

		// const match = await bcrypt.compare(password, user.password as string);
		// if (!match) return res.status(401).json({ error: "Invalid credentials" });

		const token = jwt.sign(
			{ id: user.id, username: user.username },
			JWT_SECRET,
			{ expiresIn: TOKEN_EXPIRES },
		);

		res.cookie("token", token, {
			httpOnly: true,
			secure: process.env.NODE_ENV === "production",
			sameSite: process.env.NODE_ENV === "production" ? "strict" : "lax",
			maxAge: 3600 * 1000,
		});
		return res.status(200).json({ message: "Successful Login" });
	} catch (err) {
		console.log(err);
		res.status(500).json({
			error: "Server Error!",
		});
	}
};

export const logout = async (req: express.Request, res: express.Response) => {
	try {
		res.clearCookie("token", {
			httpOnly: true,
			secure: process.env.NODE_ENV === "production",
			sameSite: process.env.NODE_ENV === "production" ? "strict" : "lax",
		});

		return res.status(200).json({ message: "Logout successful" });
	} catch (err) {
		console.error(err);
		return res.status(500).json({ error: "Server Error" });
	}
};

export const hashPassword = async (
	req: express.Request,
	res: express.Response,
) => {
	const { password } = req.params;

	const hashed = bcrypt.hash(password, 10);
	res.status(201).send(hashed);
};

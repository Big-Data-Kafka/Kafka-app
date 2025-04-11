import express from "express";
import { db } from "../lib/db";

export const getProducts = async (
	req: express.Request,
	res: express.Response,
) => {
	try {
		const user = req.user;
		console.log(user);
		const products = await db.product.findMany();

		return res.status(200).json(products);
	} catch (err) {
		console.log(err);
		return res;
	}
};

import express from "express";
import { db } from "../lib/db";

export const getProducts = async (
	req: express.Request,
	res: express.Response,
) => {
	try {
		const products = await db.product.findMany();
		return res.status(200).json(products);
	} catch (err) {
		console.log(err);
		return res;
	}
};

export const getProduct = async (
	req: express.Request,
	res: express.Response,
) => {
	try {
		const { productId } = req.params;

		const product = await db.product.findUnique({
			where: {
				id: productId,
			},
		});

		return res.status(200).json(product);
	} catch (err) {
		console.log(err);
		return res;
	}
};

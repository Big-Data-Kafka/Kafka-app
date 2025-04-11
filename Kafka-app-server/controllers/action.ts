import { Kafka } from "kafkajs";
import express from "express";
const kafka = new Kafka({
	clientId: "my-app",
	brokers: ["localhost:9092"],
});

const producer = kafka.producer();
export const publishAction = async (
	req: express.Request,
	res: express.Response,
) => {
	const { id } = req.user;
	const { productId, action } = req.body;
	try {
		console.log(id);
		console.log(productId);
		console.log(action);
		await producer.connect();
		await producer.send({
			topic: "action",
			messages: [{ value: JSON.stringify({ userId: id, productId, action }) }],
		});
		await producer.disconnect();
		return res.status(201).json({ message: "Publish Action Successful" });
	} catch (err) {
		console.log(err);
		return res.status(500).json({ message: "Server Error" });
	}
};

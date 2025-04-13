import { Kafka } from "kafkajs";
import { db } from "./lib/db.ts";

const kafka = new Kafka({
	clientId: "my-app",
	brokers: ["localhost:9092"],
});

const consumer = kafka.consumer({ groupId: "test-group" });

const run = async () => {
	await consumer.connect();
	await consumer.subscribe({ topic: "action", fromBeginning: true });
	await consumer.run({
		eachMessage: async ({ topic, partition, message }) => {
			if (message.value) {
				console.log(JSON.parse(message.value.toString()));
				const { userId, productId, action } = JSON.parse(
					message.value.toString(),
				);
				const createdAction = await db.action.create({
					data: {
						userId,
						productId,
						type: action,
					},
				});
				const producer = kafka.producer();
				await producer.connect();
				await producer.send({
					topic: "data-updated",
					messages: [{ value: "data-updated" }],
				});
				console.log("data-updated published");
				await producer.disconnect();
			}
		},
	});
};

run().catch(console.error);

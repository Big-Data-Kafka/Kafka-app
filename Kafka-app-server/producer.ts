import { Kafka } from "kafkajs";
const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"],
});

const producer = kafka.producer();
const run = async (name: string, password: string) => {
  await producer.connect();
  await producer.send({
    topic: "test",
    messages: [
        { value: JSON.stringify({ name, password })},
    ],
  });
  console.log("Message sent");
  await producer.disconnect();
};

run("william", "william123").catch(console.error)

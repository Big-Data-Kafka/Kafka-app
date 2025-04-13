// socketServer.ts
import { Server } from "socket.io";
import { Kafka } from "kafkajs";
import http from "http";
import express from "express";
import cors from "cors";
import {
  getOverallStatsFn,
  getStatsPerProductFn,
  getMostVPFn,
  getUserStatsFn
} from "./controllers/dashboard";

const app = express();
app.use(cors());
const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: "" }
});
const PORT = 4000;
server.listen(PORT, () => console.log(`Server running on ${PORT}`));

const kafka = new Kafka({ clientId: "dashboard-consumer", brokers: ["localhost:9092"] });
const consumer = kafka.consumer({ groupId: "dashboard-group" });

io.on("connection", async (socket) => {
  console.log("Client connected");

  //initial load
  const overall = await getOverallStatsFn();
  const perProduct = await getStatsPerProductFn();
  const userStats = await getUserStatsFn();
  const mostVP = await getMostVPFn();

  socket.emit("dashboard-update", {
    overall,
    perProduct,
    userStats,
    mostVP
  });
});

const emitToClients = async () => {
  const overall = await getOverallStatsFn();
  const perProduct = await getStatsPerProductFn();
  const userStats = await getUserStatsFn();
  const mostVP = await getMostVPFn();
  console.log({
    overall,
    perProduct,
    userStats,
    mostVP
  });  
  io.emit("dashboard-update", {
    overall,
    perProduct,
    userStats,
    mostVP
  });
};

const run = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: "data-updated", fromBeginning: false });

  await consumer.run({
    eachMessage: async () => {
      console.log("Received data-updated event from Kafka");
      await emitToClients();
    }
  });
};

run().catch(console.error);

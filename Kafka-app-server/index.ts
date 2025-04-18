import { Server } from "socket.io";
import { Kafka } from "kafkajs";

import express from "express";
import http from "http";
import cors from "cors";

import cookieParser from "cookie-parser";
import authRoute from "./routes/auth";
import productsRoute from "./routes/products";
import actionRoute from "./routes/action";

import {
	getOverallStatsFn,
	getStatsPerProductFn,
	getMostVPFn,
	getUserStatsFn
  } from "./controllers/dashboard";

const app = express();
app.use(
	cors({
		credentials: true,
		origin: "http://localhost:8000",
	}),
);
app.use(express.json());
app.use(cookieParser());

app.use("/", authRoute);
app.use("/", productsRoute);
app.use("/", actionRoute);
// app.use('/', dashboardRoute)

const server = http.createServer(app);

server.listen("5000", () => {
	console.log("server running on port 5000");
});

const io = new Server(server, {
  cors: { origin: "http://localhost:8000" }
});
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

//consumes db update and send realtime data to frontend
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
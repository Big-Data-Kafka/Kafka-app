import express from "express";
import http from "http";
import cors from "cors";
import dotenv from "dotenv";
import authRoute from "./routes/auth.ts";
import cookieParser from "cookie-parser";
const app = express();

dotenv.config();
app.use(
	cors({
		credentials: true,
		origin: "http://localhost:8000",
	}),
);

app.use(express.json());
app.use(cookieParser());

app.use("/", authRoute);

const server = http.createServer(app);

server.listen("5000", () => {
	console.log("server running on port 5000");
});

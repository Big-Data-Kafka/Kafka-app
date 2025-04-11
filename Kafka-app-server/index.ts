import express from "express";
import http from "http";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoute from "./routes/auth";
import productsRoute from "./routes/products";
import actionRoute from "./routes/action";
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

const server = http.createServer(app);

server.listen("5000", () => {
	console.log("server running on port 5000");
});

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { env } from "./config/env";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin: env.CLIENT_URL,
    credentials: true,
}));

app.get("/health", (_, res) => {
    res.status(200).json({ status: "OK" });
});

export default app;

import dotenv from "dotenv";

dotenv.config();

export const env = {
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: Number(process.env.PORT) || 5000,
  MONGO_URI: process.env.MONGO_URI as string,
  JWT_SECRET: process.env.JWT_SECRET as string,
  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET as string,
  REDIS_URL: process.env.REDIS_URL as string,
  CLIENT_URL: process.env.CLIENT_URL as string,
};

if (!env.MONGO_URI || !env.JWT_SECRET) {
  throw new Error("Missing required environment variables");
}

import mongoose from "mongoose";
import { env } from "node:process";

export const connectDB = async () => {
  try {
    await mongoose.connect(env.MONGO_URI as string);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed");
    process.exit(1);
  }
};
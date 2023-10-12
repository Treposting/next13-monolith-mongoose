import { connectDB } from "@/lib/db";
import mongoose from "mongoose";

export const catchAsync = async (fn: Function) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      await connectDB();
      console.log("Connecting to DB");
    }
    return await fn();
  } catch (err: any) {
    console.error(err);
    throw new Error(err);
  }
};

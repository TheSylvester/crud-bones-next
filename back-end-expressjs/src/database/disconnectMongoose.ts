import mongoose from "mongoose";

export default async function disconnectMongoose(): Promise<void> {
  try {
    await mongoose.disconnect();
    console.log("Disconnected from database!");
  } catch (error: unknown) {
    console.error(`Error disconnecting from database: ${error}`);
  }
}
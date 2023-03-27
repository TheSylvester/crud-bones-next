import mongoose from "mongoose";

export default async function connectMongoose(uri: string, dbName: string = "test"): Promise<void> {
  try {
    await mongoose.connect(uri, {
      dbName
    });
    console.log("Connected to database!");
  } catch (error) {
    console.error(`Error connecting to database: ${error}`);
  }
}


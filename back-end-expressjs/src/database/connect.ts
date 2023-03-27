import connectMongoose from "./connectMongoose";

export async function connect(dbName: string = "dev"): Promise<void> {
  try {
    await connectMongoose(process.env.MONGODB_URI as string, dbName);
  } catch (error: unknown) {
    console.error(`Error connecting to database: ${error}`);
  }
}
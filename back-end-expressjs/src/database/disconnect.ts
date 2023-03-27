import disconnectMongoose from "./disconnectMongoose";

export async function disconnect(): Promise<void> {
  try {
    await disconnectMongoose();
  } catch (error: unknown) {
    console.error(`Error disconnecting from database: ${error}`);
  }
}
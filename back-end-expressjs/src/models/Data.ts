import { model, Schema } from "mongoose";
import { IData } from "../types/IData";

const dataSchema: Schema<IData> = new Schema<IData>({
  text: String,
  number: Number,
  boolean: Boolean,
  stringsArray: [String]
});

const Data = model<IData>("Data", dataSchema);

export default Data;
import { Schema, model } from "mongoose";

export interface IData {
  _id?: string,
  text: string,
  number: number,
  boolean: boolean,
  stringsArray: Array<string>
}

const dataSchema: Schema<IData> = new Schema<IData>({
  text: String,
  number: Number,
  boolean: Boolean,
  stringsArray: [String]
});

const Data = model<IData>("Data", dataSchema);

export default Data;
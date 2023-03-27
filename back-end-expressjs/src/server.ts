import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import { connect } from "./database";
import dataRouter from "./routes/dataRoutes";

const app = express();

const NODE_ENV = process.env.NODE_ENV ?? "DEVELOPMENT";
NODE_ENV.toUpperCase() === "PRODUCTION" && app.use(cors);

console.log("NODE_ENV: ", NODE_ENV);

(async () => connect())();  // IIFE to do await connect() at top level

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello User!");
});

app.use("/data", dataRouter);


export default app;

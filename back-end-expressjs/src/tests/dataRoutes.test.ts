import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config({ path: `.env.local` });

import express from "express";
import dataRouter from "../routes/dataRoutes";
import { connect, disconnect, createDataAccess } from "../database";
import dataModel from "../models/Data";
import request from "supertest";
import { IData } from "../types/IData";

const app = express();
app.use(express.json());
app.use("/data", dataRouter);

const dataAccess = createDataAccess<IData>(dataModel);

(async () => connect("test"))();  // IIFE to do await connect() at top level

describe("Data routes", () => {

  beforeEach(async () => {
    // clear the DB
    const allData = await dataAccess.find({});
    const ids = allData.map((data) => data._id);
    ids.map(async (id) => {
      id && await dataAccess.delete(id);
    });
  });

  it("should create a new data on POST /", async () => {
    const newData = {
      text: "new text",
      number: 999,
      boolean: true,
      stringsArray: ["alpha", "beta", "gamma"]
    };
    const res = await request(app).post("/data").send(newData);
    expect(res.status).toBe(201); // or whatever status code your server returns on successful creation
    // add more assertions here to check the response body and other properties
    const get = await request(app).get("/data/");
    expect(get.body.length).toBe(1);
  });

  it("should return a list of data on GET /", async () => {
    const res = await request(app).get("/data/");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    // add more assertions here to check the response body and other properties
  }, 30000);

  // it("should update a data item on PUT /:id", async () => {
  //   const id = "5f9f9f9f9f9f9f9f9f9f9f9f";
  //   const updates = { /* updates to be sent in the PUT request */ };
  //   const res = await request(app).put(`/data/${id}`).send(updates);
  //   expect(res.status).toBe(200); // or whatever status code your server returns on successful update
  //   // add more assertions here to check the response body and other properties
  // });
  //
  // it("should delete a data item on DELETE /:id", async () => {
  //   const id = "5f9f9f9f9f9f9f9f9f9f9f9f";
  //   const res = await request(app).delete(`/data/${id}`);
  //   expect(res.status).toBe(204); // or whatever status code your server returns on successful deletion
  //   // add more assertions here to check the response body and other properties
  // });
});

afterAll(async () => {
  await disconnect();
});

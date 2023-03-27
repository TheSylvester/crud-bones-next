import express from "express";
import dataModel, { IData } from "../models/Data";
import { createDataAccess } from "../database";
import { createDataService } from "../services/dataService";
import { createDataController } from "../controllers/dataController";

const router = express.Router();

const dataAccess = createDataAccess<IData>(dataModel);
const dataService = createDataService<IData>(dataAccess);
const dataController = createDataController<IData>(dataService);

router.post("/", dataController.create);
router.get("/", dataController.find);
router.put("/:id", dataController.update);
router.delete("/:id", dataController.delete);

export default router;

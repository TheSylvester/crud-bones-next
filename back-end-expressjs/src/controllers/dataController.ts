import { IDataService } from "../types/IDataService";
import { Request, Response } from "express";

export const createDataController = <T>(dataService: IDataService<T>): {
  create: (req: Request, res: Response) => Promise<void>;
  find: (req: Request, res: Response) => Promise<void>;
  update: (req: Request, res: Response) => Promise<void>;
  delete: (req: Request, res: Response) => Promise<void>;
} => {
  return {
    create: async (req: Request, res: Response) => {
      try {
        const newData = await dataService.create(req.body);
        res.status(201).json(newData);
      } catch (error: unknown) {
        if (error instanceof Error) {
          res.status(400).json({ message: error.message });
        }
      }
    },
    find: async (req: Request, res: Response) => {
      try {
        const data = await dataService.find(req.body);
        res.json(data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.log(error);
          res.status(500).json({ message: error.message });
        }
      }
    },
    update: async (req: Request, res: Response) => {
      try {
        const updatedData = await dataService.update(req.params.id, req.body);
        res.json(updatedData);
      } catch (error: unknown) {
        if (error instanceof Error) {
          res.status(400).json({ message: error.message });
        }
      }
    },
    delete: async (req: Request, res: Response) => {
      try {
        await dataService.delete(req.params.id);
        res.json({ message: "Data deleted" });
      } catch (error: unknown) {
        if (error instanceof Error) {
          res.status(500).json({ message: error.message });
        }
      }
    }
  };
};

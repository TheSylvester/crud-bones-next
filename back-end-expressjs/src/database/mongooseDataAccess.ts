import { Model } from "mongoose";
import { IDataAccess } from "../types/IDataAccess";

export const createMongooseDataAccess = <T>(model: Model<T>): IDataAccess<T> => {
  return {
    create: async (data: Partial<T>): Promise<T> => {
      try {
        const newData = new model(data);
        await newData.save();
        return newData;
      } catch (error) {
        throw error;
      }
    },
    find: async (filter: Partial<T>): Promise<T[]> => {
      try {
        return model.find(filter);
      } catch (error) {
        throw error;
      }
    },
    update: async (id: string, data: Partial<T>): Promise<T | null> => {
      try {
        return model.findByIdAndUpdate(id, data, { new: true });
      } catch (error) {
        throw error;
      }
    },
    delete: async (id: string): Promise<T | null> => {
      try {
        return model.findByIdAndDelete(id);
      } catch (error) {
        throw error;
      }
    }
  };
};
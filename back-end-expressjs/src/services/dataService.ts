import { IDataAccess } from "../types/IDataAccess";
import { IDataService } from "../types/IDataService";

export const createDataService = <T>(dataAccess: IDataAccess<T>): IDataService<T> => {
  return {
    create: dataAccess.create,
    find: dataAccess.find,
    update: dataAccess.update,
    delete: dataAccess.delete
  };
};

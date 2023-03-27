/* Interface for the business logic */

export type IDataService<T> = {
  create: (data: Partial<T>) => Promise<T>;
  find: (filter: Partial<T>) => Promise<T[]>;
  update: (id: string, data: Partial<T>) => Promise<T | null>;
  delete: (id: string) => Promise<T | null>;
};
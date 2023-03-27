export type IDataAccess<T> = {
  create: (data: Partial<T>) => Promise<T>;
  find: (filter: Partial<T>) => Promise<T[]>;
  update: (id: string, data: Partial<T>) => Promise<T | null>;
  delete: (id: string) => Promise<T | null>;
};
export interface Repository<T> {
  getAll(): T[];
  saveAll(items: T[]): void;
}
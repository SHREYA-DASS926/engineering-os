export interface Repository<T> {
  getAll(): Promise<T[]>;
  saveAll(items: T[]): Promise<void>;
}
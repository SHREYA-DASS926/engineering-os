import { useEffect, useState } from "react";

type CrudRepository<T, CreateInput> = {
  getAll(userId: string): Promise<T[]>;
  create(userId: string, item: CreateInput): Promise<T>;
  delete(id: number): Promise<void>;
};

type UseCrudOptions<T, CreateInput> = {
  userId?: string;
  repository: CrudRepository<T, CreateInput>;
};

function useCrud<T extends { id: number }, CreateInput>({
  userId,
  repository,
}: UseCrudOptions<T, CreateInput>) {
  const [items, setItems] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadItems() {
      if (!userId) {
        setLoading(false);
        return;
      }

      const savedItems = await repository.getAll(userId);
      setItems(savedItems);
      setLoading(false);
    }

    loadItems();
  }, [userId, repository]);

  async function createItem(item: CreateInput) {
    if (!userId) {
      return null;
    }

    const savedItem = await repository.create(userId, item);
    setItems((currentItems) => [savedItem, ...currentItems]);

    return savedItem;
  }

  async function deleteItem(id: number) {
    await repository.delete(id);

    setItems((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    );
  }

  return {
    items,
    setItems,
    loading,
    createItem,
    deleteItem,
  };
}

export default useCrud;
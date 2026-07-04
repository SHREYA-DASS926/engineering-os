import { expenseApi } from "../api/expense.api";
import type { Expense } from "../types/expense";

class ExpenseRepository {
  async getAll(userId: string): Promise<Expense[]> {
    const rows = await expenseApi.getAll(userId);

    return rows.map((row: any) => ({
      id: row.id,
      title: row.title,
      category: row.category,
      amount: Number(row.amount),
      date: row.date,
    }));
  }

  async create(
    userId: string,
    expense: Omit<Expense, "id">
  ): Promise<Expense> {
    const row = await expenseApi.create({
      user_id: userId,
      title: expense.title,
      category: expense.category,
      amount: expense.amount,
      date: expense.date,
    });

    return {
      id: row.id,
      title: row.title,
      category: row.category,
      amount: Number(row.amount),
      date: row.date,
    };
  }

  async update(
    id: number,
    updates: Partial<Omit<Expense, "id">>
  ): Promise<Expense> {
    const row = await expenseApi.update(id, updates);

    return {
      id: row.id,
      title: row.title,
      category: row.category,
      amount: Number(row.amount),
      date: row.date,
    };
  }

  async delete(id: number) {
    await expenseApi.delete(id);
  }
}

export const expenseRepository = new ExpenseRepository();
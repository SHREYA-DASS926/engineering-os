import type { Expense } from "../types/expense";

const STORAGE_KEY = "expenses";

export const expenseService = {
  getExpenses(): Expense[] {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  },

  saveExpenses(expenses: Expense[]) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses));
  },
};
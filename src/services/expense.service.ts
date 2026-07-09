import { supabase } from "../lib/supabase";

import type { Expense } from "../types/expense";

class ExpenseService {
  async getExpenses(userId: string) {
    const { data, error } = await supabase
      .from("expenses")
      .select("*")
      .eq("user_id", userId)
      .order("date", { ascending: false });

    if (error) throw error;

    return data as Expense[];
  }

  async addExpense(expense: Expense & { user_id: string }) {
    const { error } = await supabase
      .from("expenses")
      .insert(expense);

    if (error) throw error;
  }

  async deleteExpense(id: number) {
    const { error } = await supabase
      .from("expenses")
      .delete()
      .eq("id", id);

    if (error) throw error;
  }
}

export const expenseService = new ExpenseService();
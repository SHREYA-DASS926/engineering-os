import { BaseApi } from "./base.api";

class ExpenseApi extends BaseApi {
  constructor() {
    super("expenses");
  }

  async getAll(userId: string) {
    const { data, error } = await this.db()
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: false });

    this.handleError(error);

    return data ?? [];
  }

  async create(expense: {
    user_id: string;
    title: string;
    category: string;
    amount: number;
    date: string;
  }) {
    const { data, error } = await this.db()
      .insert(expense)
      .select()
      .single();

    this.handleError(error);

    return data;
  }

  async update(id: number, updates: Record<string, unknown>) {
    const { data, error } = await this.db()
      .update(updates)
      .eq("id", id)
      .select()
      .single();

    this.handleError(error);

    return data;
  }

  async delete(id: number) {
    const { error } = await this.db()
      .delete()
      .eq("id", id);

    this.handleError(error);
  }
}

export const expenseApi = new ExpenseApi();
import type { CodingProblemRow } from "./types";
import { BaseApi } from "./base.api";

class CodingApi extends BaseApi {
  constructor() {
    super("coding_problems");
  }
  async getAll(userId: string): Promise<CodingProblemRow[]> {
    const { data, error } = await this.db()
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: false });

    if (error) {
      throw error;
    }

    return data;
  }

  async create(
  problem: {
    user_id: string;
    name: string;
    platform: string;
    difficulty: string;
    topic: string;
    solved: boolean;
  }
): Promise<CodingProblemRow> {
    const { data, error } = await this.db()
      .insert(problem)
      .select()
      .single();

    if (error) {
      throw error;
    }

    return data;
  }

  async update(
  id: number,
  updates: {
    solved?: boolean;
    name?: string;
    platform?: string;
    difficulty?: string;
    topic?: string;
  }
): Promise<CodingProblemRow> {
    const { data, error } = await this.db()
      .update(updates)
      .eq("id", id)
      .select()
      .single();

    if (error) {
      throw error;
    }

    return data;
  }

  async delete(id: number) {
    const { error } = await this.db()
      .delete()
      .eq("id", id);

    if (error) {
      throw error;
    }
  }
}

export const codingApi = new CodingApi();
import { supabase } from "../lib/supabase";

class CodingApi {
  async getAll(userId: string) {
    const { data, error } = await supabase
      .from("coding_problems")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: false });

    if (error) {
      throw error;
    }

    return data;
  }

  async create(problem: {
    user_id: string;
    name: string;
    platform: string;
    difficulty: string;
    topic: string;
    solved: boolean;
  }) {
    const { data, error } = await supabase
      .from("coding_problems")
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
  ) {
    const { data, error } = await supabase
      .from("coding_problems")
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
    const { error } = await supabase
      .from("coding_problems")
      .delete()
      .eq("id", id);

    if (error) {
      throw error;
    }
  }
}

export const codingApi = new CodingApi();
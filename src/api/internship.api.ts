import { BaseApi } from "./base.api";

class InternshipApi extends BaseApi {
  constructor() {
    super("internship_applications");
  }

  async getAll(userId: string) {
    const { data, error } = await this.db()
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: false });

    this.handleError(error);
    return data ?? [];
  }

  async create(application: {
    user_id: string;
    company: string;
    role: string;
    status: string;
    date_applied: string;
    notes: string;
  }) {
    const { data, error } = await this.db()
      .insert(application)
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
    const { error } = await this.db().delete().eq("id", id);
    this.handleError(error);
  }
}

export const internshipApi = new InternshipApi();
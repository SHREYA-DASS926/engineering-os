import { BaseApi } from "./base.api";

class ActivityApi extends BaseApi {
  constructor() {
    super("activities");
  }

  async getAll(userId: string) {
    const { data, error } = await this.db()
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: false });

    this.handleError(error);

    return data ?? [];
  }

  async create(activity: {
    user_id: string;
    type: string;
    title: string;
    description: string;
    metadata?: Record<string, unknown>;
  }) {
    const { data, error } = await this.db()
      .insert(activity)
      .select()
      .single();

    this.handleError(error);

    return data;
  }

  async delete(id: string) {
    const { error } = await this.db().delete().eq("id", id);

    this.handleError(error);
  }
}

export const activityApi = new ActivityApi();
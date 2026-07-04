import { BaseApi } from "./base.api";

class StudyApi extends BaseApi {
  constructor() {
    super("subjects");
  }

  async getAll(userId: string) {
    const { data, error } = await this.db()
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: false });

    this.handleError(error);

    return data ?? [];
  }

  async create(subject: {
    user_id: string;
    name: string;
    attended_classes: number;
    total_classes: number;
  }) {
    const { data, error } = await this.db()
      .insert(subject)
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

export const studyApi = new StudyApi();
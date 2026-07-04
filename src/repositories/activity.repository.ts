import { activityApi } from "../api/activity.api";
import type { Activity, ActivityType } from "../core/activity/activity.types";

class ActivityRepository {
  async getAll(userId: string): Promise<Activity[]> {
    const rows = await activityApi.getAll(userId);

    return rows.map((row: any) => ({
      id: row.id,
      type: row.type as ActivityType,
      title: row.title,
      description: row.description,
      timestamp: row.created_at,
      metadata: row.metadata ?? undefined,
    }));
  }

  async create(
    userId: string,
    activity: Omit<Activity, "id" | "timestamp">
  ): Promise<Activity> {
    const row = await activityApi.create({
      user_id: userId,
      type: activity.type,
      title: activity.title,
      description: activity.description,
      metadata: activity.metadata,
    });

    return {
      id: row.id,
      type: row.type as ActivityType,
      title: row.title,
      description: row.description,
      timestamp: row.created_at,
      metadata: row.metadata ?? undefined,
    };
  }

  async delete(id: string) {
    await activityApi.delete(id);
  }
}

export const activityRepository = new ActivityRepository();
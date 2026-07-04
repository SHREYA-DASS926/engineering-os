import { studyApi } from "../api/study.api";
import type { Subject } from "../types/study";

class StudyRepository {
  async getAll(userId: string): Promise<Subject[]> {
    const rows = await studyApi.getAll(userId);

    return rows.map((row: any) => ({
      id: row.id,
      name: row.name,
      attendedClasses: row.attended_classes,
      totalClasses: row.total_classes,
    }));
  }

  async create(
    userId: string,
    subject: Omit<Subject, "id">
  ): Promise<Subject> {
    const row = await studyApi.create({
      user_id: userId,
      name: subject.name,
      attended_classes: subject.attendedClasses,
      total_classes: subject.totalClasses,
    });

    return {
      id: row.id,
      name: row.name,
      attendedClasses: row.attended_classes,
      totalClasses: row.total_classes,
    };
  }

  async delete(id: number) {
    await studyApi.delete(id);
  }
}

export const studyRepository = new StudyRepository();
import { internshipApi } from "../api/internship.api";
import type {
  InternshipApplication,
  InternshipStatus,
} from "../types/internship";

class InternshipRepository {
  async getAll(userId: string): Promise<InternshipApplication[]> {
    const rows = await internshipApi.getAll(userId);

    return rows.map((row: any) => ({
      id: row.id,
      company: row.company,
      role: row.role,
      status: row.status as InternshipStatus,
      dateApplied: row.date_applied,
      notes: row.notes ?? "",
    }));
  }

  async create(
    userId: string,
    application: Omit<InternshipApplication, "id">
  ): Promise<InternshipApplication> {
    const row = await internshipApi.create({
      user_id: userId,
      company: application.company,
      role: application.role,
      status: application.status,
      date_applied: application.dateApplied,
      notes: application.notes,
    });

    return {
      id: row.id,
      company: row.company,
      role: row.role,
      status: row.status as InternshipStatus,
      dateApplied: row.date_applied,
      notes: row.notes ?? "",
    };
  }

  async updateStatus(
    id: number,
    status: InternshipStatus
  ): Promise<InternshipApplication> {
    const row = await internshipApi.update(id, { status });

    return {
      id: row.id,
      company: row.company,
      role: row.role,
      status: row.status as InternshipStatus,
      dateApplied: row.date_applied,
      notes: row.notes ?? "",
    };
  }

  async delete(id: number) {
    await internshipApi.delete(id);
  }
}

export const internshipRepository = new InternshipRepository();
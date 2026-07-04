import { codingApi } from "../api/coding.api";
import type { CodingProblemRow } from "../api/types";
import type { CodingProblem } from "../types/coding";

function mapRowToProblem(row: CodingProblemRow): CodingProblem {
  return {
    id: row.id,
    name: row.name,
    platform: row.platform,
    difficulty: row.difficulty as CodingProblem["difficulty"],
    topic: row.topic,
    solved: row.solved,
  };
}

class CodingRepository {
  async getAll(userId: string): Promise<CodingProblem[]> {
    const rows = await codingApi.getAll(userId);
    return rows.map(mapRowToProblem);
  }

  async create(
    userId: string,
    problem: Omit<CodingProblem, "id">
  ): Promise<CodingProblem> {
    const row = await codingApi.create({
      user_id: userId,
      name: problem.name,
      platform: problem.platform,
      difficulty: problem.difficulty,
      topic: problem.topic,
      solved: problem.solved,
    });

    return mapRowToProblem(row);
  }

  async update(
    id: number,
    updates: Partial<Omit<CodingProblem, "id">>
  ): Promise<CodingProblem> {
    const row = await codingApi.update(id, updates);
    return mapRowToProblem(row);
  }

  async delete(id: number): Promise<void> {
    await codingApi.delete(id);
  }
}

export const codingRepository = new CodingRepository();
import type { CodingProblem } from "../types/coding";
import { codingService } from "../services/coding.service";
import type { Repository } from "./base.repository";

class CodingRepository implements Repository<CodingProblem> {
  async getAll(): Promise<CodingProblem[]> {
    return codingService.getProblems();
  }

  async saveAll(problems: CodingProblem[]): Promise<void> {
    codingService.saveProblems(problems);
  }
}

export const codingRepository = new CodingRepository();
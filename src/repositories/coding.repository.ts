import type { CodingProblem } from "../types/coding";
import { codingService } from "../services/coding.service";

class CodingRepository {
  getAll(): CodingProblem[] {
    return codingService.getProblems();
  }

  saveAll(problems: CodingProblem[]) {
    codingService.saveProblems(problems);
  }
}

export const codingRepository = new CodingRepository();
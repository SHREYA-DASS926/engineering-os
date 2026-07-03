import type { CodingProblem } from "../types/coding";
import { codingService } from "../services/coding.service";
import type { Repository } from "./base.repository";

class CodingRepository implements Repository<CodingProblem> {
  getAll(): CodingProblem[] {
    return codingService.getProblems();
  }

  saveAll(problems: CodingProblem[]) {
    codingService.saveProblems(problems);
  }
}

export const codingRepository = new CodingRepository();
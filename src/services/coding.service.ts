import type { CodingProblem } from "../types/coding";

const STORAGE_KEY = "codingProblems";

export const codingService = {
  getProblems(): CodingProblem[] {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  },

  saveProblems(problems: CodingProblem[]) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(problems));
  },
};
import type { Subject } from "../types/study";

const STORAGE_KEY = "subjects";

export const studyService = {
  getSubjects(): Subject[] {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  },

  saveSubjects(subjects: Subject[]) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(subjects));
  },
};
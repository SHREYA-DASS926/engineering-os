import type { InternshipApplication } from "../types/internship";

const STORAGE_KEY = "internshipApplications";

export const internshipService = {
  getApplications(): InternshipApplication[] {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  },

  saveApplications(applications: InternshipApplication[]) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(applications));
  },
};
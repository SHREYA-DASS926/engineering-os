import { activityRepository } from "../../repositories/activity.repository";
import type { Activity, ActivityType } from "./activity.types";

type ActivityListener = () => void;

class ActivityService {
  private listeners: ActivityListener[] = [];
  private userId: string | null = null;

  setUserId(userId: string | null) {
    this.userId = userId;
    this.notify();
  }

  subscribe(listener: ActivityListener) {
    this.listeners.push(listener);

    return () => {
      this.listeners = this.listeners.filter((item) => item !== listener);
    };
  }

  private notify() {
    this.listeners.forEach((listener) => listener());
  }

  async getAll(): Promise<Activity[]> {
    if (!this.userId) return [];

    return activityRepository.getAll(this.userId);
  }

  async add(
    type: ActivityType,
    title: string,
    description: string,
    metadata?: Record<string, unknown>
  ) {
    if (!this.userId) return null;

    const activity = await activityRepository.create(this.userId, {
      type,
      title,
      description,
      metadata,
    });

    this.notify();

    return activity;
  }

  logCodingSolved(problemName: string, difficulty: string) {
    return this.add("coding", `Solved ${problemName}`, `Difficulty: ${difficulty}`);
  }

  logStudySession(subject: string) {
    return this.add("study", `Studied ${subject}`, "Completed a study session");
  }

  logInternshipApplied(company: string) {
    return this.add(
      "internship",
      `Applied to ${company}`,
      "Internship application submitted"
    );
  }

  logExpenseAdded(amount: number) {
    return this.add("expense", "Expense added", `₹${amount}`);
  }

  logCareerMilestone(title: string) {
    return this.add("career", title, "Career milestone reached");
  }
}

export const activityService = new ActivityService();
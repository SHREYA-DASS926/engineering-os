import { getActivities, saveActivities } from "./activityStorage";
import type { Activity, ActivityType } from "./activity.types";

type ActivityListener = () => void;

class ActivityService {
  private listeners: ActivityListener[] = [];

  getAll() {
    return getActivities().sort(
      (a, b) =>
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    );
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

  add(
    type: ActivityType,
    title: string,
    description: string,
    metadata?: Record<string, unknown>
  ) {
    const activities = getActivities();

    const activity: Activity = {
      id: crypto.randomUUID(),
      type,
      title,
      description,
      timestamp: new Date().toISOString(),
      metadata,
    };

    activities.push(activity);
    saveActivities(activities);
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

  clear() {
    saveActivities([]);
    this.notify();
  }
}

export const activityService = new ActivityService();
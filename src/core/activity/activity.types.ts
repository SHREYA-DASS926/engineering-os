export type ActivityType =
  | "study"
  | "coding"
  | "internship"
  | "expense"
  | "career";

export type Activity = {
  id: string;
  type: ActivityType;
  title: string;
  description: string;
  timestamp: string;
  metadata?: Record<string, unknown>;
};
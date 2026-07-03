import type { Activity } from "./activity.types";

const STORAGE_KEY = "engos.activities";

export function getActivities(): Activity[] {
  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) {
    return [];
  }

  try {
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export function saveActivities(activities: Activity[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(activities));
}
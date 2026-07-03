import {
  BookOpen,
  Briefcase,
  Code2,
  CreditCard,
  Target,
} from "lucide-react";

import type { Activity, ActivityType } from "./activity.types";

export function getActivityIcon(type: ActivityType) {
  if (type === "study") return BookOpen;
  if (type === "coding") return Code2;
  if (type === "internship") return Briefcase;
  if (type === "expense") return CreditCard;
  return Target;
}

export function formatActivityTime(timestamp: string) {
  const diff = Date.now() - new Date(timestamp).getTime();
  const minutes = Math.floor(diff / 60000);

  if (minutes < 1) return "Just now";
  if (minutes < 60) return `${minutes} min ago`;

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hr ago`;

  const days = Math.floor(hours / 24);
  if (days === 1) return "Yesterday";

  return `${days} days ago`;
}

export function mapActivityToTimelineItem(activity: Activity) {
  return {
    title: activity.title,
    subtitle: `${activity.description} • ${formatActivityTime(activity.timestamp)}`,
    icon: getActivityIcon(activity.type),
  };
}
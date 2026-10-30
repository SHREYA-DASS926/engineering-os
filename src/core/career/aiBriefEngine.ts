
import type { CareerCategoryScore, CareerProfile } from "./types";

export type AIBrief = {
  title: string;
  insight: string;
  tags: string[];
  priority: "high" | "medium" | "low";
  actionLabel: string;
  actionPath: string;
};

const actions: Record<
  string,
  { label: string; path: string; advice: string }
> = {
  coding: {
    label: "Practice Coding",
    path: "/coding#add-coding",
    advice: "Log your next coding problem and work toward consistent DSA practice.",
  },
  study: {
    label: "Review Study Tracker",
    path: "/study",
    advice: "Review your attendance and identify subjects that need attention.",
  },
  internships: {
    label: "Track Applications",
    path: "/internships#add-internship",
    advice: "Review your internship pipeline and record your next application.",
  },
  projects: {
    label: "Review Career Progress",
    path: "/placement",
    advice: "Review your portfolio progress and identify a project worth completing.",
  },
  consistency: {
    label: "Review Dashboard",
    path: "/",
    advice: "Build a sustainable routine across study, coding, and career activities.",
  },
};

function getCategoryPercent(category: CareerCategoryScore): number {
  if (category.maxScore <= 0) return 0;

  return Math.max(
    0,
    Math.min(100, Math.round((category.score / category.maxScore) * 100))
  );
}

export function generateAIBrief(profile: CareerProfile): AIBrief {
  const validCategories = profile.categories.filter(
    (category) =>
      category.maxScore > 0 &&
      Number.isFinite(category.score) &&
      Number.isFinite(category.maxScore)
  );

  if (validCategories.length === 0) {
    return {
      title: "Start Building Your Profile",
      insight:
        "Add your academic and career progress to start receiving personalized recommendations.",
      tags: ["Getting Started"],
      priority: "low",
      actionLabel: "Open Study Tracker",
      actionPath: "/study",
    };
  }

  const sortedCategories = [...validCategories].sort(
    (a, b) => getCategoryPercent(a) - getCategoryPercent(b)
  );

  const weakest = sortedCategories[0];
  const strongest = sortedCategories[sortedCategories.length - 1];

  const weakestPercent = getCategoryPercent(weakest);
  const strongestPercent = getCategoryPercent(strongest);

  const priority: AIBrief["priority"] =
    weakestPercent < 40
      ? "high"
      : weakestPercent < 70
        ? "medium"
        : "low";

  const action = actions[weakest.id] ?? {
    label: "Review Career Progress",
    path: "/placement",
    advice: `Review your ${weakest.label.toLowerCase()} progress and identify your next improvement.`,
  };

  return {
    title: `${weakest.label} Needs Attention`,
    insight: `Your strongest measured area is ${strongest.label} (${strongestPercent}%). Your lowest-scoring area is ${weakest.label} (${weakestPercent}%). ${action.advice}`,
    tags: [weakest.label, strongest.label, profile.level],
    priority,
    actionLabel: action.label,
    actionPath: action.path,
  };
}

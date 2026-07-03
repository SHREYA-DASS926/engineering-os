import type { CareerCategoryScore, CareerProfile } from "./types";

export type AIBrief = {
  title: string;
  insight: string;
  tags: string[];
};

function getCategoryPercent(category: CareerCategoryScore) {
  return Math.round((category.score / category.maxScore) * 100);
}

export function generateAIBrief(profile: CareerProfile): AIBrief {
  const sortedCategories = [...profile.categories].sort((a, b) => {
    return getCategoryPercent(a) - getCategoryPercent(b);
  });

  const weakest = sortedCategories[0];
  const strongest = sortedCategories[sortedCategories.length - 1];

  return {
    title: `Career Score: ${profile.totalScore}/100 — ${profile.level}`,
    insight: `Your strongest area is ${strongest.label} at ${getCategoryPercent(
      strongest
    )}%. Your weakest area is ${weakest.label} at ${getCategoryPercent(
      weakest
    )}%. Improving ${weakest.label.toLowerCase()} should be your highest-impact focus right now.`,
    tags: [strongest.label, weakest.label, profile.level],
  };
}
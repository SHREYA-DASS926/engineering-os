import type { CareerCategoryScore } from "./types";

export type DailyMission = {
  title: string;
  description: string;
  estimatedGain: string;
  duration: string;
};

type MissionInput = {
  categories: CareerCategoryScore[];
};

export function generateDailyMission({
  categories,
}: MissionInput): DailyMission {
  const weakest = [...categories].sort(
    (a, b) => a.score / a.maxScore - b.score / b.maxScore
  )[0];

  switch (weakest.label) {
    case "Coding":
      return {
        title: "Solve 2 DSA Problems",
        description: "Improve your coding consistency.",
        estimatedGain: "+3 Career Score",
        duration: "45 min",
      };

    case "Academics":
      return {
        title: "Revise Your Weakest Subject",
        description: "Strengthen academic readiness.",
        estimatedGain: "+2 Career Score",
        duration: "40 min",
      };

    case "Internships":
      return {
        title: "Apply to One Internship",
        description: "Increase your interview opportunities.",
        estimatedGain: "+4 Career Score",
        duration: "30 min",
      };

    case "Projects":
      return {
        title: "Work on Your Portfolio Project",
        description: "Projects have a high placement impact.",
        estimatedGain: "+5 Career Score",
        duration: "60 min",
      };

    default:
      return {
        title: "Continue Learning",
        description: "Keep improving consistently.",
        estimatedGain: "+2 Career Score",
        duration: "30 min",
      };
  }
}
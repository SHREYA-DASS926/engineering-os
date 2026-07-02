export type PlacementCategoryScore = {
  label: string;
  score: number;
  maxScore: number;
  description: string;
};

export type PlacementReadiness = {
  totalScore: number;
  maxScore: number;
  level: "Beginner" | "Improving" | "Ready" | "Strong";
  categories: PlacementCategoryScore[];
  recommendations: string[];
};
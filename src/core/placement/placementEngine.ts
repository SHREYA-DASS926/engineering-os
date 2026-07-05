import { PLACEMENT_WEIGHTS } from "../../constants/placement";

type PlacementMetrics = {
  coding: number;
  study: number;
  internships: number;
  projects: number;
  consistency: number;
};

export function calculatePlacementScore({
  coding,
  study,
  internships,
  projects,
  consistency,
}: PlacementMetrics) {
  const score =
    coding * PLACEMENT_WEIGHTS.coding +
    study * PLACEMENT_WEIGHTS.study +
    internships * PLACEMENT_WEIGHTS.internships +
    projects * PLACEMENT_WEIGHTS.projects +
    consistency * PLACEMENT_WEIGHTS.consistency;

  return Math.min(Math.round(score), 100);
}

export function calculatePlacementLevel(
  score: number
): "Beginner" | "Improving" | "Ready" | "Strong" {
  if (score >= 85) return "Strong";
  if (score >= 60) return "Ready";
  if (score >= 35) return "Improving";

  return "Beginner";
}
import type { CareerProfile } from "./types";

export type CareerForecast = {
  currentScore: number;
  projectedScore: number;
  gain: number;
  timeframe: string;
  explanation: string;
};

export function generateCareerForecast(profile: CareerProfile): CareerForecast {
  const weakestCategory = [...profile.categories].sort((a, b) => {
    const aPercent = a.score / a.maxScore;
    const bPercent = b.score / b.maxScore;

    return aPercent - bPercent;
  })[0];

  const potentialGain = Math.min(12, weakestCategory.maxScore - weakestCategory.score);

  const projectedScore = Math.min(
    profile.totalScore + potentialGain,
    profile.maxScore
  );

  return {
    currentScore: profile.totalScore,
    projectedScore,
    gain: projectedScore - profile.totalScore,
    timeframe: "4 weeks",
    explanation: `Improving ${weakestCategory.label.toLowerCase()} could raise your readiness score by ${projectedScore - profile.totalScore} points.`,
  };
}
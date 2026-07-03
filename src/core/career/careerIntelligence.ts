import type { CareerProfile } from "./types";
import { generateAIBrief } from "./aiBriefEngine";
import { generateCareerForecast } from "./forecastEngine";
import { generateDailyMission } from "./missionEngine";

export function generateCareerIntelligence(profile: CareerProfile) {
  const mission = generateDailyMission({
    categories: profile.categories,
  });

  const aiBrief = generateAIBrief(profile);

  const forecast = generateCareerForecast(profile);

  return {
    mission,
    aiBrief,
    forecast,
    recommendations: profile.recommendations,
  };
}
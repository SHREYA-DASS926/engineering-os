import PlacementHeader from "../features/placement/components/PlacementHeader";
import PlacementScore from "../features/placement/components/PlacementScore";
import ScoreBreakdown from "../features/placement/components/ScoreBreakdown";
import RecommendationCard from "../features/placement/components/RecommendationCard";
import CareerForecastCard from "../features/placement/components/CareerForecastCard";
import { generateCareerForecast } from "../core/career/forecastEngine";
import { studyService } from "../services/study.service";
import { codingService } from "../services/coding.service";
import { internshipService } from "../services/internship.service";

import { calculatePlacementReadiness } from "../features/placement/utils/scoring";

function PlacementReadiness() {
  const readiness = calculatePlacementReadiness({
    subjects: studyService.getSubjects(),
    codingProblems: codingService.getProblems(),
    applications: internshipService.getApplications(),
  });
  const forecast = generateCareerForecast({
  totalScore: readiness.totalScore,
  maxScore: readiness.maxScore,
  level: readiness.level,
  categories: readiness.categories.map((category) => ({
    id: category.label.toLowerCase(),
    label: category.label,
    score: category.score,
    maxScore: category.maxScore,
    description: category.description,
  })),
  recommendations: readiness.recommendations,
});

  return (
    <div className="space-y-8">
      <PlacementHeader />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <PlacementScore
          score={readiness.totalScore}
          maxScore={readiness.maxScore}
          level={readiness.level}
        />

        <div className="lg:col-span-2">
          <RecommendationCard
            recommendations={readiness.recommendations}
          />
        </div>
      </div>

      <ScoreBreakdown
        categories={readiness.categories}
      />

      <CareerForecastCard forecast={forecast} />
    </div>
  );
}

export default PlacementReadiness;
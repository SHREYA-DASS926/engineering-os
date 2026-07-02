import PlacementHeader from "../features/placement/components/PlacementHeader";
import PlacementScore from "../features/placement/components/PlacementScore";
import ScoreBreakdown from "../features/placement/components/ScoreBreakdown";
import RecommendationCard from "../features/placement/components/RecommendationCard";

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
    </div>
  );
}

export default PlacementReadiness;
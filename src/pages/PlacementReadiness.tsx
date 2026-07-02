import RecommendationCard from "../features/placement/components/RecommendationCard";
import PlacementScore from "../features/placement/components/PlacementScore";
import ScoreBreakdown from "../features/placement/components/ScoreBreakdown";

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
      <div>
        <h2 className="text-3xl font-bold">Placement Readiness</h2>

        <p className="text-slate-500 mt-2">
          A calculated score based on your engineering profile.
        </p>
      </div>

      <PlacementScore
        score={readiness.totalScore}
        maxScore={readiness.maxScore}
        level={readiness.level}
      />

      <ScoreBreakdown
        categories={readiness.categories}
      />
      <RecommendationCard
  recommendations={readiness.recommendations}
/>
    </div>
  );
}

export default PlacementReadiness;
import { calculatePlacementReadiness } from "../../placement/utils/scoring";
import { generateCareerForecast } from "../../../core/career/forecastEngine";

import { studyService } from "../../../services/study.service";
import { codingService } from "../../../services/coding.service";
import { internshipService } from "../../../services/internship.service";

function useCareer() {
  const subjects = studyService.getSubjects();
  const codingProblems = codingService.getProblems();
  const applications = internshipService.getApplications();

  const readiness = calculatePlacementReadiness({
    subjects,
    codingProblems,
    applications,
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

  return {
    readiness,
    forecast,
    applications,
  };
}

export default useCareer;
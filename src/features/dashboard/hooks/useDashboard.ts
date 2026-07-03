import { studyService } from "../../../services/study.service";
import { codingService } from "../../../services/coding.service";
import { internshipService } from "../../../services/internship.service";
import { expenseService } from "../../../services/expense.service";
import { generateDailyMission } from "../../../core/career/missionEngine";
import { calculatePlacementReadiness } from "../../placement/utils/scoring";
import { generateAIBrief } from "../../../core/career/aiBriefEngine";
function useDashboard() {
  const subjects = studyService.getSubjects();
  const codingProblems = codingService.getProblems();
  const applications = internshipService.getApplications();
  const expenses = expenseService.getExpenses();

  const placement = calculatePlacementReadiness({
    subjects,
    codingProblems,
    applications,
  });

  const mission = generateDailyMission({
    categories: placement.categories.map((category) => ({
      id: category.label.toLowerCase(),
      label: category.label,
      score: category.score,
      maxScore: category.maxScore,
      description: category.description,
    })),
  });
  const aiBrief = generateAIBrief({
  totalScore: placement.totalScore,
  maxScore: placement.maxScore,
  level: placement.level,
  categories: placement.categories.map((category) => ({
    id: category.label.toLowerCase(),
    label: category.label,
    score: category.score,
    maxScore: category.maxScore,
    description: category.description,
  })),
  recommendations: placement.recommendations,
});
  const averageAttendance =
    subjects.length === 0
      ? 0
      : Math.round(
          subjects.reduce((sum, subject) => {
            if (subject.totalClasses === 0) return sum;

            return sum + (subject.attendedClasses / subject.totalClasses) * 100;
          }, 0) / subjects.length
        );

  return {
    placement,

    study: {
      attendance: averageAttendance,
      subjects: subjects.length,
    },

    coding: {
      solved: codingProblems.filter((problem) => problem.solved).length,
      total: codingProblems.length,
    },

    internships: {
      total: applications.length,
    },

    expenses: {
      total: expenses.reduce((sum, expense) => sum + expense.amount, 0),
    },

    mission,
    aiBrief,
  };
}

export default useDashboard;
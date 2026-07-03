import { studyService } from "../../../services/study.service";
import { codingService } from "../../../services/coding.service";
import { internshipService } from "../../../services/internship.service";
import { expenseService } from "../../../services/expense.service";

import { calculatePlacementReadiness } from "../../placement/utils/scoring";

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

  const averageAttendance =
    subjects.length === 0
      ? 0
      : Math.round(
          subjects.reduce((sum, subject) => {
            if (subject.totalClasses === 0) return sum;

            return (
              sum +
              (subject.attendedClasses / subject.totalClasses) * 100
            );
          }, 0) / subjects.length
        );

  return {
    placement,

    study: {
      attendance: averageAttendance,
      subjects: subjects.length,
    },

    coding: {
      solved: codingProblems.filter((p) => p.solved).length,
      total: codingProblems.length,
    },

    internships: {
      total: applications.length,
    },

    expenses: {
      total: expenses.reduce((sum, e) => sum + e.amount, 0),
    },
  };
}

export default useDashboard;
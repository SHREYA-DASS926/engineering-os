import {
  Briefcase,
  Code2,
  CreditCard,
  GraduationCap,
  Target,
} from "lucide-react";

import StatCard from "../components/StatCard";

import DashboardHeader from "../features/dashboard/components/DashboardHeader";
import TodaysFocus from "../features/dashboard/components/TodaysFocus";
import RecentActivity from "../features/dashboard/components/RecentActivity";
import AIRecommendation from "../features/dashboard/components/AIRecommendation";

import { studyService } from "../services/study.service";
import { codingService } from "../services/coding.service";
import { internshipService } from "../services/internship.service";
import { expenseService } from "../services/expense.service";

import { calculatePlacementReadiness } from "../features/placement/utils/scoring";

function Dashboard() {
  const subjects = studyService.getSubjects();
  const codingProblems = codingService.getProblems();
  const internshipApplications = internshipService.getApplications();
  const expenses = expenseService.getExpenses();

  const readiness = calculatePlacementReadiness({
    subjects,
    codingProblems,
    applications: internshipApplications,
  });

  function calculateAttendance(attended: number, total: number) {
    if (total === 0) return 0;

    return Math.round((attended / total) * 100);
  }

  const averageAttendance =
    subjects.length === 0
      ? 0
      : Math.round(
          subjects.reduce(
            (sum, subject) =>
              sum +
              calculateAttendance(
                subject.attendedClasses,
                subject.totalClasses
              ),
            0
          ) / subjects.length
        );

  const solvedProblems = codingProblems.filter((problem) => problem.solved).length;

  const totalApplications = internshipApplications.length;

  const totalExpenses = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <div className="space-y-8">
      <DashboardHeader />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">
        <StatCard
          title="Placement"
          value={`${readiness.totalScore}%`}
          description={readiness.level}
          icon={Target}
        />

        <StatCard
          title="Study Progress"
          value={`${averageAttendance}%`}
          description="Average attendance"
          icon={GraduationCap}
        />

        <StatCard
          title="Coding"
          value={`${solvedProblems}`}
          description="Problems solved"
          icon={Code2}
        />

        <StatCard
          title="Applications"
          value={`${totalApplications}`}
          description="Internships"
          icon={Briefcase}
        />

        <StatCard
          title="Expenses"
          value={`₹${totalExpenses}`}
          description="Tracked spending"
          icon={CreditCard}
        />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <TodaysFocus />
        <RecentActivity />
      </div>

      <AIRecommendation />
    </div>
  );
}

export default Dashboard;
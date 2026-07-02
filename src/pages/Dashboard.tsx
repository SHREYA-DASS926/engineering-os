import {
  Briefcase,
  Code2,
  CreditCard,
  GraduationCap,
} from "lucide-react";

import StatCard from "../components/StatCard";
import DashboardHeader from "../features/dashboard/components/DashboardHeader";

import type { CodingProblem } from "../types/coding";
import type { Expense } from "../types/expense";
import type { InternshipApplication } from "../types/internship";
import type { Subject } from "../types/study";

function Dashboard() {
  const subjects: Subject[] = JSON.parse(
    localStorage.getItem("subjects") || "[]"
  );

  const codingProblems: CodingProblem[] = JSON.parse(
    localStorage.getItem("codingProblems") || "[]"
  );

  const internshipApplications: InternshipApplication[] = JSON.parse(
    localStorage.getItem("internshipApplications") || "[]"
  );

  const expenses: Expense[] = JSON.parse(
    localStorage.getItem("expenses") || "[]"
  );

  function calculateAttendance(attended: number, total: number) {
    if (total === 0) {
      return 0;
    }

    return Math.round((attended / total) * 100);
  }

  const averageAttendance =
    subjects.length === 0
      ? 0
      : Math.round(
          subjects.reduce((sum, subject) => {
            return (
              sum +
              calculateAttendance(subject.attendedClasses, subject.totalClasses)
            );
          }, 0) / subjects.length
        );

  const solvedProblems = codingProblems.filter(
    (problem) => problem.solved
  ).length;

  const totalApplications = internshipApplications.length;

  const totalExpenses = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  const upcomingTasks = [
    subjects.length > 0
      ? {
          title: "Review attendance",
          source: "Study Tracker",
          time: "Today",
        }
      : null,
    codingProblems.some((problem) => !problem.solved)
      ? {
          title: "Solve one pending DSA problem",
          source: "Coding Tracker",
          time: "Today",
        }
      : null,
    internshipApplications.length > 0
      ? {
          title: "Update internship application status",
          source: "Internship Tracker",
          time: "This week",
        }
      : null,
  ].filter(Boolean) as {
    title: string;
    source: string;
    time: string;
  }[];

  return (
    <div>
      <DashboardHeader />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Study Progress"
          value={`${averageAttendance}%`}
          description="Average attendance"
          icon={GraduationCap}
        />

        <StatCard
          title="DSA Progress"
          value={`${solvedProblems}`}
          description="Problems solved"
          icon={Code2}
        />

        <StatCard
          title="Applications"
          value={`${totalApplications}`}
          description="Internships applied"
          icon={Briefcase}
        />

        <StatCard
          title="Total Expenses"
          value={`₹${totalExpenses}`}
          description="Tracked spending"
          icon={CreditCard}
        />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <section className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
          <h3 className="text-xl font-bold mb-4">Suggested Tasks</h3>

          {upcomingTasks.length === 0 ? (
            <p className="text-slate-500">
              Add study, coding, internship, or expense data to generate
              suggestions.
            </p>
          ) : (
            <div className="space-y-4">
              {upcomingTasks.map((task) => (
                <div
                  key={task.title}
                  className="flex items-center justify-between border-b border-slate-100 pb-3 last:border-b-0 last:pb-0"
                >
                  <div>
                    <p className="font-medium">{task.title}</p>
                    <p className="text-sm text-slate-500">{task.source}</p>
                  </div>

                  <span className="text-sm text-slate-500">{task.time}</span>
                </div>
              ))}
            </div>
          )}
        </section>

        <section className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
          <h3 className="text-xl font-bold mb-4">Progress Overview</h3>

          <div className="space-y-5">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Study Consistency</span>
                <span>{averageAttendance}%</span>
              </div>

              <div className="h-3 bg-slate-100 rounded-full">
                <div
                  className="h-3 bg-slate-900 rounded-full"
                  style={{ width: `${averageAttendance}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Coding Practice</span>
                <span>{solvedProblems}</span>
              </div>

              <div className="h-3 bg-slate-100 rounded-full">
                <div
                  className="h-3 bg-slate-900 rounded-full"
                  style={{
                    width: `${Math.min(solvedProblems * 5, 100)}%`,
                  }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Internship Activity</span>
                <span>{totalApplications}</span>
              </div>

              <div className="h-3 bg-slate-100 rounded-full">
                <div
                  className="h-3 bg-slate-900 rounded-full"
                  style={{
                    width: `${Math.min(totalApplications * 10, 100)}%`,
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;
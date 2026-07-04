import {
  BookOpen,
  Briefcase,
  Code2,
  CreditCard,
  Sparkles,
  Target,
} from "lucide-react";

import {
  DashboardHeader,
  PlacementScore,
  QuickStats,
  WeeklyChart,
} from "../components/dashboard";

import useDashboard from "../features/dashboard/hooks/useDashboard";
import useActivities from "../features/activity/hooks/useActivities";
import { Card } from "../components/ui";

function DashboardV2() {
  const { placement, study, coding, internships, expenses, aiBrief } =
    useDashboard();

  const activities = useActivities();

  const stats = [
    {
      title: "Coding",
      value: `${coding.solved}`,
      subtitle: `${coding.total} total problems`,
      icon: Code2,
    },
    {
      title: "Learning",
      value: `${study.attendance}%`,
      subtitle: `${study.subjects} subjects tracked`,
      icon: BookOpen,
    },
    {
      title: "Career",
      value: `${internships.total}`,
      subtitle: "applications submitted",
      icon: Briefcase,
    },
    {
      title: "Finance",
      value: `₹${expenses.total}`,
      subtitle: "tracked spending",
      icon: CreditCard,
    },
  ];

  return (
    <div className="space-y-8">
      <DashboardHeader />

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <PlacementScore score={placement.totalScore} level={placement.level} />
        </div>

        <Card>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-100 text-purple-700">
              <Sparkles size={20} />
            </div>

            <div>
              <p className="text-sm font-medium text-slate-500">
                Today&apos;s Mission
              </p>
              <h3 className="text-xl font-bold text-slate-950">
                Highest-impact actions
              </h3>
            </div>
          </div>

          <div className="mt-6 space-y-3 text-sm text-slate-600">
            <p>□ Solve 2 DSA problems</p>
            <p>□ Review one core CS topic</p>
            <p>□ Apply to one opportunity</p>
          </div>

          <p className="mt-6 rounded-2xl bg-slate-100 px-4 py-3 text-sm font-medium text-slate-700">
            Estimated gain: +3 placement score
          </p>
        </Card>
      </div>

      <QuickStats stats={stats} />

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <WeeklyChart />
        </div>

        <Card>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
              <Target size={20} />
            </div>

            <div>
              <p className="text-sm font-medium text-slate-500">AI Coach</p>
              <h3 className="text-xl font-bold text-slate-950">
                Today&apos;s Insight
              </h3>
            </div>
          </div>

          <p className="mt-5 text-sm leading-6 text-slate-600">
            {aiBrief.insight}
          </p>
        </Card>
      </div>

      <Card>
        <h3 className="text-xl font-bold text-slate-950">Recent Activity</h3>
        <p className="mt-1 text-sm text-slate-500">
          Latest updates across your EngOS workspace.
        </p>

        <div className="mt-6 space-y-4">
          {activities.length === 0 ? (
            <p className="text-sm text-slate-500">No activity yet.</p>
          ) : (
            activities.map((activity) => {
              const Icon = activity.icon;

              return (
                <div
                  key={`${activity.title}-${activity.subtitle}`}
                  className="flex items-center gap-4 rounded-2xl border border-slate-100 p-4"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
                    <Icon size={18} />
                  </div>

                  <div>
                    <p className="font-semibold text-slate-950">
                      {activity.title}
                    </p>
                    <p className="text-sm text-slate-500">
                      {activity.subtitle}
                    </p>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </Card>
    </div>
  );
}

export default DashboardV2;
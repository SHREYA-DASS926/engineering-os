import {
  Briefcase,
  Code2,
  CreditCard,
  GraduationCap,
  Target,
} from "lucide-react";

import StatCard from "../components/StatCard";

import HeroBanner from "../features/dashboard/components/HeroBanner";
import QuickActions from "../features/dashboard/components/QuickActions";
import DailyChecklist from "../features/dashboard/components/DailyChecklist";
import WeeklyProgress from "../features/dashboard/components/WeeklyProgress";
import RecentActivity from "../features/dashboard/components/RecentActivity";
import AIRecommendation from "../features/dashboard/components/AIRecommendation";

import useDashboard from "../features/dashboard/hooks/useDashboard";

function Dashboard() {
  const { placement, study, coding, internships, expenses } = useDashboard();

  return (
    <div className="space-y-8">
      <HeroBanner
        score={placement.totalScore}
        level={placement.level}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">
        <StatCard
          title="Placement"
          value={`${placement.totalScore}%`}
          description={placement.level}
          icon={Target}
        />

        <StatCard
          title="Study"
          value={`${study.attendance}%`}
          description={`${study.subjects} subjects`}
          icon={GraduationCap}
        />

        <StatCard
          title="Coding"
          value={`${coding.solved}`}
          description={`${coding.total} total problems`}
          icon={Code2}
        />

        <StatCard
          title="Internships"
          value={`${internships.total}`}
          description="Applications tracked"
          icon={Briefcase}
        />

        <StatCard
          title="Expenses"
          value={`₹${expenses.total}`}
          description="Total tracked spending"
          icon={CreditCard}
        />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <QuickActions />
        <DailyChecklist />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <WeeklyProgress
          study={study.attendance}
          coding={Math.min(coding.solved * 5, 100)}
          placement={placement.totalScore}
          internships={Math.min(internships.total * 10, 100)}
        />

        <RecentActivity />
      </div>

      <AIRecommendation
        score={placement.totalScore}
        level={placement.level}
        recommendations={placement.recommendations}
      />
    </div>
  );
}

export default Dashboard;
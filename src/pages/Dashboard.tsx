import {
  Briefcase,
  Code2,
  CreditCard,
  GraduationCap,
  Target,
} from "lucide-react";

import { MetricWidget, MissionWidget } from "../components/widgets";

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
      <MissionWidget
      title="Today's Mission"
      subtitle="Highest-impact action for your career score"
      mission="Solve 2 DSA problems and apply to 1 internship"
      estimatedGain="+2 Career Score"
      icon={Target}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">
        <MetricWidget
          title="Placement"
          value={`${placement.totalScore}%`}
          subtitle={placement.level}
          icon={Target}
        />

        <MetricWidget
          title="Study"
          value={`${study.attendance}%`}
          subtitle={`${study.subjects} subjects`}
          icon={GraduationCap}
        />

        <MetricWidget
          title="Coding"
          value={`${coding.solved}`}
          subtitle={`${coding.total} total problems`}
          icon={Code2}
        />

        <MetricWidget
          title="Internships"
          value={`${internships.total}`}
          subtitle="Applications tracked"
          icon={Briefcase}
        />

        <MetricWidget
          title="Expenses"
          value={`₹${expenses.total}`}
          subtitle="Total tracked spending"
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
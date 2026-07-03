import {
  Target,
  GraduationCap,
  Code2,
  Briefcase,
  CreditCard,
  BookOpen,
} from "lucide-react";

import {
  AIBriefWidget,
  AnalyticsChartWidget,
  MetricWidget,
  TimelineWidget,
} from "../components/widgets";

import HeroBanner from "../features/dashboard/components/HeroBanner";
import QuickActions from "../features/dashboard/components/QuickActions";
import DailyChecklist from "../features/dashboard/components/DailyChecklist";
import useDashboard from "../features/dashboard/hooks/useDashboard";

function Dashboard() {
  const {
  placement,
  study,
  coding,
  internships,
  expenses,
  mission,
  aiBrief,
} = useDashboard();

  return (
    <div className="space-y-8">
      <HeroBanner
      score={placement.totalScore}
      level={placement.level}
      mission={mission}
      />
      

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">
        <MetricWidget
          title="Placement"
          value={`${placement.totalScore}%`}
          subtitle={placement.level}
          icon={Target}
          trend="+4 this week"
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
        <AnalyticsChartWidget
        title="Weekly Progress"
        subtitle="Your progress across core areas"
        data={[
        { name: "Study", value: study.attendance },
        { name: "Coding", value: Math.min(coding.solved * 5, 100) },
        { name: "Career", value: placement.totalScore },
        { name: "Internships", value: Math.min(internships.total * 10, 100) },
        ]}
        />

        <TimelineWidget
  title="Recent Activity"
  subtitle="Latest updates across EngOS"
  items={[
    {
      title: "Reviewed academics",
      subtitle: "Study tracker",
      icon: BookOpen,
    },
    {
      title: "Updated coding progress",
      subtitle: "Coding tracker",
      icon: Code2,
    },
    {
      title: "Checked career readiness",
      subtitle: "Career engine",
      icon: Target,
    },
  ]}
/>
      </div>

      <AIBriefWidget
      score={placement.totalScore}
      level={placement.level}
      recommendation={aiBrief.insight}
      />
    </div>
  );
}

export default Dashboard;
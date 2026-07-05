import { motion } from "framer-motion";
import {
  Briefcase,
  Code2,
  FolderGit2,
  GraduationCap,
  Trophy,
} from "lucide-react";

import { Card } from "../../../components/ui";

type Stage = {
  title: string;
  progress: number;
  color: string;
  icon: typeof GraduationCap;
};

type CareerJourneyProps = {
  placementScore: number;
};

function CareerJourney({ placementScore }: CareerJourneyProps) {
  const stages: Stage[] = [
    {
      title: "Foundation",
      progress: 100,
      color: "bg-emerald-500",
      icon: GraduationCap,
    },
    {
      title: "Coding",
      progress: Math.min(placementScore + 35, 100),
      color: "bg-blue-500",
      icon: Code2,
    },
    {
      title: "Projects",
      progress: Math.min(placementScore + 15, 100),
      color: "bg-purple-500",
      icon: FolderGit2,
    },
    {
      title: "Internships",
      progress: placementScore,
      color: "bg-orange-500",
      icon: Briefcase,
    },
    {
      title: "Placement",
      progress: placementScore,
      color: "bg-pink-500",
      icon: Trophy,
    },
  ];

  return (
    <Card className="p-6">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-500">Career Journey</p>
          <h2 className="text-2xl font-bold text-slate-950">
            Your Engineering Roadmap
          </h2>
        </div>

        <div className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
          {placementScore}% ready
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-5">
        {stages.map((stage) => {
          const Icon = stage.icon;

          return (
            <div
              key={stage.title}
              className="rounded-2xl border border-slate-100 bg-slate-50 p-4"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-slate-700 shadow-sm">
                  <Icon size={18} />
                </div>

                <span className="text-sm font-semibold text-slate-500">
                  {stage.progress}%
                </span>
              </div>

              <p className="mb-3 font-semibold text-slate-950">
                {stage.title}
              </p>

              <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${stage.progress}%` }}
                  transition={{ duration: 0.75 }}
                  className={`h-full rounded-full ${stage.color}`}
                />
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

export default CareerJourney;
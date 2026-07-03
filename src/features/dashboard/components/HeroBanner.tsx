import { ArrowRight, Clock, Sparkles, Target } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/Button";
import Card from "../../../components/ui/Card";
import ProgressBar from "../../../components/ui/ProgressBar";

type HeroBannerProps = {
  score: number;
  level: string;
  mission: {
    title: string;
    description: string;
    estimatedGain: string;
    duration: string;
  };
};

function HeroBanner({ score, level, mission }: HeroBannerProps) {
  const nextMilestone = score < 50 ? 50 : score < 75 ? 75 : 90;

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card variant="dark" className="relative overflow-hidden p-7">
        <div className="absolute -top-28 -right-20 h-72 w-72 rounded-full bg-indigo-500/25 blur-3xl" />
        <div className="absolute -bottom-28 -left-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative grid grid-cols-1 xl:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm text-slate-200 mb-4">
              <Sparkles size={15} />
              Engineering Command Center
            </div>

            <p className="text-slate-300 mb-2">Good morning, Shrey 👋</p>

            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Focus on what moves your career forward.
            </h1>

            <p className="text-slate-300 max-w-xl leading-relaxed">
              Your daily view of academics, coding, internships, expenses, and
              placement readiness.
            </p>
          </div>

          <div className="rounded-3xl bg-white/10 border border-white/10 p-5 backdrop-blur">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Target size={19} />
                  <span className="font-semibold">Career Score</span>
                </div>

                <div className="flex items-end gap-2 mb-3">
                  <span className="text-5xl font-bold tracking-tight">
                    {score}
                  </span>
                  <span className="text-xl text-slate-400 mb-1">/100</span>
                </div>

                <ProgressBar value={score} />

                <div className="mt-3 flex items-center justify-between text-sm text-slate-300">
                  <span>{level}</span>
                  <span>Next milestone: {nextMilestone}</span>
                </div>
              </div>

              <div className="rounded-2xl bg-black/20 border border-white/10 p-4">
                <p className="text-sm text-slate-300 mb-2">Today's Mission</p>

                <h3 className="text-xl font-bold tracking-tight mb-2">
                  {mission.title}
                </h3>

                <p className="text-sm text-slate-300 mb-4">
                  {mission.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="rounded-full bg-green-400/10 text-green-300 px-3 py-1 text-sm">
                    {mission.estimatedGain}
                  </span>

                  <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-sm text-slate-200">
                    <Clock size={14} />
                    {mission.duration}
                  </span>
                </div>

                <Button className="inline-flex items-center gap-2">
                  Start Mission
                  <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export default HeroBanner;
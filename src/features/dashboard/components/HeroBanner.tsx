import { ArrowRight, Clock, Sparkles, Target } from "lucide-react";
import { motion } from "framer-motion";

import { Button, Card } from "../../../components/ui";

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

function getGreeting() {
  const hour = new Date().getHours();

  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}

function HeroBanner({ score, level, mission }: HeroBannerProps) {
  const nextMilestone = score < 50 ? 50 : score < 75 ? 75 : 90;
  const greeting = getGreeting();

  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <Card
        hover={false}
        className="relative overflow-hidden border-0 bg-linear-to-br from-slate-950 via-slate-900 to-blue-950 p-8 text-white shadow-2xl shadow-blue-500/10"
      >
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blue-500/25 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />

        <div className="relative grid grid-cols-1 gap-8 xl:grid-cols-[1fr_1.1fr] xl:items-center">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-blue-100">
              <Sparkles size={15} />
              EngOS Career Command Center
            </div>

            <p className="mb-3 text-slate-300">{greeting}, Shrey 👋</p>

            <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight lg:text-5xl">
              Build your engineering career one focused day at a time.
            </h1>

            <p className="mt-5 max-w-xl leading-7 text-slate-300">
              Track coding, learning, internships, finance, and placement
              readiness from one intelligent workspace.
            </p>

            <div className="mt-8">
              <Button className="inline-flex items-center gap-2">
                Continue Today&apos;s Mission
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl">
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-5 shadow-xl shadow-black/20 backdrop-blur">
                <div className="mb-4 flex items-center gap-2">
                  <Target size={19} />
                  <span className="font-semibold">Placement Readiness</span>
                </div>

                <div className="mb-4 flex items-end gap-2">
                  <span className="text-6xl font-bold tracking-tight">
                    {score}
                  </span>
                  <span className="mb-2 text-xl text-slate-400">/100</span>
                </div>

                <div className="h-3 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${score}%` }}
                    transition={{ duration: 0.7 }}
                    className="h-full rounded-full bg-linear-to-r from-blue-400 via-cyan-400 to-emerald-400 shadow-lg shadow-blue-500/30"
                  />
                </div>

                <div className="mt-4 flex items-center justify-between text-sm text-slate-300">
                  <span>{level}</span>
                  <span>Next: {nextMilestone}</span>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-5 shadow-xl shadow-black/20 backdrop-blur">
                <p className="mb-2 text-sm text-slate-300">
                  Today&apos;s Mission
                </p>

                <h3 className="mb-2 text-xl font-bold tracking-tight">
                  {mission.title}
                </h3>

                <p className="mb-5 text-sm leading-6 text-slate-300">
                  {mission.description}
                </p>

                <div className="mb-5 flex flex-wrap gap-2">
                  <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-sm text-emerald-300">
                    {mission.estimatedGain}
                  </span>

                  <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-sm text-slate-200">
                    <Clock size={14} />
                    {mission.duration}
                  </span>
                </div>

                <Button className="w-full justify-center gap-2 shadow-lg shadow-blue-500/20">
                  Start Mission
                  <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </motion.section>
  );
}

export default HeroBanner;
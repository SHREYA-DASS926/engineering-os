import { ArrowRight, Sparkles, Target } from "lucide-react";
import { motion } from "framer-motion";

import Button from "../../../components/ui/Button";
import Card from "../../../components/ui/Card";
import ProgressBar from "../../../components/ui/ProgressBar";

type HeroBannerProps = {
  score: number;
  level: string;
};

function HeroBanner({ score, level }: HeroBannerProps) {
  const nextMilestone = score < 50 ? 50 : score < 75 ? 75 : 90;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <Card variant="dark" className="relative overflow-hidden p-8">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm text-slate-200 mb-5">
              <Sparkles size={16} />
              AI-powered engineering command center
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Build your placement profile with clarity.
            </h1>

            <p className="text-slate-300 max-w-xl leading-relaxed mb-6">
              Track academics, coding, internships, expenses and placement
              readiness from one intelligent student dashboard.
            </p>

            <Button className="inline-flex items-center gap-2">
              Continue today&apos;s mission
              <ArrowRight size={18} />
            </Button>
          </div>

          <div className="rounded-3xl bg-white/10 border border-white/10 p-6 backdrop-blur">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <Target size={20} />
                <span className="font-semibold">Placement Readiness</span>
              </div>

              <span className="text-sm rounded-full bg-white/10 px-3 py-1">
                {level}
              </span>
            </div>

            <div className="flex items-end gap-2 mb-5">
              <span className="text-6xl font-bold tracking-tight">
                {score}
              </span>
              <span className="text-2xl text-slate-400 mb-2">/100</span>
            </div>

            <ProgressBar value={score} />

            <div className="mt-5 rounded-2xl bg-black/20 border border-white/10 p-4">
              <p className="text-sm text-slate-300">Next milestone</p>
              <p className="text-lg font-semibold mt-1">
                Reach {nextMilestone}/100 by improving DSA and applications.
              </p>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export default HeroBanner;
import { motion } from "framer-motion";
import { Target } from "lucide-react";

import { Card } from "../ui";

type PlacementScoreProps = {
  score: number;
  level: string;
};

function PlacementScore({ score, level }: PlacementScoreProps) {
  return (
    <Card className="relative overflow-hidden">
      <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-blue-100 blur-3xl" />

      <div className="relative flex items-center justify-between gap-6">
        <div>
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white">
            <Target size={22} />
          </div>

          <p className="text-sm font-medium text-slate-500">
            Placement Readiness
          </p>

          <h2 className="mt-2 text-4xl font-bold text-slate-950">
            {score}%
          </h2>

          <p className="mt-2 text-sm text-slate-500">{level}</p>
        </div>

        <div className="h-28 w-28 rounded-full border-[10px] border-blue-600 flex items-center justify-center">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-xl font-bold"
          >
            {score}
          </motion.span>
        </div>
      </div>
    </Card>
  );
}

export default PlacementScore;
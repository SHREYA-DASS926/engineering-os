import { Target, TrendingUp } from "lucide-react";

import Card from "../../../components/ui/Card";
import ProgressBar from "../../../components/ui/ProgressBar";

type CareerHeroProps = {
  score: number;
  maxScore: number;
  level: string;
  projectedScore: number;
  gain: number;
  timeframe: string;
};

function CareerHero({
  score,
  maxScore,
  level,
  projectedScore,
  gain,
  timeframe,
}: CareerHeroProps) {
  return (
    <Card variant="dark" className="p-8">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-center">
        <div>
          <div className="flex items-center gap-2 text-slate-300 mb-3">
            <Target size={18} />
            <span>Career Engine</span>
          </div>

          <h2 className="text-5xl font-bold tracking-tight mb-4">
            {score}
            <span className="text-2xl text-slate-400">/{maxScore}</span>
          </h2>

          <p className="text-slate-300 mb-5">
            Current level: <span className="font-semibold text-white">{level}</span>
          </p>

          <ProgressBar value={score} />
        </div>

        <div className="rounded-3xl bg-white/10 border border-white/10 p-6">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp size={18} />
            <h3 className="font-bold">Career Forecast</h3>
          </div>

          <p className="text-slate-300 mb-4">
            Projected score in {timeframe}
          </p>

          <div className="flex items-end gap-3">
            <span className="text-4xl font-bold">{score}</span>
            <span className="text-slate-400 mb-1">→</span>
            <span className="text-4xl font-bold">{projectedScore}</span>
            <span className="text-green-400 font-semibold mb-2">+{gain}</span>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default CareerHero;
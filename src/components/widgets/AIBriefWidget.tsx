import {
  ArrowRight,
  Bot,
  Briefcase,
  Sparkles,
  TrendingUp,
} from "lucide-react";

import { Button } from "../ui";
import Widget from "./Widget";

type AIBriefWidgetProps = {
  score: number;
  level: string;
  recommendation: string;
};

function getPriority(score: number) {
  if (score < 40)
    return {
      label: "HIGH",
      color: "bg-red-500/15 text-red-300",
      gain: "+6 Placement Score",
    };

  if (score < 70)
    return {
      label: "MEDIUM",
      color: "bg-amber-500/15 text-amber-300",
      gain: "+4 Placement Score",
    };

  return {
    label: "LOW",
    color: "bg-emerald-500/15 text-emerald-300",
    gain: "+2 Placement Score",
  };
}

function AIBriefWidget({
  score,
  level,
  recommendation,
}: AIBriefWidgetProps) {
  const priority = getPriority(score);

  return (
    <Widget className="border-slate-800 bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300">
            <Bot size={26} />
          </div>

          <div>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <Sparkles size={14} />
              AI Coach
            </div>

            <h2 className="mt-1 text-2xl font-bold">
              Today's Recommendation
            </h2>
          </div>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-bold ${priority.color}`}
        >
          {priority.label}
        </span>
      </div>

      <div className="mt-8 space-y-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="mb-2 flex items-center gap-2 text-sm text-slate-400">
            <Briefcase size={15} />
            Placement Status
          </div>

          <div className="flex items-end gap-3">
            <span className="text-5xl font-bold">{score}</span>

            <div className="pb-2">
              <p className="text-slate-300">/100</p>
              <p className="text-sm text-blue-300">{level}</p>
            </div>
          </div>
        </div>

        <div>
          <p className="mb-2 text-sm font-semibold text-slate-400">
            AI Insight
          </p>

          <p className="leading-7 text-slate-300">
            {recommendation}
          </p>
        </div>

        <div className="flex items-center justify-between rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4">
          <div>
            <p className="text-sm text-slate-300">
              Expected Improvement
            </p>

            <p className="mt-1 font-semibold text-emerald-300">
              {priority.gain}
            </p>
          </div>

          <TrendingUp
            className="text-emerald-300"
            size={24}
          />
        </div>

        <Button className="w-full justify-center gap-2">
          Start Improving
          <ArrowRight size={16} />
        </Button>
      </div>
    </Widget>
  );
}

export default AIBriefWidget;
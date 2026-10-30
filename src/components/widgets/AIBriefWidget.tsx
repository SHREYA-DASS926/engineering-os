
import {
  ArrowRight,
  Bot,
  Briefcase,
  Sparkles,
  Target,
} from "lucide-react";
import { Link } from "react-router-dom";

import type { AIBrief } from "../../core/career/aiBriefEngine";
import Widget from "./Widget";

type AIBriefWidgetProps = {
  score: number;
  level: string;
  brief: AIBrief;
};

const priorityStyles = {
  high: "bg-red-500/15 text-red-300",
  medium: "bg-amber-500/15 text-amber-300",
  low: "bg-emerald-500/15 text-emerald-300",
};

function AIBriefWidget({
  score,
  level,
  brief,
}: AIBriefWidgetProps) {
  return (
    <Widget className="border-slate-800 bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300">
            <Bot size={26} />
          </div>

          <div>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <Sparkles size={14} />
              Career Intelligence
            </div>

            <h2 className="mt-1 text-2xl font-bold">
              Today's Recommendation
            </h2>
          </div>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-bold uppercase ${
            priorityStyles[brief.priority]
          }`}
        >
          {brief.priority} priority
        </span>
      </div>

      <div className="mt-8 space-y-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="mb-2 flex items-center gap-2 text-sm text-slate-400">
            <Briefcase size={15} />
            Placement Status
          </div>

          <div className="flex items-end gap-3">
            <span className="text-5xl font-bold">
              {score}
            </span>

            <div className="pb-2">
              <p className="text-slate-300">/100</p>
              <p className="text-sm text-blue-300">
                {level}
              </p>
            </div>
          </div>
        </div>

        <div>
          <p className="mb-2 text-sm font-semibold text-slate-400">
            Recommended Focus
          </p>

          <h3 className="mb-3 text-xl font-semibold text-white">
            {brief.title}
          </h3>

          <p className="leading-7 text-slate-300">
            {brief.insight}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {brief.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 rounded-2xl border border-blue-500/20 bg-blue-500/10 p-4">
          <Target
            className="shrink-0 text-blue-300"
            size={22}
          />

          <div>
            <p className="text-sm text-slate-400">
              Suggested Next Step
            </p>

            <p className="mt-1 font-semibold text-blue-200">
              {brief.actionLabel}
            </p>
          </div>
        </div>

        <Link
          to={brief.actionPath}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
        >
          {brief.actionLabel}
          <ArrowRight size={16} />
        </Link>
      </div>
    </Widget>
  );
}

export default AIBriefWidget;

import { Bot, Sparkles } from "lucide-react";

import Widget from "./Widget";

type AIBriefWidgetProps = {
  score: number;
  level: string;
  recommendation: string;
};

function AIBriefWidget({ score, level, recommendation }: AIBriefWidgetProps) {
  return (
    <Widget className="bg-gradient-to-br from-slate-900 to-slate-800 text-white border-slate-800">
      <div className="flex items-start gap-4">
        <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center">
          <Bot size={24} />
        </div>

        <div>
          <div className="flex items-center gap-2 text-slate-300 text-sm mb-2">
            <Sparkles size={15} />
            AI Brief
          </div>

          <h3 className="text-2xl font-bold mb-3">
            Career Score: {score}/100 — {level}
          </h3>

          <p className="text-slate-300 leading-relaxed">
            {recommendation}
          </p>
        </div>
      </div>
    </Widget>
  );
}

export default AIBriefWidget;
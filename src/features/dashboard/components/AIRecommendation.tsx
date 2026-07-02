import { Bot, Sparkles } from "lucide-react";

type AIRecommendationProps = {
  score: number;
  level: string;
  recommendations: string[];
};

function AIRecommendation({
  score,
  level,
  recommendations,
}: AIRecommendationProps) {
  return (
    <section className="rounded-3xl bg-slate-900 text-white p-6 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center">
          <Bot size={24} />
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles size={16} />
            <p className="text-sm font-medium text-slate-300">
              AI-style Recommendation
            </p>
          </div>

          <h3 className="text-xl font-bold mb-3">
            Placement readiness: {score}/100 — {level}
          </h3>

          <p className="text-slate-300 leading-relaxed mb-5">
            Based on your current study, coding, internship, and project
            progress, these are the highest-impact actions to improve your
            engineering profile.
          </p>

          <div className="flex flex-wrap gap-3">
            {recommendations.map((recommendation) => (
              <span
                key={recommendation}
                className="rounded-full bg-white/10 px-3 py-1 text-sm text-slate-200"
              >
                {recommendation}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AIRecommendation;
import { Bot, Sparkles } from "lucide-react";

function AIRecommendation() {
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
              AI Recommendation
            </p>
          </div>

          <h3 className="text-xl font-bold mb-3">
            Focus on coding consistency this week.
          </h3>

          <p className="text-slate-300 leading-relaxed">
            Your academics and expenses are being tracked, but your coding
            progress needs more repetition. Prioritize Arrays and Strings before
            moving into advanced DSA topics.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <span className="rounded-full bg-white/10 px-3 py-1 text-sm text-slate-200">
              Solve 5 problems
            </span>

            <span className="rounded-full bg-white/10 px-3 py-1 text-sm text-slate-200">
              Review weak topics
            </span>

            <span className="rounded-full bg-white/10 px-3 py-1 text-sm text-slate-200">
              Update resume
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AIRecommendation;
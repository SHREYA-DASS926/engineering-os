import {
  Bot,
  Brain,
  FileText,
  GraduationCap,
  Send,
  Sparkles,
} from "lucide-react";

function AIAssistant() {
  return (
    <div>
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-3 py-1 text-sm mb-4">
          <Sparkles size={16} />
          AI-powered planning coming soon
        </div>

        <h2 className="text-3xl font-bold mb-2">AI Assistant</h2>
        <p className="text-slate-500 max-w-2xl">
          Get help with study planning, coding practice, resume improvements,
          internship preparation, and productivity decisions.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <section className="xl:col-span-2 bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-11 w-11 rounded-2xl bg-slate-900 text-white flex items-center justify-center">
              <Bot size={22} />
            </div>

            <div>
              <h3 className="text-xl font-bold">Engineering Copilot</h3>
              <p className="text-sm text-slate-500">
                Ask anything about your academic or placement progress.
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5 mb-6">
            <p className="text-sm font-medium text-slate-500 mb-3">
              Sample response
            </p>

            <p className="text-slate-700 leading-relaxed">
              Based on your current progress, your study consistency looks
              stable, but your coding practice needs more weekly repetition.
              Focus on arrays, strings, and basic problem-solving patterns
              before moving into harder DSA topics.
            </p>
          </div>

          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Ask: What should I focus on this week?"
              className="flex-1 border border-slate-300 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900"
            />

            <button className="bg-slate-900 text-white rounded-2xl px-5 py-3 font-medium hover:bg-slate-700 flex items-center gap-2">
              <Send size={18} />
              Ask
            </button>
          </div>
        </section>

        <aside className="space-y-4">
          <div className="bg-white rounded-3xl border border-slate-200 p-5 shadow-sm">
            <div className="h-10 w-10 rounded-2xl bg-slate-100 flex items-center justify-center mb-4">
              <GraduationCap size={20} />
            </div>
            <h4 className="font-bold mb-1">Study Planner</h4>
            <p className="text-sm text-slate-500">
              Generate weekly study plans from your subjects.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 p-5 shadow-sm">
            <div className="h-10 w-10 rounded-2xl bg-slate-100 flex items-center justify-center mb-4">
              <Brain size={20} />
            </div>
            <h4 className="font-bold mb-1">Placement Coach</h4>
            <p className="text-sm text-slate-500">
              Analyze coding and internship readiness.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 p-5 shadow-sm">
            <div className="h-10 w-10 rounded-2xl bg-slate-100 flex items-center justify-center mb-4">
              <FileText size={20} />
            </div>
            <h4 className="font-bold mb-1">Resume Helper</h4>
            <p className="text-sm text-slate-500">
              Improve project descriptions and resume bullets.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default AIAssistant;
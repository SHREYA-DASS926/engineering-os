import { Sparkles } from "lucide-react";

function DashboardHeader() {
  return (
    <section className="mb-8 rounded-3xl bg-slate-900 text-white p-8 shadow-sm">
      <div className="flex items-start justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm text-slate-200 mb-4">
            <Sparkles size={16} />
            Engineering productivity system
          </div>

          <h2 className="text-4xl font-bold tracking-tight mb-3">
            Welcome back, Shrey.
          </h2>

          <p className="text-slate-300 max-w-2xl">
            Track your academics, coding practice, internship applications, and expenses from one student-focused dashboard.
          </p>
        </div>

        <div className="hidden lg:block rounded-2xl bg-white/10 p-5 min-w-56">
          <p className="text-sm text-slate-300 mb-2">Current Focus</p>
          <p className="text-2xl font-bold">Build consistency</p>
          <p className="text-sm text-slate-300 mt-2">
            Small progress daily beats random motivation.
          </p>
        </div>
      </div>
    </section>
  );
}

export default DashboardHeader;
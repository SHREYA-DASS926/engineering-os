import { Target } from "lucide-react";

function PlacementHeader() {
  return (
    <section className="rounded-3xl bg-slate-900 text-white p-8 shadow-sm">
      <div className="flex items-start gap-5">
        <div className="h-14 w-14 rounded-2xl bg-white/10 flex items-center justify-center">
          <Target size={28} />
        </div>

        <div>
          <p className="text-sm text-slate-300 mb-2">
            Placement Intelligence Engine
          </p>

          <h2 className="text-4xl font-bold tracking-tight mb-3">
            Placement Readiness
          </h2>

          <p className="text-slate-300 max-w-2xl">
            A profile score calculated from your DSA progress, projects,
            internships, academics, resume readiness, and GitHub activity.
          </p>
        </div>
      </div>
    </section>
  );
}

export default PlacementHeader;
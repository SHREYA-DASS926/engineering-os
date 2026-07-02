import type { PlacementCategoryScore } from "../types/placement";

type ScoreBreakdownProps = {
  categories: PlacementCategoryScore[];
};

function ScoreBreakdown({ categories }: ScoreBreakdownProps) {
  return (
    <section className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
      <h3 className="text-xl font-bold mb-1">Score Breakdown</h3>
      <p className="text-sm text-slate-500 mb-6">
        How your placement readiness score is calculated.
      </p>

      <div className="space-y-5">
        {categories.map((category) => {
          const percentage = Math.round(
            (category.score / category.maxScore) * 100
          );

          return (
            <div key={category.label}>
              <div className="flex justify-between mb-2">
                <div>
                  <p className="font-semibold">{category.label}</p>
                  <p className="text-sm text-slate-500">
                    {category.description}
                  </p>
                </div>

                <p className="font-bold">
                  {category.score}/{category.maxScore}
                </p>
              </div>

              <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-slate-900 rounded-full"
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ScoreBreakdown;
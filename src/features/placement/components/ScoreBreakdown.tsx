import Card from "../../../components/ui/Card";
import ProgressBar from "../../../components/ui/ProgressBar";
import type { PlacementCategoryScore } from "../types/placement";

type ScoreBreakdownProps = {
  categories: PlacementCategoryScore[];
};

function ScoreBreakdown({ categories }: ScoreBreakdownProps) {
  return (
    <Card>
      <h3 className="text-xl font-bold mb-1">Score Breakdown</h3>
      <p className="text-sm text-slate-500 mb-6">
        How your placement readiness score is calculated.
      </p>

      <div className="space-y-5">
        {categories.map((category) => (
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

            <ProgressBar
              value={category.score}
              max={category.maxScore}
            />
          </div>
        ))}
      </div>
    </Card>
  );
}

export default ScoreBreakdown;
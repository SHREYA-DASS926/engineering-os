import Card from "../../../components/ui/Card";
import ProgressBar from "../../../components/ui/ProgressBar";

type PlacementScoreProps = {
  score: number;
  maxScore: number;
  level: string;
};

function PlacementScore({
  score,
  maxScore,
  level,
}: PlacementScoreProps) {
  const percentage = Math.round((score / maxScore) * 100);

  return (
    <Card>
      <p className="text-sm font-medium text-slate-500 mb-2">
        Placement Readiness
      </p>

      <h2 className="text-5xl font-bold tracking-tight">
        {score}
        <span className="text-2xl text-slate-400">
          /{maxScore}
        </span>
      </h2>

      <div className="mt-5">
        <ProgressBar value={percentage} />
      </div>

      <div className="flex justify-between mt-3">
        <span className="text-sm text-slate-500">
          {percentage}% Complete
        </span>

        <span className="font-semibold">
          {level}
        </span>
      </div>
    </Card>
  );
}

export default PlacementScore;
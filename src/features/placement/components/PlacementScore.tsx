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
    <section className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
      <p className="text-sm font-medium text-slate-500 mb-2">
        Placement Readiness
      </p>

      <h2 className="text-5xl font-bold tracking-tight">
        {score}
        <span className="text-2xl text-slate-400">/{maxScore}</span>
      </h2>

      <div className="mt-5 h-3 bg-slate-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-slate-900 rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <div className="flex justify-between mt-3">
        <span className="text-sm text-slate-500">
          {percentage}% Complete
        </span>

        <span className="font-semibold">
          {level}
        </span>
      </div>
    </section>
  );
}

export default PlacementScore;
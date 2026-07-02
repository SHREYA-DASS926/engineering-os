type RecommendationCardProps = {
  recommendations: string[];
};

function RecommendationCard({
  recommendations,
}: RecommendationCardProps) {
  return (
    <section className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
      <h3 className="text-xl font-bold mb-1">
        Recommendations
      </h3>

      <p className="text-sm text-slate-500 mb-6">
        Highest-impact improvements for your placement profile.
      </p>

      <div className="space-y-3">
        {recommendations.map((item) => (
          <div
            key={item}
            className="rounded-2xl bg-slate-50 border border-slate-100 px-4 py-3"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

export default RecommendationCard;
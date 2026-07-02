import Card from "../../../components/ui/Card";

type RecommendationCardProps = {
  recommendations: string[];
};

function RecommendationCard({
  recommendations,
}: RecommendationCardProps) {
  return (
    <Card>
      <h3 className="text-xl font-bold mb-1">
        Recommendations
      </h3>

      <p className="text-sm text-slate-500 mb-6">
        Highest-impact improvements for your placement profile.
      </p>

      <div className="space-y-3">
        {recommendations.map((recommendation) => (
          <div
            key={recommendation}
            className="rounded-2xl bg-slate-50 border border-slate-100 px-4 py-3"
          >
            {recommendation}
          </div>
        ))}
      </div>
    </Card>
  );
}

export default RecommendationCard;
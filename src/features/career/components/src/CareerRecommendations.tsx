import Card from "@/components/ui/Card";


type CareerRecommendationsProps = {
  recommendations: string[];
};

function CareerRecommendations({
  recommendations,
}: CareerRecommendationsProps) {
  return (
    <Card>
      <h3 className="text-xl font-bold mb-4">Next Best Actions</h3>

      <div className="space-y-3">
        {recommendations.map((recommendation) => (
          <div
            key={recommendation}
            className="rounded-2xl bg-slate-50 border border-slate-100 p-4"
          >
            {recommendation}
          </div>
        ))}
      </div>
    </Card>
  );
}

export default CareerRecommendations;
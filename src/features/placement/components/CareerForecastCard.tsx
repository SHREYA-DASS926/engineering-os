import { TrendingUp } from "lucide-react";
import Card from "../../../components/ui/Card";
import type { CareerForecast } from "../../../core/career/forecastEngine";

type CareerForecastCardProps = {
  forecast: CareerForecast;
};

function CareerForecastCard({ forecast }: CareerForecastCardProps) {
  return (
    <Card>
      <div className="flex items-start gap-4">
        <div className="h-11 w-11 rounded-2xl bg-slate-100 flex items-center justify-center">
          <TrendingUp size={22} />
        </div>

        <div>
          <h3 className="text-xl font-bold mb-1">Career Forecast</h3>
          <p className="text-sm text-slate-500 mb-5">
            Projected improvement based on your weakest area.
          </p>

          <div className="flex items-end gap-3 mb-4">
            <span className="text-4xl font-bold">
              {forecast.currentScore}
            </span>

            <span className="text-slate-400 mb-1">→</span>

            <span className="text-4xl font-bold">
              {forecast.projectedScore}
            </span>

            <span className="text-sm text-green-700 font-semibold mb-2">
              +{forecast.gain}
            </span>
          </div>

          <p className="text-sm text-slate-600">
            In {forecast.timeframe}: {forecast.explanation}
          </p>
        </div>
      </div>
    </Card>
  );
}

export default CareerForecastCard;
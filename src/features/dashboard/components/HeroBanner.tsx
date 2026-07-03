import { ArrowUpRight, Target } from "lucide-react";
import Card from "../../../components/ui/Card";
import ProgressBar from "../../../components/ui/ProgressBar";

type HeroBannerProps = {
  score: number;
  level: string;
};

function HeroBanner({
  score,
  level,
}: HeroBannerProps) {
  return (
    <Card variant="dark" className="p-8">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div>
          <p className="text-slate-300 mb-2">
            👋 Welcome back
          </p>

          <h1 className="text-4xl font-bold mb-4">
            Engineering Command Center
          </h1>

          <p className="text-slate-300 max-w-xl">
            Everything you need to stay on track for placements,
            projects and academics.
          </p>
        </div>

        <div className="lg:w-80">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
              <Target size={18} />

              <span className="font-semibold">
                Placement Readiness
              </span>
            </div>

            <ArrowUpRight size={18} />
          </div>

          <h2 className="text-5xl font-bold">
            {score}
            <span className="text-2xl text-slate-400">
              /100
            </span>
          </h2>

          <div className="mt-5">
            <ProgressBar value={score} />
          </div>

          <p className="mt-3 text-slate-300">
            Current Level:{" "}
            <strong className="text-white">
              {level}
            </strong>
          </p>
        </div>
      </div>
    </Card>
  );
}

export default HeroBanner;
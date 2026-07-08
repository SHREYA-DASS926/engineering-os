import { CheckCircle2, CircleDot, Code2 } from "lucide-react";

import Card from "../../../components/ui/Card";

type CodingStatsProps = {
  totalProblems: number;
  solvedProblems: number;
  unsolvedProblems: number;
};

const stats = [
  {
    label: "Total Problems",
    key: "total",
    icon: Code2,
    accent: "text-blue-500 bg-blue-500/10 border-blue-500/20",
  },
  {
    label: "Solved",
    key: "solved",
    icon: CheckCircle2,
    accent: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
  },
  {
    label: "Unsolved",
    key: "unsolved",
    icon: CircleDot,
    accent: "text-orange-500 bg-orange-500/10 border-orange-500/20",
  },
] as const;

function CodingStats({
  totalProblems,
  solvedProblems,
  unsolvedProblems,
}: CodingStatsProps) {
  const values = {
    total: totalProblems,
    solved: solvedProblems,
    unsolved: unsolvedProblems,
  };

  const solvedPercentage =
    totalProblems === 0 ? 0 : Math.round((solvedProblems / totalProblems) * 100);

  return (
    <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <Card
            key={stat.key}
            className="group overflow-hidden bg-linear-to-b from-card to-card/90 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-muted-foreground">
                  {stat.label}
                </p>

                <h3 className="mt-4 text-5xl font-black tracking-tight text-foreground">
                  {values[stat.key]}
                </h3>
              </div>

              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl border ${stat.accent}`}
              >
                <Icon size={23} />
              </div>
            </div>

            {stat.key === "solved" && (
              <div className="mt-6">
                <div className="mb-2 flex justify-between text-xs font-medium text-muted-foreground">
                  <span>Completion</span>
                  <span>{solvedPercentage}%</span>
                </div>

                <div className="h-3 overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-linear-to-r from-blue-500 via-cyan-400 to-emerald-400 transition-all duration-500"
                    style={{ width: `${solvedPercentage}%` }}
                  />
                </div>
              </div>
            )}
          </Card>
        );
      })}
    </div>
  );
}

export default CodingStats;
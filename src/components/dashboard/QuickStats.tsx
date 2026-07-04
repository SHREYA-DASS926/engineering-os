import type { LucideIcon } from "lucide-react";

import { Card } from "../ui";

type StatItem = {
  title: string;
  value: string;
  subtitle: string;
  icon: LucideIcon;
};

type QuickStatsProps = {
  stats: StatItem[];
};

function QuickStats({ stats }: QuickStatsProps) {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <Card key={stat.title} className="p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  {stat.title}
                </p>

                <h3 className="mt-3 text-3xl font-bold text-slate-950">
                  {stat.value}
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  {stat.subtitle}
                </p>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
                <Icon size={20} />
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}

export default QuickStats;
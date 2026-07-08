import { Briefcase, CalendarCheck2, Trophy } from "lucide-react";

import Card from "../../../components/ui/Card";

type InternshipStatsProps = {
  totalApplications: number;
  interviews: number;
  offers: number;
};

function InternshipStats({
  totalApplications,
  interviews,
  offers,
}: InternshipStatsProps) {
  const stats = [
    {
      label: "Applications",
      value: totalApplications,
      icon: Briefcase,
      accent: "bg-blue-500/10 text-blue-500",
    },
    {
      label: "Interviews",
      value: interviews,
      icon: CalendarCheck2,
      accent: "bg-purple-500/10 text-purple-500",
    },
    {
      label: "Offers",
      value: offers,
      icon: Trophy,
      accent: "bg-emerald-500/10 text-emerald-500",
    },
  ];

  return (
    <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <Card key={stat.label}>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-semibold text-muted-foreground">
                  {stat.label}
                </p>
                <h3 className="mt-4 text-5xl font-black text-foreground">
                  {stat.value}
                </h3>
              </div>

              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${stat.accent}`}
              >
                <Icon size={24} />
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}

export default InternshipStats;
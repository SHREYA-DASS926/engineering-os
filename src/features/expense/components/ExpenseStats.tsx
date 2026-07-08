import { CreditCard, Utensils, Bus } from "lucide-react";

import Card from "../../../components/ui/Card";

type ExpenseStatsProps = {
  totalSpent: number;
  foodSpent: number;
  travelSpent: number;
};

function ExpenseStats({
  totalSpent,
  foodSpent,
  travelSpent,
}: ExpenseStatsProps) {
  const stats = [
    {
      label: "Total Spent",
      value: `₹${totalSpent}`,
      icon: CreditCard,
      accent: "bg-blue-500/10 text-blue-500",
    },
    {
      label: "Food",
      value: `₹${foodSpent}`,
      icon: Utensils,
      accent: "bg-orange-500/10 text-orange-500",
    },
    {
      label: "Travel",
      value: `₹${travelSpent}`,
      icon: Bus,
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

export default ExpenseStats;
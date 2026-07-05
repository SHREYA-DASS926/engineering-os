import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

import Card from "../Card/Card";
import { animations } from "../../../styles/animations";

type StatCardProps = {
  title: string;
  value: string | number;
  subtitle: string;
  icon: LucideIcon;
  color?: string;
};

function StatCard({
  title,
  value,
  subtitle,
  icon: Icon,
  color = "bg-blue-100 text-blue-600",
}: StatCardProps) {
  return (
    <Card className="overflow-hidden">
      <motion.div
        {...animations.fadeUp}
        className="flex items-start justify-between"
      >
        <div>
          <p className="text-sm font-medium text-slate-500">{title}</p>

          <h2 className="mt-2 text-4xl font-bold text-slate-950">
            {value}
          </h2>

          <p className="mt-3 text-sm text-slate-500">{subtitle}</p>
        </div>

        <div
          className={`flex h-12 w-12 items-center justify-center rounded-2xl ${color}`}
        >
          <Icon size={22} />
        </div>
      </motion.div>
    </Card>
  );
}

export default StatCard;
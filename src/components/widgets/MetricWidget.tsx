import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import Widget from "./Widget";

type MetricWidgetProps = {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: LucideIcon;
  trend?: string;
};

function MetricWidget({
  title,
  value,
  subtitle,
  icon: Icon,
  trend,
}: MetricWidgetProps) {
  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
      <Widget>
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-slate-500">{title}</p>

            <div className="mt-3 text-4xl font-bold tracking-tight">
              {value}
            </div>

            {subtitle && (
              <p className="mt-2 text-sm text-slate-500">{subtitle}</p>
            )}
          </div>

          {Icon && (
            <div className="h-12 w-12 rounded-2xl bg-slate-100 flex items-center justify-center">
              <Icon size={22} />
            </div>
          )}
        </div>

        {trend && (
          <div className="mt-5 inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
            <ArrowUpRight size={15} />
            {trend}
          </div>
        )}
      </Widget>
    </motion.div>
  );
}

export default MetricWidget;
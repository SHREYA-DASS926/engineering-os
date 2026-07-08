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
    <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.2 }}>
      <Widget className="group relative overflow-hidden border-border bg-linear-to-b from-card to-card/90 transition-all duration-300 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/10">
        <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl opacity-0 transition group-hover:opacity-100" />

        <div className="relative flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-muted-foreground">
              {title}
            </p>

            <div className="mt-4 text-5xl font-black tracking-tight text-foreground">
              {value}
            </div>

            {subtitle && (
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {subtitle}
              </p>
            )}
          </div>

          {Icon && (
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-muted text-foreground shadow-sm transition group-hover:border-blue-500/30 group-hover:bg-blue-500/10 group-hover:text-blue-500">
              <Icon size={23} />
            </div>
          )}
        </div>

        {trend && (
          <div className="relative mt-6 inline-flex items-center gap-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
            <ArrowUpRight size={15} />
            {trend}
          </div>
        )}
      </Widget>
    </motion.div>
  );
}

export default MetricWidget;
import type { LucideIcon } from "lucide-react";

import Widget from "./Widget";
import WidgetHeader from "./WidgetHeader";

type MetricWidgetProps = {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: LucideIcon;
};

function MetricWidget({
  title,
  value,
  subtitle,
  icon,
}: MetricWidgetProps) {
  return (
    <Widget>
      <WidgetHeader
        title={title}
        subtitle={subtitle}
        icon={icon}
      />

      <div className="text-4xl font-bold tracking-tight">
        {value}
      </div>
    </Widget>
  );
}

export default MetricWidget;
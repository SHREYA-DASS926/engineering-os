import type { LucideIcon } from "lucide-react";
import Widget from "./Widget";
import WidgetHeader from "./WidgetHeader";

type InsightWidgetProps = {
  title: string;
  subtitle?: string;
  insight: string;
  icon?: LucideIcon;
  tags?: string[];
};

function InsightWidget({
  title,
  subtitle,
  insight,
  icon,
  tags = [],
}: InsightWidgetProps) {
  return (
    <Widget>
      <WidgetHeader title={title} subtitle={subtitle} icon={icon} />

      <p className="text-slate-700 leading-relaxed">{insight}</p>

      {tags.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </Widget>
  );
}

export default InsightWidget;
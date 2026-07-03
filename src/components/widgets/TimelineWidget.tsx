import type { LucideIcon } from "lucide-react";

import Widget from "./Widget";
import WidgetHeader from "./WidgetHeader";

type TimelineItem = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
};

type TimelineWidgetProps = {
  title: string;
  subtitle?: string;
  items: TimelineItem[];
};

function TimelineWidget({ title, subtitle, items }: TimelineWidgetProps) {
  return (
    <Widget>
      <WidgetHeader title={title} subtitle={subtitle} />

      <div className="space-y-4">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.title} className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-2xl bg-slate-100 flex items-center justify-center">
                <Icon size={18} />
              </div>

              <div>
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm text-slate-500">{item.subtitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Widget>
  );
}

export default TimelineWidget;
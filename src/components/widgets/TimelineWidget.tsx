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
        {items.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-200 p-6 text-center">
            <p className="text-slate-500">No activity yet.</p>

            <p className="mt-2 text-sm text-slate-400">
              Solve a coding problem or study a subject to start building your
              timeline.
            </p>
          </div>
        ) : (
          items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={`${item.title}-${item.subtitle}`}
                className="flex items-center gap-4"
              >
                <div className="h-10 w-10 rounded-2xl bg-slate-100 flex items-center justify-center">
                  <Icon size={18} />
                </div>

                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-slate-500">{item.subtitle}</p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </Widget>
  );
}

export default TimelineWidget;
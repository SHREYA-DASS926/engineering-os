import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import Widget from "./Widget";
import WidgetHeader from "./WidgetHeader";

type ChartItem = {
  name: string;
  value: number;
};

type AnalyticsChartWidgetProps = {
  title: string;
  subtitle?: string;
  data: ChartItem[];
};

function AnalyticsChartWidget({
  title,
  subtitle,
  data,
}: AnalyticsChartWidgetProps) {
  return (
    <Widget>
      <WidgetHeader title={title} subtitle={subtitle} />

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="currentColor"
              className="text-border"
            />

            <XAxis
              dataKey="name"
              tick={{ fill: "currentColor" }}
              axisLine={{ stroke: "currentColor" }}
              tickLine={{ stroke: "currentColor" }}
              className="text-muted-foreground"
            />

            <YAxis
              tick={{ fill: "currentColor" }}
              axisLine={{ stroke: "currentColor" }}
              tickLine={{ stroke: "currentColor" }}
              className="text-muted-foreground"
            />

            <Tooltip
              contentStyle={{
                background: "var(--card)",
                color: "var(--card-foreground)",
                border: "1px solid var(--border)",
                borderRadius: "16px",
              }}
              labelStyle={{
                color: "var(--foreground)",
              }}
            />

            <Bar
              dataKey="value"
              fill="rgb(37 99 235)"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Widget>
  );
}

export default AnalyticsChartWidget;
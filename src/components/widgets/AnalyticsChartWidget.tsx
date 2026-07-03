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
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Widget>
  );
}

export default AnalyticsChartWidget;
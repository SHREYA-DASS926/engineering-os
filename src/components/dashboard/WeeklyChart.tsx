import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { Card } from "../ui";

const data = [
  { day: "Mon", score: 42 },
  { day: "Tue", score: 48 },
  { day: "Wed", score: 52 },
  { day: "Thu", score: 61 },
  { day: "Fri", score: 66 },
  { day: "Sat", score: 74 },
  { day: "Sun", score: 82 },
];

function WeeklyChart() {
  return (
    <Card className="h-80">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-slate-950">Weekly Progress</h3>
        <p className="text-sm text-slate-500">
          Your momentum across core areas this week.
        </p>
      </div>

      <ResponsiveContainer width="100%" height="75%">
        <LineChart data={data}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="score"
            stroke="#2563EB"
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}

export default WeeklyChart;
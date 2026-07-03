import Card from "../../../components/ui/Card";
import ProgressBar from "../../../components/ui/ProgressBar";

type WeeklyProgressProps = {
  study: number;
  coding: number;
  placement: number;
  internships: number;
};

function WeeklyProgress({
  study,
  coding,
  placement,
  internships,
}: WeeklyProgressProps) {
  const items = [
    {
      title: "Study",
      value: study,
    },
    {
      title: "Coding",
      value: coding,
    },
    {
      title: "Placement",
      value: placement,
    },
    {
      title: "Internships",
      value: internships,
    },
  ];

  return (
    <Card>
      <h3 className="text-xl font-bold mb-1">
        Weekly Progress
      </h3>

      <p className="text-sm text-slate-500 mb-6">
        Overview of your progress this week.
      </p>

      <div className="space-y-5">
        {items.map((item) => (
          <div key={item.title}>
            <div className="flex justify-between mb-2">
              <span className="font-medium">
                {item.title}
              </span>

              <span>{item.value}%</span>
            </div>

            <ProgressBar value={item.value} />
          </div>
        ))}
      </div>
    </Card>
  );
}

export default WeeklyProgress;
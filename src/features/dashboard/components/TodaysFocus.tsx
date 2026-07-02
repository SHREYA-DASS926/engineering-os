import { CheckCircle2 } from "lucide-react";

const focusItems = [
  "Solve 2 DSA problems",
  "Review attendance status",
  "Apply to 1 internship",
  "Keep expenses under control",
];

function TodaysFocus() {
  return (
    <section className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="text-xl font-bold">Today's Focus</h3>
          <p className="text-sm text-slate-500">
            Small tasks that move your semester forward.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {focusItems.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3 rounded-2xl bg-slate-50 border border-slate-100 p-4"
          >
            <CheckCircle2 size={20} className="text-slate-700" />
            <span className="font-medium text-slate-700">{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TodaysFocus;
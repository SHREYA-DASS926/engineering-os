import {
  BookOpen,
  Briefcase,
  Code2,
  CreditCard,
} from "lucide-react";

const activities = [
  {
    icon: BookOpen,
    title: "Added Operating Systems",
    subtitle: "Study Tracker",
  },
  {
    icon: Code2,
    title: "Solved Two Sum",
    subtitle: "Coding Tracker",
  },
  {
    icon: Briefcase,
    title: "Applied to Google",
    subtitle: "Career Tracker",
  },
  {
    icon: CreditCard,
    title: "Added Food Expense",
    subtitle: "Expense Tracker",
  },
];

function RecentActivity() {
  return (
    <section className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
      <h3 className="text-xl font-bold mb-1">Recent Activity</h3>

      <p className="text-sm text-slate-500 mb-6">
        Your latest actions across Engineering OS.
      </p>

      <div className="space-y-4">
        {activities.map((activity) => {
          const Icon = activity.icon;

          return (
            <div
              key={activity.title}
              className="flex items-center gap-4"
            >
              <div className="h-11 w-11 rounded-2xl bg-slate-100 flex items-center justify-center">
                <Icon size={20} />
              </div>

              <div>
                <p className="font-semibold">
                  {activity.title}
                </p>

                <p className="text-sm text-slate-500">
                  {activity.subtitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default RecentActivity;
import { Briefcase, Code2, CreditCard, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import Card from "../../../components/ui/Card";

const actions = [
  {
    label: "Add Subject",
    description: "Track attendance",
    path: "/study",
    icon: GraduationCap,
  },
  {
    label: "Add Coding",
    description: "Log DSA progress",
    path: "/coding",
    icon: Code2,
  },
  {
    label: "Add Internship",
    description: "Track applications",
    path: "/internships",
    icon: Briefcase,
  },
  {
    label: "Add Expense",
    description: "Record spending",
    path: "/expenses",
    icon: CreditCard,
  },
];

function QuickActions() {
  return (
    <Card>
      <h3 className="text-xl font-bold mb-1">Quick Actions</h3>
      <p className="text-sm text-slate-500 mb-6">
        Jump directly to the actions you use most.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.label}
              to={action.path}
              className="rounded-2xl border border-slate-200 p-4 hover:bg-slate-50 transition group"
            >
              <div className="h-10 w-10 rounded-2xl bg-slate-100 flex items-center justify-center mb-4 group-hover:bg-slate-900 group-hover:text-white transition">
                <Icon size={20} />
              </div>

              <p className="font-semibold">{action.label}</p>
              <p className="text-sm text-slate-500 mt-1">
                {action.description}
              </p>
            </Link>
          );
        })}
      </div>
    </Card>
  );
}

export default QuickActions;
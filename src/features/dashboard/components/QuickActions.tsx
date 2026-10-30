
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  CreditCard,
  GraduationCap,
  Plus,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Card from "../../../components/ui/Card";

const actions = [
  {
    label: "Add Subject",
    description: "Manage your academics",
    path: "/study#add-subject",
    icon: GraduationCap,
    iconColor: "text-blue-500",
    iconBackground: "bg-blue-500/10",
  },
  {
    label: "Log Coding",
    description: "Update your DSA progress",
    path: "/coding#add-coding",
    icon: Code2,
    iconColor: "text-violet-500",
    iconBackground: "bg-violet-500/10",
  },
  {
    label: "Add Internship",
    description: "Track a new application",
    path: "/internships#add-internship",
    icon: BriefcaseBusiness,
    iconColor: "text-emerald-500",
    iconBackground: "bg-emerald-500/10",
  },
  {
    label: "Add Expense",
    description: "Record a transaction",
    path: "/expenses#add-expense",
    icon: CreditCard,
    iconColor: "text-orange-500",
    iconBackground: "bg-orange-500/10",
  },
];

function QuickActions() {
  return (
    <Card>
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold text-foreground">
            Quick Actions
          </h3>

          <p className="mt-1 text-sm text-muted-foreground">
            Your everyday workflows, one click away.
          </p>
        </div>

        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-muted text-muted-foreground">
          <Plus size={18} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <motion.div
              key={action.label}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.18 }}
            >
              <Link
                to={action.path}
                className="group flex h-full items-center gap-3 rounded-2xl border border-border bg-muted/30 p-4 transition-all duration-200 hover:border-primary/30 hover:bg-muted/60 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${action.iconBackground} ${action.iconColor}`}
                >
                  <Icon size={22} strokeWidth={1.8} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-foreground">
                    {action.label}
                  </p>

                  <p className="mt-1 text-xs text-muted-foreground">
                    {action.description}
                  </p>
                </div>

                <ArrowUpRight
                  size={17}
                  className="shrink-0 text-muted-foreground transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                />
              </Link>
            </motion.div>
          );
        })}
      </div>
    </Card>
  );
}

export default QuickActions;

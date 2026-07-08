import {
  ArrowRight,
  Briefcase,
  Code2,
  CreditCard,
  GraduationCap,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Card from "../../../components/ui/Card";

const actions = [
  {
    label: "Add Subject",
    description: "Track attendance",
    path: "/study",
    icon: GraduationCap,
    accent: "from-blue-500/15 to-cyan-500/10 text-blue-500",
  },
  {
    label: "Add Coding",
    description: "Log DSA progress",
    path: "/coding",
    icon: Code2,
    accent: "from-purple-500/15 to-blue-500/10 text-purple-500",
  },
  {
    label: "Add Internship",
    description: "Track applications",
    path: "/internships",
    icon: Briefcase,
    accent: "from-emerald-500/15 to-green-500/10 text-emerald-500",
  },
  {
    label: "Add Expense",
    description: "Record spending",
    path: "/expenses",
    icon: CreditCard,
    accent: "from-orange-500/15 to-red-500/10 text-orange-500",
  },
];

function QuickActions() {
  return (
    <Card>
      <div className="mb-6">
        <h3 className="text-xl font-bold text-foreground">Quick Actions</h3>

        <p className="mt-1 text-sm text-muted-foreground">
          Jump directly to the workflows that move your profile forward.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <motion.div
              key={action.label}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                to={action.path}
                className="group relative block overflow-hidden rounded-3xl border border-border bg-muted/40 p-5 transition-all duration-300 hover:border-blue-500/30 hover:bg-muted hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div
                  className={`mb-5 flex h-13 w-13 items-center justify-center rounded-2xl bg-linear-to-br ${action.accent}`}
                >
                  <Icon size={22} />
                </div>

                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-lg font-bold text-foreground">
                      {action.label}
                    </p>

                    <p className="mt-1 text-sm text-muted-foreground">
                      {action.description}
                    </p>
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition group-hover:border-blue-500/30 group-hover:text-blue-500">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </Card>
  );
}

export default QuickActions;
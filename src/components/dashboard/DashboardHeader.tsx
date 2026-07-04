import { Bell } from "lucide-react";
import { motion } from "framer-motion";

import { Card } from "../ui";

function DashboardHeader() {
  return (
    <Card hover={false} className="overflow-hidden bg-slate-950 text-white">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
      >
        <div>
          <p className="text-sm text-slate-400">Engineering OS</p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            Good evening, Shrey 👋
          </h1>

          <p className="mt-3 max-w-2xl text-slate-300">
            Your cloud workspace for coding, study, internships, expenses, and
            placement readiness.
          </p>
        </div>

        <button className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-white transition hover:bg-white/20">
          <Bell size={20} />
        </button>
      </motion.div>
    </Card>
  );
}

export default DashboardHeader;
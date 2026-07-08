import { useEffect, useState } from "react";
import { CheckCircle2, Circle, Target } from "lucide-react";
import { motion } from "framer-motion";

import Card from "../../../components/ui/Card";

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

const STORAGE_KEY = "dailyChecklist";

const initialTasks: Task[] = [
  { id: 1, title: "Solve 2 DSA problems", completed: false },
  { id: 2, title: "Review DBMS", completed: false },
  { id: 3, title: "Apply to 1 internship", completed: false },
  { id: 4, title: "Keep today's spending under ₹300", completed: false },
];

function DailyChecklist() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem(STORAGE_KEY);
    return savedTasks ? JSON.parse(savedTasks) : initialTasks;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  function toggleTask(id: number) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  const completedTasks = tasks.filter((task) => task.completed).length;
  const completionPercentage = Math.round(
    (completedTasks / tasks.length) * 100
  );

  return (
    <Card>
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-muted-foreground">
            <Target size={16} />
            Daily execution
          </div>

          <h3 className="text-xl font-bold text-foreground">
            Today&apos;s Checklist
          </h3>

          <p className="mt-1 text-sm text-muted-foreground">
            {completedTasks} of {tasks.length} completed
          </p>
        </div>

        <div className="rounded-full border border-border bg-muted px-4 py-2 text-sm font-bold text-foreground">
          {completionPercentage}%
        </div>
      </div>

      <div className="mb-6 h-3 overflow-hidden rounded-full bg-muted">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${completionPercentage}%` }}
          transition={{ duration: 0.45 }}
          className="h-full rounded-full bg-linear-to-r from-blue-500 via-cyan-400 to-emerald-400"
        />
      </div>

      <div className="space-y-3">
        {tasks.map((task) => (
          <label
            key={task.id}
            className="group flex cursor-pointer items-center gap-3 rounded-2xl border border-border bg-muted/40 p-4 transition-all hover:border-blue-500/30 hover:bg-muted"
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
              className="sr-only"
            />

            <div
              className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition ${
                task.completed
                  ? "border-emerald-500 bg-emerald-500 text-white"
                  : "border-border bg-card text-muted-foreground group-hover:border-blue-500"
              }`}
            >
              {task.completed ? (
                <CheckCircle2 size={16} />
              ) : (
                <Circle size={14} />
              )}
            </div>

            <span
              className={`text-sm font-medium transition ${
                task.completed
                  ? "text-muted-foreground line-through"
                  : "text-foreground"
              }`}
            >
              {task.title}
            </span>
          </label>
        ))}
      </div>
    </Card>
  );
}

export default DailyChecklist;
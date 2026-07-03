import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";
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
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  const completedTasks = tasks.filter((task) => task.completed).length;

  return (
    <Card>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-xl font-bold">Today's Checklist</h3>
          <p className="text-sm text-slate-500">
            {completedTasks} of {tasks.length} completed
          </p>
        </div>

        <CheckCircle2 className="text-slate-400" />
      </div>

      <div className="space-y-3">
        {tasks.map((task) => (
          <label
            key={task.id}
            className="flex items-center gap-3 p-3 rounded-2xl hover:bg-slate-50 cursor-pointer transition"
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
              className="h-5 w-5"
            />

            <span
              className={
                task.completed
                  ? "line-through text-slate-400"
                  : "text-slate-700"
              }
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
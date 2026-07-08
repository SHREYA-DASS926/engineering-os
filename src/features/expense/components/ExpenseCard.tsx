import { CalendarDays, Trash2 } from "lucide-react";

import { Button } from "../../../components/ui/Button";
import Card from "../../../components/ui/Card";

import type { Expense, ExpenseCategory } from "../../../types/expense";

type ExpenseCardProps = {
  expense: Expense;
  onDelete: (id: number) => void;
};

function getCategoryClass(category: ExpenseCategory) {
  if (category === "Food") return "bg-orange-500/10 text-orange-500";
  if (category === "Travel") return "bg-blue-500/10 text-blue-500";
  if (category === "Hostel") return "bg-purple-500/10 text-purple-500";
  if (category === "Books") return "bg-emerald-500/10 text-emerald-500";
  if (category === "Subscriptions") return "bg-yellow-500/10 text-yellow-500";

  return "bg-muted text-foreground";
}

function ExpenseCard({ expense, onDelete }: ExpenseCardProps) {
  return (
    <Card className="group bg-linear-to-b from-card to-card/90 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold text-foreground">
            {expense.title}
          </h3>

          <p className="mt-2 text-sm text-muted-foreground">
            Expense entry
          </p>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-bold ${getCategoryClass(
            expense.category
          )}`}
        >
          {expense.category}
        </span>
      </div>

      <div className="mb-5 rounded-2xl border border-border bg-muted/50 p-4">
        <p className="text-sm text-muted-foreground">Amount</p>

        <p className="mt-2 text-4xl font-black text-foreground">
          ₹{expense.amount}
        </p>
      </div>

      <div className="mb-5 flex items-center gap-2 rounded-2xl border border-border bg-muted/40 p-4 text-sm text-muted-foreground">
        <CalendarDays size={16} />
        {expense.date}
      </div>

      <Button
        variant="destructive"
        onClick={() => onDelete(expense.id)}
        className="w-full justify-center gap-2"
      >
        <Trash2 size={16} />
        Delete Expense
      </Button>
    </Card>
  );
}

export default ExpenseCard;
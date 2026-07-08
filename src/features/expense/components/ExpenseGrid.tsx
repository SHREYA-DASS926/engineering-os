import { CreditCard } from "lucide-react";

import EmptyState from "../../../components/ui/EmptyState";

import type { Expense } from "../../../types/expense";

import ExpenseCard from "./ExpenseCard";

type ExpenseGridProps = {
  expenses: Expense[];
  onDelete: (id: number) => void;
};

function ExpenseGrid({ expenses, onDelete }: ExpenseGridProps) {
  if (expenses.length === 0) {
    return (
      <EmptyState
        icon={CreditCard}
        title="No expenses yet"
        description="Add your first expense and start tracking your spending habits."
      />
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
      {expenses.map((expense) => (
        <ExpenseCard
          key={expense.id}
          expense={expense}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default ExpenseGrid;
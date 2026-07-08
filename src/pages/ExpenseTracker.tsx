import SectionHeader from "../components/ui/SectionHeader";

import ExpenseForm from "../features/expense/components/ExpenseForm";
import ExpenseGrid from "../features/expense/components/ExpenseGrid";
import ExpenseStats from "../features/expense/components/ExpenseStats";
import useExpenses from "../features/expense/hooks/useExpenses";

function ExpenseTracker() {
  const {
    expenses,
    addExpense,
    deleteExpense,
    totalSpent,
    foodSpent,
    travelSpent,
  } = useExpenses();

  return (
    <div>
      <SectionHeader
        title="Expense Tracker"
        description="Track hostel, food, travel, and personal expenses."
      />

      <ExpenseStats
        totalSpent={totalSpent}
        foodSpent={foodSpent}
        travelSpent={travelSpent}
      />

      <ExpenseForm onAddExpense={addExpense} />

      <ExpenseGrid
        expenses={expenses}
        onDelete={deleteExpense}
      />
    </div>
  );
}

export default ExpenseTracker;
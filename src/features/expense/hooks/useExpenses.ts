import { useEffect, useState } from "react";

import { activityService } from "../../../core/activity/activity.service";
import { expenseService } from "../../../services/expense.service";
import type { Expense } from "../../../types/expense";

function useExpenses() {
  const [expenses, setExpenses] = useState<Expense[]>(() => {
    return expenseService.getExpenses();
  });

  useEffect(() => {
    expenseService.saveExpenses(expenses);
  }, [expenses]);

  function addExpense(expense: Expense) {
    setExpenses([...expenses, expense]);
    activityService.logExpenseAdded(expense.amount);
  }

  function deleteExpense(id: number) {
    const expense = expenses.find((expense) => expense.id === id);

    if (expense) {
      activityService.logCareerMilestone(`Deleted expense: ${expense.title}`);
    }

    setExpenses(expenses.filter((expense) => expense.id !== id));
  }

  const totalSpent = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  const foodSpent = expenses
    .filter((expense) => expense.category === "Food")
    .reduce((sum, expense) => sum + expense.amount, 0);

  const travelSpent = expenses
    .filter((expense) => expense.category === "Travel")
    .reduce((sum, expense) => sum + expense.amount, 0);

  return {
    expenses,
    addExpense,
    deleteExpense,
    totalSpent,
    foodSpent,
    travelSpent,
  };
}

export default useExpenses;
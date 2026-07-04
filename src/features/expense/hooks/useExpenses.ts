import { useEffect, useState } from "react";

import { activityService } from "../../../core/activity/activity.service";
import { useAuth } from "../../auth/context/AuthContext";
import { expenseRepository } from "../../../repositories/expense.repository";
import type { Expense } from "../../../types/expense";

function useExpenses() {
  const { user } = useAuth();

  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadExpenses() {
      if (!user) {
        setLoading(false);
        return;
      }

      const savedExpenses = await expenseRepository.getAll(user.id);
      setExpenses(savedExpenses);
      setLoading(false);
    }

    loadExpenses();
  }, [user]);

  async function addExpense(expense: Expense) {
    if (!user) return;

    const savedExpense = await expenseRepository.create(user.id, {
      title: expense.title,
      category: expense.category,
      amount: expense.amount,
      date: expense.date,
    });

    setExpenses([savedExpense, ...expenses]);
    activityService.logExpenseAdded(savedExpense.amount);
  }

  async function deleteExpense(id: number) {
    const expense = expenses.find((expense) => expense.id === id);

    await expenseRepository.delete(id);

    setExpenses(expenses.filter((expense) => expense.id !== id));

    if (expense) {
      activityService.logCareerMilestone(`Deleted expense: ${expense.title}`);
    }
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
    loading,
    addExpense,
    deleteExpense,
    totalSpent,
    foodSpent,
    travelSpent,
  };
}

export default useExpenses;
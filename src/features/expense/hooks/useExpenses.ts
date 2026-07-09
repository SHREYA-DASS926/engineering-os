import { useEffect, useMemo, useState } from "react";

import { expenseService } from "../../../services/expense.service";
import { useAuth } from "../../auth/context/useAuth";

import type { Expense } from "../../../types/expense";

function useExpenses() {
  const { user } = useAuth();

  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setExpenses([]);
      setLoading(false);
      return;
    }

    async function loadExpenses() {
      setLoading(true);

      try {
        const data = await expenseService.getExpenses(user!.id);
        setExpenses(data);
      } finally {
        setLoading(false);
      }
    }

    loadExpenses();
  }, [user]);

  async function addExpense(expense: Expense) {
    if (!user) return;

    await expenseService.addExpense({
      ...expense,
      user_id: user.id,
    });

    const updated = await expenseService.getExpenses(user.id);
    setExpenses(updated);
  }

  async function deleteExpense(id: number) {
    if (!user) return;

    await expenseService.deleteExpense(id);

    setExpenses((current) =>
      current.filter((expense) => expense.id !== id)
    );
  }

  const totalSpent = useMemo(
    () => expenses.reduce((sum, expense) => sum + expense.amount, 0),
    [expenses]
  );

  const foodSpent = useMemo(
    () =>
      expenses
        .filter((expense) => expense.category === "Food")
        .reduce((sum, expense) => sum + expense.amount, 0),
    [expenses]
  );

  const travelSpent = useMemo(
    () =>
      expenses
        .filter((expense) => expense.category === "Travel")
        .reduce((sum, expense) => sum + expense.amount, 0),
    [expenses]
  );

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
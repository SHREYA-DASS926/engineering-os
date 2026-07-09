import { useMemo } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { expenseService } from "../../../services/expense.service";
import { useAuth } from "../../auth/context/useAuth";

import type { Expense } from "../../../types/expense";

function useExpenses() {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  const expensesQuery = useQuery({
    queryKey: ["expenses", user?.id],
    queryFn: () => expenseService.getExpenses(user!.id),
    enabled: !!user,
  });

  const expenses = expensesQuery.data ?? [];

  const addExpenseMutation = useMutation({
    mutationFn: (expense: Expense) => {
      if (!user) throw new Error("User not authenticated");

      return expenseService.addExpense({
        ...expense,
        user_id: user.id,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["expenses", user?.id],
      });
    },
  });

  const deleteExpenseMutation = useMutation({
    mutationFn: (id: number) => expenseService.deleteExpense(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["expenses", user?.id],
      });
    },
  });

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
    loading: expensesQuery.isLoading,
    addExpense: addExpenseMutation.mutateAsync,
    deleteExpense: deleteExpenseMutation.mutateAsync,
    totalSpent,
    foodSpent,
    travelSpent,
  };
}

export default useExpenses;
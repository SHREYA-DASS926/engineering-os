import { activityService } from "../../../core/activity/activity.service";
import useCrud from "../../../hooks/useCrud";
import { expenseRepository } from "../../../repositories/expense.repository";
import type { Expense } from "../../../types/expense";
import { useAuth } from "../../auth/context/AuthContext";

type CreateExpenseInput = Omit<Expense, "id">;

function useExpenses() {
  const { user } = useAuth();

  const {
    items: expenses,
    loading,
    createItem,
    deleteItem,
  } = useCrud<Expense, CreateExpenseInput>({
    userId: user?.id,
    repository: expenseRepository,
  });

  async function addExpense(expense: Expense) {
    const savedExpense = await createItem({
      title: expense.title,
      category: expense.category,
      amount: expense.amount,
      date: expense.date,
    });

    if (savedExpense) {
      activityService.logExpenseAdded(savedExpense.amount);
    }
  }

  async function deleteExpense(id: number) {
    const expense = expenses.find((expense) => expense.id === id);

    await deleteItem(id);

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
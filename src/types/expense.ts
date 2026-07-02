export type ExpenseCategory =
  | "Food"
  | "Travel"
  | "Hostel"
  | "Books"
  | "Subscriptions"
  | "Other";

export type Expense = {
  id: number;
  title: string;
  category: ExpenseCategory;
  amount: number;
  date: string;
};
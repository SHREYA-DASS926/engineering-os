import { useState } from "react";

import type { Expense, ExpenseCategory } from "../types/expense";
import useExpenses from "../features/expense/hooks/useExpenses";

function ExpenseTracker() {
  const {
    expenses,
    addExpense: saveExpense,
    deleteExpense,
    totalSpent,
    foodSpent,
    travelSpent,
  } = useExpenses();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState<ExpenseCategory>("Food");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  function addExpense(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!title || !amount || !date) {
      return;
    }

    const newExpense: Expense = {
      id: Date.now(),
      title,
      category,
      amount: Number(amount),
      date,
    };

    saveExpense(newExpense);

    setTitle("");
    setCategory("Food");
    setAmount("");
    setDate("");
  }

  function getCategoryStyle(category: ExpenseCategory) {
    if (category === "Food") {
      return "bg-orange-100 text-orange-700";
    }

    if (category === "Travel") {
      return "bg-blue-100 text-blue-700";
    }

    if (category === "Hostel") {
      return "bg-purple-100 text-purple-700";
    }

    if (category === "Books") {
      return "bg-green-100 text-green-700";
    }

    if (category === "Subscriptions") {
      return "bg-yellow-100 text-yellow-700";
    }

    return "bg-slate-100 text-slate-700";
  }

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Expense Tracker</h2>
        <p className="text-slate-500">
          Track hostel, food, travel, and personal expenses.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
          <p className="text-sm font-medium text-slate-500">Total Spent</p>
          <h3 className="text-3xl font-bold mt-3">₹{totalSpent}</h3>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
          <p className="text-sm font-medium text-slate-500">Food</p>
          <h3 className="text-3xl font-bold mt-3">₹{foodSpent}</h3>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
          <p className="text-sm font-medium text-slate-500">Travel</p>
          <h3 className="text-3xl font-bold mt-3">₹{travelSpent}</h3>
        </div>
      </div>

      <form
        onSubmit={addExpense}
        className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm mb-8"
      >
        <h3 className="text-xl font-bold mb-4">Add Expense</h3>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <input
            type="text"
            placeholder="Expense title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className="border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900"
          />

          <select
            value={category}
            onChange={(event) =>
              setCategory(event.target.value as ExpenseCategory)
            }
            className="border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900"
          >
            <option>Food</option>
            <option>Travel</option>
            <option>Hostel</option>
            <option>Books</option>
            <option>Subscriptions</option>
            <option>Other</option>
          </select>

          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            className="border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900"
          />

          <input
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
            className="border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900"
          />

          <button
            type="submit"
            className="bg-slate-900 text-white rounded-xl px-4 py-3 font-medium hover:bg-slate-700"
          >
            Add
          </button>
        </div>
      </form>

      {expenses.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center text-slate-500">
          No expenses added yet.
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="grid grid-cols-5 gap-4 px-6 py-4 bg-slate-50 text-sm font-semibold text-slate-500">
            <span>Title</span>
            <span>Category</span>
            <span>Amount</span>
            <span>Date</span>
            <span>Action</span>
          </div>

          {expenses.map((expense) => (
            <div
              key={expense.id}
              className="grid grid-cols-5 gap-4 px-6 py-4 border-t border-slate-100 items-center"
            >
              <span className="font-medium">{expense.title}</span>

              <span>
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${getCategoryStyle(
                    expense.category
                  )}`}
                >
                  {expense.category}
                </span>
              </span>

              <span>₹{expense.amount}</span>

              <span className="text-slate-500">{expense.date}</span>

              <button
                onClick={() => deleteExpense(expense.id)}
                className="text-sm text-red-600 hover:text-red-800 font-medium text-left"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ExpenseTracker;
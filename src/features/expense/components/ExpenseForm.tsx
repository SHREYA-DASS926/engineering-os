import { useState } from "react";
import { PlusCircle } from "lucide-react";

import { Button } from "../../../components/ui/Button";
import Card from "../../../components/ui/Card";
import Input from "../../../components/ui/Input";
import Select from "../../../components/ui/Select";

import type { Expense, ExpenseCategory } from "../../../types/expense";

type ExpenseFormProps = {
  onAddExpense: (expense: Expense) => void;
};

function ExpenseForm({ onAddExpense }: ExpenseFormProps) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState<ExpenseCategory>("Food");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!title || !amount || !date) return;

    onAddExpense({
      id: Date.now(),
      title,
      category,
      amount: Number(amount),
      date,
    });

    setTitle("");
    setCategory("Food");
    setAmount("");
    setDate("");
  }

  return (
    <Card className="mb-8">
      <form onSubmit={handleSubmit}>
        <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Expense Log
        </p>

        <h3 className="mt-2 text-3xl font-bold text-foreground">
          Add a New Expense
        </h3>

        <p className="mt-2 text-sm text-muted-foreground">
          Record your spending across food, travel, hostel, books, and subscriptions.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-5">
          <Input placeholder="Expense title" value={title} onChange={setTitle} />

          <Select
            value={category}
            onChange={(value) => setCategory(value as ExpenseCategory)}
            options={["Food", "Travel", "Hostel", "Books", "Subscriptions", "Other"]}
          />

          <Input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={setAmount}
          />

          <Input type="date" value={date} onChange={setDate} />

          <Button type="submit" className="justify-center gap-2">
            <PlusCircle size={18} />
            Add
          </Button>
        </div>
      </form>
    </Card>
  );
}

export default ExpenseForm;
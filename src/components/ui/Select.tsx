import { cn } from "../../lib/cn";

type SelectProps = {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  className?: string;
};

function Select({
  value,
  onChange,
  options,
  className = "",
}: SelectProps) {
  return (
    <select
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className={cn(
        "rounded-xl border px-4 py-3 outline-none transition",
        "border-slate-300 bg-white text-slate-900",
        "focus:ring-2 focus:ring-blue-500",
        "dark:border-slate-700",
        "dark:bg-slate-800",
        "dark:text-white",
        className
      )}
    >
      {options.map((option) => (
        <option
          key={option}
          value={option}
          className="bg-white text-slate-900 dark:bg-slate-800 dark:text-white"
        >
          {option}
        </option>
      ))}
    </select>
  );
}

export default Select;
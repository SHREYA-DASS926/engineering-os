import { cn } from "../../lib/cn";

type InputProps = {
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  readOnly?: boolean;
  className?: string;
};

function Input({
  type = "text",
  placeholder,
  value,
  onChange,
  readOnly = false,
  className = "",
}: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      readOnly={readOnly}
      onChange={(event) => onChange(event.target.value)}
      className={cn(
        "rounded-xl border px-4 py-3 outline-none transition",
        "border-slate-300 bg-white text-slate-900",
        "placeholder:text-slate-400",
        "focus:ring-2 focus:ring-blue-500",
        "dark:border-slate-700",
        "dark:bg-slate-800",
        "dark:text-white",
        "dark:placeholder:text-slate-500",
        className
      )}
    />
  );
}

export default Input;
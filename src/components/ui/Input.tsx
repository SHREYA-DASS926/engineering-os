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
      className={`border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900 ${className}`}
    />
  );
}

export default Input;
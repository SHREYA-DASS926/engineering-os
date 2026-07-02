type SelectProps = {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  className?: string;
};

function Select({ value, onChange, options, className = "" }: SelectProps) {
  return (
    <select
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className={`border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900 bg-white ${className}`}
    >
      {options.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  );
}

export default Select;
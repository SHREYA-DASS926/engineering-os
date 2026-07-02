import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  type?: "button" | "submit";
  variant?: "primary" | "secondary" | "danger";
  onClick?: () => void;
  className?: string;
};

function Button({
  children,
  type = "button",
  variant = "primary",
  onClick,
  className = "",
}: ButtonProps) {
  const variants = {
    primary: "bg-slate-900 text-white hover:bg-slate-700",
    secondary: "bg-slate-100 text-slate-700 hover:bg-slate-200",
    danger: "bg-red-50 text-red-700 hover:bg-red-100",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded-xl px-4 py-3 font-medium transition ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
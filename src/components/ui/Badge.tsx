import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  variant?: "default" | "success" | "warning" | "danger";
};

function Badge({ children, variant = "default" }: BadgeProps) {
  const variants = {
    default: "bg-slate-100 text-slate-700",
    success: "bg-green-100 text-green-700",
    warning: "bg-yellow-100 text-yellow-700",
    danger: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`text-xs font-semibold px-3 py-1 rounded-full ${variants[variant]}`}
    >
      {children}
    </span>
  );
}

export default Badge;
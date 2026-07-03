import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  variant?: "default" | "dark";
};

function Card({ children, className = "", variant = "default" }: CardProps) {
  const variants = {
    default: "bg-white border border-slate-200 text-slate-900",
    dark: "bg-slate-900 border border-slate-800 text-white",
  };

  return (
    <section
      className={`rounded-3xl p-6 shadow-sm ${variants[variant]} ${className}`}
    >
      {children}
    </section>
  );
}

export default Card;
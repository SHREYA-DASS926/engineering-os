import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  variant?: "default" | "dark";
};

function Card({ children, className = "", variant = "default" }: CardProps) {
  const variants = {
    default: "border border-border bg-card text-card-foreground",
    dark: "border border-border bg-slate-950 text-white",
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
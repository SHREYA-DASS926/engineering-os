import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

function Card({ children, className = "" }: CardProps) {
  return (
    <section
      className={`bg-white rounded-3xl border border-slate-200 p-6 shadow-sm ${className}`}
    >
      {children}
    </section>
  );
}

export default Card;
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { animations } from "../../../styles/animations";

import { cn } from "../../../lib/cn";

type CardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};

function Card({ children, className, hover = true }: CardProps) {
  return (
    <motion.div
      whileHover={
        hover
          ? {
              y: -4,
              scale: 1.01,
            }
          : undefined
      }
      transition={animations.card.transition}
      className={cn(
        "rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-xl",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

export default Card;
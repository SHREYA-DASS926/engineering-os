import type { ReactNode } from "react";
import { motion } from "framer-motion";

import { cn } from "../../../lib/cn";
import { animations } from "../../../styles/animations";

type CardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};

function Card({ children, className, hover = true }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
      transition={animations.card.transition}
      className={cn(
        "rounded-3xl border border-border bg-card p-6 text-card-foreground shadow-sm transition-shadow hover:shadow-xl",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

export default Card;
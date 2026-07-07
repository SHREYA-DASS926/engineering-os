import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

import { cn } from "../../../lib/cn";
import { animations } from "../../../styles/animations";

type ButtonProps = HTMLMotionProps<"button"> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "success" | "danger" | "ghost";
};

function Button({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  const styles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    success: "bg-emerald-600 text-white hover:bg-emerald-700",
    danger: "bg-red-600 text-white hover:bg-red-700",
    ghost: "bg-transparent text-muted-foreground hover:bg-muted hover:text-foreground",
  };

  return (
    <motion.button
      {...animations.button}
      className={cn(
        "rounded-2xl px-5 py-3 font-medium transition",
        styles[variant],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export default Button;
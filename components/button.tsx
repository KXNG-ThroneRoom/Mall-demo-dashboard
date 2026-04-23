"use client";

import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

type ButtonProps = HTMLMotionProps<"button"> & {
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({ className = "", variant = "secondary", ...props }: ButtonProps) {
  const variantClasses = {
    primary: "border-ember-500/60 bg-ember-600 text-white shadow-glow hover:bg-ember-500",
    secondary: "border-[rgba(var(--border),0.78)] bg-[rgba(var(--panel),0.7)] hover:bg-[rgba(var(--panel-muted),0.86)]",
    ghost: "border-transparent bg-transparent hover:bg-[rgba(var(--panel-muted),0.72)]"
  };

  return (
    <motion.button
      whileHover={{ y: -1, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center justify-center gap-2 rounded-xl border px-4 py-2 text-sm font-medium transition ${variantClasses[variant]} ${className}`}
      {...props}
    />
  );
}

"use client";

import { motion } from "framer-motion";

export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[rgb(var(--surface))]">
      <div className="ambient-grid absolute inset-0 opacity-60" />
      <div className="noise absolute inset-0 opacity-[0.035]" />
      <motion.div
        className="absolute -right-24 top-0 h-[420px] w-[420px] rounded-full bg-ember-500/25 blur-3xl"
        animate={{ scale: [1, 1.12, 1], opacity: [0.22, 0.34, 0.22] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 left-[38%] h-[280px] w-[280px] rounded-full bg-ember-700/10 blur-3xl"
        animate={{ x: [-20, 30, -20], y: [0, -18, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

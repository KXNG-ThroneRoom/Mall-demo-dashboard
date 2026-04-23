"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Panel } from "./dashboard-widgets";
import { useLanguage } from "./language-provider";

const copy = {
  en: {
    search: "Search intelligence..."
  },
  es: {
    search: "Buscar inteligencia..."
  }
};

export function PageTitle({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  const { language } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-5 flex flex-col justify-between gap-4 rounded-3xl border border-[rgba(var(--border),0.58)] bg-[rgba(var(--panel),0.34)] p-5 backdrop-blur-xl md:flex-row md:items-end"
    >
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-ember-500">{eyebrow}</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em]">{title}</h2>
        <p className="mt-2 max-w-2xl text-sm text-[rgb(var(--muted))]">{body}</p>
      </div>
      <div className="flex min-w-[260px] items-center gap-2 rounded-2xl border border-[rgba(var(--border),0.7)] bg-[rgba(var(--panel),0.7)] px-4 py-3 text-sm text-[rgb(var(--muted))]">
        <Search size={16} />
        {copy[language].search}
      </div>
    </motion.div>
  );
}

export function DataTable({
  title,
  columns,
  rows
}: {
  title: string;
  columns: string[];
  rows: string[][];
}) {
  return (
    <Panel title={title}>
      <div className="overflow-x-auto scrollbar-thin">
        <table className="w-full min-w-[700px] text-left text-sm">
          <thead className="text-xs uppercase tracking-[0.18em] text-[rgb(var(--muted))]">
            <tr>
              {columns.map((column) => (
                <th key={column} className="border-b border-[rgba(var(--border),0.55)] px-4 pb-4 font-medium">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.join("-")} className="group transition hover:bg-[rgba(var(--panel-muted),0.48)]">
                {row.map((cell, index) => (
                  <td key={`${cell}-${index}`} className="border-b border-[rgba(var(--border),0.35)] px-4 py-4">
                    {index === 0 ? <span className="font-medium">{cell}</span> : cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Panel>
  );
}

export function StatPill({ label, value }: { label: string; value: string }) {
  return (
    <motion.div whileHover={{ y: -2 }} className="glass-panel rounded-3xl p-5">
      <p className="text-xs uppercase tracking-[0.22em] text-[rgb(var(--muted))]">{label}</p>
      <p className="mt-3 text-3xl font-semibold tracking-[-0.05em]">{value}</p>
    </motion.div>
  );
}

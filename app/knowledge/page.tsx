"use client";

import { BookOpen, FileCheck2 } from "lucide-react";
import { MotionShell } from "@/components/motion-shell";
import { PageTitle } from "@/components/page-kit";
import { Panel } from "@/components/dashboard-widgets";
import { dashboardCopy } from "@/mock-data/dashboard";
import { useLanguage } from "@/components/language-provider";

const copy = {
  en: {
    eyebrow: "Knowledge Base",
    title: "Searchable mall memory",
    body: "A visual prototype of the Memory OS layer that keeps tenant, facilities, events, and operations knowledge ready for AI responses.",
    articles: "Knowledge Articles",
    updated: "Updated",
    confidence: "confidence",
    health: "Memory Health",
    healthBody: "Knowledge confidence across operational documents and tenant records.",
    freshness: "Freshness",
    excellent: "Excellent",
    conflicts: "Conflicts",
    flagged: "3 flagged",
    sources: "Sources",
    docs: "126 docs"
  },
  es: {
    eyebrow: "Base de Conocimiento",
    title: "Memoria searchable del centro comercial",
    body: "Un prototipo visual de la capa Memory OS que mantiene listos los conocimientos de locales, instalaciones, eventos y operaciones para respuestas de AI.",
    articles: "Artículos de Conocimiento",
    updated: "Actualizado",
    confidence: "confianza",
    health: "Salud de Memoria",
    healthBody: "Confianza del conocimiento en documentos operativos y registros de locales.",
    freshness: "Frescura",
    excellent: "Excelente",
    conflicts: "Conflictos",
    flagged: "3 marcados",
    sources: "Fuentes",
    docs: "126 docs"
  }
};

export default function KnowledgePage() {
  const { language } = useLanguage();
  const text = copy[language];
  const { knowledgeBase } = dashboardCopy[language];

  return (
    <MotionShell>
      <PageTitle eyebrow={text.eyebrow} title={text.title} body={text.body} />
      <div className="grid gap-4 xl:grid-cols-[1fr_340px]">
        <Panel title={text.articles}>
          <div className="space-y-3">
            {knowledgeBase.map((item) => (
              <div key={item.title} className="flex flex-col justify-between gap-4 rounded-2xl border border-[rgba(var(--border),0.55)] bg-[rgba(var(--panel-muted),0.34)] p-4 transition hover:border-ember-500/45 md:flex-row md:items-center">
                <div className="flex gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-ember-500/10 text-ember-500">
                    <BookOpen size={18} />
                  </span>
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="mt-1 text-sm text-[rgb(var(--muted))]">{item.type} · {text.updated} {item.updated}</p>
                  </div>
                </div>
                <span className="rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-sm text-green-500">{item.confidence}% {text.confidence}</span>
              </div>
            ))}
          </div>
        </Panel>
        <Panel title={text.health}>
          <FileCheck2 className="text-ember-500" size={28} />
          <p className="mt-5 text-3xl font-semibold tracking-[-0.05em]">97.2%</p>
          <p className="mt-2 text-sm text-[rgb(var(--muted))]">{text.healthBody}</p>
          <div className="mt-6 space-y-3 text-sm">
            <div className="flex justify-between"><span>{text.freshness}</span><span className="text-green-500">{text.excellent}</span></div>
            <div className="flex justify-between"><span>{text.conflicts}</span><span className="text-ember-500">{text.flagged}</span></div>
            <div className="flex justify-between"><span>{text.sources}</span><span>{text.docs}</span></div>
          </div>
        </Panel>
      </div>
    </MotionShell>
  );
}

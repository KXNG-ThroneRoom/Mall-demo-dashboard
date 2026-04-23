"use client";

import { Building2 } from "lucide-react";
import { MotionShell } from "@/components/motion-shell";
import { DataTable, PageTitle, StatPill } from "@/components/page-kit";
import { dashboardCopy } from "@/mock-data/dashboard";
import { useLanguage } from "@/components/language-provider";

const copy = {
  en: {
    eyebrow: "Tenant Intelligence",
    title: "Retail performance and lead routing",
    body: "A leasing and tenant success surface showing demand signals, lead volume, and revenue captured by tenant.",
    activeTenants: "Active Tenants",
    hotLeads: "Hot Leads",
    partnerships: "Partnerships",
    revenueSignal: "Revenue Signal",
    board: "Tenant Lead Board",
    columns: ["Tenant", "Category", "Leads", "Sentiment", "Revenue Captured"],
    cards: ["Leasing inquiry", "Pop-up opportunity", "Marketing partnership"],
    cardBody: "Captured by AI and queued for tenant success follow-up."
  },
  es: {
    eyebrow: "Inteligencia de Locales",
    title: "Rendimiento retail y enrutamiento de leads",
    body: "Una superficie para arriendos y éxito de locales que muestra señales de demanda, volumen de leads e ingresos capturados por local.",
    activeTenants: "Locales Activos",
    hotLeads: "Leads Calientes",
    partnerships: "Alianzas",
    revenueSignal: "Señal de Ingresos",
    board: "Tablero de Leads de Locales",
    columns: ["Local", "Categoría", "Leads", "Sentimiento", "Ingresos Capturados"],
    cards: ["Consulta de arriendo", "Oportunidad pop-up", "Alianza de marketing"],
    cardBody: "Capturado por AI y puesto en cola para seguimiento de éxito de locales."
  }
};

export default function TenantsPage() {
  const { language } = useLanguage();
  const text = copy[language];
  const { tenants } = dashboardCopy[language];

  return (
    <MotionShell>
      <PageTitle eyebrow={text.eyebrow} title={text.title} body={text.body} />
      <div className="mb-4 grid gap-4 md:grid-cols-4">
        <StatPill label={text.activeTenants} value="186" />
        <StatPill label={text.hotLeads} value="42" />
        <StatPill label={text.partnerships} value="13" />
        <StatPill label={text.revenueSignal} value="$169K" />
      </div>
      <DataTable
        title={text.board}
        columns={text.columns}
        rows={tenants.map((tenant) => [tenant.name, tenant.category, String(tenant.leads), tenant.sentiment, tenant.revenue])}
      />
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {text.cards.map((item) => (
          <div key={item} className="glass-panel rounded-3xl p-5 transition hover:border-ember-500/50">
            <Building2 className="text-ember-500" size={22} />
            <p className="mt-4 font-medium">{item}</p>
            <p className="mt-2 text-sm text-[rgb(var(--muted))]">{text.cardBody}</p>
          </div>
        ))}
      </div>
    </MotionShell>
  );
}

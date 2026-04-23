"use client";

import { Megaphone } from "lucide-react";
import { MotionShell } from "@/components/motion-shell";
import { DataTable, PageTitle, StatPill } from "@/components/page-kit";
import { dashboardCopy } from "@/mock-data/dashboard";
import { useLanguage } from "@/components/language-provider";

const copy = {
  en: {
    eyebrow: "Campaigns",
    title: "AI-assisted activation studio",
    body: "Mock campaign performance for promotions, parking recovery, dining moments, and tenant-led experiences.",
    liveCampaigns: "Live Campaigns",
    conversion: "Conversion",
    attributedSpend: "Attributed Spend",
    performance: "Campaign Performance",
    columns: ["Campaign", "Channel", "Conversion", "Spend", "Status"],
    cardBody: "Audience segment warmed through AI conversations and routed to personalized tenant offers."
  },
  es: {
    eyebrow: "Campañas",
    title: "Estudio de activación asistido por AI",
    body: "Rendimiento simulado de campañas para promociones, recuperación de parqueadero, momentos gastronómicos y experiencias lideradas por locales.",
    liveCampaigns: "Campañas Activas",
    conversion: "Conversión",
    attributedSpend: "Gasto Atribuido",
    performance: "Rendimiento de Campañas",
    columns: ["Campaña", "Canal", "Conversión", "Gasto", "Estado"],
    cardBody: "Segmento de audiencia calentado por conversaciones de AI y dirigido a ofertas personalizadas de locales."
  }
};

export default function CampaignsPage() {
  const { language } = useLanguage();
  const text = copy[language];
  const { campaigns } = dashboardCopy[language];

  return (
    <MotionShell>
      <PageTitle eyebrow={text.eyebrow} title={text.title} body={text.body} />
      <div className="mb-4 grid gap-4 md:grid-cols-3">
        <StatPill label={text.liveCampaigns} value="7" />
        <StatPill label={text.conversion} value="16.8%" />
        <StatPill label={text.attributedSpend} value="$32.1K" />
      </div>
      <DataTable
        title={text.performance}
        columns={text.columns}
        rows={campaigns.map((campaign) => [campaign.name, campaign.channel, campaign.conversion, campaign.spend, campaign.status])}
      />
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {campaigns.slice(0, 2).map((campaign) => (
          <div key={campaign.name} className="glass-panel rounded-3xl p-6">
            <Megaphone className="text-ember-500" size={24} />
            <h3 className="mt-4 text-xl font-semibold tracking-[-0.04em]">{campaign.name}</h3>
            <p className="mt-2 text-sm text-[rgb(var(--muted))]">{text.cardBody}</p>
            <div className="mt-5 h-2 overflow-hidden rounded-full bg-[rgba(var(--border),0.45)]">
              <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-ember-700 to-ember-400" />
            </div>
          </div>
        ))}
      </div>
    </MotionShell>
  );
}

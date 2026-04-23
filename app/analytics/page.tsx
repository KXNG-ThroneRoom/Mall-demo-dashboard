"use client";

import { AnalyticsBarChart, ChannelDonutChart, ConversationLineChart } from "@/components/charts";
import { Panel } from "@/components/dashboard-widgets";
import { MotionShell } from "@/components/motion-shell";
import { PageTitle, StatPill } from "@/components/page-kit";
import { useLanguage } from "@/components/language-provider";

const copy = {
  en: {
    eyebrow: "Analytics",
    title: "Performance command layer",
    body: "A deeper visual readout for resolution quality, lead capture velocity, satisfaction, and channel performance.",
    responseTime: "Avg Response Time",
    leadLift: "Lead Capture Lift",
    csat: "CSAT Estimate",
    outcomes: "Conversations and Outcomes",
    channelMix: "Channel Mix",
    satisfaction: "Satisfaction vs Capture"
  },
  es: {
    eyebrow: "Analítica",
    title: "Capa de comando de rendimiento",
    body: "Una lectura visual más profunda de calidad de resolución, velocidad de captura de leads, satisfacción y rendimiento por canal.",
    responseTime: "Tiempo Promedio de Respuesta",
    leadLift: "Aumento de Captura de Leads",
    csat: "Estimación CSAT",
    outcomes: "Conversaciones y Resultados",
    channelMix: "Mezcla de Canales",
    satisfaction: "Satisfacción vs Captura"
  }
};

export default function AnalyticsPage() {
  const { language } = useLanguage();
  const text = copy[language];

  return (
    <MotionShell>
      <PageTitle eyebrow={text.eyebrow} title={text.title} body={text.body} />
      <div className="mb-4 grid gap-4 md:grid-cols-3">
        <StatPill label={text.responseTime} value="4.2s" />
        <StatPill label={text.leadLift} value="+31%" />
        <StatPill label={text.csat} value="94.8%" />
      </div>
      <div className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
        <Panel title={text.outcomes}><ConversationLineChart /></Panel>
        <Panel title={text.channelMix}><ChannelDonutChart /></Panel>
        <Panel title={text.satisfaction} className="xl:col-span-2"><AnalyticsBarChart /></Panel>
      </div>
    </MotionShell>
  );
}

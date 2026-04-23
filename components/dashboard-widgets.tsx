"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, ArrowUpRight, Check, CircleDollarSign, MapPin, MessageCircle, Sparkles } from "lucide-react";
import { dashboardCopy } from "@/mock-data/dashboard";
import { ChannelDonutChart, ConversationLineChart, TinyTrend } from "./charts";
import { Button } from "./button";
import { useLanguage } from "./language-provider";

const widgetCopy = {
  en: {
    vsLast7Days: "vs last 7 days",
    conversationsOverTime: "Conversations Over Time",
    conversationsByChannel: "Conversations by Channel",
    daily: "Daily",
    allConversations: "All Conversations",
    resolved: "Resolved",
    missed: "Missed",
    realTimeFeed: "Real-Time Feed",
    live: "Live",
    topIntents: "Top Intents",
    tenantLeads: "Tenant Leads",
    viewAll: "View all",
    leads: "Leads",
    systemStatus: "System Status",
    allSystemsOperational: "All Systems Operational",
    alerts: "Alerts",
    aiInsight: "AI Insight",
    insightTitle: "Peak inquiry time is between 2:00 PM - 4:00 PM",
    insightBody: "Consider increasing proactive messaging and parking guidance during this window.",
    viewInsights: "View AI Insights"
  },
  es: {
    vsLast7Days: "vs últimos 7 días",
    conversationsOverTime: "Conversaciones en el Tiempo",
    conversationsByChannel: "Conversaciones por Canal",
    daily: "Diario",
    allConversations: "Todas las Conversaciones",
    resolved: "Resueltas",
    missed: "Perdidas",
    realTimeFeed: "Feed en Tiempo Real",
    live: "En vivo",
    topIntents: "Intenciones Principales",
    tenantLeads: "Leads de Locales",
    viewAll: "Ver todo",
    leads: "Leads",
    systemStatus: "Estado del Sistema",
    allSystemsOperational: "Todos los Sistemas Operacionales",
    alerts: "Alertas",
    aiInsight: "Insight de AI",
    insightTitle: "La hora pico de consultas es entre 2:00 PM - 4:00 PM",
    insightBody: "Considera aumentar los mensajes proactivos y la guía de parqueadero durante esta ventana.",
    viewInsights: "Ver Insights de AI"
  }
};

export function Panel({
  title,
  action,
  children,
  className = ""
}: {
  title?: string;
  action?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.section
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className={`glass-panel rounded-3xl p-5 ${className}`}
    >
      {(title || action) && (
        <div className="mb-5 flex items-center justify-between gap-3">
          {title && <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-[rgb(var(--muted))]">{title}</h2>}
          {action}
        </div>
      )}
      {children}
    </motion.section>
  );
}

function CountUp({ target, display }: { target: number; display: string }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let frame = 0;
    const total = 42;
    const timer = window.setInterval(() => {
      frame += 1;
      const progress = 1 - Math.pow(1 - frame / total, 3);
      setValue(target * progress);
      if (frame >= total) {
        window.clearInterval(timer);
      }
    }, 22);
    return () => window.clearInterval(timer);
  }, [target]);

  if (display.startsWith("$")) {
    return <>${Math.round(value).toLocaleString()}</>;
  }
  if (display.endsWith("%")) {
    return <>{value.toFixed(1)}%</>;
  }
  return <>{Math.round(value).toLocaleString()}</>;
}

export function MetricGrid() {
  const icons = [MessageCircle, Check, AlertTriangle, CircleDollarSign];
  const { language } = useLanguage();
  const { metricCards } = dashboardCopy[language];
  const text = widgetCopy[language];

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {metricCards.map((card, index) => {
        const Icon = icons[index];
        return (
          <Panel key={card.label} className="overflow-hidden">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[rgb(var(--muted))]">{card.label}</p>
                <p className="mt-3 text-3xl font-semibold tracking-[-0.04em]">
                  <CountUp target={card.value} display={card.display} />
                </p>
                <p className="mt-2 text-sm text-[rgb(var(--muted))]">
                  <span className="font-medium text-ember-500">{card.change}</span> {text.vsLast7Days}
                </p>
              </div>
              <div className="rounded-2xl border border-[rgba(var(--border),0.7)] bg-[rgba(var(--panel-muted),0.72)] p-3 text-ember-500">
                <Icon size={20} />
              </div>
            </div>
            <div className="mt-4">
              <TinyTrend data={card.data} />
            </div>
          </Panel>
        );
      })}
    </div>
  );
}

export function OverviewCharts() {
  const { language } = useLanguage();
  const text = widgetCopy[language];

  return (
    <div className="grid gap-4 xl:grid-cols-[1.6fr_0.9fr]">
      <Panel title={text.conversationsOverTime} action={<Button className="px-3 py-1.5">{text.daily}</Button>}>
        <ConversationLineChart />
        <div className="mt-3 flex flex-wrap gap-5 text-xs text-[rgb(var(--muted))]">
          <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-ember-500" />{text.allConversations}</span>
          <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-ember-300" />{text.resolved}</span>
          <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-zinc-500" />{text.missed}</span>
        </div>
      </Panel>
      <Panel title={text.conversationsByChannel}>
        <ChannelDonutChart />
      </Panel>
    </div>
  );
}

export function RealTimeFeed() {
  const [offset, setOffset] = useState(0);
  const { language } = useLanguage();
  const { feedEvents } = dashboardCopy[language];
  const text = widgetCopy[language];

  useEffect(() => {
    const timer = window.setInterval(() => setOffset((current) => (current + 1) % feedEvents.length), 3200);
    return () => window.clearInterval(timer);
  }, [feedEvents.length]);

  const events = [...feedEvents.slice(offset), ...feedEvents.slice(0, offset)];

  return (
    <Panel
      title={text.realTimeFeed}
      action={<span className="flex items-center gap-2 text-xs text-ember-500"><span className="h-2 w-2 animate-pulse rounded-full bg-ember-500" />{text.live}</span>}
      className="xl:row-span-2"
    >
      <div className="space-y-3">
        <AnimatePresence initial={false}>
          {events.slice(0, 5).map((event) => (
            <motion.div
              key={`${event.title}-${event.time}`}
              layout
              initial={{ opacity: 0, x: 18, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -18, scale: 0.98 }}
              className="rounded-2xl border border-[rgba(var(--border),0.58)] bg-[rgba(var(--panel-muted),0.38)] p-4"
            >
              <div className="flex justify-between gap-3">
                <div>
                  <p className="text-sm font-medium">{event.title}</p>
                  <p className="mt-1 text-xs leading-5 text-[rgb(var(--muted))]">{event.body}</p>
                </div>
                <span className="text-xs text-[rgb(var(--muted))]">{event.time}</span>
              </div>
              <p className="mt-3 text-xs text-ember-500">{event.channel}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </Panel>
  );
}

export function IntentLeadStatusGrid() {
  const { language } = useLanguage();
  const { topIntents, tenantLeads, systemStatus } = dashboardCopy[language];
  const text = widgetCopy[language];

  return (
    <div className="grid gap-4 xl:grid-cols-3">
      <Panel title={text.topIntents} action={<button className="text-xs text-[rgb(var(--muted))]">{text.viewAll}</button>}>
        <div className="space-y-5">
          {topIntents.map((intent) => (
            <div key={intent.name} className="grid grid-cols-[1fr_1.3fr_auto] items-center gap-3 text-sm">
              <span className="flex items-center gap-2"><MapPin size={14} className="text-ember-500" />{intent.name}</span>
              <span className="h-2 overflow-hidden rounded-full bg-[rgba(var(--border),0.42)]">
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: `${intent.value * 2.6}%` }}
                  transition={{ duration: 0.9 }}
                  className="block h-full rounded-full bg-gradient-to-r from-ember-700 to-ember-400"
                />
              </span>
              <span>{intent.value}%</span>
            </div>
          ))}
        </div>
      </Panel>

      <Panel title={text.tenantLeads} action={<button className="text-xs text-[rgb(var(--muted))]">{text.viewAll}</button>}>
        <div className="space-y-4">
          {tenantLeads.map((lead, index) => (
            <div key={lead.type} className="flex items-center justify-between border-b border-[rgba(var(--border),0.45)] pb-4 last:border-0 last:pb-0">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-ember-500/40 bg-ember-500/10 text-sm">{index + 1}</span>
                <div>
                  <p className="text-sm font-medium">{lead.type}</p>
                  <p className="text-xs text-[rgb(var(--muted))]">{lead.tenant}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold">{lead.leads}</p>
                <p className="text-xs text-[rgb(var(--muted))]">{text.leads}</p>
              </div>
            </div>
          ))}
        </div>
      </Panel>

      <Panel title={text.systemStatus}>
        <p className="mb-5 flex items-center gap-2 text-sm text-green-500"><Check size={16} />{text.allSystemsOperational}</p>
        <div className="space-y-4">
          {systemStatus.map((system) => (
            <div key={system.name} className="flex items-center justify-between text-sm">
              <span>{system.name}</span>
              <span className="flex items-center gap-2 text-green-500"><span className="h-2 w-2 rounded-full bg-green-500" />{system.status}</span>
            </div>
          ))}
        </div>
      </Panel>
    </div>
  );
}

export function AlertsAndInsight() {
  const { language } = useLanguage();
  const { alerts } = dashboardCopy[language];
  const text = widgetCopy[language];

  return (
    <div className="grid gap-4 xl:grid-cols-[0.9fr_1.6fr]">
      <Panel title={text.alerts} action={<button className="text-xs text-[rgb(var(--muted))]">{text.viewAll}</button>}>
        <div className="space-y-4">
          {alerts.map((alert) => (
            <div key={alert.title} className="flex gap-3 rounded-2xl border border-[rgba(var(--border),0.5)] bg-[rgba(var(--panel-muted),0.36)] p-4">
              <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${alert.level === "critical" ? "bg-ember-500/12 text-ember-500" : "bg-blue-500/12 text-blue-400"}`}>
                <AlertTriangle size={18} />
              </span>
              <div>
                <p className="text-sm font-medium text-ember-500">{alert.title}</p>
                <p className="mt-1 text-xs text-[rgb(var(--muted))]">{alert.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Panel>
      <Panel>
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-4">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[rgba(var(--panel-muted),0.85)] text-ember-500">
              <Sparkles size={24} />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ember-500">{text.aiInsight}</p>
              <h3 className="mt-2 text-xl font-medium tracking-[-0.03em]">{text.insightTitle}</h3>
              <p className="mt-2 text-sm text-[rgb(var(--muted))]">{text.insightBody}</p>
            </div>
          </div>
          <Button>
            {text.viewInsights}
            <ArrowUpRight size={16} />
          </Button>
        </div>
      </Panel>
    </div>
  );
}

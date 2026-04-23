"use client";

import {
  Brain,
  CheckCircle2,
  Mail,
  MessageCircle,
  Mic2,
  PlugZap,
  Send,
  Slack,
  Store,
  Workflow
} from "lucide-react";
import { MotionShell } from "@/components/motion-shell";
import { PageTitle, StatPill } from "@/components/page-kit";
import { Panel } from "@/components/dashboard-widgets";
import { useLanguage } from "@/components/language-provider";

const copy = {
  en: {
    eyebrow: "Integrations",
    title: "Connected mall intelligence stack",
    body: "A lightweight control surface for the systems feeding conversations, leads, tenant onboarding, and institutional memory.",
    active: "Active Integrations",
    sync: "Avg Sync Health",
    queue: "Queued Events",
    core: "Core AI Systems",
    channels: "Connected Channels",
    branches: "Lead Capture Branches",
    operational: "Operational",
    configured: "Configured",
    systems: [
      {
        name: "Voice Agent",
        description: "Answers calls, routes urgent issues, summarizes missed opportunities, and escalates high-value tenant or visitor conversations."
      },
      {
        name: "Email Lead Capture Engine",
        description: "Extracts leasing, sponsorship, event, and customer-service signals from inbound messages."
      },
      {
        name: "Tenant Onboarding Integration",
        description: "Guides new tenants through intake, documents, brand assets, operating hours, and launch-readiness tasks."
      },
      {
        name: "Institutional Memory OS",
        description: "Keeps policies, tenant facts, events, parking rules, and operational knowledge synchronized for AI responses."
      }
    ],
    branchItems: ["Email", "WhatsApp", "Forms"],
    channelItems: ["Gmail", "Slack", "WhatsApp", "Instagram", "Web Forms", "Voice Gateway"]
  },
  es: {
    eyebrow: "Integraciones",
    title: "Stack conectado de inteligencia del centro comercial",
    body: "Una superficie ligera para los sistemas que alimentan conversaciones, leads, onboarding de locales y memoria institucional.",
    active: "Integraciones Activas",
    sync: "Salud Promedio de Sync",
    queue: "Eventos en Cola",
    core: "Sistemas AI Principales",
    channels: "Canales Conectados",
    branches: "Ramas de Captura de Leads",
    operational: "Operacional",
    configured: "Configurado",
    systems: [
      {
        name: "Agente de Voz",
        description: "Responde llamadas, enruta asuntos urgentes, resume oportunidades perdidas y escala conversaciones de alto valor."
      },
      {
        name: "Motor de Captura de Leads por Email",
        description: "Extrae señales de arriendo, patrocinios, eventos y servicio al cliente desde mensajes entrantes."
      },
      {
        name: "Integración de Onboarding de Locales",
        description: "Guía a nuevos locales por intake, documentos, activos de marca, horarios y tareas de lanzamiento."
      },
      {
        name: "Institutional Memory OS",
        description: "Mantiene políticas, datos de locales, eventos, reglas de parqueadero y conocimiento operativo sincronizado."
      }
    ],
    branchItems: ["Email", "WhatsApp", "Formularios"],
    channelItems: ["Gmail", "Slack", "WhatsApp", "Instagram", "Formularios Web", "Gateway de Voz"]
  }
};

const systemIcons = [Mic2, Mail, Store, Brain];
const channelIcons = [Mail, Slack, MessageCircle, Send, Workflow, PlugZap];

export default function IntegrationsPage() {
  const { language } = useLanguage();
  const text = copy[language];

  return (
    <MotionShell>
      <PageTitle eyebrow={text.eyebrow} title={text.title} body={text.body} />
      <div className="mb-4 grid gap-4 md:grid-cols-3">
        <StatPill label={text.active} value="14" />
        <StatPill label={text.sync} value="98.4%" />
        <StatPill label={text.queue} value="326" />
      </div>

      <div className="grid gap-4 xl:grid-cols-[1fr_380px]">
        <Panel title={text.core}>
          <div className="grid gap-4 md:grid-cols-2">
            {text.systems.map((system, index) => {
              const Icon = systemIcons[index];
              return (
                <div key={system.name} className="rounded-3xl border border-[rgba(var(--border),0.55)] bg-[rgba(var(--panel-muted),0.34)] p-5 transition hover:border-ember-500/45 hover:bg-ember-500/5">
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ember-500/10 text-ember-500">
                      <Icon size={22} />
                    </span>
                    <span className="flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs text-green-500">
                      <CheckCircle2 size={13} />
                      {text.operational}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold tracking-[-0.03em]">{system.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-[rgb(var(--muted))]">{system.description}</p>
                </div>
              );
            })}
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel title={text.branches}>
            <div className="space-y-3">
              {text.branchItems.map((branch) => (
                <div key={branch} className="flex items-center justify-between rounded-2xl border border-[rgba(var(--border),0.52)] bg-[rgba(var(--panel-muted),0.32)] p-4">
                  <span className="font-medium">{branch}</span>
                  <span className="text-sm text-green-500">{text.configured}</span>
                </div>
              ))}
            </div>
          </Panel>

          <Panel title={text.channels}>
            <div className="grid grid-cols-2 gap-3">
              {text.channelItems.map((channel, index) => {
                const Icon = channelIcons[index];
                return (
                  <div key={channel} className="rounded-2xl border border-[rgba(var(--border),0.52)] bg-[rgba(var(--panel-muted),0.32)] p-4 transition hover:border-ember-500/45">
                    <Icon className="text-ember-500" size={18} />
                    <p className="mt-3 text-sm font-medium">{channel}</p>
                    <p className="mt-1 text-xs text-green-500">{text.operational}</p>
                  </div>
                );
              })}
            </div>
          </Panel>
        </div>
      </div>
    </MotionShell>
  );
}

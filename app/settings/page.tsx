"use client";

import { Bell, LockKeyhole, ShieldCheck, SlidersHorizontal, UserRound } from "lucide-react";
import { MotionShell } from "@/components/motion-shell";
import { PageTitle } from "@/components/page-kit";
import { Panel } from "@/components/dashboard-widgets";
import { useLanguage } from "@/components/language-provider";

const copy = {
  en: {
    eyebrow: "Settings",
    title: "Workspace preferences",
    body: "Simple boilerplate settings for demo users, notifications, permissions, and dashboard behavior.",
    profile: "Profile",
    notifications: "Notifications",
    security: "Security",
    preferences: "Dashboard Preferences",
    admin: "Admin User",
    role: "Mall Operations Director",
    email: "admin@eltesoro.demo",
    enabled: "Enabled",
    configured: "Configured",
    fields: [
      ["Workspace", "El Tesoro Shopping Park"],
      ["Default date range", "Last 7 days"],
      ["Default page", "Overview"],
      ["Live feed refresh", "Every 3 seconds"]
    ],
    notificationItems: ["Critical alerts", "Tenant lead summaries", "Daily AI performance digest"],
    securityItems: ["Single sign-on", "Role-based access", "Audit logs"]
  },
  es: {
    eyebrow: "Configuración",
    title: "Preferencias del workspace",
    body: "Configuración simple de demo para usuarios, notificaciones, permisos y comportamiento del dashboard.",
    profile: "Perfil",
    notifications: "Notificaciones",
    security: "Seguridad",
    preferences: "Preferencias del Dashboard",
    admin: "Usuario Administrador",
    role: "Director de Operaciones del Centro Comercial",
    email: "admin@eltesoro.demo",
    enabled: "Activo",
    configured: "Configurado",
    fields: [
      ["Workspace", "El Tesoro Shopping Park"],
      ["Rango de fechas predeterminado", "Últimos 7 días"],
      ["Página predeterminada", "Resumen"],
      ["Actualización del feed en vivo", "Cada 3 segundos"]
    ],
    notificationItems: ["Alertas críticas", "Resúmenes de leads de locales", "Digest diario de rendimiento AI"],
    securityItems: ["Single sign-on", "Acceso basado en roles", "Logs de auditoría"]
  }
};

function ToggleRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-[rgba(var(--border),0.5)] bg-[rgba(var(--panel-muted),0.32)] p-4">
      <span className="text-sm font-medium">{label}</span>
      <span className="rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs text-green-500">{value}</span>
    </div>
  );
}

export default function SettingsPage() {
  const { language } = useLanguage();
  const text = copy[language];

  return (
    <MotionShell>
      <PageTitle eyebrow={text.eyebrow} title={text.title} body={text.body} />
      <div className="grid gap-4 xl:grid-cols-[360px_1fr]">
        <Panel title={text.profile}>
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-ember-600 text-xl font-semibold text-white shadow-glow">
              A
            </div>
            <div>
              <p className="font-semibold">{text.admin}</p>
              <p className="mt-1 text-sm text-[rgb(var(--muted))]">{text.role}</p>
              <p className="mt-1 text-sm text-ember-500">{text.email}</p>
            </div>
          </div>
          <div className="mt-6 space-y-3">
            <ToggleRow label="Two-factor auth" value={text.enabled} />
            <ToggleRow label="SSO" value={text.configured} />
          </div>
        </Panel>

        <div className="grid gap-4 lg:grid-cols-2">
          <Panel title={text.preferences}>
            <div className="space-y-3">
              {text.fields.map(([label, value]) => (
                <div key={label} className="flex items-center gap-3 rounded-2xl border border-[rgba(var(--border),0.5)] bg-[rgba(var(--panel-muted),0.32)] p-4">
                  <SlidersHorizontal className="text-ember-500" size={18} />
                  <div>
                    <p className="text-sm font-medium">{label}</p>
                    <p className="text-xs text-[rgb(var(--muted))]">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </Panel>

          <Panel title={text.notifications}>
            <div className="space-y-3">
              {text.notificationItems.map((item) => (
                <ToggleRow key={item} label={item} value={text.enabled} />
              ))}
            </div>
          </Panel>

          <Panel title={text.security} className="lg:col-span-2">
            <div className="grid gap-3 md:grid-cols-3">
              {text.securityItems.map((item, index) => {
                const Icon = [LockKeyhole, ShieldCheck, Bell][index] ?? UserRound;
                return (
                  <div key={item} className="rounded-2xl border border-[rgba(var(--border),0.5)] bg-[rgba(var(--panel-muted),0.32)] p-5">
                    <Icon className="text-ember-500" size={20} />
                    <p className="mt-4 font-medium">{item}</p>
                    <p className="mt-1 text-sm text-green-500">{text.configured}</p>
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

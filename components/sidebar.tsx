"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  BookOpen,
  Building2,
  Crown,
  Gauge,
  Megaphone,
  MessageSquare,
  Plug,
  Settings
} from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "./language-provider";

const nav = [
  { key: "overview", href: "/overview", icon: Gauge },
  { key: "conversations", href: "/conversations", icon: MessageSquare },
  { key: "analytics", href: "/analytics", icon: BarChart3 },
  { key: "tenants", href: "/tenants", icon: Building2 },
  { key: "campaigns", href: "/campaigns", icon: Megaphone },
  { key: "knowledge", href: "/knowledge", icon: BookOpen },
  { key: "integrations", href: "/integrations", icon: Plug },
  { key: "settings", href: "/settings", icon: Settings }
];

const labels = {
  en: {
    command: "AI Mall Command",
    overview: "Overview",
    conversations: "Conversations",
    analytics: "Analytics",
    tenants: "Tenants",
    campaigns: "Campaigns",
    knowledge: "Knowledge Base",
    integrations: "Integrations",
    settings: "Settings",
    systems: "AI Systems",
    infrastructure: "Private Infrastructure",
    admin: "Admin"
  },
  es: {
    command: "Comando AI del Centro Comercial",
    overview: "Resumen",
    conversations: "Conversaciones",
    analytics: "Analítica",
    tenants: "Locales",
    campaigns: "Campañas",
    knowledge: "Base de Conocimiento",
    integrations: "Integraciones",
    settings: "Configuración",
    systems: "Sistemas AI",
    infrastructure: "Infraestructura Privada",
    admin: "Administrador"
  }
};

export function Sidebar() {
  const pathname = usePathname();
  const { language } = useLanguage();
  const text = labels[language];

  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 border-r border-[rgba(var(--border),0.72)] bg-[rgba(var(--surface),0.78)] p-5 backdrop-blur-2xl lg:block">
      <Link href="/overview" className="mb-9 flex items-center gap-3 px-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-ember-500/30 bg-ember-500/10 text-ember-400">
          <Crown size={19} />
        </div>
        <div>
          <p className="text-sm font-semibold tracking-[0.28em]">THRONE ROOM</p>
          <p className="text-xs text-[rgb(var(--muted))]">{text.command}</p>
        </div>
      </Link>

      <nav className="space-y-2">
        {nav.map((item) => {
          const active = pathname === item.href.split("?")[0];
          const Icon = item.icon;
          return (
            <Link
              key={item.key}
              href={item.href}
              className={`group relative flex items-center gap-3 rounded-2xl px-4 py-3 text-sm transition ${
                active ? "text-white" : "text-[rgb(var(--muted))] hover:text-[rgb(var(--text))]"
              }`}
            >
              {active && (
                <motion.span
                  layoutId="sidebar-active"
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-ember-700 to-ember-500 shadow-glow"
                />
              )}
              <Icon className="relative z-10" size={18} />
              <span className="relative z-10">{text[item.key as keyof typeof text]}</span>
            </Link>
          );
        })}
      </nav>

      <div className="absolute bottom-6 left-5 right-5">
        <div className="mb-5 rounded-2xl border border-ember-500/40 bg-ember-500/5 p-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[rgb(var(--text))]">{text.systems}</p>
          <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-[rgb(var(--muted))]">{text.infrastructure}</p>
        </div>
        <div className="flex items-center gap-3 border-t border-[rgba(var(--border),0.68)] pt-5">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-ember-600 text-white">A</div>
          <div>
            <p className="text-sm font-medium">{text.admin}</p>
            <p className="text-xs text-[rgb(var(--muted))]">El Tesoro Mall</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

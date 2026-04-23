"use client";

import { CalendarDays, Download, Moon, Radio, SlidersHorizontal, Sun } from "lucide-react";
import { Button } from "./button";
import { useTheme } from "./theme-provider";
import { useLanguage } from "./language-provider";

const copy = {
  en: {
    eyebrow: "Melanie AI Command Center",
    title: "Welcome back, Admin.",
    subtitle: "El Tesoro Shopping Park intelligence layer",
    dateRange: "May 11 - May 18, 2025",
    channel: "Channel",
    export: "Export",
    liveFeed: "Live Feed",
    english: "English",
    spanish: "Spanish",
    light: "Light",
    dark: "Dark"
  },
  es: {
    eyebrow: "Centro de Comando de Melanie AI",
    title: "Bienvenido de nuevo, Admin.",
    subtitle: "Capa de inteligencia de El Tesoro Shopping Park",
    dateRange: "11 de mayo - 18 de mayo, 2025",
    channel: "Canal",
    export: "Exportar",
    liveFeed: "En Vivo",
    english: "Inglés",
    spanish: "Español",
    light: "Claro",
    dark: "Oscuro"
  }
};

export function Topbar() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const text = copy[language];

  return (
    <header className="mb-7 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-ember-500">{text.eyebrow}</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">{text.title}</h1>
        <p className="mt-2 text-sm text-[rgb(var(--muted))]">{text.subtitle}</p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Button className="text-[rgb(var(--muted))]">
          <CalendarDays size={16} />
          {text.dateRange}
        </Button>
        <Button>
          <SlidersHorizontal size={16} />
          {text.channel}
        </Button>
        <Button>
          <Download size={16} />
          {text.export}
        </Button>
        <Button variant="primary">
          <Radio size={16} />
          {text.liveFeed}
          <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
        </Button>
        <div className="flex rounded-xl border border-[rgba(var(--border),0.78)] bg-[rgba(var(--panel),0.7)] p-1 shadow-sm backdrop-blur">
          <button
            type="button"
            onClick={() => setLanguage("en")}
            className={`rounded-lg px-3 py-1.5 text-sm font-medium transition ${
              language === "en"
                ? "bg-ember-600 text-white shadow-glow"
                : "text-[rgb(var(--muted))] hover:bg-[rgba(var(--panel-muted),0.86)] hover:text-[rgb(var(--text))]"
            }`}
            aria-pressed={language === "en"}
          >
            <span className="mr-1.5 text-xs">🇺🇸</span>
            {text.english}
          </button>
          <button
            type="button"
            onClick={() => setLanguage("es")}
            className={`rounded-lg px-3 py-1.5 text-sm font-medium transition ${
              language === "es"
                ? "bg-ember-600 text-white shadow-glow"
                : "text-[rgb(var(--muted))] hover:bg-[rgba(var(--panel-muted),0.86)] hover:text-[rgb(var(--text))]"
            }`}
            aria-pressed={language === "es"}
          >
            <span className="mr-1.5 text-xs">🇪🇸</span>
            {text.spanish}
          </button>
        </div>
        <Button onClick={toggleTheme} aria-label="Toggle theme">
          {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          {theme === "dark" ? text.light : text.dark}
        </Button>
      </div>
    </header>
  );
}

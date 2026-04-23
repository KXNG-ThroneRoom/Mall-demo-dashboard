"use client";

import { MessageCircle, Phone, Send } from "lucide-react";
import { MotionShell } from "@/components/motion-shell";
import { Button } from "@/components/button";
import { Panel } from "@/components/dashboard-widgets";
import { PageTitle } from "@/components/page-kit";
import { dashboardCopy } from "@/mock-data/dashboard";
import { useLanguage } from "@/components/language-provider";

const copy = {
  en: {
    eyebrow: "Conversation Intelligence",
    title: "Live support threads",
    body: "A demo inbox for voice, WhatsApp, web chat, and social conversations flowing through Melanie AI.",
    threads: "Threads",
    activeChat: "Active Chat",
    escalate: "Escalate",
    customerQuestion: "Where is the Zara store located?",
    customer: "Customer",
    aiAnswer: "Zara is on Level 2, near the central atrium. Would you like directions from your current entrance?",
    customerReply: "Yes, I am by parking entrance B.",
    placeholder: "Type a response or let Melanie draft one...",
    send: "Send"
  },
  es: {
    eyebrow: "Inteligencia Conversacional",
    title: "Hilos de soporte en vivo",
    body: "Una bandeja demo para conversaciones de voz, WhatsApp, chat web y redes sociales gestionadas por Melanie AI.",
    threads: "Hilos",
    activeChat: "Chat Activo",
    escalate: "Escalar",
    customerQuestion: "¿Dónde está ubicada la tienda Zara?",
    customer: "Cliente",
    aiAnswer: "Zara está en el Nivel 2, cerca del atrio central. ¿Quieres indicaciones desde tu entrada actual?",
    customerReply: "Sí, estoy en la entrada B del parqueadero.",
    placeholder: "Escribe una respuesta o deja que Melanie redacte una...",
    send: "Enviar"
  }
};

export default function ConversationsPage() {
  const { language } = useLanguage();
  const text = copy[language];
  const { threads } = dashboardCopy[language];

  return (
    <MotionShell>
      <PageTitle eyebrow={text.eyebrow} title={text.title} body={text.body} />
      <div className="grid gap-4 xl:grid-cols-[380px_1fr]">
        <Panel title={text.threads}>
          <div className="space-y-3">
            {threads.map((thread) => (
              <div key={thread.name} className="rounded-2xl border border-[rgba(var(--border),0.52)] bg-[rgba(var(--panel-muted),0.36)] p-4 transition hover:border-ember-500/45 hover:bg-ember-500/5">
                <div className="flex items-center justify-between">
                  <p className="font-medium">{thread.name}</p>
                  <span className="text-xs text-[rgb(var(--muted))]">{thread.last}</span>
                </div>
                <p className="mt-1 text-sm text-[rgb(var(--muted))]">{thread.topic}</p>
                <div className="mt-3 flex items-center justify-between text-xs">
                  <span className="text-ember-500">{thread.channel}</span>
                  <span>{thread.status}</span>
                </div>
              </div>
            ))}
          </div>
        </Panel>
        <Panel title={text.activeChat} action={<Button><Phone size={15} />{text.escalate}</Button>}>
          <div className="space-y-4">
            <div className="max-w-[78%] rounded-3xl rounded-tl-md bg-[rgba(var(--panel-muted),0.82)] p-4">
              <p className="text-sm">{text.customerQuestion}</p>
              <p className="mt-2 text-xs text-[rgb(var(--muted))]">{text.customer} · WhatsApp</p>
            </div>
            <div className="ml-auto max-w-[78%] rounded-3xl rounded-tr-md bg-ember-600 p-4 text-white shadow-glow">
              <p className="text-sm">{text.aiAnswer}</p>
              <p className="mt-2 text-xs text-white/70">Melanie AI · 4 sec</p>
            </div>
            <div className="max-w-[78%] rounded-3xl rounded-tl-md bg-[rgba(var(--panel-muted),0.82)] p-4">
              <p className="text-sm">{text.customerReply}</p>
              <p className="mt-2 text-xs text-[rgb(var(--muted))]">{text.customer} · WhatsApp</p>
            </div>
          </div>
          <div className="mt-8 flex items-center gap-3 rounded-2xl border border-[rgba(var(--border),0.58)] bg-[rgba(var(--panel-muted),0.36)] p-3">
            <MessageCircle size={18} className="text-ember-500" />
            <span className="flex-1 text-sm text-[rgb(var(--muted))]">{text.placeholder}</span>
            <Button variant="primary"><Send size={15} />{text.send}</Button>
          </div>
        </Panel>
      </div>
    </MotionShell>
  );
}

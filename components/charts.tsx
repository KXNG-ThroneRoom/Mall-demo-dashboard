"use client";

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { dashboardCopy } from "@/mock-data/dashboard";
import { useLanguage } from "./language-provider";

const tooltipStyle = {
  background: "rgba(10, 12, 17, 0.92)",
  border: "1px solid rgba(227, 56, 90, 0.25)",
  borderRadius: "14px",
  color: "#fff"
};

export function TinyTrend({ data }: { data: number[] }) {
  const points = data.map((value, index) => ({ index, value }));

  return (
    <ResponsiveContainer width="100%" height={50}>
      <AreaChart data={points}>
        <defs>
          <linearGradient id="tinyRed" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e3385a" stopOpacity={0.42} />
            <stop offset="100%" stopColor="#e3385a" stopOpacity={0} />
          </linearGradient>
        </defs>
        <Area type="monotone" dataKey="value" stroke="#e3385a" fill="url(#tinyRed)" strokeWidth={2} dot={false} />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export function ConversationLineChart() {
  const { language } = useLanguage();
  const { conversationsOverTime } = dashboardCopy[language];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={conversationsOverTime}>
        <defs>
          <linearGradient id="allConvos" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e3385a" stopOpacity={0.5} />
            <stop offset="100%" stopColor="#e3385a" stopOpacity={0.03} />
          </linearGradient>
        </defs>
        <CartesianGrid stroke="rgba(127,127,127,0.12)" vertical={false} />
        <XAxis dataKey="day" tickLine={false} axisLine={false} tick={{ fill: "rgb(var(--muted))", fontSize: 12 }} />
        <YAxis tickLine={false} axisLine={false} tick={{ fill: "rgb(var(--muted))", fontSize: 12 }} />
        <Tooltip contentStyle={tooltipStyle} />
        <Area type="monotone" dataKey="all" stroke="#e3385a" fill="url(#allConvos)" strokeWidth={3} />
        <Line type="monotone" dataKey="resolved" stroke="#fb607f" strokeWidth={2} dot={{ r: 3 }} />
        <Line type="monotone" dataKey="missed" stroke="#8b8f9a" strokeWidth={2} dot={{ r: 3 }} />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export function ChannelDonutChart() {
  const { language } = useLanguage();
  const { channelBreakdown } = dashboardCopy[language];
  const totalLabel = language === "es" ? "Total" : "Total";

  return (
    <div className="grid gap-6 md:grid-cols-[1fr_0.9fr] md:items-center">
      <div className="relative h-[255px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={channelBreakdown} dataKey="value" innerRadius={72} outerRadius={104} paddingAngle={1}>
              {channelBreakdown.map((entry) => (
                <Cell key={entry.name} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip contentStyle={tooltipStyle} />
          </PieChart>
        </ResponsiveContainer>
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-3xl font-semibold">12,842</p>
          <p className="text-xs text-[rgb(var(--muted))]">{totalLabel}</p>
        </div>
      </div>
      <div className="space-y-4">
        {channelBreakdown.map((channel) => (
          <div key={channel.name} className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: channel.color }} />
              {channel.name}
            </span>
            <span className="font-medium">{channel.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function AnalyticsBarChart() {
  const { language } = useLanguage();
  const { analyticsBars } = dashboardCopy[language];

  return (
    <ResponsiveContainer width="100%" height={320}>
      <BarChart data={analyticsBars}>
        <CartesianGrid stroke="rgba(127,127,127,0.12)" vertical={false} />
        <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fill: "rgb(var(--muted))", fontSize: 12 }} />
        <YAxis tickLine={false} axisLine={false} tick={{ fill: "rgb(var(--muted))", fontSize: 12 }} />
        <Tooltip contentStyle={tooltipStyle} />
        <Bar dataKey="satisfaction" radius={[12, 12, 0, 0]} fill="#e3385a" />
        <Bar dataKey="capture" radius={[12, 12, 0, 0]} fill="#8b8f9a" />
      </BarChart>
    </ResponsiveContainer>
  );
}

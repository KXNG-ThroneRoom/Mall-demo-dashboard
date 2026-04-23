export const metricCards = [
  {
    label: "Total Conversations",
    value: 12842,
    display: "12,842",
    change: "+24.5%",
    positive: true,
    data: [42, 58, 51, 44, 62, 48, 72, 69]
  },
  {
    label: "Resolution Rate",
    value: 93.6,
    display: "93.6%",
    change: "+8.7%",
    positive: true,
    data: [77, 81, 74, 86, 79, 75, 91, 89]
  },
  {
    label: "Missed Opportunities",
    value: 97,
    display: "97",
    change: "-31.2%",
    positive: true,
    data: [65, 72, 61, 82, 69, 58, 88, 75]
  },
  {
    label: "Revenue Captured",
    value: 284600,
    display: "$284,600",
    change: "+18.3%",
    positive: true,
    data: [38, 49, 43, 36, 57, 42, 71, 66]
  }
];

export const conversationsOverTime = [
  { day: "May 11", all: 720, resolved: 430, missed: 145 },
  { day: "May 12", all: 1010, resolved: 680, missed: 350 },
  { day: "May 13", all: 1088, resolved: 690, missed: 320 },
  { day: "May 14", all: 1520, resolved: 1010, missed: 510 },
  { day: "May 15", all: 1490, resolved: 965, missed: 440 },
  { day: "May 16", all: 1980, resolved: 1320, missed: 690 },
  { day: "May 17", all: 1410, resolved: 970, missed: 420 },
  { day: "May 18", all: 1525, resolved: 680, missed: 360 }
];

export const channelBreakdown = [
  { name: "WhatsApp", value: 45.6, color: "#e3385a" },
  { name: "Voice", value: 27.3, color: "#b84b62" },
  { name: "Web Chat", value: 17.8, color: "#767a83" },
  { name: "Instagram", value: 6.3, color: "#a0a4ad" },
  { name: "Other", value: 3, color: "#4f535c" }
];

export const feedEvents = [
  { title: "Store location inquiry", body: "Customer asked about Zara location", channel: "WhatsApp", time: "Now" },
  { title: "Parking question", body: "Customer asked about parking availability", channel: "Voice", time: "Now" },
  { title: "Event inquiry", body: "Customer asked about upcoming events", channel: "Instagram", time: "1m ago" },
  { title: "Restaurant recommendation", body: "Customer asked for restaurant near cinema", channel: "WhatsApp", time: "2m ago" },
  { title: "Store hours inquiry", body: "Customer asked about holiday hours", channel: "Web Chat", time: "3m ago" }
];

export const topIntents = [
  { name: "Store location", value: 28.5 },
  { name: "Store hours", value: 18.7 },
  { name: "Promotions", value: 14.3 },
  { name: "Parking info", value: 11.2 },
  { name: "Events", value: 9.6 }
];

export const tenantLeads = [
  { type: "Leasing inquiry", tenant: "Fashion", leads: 23 },
  { type: "Pop-up opportunity", tenant: "Food & Beverage", leads: 17 },
  { type: "Marketing partnership", tenant: "Beauty", leads: 12 }
];

export const systemStatus = [
  { name: "Melanie AI", status: "Operational" },
  { name: "Lead Capture", status: "Operational" },
  { name: "Memory OS", status: "Operational" }
];

export const alerts = [
  { title: "High missed calls detected", body: "During 2:00 PM - 4:00 PM", level: "critical" },
  { title: "New tenant lead captured", body: "Fashion brand inquiry", level: "info" }
];

export const threads = [
  { name: "Ava R.", topic: "Parking availability", channel: "Voice", status: "Resolved", last: "2m ago" },
  { name: "Mateo G.", topic: "Nike store location", channel: "WhatsApp", status: "Active", last: "4m ago" },
  { name: "Sophia L.", topic: "Weekend events", channel: "Instagram", status: "Escalated", last: "9m ago" },
  { name: "Noah P.", topic: "Food court hours", channel: "Web Chat", status: "Resolved", last: "14m ago" }
];

export const analyticsBars = [
  { name: "Mon", satisfaction: 88, capture: 64 },
  { name: "Tue", satisfaction: 91, capture: 71 },
  { name: "Wed", satisfaction: 86, capture: 76 },
  { name: "Thu", satisfaction: 94, capture: 83 },
  { name: "Fri", satisfaction: 92, capture: 89 },
  { name: "Sat", satisfaction: 97, capture: 96 },
  { name: "Sun", satisfaction: 93, capture: 88 }
];

export const tenants = [
  { name: "Zara", category: "Fashion", leads: 42, sentiment: "High", revenue: "$48.2K" },
  { name: "Cinemark", category: "Entertainment", leads: 37, sentiment: "High", revenue: "$39.4K" },
  { name: "Sephora", category: "Beauty", leads: 31, sentiment: "Medium", revenue: "$32.7K" },
  { name: "Din Tai Fung", category: "Dining", leads: 28, sentiment: "High", revenue: "$26.1K" },
  { name: "Apple", category: "Technology", leads: 25, sentiment: "Medium", revenue: "$22.8K" }
];

export const campaigns = [
  { name: "Summer Style Concierge", channel: "WhatsApp", conversion: "18.4%", spend: "$12.5K", status: "Live" },
  { name: "Cinema Night Boost", channel: "Instagram", conversion: "12.9%", spend: "$8.1K", status: "Live" },
  { name: "Parking Recovery Flow", channel: "Voice", conversion: "9.7%", spend: "$4.6K", status: "Draft" },
  { name: "Luxury Dining Weekend", channel: "Web Chat", conversion: "15.2%", spend: "$6.9K", status: "Scheduled" }
];

export const knowledgeBase = [
  { title: "Mall Hours & Holidays", type: "Operations", updated: "Today", confidence: 98 },
  { title: "Parking Rules", type: "Facilities", updated: "Yesterday", confidence: 94 },
  { title: "Tenant Directory", type: "Retail", updated: "Today", confidence: 99 },
  { title: "Event Calendar", type: "Marketing", updated: "2 days ago", confidence: 91 },
  { title: "Emergency Procedures", type: "Safety", updated: "Apr 18", confidence: 96 }
];

export const dashboardCopy = {
  en: {
    metricCards,
    conversationsOverTime,
    channelBreakdown,
    feedEvents,
    topIntents,
    tenantLeads,
    systemStatus,
    alerts,
    threads,
    analyticsBars,
    tenants,
    campaigns,
    knowledgeBase
  },
  es: {
    metricCards: [
      { ...metricCards[0], label: "Conversaciones Totales" },
      { ...metricCards[1], label: "Tasa de Resolución" },
      { ...metricCards[2], label: "Oportunidades Perdidas" },
      { ...metricCards[3], label: "Ingresos Capturados" }
    ],
    conversationsOverTime: [
      { day: "11 May", all: 720, resolved: 430, missed: 145 },
      { day: "12 May", all: 1010, resolved: 680, missed: 350 },
      { day: "13 May", all: 1088, resolved: 690, missed: 320 },
      { day: "14 May", all: 1520, resolved: 1010, missed: 510 },
      { day: "15 May", all: 1490, resolved: 965, missed: 440 },
      { day: "16 May", all: 1980, resolved: 1320, missed: 690 },
      { day: "17 May", all: 1410, resolved: 970, missed: 420 },
      { day: "18 May", all: 1525, resolved: 680, missed: 360 }
    ],
    channelBreakdown: [
      { ...channelBreakdown[0] },
      { ...channelBreakdown[1], name: "Voz" },
      { ...channelBreakdown[2], name: "Chat Web" },
      { ...channelBreakdown[3] },
      { ...channelBreakdown[4], name: "Otros" }
    ],
    feedEvents: [
      { title: "Consulta de ubicación de tienda", body: "El cliente preguntó por la ubicación de Zara", channel: "WhatsApp", time: "Ahora" },
      { title: "Pregunta sobre parqueadero", body: "El cliente preguntó por disponibilidad de parqueadero", channel: "Voz", time: "Ahora" },
      { title: "Consulta sobre eventos", body: "El cliente preguntó por próximos eventos", channel: "Instagram", time: "Hace 1m" },
      { title: "Recomendación de restaurante", body: "El cliente pidió un restaurante cerca del cine", channel: "WhatsApp", time: "Hace 2m" },
      { title: "Consulta de horarios", body: "El cliente preguntó por horarios festivos", channel: "Chat Web", time: "Hace 3m" }
    ],
    topIntents: [
      { name: "Ubicación de tienda", value: 28.5 },
      { name: "Horarios de tienda", value: 18.7 },
      { name: "Promociones", value: 14.3 },
      { name: "Información de parqueadero", value: 11.2 },
      { name: "Eventos", value: 9.6 }
    ],
    tenantLeads: [
      { type: "Consulta de arriendo", tenant: "Moda", leads: 23 },
      { type: "Oportunidad pop-up", tenant: "Comidas y bebidas", leads: 17 },
      { type: "Alianza de marketing", tenant: "Belleza", leads: 12 }
    ],
    systemStatus: [
      { name: "Melanie AI", status: "Operacional" },
      { name: "Captura de Leads", status: "Operacional" },
      { name: "Memory OS", status: "Operacional" }
    ],
    alerts: [
      { title: "Alto volumen de llamadas perdidas", body: "Durante 2:00 PM - 4:00 PM", level: "critical" },
      { title: "Nuevo lead de local capturado", body: "Consulta de marca de moda", level: "info" }
    ],
    threads: [
      { name: "Ava R.", topic: "Disponibilidad de parqueadero", channel: "Voz", status: "Resuelto", last: "Hace 2m" },
      { name: "Mateo G.", topic: "Ubicación de Nike", channel: "WhatsApp", status: "Activo", last: "Hace 4m" },
      { name: "Sophia L.", topic: "Eventos del fin de semana", channel: "Instagram", status: "Escalado", last: "Hace 9m" },
      { name: "Noah P.", topic: "Horario de la plazoleta de comidas", channel: "Chat Web", status: "Resuelto", last: "Hace 14m" }
    ],
    analyticsBars: [
      { name: "Lun", satisfaction: 88, capture: 64 },
      { name: "Mar", satisfaction: 91, capture: 71 },
      { name: "Mié", satisfaction: 86, capture: 76 },
      { name: "Jue", satisfaction: 94, capture: 83 },
      { name: "Vie", satisfaction: 92, capture: 89 },
      { name: "Sáb", satisfaction: 97, capture: 96 },
      { name: "Dom", satisfaction: 93, capture: 88 }
    ],
    tenants: [
      { name: "Zara", category: "Moda", leads: 42, sentiment: "Alto", revenue: "$48.2K" },
      { name: "Cinemark", category: "Entretenimiento", leads: 37, sentiment: "Alto", revenue: "$39.4K" },
      { name: "Sephora", category: "Belleza", leads: 31, sentiment: "Medio", revenue: "$32.7K" },
      { name: "Din Tai Fung", category: "Comida", leads: 28, sentiment: "Alto", revenue: "$26.1K" },
      { name: "Apple", category: "Tecnología", leads: 25, sentiment: "Medio", revenue: "$22.8K" }
    ],
    campaigns: [
      { name: "Concierge de Estilo de Verano", channel: "WhatsApp", conversion: "18.4%", spend: "$12.5K", status: "Activa" },
      { name: "Impulso Noche de Cine", channel: "Instagram", conversion: "12.9%", spend: "$8.1K", status: "Activa" },
      { name: "Flujo de Recuperación de Parqueadero", channel: "Voz", conversion: "9.7%", spend: "$4.6K", status: "Borrador" },
      { name: "Fin de Semana de Alta Cocina", channel: "Chat Web", conversion: "15.2%", spend: "$6.9K", status: "Programada" }
    ],
    knowledgeBase: [
      { title: "Horarios del Centro Comercial y Festivos", type: "Operaciones", updated: "Hoy", confidence: 98 },
      { title: "Reglas de Parqueadero", type: "Instalaciones", updated: "Ayer", confidence: 94 },
      { title: "Directorio de Locales", type: "Retail", updated: "Hoy", confidence: 99 },
      { title: "Calendario de Eventos", type: "Marketing", updated: "Hace 2 días", confidence: 91 },
      { title: "Procedimientos de Emergencia", type: "Seguridad", updated: "18 Abr", confidence: 96 }
    ]
  }
};

import {
  Bot,
  TrendingUp,
  RotateCcw,
  Repeat,
  Megaphone,
  MessageCircle,
  KanbanSquare,
  Workflow,
  Headset,
  Sparkles,
  CalendarCheck,
  Wallet,
  type LucideIcon,
} from 'lucide-react';

/** URL de registro / inicio de prueba. Cambia esto si tu dominio cambia. */
export const REGISTER_URL = 'https://app.klientia.app/register';
export const LOGIN_URL = 'https://app.klientia.app/login';
export const registerWithPlan = (plan: 'BRONCE' | 'PLATA' | 'ORO') =>
  `${REGISTER_URL}?plan=${plan}`;

export const NAV_LINKS = [
  { label: 'Características', href: '#caracteristicas' },
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Precios', href: '#precios' },
  { label: 'Preguntas', href: '#faq' },
];

/* ─────────────────────────  CARACTERÍSTICAS  ───────────────────────── */

export type Feature = {
  icon: LucideIcon;
  title: string;
  desc: string;
  accent?: boolean;
};

export const FEATURES: Feature[] = [
  {
    icon: Bot,
    title: 'Vendedor con IA, no un bot de FAQ',
    desc: 'Atiende al instante, entiende qué quiere el cliente, ofrece, cierra la venta y pasa el link de pago. 24/7 y con TU información: nunca se inventa nada.',
    accent: true,
  },
  {
    icon: TrendingUp,
    title: 'Impulsores de venta',
    desc: 'Sube el ticket solo: la versión mejor (upsell), un complemento (cross-sell) o un descuento para no perder la venta (downsell). Con tu mensaje, no genérico.',
  },
  {
    icon: RotateCcw,
    title: 'Recupera carritos solo',
    desc: 'Si el cliente no terminó, la IA le escribe a la 1h, 6h y 24h — con descuento opcional. Ventas que dabas por perdidas, recuperadas.',
  },
  {
    icon: Repeat,
    title: 'Recompra automática',
    desc: 'Días después de la entrega, la IA le vuelve a escribir a tu cliente para que compre de nuevo. Clientes que regresan, sin que muevas un dedo.',
  },
  {
    icon: Megaphone,
    title: 'Campañas por WhatsApp',
    desc: 'Envía promos y novedades a tus contactos con plantillas oficiales aprobadas. Difusión segura, sin arriesgar tu número.',
  },
  {
    icon: MessageCircle,
    title: 'Reimpacto “¿sigues ahí?”',
    desc: 'Cuando una conversación se enfría, la IA la retoma sola con un mensaje amable y la reactiva. Menos chats perdidos a mitad de camino.',
  },
  {
    icon: KanbanSquare,
    title: 'CRM conversacional',
    desc: 'Embudos kanban, etiquetas, tareas, lead scoring y la ficha de cada cliente. Todo tu pipeline de ventas, organizado.',
  },
  {
    icon: Workflow,
    title: 'Automatizaciones',
    desc: 'Reglas “cuando pasa X → haz Y”: etiqueta, mueve en el embudo, asigna o dispara un mensaje. Tú las defines, sin código.',
  },
  {
    icon: Headset,
    title: 'Paso a humano',
    desc: 'Cuando la IA no sabe, el cliente se molesta o pide una persona, pasa el chat a tu equipo y les avisa. Nunca dejas a nadie colgado.',
  },
  {
    icon: Sparkles,
    title: 'Asistencia IA a tu equipo',
    desc: 'La IA también ayuda a tus asesores: resume el chat, sugiere respuestas, reescribe y detecta el ánimo del cliente.',
  },
  {
    icon: CalendarCheck,
    title: 'Agenda de citas',
    desc: 'Define tu horario y tus servicios; la IA consulta disponibilidad y reserva la cita dentro del chat, sin choques de horario.',
  },
  {
    icon: Wallet,
    title: 'Cobros y contra entrega',
    desc: 'Pensado para COD. Conecta MercadoPago en un clic (o Stripe), confirma el pago y mueve la venta en tu embudo automáticamente.',
  },
];

/* ─────────────────────────  BOTS LISTOS  ───────────────────────── */

export const BOT_TYPES = [
  { icon: MessageCircle, name: 'Responde', desc: 'Atiende dudas y responde con tu información, 24/7.' },
  { icon: CalendarCheck, name: 'Agenda', desc: 'Consulta tu horario y reserva citas dentro del chat.' },
  { icon: TrendingUp, name: 'Vende', desc: 'Ofrece, sube el ticket, cierra la venta y cobra.' },
];

export const INDUSTRIES = [
  { emoji: '👗', name: 'Moda' },
  { emoji: '📱', name: 'Tecnología' },
  { emoji: '💄', name: 'Belleza' },
  { emoji: '🍔', name: 'Restaurante' },
  { emoji: '🛠️', name: 'Servicios' },
];

/* ─────────────────────────  CÓMO FUNCIONA  ───────────────────────── */

export const STEPS = [
  {
    n: '01',
    title: 'Conecta tu WhatsApp',
    desc: 'Enlazas tu número en minutos. No cambias de chip ni de app: la IA vive dentro de tu mismo WhatsApp.',
  },
  {
    n: '02',
    title: 'Elige un bot y sube tu catálogo',
    desc: 'Activa un bot experto de tu industria en 1 clic (moda, tech, belleza…), sube productos e impulsores y ajusta cómo quieres que venda. Sin código.',
  },
  {
    n: '03',
    title: 'La IA atiende, vende y cobra',
    desc: 'Desde ese momento responde sola 24/7, cierra ventas, manda el link de pago y recupera carritos. Tú solo ves entrar los pedidos.',
  },
];

/* ─────────────────────────  PLANES  ───────────────────────── */

export type Plan = {
  id: 'BRONCE' | 'PLATA' | 'ORO';
  name: string;
  /** Precios en USD (misma fuente que el panel/Paddle). El anual = 10 meses (2 gratis). */
  priceMonthly: string;
  priceYearly: string;
  tagline: string;
  popular?: boolean;
  features: string[];
  cta: string;
};

export const PLANS: Plan[] = [
  {
    id: 'BRONCE',
    name: 'Responde',
    priceMonthly: '9.99',
    priceYearly: '99.90',
    tagline: 'El bot que atiende y responde por ti, 24/7.',
    features: [
      'Agente de IA que responde con tu información, 24/7',
      'Bots listos por industria, en 1 clic',
      'CRM conversacional (etiquetas, tareas, lead scoring)',
      'Automatizaciones “cuando pasa X → haz Y”',
      'Paso a humano con aviso a tu equipo',
    ],
    cta: 'Empezar gratis',
  },
  {
    id: 'PLATA',
    name: 'Agenda',
    priceMonthly: '19.99',
    priceYearly: '199.90',
    tagline: 'Suma citas: el bot que agenda por ti.',
    features: [
      'Todo lo de Responde',
      'Agendamiento de citas dentro del chat',
      'Servicios con precio y duración',
      'Calendario semanal en tu panel',
      'Horario de atención configurable',
    ],
    cta: 'Empezar gratis',
  },
  {
    id: 'ORO',
    name: 'Vende',
    priceMonthly: '39.99',
    priceYearly: '399.90',
    tagline: 'El completo: el bot que vende, cobra y recupera.',
    popular: true,
    features: [
      'Todo lo de Agenda',
      'Catálogo + impulsores (upsell, cross-sell, downsell)',
      'Cobros: MercadoPago, Stripe y contra entrega',
      'Recuperación de carritos + recompra automática',
      'Campañas por WhatsApp con plantillas oficiales',
    ],
    cta: 'Empezar gratis',
  },
];

/* ─────────────────────────  DIFERENCIADORES  ───────────────────────── */

export const DIFFERENTIATORS = [
  {
    title: 'La IA vende y cobra de verdad',
    desc: 'No es un chatbot de preguntas frecuentes: ofrece, cierra la venta y pasa el link de pago. Resultados, no respuestas.',
  },
  {
    title: 'Empieza en minutos, no en semanas',
    desc: 'Bots expertos listos por industria en 1 clic. Ya saben vender en tu rubro; tú solo los ajustas a tu gusto.',
  },
  {
    title: 'Hecho para LATAM y contra entrega',
    desc: 'Pensado para vender COD, en español, a un precio accesible para tiendas y dropshippers de la región.',
  },
  {
    title: 'Todo tu WhatsApp en un solo lugar',
    desc: 'Vende, recupera, hace campañas, agenda y organiza tu CRM — sin saltar entre cinco herramientas distintas.',
  },
  {
    title: 'Cada negocio configura lo suyo',
    desc: 'Catálogo, mensajes, reglas e impulsores: todo es tuyo. La IA vende como vendes tú, no como una plantilla.',
  },
];

/* ─────────────────────────  TESTIMONIOS  ───────────────────────── */

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  location: string;
  flag: string;
  initials: string;
  image: string;
  metric: string;
};

/** Fotos lifestyle (IA) reutilizadas en el hero como prueba social. */
export const AVATARS = ['/images/ph-maria.jpg', '/images/ph-andres.jpg', '/images/ph-camila.jpg'];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Antes perdía todas las ventas de la madrugada porque nadie respondía. Ahora amanezco con pedidos ya cobrados. Es como tener un vendedor que no duerme.',
    name: 'María José Rincón',
    role: 'Tienda de cosmética',
    location: 'Bogotá',
    flag: '🇨🇴',
    initials: 'MJ',
    image: '/images/ph-maria.jpg',
    metric: '+38% ventas nocturnas',
  },
  {
    quote:
      'Los impulsores suben el ticket solos. La IA ofrece el combo justo en el momento justo y el cliente dice que sí. Subimos el promedio de pedido sin contratar a nadie.',
    name: 'Andrés Beltrán',
    role: 'Accesorios y tecnología',
    location: 'Ciudad de México',
    flag: '🇲🇽',
    initials: 'AB',
    image: '/images/ph-andres.jpg',
    metric: '+23% ticket promedio',
  },
  {
    quote:
      'Recuperó carritos que yo daba por perdidos y ahora la recompra me trae clientes de vuelta solita. Se paga solo el primer mes.',
    name: 'Camila Fuentes',
    role: 'Moda y ropa femenina',
    location: 'Santiago',
    flag: '🇨🇱',
    initials: 'CF',
    image: '/images/ph-camila.jpg',
    metric: '1 de cada 4 carritos recuperado',
  },
];

/* ─────────────────────────  FAQ  ───────────────────────── */

export const FAQS = [
  {
    q: '¿Necesito tarjeta de crédito para la prueba?',
    a: 'No. Empiezas tu prueba de 7 días gratis sin tarjeta. Solo agregas un método de pago si decides continuar.',
  },
  {
    q: '¿Necesito saber de tecnología o programar?',
    a: 'Para nada. Todo está en español y es sin código. Conectas tu WhatsApp, eliges un bot listo de tu industria y subes tu catálogo: si sabes usar WhatsApp, sabes usar esto.',
  },
  {
    q: '¿Puedo enviar promociones o campañas a mis clientes?',
    a: 'Sí. Envías campañas por WhatsApp con plantillas oficiales aprobadas (difusión segura, sin arriesgar tu número). Y la IA hace recompra automática: le vuelve a escribir a quien ya te compró para que regrese.',
  },
  {
    q: '¿En qué países funciona?',
    a: 'En toda LATAM: Colombia, México, Chile, Perú, Ecuador, Argentina y más. Está pensado para la forma de vender de la región, incluyendo contra entrega.',
  },
  {
    q: '¿Puedo cancelar cuando quiera?',
    a: 'Sí. No hay contratos ni permanencia. Cancelas cuando quieras desde tu cuenta, sin llamadas ni trámites.',
  },
  {
    q: '¿Sirve para contra entrega (COD)?',
    a: 'Sí, está diseñado para contra entrega. La IA toma el pedido y confirma los datos; y si prefieres pago anticipado, conecta MercadoPago en un clic o Stripe.',
  },
  {
    q: '¿La IA se inventa cosas o responde con mi información?',
    a: 'Responde solo con tu catálogo y tu base de conocimiento. Tú defines los precios, los mensajes de venta y las reglas: la IA vende como tu marca, sin inventar. Y si no sabe algo, pasa el chat a tu equipo.',
  },
];

export const COUNTRIES = [
  { flag: '🇨🇴', name: 'Colombia' },
  { flag: '🇲🇽', name: 'México' },
  { flag: '🇨🇱', name: 'Chile' },
  { flag: '🇵🇪', name: 'Perú' },
  { flag: '🇪🇨', name: 'Ecuador' },
  { flag: '🇦🇷', name: 'Argentina' },
];

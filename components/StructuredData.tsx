import { PLANS, FAQS, REGISTER_URL } from '@/lib/content';

const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.klientia.app';

export default function StructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE}#organization`,
        name: 'Klientia',
        url: SITE,
        description:
          'SaaS de ventas por WhatsApp con inteligencia artificial para negocios de LATAM: la IA atiende, vende, cobra y recupera carritos.',
        areaServed: ['CO', 'MX', 'CL', 'PE', 'EC', 'AR'],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE}#website`,
        url: SITE,
        name: 'Klientia',
        inLanguage: 'es',
        publisher: { '@id': `${SITE}#organization` },
      },
      {
        '@type': 'SoftwareApplication',
        name: 'Klientia',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web, WhatsApp',
        inLanguage: 'es',
        description:
          'Vendedor con IA para WhatsApp: atiende al instante, vende con impulsores (upsell, cross-sell, downsell), cobra (MercadoPago, Stripe, contra entrega) y recupera carritos automáticamente. Incluye CRM y automatizaciones.',
        url: SITE,
        offers: PLANS.map((p) => ({
          '@type': 'Offer',
          name: `Plan ${p.name}`,
          price: p.price.replace(/\./g, ''),
          priceCurrency: 'COP',
          url: `${REGISTER_URL}?plan=${p.id}`,
          category: 'subscription',
        })),
      },
      {
        '@type': 'FAQPage',
        mainEntity: FAQS.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

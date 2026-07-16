import { Check, ArrowRight } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { PLANS, registerWithPlan, EXTRA_CONVERSATION_USD } from '@/lib/content';

export default function Pricing() {
  return (
    <section id="precios" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Planes y precios"
          title={
            <>
              Elige tu plan y <span className="text-brand-600">empieza gratis 7 días</span>
            </>
          }
          subtitle="Precio de lanzamiento por tiempo limitado. Empiezas con 7 días gratis, sin tarjeta; el cobro llega solo al terminar la prueba. Precios en dólares (USD)."
        />

        <div className="mx-auto mt-14 grid max-w-5xl items-start gap-6 lg:grid-cols-3">
          {PLANS.map((plan, i) => {
            const pop = plan.popular;
            return (
              <Reveal key={plan.id} delay={i * 90} className="h-full">
                <div
                  className={`relative flex h-full flex-col rounded-3xl p-8 ${
                    pop ? 'bg-ink text-white shadow-lift lg:-mt-3 lg:pb-10 lg:pt-10' : 'border border-line bg-surface'
                  }`}
                >
                  {pop && (
                    <span className="absolute -top-3 left-8 inline-flex items-center rounded-full bg-brand-600 px-3 py-1 text-[11.5px] font-bold uppercase tracking-wide text-white">
                      Más popular
                    </span>
                  )}

                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className={`text-[20px] font-bold tracking-tight ${pop ? 'text-white' : 'text-ink'}`}>{plan.name}</h3>
                    <span className={`shrink-0 text-[12px] font-semibold uppercase tracking-wide ${pop ? 'text-brand-300' : 'text-emerald-600'}`}>
                      7 días gratis
                    </span>
                  </div>
                  <p className={`mt-1.5 text-[14px] ${pop ? 'text-white/60' : 'text-ink-mute'}`}>{plan.tagline}</p>

                  <div className="mt-6 flex flex-wrap items-end gap-x-1.5 gap-y-1">
                    <span className={`text-[15px] font-semibold ${pop ? 'text-white/60' : 'text-ink-faint'}`}>$</span>
                    <span className={`text-[2.75rem] font-bold leading-none tracking-tight ${pop ? 'text-white' : 'text-ink'}`}>
                      {plan.priceLaunch}
                    </span>
                    <span className={`mb-1 text-[14px] ${pop ? 'text-white/60' : 'text-ink-mute'}`}>USD/mes</span>
                    <span className={`mb-1 ml-1 text-[15px] font-medium line-through ${pop ? 'text-white/45' : 'text-ink-faint'}`}>
                      ${plan.priceList}
                    </span>
                  </div>
                  <span className={`mt-2 inline-flex w-fit items-center rounded-full px-2.5 py-1 text-[11.5px] font-semibold ${pop ? 'bg-brand-500/25 text-brand-100' : 'bg-brand-50 text-brand-700'}`}>
                    Precio de lanzamiento
                  </span>
                  <p className={`mt-3 text-[13px] leading-snug ${pop ? 'text-white/70' : 'text-ink-soft'}`}>
                    o <span className="font-semibold">${plan.priceYearly}/año</span>
                    <span className={`ml-1.5 rounded-full px-2 py-0.5 text-[11.5px] font-semibold ${pop ? 'bg-white/15 text-white' : 'bg-emerald-50 text-emerald-700'}`}>
                      2 meses gratis
                    </span>
                  </p>
                  <p className={`mt-2 text-[12.5px] leading-snug ${pop ? 'text-white/65' : 'text-ink-mute'}`}>
                    {plan.conversations} conversaciones/mes · extra ${EXTRA_CONVERSATION_USD} c/u
                  </p>
                  <p className={`mt-1 text-[12px] leading-snug ${pop ? 'text-white/50' : 'text-ink-faint'}`}>
                    Se cobra al terminar tu prueba de 7 días
                  </p>

                  <a
                    href={registerWithPlan(plan.id)}
                    className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-[15px] font-semibold transition-all duration-200 hover:-translate-y-px ${
                      pop ? 'bg-white text-ink hover:bg-white/90' : 'border border-ink bg-ink text-white hover:bg-ink/90'
                    }`}
                  >
                    {plan.cta} <ArrowRight className="h-4 w-4" />
                  </a>

                  <div className={`mt-7 border-t pt-6 ${pop ? 'border-white/15' : 'border-line'}`}>
                    <ul className="space-y-3.5">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5">
                          <Check
                            className={`mt-0.5 h-[18px] w-[18px] shrink-0 ${pop ? 'text-brand-300' : 'text-emerald-600'}`}
                            strokeWidth={2.5}
                          />
                          <span className={`text-[14.5px] leading-snug ${pop ? 'text-white/80' : 'text-ink-mute'}`}>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-[13.5px] leading-relaxed text-ink-faint">
          Cada plan incluye un cupo de conversaciones al mes; si lo superas, cada conversación
          adicional cuesta ${EXTRA_CONVERSATION_USD}. El precio de lanzamiento aplica por tiempo limitado ·
          7 días de prueba gratis · sin tarjeta · cancela cuando quieras.
        </p>
      </div>
    </section>
  );
}

import Logo from './Logo';
import { NAV_LINKS, REGISTER_URL, COUNTRIES } from '@/lib/content';

const COLS = [
  { title: 'Producto', links: NAV_LINKS },
  {
    title: 'Recursos',
    links: [
      { label: 'Empezar gratis', href: REGISTER_URL },
      { label: 'Iniciar sesión', href: REGISTER_URL },
      { label: 'Soporte', href: REGISTER_URL },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Términos', href: '#' },
      { label: 'Privacidad', href: '#' },
      { label: 'Tratamiento de datos', href: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="hairline-t bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="max-w-xs">
            <Logo className="h-10" />
            <p className="mt-4 text-[14.5px] leading-relaxed text-ink-mute">
              El vendedor con IA para tu WhatsApp. Atiende, vende, cobra y recupera carritos por ti. Hecho para LATAM.
            </p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {COUNTRIES.map((c) => (
                <span key={c.name} title={c.name} className="text-[17px] leading-none">
                  {c.flag}
                </span>
              ))}
            </div>
          </div>

          {COLS.map((col) => (
            <div key={col.title}>
              <h3 className="text-[12.5px] font-semibold uppercase tracking-[0.12em] text-ink-faint">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-[14.5px] text-ink-mute transition-colors hover:text-ink">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-line pt-7 sm:flex-row">
          <p className="text-[13.5px] text-ink-faint">© 2026 Klientia. Todos los derechos reservados.</p>
          <p className="text-[13.5px] text-ink-faint">Hecho para emprendedores de LATAM</p>
        </div>
      </div>
    </footer>
  );
}

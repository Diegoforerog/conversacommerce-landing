'use client';

import { useEffect, useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import Logo from './Logo';
import { NAV_LINKS, REGISTER_URL } from '@/lib/content';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-colors duration-300 ${
          scrolled ? 'border-b border-line bg-surface/80 backdrop-blur-xl' : 'border-b border-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
          <a href="#top" aria-label="Klientia — inicio">
            <Logo className="h-10 sm:h-11" />
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[15px] font-medium text-ink-mute transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <a href={REGISTER_URL} className="text-[15px] font-semibold text-ink transition-colors hover:text-brand-600">
              Ingresar
            </a>
            <a href={REGISTER_URL} className="btn-primary">
              Prueba gratis <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-line2 bg-surface text-ink lg:hidden"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {open && (
          <div className="border-t border-line bg-surface px-5 py-4 lg:hidden">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2.5 text-[15px] font-medium text-ink-soft hover:bg-subtle"
                >
                  {link.label}
                </a>
              ))}
              <a href={REGISTER_URL} className="btn-primary mt-2 w-full" onClick={() => setOpen(false)}>
                Prueba gratis 7 días <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

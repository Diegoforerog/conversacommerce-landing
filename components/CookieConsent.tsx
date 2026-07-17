'use client';

import { useEffect, useState } from 'react';
import { getConsent, setConsent } from '@/lib/consent';

// Solo tiene sentido pedir consentimiento si hay algún pixel configurado.
const HAS_PIXELS = !!(
  process.env.NEXT_PUBLIC_META_PIXEL_ID ||
  process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID ||
  process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID
);

/**
 * Banner de consentimiento de cookies de marketing. Opt-in explícito: los pixeles solo
 * cargan si el usuario acepta. Se muestra una vez; la elección queda guardada.
 */
export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (HAS_PIXELS && getConsent() === null) setVisible(true);
  }, []);

  if (!visible) return null;

  function choose(choice: 'granted' | 'denied') {
    setConsent(choice);
    setVisible(false);
  }

  return (
    <div className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-xl rounded-2xl border border-brand-200 bg-white p-4 shadow-lg sm:inset-x-auto sm:right-4">
      <p className="text-sm text-ink-mute">
        Usamos cookies para medir de dónde llegan nuestros visitantes y mejorar la
        publicidad. Puedes aceptarlas o seguir sin ellas.
      </p>
      <div className="mt-3 flex justify-end gap-2">
        <button
          type="button"
          onClick={() => choose('denied')}
          className="rounded-xl border border-brand-200 px-3 py-1.5 text-sm font-medium text-ink-mute transition hover:bg-brand-50"
        >
          Seguir sin cookies
        </button>
        <button
          type="button"
          onClick={() => choose('granted')}
          className="rounded-xl bg-brand-600 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-brand-700"
        >
          Aceptar
        </button>
      </div>
    </div>
  );
}

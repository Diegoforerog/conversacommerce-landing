// Reenvío de atribución de marketing landing → app. Los identificadores del clic del
// anuncio (fbclid/gclid/ttclid + UTM) llegan en la URL de la landing; hay que pasarlos
// al enlace de registro (app.klientia.app) para no perderlos en el salto de dominio.
// (Las cookies _fbp/_ga sí cruzan solas porque se fijan en .klientia.app.)

export const TRACKING_PARAMS = [
  'fbclid',
  'gclid',
  'ttclid',
  'gbraid',
  'wbraid',
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
] as const;

/** Query string (sin '?') con los parámetros de tracking presentes en la URL actual. */
export function currentTrackingQuery(): string {
  if (typeof window === 'undefined') return '';
  const src = new URLSearchParams(window.location.search);
  const out = new URLSearchParams();
  for (const k of TRACKING_PARAMS) {
    const v = src.get(k);
    if (v) out.set(k, v.slice(0, 512));
  }
  return out.toString();
}

/**
 * Añade los parámetros de tracking actuales a todos los enlaces que apuntan a
 * app.klientia.app (registro/login), conservando los que ya llevan (p.ej. ?plan=ORO).
 */
export function forwardTrackingToAppLinks(): void {
  if (typeof window === 'undefined') return;
  const query = currentTrackingQuery();
  if (!query) return;
  const params = new URLSearchParams(query);
  const anchors = document.querySelectorAll<HTMLAnchorElement>('a[href*="app.klientia.app"]');
  anchors.forEach((a) => {
    try {
      const url = new URL(a.href);
      params.forEach((value, key) => {
        if (!url.searchParams.has(key)) url.searchParams.set(key, value);
      });
      a.href = url.toString();
    } catch {
      // href raro: lo dejamos como está
    }
  });
}

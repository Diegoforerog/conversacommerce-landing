// Consentimiento de cookies de marketing (pixeles). Opt-in explícito: los pixeles NO
// cargan hasta que el usuario acepta. La elección queda en localStorage.

export type ConsentChoice = 'granted' | 'denied';

const KEY = 'kl_consent';
export const CONSENT_EVENT = 'kl-consent-changed';

export function getConsent(): ConsentChoice | null {
  if (typeof window === 'undefined') return null;
  try {
    const v = localStorage.getItem(KEY);
    return v === 'granted' || v === 'denied' ? v : null;
  } catch {
    return null;
  }
}

export function setConsent(choice: ConsentChoice): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(KEY, choice);
  } catch {
    // modo privado: igual avisamos por si el cargador escucha
  }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: choice }));
}

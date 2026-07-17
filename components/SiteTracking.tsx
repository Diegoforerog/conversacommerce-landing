'use client';

import { useEffect } from 'react';
import { CONSENT_EVENT, getConsent } from '@/lib/consent';
import { forwardTrackingToAppLinks } from '@/lib/tracking';

// IDs de pixel públicos (aparecen en el HTML de todos modos). Deben coincidir con los
// del backend (KLIENTIA_*): así GA4 comparte la sesión del clic entre www. y app.
const META = process.env.NEXT_PUBLIC_META_PIXEL_ID || '';
const TIKTOK = process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID || '';
const GA4 = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID || '';

/* eslint-disable @typescript-eslint/no-explicit-any */
type AnyWin = Record<string, any>;

let pixelsLoaded = false;

/**
 * Pixel propio de Klientia en la LANDING (medir nuestra pauta). Reenvía el clic del
 * anuncio a los enlaces de registro (siempre, no fija cookies) y carga los scripts de
 * Meta/TikTok/GA4 solo tras el consentimiento. La "Compra" la manda el servidor cuando
 * Paddle confirma; aquí solo medimos PageView y el clic hacia el registro.
 */
export function SiteTracking() {
  useEffect(() => {
    // 1) Reenviar el clic a los enlaces del app (no requiere consentimiento: sin cookies).
    forwardTrackingToAppLinks();
    // Reintento por si algún enlace se monta un poco después.
    const t = setTimeout(forwardTrackingToAppLinks, 800);

    // 2) Cargar pixeles solo con consentimiento.
    const load = () => {
      if (pixelsLoaded || getConsent() !== 'granted') return;
      pixelsLoaded = true;
      if (META) injectMeta(META);
      if (TIKTOK) injectTikTok(TIKTOK);
      if (GA4) injectGa4(GA4);
    };
    load();
    window.addEventListener(CONSENT_EVENT, load);
    return () => {
      clearTimeout(t);
      window.removeEventListener(CONSENT_EVENT, load);
    };
  }, []);

  return null;
}

function injectMeta(id: string) {
  const w = window as unknown as AnyWin;
  if (w.fbq) return;
  const n: any = function (...args: unknown[]) {
    n.callMethod ? n.callMethod.apply(n, args) : n.queue.push(args);
  };
  w.fbq = n;
  if (!w._fbq) w._fbq = n;
  n.push = n;
  n.loaded = true;
  n.version = '2.0';
  n.queue = [];
  const s = document.createElement('script');
  s.async = true;
  s.src = 'https://connect.facebook.net/en_US/fbevents.js';
  document.head.appendChild(s);
  w.fbq('init', id);
  w.fbq('track', 'PageView');
}

function injectGa4(id: string) {
  const w = window as unknown as AnyWin;
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
  document.head.appendChild(s);
  w.dataLayer = w.dataLayer || [];
  w.gtag = function (...args: unknown[]) {
    w.dataLayer.push(args);
  };
  w.gtag('js', new Date());
  // cookie_domain 'auto' → _ga en .klientia.app, compartido con app. (coser el clic).
  w.gtag('config', id, { cookie_domain: 'auto' });
}

function injectTikTok(id: string) {
  const w = window as unknown as AnyWin;
  if (w.ttq) return;
  w.TiktokAnalyticsObject = 'ttq';
  const ttq: any = (w.ttq = w.ttq || []);
  ttq.methods = [
    'page',
    'track',
    'identify',
    'instances',
    'debug',
    'on',
    'off',
    'once',
    'ready',
    'alias',
    'group',
    'enableCookie',
    'disableCookie',
    'holdConsent',
    'revokeConsent',
    'grantConsent',
  ];
  ttq.setAndDefer = function (t: any, e: any) {
    t[e] = function (...args: unknown[]) {
      t.push([e].concat(args));
    };
  };
  for (let i = 0; i < ttq.methods.length; i++) ttq.setAndDefer(ttq, ttq.methods[i]);
  ttq.load = function (e: string) {
    const u = 'https://analytics.tiktok.com/i18n/pixel/events.js';
    ttq._i = ttq._i || {};
    ttq._i[e] = [];
    ttq._i[e]._u = u;
    ttq._t = ttq._t || {};
    ttq._t[e] = +new Date();
    ttq._o = ttq._o || {};
    ttq._o[e] = {};
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = `${u}?sdkid=${e}&lib=ttq`;
    const first = document.getElementsByTagName('script')[0];
    first.parentNode?.insertBefore(s, first);
  };
  ttq.load(id);
  ttq.page();
}

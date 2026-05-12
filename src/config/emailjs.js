import emailjs from '@emailjs/browser';

/**
 * EmailJS — where each value lives (copy exactly, no spaces):
 * - Public key: https://dashboard.emailjs.com/admin/account → "Public Key"
 * - Service ID: Email Services → open your service → "Service ID" (starts with service_)
 * - Template ID: Email Templates → open your template → "Template ID" (starts with template_)
 *
 * Optional overrides (restart dev server after changes):
 *   VITE_EMAILJS_PUBLIC_KEY, VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID
 */
export const EMAILJS_PUBLIC_KEY =
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'rl5-5EWhF22Km5XjP';
export const EMAILJS_SERVICE_ID =
  import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_ifz1z0m';
export const EMAILJS_TEMPLATE_BOOKING =
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_0tmahsn';

let initialized = false;

/**
 * In dev, requests go to /api/emailjs (Vite proxy → api.emailjs.com) to avoid
 * browser/extension/firewall issues reaching EmailJS directly.
 * Override with VITE_EMAILJS_API_ORIGIN if you use your own proxy in production.
 */
export function getEmailJsOrigin() {
  const fromEnv = import.meta.env.VITE_EMAILJS_API_ORIGIN?.replace(/\/$/, '');
  if (fromEnv) return fromEnv;
  if (import.meta.env.DEV) {
    return `${window.location.origin}/api/emailjs`;
  }
  return 'https://api.emailjs.com';
}

export function initEmailJs() {
  if (initialized) return;
  initialized = true;
  emailjs.init({
    publicKey: EMAILJS_PUBLIC_KEY,
    origin: getEmailJsOrigin(),
  });
}

const sendOptions = () => ({
  publicKey: EMAILJS_PUBLIC_KEY,
});

/** One API call per submit — retries were removed (each retry billed; timeouts could duplicate sends). */
export function sendBookingInquiry(templateParams) {
  initEmailJs();
  return emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_BOOKING,
    templateParams,
    sendOptions(),
  );
}

/** Same EmailJS service/template as booking; template should show these as a list signup. */
export function sendNewsletterSignup(subscriberEmail) {
  initEmailJs();
  const templateParams = {
    from_name: 'Newsletter signup',
    from_email: subscriberEmail.trim(),
    destination: 'Footer mailing list',
    travel_date: '—',
    return_date: '—',
    to_name: 'Queen Travel Fairy Team',
  };
  return emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_BOOKING,
    templateParams,
    sendOptions(),
  );
}

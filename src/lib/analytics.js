import { track } from "@vercel/analytics";

// Sends the event to Vercel Analytics and GA4 (if configured). Never breaks the page.
export function trackEvent(name, props = {}) {
  try {
    track(name, props);
  } catch {}
  try {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", name, props);
    }
  } catch {}
}
"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { GoogleAnalytics } from "@next/third-parties/google";

const KEY = "viraj-consent";
const EVENT = "viraj-consent-change";

function subscribe(cb) {
  window.addEventListener(EVENT, cb);
  return () => window.removeEventListener(EVENT, cb);
}
function getSnapshot() {
  try {
    return localStorage.getItem(KEY) || "unset";
  } catch {
    return "unset";
  }
}
// During server rendering and hydration we don't know yet, so show nothing
function getServerSnapshot() {
  return "loading";
}

export default function ConsentAnalytics({ gaId }) {
  const consent = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const choose = (value) => {
    try {
      localStorage.setItem(KEY, value);
    } catch {}
    window.dispatchEvent(new Event(EVENT));
  };

  if (!gaId) return null;

  return (
    <>
      {consent === "granted" && <GoogleAnalytics gaId={gaId} />}

      {consent === "unset" && (
        <div
          role="dialog"
          aria-label="Cookie consent"
          className="fixed inset-x-4 bottom-4 z-50 rounded-2xl border border-line bg-white p-5 shadow-xl sm:left-4 sm:right-auto sm:max-w-sm print:hidden"
        >
          <p className="text-sm text-ink">
            I use analytics cookies to see which pages help visitors, so I can
            improve the site.{" "}
            <Link href="/privacy" className="text-primary underline">
              Privacy policy
            </Link>
          </p>
          <div className="mt-4 flex gap-3">
            <button
              type="button"
              onClick={() => choose("granted")}
              className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white hover:bg-primary-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Accept
            </button>
            <button
              type="button"
              onClick={() => choose("denied")}
              className="rounded-full border border-line px-5 py-2 text-sm font-semibold hover:bg-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Decline
            </button>
          </div>
        </div>
      )}
    </>
  );
}
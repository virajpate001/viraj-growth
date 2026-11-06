"use client";

import { useState } from "react";
import { Lock, MessageCircle } from "lucide-react";
import Button from "../Button";
import { trackEvent } from "@/lib/analytics";
import { whatsappUrl, planMessage } from "@/lib/whatsapp";

export const UNLOCK_KEY = "viraj-analyzer-unlocked";

export default function ReportGate({ unlocked, onUnlock, code, score = null, children }) {
  const [status, setStatus] = useState("idle"); // idle | sending | error

  if (unlocked) return <>{children}</>;

  async function submit(e) {
    e.preventDefault();
    setStatus("sending");
    const fd = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "report",
          name: fd.get("name"),
          email: fd.get("email"),
          website: fd.get("website"), // honeypot
          code,
        }),
      });
      if (!res.ok) throw new Error("failed");
      trackEvent("report_email_submit");
      onUnlock();
    } catch {
      setStatus("error");
    }
  }

  function unlockOnWhatsApp() {
    const reportUrl = `${window.location.origin}/analyzer/report?r=${encodeURIComponent(code)}&u=1`;
    const url = whatsappUrl(planMessage({ score, reportUrl }));

    trackEvent("report_whatsapp_unlock", { score });

    // Open inside the click so browsers don't block it, then unlock this page
    const win = window.open(url, "_blank");
    if (win) win.opener = null;
    else window.location.href = url; // popup blocked: continue in this tab
    onUnlock();
  }

  const input =
    "w-full rounded-xl border border-line bg-bg px-4 py-3 text-sm text-ink placeholder:text-subtle focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20";

  return (
    <div className="relative h-[840px] overflow-hidden sm:h-[740px]">
      {/* Blurred preview of the locked content */}
      <div aria-hidden="true" className="pointer-events-none select-none blur-sm">
        {children}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-bg/30 via-bg/90 to-bg" />

      <div className="absolute inset-x-0 top-8 z-10 px-5">
        <div className="mx-auto max-w-md rounded-2xl border border-line bg-elevated p-6 shadow-2xl">
          <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
            <Lock size={22} />
          </div>
          <h2 className="text-2xl">Unlock your full action plan</h2>
          <p className="mt-2 text-sm text-muted">
            Get your quick wins, revenue estimate and 30/60/90-day roadmap. Choose email
            or WhatsApp, whichever you prefer.
          </p>

          <form onSubmit={submit} className="mt-5 space-y-3">
            <input name="name" type="text" aria-label="Your first name" placeholder="Your first name (optional)" autoComplete="given-name" maxLength={100} className={input} />
            <input name="email" type="email" required aria-label="Your email" placeholder="Your email" autoComplete="email" maxLength={200} className={input} />
            {/* Honeypot, hidden from real users */}
            <input name="website" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute left-[-9999px]" />
            <Button type="submit" disabled={status === "sending"} className="w-full disabled:opacity-60">
              {status === "sending" ? "Sending..." : "Unlock and email me the report"}
            </Button>
          </form>

          {status === "error" && (
            <p className="mt-3 text-sm text-red-400" role="alert">
              We couldn&apos;t send the email. Try WhatsApp below, or skip and view your report.
            </p>
          )}

          <div className="my-5 flex items-center gap-3 text-xs text-subtle" aria-hidden="true">
            <span className="h-px flex-1 bg-line" />
            or
            <span className="h-px flex-1 bg-line" />
          </div>

          <Button type="button" variant="outline" onClick={unlockOnWhatsApp} className="w-full">
            <MessageCircle size={18} aria-hidden="true" />
            Unlock on WhatsApp
          </Button>
          <p className="mt-2 text-center text-xs text-subtle">
            Opens WhatsApp with your score and report link ready to send.
          </p>

          <button
            type="button"
            onClick={() => {
              trackEvent("report_skip");
              onUnlock();
            }}
            className="mt-5 w-full text-center text-sm text-muted underline transition-colors hover:text-ink"
          >
            Skip for now, just show me
          </button>
        </div>
      </div>
    </div>
  );
}
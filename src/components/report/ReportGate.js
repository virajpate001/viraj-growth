"use client";

import { useState } from "react";
import { Lock } from "lucide-react";
import Button from "../Button";
import { trackEvent } from "@/lib/analytics";
export const UNLOCK_KEY = "viraj-analyzer-unlocked";

export default function ReportGate({ unlocked, onUnlock, code, children }) {
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

  const input =
    "w-full rounded-xl border border-line bg-white px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

  return (
    <div className="relative h-[680px] overflow-hidden sm:h-[600px]">
      {/* Blurred preview of the locked content */}
      <div aria-hidden="true" className="pointer-events-none select-none blur-sm">
        {children}
      </div>
      <div className="absolute inset-0  from-white/30 via-white/90 to-white" />

      <div className="absolute inset-x-0 top-8 z-10 px-5">
        <div className="mx-auto max-w-md rounded-2xl border border-line bg-white p-6 shadow-xl">
          <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Lock size={22} />
          </div>
          <h2 className="text-xl font-bold">Unlock your full action plan</h2>
          <p className="mt-2 text-sm text-muted">
            Get your quick wins, revenue estimate and 30/60/90-day roadmap. We&apos;ll
            email you a copy and you can download it as a PDF.
          </p>

          <form onSubmit={submit} className="mt-5 space-y-3">
            <input name="name" aria-label="Your first name" type="text" placeholder="Your first name (optional)" autoComplete="given-name" maxLength={100} className={input} />
            <input name="email" aria-label="Your email" type="email" required placeholder="Your email" autoComplete="email" maxLength={200} className={input} />
            {/* Honeypot, hidden from real users */}
            <input name="website" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute left-[-9999px]" />
            <Button type="submit" disabled={status === "sending"} className="w-full disabled:opacity-60">
              {status === "sending" ? "Sending..." : "Unlock and email me the report"}
            </Button>
          </form>

          {status === "error" && (
            <p className="mt-3 text-sm text-red-600" role="alert">
              We couldn&apos;t send the email, but you can still view your report below.
            </p>
          )}

          <button type="button" onClick={() => { trackEvent("report_skip"); onUnlock(); }} className="mt-4 w-full text-center text-sm text-muted underline hover:text-ink">
            Skip for now, just show me
          </button>
          <p className="mt-3 text-center text-xs text-muted">
            No spam. I&apos;ll only email you about your report.
          </p>
        </div>
      </div>
    </div>
  );
}
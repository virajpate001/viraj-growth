"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import Button from "./Button";
import { services } from "@/data/content";
import { trackEvent } from "@/lib/analytics";
import { whatsappUrl, buildContactMessage } from "@/lib/whatsapp";

const budgets = [
  "Under ₹25,000",
  "₹25,000 to ₹75,000",
  "₹75,000 to ₹2 lakh",
  "₹2 lakh+",
  "Not sure yet",
];

const field =
  "mt-1 w-full rounded-xl border border-line bg-bg px-4 py-3 text-sm text-ink placeholder:text-subtle focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20";

export default function ContactForm({ initialMessage = "", reportUrl = "", score = null }) {
  const [waUrl, setWaUrl] = useState("");

  function submit(e) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);

    const text = buildContactMessage({
      name: fd.get("name"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      service: fd.get("service"),
      budget: fd.get("budget"),
      message: fd.get("message"),
      score,
      reportUrl,
    });
    const url = whatsappUrl(text);

    trackEvent("contact_submit", { channel: "whatsapp", withReport: Boolean(reportUrl) });

    // Must run directly inside the click, or browsers block the new tab
    const win = window.open(url, "_blank");
    if (win) win.opener = null;
    else window.location.href = url; // popup blocked: redirect this tab instead

    setWaUrl(url);
  }

  return (
    <form onSubmit={submit} className="space-y-4 rounded-2xl border border-line bg-card p-6 sm:p-8">
      {reportUrl && (
        <p className="rounded-xl bg-accent/10 px-4 py-3 text-sm text-accent">
          Your Growth Report ({score}/100) link will be added to the WhatsApp message.
        </p>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-medium">
          Name *
          <input name="name" required minLength={2} maxLength={100} autoComplete="name" className={field} />
        </label>
        <label className="text-sm font-medium">
          Email (optional)
          <input name="email" type="email" maxLength={200} autoComplete="email" className={field} />
        </label>
        <label className="text-sm font-medium">
          Phone (optional)
          <input name="phone" type="tel" maxLength={30} autoComplete="tel" className={field} />
        </label>
        <label className="text-sm font-medium">
          What do you need?
          <select name="service" defaultValue="" className={field}>
            <option value="">Not sure yet</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>{s.title}</option>
            ))}
          </select>
        </label>
      </div>

      <label className="block text-sm font-medium">
        Budget (optional)
        <select name="budget" defaultValue="" className={field}>
          <option value="">Prefer to discuss</option>
          {budgets.map((b) => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>
      </label>

      <label className="block text-sm font-medium">
        Message *
        <textarea
          name="message"
          required
          minLength={10}
          maxLength={800}
          rows={6}
          defaultValue={initialMessage}
          placeholder="Tell me about your business and what you'd like to achieve."
          className={field}
        />
      </label>

      <Button type="submit" arrow className="w-full">
        Send message
      </Button>
      <p className="flex items-center justify-center gap-2 text-xs text-subtle">
        <MessageCircle size={14} aria-hidden="true" />
        This opens WhatsApp with your details filled in. Press send there to reach me.
      </p>

      {waUrl && (
        <p role="status" className="rounded-xl border border-line bg-bg px-4 py-3 text-sm text-muted">
          WhatsApp should have opened with your message ready. If it didn&apos;t,{" "}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-accent underline"
          >
            open it here
          </a>
          .
        </p>
      )}
    </form>
  );
}
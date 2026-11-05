"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import Button from "./Button";
import { services, contactInfo } from "@/data/content";

const budgets = [
  "Under ₹25,000",
  "₹25,000 to ₹75,000",
  "₹75,000 to ₹2 lakh",
  "₹2 lakh+",
  "Not sure yet",
];

const field =
  "mt-1 w-full rounded-xl border border-line bg-white px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

export default function ContactForm({ initialMessage = "", code = "", score = null }) {
  const [status, setStatus] = useState("idle"); // idle | sending | done | error
  const [error, setError] = useState("");

  async function submit(e) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const fd = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "contact",
          name: fd.get("name"),
          email: fd.get("email"),
          phone: fd.get("phone"),
          service: fd.get("service"),
          budget: fd.get("budget"),
          message: fd.get("message"),
          website: fd.get("website"), // honeypot
          code,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("done");
    } catch (err) {
      setError(err.message || "Something went wrong.");
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-2xl border border-line bg-white p-8 text-center">
        <CheckCircle2 className="mx-auto text-green-600" size={48} />
        <h2 className="mt-4 text-2xl font-bold">Message sent</h2>
        <p className="mt-2 text-muted">
          Thanks! I&apos;ll reply within 24 hours. Want to talk sooner?
        </p>
        <Button href={contactInfo.calLink} target="_blank" rel="noopener noreferrer" className="mt-6">
          Book a free 30-minute call
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-4 rounded-2xl border border-line bg-white p-6 sm:p-8">
      {score !== null && (
        <p className="rounded-xl bg-primary/5 px-4 py-3 text-sm text-primary">
          Your Growth Report ({score}/100) will be sent along with this message, so I can see your results.
        </p>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-medium">
          Name *
          <input name="name" required minLength={2} maxLength={100} autoComplete="name" className={field} />
        </label>
        <label className="text-sm font-medium">
          Email *
          <input name="email" type="email" required maxLength={200} autoComplete="email" className={field} />
        </label>
        <label className="text-sm font-medium">
          Phone / WhatsApp (optional)
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
          maxLength={3000}
          rows={6}
          defaultValue={initialMessage}
          placeholder="Tell me about your business and what you'd like to achieve."
          className={field}
        />
      </label>

      {/* Honeypot */}
      <input name="website" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute left-[-9999px]" />

      {status === "error" && (
        <p className="text-sm text-red-600" role="alert">{error}</p>
      )}

      <Button type="submit" disabled={status === "sending"} className="w-full disabled:opacity-60">
        {status === "sending" ? "Sending..." : "Send message"}
      </Button>
    </form>
  );
}
"use client";

import { useState } from "react";
import { Check, Link2, MessageCircle } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const btn =
  "inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-medium text-muted transition-colors duration-300 hover:border-accent hover:text-accent";

export default function ShareBar({ title }) {
  const [copied, setCopied] = useState(false);

  const pageUrl = () => window.location.href.split("#")[0];

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(pageUrl());
      setCopied(true);
      trackEvent("guide_copy_link", { title });
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  const shareWhatsApp = () => {
    trackEvent("guide_share_whatsapp", { title });
    const url = `https://wa.me/?text=${encodeURIComponent(`${title}\n${pageUrl()}`)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex flex-wrap items-center gap-3 print:hidden">
      <button type="button" onClick={copy} className={btn}>
        {copied ? <Check size={16} /> : <Link2 size={16} />}
        <span role="status">{copied ? "Link copied" : "Copy link"}</span>
      </button>
      <button type="button" onClick={shareWhatsApp} className={btn}>
        <MessageCircle size={16} />
        Share on WhatsApp
      </button>
    </div>
  );
}

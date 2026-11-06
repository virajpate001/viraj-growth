"use client";

import Button from "./Button";
import { trackEvent } from "@/lib/analytics";

export default function WhatsAppButton({ source, children, ...props }) {
  return (
    <Button
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("whatsapp_click", { source })}
      {...props}
    >
      {children}
    </Button>
  );
}
import Button from "../Button";
import WhatsAppButton from "../WhatsAppButton";
import { whatsappUrl, guideMessage } from "@/lib/whatsapp";

// Mid-article prompt to try the analyzer
export function AnalyzerCta() {
  return (
    <aside
      data-reveal
      className="relative my-4 overflow-hidden rounded-2xl border border-line bg-card p-7 sm:p-9 print:hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/15 blur-[80px]"
      />
      <p className="relative max-w-md font-display text-2xl font-bold leading-tight sm:text-3xl">
        Not sure where <span className="text-accent">your</span> store stands?
      </p>
      <p className="relative mt-3 max-w-lg text-muted">
        Answer 16 quick questions and get a score, your top three priorities and a 90-day plan. Free, about 3 minutes.
      </p>
      <div className="relative mt-6">
        <Button href="/analyzer" arrow>
          Take the free analyzer
        </Button>
      </div>
    </aside>
  );
}

// End-of-article prompt to talk
export function TalkCta({ title }) {
  return (
    <div className="mt-8 flex flex-col gap-4 sm:flex-row print:hidden">
      <WhatsAppButton
        href={whatsappUrl(guideMessage(title))}
        source="guide_cta"
        arrow
      >
        Ask me about this on WhatsApp
      </WhatsAppButton>
      <Button href="/contact" variant="outline">
        Use the contact form
      </Button>
    </div>
  );
}

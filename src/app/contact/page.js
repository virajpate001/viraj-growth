import Container from "@/components/Container";
import Button from "@/components/Button";
import ContactForm from "@/components/ContactForm";
import { Calendar, Mail, MessageCircle } from "lucide-react";
import { contactInfo } from "@/data/content";
import { decodeAnswers } from "@/lib/share";
import { computeReport } from "@/lib/scoring";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Contact: Free 30-Minute Call",
  description:
    "Get in touch with Viraj Pate to discuss your Shopify, WooCommerce or custom website project. Free 30-minute call available.",
  path: "/contact",
});

export default async function ContactPage({ searchParams }) {
  const params = await searchParams;
  const code = typeof params?.r === "string" ? params.r : "";

  // Recompute from the answers instead of trusting a score in the URL
  const answers = code ? decodeAnswers(code) : null;
  const result = answers ? computeReport(answers) : null;

  const initialMessage = result
    ? `Hi Viraj,\n\nI just took the Business Growth Analyzer and scored ${result.overall}/100. My top priorities were: ${result.priorities
        .map((p) => p.label)
        .join(", ")}.\n\nI'd like to discuss how to improve these.`
    : "";

  return (
    <>
      <section className="bg-surface py-16 text-center">
        <Container>
          <h1 className="text-4xl font-extrabold sm:text-5xl">
            {result ? "Let's talk about your report" : "Let's talk"}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Tell me about your business. I reply personally within 24 hours.
          </p>
        </Container>
      </section>

      <Container className="grid gap-10 py-16 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <ContactForm
            initialMessage={initialMessage}
            code={result ? code : ""}
            score={result ? result.overall : null}
          />
        </div>

        <aside className="space-y-4 lg:col-span-2">
          <div className="rounded-2xl border border-line bg-white p-6">
            <Calendar className="text-accent-dark" size={28} />
            <h2 className="mt-3 text-lg font-bold">Prefer a call?</h2>
            <p className="mt-1 text-sm text-muted">
              Book a free 30-minute call. We&apos;ll review your goals and I&apos;ll give you honest advice.
            </p>
            <Button href={contactInfo.calLink} target="_blank" rel="noopener noreferrer" className="mt-4">
              Book a free call
            </Button>
          </div>

          <div className="rounded-2xl border border-line bg-white p-6">
            <h2 className="text-lg font-bold">Other ways to reach me</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary" />
                <a href={`mailto:${contactInfo.email}`} className="hover:underline">{contactInfo.email}</a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={18} className="text-primary" />
                <a href={`https://wa.me/${contactInfo.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Message on WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl bg-surface p-6 text-sm text-muted">
            <p className="font-semibold text-ink">What happens next</p>
            <ol className="mt-2 list-decimal space-y-1 pl-5">
              <li>I read your message and report.</li>
              <li>I reply with initial thoughts within 24 hours.</li>
              <li>We book a call if it makes sense. No pressure.</li>
            </ol>
          </div>
        </aside>
      </Container>
    </>
  );
}
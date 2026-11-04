import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";
import { Check } from "lucide-react";
import { services } from "@/data/content";

export const metadata = {
  title: "Services",
  description:
    "Shopify, WooCommerce, custom Next.js, store redesign, speed and SEO optimization for growing online businesses.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-surface py-16 text-center">
        <Container>
          <h1 className="text-4xl font-extrabold sm:text-5xl">Services</h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Every service is built around one goal: helping your business sell more online.
          </p>
        </Container>
      </section>

      <Container className="space-y-8 py-16">
        {services.map((s) => (
          <FadeIn key={s.slug}>
            <article
              id={s.slug}
              className="scroll-mt-24 grid gap-8 rounded-2xl border border-line bg-white p-6 sm:p-8 md:grid-cols-2"
            >
              <div>
                <s.icon className="text-accent" size={32} />
                <h2 className="mt-4 text-2xl font-bold">{s.title}</h2>
                <p className="mt-2 text-muted">{s.short}</p>
                <p className="mt-4 text-sm">
                  <span className="font-semibold">Problem it solves: </span>
                  {s.problem}
                </p>
                <p className="mt-2 text-sm">
                  <span className="font-semibold">Best for: </span>
                  {s.audience}
                </p>
              </div>
              <div>
                <p className="mb-3 text-sm font-semibold">What's included</p>
                <ul className="space-y-2">
                  {s.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted">
                      <Check size={18} className="mt-0.5 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </FadeIn>
        ))}

        <div className="pt-8 text-center">
          <p className="mb-4 text-muted">Not sure which service you need?</p>
          <Button href="/analyzer">Take the Free Growth Analyzer</Button>
        </div>
      </Container>
    </>
  );
}
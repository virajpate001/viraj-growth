// src/app/guides/page.js

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/Container";
import Button from "@/components/Button";
import WhatsAppButton from "@/components/WhatsAppButton";
import { allGuides } from "@/lib/guides";
import { pageMeta } from "@/lib/seo";
import { whatsappUrl } from "@/lib/whatsapp";

export const metadata = pageMeta({
  title: "Guides for Hiring an E-commerce Developer",
  description:
    "Plain-language guides on hiring an e-commerce website developer: costs, vetting questions, freelancer vs agency, WordPress skills and careers.",
  path: "/guides",
});

export default function GuidesPage() {
  const guides = allGuides().filter((g) => g.kind === "article");
  const featured = guides.find((g) => g.pillar) || guides[0];
  const rest = guides.filter((g) => g !== featured);

  return (
    <>
      <section className="relative overflow-hidden bg-bg2 py-20 sm:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-accent/10 blur-[130px]"
        />
        <Container className="relative">
          <h1 data-reveal className="max-w-3xl text-[clamp(2.5rem,6vw,4.5rem)]">
            Hire an e-commerce developer <span className="text-accent">with confidence</span>.
          </h1>
          <p data-reveal className="mt-6 max-w-xl text-lg text-muted">
            Costs, vetting questions and honest comparisons, written for store owners who are about to hire.
          </p>
        </Container>
      </section>

      <Container className="py-20">
        {featured && (
          <Link
            href={`/${featured.slug}`}
            data-reveal
            className="group grid gap-8 rounded-3xl border border-line bg-card p-8 transition-colors duration-300 hover:border-accent/50 sm:p-12 lg:grid-cols-[1.4fr_1fr] lg:items-end"
          >
            <div>
              <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                Start here
              </span>
              <h2 className="mt-5 text-3xl transition-colors duration-300 group-hover:text-accent sm:text-5xl">
                {featured.h1}
              </h2>
              <p className="mt-4 max-w-xl text-muted">{featured.description}</p>
            </div>
            <div className="flex items-center justify-between border-t border-line pt-6 lg:flex-col lg:items-end lg:gap-6 lg:border-0 lg:pt-0">
              <span className="text-sm text-subtle">{featured.minutes} min read</span>
              <ArrowUpRight
                size={40}
                className="text-subtle transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
              />
            </div>
          </Link>
        )}

        <ul className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((g) => (
            <li key={g.slug} data-reveal>
              <Link
                href={`/${g.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-line bg-card p-7 transition-colors duration-300 hover:border-accent/50"
              >
                <span className="w-fit rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                  {g.topic}
                </span>
                <h2 className="mt-5 text-2xl transition-colors duration-300 group-hover:text-accent">{g.h1}</h2>
                <p className="mt-3 line-clamp-3 flex-1 text-sm text-muted">{g.description}</p>
                <div className="mt-6 flex items-center justify-between border-t border-line pt-4 text-xs text-subtle">
                  {g.minutes} min read
                  <ArrowUpRight
                    size={18}
                    className="transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  />
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-20 flex flex-col gap-6 border-t border-line pt-10 lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-md text-lg text-muted">
            Ready to move from reading to doing? Check your store first, or talk to me.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button href="/analyzer" arrow>
              Take the free analyzer
            </Button>
            <WhatsAppButton
              href={whatsappUrl("Hi Viraj, I read your guides and have a question.")}
              source="guides_hub"
              variant="outline"
            >
              WhatsApp me
            </WhatsAppButton>
          </div>
        </div>
      </Container>
    </>
  );
}

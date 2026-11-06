import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/Container";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import { services } from "@/data/content";
import { serviceDetails } from "@/data/serviceDetails";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Shopify, WooCommerce & Next.js Services",
  description:
    "Shopify and WooCommerce development, custom Next.js sites, store redesign, speed optimization and e-commerce SEO for growing online businesses.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <section className="bg-bg2 py-20 sm:py-28">
        <Container>
          <h1 className="max-w-3xl text-[clamp(2.5rem,6vw,4.5rem)]">
            Services built around one goal: <span className="text-accent">selling more online</span>.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted">
            Choose a service to see what is included, how it works and how long it takes.
          </p>
        </Container>
      </section>

      <Container className="py-20">
        <ul className="border-t border-line">
          {services.map((s) => {
            const d = serviceDetails[s.slug];
            return (
              <li key={s.slug}>
                <FadeIn>
                  <Link
                    href={`/services/${s.slug}`}
                    className="group grid items-center gap-4 border-b border-line py-8 transition-colors duration-300 hover:bg-accent/5 md:grid-cols-[auto_1fr_1fr_auto] md:gap-10 md:px-4"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <s.icon size={22} />
                    </span>
                    <div>
                      <h2 className="text-2xl transition-colors duration-300 group-hover:text-accent sm:text-3xl">
                        {s.title}
                      </h2>
                      <p className="mt-1 text-sm text-muted">{s.short}</p>
                    </div>
                    <p className="text-sm text-muted">
                      <span className="font-semibold text-ink">Best for: </span>
                      {d?.bestFor || s.audience}
                    </p>
                    <ArrowUpRight
                      size={26}
                      className="hidden text-subtle transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent md:block"
                    />
                  </Link>
                </FadeIn>
              </li>
            );
          })}
        </ul>

        <div className="mt-16 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-lg text-muted">Not sure which service you need?</p>
          <Button href="/analyzer" arrow>Take the free growth analyzer</Button>
        </div>
      </Container>
    </>
  );
}
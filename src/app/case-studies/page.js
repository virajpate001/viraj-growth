import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";
import ImageFrame from "@/components/ImageFrame";
import { caseStudies } from "@/data/caseStudies";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "E-commerce Case Studies: Real Results",
  description:
    "See how Shopify and WooCommerce stores improved conversion, speed and revenue. Challenge, solution and measurable results for each project.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <section className="bg-bg2 py-20 sm:py-28">
        <Container>
          <h1 className="max-w-3xl text-[clamp(2.5rem,6vw,4.5rem)]">
            Real problems. Clear decisions.{" "}
            <span className="text-accent">Measurable results.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted">
            Every project below started with a store that was not selling as well as it should.
          </p>
        </Container>
      </section>

      <Container className="py-20">
        <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((c) => (
            <li key={c.slug}>
              <FadeIn className="h-full">
                <Link
                  href={`/case-studies/${c.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-card transition-colors duration-300 hover:border-accent/50"
                >
                  <ImageFrame
                    src={c.image}
                    alt={c.imageAlt}
                    label="Add a project screenshot"
                    ratio="aspect-[16/10]"
                    parallax={0}
                    reveal={false}
                    bare
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                        {c.industry}
                      </span>
                      <span className="rounded-full border border-line px-3 py-1 text-xs text-muted">
                        {c.platform}
                      </span>
                    </div>
                    <h2 className="mt-4 text-2xl transition-colors duration-300 group-hover:text-accent">
                      {c.title}
                    </h2>
                    <p className="mt-3 flex-1 text-sm text-muted">{c.summary}</p>
                    <div className="mt-6 flex items-end justify-between border-t border-line pt-5">
                      <div>
                        <p className="font-display text-3xl font-bold text-accent">
                          {c.results[0].value}
                        </p>
                        <p className="text-xs text-muted">{c.results[0].label}</p>
                      </div>
                      <ArrowUpRight
                        size={24}
                        className="text-subtle transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
                      />
                    </div>
                  </div>
                </Link>
              </FadeIn>
            </li>
          ))}
        </ul>

        <div className="mt-20 flex flex-col items-start gap-5 border-t border-line pt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-lg text-muted">
            Wondering what your own store&apos;s biggest opportunity is?
          </p>
          <Button href="/analyzer" arrow>
            Take the free growth analyzer
          </Button>
        </div>
      </Container>
    </>
  );
}
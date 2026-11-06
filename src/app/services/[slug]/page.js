import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, Plus, ArrowUpRight } from "lucide-react";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";
import WhatsAppButton from "@/components/WhatsAppButton";
import ImageFrame from "@/components/ImageFrame";
import SectionHeading from "@/components/SectionHeading";
import JsonLd from "@/components/JsonLd";
import { services } from "@/data/content";
import { serviceDetails, defaultProcess } from "@/data/serviceDetails";
import { caseStudies } from "@/data/caseStudies";
import { posts } from "@/data/posts";
import { siteUrl } from "@/lib/site";
import { pageMeta, breadcrumbSchema } from "@/lib/seo";
import { whatsappUrl, serviceMessage } from "@/lib/whatsapp";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const d = serviceDetails[slug];
  if (!d) return {};
  return pageMeta({
    title: d.metaTitle,
    description: d.metaDescription,
    path: `/services/${slug}`,
    openGraph: d.image ? { images: [{ url: d.image, alt: d.imageAlt }] } : {},
  });
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const base = services.find((s) => s.slug === slug);
  const d = serviceDetails[slug];
  if (!base || !d) notFound();

  const Icon = base.icon;
  const process = d.process || defaultProcess;
  const chat = whatsappUrl(serviceMessage(base.title));
  const related = caseStudies.filter((c) => d.caseStudies?.includes(c.slug));
  const articles = posts.filter((p) => d.posts?.includes(p.slug));
  const others = services.filter((s) => s.slug !== slug);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: base.title,
    serviceType: base.title,
    description: d.metaDescription,
    url: `${siteUrl}/services/${slug}`,
    provider: { "@id": `${siteUrl}/#person` },
    areaServed: [{ "@type": "Country", name: "India" }, "Worldwide"],
  };

  return (
    <>
      <JsonLd data={schema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: base.title, path: `/services/${slug}` },
        ])}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-bg2">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-accent/10 blur-[130px]"
        />
        <Container className="relative grid items-center gap-14 py-16 sm:py-24 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Link href="/services" className="text-sm text-muted transition-colors hover:text-accent">
              &larr; All services
            </Link>
            <span className="mt-8 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <Icon size={24} />
            </span>
            <h1 className="mt-6 text-[clamp(2.25rem,5.5vw,4rem)]">{d.h1}</h1>
            <p className="mt-6 max-w-xl text-lg text-muted">{d.intro}</p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <WhatsAppButton href={chat} source={`service_${slug}`} arrow>
                Discuss this on WhatsApp
              </WhatsAppButton>
              <Button href="/analyzer" variant="outline">
                Take the free analyzer
              </Button>
            </div>
          </div>
          <ImageFrame
            src={d.image}
            alt={d.imageAlt}
            label="Add a service image"
            ratio="aspect-[5/4]"
            priority
            parallax={6}
          />
        </Container>
      </section>

      {/* Quick facts */}
      <section className="border-y border-line">
        <Container>
          <dl className="grid divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {[
              ["Typical timeline", d.timeline],
              ["Best for", d.bestFor],
              ["Platform", d.platform],
            ].map(([label, value]) => (
              <div key={label} className="py-6 sm:px-8 sm:first:pl-0">
                <dt className="text-xs text-subtle">{label}</dt>
                <dd className="mt-1 font-heading font-bold">{value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Signs this fits */}
      <section className="py-24 sm:py-32">
        <Container>
          <SectionHeading eyebrow="Does this sound familiar?" title="Signs you need this" />
          <ul className="grid border-t border-line md:grid-cols-2">
            {d.signs.map((s, i) => (
              <li
                key={s}
                className={`flex gap-4 border-b border-line py-7 ${
                  i % 2 === 0 ? "md:border-r md:pr-10" : "md:pl-10"
                }`}
              >
                <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 bg-accent" />
                <FadeIn>
                  <p className="text-lg">{s}</p>
                </FadeIn>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* What you get */}
      <section className="bg-bg2 py-24 sm:py-32">
        <Container>
          <SectionHeading eyebrow="What you get" title={`What's included in ${base.title.toLowerCase()}`} />
          <div className="grid gap-6 md:grid-cols-2">
            {d.deliverables.map((item) => (
              <FadeIn key={item.title}>
                <div className="h-full rounded-2xl border border-line bg-card p-8 transition-colors duration-300 hover:border-accent/40">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Check size={18} />
                  </span>
                  <h3 className="mt-5 text-xl">{item.title}</h3>
                  <p className="mt-2 text-muted">{item.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="py-24 sm:py-32">
        <Container className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              eyebrow="Process"
              title="How we'll work together"
              text="A clear plan before work starts, and no surprises along the way."
            />
          </div>
          <ol>
            {process.map((p, i) => (
              <li key={p.title} data-reveal className="flex gap-6 border-t border-line py-9 sm:gap-10">
                <span className="font-display text-5xl font-bold text-outline sm:text-6xl">{i + 1}</span>
                <div>
                  <h3 className="text-2xl">{p.title}</h3>
                  <p className="mt-2 max-w-md text-muted">{p.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Related work */}
      {(related.length > 0 || articles.length > 0) && (
        <section className="bg-bg2 py-24 sm:py-32">
          <Container>
            <SectionHeading eyebrow="Related" title="See it in practice" />
            <ul className="grid gap-6 md:grid-cols-2">
              {related.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/case-studies/${c.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-line bg-card p-7 transition-colors duration-300 hover:border-accent/50"
                  >
                    <span className="text-xs text-accent">Case study · {c.industry}</span>
                    <span className="mt-3 text-2xl font-bold transition-colors group-hover:text-accent">
                      {c.title}
                    </span>
                    <span className="mt-6 flex items-end justify-between border-t border-line pt-5">
                      <span>
                        <span className="block font-display text-3xl font-bold text-accent">{c.results[0].value}</span>
                        <span className="text-xs text-muted">{c.results[0].label}</span>
                      </span>
                      <ArrowUpRight className="text-subtle transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" />
                    </span>
                  </Link>
                </li>
              ))}
              {articles.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/blog/${a.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-line bg-card p-7 transition-colors duration-300 hover:border-accent/50"
                  >
                    <span className="text-xs text-accent">Article · {a.readingTime}</span>
                    <span className="mt-3 text-2xl font-bold transition-colors group-hover:text-accent">{a.title}</span>
                    <span className="mt-3 flex-1 text-sm text-muted">{a.description}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      {/* FAQ */}
      <section className="py-24 sm:py-32">
        <Container className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading eyebrow="FAQ" title="Common questions" />
          <div className="border-t border-line">
            {d.faqs.map((f) => (
              <details key={f.q} className="group border-b border-line py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-heading text-lg font-bold [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <Plus
                    size={22}
                    className="shrink-0 text-accent transition-transform duration-300 group-open:rotate-45"
                  />
                </summary>
                <p className="mt-4 max-w-2xl text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="pb-24 sm:pb-32">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-line bg-card px-6 py-14 sm:px-14 sm:py-20">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-accent/15 blur-[110px]"
            />
            <h2 className="relative max-w-2xl text-4xl sm:text-5xl">
              Ready to talk about your <span className="text-accent">{base.title.toLowerCase()}</span> project?
            </h2>
            <p className="relative mt-5 max-w-xl text-lg text-muted">
              Message me on WhatsApp with a few details. I reply personally.
            </p>
            <div className="relative mt-9 flex flex-col gap-4 sm:flex-row">
              <WhatsAppButton href={chat} source={`service_${slug}_cta`} arrow>
                Discuss this on WhatsApp
              </WhatsAppButton>
              <Button href="/contact" variant="outline">
                Use the contact form
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Other services */}
      <section className="border-t border-line py-16">
        <Container>
          <h2 className="text-2xl">Other services</h2>
          <ul className="mt-6 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="flex items-center justify-between border-b border-line py-4 transition-colors hover:text-accent"
                >
                  {s.title}
                  <ArrowUpRight size={18} />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
// src/app/ecommerce-developers-by-city/page.js
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Container from "@/components/Container";
import Button from "@/components/Button";
import WhatsAppButton from "@/components/WhatsAppButton";
import JsonLd from "@/components/JsonLd";
import { CITY_GUIDES } from "@/lib/cityGuides";
import { allGuides } from "@/lib/guides";
import { pageMeta, breadcrumbSchema } from "@/lib/seo";
import { siteUrl } from "@/lib/site";
import { whatsappUrl } from "@/lib/whatsapp";

export const metadata = pageMeta({
  title: "Ecommerce Website Developers by City: Full Index",
  description:
    "Find an ecommerce website developer by city: local rates, market strengths, and hiring guides for Ahmedabad, Bangalore, Mumbai, Kolkata, Pune, Patna, and Lahore.",
  path: "/ecommerce-developers-by-city",
});

// Only render city cards whose guide JSON actually exists and is live.
// This is the same pattern as resolveHref(): never link to a page that 404s.
function liveCities() {
  const liveSlugs = new Set(allGuides().map((g) => g.slug));
  return CITY_GUIDES.map((c) => ({ ...c, live: liveSlugs.has(c.slug) }));
}

const PLATFORM_STRENGTHS = [
  {
    platform: "WooCommerce (WordPress)",
    strongest: "Kolkata, Ahmedabad, Pune, Patna",
    notes: "Deepest in Kolkata and Ahmedabad; Patna strong for small stores",
  },
  {
    platform: "Shopify / Shopify Plus",
    strongest: "Bangalore, Mumbai, Pune, Ahmedabad",
    notes: "Deepest in Bangalore; Mumbai strongest for fashion and lifestyle",
  },
  {
    platform: "Headless (Next.js, custom)",
    strongest: "Bangalore",
    notes:
      "Bangalore is the only market in the cluster with deep headless talent",
  },
  {
    platform: "Magento / Adobe Commerce",
    strongest: "Mumbai, Bangalore",
    notes: "Enterprise retail and B2B catalogs; Mumbai strongest for fashion",
  },
  {
    platform: "BigCommerce",
    strongest: "Bangalore, Pune",
    notes: "Mid-market stores growing beyond Shopify",
  },
  {
    platform: "Salesforce Commerce Cloud",
    strongest: "Bangalore",
    notes: "Large enterprise deployments; limited elsewhere",
  },
];

export default function CityHubPage() {
  const cities = liveCities();

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Ecommerce Website Developers by City: Full Index",
    description:
      "Find an ecommerce website developer by city: local rates, market strengths, and hiring guides for Ahmedabad, Bangalore, Mumbai, Kolkata, Pune, Patna, and Lahore.",
    url: `${siteUrl}/ecommerce-developers-by-city`,
    datePublished: "2026-11-06",
    dateModified: "2026-11-06",
    hasPart: cities
      .filter((c) => c.live)
      .map((c) => ({
        "@type": "WebPage",
        name: `Ecommerce Website Developer in ${c.city}`,
        url: `${siteUrl}/${c.slug}`,
      })),
  };

  return (
    <>
      <JsonLd data={collectionSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          {
            name: "Ecommerce Developers by City",
            path: "/ecommerce-developers-by-city",
          },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Which Indian city has the best ecommerce website developers?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Bangalore has the deepest pool, especially for headless, enterprise, and Shopify Plus work. Mumbai is strongest for fashion and lifestyle builds. For most standard WooCommerce or Shopify stores, Ahmedabad, Pune, and Kolkata offer strong talent at lower rates.",
              },
            },
            {
              "@type": "Question",
              name: "Which Indian city has the cheapest ecommerce developers?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Patna is the cheapest of the cities we cover, followed by Kolkata. For small WooCommerce or Shopify stores, both markets can deliver solid work at rates well below Bangalore or Mumbai.",
              },
            },
            {
              "@type": "Question",
              name: "Do I need to hire a developer in my own city?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No. For most projects, remote works well. Local hiring matters most when you need timezone overlap, in-person kickoff or launch support, or want to verify the developer in person.",
              },
            },
            {
              "@type": "Question",
              name: "How do I compare developers in different cities?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Compare on scope fit, portfolio depth, and rates. Then read the individual city guide for the market you are considering, and check whether the local market can actually deliver your project scope.",
              },
            },
            {
              "@type": "Question",
              name: "Which city is best for Shopify?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Bangalore for Shopify Plus and complex Shopify builds. Mumbai for fashion and lifestyle Shopify. Pune and Ahmedabad are strong for standard Shopify stores at lower rates.",
              },
            },
            {
              "@type": "Question",
              name: "Which city is best for WooCommerce?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Kolkata and Ahmedabad have the deepest WooCommerce talent. Pune is also strong. Patna is best for small WooCommerce stores with Hindi-language content.",
              },
            },
            {
              "@type": "Question",
              name: "Which city is best for headless commerce?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Bangalore. It is the only market in the cluster with deep headless talent, and it is the best choice for advanced headless or custom builds.",
              },
            },
          ],
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-bg2 py-20 sm:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-accent/10 blur-[130px]"
        />
        <Container className="relative">
          <h1 data-reveal className="max-w-3xl text-[clamp(2.5rem,6vw,4.5rem)]">
            Ecommerce website developers{" "}
            <span className="text-accent">by city</span>.
          </h1>
          <p data-reveal className="mt-6 max-w-xl text-lg text-muted">
            Local rates, market strengths and gaps, and hiring guides for seven
            cities across India and Pakistan. Pick a city or compare markets.
          </p>
        </Container>
      </section>

      <Container className="py-20">
        {/* Compare table */}
        <section id="compare-cities">
          <h2 className="text-3xl sm:text-4xl">Compare Cities at a Glance</h2>
          <p className="mt-4 max-w-2xl text-muted">
            Rates are typical mid-level freelancer hourly rates. The &quot;best
            for&quot; column reflects what each market is strongest at. Use this
            as a starting point, then read the full guide for the details.
          </p>
          <div
            role="region"
            aria-label="City comparison table, scroll sideways on small screens"
            tabIndex={0}
            className="mt-8 overflow-x-auto rounded-xl border border-line"
          >
            <table className="w-full min-w-[44rem] border-collapse text-left text-sm">
              <thead className="bg-elevated">
                <tr>
                  <th
                    scope="col"
                    className="px-4 py-3 font-heading text-xs font-bold text-ink"
                  >
                    City
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 font-heading text-xs font-bold text-ink"
                  >
                    Mid-level hourly
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 font-heading text-xs font-bold text-ink"
                  >
                    Best for
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 font-heading text-xs font-bold text-ink"
                  >
                    Local talent depth
                  </th>
                </tr>
              </thead>
              <tbody>
                {cities.map((c) => (
                  <tr
                    key={c.slug}
                    className="border-t border-line transition-colors hover:bg-accent/5"
                  >
                    <td className="px-4 py-3.5 align-top font-semibold text-ink">
                      {c.live ? (
                        <Link
                          href={`/${c.slug}`}
                          className="text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
                        >
                          {c.city}
                        </Link>
                      ) : (
                        c.city
                      )}
                    </td>
                    <td className="px-4 py-3.5 align-top text-muted whitespace-nowrap">
                      {c.midLevelRate}
                    </td>
                    <td className="px-4 py-3.5 align-top text-muted">
                      {c.bestFor}
                    </td>
                    <td className="px-4 py-3.5 align-top text-muted">
                      {c.talentDepth}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* City guides grid */}
        <section id="city-guides" className="mt-20">
          <h2 className="text-3xl sm:text-4xl">City Guides</h2>
          <p className="mt-4 max-w-2xl text-muted">
            Each guide below covers local rates, market strengths and gaps,
            verification steps, and vetting questions specific to that city.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {cities.map((c) => {
              const Card = c.live ? Link : "div";
              const cardProps = c.live
                ? {
                    href: `/${c.slug}`,
                    className:
                      "group flex h-full flex-col rounded-2xl border border-line bg-card p-7 transition-colors duration-300 hover:border-accent/50",
                  }
                : {
                    className:
                      "flex h-full flex-col rounded-2xl border border-line bg-card p-7 opacity-70",
                  };
              return (
                <Card key={c.slug} {...cardProps}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-xs text-accent">{c.country}</span>
                      <h3
                        className={`mt-2 text-2xl transition-colors duration-300 ${c.live ? "group-hover:text-accent" : ""}`}
                      >
                        Ecommerce Website Developer in {c.city}
                      </h3>
                    </div>
                    {c.live && (
                      <ArrowUpRight
                        size={22}
                        className="shrink-0 text-subtle transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                      />
                    )}
                  </div>
                  <p className="mt-4 flex-1 text-sm text-muted">{c.summary}</p>
                  <p className="mt-4 text-sm text-muted">
                    <span className="font-semibold text-ink">Best for:</span>{" "}
                    {c.bestForLine}
                  </p>
                  <div className="mt-5 flex items-center justify-between border-t border-line pt-4 text-xs text-subtle">
                    <span>Mid-level: {c.midLevelRate}</span>
                    {c.live && (
                      <span className="font-semibold text-accent">
                        Read the guide →
                      </span>
                    )}
                  </div>
                </Card>
              );
            })}
          </div>
        </section>

        {/* How to choose */}
        <section id="how-to-choose" className="mt-20">
          <h2 className="text-3xl sm:text-4xl">How to Choose a City</h2>
          <p className="mt-4 max-w-2xl text-muted">
            The right city depends on your project scope, your team&apos;s
            location, and your budget. The framework below helps you narrow the
            choice.
          </p>

          <h3 className="mt-10 text-xl sm:text-2xl">
            Start with project scope
          </h3>
          <ul className="mt-4 space-y-3 text-muted">
            <li className="relative pl-6 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:bg-accent">
              <strong className="text-ink">
                Small WooCommerce or Shopify store with a tight budget.
              </strong>{" "}
              Kolkata or Patna offer the lowest rates; Patna if you need
              Hindi-language content, Kolkata if you need stronger WooCommerce
              depth.
            </li>
            <li className="relative pl-6 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:bg-accent">
              <strong className="text-ink">
                Mid-market Shopify or WooCommerce store with moderate
                customization.
              </strong>{" "}
              Ahmedabad and Pune both offer strong local depth at lower rates
              than Mumbai or Bangalore.
            </li>
            <li className="relative pl-6 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:bg-accent">
              <strong className="text-ink">
                Fashion or lifestyle Shopify build with seasonal campaigns.
              </strong>{" "}
              Mumbai has the deepest experience in this segment.
            </li>
            <li className="relative pl-6 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:bg-accent">
              <strong className="text-ink">
                SaaS-adjacent commerce or custom workflow builds.
              </strong>{" "}
              Pune is the strongest market outside Bangalore.
            </li>
            <li className="relative pl-6 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:bg-accent">
              <strong className="text-ink">
                Complex custom, headless, or enterprise builds.
              </strong>{" "}
              Bangalore is the clear choice; the premium is real, but the depth
              is unmatched in India.
            </li>
            <li className="relative pl-6 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:bg-accent">
              <strong className="text-ink">Pakistani D2C brands.</strong> Lahore
              is the natural choice for local Pakistani brands that want a local
              team.
            </li>
          </ul>

          <h3 className="mt-10 text-xl sm:text-2xl">
            Consider your team&apos;s location
          </h3>
          <p className="mt-3 text-muted">
            If your team is in a specific city, hiring locally makes
            coordination easier. If your team is distributed, the city that fits
            your project scope is usually the right choice regardless of your
            own location.
          </p>

          <h3 className="mt-10 text-xl sm:text-2xl">Consider your budget</h3>
          <p className="mt-3 text-muted">
            The cluster spans a wide range, from Patna&apos;s ₹500 per hour to
            Bangalore&apos;s ₹3,000 per hour for mid-level freelancers. For most
            projects, the price difference between cities is real but not
            decisive; the bigger factor is whether the local market can deliver
            the scope you need. See{" "}
            <Link
              href="/ecommerce-website-developer-cost"
              className="text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
            >
              ecommerce website developer cost
            </Link>{" "}
            for the full breakdown.
          </p>

          <h3 className="mt-10 text-xl sm:text-2xl">
            Consider verification risk
          </h3>
          <p className="mt-3 text-muted">
            Verification matters more in smaller markets. In Bangalore and
            Mumbai, a developer&apos;s reputation is somewhat self-regulating;
            in Patna and Kolkata, verification is more on you. Each city guide
            covers the verification steps specific to that market.
          </p>
        </section>

        {/* Platform strengths */}
        <section id="platform-strengths" className="mt-20">
          <h2 className="text-3xl sm:text-4xl">Platform Strengths by City</h2>
          <p className="mt-4 max-w-2xl text-muted">
            Which city markets are strongest for each major ecommerce platform.
            Use this when your project scope is tied to a specific platform.
          </p>
          <div
            role="region"
            aria-label="Platform strengths table, scroll sideways on small screens"
            tabIndex={0}
            className="mt-8 overflow-x-auto rounded-xl border border-line"
          >
            <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
              <thead className="bg-elevated">
                <tr>
                  <th
                    scope="col"
                    className="px-4 py-3 font-heading text-xs font-bold text-ink"
                  >
                    Platform
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 font-heading text-xs font-bold text-ink"
                  >
                    Strongest markets
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 font-heading text-xs font-bold text-ink"
                  >
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody>
                {PLATFORM_STRENGTHS.map((p) => (
                  <tr
                    key={p.platform}
                    className="border-t border-line transition-colors hover:bg-accent/5"
                  >
                    <td className="px-4 py-3.5 align-top font-semibold text-ink">
                      {p.platform}
                    </td>
                    <td className="px-4 py-3.5 align-top text-muted">
                      {p.strongest}
                    </td>
                    <td className="px-4 py-3.5 align-top text-muted">
                      {p.notes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-muted">
            If you are choosing a platform before you hire, see{" "}
            <Link
              href="/shopify-vs-woocommerce-vs-custom"
              className="text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
            >
              Shopify vs WooCommerce vs custom builds
            </Link>
            . For WooCommerce-specific hiring, see{" "}
            <Link
              href="/wordpress-ecommerce-website-developer"
              className="text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
            >
              what to look for in a WordPress ecommerce developer
            </Link>
            .
          </p>
        </section>

        {/* Local vs remote */}
        <section id="local-vs-remote" className="mt-20">
          <h2 className="text-3xl sm:text-4xl">
            Local vs Remote: Does the City Matter?
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            Often, no. For most ecommerce projects, remote works well, and the
            right city to hire from is the one that fits your project scope, not
            the city you are in. Local hiring matters most when you need
            timezone overlap, in-person kickoff or launch support, or want to
            verify the developer in person before committing.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-line bg-card p-6">
              <h3 className="text-xl text-ink">
                When local hiring is the right choice
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                <li>
                  Your team is in India and needs IST overlap for daily
                  collaboration.
                </li>
                <li>
                  Your store depends on seasonal campaigns and you want
                  in-person launch support.
                </li>
                <li>
                  You need a local contract, GST invoicing, and local payment
                  terms.
                </li>
                <li>
                  You want to verify a developer in person before committing.
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-line bg-card p-6">
              <h3 className="text-xl text-ink">
                When remote is the better choice
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                <li>Well-defined template builds with clear scope.</li>
                <li>Ongoing maintenance and small fixes.</li>
                <li>
                  Advanced headless or enterprise builds, where smaller cities
                  are thin.
                </li>
                <li>
                  You want access to a larger senior specialist pool than your
                  city offers.
                </li>
              </ul>
            </div>
          </div>

          <p className="mt-6 text-muted">
            For the full comparison, see{" "}
            <Link
              href="/ecommerce-website-developer-near-me"
              className="text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
            >
              how to find an ecommerce website developer near you
            </Link>
            . For how local and remote models compare on cost and risk, see{" "}
            <Link
              href="/freelancer-vs-agency-vs-in-house"
              className="text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
            >
              freelancer vs agency vs in-house
            </Link>
            .
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="mt-20">
          <h2 className="text-3xl sm:text-4xl">Frequently Asked Questions</h2>
          <div className="mt-8 border-t border-line">
            {[
              {
                q: "Which Indian city has the best ecommerce website developers?",
                a: "Bangalore has the deepest pool, especially for headless, enterprise, and Shopify Plus work. Mumbai is strongest for fashion and lifestyle builds. For most standard WooCommerce or Shopify stores, Ahmedabad, Pune, and Kolkata offer strong talent at lower rates.",
              },
              {
                q: "Which Indian city has the cheapest ecommerce developers?",
                a: "Patna is the cheapest of the cities we cover, followed by Kolkata. For small WooCommerce or Shopify stores, both markets can deliver solid work at rates well below Bangalore or Mumbai.",
              },
              {
                q: "Do I need to hire a developer in my own city?",
                a: "No. For most projects, remote works well. Local hiring matters most when you need timezone overlap, in-person kickoff or launch support, or want to verify the developer in person.",
              },
              {
                q: "How do I compare developers in different cities?",
                a: "Compare on scope fit, portfolio depth, and rates. Then read the individual city guide for the market you are considering, and check whether the local market can actually deliver your project scope.",
              },
              {
                q: "Which city is best for Shopify?",
                a: "Bangalore for Shopify Plus and complex Shopify builds. Mumbai for fashion and lifestyle Shopify. Pune and Ahmedabad are strong for standard Shopify stores at lower rates.",
              },
              {
                q: "Which city is best for WooCommerce?",
                a: "Kolkata and Ahmedabad have the deepest WooCommerce talent. Pune is also strong. Patna is best for small WooCommerce stores with Hindi-language content.",
              },
              {
                q: "Which city is best for headless commerce?",
                a: "Bangalore. It is the only market in the cluster with deep headless talent, and it is the best choice for advanced headless or custom builds.",
              },
            ].map((f) => (
              <details key={f.q} className="group border-b border-line py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-heading text-lg font-bold [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span
                    className="shrink-0 text-accent transition-transform duration-300 group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl text-[17px] leading-[1.8] text-ink/80">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-20 flex flex-col gap-6 border-t border-line pt-10 lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-md text-lg text-muted">
            Use the comparison table to narrow your search, then read the guide
            for the city that fits your scope.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button href="/hire-ecommerce-website-developer" arrow>
              How to hire an ecommerce developer
            </Button>
            <WhatsAppButton
              href={whatsappUrl(
                "Hi Viraj, I'm comparing cities for an ecommerce build and have a question.",
              )}
              source="city_hub_cta"
              variant="outline"
            >
              WhatsApp me
            </WhatsAppButton>
          </div>
        </section>
      </Container>
    </>
  );
}

import Container from "../Container";
import Button from "../Button";
import ImageFrame from "../ImageFrame";

const lines = ["Is your website", "growing your", "business, or"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div 
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full bg-accent/10 blur-[140px]"
      />
      <Container className="relative grid items-center gap-16 pb-24 pt-14 sm:pt-20 lg:grid-cols-[1.25fr_0.75fr] lg:pb-32">
        <div>
          <p data-hero className="font-heading text-xs font-bold uppercase tracking-[0.18em] text-accent">
            E-commerce growth partner 
          </p>

          <h1 className="mt-7 text-[clamp(2.25rem,7vw,4rem)] font-bold">
            {lines.map((l) => (
              <span key={l} className="block overflow-hidden pb-[0.1em]">
                <span data-line className="block">{l}</span>
              </span>
            ))}
            <span className="block overflow-hidden pb-[0.1em]">
              <span data-line className="block text-accent">holding it back?</span>
            </span>
          </h1>

          <p data-hero className="mt-8 max-w-xl text-lg text-muted">
            Answer 16 questions about your store. You get a score, your top three
            priorities and a 90-day plan. It is free and takes about 3 minutes.
          </p>
          <div data-hero className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="/analyzer" arrow>Get my free growth report</Button>
            <Button href="/services" variant="outline">View services</Button>
          </div>
        </div>

        <div className="relative">
          <ImageFrame
            src="/images/hero.webp" 
            alt="Portrait of Viraj Pate"
            label="Add your portrait: public/images/hero.webp"
            priority 
          />
          <div
            data-hero
            className="absolute -bottom-6 left-4 right-4 rounded-2xl border border-line bg-elevated/90 p-5 backdrop-blur-md sm:-left-8 sm:right-auto sm:w-64"
          >
            <p className="text-xs text-muted">Sample growth report</p>
            <p className="mt-1 flex items-baseline gap-1">
              <span className="font-display text-4xl font-bold text-accent">52</span>
              <span className="text-sm text-muted">/100</span>
            </p>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-line">
              <div className="bar-fill h-full w-[52%] rounded-full bg-accent" />
            </div>
            <p className="mt-3 text-xs text-muted">Top priority: Conversion &amp; Sales</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
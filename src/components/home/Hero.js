import Container from "../Container";
import Button from "../Button";

// Sample data so visitors see what the report looks like (labelled as a sample)
const sample = [
  { label: "Website & UX", value: 72 },
  { label: "Traffic & Visibility", value: 44 },
  { label: "Conversion & Sales", value: 31 },
  { label: "Customer Retention", value: 52 },
  { label: "Tech & Operations", value: 68 },
];

export default function Hero() {
  return (
    <section className="bg-ink text-white">
      <Container className="grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h1 className="text-5xl sm:text-7xl">
            Is your website helping your business grow, or holding it back?
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/75">
            Answer 16 questions about your store. You get a score, your top three
            priorities and a 90-day plan. It is free and takes about 3 minutes.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button href="/analyzer">Get my free growth report</Button>
            <Button href="/services" variant="onDark">
              View services
            </Button>
          </div>
          <p className="mt-4 text-sm text-white/60">
            No signup needed to see your score.
          </p>
        </div>

        {/* Sample report */}
        <div
          className="border border-white/15 bg-primary-dark p-6 sm:p-8"
          role="img"
          aria-label="Example report: overall score 52 out of 100, with the lowest category being Conversion and Sales"
        >
          <div className="flex items-end justify-between gap-4 border-b border-white/10 pb-5">
            <div>
              <p className="text-sm text-white/60">Sample growth report</p>
              <p className="font-display text-7xl font-bold leading-none text-accent">
                52<span className="text-3xl text-white/50">/100</span>
              </p>
            </div>
            <p className="max-w-[9rem] text-right text-sm text-white/70">
              Real potential, held back by key gaps
            </p>
          </div>

          <ul className="mt-6 space-y-4" aria-hidden="true">
            {sample.map((s, i) => (
              <li key={s.label}>
                <div className="mb-1.5 flex justify-between text-sm">
                  <span>{s.label}</span>
                  <span className="font-display text-base text-white/70">{s.value}</span>
                </div>
                <div className="h-2 bg-white/10">
                  <div
                    className="bar-fill h-full bg-accent"
                    style={{ width: `${s.value}%`, animationDelay: `${0.2 + i * 0.12}s` }}
                  />
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-6 border-t border-white/10 pt-5 text-sm text-white/70">
            Top priority:{" "}
            <span className="font-semibold text-white">Conversion &amp; Sales</span>
          </p>
        </div>
      </Container>
    </section>
  );
}
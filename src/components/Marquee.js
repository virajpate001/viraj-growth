const words = [
  "Shopify", "WooCommerce", "Next.js", "Store design",
  "Speed", "E-commerce SEO", "Conversion",
];

function Row({ hidden }) {
  return (
    <ul className="flex shrink-0 items-center gap-10 pr-10" aria-hidden={hidden || undefined}>
      {words.map((w, i) => (
        <li key={w} className="flex items-center gap-10">
          <span
            className={`font-display text-5xl font-bold sm:text-7xl ${
              i % 2 ? "text-outline" : "text-ink"
            }`}
          >
            {w}
          </span>
          <span className="h-3 w-3 rotate-45 bg-accent" />
        </li>
      ))}
    </ul>
  );
}

export default function Marquee() {
  return (
    <section aria-label="What I work with" className="overflow-hidden border-y border-line py-8">
      <div className="marquee flex w-max">
        <Row />
        <Row hidden />
      </div>
    </section>
  );
}
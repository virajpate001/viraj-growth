import Container from "../Container";
import { stats } from "@/data/content";

export default function ProofStrip() {
  return (
    <section className="py-20">
      <Container className="grid grid-cols-2 gap-y-10 md:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            data-reveal
            className={i > 0 ? "md:border-l md:border-line md:pl-8" : ""}
          >
            <p className="font-display text-5xl font-bold text-accent sm:text-6xl">{s.value}</p>
            <p className="mt-2 text-sm text-muted">{s.label}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}
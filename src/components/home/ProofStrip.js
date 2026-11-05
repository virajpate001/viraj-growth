import Container from "../Container";
import { stats } from "@/data/content";

export default function ProofStrip() {
  return (
    <section className="bg-accent text-ink">
      <Container className="grid grid-cols-2 gap-y-8 py-9 md:grid-cols-4">
        {stats.map((s, i) => (
          <div key={s.label} className={i > 0 ? "md:border-l-2 md:border-ink/20 md:pl-6" : ""}>
            <p className="font-display text-5xl font-bold leading-none">{s.value}</p>
            <p className="mt-2 text-sm font-medium">{s.label}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}
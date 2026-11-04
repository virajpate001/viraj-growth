import Container from "../Container";
import { stats } from "@/data/content";

export default function ProofStrip() {
  return (
    <section className="border-y border-line bg-white py-10">
      <Container className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="font-display text-3xl font-extrabold text-primary">{s.value}</p>
            <p className="mt-1 text-sm text-muted">{s.label}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}
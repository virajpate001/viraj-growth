import Link from "next/link";
import Container from "../Container";
import FadeIn from "../FadeIn";
import SectionHeading from "../SectionHeading";
import { services } from "@/data/content";

export default function ServicesPreview() {
  return (
    <section className="bg-surface py-20">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="Everything your online store needs"
          text="From building to optimizing, one expert from start to finish."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <FadeIn key={s.slug} delay={(i % 3) * 0.1}>
              <Link
                href={`/services#${s.slug}`}
                className="block h-full rounded-2xl border border-line bg-white p-6 transition-shadow hover:shadow-lg"
              >
                <s.icon className="text-accent-dark" size={28} />
                <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted">{s.short}</p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
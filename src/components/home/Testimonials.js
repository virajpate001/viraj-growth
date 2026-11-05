import Container from "../Container";
import FadeIn from "../FadeIn";
import SectionHeading from "../SectionHeading";
import { Star } from "lucide-react";
import { testimonials } from "@/data/content";

export default function Testimonials() {
  return (
    <section className="bg-surface py-20">
      <Container>
        <SectionHeading eyebrow="Testimonials" title="What clients say" />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <figure className="h-full rounded-2xl border border-line bg-white p-6">
                <div className="mb-3 flex gap-1 text-accent-dark">
                  {[...Array(5)].map((_, n) => (
                    <Star key={n} size={16} fill="currentColor" />
                  ))}
                </div>
                <blockquote className="text-sm text-muted">“{t.quote}”</blockquote>
                <figcaption className="mt-4">
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
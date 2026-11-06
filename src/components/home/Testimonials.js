import Container from "../Container";
import SectionHeading from "../SectionHeading";
import TestimonialCarousel from "./TestimonialCarousel";
import { testimonials } from "@/data/content";

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="Testimonials" title="What clients say" />
        <div data-reveal className="max-w-5xl">
          <TestimonialCarousel items={testimonials} />
        </div>
      </Container>
    </section>
  );
}
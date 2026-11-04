import Container from "../Container";
import Button from "../Button";
import FadeIn from "../FadeIn";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-surface to-white py-20 sm:py-28">
      <Container className="text-center">
        <FadeIn>
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
            E-commerce Growth Partner
          </p>
          <h1 className="mx-auto max-w-3xl text-4xl font-extrabold leading-tight sm:text-6xl">
            Is your website helping your business grow, or holding it back?
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
            Take the free 2-minute Business Growth Analyzer and get a
            personalized report with your score, priorities, and a 90-day
            action plan.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/analyzer">Get My Free Growth Report</Button>
            <Button href="/services" variant="outline">View Services</Button>
          </div>
          <p className="mt-4 text-xs text-muted">
            Free · No signup needed to see your score
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
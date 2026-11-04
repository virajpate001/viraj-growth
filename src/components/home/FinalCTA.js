import Container from "../Container";
import FadeIn from "../FadeIn";
import Button from "../Button";

export default function FinalCTA() {
  return (
    <section className="py-20">
      <Container>
        <FadeIn className="rounded-3xl bg-gradient-to-br from-primary to-primary-dark px-6 py-14 text-center text-white sm:px-12">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold sm:text-4xl">
            Ready to find out what your business really needs?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">
            Get your free Business Growth Report in 2 minutes, or talk to me directly.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/analyzer">Get My Free Report</Button>
            <Button href="/contact" variant="outline" className="!border-white/40 !text-white hover:!bg-white/10">
              Book a Call
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
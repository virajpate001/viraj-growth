import Container from "../Container";
import Button from "../Button";
import WhatsAppButton from "../WhatsAppButton";
import { whatsappUrl, callMessage } from "@/lib/whatsapp";

export default function FinalCTA() {
  return (
    <section className="pb-24 sm:pb-32">
      <Container>
        <div
          data-reveal
          className="relative overflow-hidden rounded-3xl border border-line bg-card px-6 py-16 sm:px-14 sm:py-14"
        >
          <div 
            aria-hidden="true" 
            className="pointer-events-none absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-accent/15 blur-[110px]"
          />
          <h2 className="relative max-w-3xl text-[clamp(2.5rem,6vw,4rem)]">
            Let&apos;s find the <span className="text-accent">one thing</span> holding your business back.
          </h2>
          <p className="relative mt-6 max-w-xl text-lg text-muted">
            Get your free Business Growth Report in 3 minutes, or talk to me directly.
          </p>
          <div className="relative mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="/analyzer" arrow>Get my free report</Button>
            <WhatsAppButton href={whatsappUrl(callMessage())} source="home_cta" variant="outline">
  Book a call
</WhatsAppButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
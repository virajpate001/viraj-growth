import Container from "@/components/Container";

export const metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <Container className="py-20">
      <h1 className="text-4xl font-bold">Our Services</h1>
      <p className="mt-4 text-muted">Learn more about the services we offer to help your business grow.</p>
    </Container>
  );
}
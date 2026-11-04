import Container from "@/components/Container";

export const metadata = { title: "Case Studies" };

export default function CaseStudiesPage() {
  return (
    <Container className="py-20">
      <h1 className="text-4xl font-bold">Case Studies</h1>
      <p className="mt-4 text-muted">Discover how we've helped businesses like yours achieve their growth goals.</p>
    </Container>
  );
}
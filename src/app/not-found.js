import Container from "@/components/Container";
import Button from "@/components/Button";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <Container className="max-w-xl py-24 text-center">
      <p className="font-display text-6xl font-extrabold text-primary">404</p>
      <h1 className="mt-4 text-3xl font-bold">This page does not exist</h1>
      <p className="mt-3 text-muted">
        The link may be old or mistyped. Here are some good places to go instead.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Button href="/">Go to homepage</Button>
        <Button href="/analyzer" variant="outline">Take the Growth Analyzer</Button>
      </div>
    </Container>
  );
}
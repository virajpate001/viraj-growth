"use client";

import Container from "@/components/Container";
import Button from "@/components/Button";

export default function Error({ reset }) {
  return (
    <Container className="max-w-xl py-24 text-center">
      <h1 className="text-3xl font-bold">Something went wrong</h1>
      <p className="mt-3 text-muted">
        Sorry about that. Please try again, and if it keeps happening, email me
        and I will fix it.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Button onClick={() => reset()}>Try again</Button>
        <Button href="/" variant="outline">Go to homepage</Button>
      </div>
    </Container>
  );
}
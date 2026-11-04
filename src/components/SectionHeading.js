import FadeIn from "./FadeIn";

export default function SectionHeading({ eyebrow, title, text }) {
  return (
    <FadeIn className="mx-auto mb-12 max-w-2xl text-center">
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-muted">{text}</p>}
    </FadeIn>
  );
}
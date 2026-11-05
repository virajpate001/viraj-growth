export default function SectionHeading({ eyebrow, title, text }) {
  return (
    <div data-reveal className="mb-14 max-w-3xl">
      {eyebrow && (
        <p className="mb-5 flex items-center gap-3 font-heading text-xs font-bold uppercase tracking-[0.18em] text-accent">
          <span aria-hidden="true" className="h-px w-8 bg-accent" />
          {eyebrow}
        </p>
      )}
      <h2 className="text-4xl sm:text-5xl lg:text-6xl">{title}</h2>
      {text && <p className="mt-5 max-w-xl text-lg text-muted">{text}</p>}
    </div>
  );
}
export default function SectionHeading({ title, text }) {
  return (
    <div className="mb-12 max-w-2xl">
      <h2 className="text-4xl sm:text-5xl">{title}</h2>
      {text && <p className="mt-4 text-lg text-muted">{text}</p>}
    </div>
  );
}
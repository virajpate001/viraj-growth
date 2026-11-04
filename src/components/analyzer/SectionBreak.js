import Button from "../Button";

export default function SectionBreak({ section, index, total, onContinue }) {
  const Icon = section.icon;
  return (
    <div className="py-10 text-center">
      <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
        <Icon size={32} />
      </div>
      <p className="text-xs font-semibold uppercase tracking-wider text-muted">
        Section {index + 1} of {total}
      </p>
      <h2 className="mt-2 text-3xl font-bold">{section.title}</h2>
      <p className="mx-auto mt-3 max-w-md text-muted">{section.intro}</p>
      <Button onClick={onContinue} className="mt-8">Continue</Button>
    </div>
  );
}
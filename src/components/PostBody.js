export default function PostBody({ blocks }) {
  return (
    <div className="space-y-5 text-[17px] leading-relaxed text-ink/90">
      {blocks.map((b, i) => {
        if (b.type === "h2") {
          return <h2 key={i} className="pt-4 text-2xl font-bold text-ink">{b.text}</h2>;
        }
        if (b.type === "ul") {
          return (
            <ul key={i} className="list-disc space-y-2 pl-6">
              {b.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          );
        }
        return <p key={i}>{b.text}</p>;
      })}
    </div>
  );
}
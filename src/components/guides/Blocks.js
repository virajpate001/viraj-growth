import Inline from "./Inline";
import { resolveHref } from "@/lib/guides";

const prose = "text-[17px] leading-[1.8] text-ink/80";

// A paragraph that is only a link to a page that does not exist yet is dropped
function isDeadLinkOnly(nodes) {
  return nodes.length === 1 && nodes[0].a && !resolveHref(nodes[0].a);
}

function Table({ head, rows }) {
  return (
    <div
      role="region"
      aria-label="Data table, scroll sideways on small screens"
      tabIndex={0}
      className="my-8 overflow-x-auto rounded-xl border border-line"
    >
      <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
        <thead className="bg-elevated">
          <tr>
            {head.map((h, i) => (
              <th key={i} scope="col" className="px-4 py-3 font-heading text-xs font-bold text-ink">
                <Inline nodes={h} />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, r) => (
            <tr key={r} className="border-t border-line transition-colors hover:bg-accent/5">
              {row.map((cell, c) => (
                <td
                  key={c}
                  className={`px-4 py-3.5 align-top ${c === 0 ? "font-semibold text-ink" : "text-muted"}`}
                >
                  <Inline nodes={cell} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Block({ b }) {
  switch (b.type) {
    case "p":
      if (isDeadLinkOnly(b.inline)) return null;
      return (
        <p className={prose}>
          <Inline nodes={b.inline} />
        </p>
      );
    case "summary":
      return (
        <p className="rounded-r-xl border-l-2 border-accent bg-accent/[0.07] p-6 text-lg leading-relaxed text-ink">
          <Inline nodes={b.inline} />
        </p>
      );
    case "h3":
      return <h3 className="pt-4 text-xl text-ink sm:text-2xl">{b.text}</h3>;
    case "ul":
      return (
        <ul className="space-y-3">
          {b.items.map((it, i) => (
            <li
              key={i}
              className={`relative pl-6 ${prose} before:absolute before:left-0 before:top-[0.8em] before:h-1.5 before:w-1.5 before:bg-accent`}
            >
              <Inline nodes={it} />
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="list-decimal space-y-3 pl-6 marker:font-bold marker:text-accent">
          {b.items.map((it, i) => (
            <li key={i} className={`pl-2 ${prose}`}>
              <Inline nodes={it} />
            </li>
          ))}
        </ol>
      );
    case "table":
      return <Table head={b.head} rows={b.rows} />;
    case "quote":
      return (
        <blockquote className="border-l-2 border-accent pl-5 font-display text-lg leading-snug text-ink sm:text-xl">
          <Inline nodes={b.inline} />
        </blockquote>
      );
    case "card":
      return (
        <article className="space-y-4 rounded-2xl border border-line bg-card p-6 sm:p-8">
          {b.title && <h3 className="text-2xl text-ink">{b.title}</h3>}
          <Blocks blocks={b.blocks} />
        </article>
      );
    default:
      return null;
  }
}

export default function Blocks({ blocks }) {
  return blocks.map((b, i) => <Block key={i} b={b} />);
}

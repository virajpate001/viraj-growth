import Link from "next/link";
import { resolveHref } from "@/lib/guides";

// Renders the inline pieces of a paragraph: text, bold, italic and links.
// Links to pages that do not exist yet are shown as plain text.
export default function Inline({ nodes }) {
  return nodes.map((n, i) => {
    if (typeof n === "string") return n;
    if (n.b) {
      return (
        <strong key={i} className="font-semibold text-ink">
          <Inline nodes={n.b} />
        </strong>
      );
    }
    if (n.i) {
      return (
        <em key={i}>
          <Inline nodes={n.i} />
        </em>
      );
    }
    if (n.a) {
      const href = resolveHref(n.a);
      if (!href) return <Inline key={i} nodes={n.t} />;
      const cls =
        "text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-accent";
      if (/^(https?:|mailto:|tel:)/.test(href)) {
        return (
          <a key={i} href={href} target="_blank" rel="noopener noreferrer" className={cls}>
            <Inline nodes={n.t} />
          </a>
        );
      }
      return (
        <Link key={i} href={href} className={cls}>
          <Inline nodes={n.t} />
        </Link>
      );
    }
    return null;
  });
}

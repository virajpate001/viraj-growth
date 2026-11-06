import { Plus } from "lucide-react";
import Inline from "./Inline";

export default function FaqList({ faqs }) {
  return (
    <div className="mt-8 border-t border-line">
      {faqs.map((f) => (
        <details key={f.q} className="group border-b border-line py-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-heading text-lg font-bold [&::-webkit-details-marker]:hidden">
            {f.q}
            <Plus size={22} className="shrink-0 text-accent transition-transform duration-300 group-open:rotate-45" />
          </summary>
          <p className="mt-4 max-w-2xl text-[17px] leading-[1.8] text-ink/80">
            <Inline nodes={f.a} />
          </p>
        </details>
      ))}
    </div>
  );
}

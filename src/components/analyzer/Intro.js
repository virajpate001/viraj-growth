import { Clock, Gift, ShieldCheck } from "lucide-react";
import Button from "../Button";

const points = [
  { icon: Clock, text: "Takes about 3 minutes" },
  { icon: Gift, text: "100% free, no signup needed to see your score" },
  { icon: ShieldCheck, text: "Your answers stay private" },
];

export default function Intro({ onStart }) {
  return (
    <div className="text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
        Business Growth Analyzer
      </p>
      <h1 className="text-3xl font-extrabold sm:text-5xl">
        Find out what is really holding your business back
      </h1>
      <p className="mx-auto mt-5 max-w-xl text-muted">
        Answer 16 quick questions about your business, website, customers and
        sales. You'll get a personalized Growth Report with your score,
        priorities and a 90-day action plan.
      </p>
      <ul className="mx-auto mt-8 flex max-w-md flex-col gap-3 text-left">
        {points.map((p) => (
          <li key={p.text} className="flex items-center gap-3 text-sm">
            <p.icon size={20} className="shrink-0 text-primary" />
            {p.text}
          </li>
        ))}
      </ul>
      <Button onClick={onStart} className="mt-10">Start the Analyzer</Button>
    </div>
  );
}
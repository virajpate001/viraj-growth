import Button from "../Button";
import { encodeAnswers } from "@/lib/share";

export default function Complete({ answers, onReset }) {
  const code = encodeAnswers(answers);

  return (
    <div className="py-6 text-center">
      <p className="text-5xl">📊</p>
      <h2 className="mt-4 text-3xl font-bold">Your report is ready</h2>
      <p className="mx-auto mt-3 max-w-md text-muted">
        We analyzed your answers across 5 areas. See your score, top
        priorities and a 90-day action plan.
      </p>
      <Button
        href={`/analyzer/report?r=${encodeURIComponent(code)}`}
        className="mt-8"
      >
        View my Growth Report
      </Button>
      <div className="mt-6">
        <button
          type="button"
          onClick={onReset}
          className="text-xs text-muted underline hover:text-ink"
        >
          Start over
        </button>
      </div>
    </div>
  );
}
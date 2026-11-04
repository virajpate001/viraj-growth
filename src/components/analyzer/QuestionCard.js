import { Check, ArrowLeft } from "lucide-react";
import Button from "../Button";

export default function QuestionCard({
  question,
  answer,
  onSelect,
  onToggle,
  onNext,
  onBack,
}) {
  const isMulti = question.type === "multi";
  const selected = isMulti ? answer || [] : answer;
  const hasAnswer = isMulti ? selected.length > 0 : Boolean(selected);
  const atMax = isMulti && question.max && selected.length >= question.max;

  return (
    <div>
      <h2 className="text-2xl font-bold sm:text-3xl">{question.text}</h2>
      {question.helper && (
        <p className="mt-2 text-sm text-muted">{question.helper}</p>
      )}

      <div className="mt-8 grid gap-3">
        {question.options.map((opt) => {
          const isSelected = isMulti
            ? selected.includes(opt.value)
            : selected === opt.value;
          const disabled = isMulti && atMax && !isSelected;

          return (
            <button
              key={opt.value}
              type="button"
              disabled={disabled}
              aria-pressed={isSelected}
              onClick={() =>
                isMulti ? onToggle(question, opt.value) : onSelect(question, opt.value)
              }
              className={`flex items-center justify-between rounded-xl border-2 px-5 py-4 text-left text-base font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                isSelected
                  ? "border-primary bg-primary/5 text-primary"
                  : "border-line bg-white hover:border-primary/40"
              } ${disabled ? "cursor-not-allowed opacity-40" : ""}`}
            >
              <span>{opt.label}</span>
              {isSelected && <Check size={20} className="shrink-0" />}
            </button>
          );
        })}
      </div>

      <div className="mt-8 flex items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-1 text-sm font-medium text-muted hover:text-ink"
        >
          <ArrowLeft size={16} /> Back
        </button>
        <Button
          onClick={onNext}
          disabled={!hasAnswer}
          className="disabled:cursor-not-allowed disabled:opacity-40"
        >
          {isMulti ? "Continue" : "Next"}
        </Button>
      </div>
    </div>
  );
}
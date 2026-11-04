export default function ProgressBar({ done, total }) {
  const pct = Math.round((done / total) * 100);
  return (
    <div className="mb-8">
      <div className="mb-2 flex justify-between text-xs font-medium text-muted">
        <span>Question {Math.min(done + 1, total)} of {total}</span>
        <span>{pct}%</span>
      </div>
      <div
        className="h-2 overflow-hidden rounded-full bg-line"
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="h-full rounded-full bg-accent transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
import Button from "../Button";

export default function Complete({ answers, onReset }) {
  return (
    <div className="text-center">
      <p className="text-5xl">🎉</p>
      <h2 className="mt-4 text-3xl font-bold">All done!</h2>
      <p className="mx-auto mt-3 max-w-md text-muted">
        Your answers are saved. On Day 4 this screen becomes your personalized
        Growth Report.
      </p>

      {/* Temporary debug view. Delete on Day 4 */}
      <pre className="mx-auto mt-8 max-h-72 max-w-md overflow-auto rounded-xl bg-surface p-4 text-left text-xs">
        {JSON.stringify(answers, null, 2)}
      </pre>

      <Button onClick={onReset} variant="outline" className="mt-8">
        Start over
      </Button>
    </div>
  );
}
export default function BeforeAfter({ metrics }) {
  return (
    <div className="space-y-8">
      {metrics.map((m) => {
        const max = Math.max(m.before, m.after);
        return (
          <div key={m.label}>
            <p className="mb-3 text-sm font-semibold">{m.label}</p>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="w-14 text-xs text-muted">Before</span>
                <div className="h-3 flex-1 overflow-hidden rounded-full bg-line">
                  <div className="h-full rounded-full bg-slate-400" style={{ width: `${(m.before / max) * 100}%` }} />
                </div>
                <span className="w-20 text-right text-sm text-muted">{m.before}{m.suffix}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-14 text-xs font-semibold text-green-700">After</span>
                <div className="h-3 flex-1 overflow-hidden rounded-full bg-line">
                  <div className="h-full rounded-full bg-green-500" style={{ width: `${(m.after / max) * 100}%` }} />
                </div>
                <span className="w-20 text-right text-sm font-bold">{m.after}{m.suffix}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
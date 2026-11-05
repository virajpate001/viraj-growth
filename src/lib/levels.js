export function getLevel(score) {
  if (score >= 70) return "high";
  if (score >= 40) return "mid";
  return "low";
}

export const levelStyles = {
  high: { label: "Strong", bar: "bg-green-500", badge: "bg-green-500/15 text-green-400" },
  mid: { label: "Room to grow", bar: "bg-amber-500", badge: "bg-amber-500/15 text-amber-300" },
  low: { label: "Needs attention", bar: "bg-red-500", badge: "bg-red-500/15 text-red-400" },
};
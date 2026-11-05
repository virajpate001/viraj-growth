export function getLevel(score) {
  if (score >= 70) return "high";
  if (score >= 40) return "mid";
  return "low";
}

export const levelStyles = {
  high: { label: "Strong", bar: "bg-green-500", badge: "bg-green-100 text-green-700" },
  mid: { label: "Room to grow", bar: "bg-amber-500", badge: "bg-amber-100 text-amber-700" },
  low: { label: "Needs attention", bar: "bg-red-500", badge: "bg-red-100 text-red-700" },
};
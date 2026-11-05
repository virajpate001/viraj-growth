// Formats numbers the Indian way: ₹45,000 / ₹2.5 lakh / ₹1.2 crore
export function formatINR(n) {
  if (n >= 1e7) return `₹${(n / 1e7).toFixed(1).replace(/\.0$/, "")} crore`;
  if (n >= 1e5) return `₹${(n / 1e5).toFixed(1).replace(/\.0$/, "")} lakh`;
  return `₹${Math.round(n).toLocaleString("en-IN")}`;
}

export function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
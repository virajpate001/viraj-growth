// Uses your real domain on Vercel, and localhost in development
const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : null;

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  vercelUrl ||
  "http://localhost:3000"
).replace(/\/$/, "");

export const site = {
  name: "Viraj Pate",
  title: "Viraj Pate | Shopify & WooCommerce Developer for D2C Brands",
  description:
    "Freelance Shopify and WooCommerce developer for D2C brands and growing online stores. Take the free Business Growth Analyzer to see what is holding your store back.",
  jobTitle: "E-commerce Web Designer & Developer",
  // Add your real profile links (LinkedIn, Upwork, Clutch, Instagram)
  sameAs: [
    // "https://www.linkedin.com/in/your-profile",
  ],
};
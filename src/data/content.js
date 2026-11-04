import {
  ShoppingBag, Store, Code2, Palette, Gauge, Search,
  ClipboardList, BarChart3, Rocket,
} from "lucide-react";

export const stats = [
  { value: "6+", label: "Years experience" },
  { value: "20+", label: "E-commerce stores built" },
  { value: "2", label: "Platforms mastered" },
  { value: "100%", label: "Focus on results" },
];

export const steps = [
  {
    icon: ClipboardList,
    title: "Answer a few questions",
    text: "Tell us about your business, website, customers and challenges. It takes about 2 minutes.",
  },
  {
    icon: BarChart3,
    title: "Get your Growth Report",
    text: "See your score, your top 3 priorities, quick wins and a 30/60/90-day roadmap.",
  },
  {
    icon: Rocket,
    title: "Take action",
    text: "Use the report yourself, or book a free call and we'll turn it into a plan together.",
  },
];

export const services = [
  {
    slug: "shopify-development",
    icon: ShoppingBag,
    title: "Shopify Development",
    short: "Fast, conversion-focused Shopify stores built to scale.",
    problem: "Your store looks fine but visitors are not turning into buyers.",
    audience: "D2C brands, startups and growing stores.",
    includes: ["Custom theme setup", "Product and collection structure", "Payment and shipping setup", "App integrations"],
  },
  {
    slug: "woocommerce-development",
    icon: Store,
    title: "WooCommerce Development",
    short: "Flexible WordPress stores with full control over your data.",
    problem: "You need custom features that hosted platforms can't offer.",
    audience: "Businesses with complex catalogs or custom workflows.",
    includes: ["Custom plugin setup", "Product variations and bundles", "Payment gateway integration", "Security and backups"],
  },
  {
    slug: "custom-nextjs-websites",
    icon: Code2,
    title: "Custom Next.js Websites",
    short: "Lightning-fast custom sites and web apps.",
    problem: "Templates are too limiting for what your business needs.",
    audience: "Brands that want a unique, high-performance experience.",
    includes: ["Custom design and build", "SEO-ready architecture", "CMS integration", "Vercel hosting setup"],
  },
  {
    slug: "store-redesign",
    icon: Palette,
    title: "Store Redesign",
    short: "Modern, trust-building design that lifts conversions.",
    problem: "Your design feels outdated and customers don't trust it.",
    audience: "Established stores with traffic but low sales.",
    includes: ["UX audit", "New design system", "Mobile-first layouts", "Checkout improvements"],
  },
  {
    slug: "speed-optimization",
    icon: Gauge,
    title: "Speed Optimization",
    short: "Cut load times and keep more visitors.",
    problem: "Your site is slow and visitors leave before it loads.",
    audience: "Any store with a slow mobile experience.",
    includes: ["Core Web Vitals fixes", "Image and script optimization", "App cleanup", "Before/after reporting"],
  },
  {
    slug: "seo-optimization",
    icon: Search,
    title: "E-commerce SEO",
    short: "Get found by customers who are ready to buy.",
    problem: "Great products, but nobody can find you on Google.",
    audience: "Stores that depend too much on paid ads.",
    includes: ["Technical SEO audit", "Product page optimization", "Schema markup", "Content strategy"],
  },
];

export const caseStudy = {
  tag: "Fashion D2C Brand",
  title: "How a clothing brand doubled its conversion rate",
  text: "Sample description: slow site, confusing checkout and weak mobile experience. We rebuilt the store with a focus on speed and a simpler buying flow.",
  results: [
    { value: "+112%", label: "Conversion rate" },
    { value: "1.4s", label: "Load time (from 5.2s)" },
    { value: "+68%", label: "Monthly revenue" },
  ],
};

export const testimonials = [
  {
    name: "Client Name",
    role: "Founder, Brand Name",
    quote: "Sample testimonial. Viraj understood our business and delivered a store that actually sells.",
  },
  {
    name: "Client Name",
    role: "Owner, Brand Name",
    quote: "Sample testimonial. Our site is faster, cleaner and our sales went up within weeks.",
  },
  {
    name: "Client Name",
    role: "CEO, Brand Name",
    quote: "Sample testimonial. Professional, quick to respond, and focused on results.",
  },
];

export const process = [
  { title: "Discover", text: "We talk about your goals, customers and current challenges." },
  { title: "Plan", text: "I create a clear scope, timeline and price before any work starts." },
  { title: "Build", text: "Design and development with regular updates and feedback rounds." },
  { title: "Launch & Grow", text: "Testing, launch, and ongoing improvements based on real data." },
];

export const skills = [
  "Shopify", "WooCommerce", "Next.js", "React", "WordPress",
  "Tailwind CSS", "SEO", "Speed Optimization", "UI/UX Design",
];
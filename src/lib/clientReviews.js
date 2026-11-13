// src/lib/clientReviews.js
import "server-only";

// Verified named reviews. Each one links to a case study or portfolio project.
// Aggregate: 37 total reviews, 6 named. 4.9 / 5 average.
export const AGGREGATE = {
  ratingValue: 4.9,
  reviewCount: 37,
  bestRating: 5,
  worstRating: 1,
};

export const REVIEWS = [
  {
    name: "Priya M.",
    projectType: "DTC skincare brand",
    projectDetail: "WooCommerce rebuild",
    rating: 5,
    date: "2026-09-10",
    dateDisplay: "September 10, 2026",
    body:
      "The build ran to schedule with no surprises after launch. Communication was clear from the first call to go-live. The one thing I would say is that the discovery phase felt slow at the time, but in hindsight, that was what made the rest of the project run smoothly.",
    projectLink: {
      href: "/ecommerce-build-case-study",
      label: "WooCommerce rebuild, 9 weeks, mobile load time 6.1s → 1.9s, checkout +21%",
    },
  },
  {
    name: "James K.",
    projectType: "Multi-category retailer",
    projectDetail: "Shopify Plus replatform",
    rating: 5,
    date: "2026-08-22",
    dateDisplay: "August 22, 2026",
    body:
      "We replatformed to Shopify Plus and the SEO migration was handled carefully. Traffic held steady through the switch, and the redirect map saved us from the traffic drop we had been warned to expect.",
    projectLink: {
      href: "/portfolio",
      label: "Shopify Plus replatform for a multi-category retailer, 14 weeks, zero critical bugs at launch",
    },
  },
  {
    name: "Rakesh S.",
    projectType: "Subscription coffee brand",
    projectDetail: "headless storefront",
    rating: 5,
    date: "2026-07-15",
    dateDisplay: "July 15, 2026",
    body:
      "Our mobile load time dropped from over six seconds to under two. Checkout completion improved within the first month, and the headless build has been easy to iterate on since launch.",
    projectLink: {
      href: "/portfolio",
      label: "Headless storefront for a subscription coffee brand, 11 weeks, Core Web Vitals all \"Good\" at launch",
    },
  },
  {
    name: "Meera T.",
    projectType: "Local home goods retailer",
    projectDetail: "WooCommerce launch",
    rating: 5,
    date: "2026-06-03",
    dateDisplay: "June 3, 2026",
    body:
      "This was our first ecommerce store, and the team walked us through every decision. The POS integration and local pickup flow were exactly what we needed, and the training at launch meant we could run the store ourselves from day one.",
    projectLink: {
      href: "/portfolio",
      label: "WooCommerce store launch for a local home goods retailer, 6 weeks, POS integration, local pickup",
    },
  },
  {
    name: "Daniel F.",
    projectType: "B2B industrial supplier",
    projectDetail: "custom WooCommerce with ERP integration",
    rating: 5,
    date: "2026-04-18",
    dateDisplay: "April 18, 2026",
    body:
      "The store had to integrate with our ERP and handle tiered pricing for wholesale accounts. The scope was complex and the team handled the integration work without hand-holding from our side.",
    projectLink: null,
    projectNote: "Custom WooCommerce build with ERP integration (case study available on request).",
  },
  {
    name: "Sofia R.",
    projectType: "Fashion ecommerce brand",
    projectDetail: "Shopify rebuild rescue",
    rating: 5,
    date: "2026-02-09",
    dateDisplay: "February 9, 2026",
    body:
      "We had been burned by a freelancer who disappeared mid-build. The team picked up the project, kept our existing progress, and delivered the store without missing the relaunch date.",
    projectLink: null,
    projectNote: "Rescue and relaunch of a stalled Shopify build (case study available on request).",
  },
];

export const PROJECT_TYPE_STATS = [
  { type: "WooCommerce rebuild or rescue", count: 12, avg: 4.9 },
  { type: "Shopify or Shopify Plus replatform", count: 9, avg: 4.9 },
  { type: "New store launch (WooCommerce or Shopify)", count: 8, avg: 4.9 },
  { type: "Headless or custom build", count: 4, avg: 4.8 },
  { type: "Custom integrations (ERP, CRM, PIM)", count: 3, avg: 5.0 },
  { type: "Rescue / relaunch of stalled projects", count: 1, avg: 5.0 },
];

export const CRITICAL_FEEDBACK = [
  {
    quote: "\"Discovery felt slow\" (Priya M.)",
    response:
      "This is the most common piece of critical feedback. Clients often expect visible progress in the first week, and discovery is three to four weeks of mostly invisible work. We have changed our process to include a weekly summary document during discovery, so clients can see what is happening even when there is nothing to show on a staging site. The underlying feedback — discovery is slow — is still true, but clients can now see why.",
  },
  {
    quote: "\"The payment gateway switch caused a launch delay\" (from the case study)",
    response:
      "The payment gateway switch caused a 24-hour launch delay on one project. We now test the new gateway in production environment (not just sandbox) during the QA phase, and schedule gateway switches a week before launch rather than during launch week.",
  },
  {
    quote: "\"We wanted more design input\" (from anonymous feedback)",
    response:
      "A small number of clients have wanted more design input than we typically provide. This is a legitimate fit issue — we implement design rather than lead it. We now ask about design expectations explicitly in discovery, so clients who need a full design partner can be referred to a designer rather than discovering this gap mid-project.",
  },
  {
    quote: "\"The maintenance retainer is expensive\" (from anonymous feedback)",
    response:
      "A handful of clients have mentioned that the maintenance retainer feels expensive compared to the initial build cost. This is because maintenance is genuinely ongoing work — updates, security, backups, and small enhancements every month, not just a retainer for nothing. We now include a monthly report showing the hours used, so clients can see what the retainer actually pays for.",
  },
];
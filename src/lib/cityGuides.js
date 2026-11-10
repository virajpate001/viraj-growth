// src/lib/cityGuides.js
import "server-only";

// Metadata for each city guide. Keep this in sync with the actual guide JSON
// files in src/content/guides/. If a guide is unpublished, its `slug` simply
// won't resolve and the card renders as plain text (no broken links).
export const CITY_GUIDES = [
  {
    slug: "ecommerce-website-developer-ahmedabad",
    city: "Ahmedabad",
    country: "India",
    midLevelRate: "₹1,000 - ₹2,500",
    bestFor: "WooCommerce, Shopify, cost-sensitive builds",
    talentDepth: "Strong on WooCommerce and Shopify; thin on headless",
    summary:
      "Ahmedabad is one of India's more cost-effective markets for ecommerce development, with strong WooCommerce and Shopify expertise and a growing D2C base in apparel, jewelry, home goods, and food. The market's main gap is headless commerce and enterprise platform work, which are usually sourced from Bangalore or Mumbai.",
    bestForLine:
      "small and mid-market WooCommerce or Shopify stores that want local accountability and lower rates.",
  },
  {
    slug: "ecommerce-website-developer-bangalore",
    city: "Bangalore",
    country: "India",
    midLevelRate: "₹1,500 - ₹3,000",
    bestFor: "Shopify Plus, headless, enterprise platforms",
    talentDepth: "Deepest talent pool in India",
    summary:
      "Bangalore has the deepest ecommerce developer talent pool in India, including strong Shopify Plus, headless, and enterprise platform expertise. The main gap is availability: the best developers are in high demand and have longer lead times.",
    bestForLine:
      "complex builds, headless storefronts, high-traffic stores, and enterprise platforms.",
  },
  {
    slug: "ecommerce-website-developer-mumbai",
    city: "Mumbai",
    country: "India",
    midLevelRate: "₹1,200 - ₹2,800",
    bestFor: "Fashion and lifestyle Shopify, seasonal campaigns",
    talentDepth: "Strong on Shopify and Magento; moderate on headless",
    summary:
      "Mumbai has strong Shopify and Magento expertise, especially for fashion, lifestyle, and retail brands. The local market is accustomed to high-traffic seasonal sales and mobile-first shopping behaviour. The main gap is headless depth, which is stronger in Bangalore.",
    bestForLine:
      "fashion and lifestyle D2C brands, seasonal campaign support, and Shopify Plus builds.",
  },
  {
    slug: "ecommerce-website-developer-kolkata",
    city: "Kolkata",
    country: "India",
    midLevelRate: "₹800 - ₹2,000",
    bestFor: "WooCommerce, WordPress, Bengali-language stores",
    talentDepth: "Very strong on WooCommerce; thin on headless and enterprise",
    summary:
      "Kolkata is India's most cost-effective major market for WooCommerce and WordPress development, with strong local expertise and a growing D2C scene in ethnic fashion, food, tea, and handicrafts. The main gap is headless, Shopify Plus, and enterprise platform work.",
    bestForLine:
      "WooCommerce stores, Bengali-language commerce, and cost-sensitive projects.",
  },
  {
    slug: "ecommerce-website-developer-pune",
    city: "Pune",
    country: "India",
    midLevelRate: "₹900 - ₹2,200",
    bestFor: "Shopify, WooCommerce, SaaS-adjacent commerce",
    talentDepth: "Strong on Shopify and WooCommerce; moderate on headless",
    summary:
      "Pune offers the best value among India's tier-one markets for ecommerce development, with strong Shopify and WooCommerce talent, deep engineering discipline from the city's IT services sector, and growing SaaS-adjacent commerce expertise. The main gap is senior specialist availability.",
    bestForLine:
      "Shopify and WooCommerce builds, SaaS-adjacent commerce, and teams that value engineering discipline.",
  },
  {
    slug: "ecommerce-website-developer-patna",
    city: "Patna",
    country: "India",
    midLevelRate: "₹500 - ₹1,800",
    bestFor: "Small WooCommerce and Hindi-language stores",
    talentDepth: "Limited; best for small, standard builds",
    summary:
      "Patna is one of the cheapest markets in India for ecommerce development, with strong WooCommerce and WordPress capability and a growing base of small, Hindi-language stores. The main gap is specialist depth: the local market is limited on headless, enterprise, and custom checkout work.",
    bestForLine:
      "small, standard WooCommerce or Shopify stores with Hindi-language content and a tight budget. For complex projects, remote is usually a better fit.",
  },
  {
    slug: "ecommerce-website-developer-lahore",
    city: "Lahore",
    country: "Pakistan",
    midLevelRate: "PKR 800 - 2,000",
    bestFor: "Shopify and WooCommerce for Pakistani D2C brands",
    talentDepth: "Moderate; strong on Shopify, moderate on WooCommerce",
    summary:
      "Lahore has a growing ecommerce developer market, with moderate Shopify and WooCommerce depth and a strong base of Pakistani D2C brands in fashion, food, and consumer goods. The main gap is headless and enterprise platform work, and the local market is smaller than the Indian cities in this cluster.",
    bestForLine:
      "Pakistani D2C brands on Shopify or WooCommerce that want a local team.",
  },
];
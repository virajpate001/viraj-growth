import { Building2, Globe, Users, TrendingUp, Target } from "lucide-react";

/**
 * SCORING NOTES (used on Day 4)
 * - Every scored option has `score` (0-100, higher = better).
 * - `category` says which report category the question feeds:
 *   website | traffic | conversion | retention | tech
 * - Questions with no `category` are profile questions (not scored).
 * - "multi" questions: option scores are points, added up and capped at 100.
 * - Options with a `number` hold a mid-point value for the revenue estimate.
 */

export const categories = {
  website: "Website & UX",
  traffic: "Traffic & Visibility",
  conversion: "Conversion & Sales",
  retention: "Customer Retention",
  tech: "Tech & Operations",
};

export const sections = [
  { id: "business", title: "Your business", icon: Building2, intro: "Let's start with the basics so your report fits your situation." },
  { id: "website", title: "Your website", icon: Globe, intro: "Now let's look at how your website is set up today." },
  { id: "customers", title: "Your customers", icon: Users, intro: "Great. Now let's look at how customers find you and come back." },
  { id: "sales", title: "Your sales", icon: TrendingUp, intro: "Almost there. Numbers help us estimate your opportunity. A rough guess is fine." },
  { id: "challenges", title: "Your challenges", icon: Target, intro: "Last one. Tell us what is holding you back the most." },
];

export const questions = [
  // ---------- BUSINESS (profile, not scored) ----------
  {
    id: "industry",
    section: "business",
    text: "What type of products do you sell?",
    type: "single",
    options: [
      { label: "Fashion & apparel", value: "fashion" },
      { label: "Beauty & wellness", value: "beauty" },
      { label: "Jewelry & accessories", value: "jewelry" },
      { label: "Food & beverage", value: "food" },
      { label: "Home & lifestyle", value: "home" },
      { label: "Electronics & gadgets", value: "electronics" },
      { label: "B2B / wholesale", value: "b2b" },
      { label: "Something else", value: "other" },
    ],
  },
  {
    id: "stage",
    section: "business",
    text: "Which stage is your business at?",
    type: "single",
    options: [
      { label: "Just an idea", value: "idea" },
      { label: "Launched in the last year", value: "new" },
      { label: "Growing (1 to 3 years)", value: "growing" },
      { label: "Established (3+ years)", value: "established" },
    ],
  },
  {
    id: "revenue",
    section: "business",
    text: "What is your average monthly revenue?",
    type: "single",
    options: [
      { label: "No sales yet", value: "none" },
      { label: "Under ₹1 lakh", value: "lt1" },
      { label: "₹1 to 5 lakh", value: "1to5" },
      { label: "₹5 to 20 lakh", value: "5to20" },
      { label: "₹20 lakh+", value: "20plus" },
    ],
  },

  // ---------- WEBSITE ----------
  {
    id: "platform",
    section: "website",
    category: "tech",
    text: "What is your website built on?",
    type: "single",
    options: [
      { label: "Shopify", value: "shopify", score: 85 },
      { label: "WooCommerce (WordPress)", value: "woo", score: 75 },
      { label: "Custom-coded website", value: "custom", score: 80 },
      { label: "Wix, Squarespace or similar builder", value: "builder", score: 45 },
      { label: "Only marketplaces or social media", value: "marketplace", score: 20 },
      { label: "No website yet", value: "none", score: 0 },
    ],
  },
  {
    id: "design",
    section: "website",
    category: "website",
    text: "How would you describe your website's design?",
    type: "single",
    options: [
      { label: "Modern and professional", value: "modern", score: 90 },
      { label: "Okay, but a bit dated", value: "okay", score: 60 },
      { label: "Outdated or looks like a basic template", value: "outdated", score: 30 },
      { label: "I don't have a website", value: "none", score: 0 },
    ],
  },
  {
    id: "mobile",
    section: "website",
    category: "website",
    text: "How does your website work on a mobile phone?",
    helper: "Most online shoppers in India buy from their phones.",
    type: "single",
    options: [
      { label: "Great, smooth and easy to buy", value: "great", score: 90 },
      { label: "Works, but has some issues", value: "some", score: 60 },
      { label: "Hard to use on mobile", value: "poor", score: 25 },
      { label: "I'm not sure", value: "unsure", score: 30 },
    ],
  },
  {
    id: "speed",
    section: "website",
    category: "tech",
    text: "How fast does your website load?",
    helper: "Roughly, on a mobile connection.",
    type: "single",
    options: [
      { label: "Under 2 seconds", value: "fast", score: 95 },
      { label: "2 to 4 seconds", value: "medium", score: 65 },
      { label: "More than 4 seconds", value: "slow", score: 25 },
      { label: "I don't know", value: "unsure", score: 35 },
    ],
  },

  // ---------- CUSTOMERS ----------
  {
    id: "sources",
    section: "customers",
    category: "traffic",
    text: "How do customers find you today?",
    helper: "Select all that apply.",
    type: "multi",
    options: [
      { label: "Google search", value: "search", score: 35 },
      { label: "Social media (organic)", value: "social", score: 20 },
      { label: "Paid ads (Google, Meta)", value: "ads", score: 20 },
      { label: "Email or WhatsApp", value: "email", score: 15 },
      { label: "Word of mouth / referrals", value: "referral", score: 10 },
      { label: "Marketplaces (Amazon, Flipkart)", value: "marketplace", score: 5 },
    ],
  },
  {
    id: "repeat",
    section: "customers",
    category: "retention",
    text: "What share of your customers buy from you again?",
    type: "single",
    options: [
      { label: "Less than 10%", value: "lt10", score: 20 },
      { label: "10% to 25%", value: "10to25", score: 50 },
      { label: "25% to 40%", value: "25to40", score: 80 },
      { label: "More than 40%", value: "40plus", score: 95 },
      { label: "I don't know", value: "unsure", score: 30 },
    ],
  },
  {
    id: "email",
    section: "customers",
    category: "retention",
    text: "How do you use email or WhatsApp marketing?",
    type: "single",
    options: [
      { label: "I don't have a customer list", value: "none", score: 10 },
      { label: "I have a list but rarely message it", value: "rare", score: 40 },
      { label: "I send regular campaigns", value: "campaigns", score: 70 },
      { label: "Automated flows plus campaigns", value: "automated", score: 95 },
    ],
  },

  // ---------- SALES ----------
  {
    id: "visitors",
    section: "sales",
    category: "traffic",
    text: "How many people visit your website each month?",
    type: "single",
    options: [
      { label: "Under 500", value: "lt500", score: 10, number: 250 },
      { label: "500 to 2,000", value: "500to2k", score: 30, number: 1000 },
      { label: "2,000 to 10,000", value: "2kto10k", score: 55, number: 5000 },
      { label: "10,000 to 50,000", value: "10kto50k", score: 80, number: 25000 },
      { label: "50,000+", value: "50kplus", score: 95, number: 75000 },
      { label: "I don't know", value: "unsure", score: 25, number: 1000 },
    ],
  },
  {
    id: "conversion",
    section: "sales",
    category: "conversion",
    text: "What percentage of visitors place an order?",
    helper: "This is your conversion rate. The e-commerce average is around 2%.",
    type: "single",
    options: [
      { label: "Under 0.5%", value: "lt05", score: 15, number: 0.25 },
      { label: "0.5% to 1%", value: "05to1", score: 35, number: 0.75 },
      { label: "1% to 2%", value: "1to2", score: 60, number: 1.5 },
      { label: "2% to 3%", value: "2to3", score: 85, number: 2.5 },
      { label: "3% or more", value: "3plus", score: 95, number: 3.5 },
      { label: "I don't know", value: "unsure", score: 30, number: 1 },
    ],
  },
  {
    id: "aov",
    section: "sales",
    text: "What is your average order value?",
    type: "single",
    options: [
      { label: "Under ₹500", value: "lt500", number: 350 },
      { label: "₹500 to ₹1,500", value: "500to1500", number: 1000 },
      { label: "₹1,500 to ₹3,000", value: "1500to3000", number: 2250 },
      { label: "₹3,000 to ₹7,000", value: "3000to7000", number: 5000 },
      { label: "₹7,000+", value: "7000plus", number: 9000 },
    ],
  },
  {
    id: "abandonment",
    section: "sales",
    category: "conversion",
    text: "What do you do when customers abandon their cart?",
    type: "single",
    options: [
      { label: "Nothing", value: "nothing", score: 10 },
      { label: "I follow up manually sometimes", value: "manual", score: 35 },
      { label: "Automated reminder emails", value: "email", score: 70 },
      { label: "Automated emails plus WhatsApp/SMS", value: "multi", score: 95 },
    ],
  },
  {
    id: "tracking",
    section: "sales",
    category: "tech",
    text: "How do you track your website performance?",
    type: "single",
    options: [
      { label: "I don't track anything", value: "none", score: 10 },
      { label: "Basic Google Analytics", value: "basic", score: 45 },
      { label: "Analytics plus conversion tracking", value: "conversion", score: 75 },
      { label: "Full tracking, heatmaps and dashboards", value: "full", score: 95 },
    ],
  },

  // ---------- CHALLENGES (not scored, used to rank priorities) ----------
  {
    id: "challenges",
    section: "challenges",
    text: "What are your biggest challenges right now?",
    helper: "Choose up to 3.",
    type: "multi",
    max: 3,
    options: [
      { label: "Not enough traffic", value: "traffic", category: "traffic" },
      { label: "Visitors don't buy", value: "sales", category: "conversion" },
      { label: "Website is slow", value: "slow", category: "tech" },
      { label: "Design looks outdated", value: "design", category: "website" },
      { label: "Too much manual work", value: "manual", category: "tech" },
      { label: "Customers don't come back", value: "retention", category: "retention" },
      { label: "Ad costs are too high", value: "adcost", category: "traffic" },
      { label: "I don't know where to start", value: "lost", category: null },
    ],
  },
];
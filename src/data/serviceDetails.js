// Keyed by the service slug in src/data/content.js.
// Optional: add a `process` array to a service to override the default steps.
export const serviceDetails = {
  "shopify-development": {
    metaTitle: "Shopify Developer for D2C Brands & Growing Stores",
    metaDescription:
      "Freelance Shopify developer building fast, conversion-focused stores for D2C brands and startups. Setup, design, apps and launch from one expert.",
    h1: "Shopify stores built to turn visitors into buyers",
    intro:
      "A Shopify store should be easy to run and easy to buy from. I build stores that load fast, look credible on a phone and guide shoppers to checkout, so you can spend your time on products and marketing.",
    image: null, // later: "/images/services/shopify.webp"
    imageAlt: "Shopify store on a laptop and a phone",
    signs: [
      "Your store looks fine, but few visitors reach checkout.",
      "Your theme is slow or packed with apps you no longer use.",
      "Launching took months, or never quite finished.",
      "You need a developer every time you change a page.",
    ],
    deliverables: [
      { title: "Store setup", text: "Products, collections, navigation, taxes, shipping zones and payment methods, including UPI, cards and COD where they fit." },
      { title: "Conversion-focused design", text: "A clean, mobile-first theme with clear product pages, trust signals and a simple path to checkout." },
      { title: "Apps and integrations", text: "A small set of well-chosen apps for reviews, email, WhatsApp, subscriptions and analytics, with nothing you don't need." },
      { title: "Training and handover", text: "A walkthrough so your team can manage products, orders and pages on their own." },
    ],
    timeline: "3 to 5 weeks",
    bestFor: "D2C brands, startups and growing stores",
    platform: "Shopify",
    caseStudies: ["jewelry-woocommerce-to-shopify"],
    posts: ["shopify-vs-woocommerce"],
    faqs: [
      { q: "How long does a Shopify store take to build?", a: "Most stores launch within 3 to 5 weeks. A small catalog with a simple design can be faster, and a large catalog with custom features takes longer. You get a clear timeline before work starts." },
      { q: "Can you move my existing store to Shopify?", a: "Yes. I move your products, customers and order history, and set up redirects from your old URLs so you keep your Google rankings." },
      { q: "Do I need to buy a theme?", a: "Not always. I can customise a free theme or use a premium one, depending on your budget and how unique you want the store to look." },
    ],
  },

  "woocommerce-development": {
    metaTitle: "WooCommerce Expert for Custom Online Stores",
    metaDescription:
      "WooCommerce developer for custom stores, complex catalogs and B2B pricing. Flexible WordPress stores where you own your data.",
    h1: "WooCommerce stores with the flexibility your business needs",
    intro:
      "When you need custom pricing, unusual workflows or full ownership of your data, WooCommerce can do things hosted platforms can't. I build stores that stay fast, secure and easy to maintain.",
    image: null,
    imageAlt: "WooCommerce product management screen",
    signs: [
      "You need custom pricing, bundles or variations that templates can't handle.",
      "Your store breaks or slows down after plugin updates.",
      "Your hosting is slow, and you aren't sure what is causing it.",
      "You want to own your data and avoid platform lock-in.",
    ],
    deliverables: [
      { title: "Custom store build", text: "A tailored design and structure for your catalog, built on a lean, well-maintained setup." },
      { title: "Features that fit your business", text: "Product variations, bundles, B2B price tiers, memberships and quick reorder, using trusted plugins or custom code." },
      { title: "Payments and shipping", text: "Payment gateways, shipping rules, taxes and invoices set up for how you actually sell." },
      { title: "Security, backups and hosting advice", text: "Sensible hosting recommendations, automatic backups and hardening, so updates don't cause surprises." },
    ],
    timeline: "4 to 8 weeks",
    bestFor: "Complex catalogs, B2B sellers and teams that need control",
    platform: "WooCommerce (WordPress)",
    caseStudies: ["b2b-wholesale-portal"],
    posts: ["shopify-vs-woocommerce"],
    faqs: [
      { q: "Is WooCommerce cheaper than Shopify?", a: "The plugin is free, but you pay for hosting, premium plugins and maintenance. It is often cheaper for complex needs and more expensive in time if left unmaintained. I will tell you honestly which suits your case." },
      { q: "Will my WooCommerce store be slow?", a: "Speed depends mostly on hosting and plugins. I keep the plugin count low, choose good hosting and optimise images and scripts, so the store loads fast." },
      { q: "Can you take over my existing WooCommerce store?", a: "Yes. I start with a quick review of your setup, fix what is broken or slow, then add the features you need." },
    ],
  },

  "custom-nextjs-websites": {
    metaTitle: "Custom Next.js Website Developer | Fast, SEO-Ready Sites",
    metaDescription:
      "Custom Next.js websites and web apps built for speed, SEO and a unique brand experience, hosted on Vercel.",
    h1: "Custom Next.js websites that load fast and stand apart",
    intro:
      "If templates feel too limiting, a custom build gives you a site designed around your brand, with top performance and an architecture search engines can read easily.",
    image: null,
    imageAlt: "Custom website design shown on desktop and mobile",
    signs: [
      "Templates are too limiting for what you want to show.",
      "Your current site feels heavy and slow.",
      "You want a distinctive design that does not look like everyone else's.",
      "You need tools or interactive features that off-the-shelf platforms can't offer.",
    ],
    deliverables: [
      { title: "Custom design and build", text: "A design made for your brand and content, built with Next.js and React." },
      { title: "SEO-ready architecture", text: "Clean URLs, metadata, sitemaps, structured data and fast loading from day one." },
      { title: "Content you can edit", text: "A simple way to update pages and posts, either through a CMS or files in the project." },
      { title: "Hosting and handover", text: "Deployment on Vercel with your domain, analytics and a walkthrough of how everything works." },
    ],
    timeline: "4 to 10 weeks",
    bestFor: "Brands that want a unique, high-performance experience",
    platform: "Next.js on Vercel",
    caseStudies: [],
    posts: ["shopify-vs-woocommerce"],
    faqs: [
      { q: "Is a custom site more expensive than Shopify or WooCommerce?", a: "The upfront cost is usually higher, because everything is designed and built for you. It makes the most sense when you need a unique experience or performance that templates can't deliver." },
      { q: "Can I edit the content myself?", a: "Yes. I set up an editing method that fits your team, and show you how to use it." },
      { q: "Can you build a custom storefront for my Shopify store?", a: "It is possible, and it suits stores with strong content or special design needs. It costs more to build and maintain, so I will tell you honestly whether it is worth it for you." },
    ],
  },

  "store-redesign": {
    metaTitle: "E-commerce Store Redesign to Increase Conversions",
    metaDescription:
      "Mobile-first store redesign for Shopify and WooCommerce. Build trust, fix checkout friction and turn more visitors into customers.",
    h1: "Store redesign that earns trust and lifts conversion",
    intro:
      "If people visit but don't buy, the design is often the reason. I redesign stores around how shoppers actually behave on their phones, so your products look credible and buying feels easy.",
    image: null,
    imageAlt: "Before and after of a redesigned store homepage",
    signs: [
      "Your design looks dated, or like a basic template.",
      "The mobile experience feels clumsy.",
      "Visitors leave quickly and carts get abandoned.",
      "You have traffic, but sales don't match it.",
    ],
    deliverables: [
      { title: "UX audit", text: "A review of your pages and checkout to find exactly where visitors hesitate or leave." },
      { title: "New design system", text: "Consistent typography, colours and components that make your brand look professional." },
      { title: "Mobile-first layouts", text: "Homepage, collection and product pages designed for phones first, then scaled up." },
      { title: "Checkout and product page improvements", text: "Clearer information, trust signals and fewer steps between Add to Cart and payment." },
    ],
    timeline: "3 to 6 weeks",
    bestFor: "Established stores with traffic but low sales",
    platform: "Shopify and WooCommerce",
    caseStudies: ["fashion-store-conversion"],
    posts: ["why-your-store-is-not-converting"],
    faqs: [
      { q: "Will a redesign hurt my Google rankings?", a: "Not if it is done carefully. I keep your URLs, titles and content structure, and add redirects wherever something changes." },
      { q: "Do I have to change platforms?", a: "No. I can redesign your store on its current platform. I only suggest moving if the platform itself is holding you back." },
      { q: "How will we know the redesign worked?", a: "We record your key numbers before we start, such as conversion rate, bounce rate and load time, then compare them after launch." },
    ],
  },

  "speed-optimization": {
    metaTitle: "Shopify & WooCommerce Speed Optimization",
    metaDescription:
      "Make your online store faster. Core Web Vitals fixes, image and script optimization, and app cleanup with a clear before-and-after report.",
    h1: "Speed optimization that keeps visitors from leaving",
    intro:
      "Many shoppers leave if a page takes more than a few seconds to load. I find what is slowing your store down, fix it, and show you the difference in numbers.",
    image: null,
    imageAlt: "PageSpeed report improving after optimization",
    signs: [
      "Your store takes more than 3 seconds to load on mobile.",
      "Google PageSpeed Insights shows red scores.",
      "You have many apps or plugins and aren't sure which ones are needed.",
      "People click your ads, but leave before the page appears.",
    ],
    deliverables: [
      { title: "Speed audit and baseline", text: "Measured results on your key pages, so we know where you start and what matters most." },
      { title: "Images and scripts", text: "Properly sized and compressed images, plus fewer and lighter scripts." },
      { title: "App and plugin cleanup", text: "Removing or replacing what slows the store down without breaking the features you rely on." },
      { title: "Core Web Vitals fixes and report", text: "Targeted fixes for loading and layout issues, then a before-and-after report." },
    ],
    timeline: "1 to 3 weeks",
    bestFor: "Any store with a slow mobile experience",
    platform: "Shopify and WooCommerce",
    caseStudies: ["fashion-store-conversion"],
    posts: ["why-your-store-is-not-converting"],
    faqs: [
      { q: "How much faster will my store get?", a: "It depends on what is slowing it down. I measure before and after on your real pages, so you see the actual improvement. I don't promise a specific score." },
      { q: "Will it change how my store looks?", a: "No. The goal is the same design and features, loading faster." },
      { q: "Is speed a one-time fix?", a: "Mostly, but new apps, big images and updates can slow things down again. A quick monthly check keeps it under control." },
    ],
  },

  "seo-optimization": {
    metaTitle: "E-commerce SEO Services for Shopify & WooCommerce",
    metaDescription:
      "E-commerce SEO for online stores: technical audit, product and category page optimization, schema markup and content strategy.",
    h1: "E-commerce SEO that brings buyers, not just visitors",
    intro:
      "Search traffic keeps working after you stop paying for it. I fix the technical basics, make your product and category pages easier to find, and plan content around what your customers search for.",
    image: null,
    imageAlt: "Search results and traffic growth chart",
    signs: [
      "Most of your sales depend on paid ads.",
      "Your products don't appear in Google for the things you sell.",
      "Your site has duplicate, thin or missing page titles.",
      "You aren't sure how much search traffic you get, or which pages bring it.",
    ],
    deliverables: [
      { title: "Technical SEO audit", text: "A check for crawling, indexing, speed, mobile and duplicate content problems, with a prioritised fix list." },
      { title: "Product and category pages", text: "Better titles, descriptions, headings and internal links on the pages that matter most for sales." },
      { title: "Structured data", text: "Product markup so your listings can show richer information in search results." },
      { title: "Content plan", text: "A list of buying guides, comparisons and answers to the questions your customers search for." },
    ],
    timeline: "3 to 4 weeks of setup, with results building over 3 to 6 months",
    bestFor: "Stores that depend too much on paid ads",
    platform: "Shopify, WooCommerce and custom sites",
    caseStudies: ["jewelry-woocommerce-to-shopify"],
    posts: ["why-your-store-is-not-converting"],
    faqs: [
      { q: "How long does SEO take to show results?", a: "Technical fixes can help within weeks, but meaningful growth in rankings and sales usually takes 3 to 6 months, and keeps growing after that." },
      { q: "Can you guarantee first-page rankings?", a: "No. Nobody can honestly guarantee that. I focus on the work that improves your chances, and track the numbers openly." },
      { q: "Do you write the content?", a: "I plan the topics and structure, and can write or edit key pages. For regular blog content, we agree who writes what at the start." },
    ],
  },
};

// Default steps shown on every service page
export const defaultProcess = [
  { title: "Discuss your goals", text: "A short chat about your business, your customers and what you want to achieve." },
  { title: "Agree the plan", text: "A clear scope, timeline and price in writing before any work starts." },
  { title: "Build and review", text: "Regular updates and feedback rounds, so there are no surprises." },
  { title: "Launch and improve", text: "Testing, launch, and follow-up improvements based on real results." },
];
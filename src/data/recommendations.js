export const categoryContent = {
  website: {
    low: {
      diagnosis: "Your design and mobile experience are likely costing you customers' trust before they even look at your products.",
      why: "Shoppers judge a store in seconds, and most are on a phone. A dated or clumsy site makes people leave, however good your products are.",
      quickWins: [
        "Open your site on your phone and note every place you had to zoom, pinch or hunt for a button.",
        "Make sure your top 5 products have sharp photos and a clearly visible Buy button without scrolling.",
      ],
      actions: {
        d30: "Audit your mobile experience and fix the biggest layout and readability problems.",
        d60: "Redesign your homepage and top product pages with a clean, mobile-first layout.",
        d90: "Roll the new design across collections and checkout, then compare bounce rate and sales to before.",
      },
    },
    mid: {
      diagnosis: "Your site works, but design or mobile gaps stop it from feeling trustworthy and premium.",
      why: "Small friction points add up. Every confusing menu or cramped button quietly lowers the share of visitors who buy.",
      quickWins: [
        "Keep your menu to 6 items or fewer and put best sellers one tap away.",
        "Add trust signals near the buy button: reviews, return policy and secure payment icons.",
      ],
      actions: {
        d30: "Fix mobile issues and simplify your navigation.",
        d60: "Refresh your homepage and product page layouts with clearer value messages.",
        d90: "A/B test your product page changes and keep the winners.",
      },
    },
    high: {
      diagnosis: "Your design and mobile experience are strong, which is a real advantage over many competitors.",
      why: "A good foundation means you can focus on traffic and conversion instead of fixing basics.",
      quickWins: [
        "Add customer photos or short videos to your product pages.",
        "Check your site on a newer and an older phone every quarter to catch new issues.",
      ],
      actions: {
        d30: "Run a quick usability check with 3 real customers.",
        d60: "Test one improvement at a time on your best-selling product page.",
        d90: "Keep the design fresh with seasonal updates and new content blocks.",
      },
    },
  },

  traffic: {
    low: {
      diagnosis: "Not enough of the right people are finding your store, and your traffic depends on very few sources.",
      why: "Even a great store can't sell if nobody sees it. Relying on one channel is risky: if it dries up or gets expensive, sales stop.",
      quickWins: [
        "Set up Google Search Console and Google Business Profile (both free).",
        "Write unique titles and descriptions for your 10 best-selling products.",
      ],
      actions: {
        d30: "Fix basic SEO: page titles, descriptions, product names, and submit your sitemap.",
        d60: "Publish 4 helpful pages or posts that answer questions your customers search for.",
        d90: "Add one more channel (Instagram Reels, email or a small tracked ad budget) and measure which brings buyers.",
      },
    },
    mid: {
      diagnosis: "You have some traffic, but it is either modest or spread unevenly across channels.",
      why: "Steady growth comes from search visibility that works for you every day, not only from ads you pay for.",
      quickWins: [
        "Find your top 5 pages in Search Console and improve their titles.",
        "Add FAQ sections to category pages to capture the questions people search for.",
      ],
      actions: {
        d30: "Audit your SEO and fix technical issues like missing titles, slow pages and duplicate content.",
        d60: "Create category and buying-guide content around the terms your customers use.",
        d90: "Build links and mentions through collaborations and directories, then review traffic by source.",
      },
    },
    high: {
      diagnosis: "Your traffic volume and mix are healthy.",
      why: "At this level, quality matters more than quantity. The aim is to attract visitors who actually buy.",
      quickWins: [
        "Check which sources bring the highest revenue per visitor, not just the most visits.",
        "Add product schema markup so your listings can show richer results on Google.",
      ],
      actions: {
        d30: "Review traffic quality by source and cut low-value spend.",
        d60: "Expand into the 2 or 3 search topics that bring your highest-value buyers.",
        d90: "Test one new channel to reduce dependence on your biggest one.",
      },
    },
  },

  conversion: {
    low: {
      diagnosis: "Visitors are arriving, but very few become customers, and abandoned carts are not being recovered.",
      why: "This is usually the fastest area to improve. A small lift in conversion raises revenue without spending more on traffic.",
      quickWins: [
        "Turn on abandoned-cart emails today (Shopify and WooCommerce both support this).",
        "Offer guest checkout and show the total cost, including shipping, early.",
      ],
      actions: {
        d30: "Simplify checkout, offer popular payment options (UPI, cards, COD where it suits) and launch cart-recovery emails.",
        d60: "Improve product pages with better images, reviews, and clear delivery and returns info.",
        d90: "Run structured A/B tests on offers, page layouts and checkout steps.",
      },
    },
    mid: {
      diagnosis: "Your conversion is around average, with clear room to convert more of the visitors you already have.",
      why: "Moving from average to good conversion often lifts revenue 20 to 50% on the same traffic.",
      quickWins: [
        "Place reviews and a clear return policy right next to the Add to Cart button.",
        "Add WhatsApp or SMS cart reminders on top of email.",
      ],
      actions: {
        d30: "Review your funnel in analytics and find where most people drop off.",
        d60: "Fix the top 2 drop-off points, usually the product page and checkout.",
        d90: "Add upsells, bundles and a free-shipping threshold to raise average order value.",
      },
    },
    high: {
      diagnosis: "Your conversion and cart recovery are strong.",
      why: "The best gains now come from raising order value and bringing customers back.",
      quickWins: [
        "Add a frequently-bought-together bundle on your top products.",
        "Set a free-shipping threshold slightly above your average order value.",
      ],
      actions: {
        d30: "Test bundles and upsells on your top products.",
        d60: "Personalize offers for returning visitors.",
        d90: "Review the whole funnel every quarter and re-test your biggest pages.",
      },
    },
  },

  retention: {
    low: {
      diagnosis: "Most customers buy once and never return, and you have few ways to reach them again.",
      why: "Winning a new customer costs far more than selling to an existing one. Repeat buyers are your most profitable customers.",
      quickWins: [
        "Add an email or WhatsApp sign-up with a small first-order incentive.",
        "Send a thank-you message with a reorder suggestion after every delivery.",
      ],
      actions: {
        d30: "Collect emails and phone numbers at checkout (with consent) and launch a welcome flow.",
        d60: "Launch post-purchase and win-back flows.",
        d90: "Create a simple loyalty or referral offer and track your repeat purchase rate monthly.",
      },
    },
    mid: {
      diagnosis: "You have a customer base and some repeat sales, but the process is not automated.",
      why: "Automation lets you earn repeat sales around the clock without extra effort.",
      quickWins: [
        "Segment your list into new buyers, repeat buyers and inactive customers.",
        "Send a review request 7 days after delivery.",
      ],
      actions: {
        d30: "Set up automated welcome and post-purchase messages.",
        d60: "Add a win-back flow for customers inactive for 60 to 90 days.",
        d90: "Introduce a loyalty program or subscription for products people reorder.",
      },
    },
    high: {
      diagnosis: "Your customer retention is a real strength.",
      why: "Loyal customers lower your marketing costs and are your best source of referrals.",
      quickWins: [
        "Ask your best customers for referrals and reviews.",
        "Give repeat buyers early access to new products.",
      ],
      actions: {
        d30: "Identify your top 10% of customers and thank them personally.",
        d60: "Launch a referral program.",
        d90: "Test a membership or subscription option to raise lifetime value.",
      },
    },
  },

  tech: {
    low: {
      diagnosis: "Your platform, speed or tracking setup is holding the business back, and you may be making decisions blind.",
      why: "A slow or limited site loses sales silently, and without tracking you can't tell what is working.",
      quickWins: [
        "Install Google Analytics 4 and set up purchase tracking.",
        "Compress your largest images and remove apps or plugins you don't use.",
      ],
      actions: {
        d30: "Set up analytics and conversion tracking, and run a speed test to get your baseline.",
        d60: "Fix the main speed problems: image sizes, heavy apps, scripts and mobile load time.",
        d90: "Review your platform fit and automate manual work like order updates, inventory and reports.",
      },
    },
    mid: {
      diagnosis: "Your technical foundation is workable but not yet optimized.",
      why: "Faster pages and cleaner data directly lead to more sales and better decisions.",
      quickWins: [
        "Run Google PageSpeed Insights on your homepage and a product page.",
        "Check that add-to-cart, checkout and purchases are all tracked.",
      ],
      actions: {
        d30: "Fix the top 3 issues PageSpeed Insights reports.",
        d60: "Improve tracking and build a simple weekly dashboard.",
        d90: "Automate repeat tasks such as order updates, stock alerts and reporting.",
      },
    },
    high: {
      diagnosis: "Your technology setup is solid.",
      why: "A good foundation means you can scale without rebuilding.",
      quickWins: [
        "Set a monthly speed and uptime check.",
        "Back up your store and review who has access to apps and plugins.",
      ],
      actions: {
        d30: "Document your setup and set performance alerts.",
        d60: "Use your data for deeper analysis, like profit by channel and customer cohorts.",
        d90: "Look for more automation to free up your time.",
      },
    },
  },
};

// Special rules: shown when a specific combination of answers appears.
// Each `test` receives (answers, scores). Max 3 are shown in the report.
export const insightRules = [
  {
    id: "speed-sales",
    test: (a) => a.speed === "slow" && ["poor", "some", "unsure"].includes(a.mobile),
    title: "Slow loading is costing you sales",
    text: "Your site loads slowly and the mobile experience has gaps. Most shoppers browse and buy on phones, and many leave if a page takes more than 3 seconds. Speed is probably your cheapest win.",
  },
  {
    id: "retention-gap",
    test: (a) => ["none", "rare"].includes(a.email) && ["lt10", "unsure"].includes(a.repeat),
    title: "Customers buy once and disappear",
    text: "You have no active way to reach past buyers, and few of them return. Even a simple welcome and reorder flow can add sales from customers you already paid to acquire.",
  },
  {
    id: "cart-leak",
    test: (a) => a.abandonment === "nothing" && ["2kto10k", "10kto50k", "50kplus"].includes(a.visitors),
    title: "You are leaving recoverable sales on the table",
    text: "With your traffic, a good number of shoppers add to cart and leave. Automated reminders typically win back a meaningful share of them with no extra ad spend.",
  },
  {
    id: "blind-ads",
    test: (a) => Array.isArray(a.sources) && a.sources.includes("ads") && a.tracking === "none",
    title: "You are spending on ads without tracking results",
    text: "Without conversion tracking you can't tell which campaigns bring buyers and which waste money. Setting this up first often cuts ad costs quickly.",
  },
  {
    id: "outgrown",
    test: (a) => a.platform === "builder" && ["growing", "established"].includes(a.stage),
    title: "You may have outgrown your website builder",
    text: "Website builders are fine to start, but growing stores usually need better checkout, speed, SEO and app options than they offer.",
  },
  {
    id: "trust-gap",
    test: (a, s) => a.design === "outdated" && s.conversion < 50,
    title: "An outdated design is hurting trust",
    text: "Your design looks dated and your conversion is low. These usually go together: shoppers hesitate to pay on a site that doesn't feel current.",
  },
];

export const solutions = {
  launchShopify: {
    title: "Launch a Shopify store",
    text: "For most new online businesses, Shopify is the fastest, safest way to start selling. You get a store set up properly with payments, shipping and a design built to convert.",
    href: "/services#shopify-development",
    cta: "See Shopify development",
  },
  launchB2B: {
    title: "A flexible B2B store",
    text: "Wholesale needs (price tiers, bulk orders, custom workflows) often outgrow simple templates. WooCommerce or a custom Next.js build handles this well.",
    href: "/services#woocommerce-development",
    cta: "See WooCommerce development",
  },
  migrateShopify: {
    title: "Move to a platform built to scale",
    text: "Your growth is ahead of your website builder. Migrating to Shopify gives you better speed, checkout, SEO and apps, without losing your existing products or customers.",
    href: "/services#shopify-development",
    cta: "See Shopify development",
  },
  speed: {
    title: "Speed and technical optimization",
    text: "Your biggest gains are in site speed, tracking and technical setup. Faster pages and clean data lift both sales and every marketing decision after.",
    href: "/services#speed-optimization",
    cta: "See speed optimization",
  },
  redesign: {
    title: "Store redesign",
    text: "A mobile-first redesign focused on trust and clarity will help more visitors become buyers.",
    href: "/services#store-redesign",
    cta: "See store redesign",
  },
  seo: {
    title: "E-commerce SEO",
    text: "Your store needs more of the right visitors. A technical SEO fix plus product and category optimization builds traffic that keeps working without ad spend.",
    href: "/services#seo-optimization",
    cta: "See SEO optimization",
  },
  conversion: {
    title: "Conversion-focused optimization",
    text: "You already have visitors. The best return is improving product pages, checkout and cart recovery so more of them buy.",
    href: "/services#store-redesign",
    cta: "See store redesign",
  },
  retention: {
    title: "Retention and automation setup",
    text: "Your best opportunity is bringing customers back. Email and WhatsApp flows, plus a loyalty offer, can raise repeat sales steadily.",
    href: "/contact",
    cta: "Talk about retention",
  },
  scale: {
    title: "Ongoing growth partnership",
    text: "Your foundations are strong. From here, steady testing and optimization is the way to keep growing, and that is easier with a partner.",
    href: "/contact",
    cta: "Let's talk",
  },
};
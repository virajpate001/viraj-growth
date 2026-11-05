export const caseStudies = [
  {
    slug: "fashion-store-conversion",
    title: "How a fashion brand doubled its conversion rate",
    client: "Fashion D2C brand",
    industry: "Fashion & apparel",
    platform: "Shopify",
    duration: "6 weeks",
    services: ["Store redesign", "Speed optimization", "Checkout improvements"],
    summary:
      "A clothing brand had steady traffic but very few buyers. A faster, simpler mobile store more than doubled conversions.",
    challenge: [
      "The brand was spending on ads every month, but fewer than 1 in 100 visitors bought. The store took over 5 seconds to load on mobile, and the checkout asked for too much information.",
      "Most of their customers shopped on phones, which was exactly where the store worked worst.",
    ],
    solution: [
      { title: "Speed first", text: "Compressed images, removed unused apps and cleaned up scripts to cut mobile load time from 5.2s to 1.4s." },
      { title: "Mobile-first redesign", text: "Rebuilt the homepage and product pages with larger photos, clear sizing info and a sticky Add to Cart button." },
      { title: "Simpler checkout", text: "Added guest checkout, UPI and COD options, and showed shipping costs earlier." },
      { title: "Cart recovery", text: "Set up automated abandoned-cart emails and WhatsApp reminders." },
    ],
    results: [
      { value: "+112%", label: "Conversion rate" },
      { value: "1.4s", label: "Load time (from 5.2s)" },
      { value: "+68%", label: "Monthly revenue" },
    ],
    metrics: [
      { label: "Mobile load time", before: 5.2, after: 1.4, suffix: "s", lowerIsBetter: true },
      { label: "Conversion rate", before: 0.85, after: 1.8, suffix: "%" },
      { label: "Cart abandonment", before: 78, after: 61, suffix: "%", lowerIsBetter: true },
    ],
    testimonial: {
      quote: "Sample testimonial. The new store is faster, cleaner and our sales went up within weeks.",
      name: "Client Name",
      role: "Founder, Fashion Brand",
    },
    fixes: [
      "Check how long your product pages take to load on a mid-range phone.",
      "Count the steps and fields between Add to Cart and payment.",
      "Look for a cart-recovery message after someone leaves.",
    ],
  },
  {
    slug: "jewelry-woocommerce-to-shopify",
    title: "Moving a jewelry store from WooCommerce to Shopify",
    client: "Jewelry brand",
    industry: "Jewelry & accessories",
    platform: "WooCommerce to Shopify",
    duration: "5 weeks",
    services: ["Platform migration", "Store redesign", "SEO preservation"],
    summary:
      "A growing jewelry brand outgrew its slow, high-maintenance WordPress store. A careful migration made it faster and far easier to run, with no loss of Google rankings.",
    challenge: [
      "The WooCommerce store was slow, broke after plugin updates, and took around 20 hours a month to maintain.",
      "The owner worried that moving platforms would lose their Google rankings and existing customers.",
    ],
    solution: [
      { title: "Safe migration", text: "Moved products, customers and order history, then mapped every old URL to its new page with 301 redirects." },
      { title: "Premium design", text: "Designed a clean, image-led store that matches the brand's higher price point." },
      { title: "Fewer moving parts", text: "Replaced 18 plugins with a small set of well-chosen Shopify apps." },
      { title: "Team handover", text: "Trained the team to manage products and orders on their own." },
    ],
    results: [
      { value: "+50%", label: "Checkout completion" },
      { value: "2.5x", label: "Faster page loads" },
      { value: "14 hrs", label: "Saved on maintenance each month" },
    ],
    metrics: [
      { label: "Page load time", before: 4.8, after: 1.9, suffix: "s", lowerIsBetter: true },
      { label: "Checkout completion", before: 38, after: 57, suffix: "%" },
      { label: "Admin hours per month", before: 20, after: 6, suffix: "h", lowerIsBetter: true },
    ],
    testimonial: {
      quote: "Sample testimonial. The move was smooth, and we never lost a single ranking or customer.",
      name: "Client Name",
      role: "Owner, Jewelry Brand",
    },
    fixes: [
      "Count how many plugins or apps your store runs, and how many you actually use.",
      "Check how much time per month goes into updates and fixing things.",
      "Test whether your product images look sharp but still load fast.",
    ],
  },
  {
    slug: "b2b-wholesale-portal",
    title: "A wholesale portal that cut order handling time by 68%",
    client: "B2B home goods supplier",
    industry: "B2B / wholesale",
    platform: "WooCommerce",
    duration: "8 weeks",
    services: ["Custom WooCommerce build", "B2B pricing", "Workflow automation"],
    summary:
      "A supplier was taking most wholesale orders by phone and WhatsApp. A custom B2B portal moved ordering online and made repeat orders effortless.",
    challenge: [
      "About 70% of wholesale orders arrived by phone or WhatsApp and were typed into a spreadsheet by hand, which caused mistakes and delays.",
      "Different retailers had different prices, and no simple template could handle that.",
    ],
    solution: [
      { title: "Customer-specific pricing", text: "Built price tiers by customer group, shown after login." },
      { title: "Quick reorder", text: "Added one-click reorder and bulk order forms that use SKUs." },
      { title: "Approval flow", text: "Added credit-limit checks and order approval for new accounts." },
      { title: "Accounting sync", text: "Connected orders to their accounting software to remove manual entry." },
    ],
    results: [
      { value: "-68%", label: "Order handling time" },
      { value: "51%", label: "Repeat order rate (from 32%)" },
      { value: "25%", label: "Orders still taken by phone (from 70%)" },
    ],
    metrics: [
      { label: "Minutes to process an order", before: 25, after: 8, suffix: " min", lowerIsBetter: true },
      { label: "Repeat order rate", before: 32, after: 51, suffix: "%" },
      { label: "Orders taken by phone", before: 70, after: 25, suffix: "%", lowerIsBetter: true },
    ],
    testimonial: {
      quote: "Sample testimonial. Our retailers now order in minutes, and my team finally has time to sell.",
      name: "Client Name",
      role: "Director, Home Goods Supplier",
    },
    fixes: [
      "List every step a repeat customer takes to reorder, and count the clicks.",
      "Check how many orders are still typed in by hand.",
      "Look at whether your pricing can differ by customer without manual work.",
    ],
  },
];
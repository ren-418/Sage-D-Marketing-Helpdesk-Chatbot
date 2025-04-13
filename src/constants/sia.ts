export const SIA_CONFIG = {
  name: "SIA (SAGE-D INTERACTIVE ASSISTANT)",
  brandColor: "#00ff26",
  secondaryColor: "#1D1D1B",
  accentColor: "#282826"
};

export const BRAND_VOICE = {
  bold: "We don't do vanilla. Let's build your brand so loud it echoes online.",
  strategic: "We only do what works. Want a breakdown of how we deliver ROI?",
  sassy: "You want results? Good. We eat KPIs for breakfast.",
  creative: "If it doesn't turn heads, it doesn't leave our studio.",
  closer: "Let's skip the back-and-forth. Book a call with the team and get moving."
};

export const QUALIFICATION_FLOW = {
  Q1: {
    question: "What are you looking to improve?",
    options: ["Branding", "Sales", "Traffic", "All of the above"]
  },
  Q2: {
    question: "What's your business type?",
    options: ["Service-based", "E-commerce", "Personal Brand", "Startup"]
  },
  Q3: {
    question: "Do you have a current website?",
    options: ["Yes", "No"]
  },
  Q4: {
    question: "What's your monthly marketing budget?",
    options: ["Under R5,000", "R5,000 – R20,000", "R20,000+"]
  }
};

export const SERVICE_RESPONSES = {
  strategy: {
    prompt: "I need help growing my business online.",
    response: "You're in the right place. Our digital strategies are like cheat codes for growth. Want to see how we'd tailor yours?",
    actions: ["Book Free Consult", "Show Case Studies"]
  },
  branding: {
    prompt: "Do you do brand design?",
    response: "Absolutely. Logos, guidelines, brand stories—we turn businesses into icons. Want to see what we've done for bold brands like yours?",
    actions: ["Show Portfolio", "Book Branding Session"]
  },
  website: {
    prompt: "I need a new website.",
    response: "A sexy website is just step one—we build sites that convert. Need eCommerce, a portfolio, or landing pages? Let's architect it together.",
    actions: ["Book Web Audit", "Show Portfolio"]
  },
  seo: {
    prompt: "Can you help me rank on Google?",
    response: "100%. We don't just boost rankings—we drive results. Want a free audit of your current SEO setup?",
    actions: ["Offer Audit", "Share Case Study", "Book Call"]
  },
  social: {
    prompt: "Do you do social media content?",
    response: "From scroll-stopping reels to feed curation, we keep your brand top of mind. Want to see our best performing campaigns?",
    actions: ["Show Campaigns", "Book Social Media Session"]
  },
  paid: {
    prompt: "I've tried Facebook Ads. They didn't work.",
    response: "Then you haven't tried *us*. Our paid ads team crushes CPMs and maximizes ROI. Want a peek under the hood?",
    actions: ["See Results", "Book Ad Strategy Session"]
  }
};

export const PAGE_SPECIFIC_BEHAVIOR = {
  homepage: {
    initialMessage: "Hey there! 👋 I'm SIA, your digital growth partner. We don't do vanilla - we're here to make your brand echo online! What are you looking to improve today?",
    actions: ["Qualify", "Show Services", "Book Call"]
  },
  services: {
    initialMessage: "Our services are designed to make your brand unstoppable. Which area interests you?",
    actions: ["Show Portfolio", "Book Consultation", "Get Pricing"]
  },
  caseStudies: {
    initialMessage: "Want to see how we've helped brands like yours achieve remarkable results?",
    actions: ["Show Case Studies", "Book Strategy Call"]
  },
  contact: {
    initialMessage: "Ready to take your brand to the next level? Let's make it happen!",
    actions: ["Book Meeting", "Quick Call"]
  },
  blog: {
    initialMessage: "Looking for insights on growing your brand? I can help you find relevant articles and services.",
    actions: ["Show Articles", "Book Consultation"]
  }
};

export const SERVICE_BUNDLES = {
  branding: {
    name: "Complete Brand Package",
    services: ["Brand Strategy", "Logo Design", "Brand Guidelines", "Social Media Assets"],
    price: "Starting from R15,000"
  },
  marketing: {
    name: "Growth Marketing Suite",
    services: ["SEO Optimization", "Content Marketing", "Social Media Management", "Email Marketing"],
    price: "Starting from R20,000"
  },
  website: {
    name: "Conversion-Focused Website",
    services: ["Custom Design", "Development", "SEO Setup", "Analytics Integration"],
    price: "Starting from R25,000"
  }
}; 
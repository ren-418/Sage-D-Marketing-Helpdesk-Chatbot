import { SIAConfig } from './types';

export const SIA_CONFIG: SIAConfig = {
  name: "SIA",
  fullName: "SAGE-D INTERACTIVE ASSISTANT",
  avatar: "S",
  brandVoice: {
    bold: [
      "We don't do vanilla. Let's build your brand so loud it echoes online.",
      "You want results? Good. We eat KPIs for breakfast."
    ],
    strategic: [
      "We only do what works. Want a breakdown of how we deliver ROI?",
      "Let's architect a strategy that turns heads and drives results."
    ],
    creative: [
      "If it doesn't turn heads, it doesn't leave our studio.",
      "We're not just creative, we're strategically creative."
    ],
    confident: [
      "Let's skip the back-and-forth. Book a call with the team and get moving.",
      "Ready to make bold moves? Let's schedule your strategy session."
    ]
  },
  services: [
    {
      id: "strategy",
      name: "Digital Strategy",
      description: "Comprehensive digital growth strategies tailored to your business",
      portfolioLink: "/portfolio/strategy",
      caseStudyLink: "/case-studies/strategy",
      bookingLink: "https://calendly.com/saged/strategy"
    },
    {
      id: "branding",
      name: "Brand Design",
      description: "Logo, guidelines, and brand stories that turn businesses into icons",
      portfolioLink: "/portfolio/branding",
      caseStudyLink: "/case-studies/branding",
      bookingLink: "https://calendly.com/saged/branding"
    },
    {
      id: "web",
      name: "Website Development",
      description: "Sites that don't just look good, they convert",
      portfolioLink: "/portfolio/web",
      caseStudyLink: "/case-studies/web",
      bookingLink: "https://calendly.com/saged/web"
    },
    {
      id: "seo",
      name: "SEO Services",
      description: "Rank higher, drive more traffic, and boost your online presence",
      portfolioLink: "/portfolio/seo",
      caseStudyLink: "/case-studies/seo",
      bookingLink: "https://calendly.com/saged/seo"
    },
    {
      id: "social",
      name: "Social Media",
      description: "Scroll-stopping content that keeps your brand top of mind",
      portfolioLink: "/portfolio/social",
      caseStudyLink: "/case-studies/social",
      bookingLink: "https://calendly.com/saged/social"
    },
    {
      id: "paid",
      name: "Paid Media",
      description: "Ads that crush CPMs and maximize ROI",
      portfolioLink: "/portfolio/paid",
      caseStudyLink: "/case-studies/paid",
      bookingLink: "https://calendly.com/saged/paid"
    }
  ]
};

export const QUALIFICATION_QUESTIONS = [
  {
    question: "What are you looking to improve?",
    options: ["Branding", "Sales", "Traffic", "All of the above"],
    key: "needs"
  },
  {
    question: "What's your business type?",
    options: ["Service-based", "E-commerce", "Personal Brand", "Startup"],
    key: "businessType"
  },
  {
    question: "Do you have a current website?",
    options: ["Yes", "No"],
    key: "hasWebsite"
  },
  {
    question: "What's your monthly marketing budget?",
    options: ["Under R5,000", "R5,000 – R20,000", "R20,000+"],
    key: "budget"
  }
];

export const PAGE_SPECIFIC_BEHAVIOR = {
  home: {
    initialMessage: "Hey there! I'm SIA, your SAGE-D Interactive Assistant. What brings you to SAGED today?",
    actions: ["Explore Services", "See Our Work", "Book Strategy Call"]
  },
  services: {
    initialMessage: "Looking to level up your digital game? I'm SIA, and I'm here to help you find the perfect service.",
    actions: ["Strategy", "Branding", "Web Development", "SEO", "Social Media", "Paid Media"]
  },
  caseStudies: {
    initialMessage: "Want to see real results? I'm SIA, and I can show you case studies that match your needs.",
    actions: ["Show Case Studies", "Book Strategy Call"]
  },
  contact: {
    initialMessage: "Ready to make moves? I'm SIA, and I'm here to connect you with our team.",
    actions: ["Book Strategy Call", "Request Proposal"]
  },
  blog: {
    initialMessage: "Found something interesting? I'm SIA, and I can help you dive deeper into any topic.",
    actions: ["Related Services", "Book Strategy Call"]
  }
}; 
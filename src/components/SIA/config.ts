import { SIAConfig } from './types';

export const SIA_CONFIG: SIAConfig = {
  name: "SIA",
  fullName: "SAGE-D INTERACTIVE ASSISTANT",
  avatar: "S",
  brandVoice: {
    bold: [
      "We don't do vanilla. Let's build your brand so loud it echoes online.",
      "You want results? Good. We eat KPIs for breakfast.",
      "Bold moves only. Let's make your brand unforgettable."
    ],
    strategic: [
      "We only do what works. Want a breakdown of how we deliver ROI?",
      "Let's architect a strategy that turns heads and drives results.",
      "Data-driven decisions are our jam. Ready to see the numbers?"
    ],
    creative: [
      "If it doesn't turn heads, it doesn't leave our studio.",
      "We're not just creative, we're strategically creative.",
      "Your brand deserves to stand out. Let's make it happen."
    ],
    confident: [
      "Let's skip the back-and-forth. Book a call with the team and get moving.",
      "Ready to make bold moves? Let's schedule your strategy session.",
      "No fluff, just results. Let's get started."
    ]
  },
  services: [
    {
      id: "strategy",
      name: "Digital Strategy",
      description: "Comprehensive digital growth strategies tailored to your business",
      portfolioLink: "/portfolio/strategy",
      caseStudyLink: "/case-studies/strategy",
      bookingLink: "https://calendly.com/saged/strategy",
      prompts: {
        initial: "You're in the right place. Our digital strategies are like cheat codes for growth. Want to see how we'd tailor yours?",
        followUp: "We've helped businesses like yours achieve [X]% growth. Ready to see how we can do the same for you?"
      }
    },
    {
      id: "branding",
      name: "Brand Design",
      description: "Logo, guidelines, and brand stories that turn businesses into icons",
      portfolioLink: "/portfolio/branding",
      caseStudyLink: "/case-studies/branding",
      bookingLink: "https://calendly.com/saged/branding",
      prompts: {
        initial: "Absolutely. Logos, guidelines, brand stories—we turn businesses into icons. Want to see what we've done for bold brands like yours?",
        followUp: "Your brand deserves to be unforgettable. Let's make it happen."
      }
    },
    {
      id: "web",
      name: "Website Development",
      description: "Sites that don't just look good, they convert",
      portfolioLink: "/portfolio/web",
      caseStudyLink: "/case-studies/web",
      bookingLink: "https://calendly.com/saged/web",
      prompts: {
        initial: "A sexy website is just step one—we build sites that convert. Need eCommerce, a portfolio, or landing pages?",
        followUp: "Let's architect a website that turns visitors into customers."
      }
    },
    {
      id: "seo",
      name: "SEO Services",
      description: "Rank higher, drive more traffic, and boost your online presence",
      portfolioLink: "/portfolio/seo",
      caseStudyLink: "/case-studies/seo",
      bookingLink: "https://calendly.com/saged/seo",
      prompts: {
        initial: "100%. We don't just boost rankings—we drive results. Want a free audit of your current SEO setup?",
        followUp: "Let's get your business ranking where it belongs—at the top."
      }
    },
    {
      id: "social",
      name: "Social Media",
      description: "Scroll-stopping content that keeps your brand top of mind",
      portfolioLink: "/portfolio/social",
      caseStudyLink: "/case-studies/social",
      bookingLink: "https://calendly.com/saged/social",
      prompts: {
        initial: "From scroll-stopping reels to feed curation, we keep your brand top of mind. Want to see our best performing campaigns?",
        followUp: "Let's create content that makes your audience stop scrolling."
      }
    },
    {
      id: "paid",
      name: "Paid Media",
      description: "Ads that crush CPMs and maximize ROI",
      portfolioLink: "/portfolio/paid",
      caseStudyLink: "/case-studies/paid",
      bookingLink: "https://calendly.com/saged/paid",
      prompts: {
        initial: "Then you haven't tried *us*. Our paid ads team crushes CPMs and maximizes ROI. Want a peek under the hood?",
        followUp: "Let's turn your ad spend into real results."
      }
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
    question: "Are you satisfied with the web design and development of your website?",
    options: ["Yes", "No"],
    key: "websiteSatisfaction",
    showIf: (session: any) => session.qualification.hasWebsite === "Yes"
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

export const EMAIL_CAPTURE_PROMPTS = {
  beforeExit: "Want us to send over our proposal or portfolio? Drop your email, and we'll follow up.",
  afterQualification: "Let's stay in touch! Share your email, and I'll send you personalized recommendations.",
  afterServiceSelection: "Want detailed information about our [SERVICE]? Share your email, and I'll send it right over."
}; 
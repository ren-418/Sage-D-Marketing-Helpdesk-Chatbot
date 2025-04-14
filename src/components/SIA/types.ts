export interface Message {
  type: 'bot' | 'user';
  content: string;
  options?: string[];
  metadata?: {
    serviceType?: string;
    qualificationStep?: number;
    actionType?: 'booking' | 'portfolio' | 'caseStudy' | 'email';
  };
}

export interface UserSession {
  id: string;
  lastInteraction: Date;
  qualification: {
    needs: string[];
    businessType: string;
    hasWebsite: boolean;
    budget: string;
  };
  email?: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  portfolioLink?: string;
  caseStudyLink?: string;
  bookingLink: string;
}

export interface PageContext {
  pageType: 'home' | 'services' | 'caseStudies' | 'contact' | 'blog';
  currentService?: string;
}

export interface SIAConfig {
  name: string;
  fullName: string;
  avatar: string;
  brandVoice: {
    bold: string[];
    strategic: string[];
    creative: string[];
    confident: string[];
  };
  services: Service[];
} 
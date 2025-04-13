// This is a mock implementation of the OpenAI service
// Replace with actual OpenAI API integration in production

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface ChatResponse {
  message: string;
  suggestedOptions?: string[];
}

const MOCK_RESPONSES: Record<string, ChatResponse> = {
  'default': {
    message: "I'm here to help you grow your brand! What specific area would you like to focus on?",
    suggestedOptions: ["Branding", "Marketing", "Web Development", "SEO"]
  },
  'branding': {
    message: "Great choice! Our branding team turns businesses into icons. We've helped companies increase their brand recognition by up to 300%. Would you like to see some examples?",
    suggestedOptions: ["Show Portfolio", "Book Branding Session", "Tell me more"]
  },
  'marketing': {
    message: "Smart move! Our marketing strategies are data-driven and ROI-focused. We've helped clients achieve up to 10x ROAS. What's your current biggest marketing challenge?",
    suggestedOptions: ["Low Conversions", "Need More Traffic", "Brand Awareness", "Book Marketing Call"]
  }
};

export const chatWithAI = async (messages: ChatMessage[]): Promise<ChatResponse> => {
  // In production, replace this with actual OpenAI API call
  const lastMessage = messages[messages.length - 1].content.toLowerCase();
  
  // Simple mock logic to determine response
  if (lastMessage.includes('brand')) {
    return MOCK_RESPONSES.branding;
  } else if (lastMessage.includes('market')) {
    return MOCK_RESPONSES.marketing;
  }
  
  return MOCK_RESPONSES.default;
};

// In production, implement these functions with actual OpenAI API calls
export const generateServiceSuggestions = async (userResponses: Record<string, string>): Promise<string[]> => {
  // Mock implementation
  return [
    "🎯 Complete Brand Strategy & Design",
    "💰 Conversion-Focused Marketing",
    "🚀 SEO & Paid Media Management"
  ];
};

export const generateFollowUpQuestions = async (context: string): Promise<string[]> => {
  // Mock implementation
  return [
    "What's your current marketing budget?",
    "When would you like to start?",
    "Have you worked with a marketing agency before?"
  ];
}; 
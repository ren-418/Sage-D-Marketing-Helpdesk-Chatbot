import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { 
  SIA_CONFIG, 
  BRAND_VOICE, 
  QUALIFICATION_FLOW, 
  SERVICE_RESPONSES,
  PAGE_SPECIFIC_BEHAVIOR,
  SERVICE_BUNDLES
} from '../../constants/sia';
import './SIA.css';

interface Message {
  type: 'user' | 'bot';
  content: string;
  options?: string[];
  metadata?: {
    type: 'qualification' | 'service' | 'booking' | 'followup';
    data?: any;
  };
}

interface SIAProps {
  onClose: () => void;
}

const SIA: React.FC<SIAProps> = ({ onClose }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<keyof typeof QUALIFICATION_FLOW>('Q1');
  const [userResponses, setUserResponses] = useState<Record<string, string>>({});
  const [isTyping, setIsTyping] = useState(false);
  const [currentPage, setCurrentPage] = useState<string>('homepage');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Determine current page
    const path = location.pathname.split('/').pop() || 'homepage';
    setCurrentPage(path);
    
    // Initialize with page-specific message
    const pageBehavior = PAGE_SPECIFIC_BEHAVIOR[path as keyof typeof PAGE_SPECIFIC_BEHAVIOR];
    if (pageBehavior) {
      addBotMessage(pageBehavior.initialMessage, pageBehavior.actions);
    } else {
      // Default behavior if page not found
      addBotMessage(PAGE_SPECIFIC_BEHAVIOR.homepage.initialMessage, 
        PAGE_SPECIFIC_BEHAVIOR.homepage.actions);
    }
  }, [location]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const addBotMessage = (content: string, options?: string[], metadata?: Message['metadata']) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { type: 'bot', content, options, metadata }]);
      setIsTyping(false);
    }, 1000);
  };

  const handleUserResponse = async (response: string) => {
    setMessages(prev => [...prev, { type: 'user', content: response }]);
    setUserResponses(prev => ({ ...prev, [currentQuestion]: response }));

    // Check if this is a service-specific response
    const serviceMatch = Object.entries(SERVICE_RESPONSES).find(([_, data]) => 
      data.prompt.toLowerCase() === response.toLowerCase()
    );

    if (serviceMatch) {
      const [service, data] = serviceMatch;
      addBotMessage(data.response, data.actions, { type: 'service', data: { service } });
      return;
    }

    // Handle qualification flow
    const questions = Object.keys(QUALIFICATION_FLOW) as (keyof typeof QUALIFICATION_FLOW)[];
    const currentIndex = questions.indexOf(currentQuestion);
    
    if (currentIndex < questions.length - 1) {
      const nextQuestion = questions[currentIndex + 1];
      setCurrentQuestion(nextQuestion);
      addBotMessage(QUALIFICATION_FLOW[nextQuestion].question, 
        QUALIFICATION_FLOW[nextQuestion].options,
        { type: 'qualification' });
    } else {
      handleQualificationComplete();
    }
  };

  const handleQualificationComplete = () => {
    const suggestedServices = getSuggestedServices(userResponses);
    const bundle = getServiceBundle(userResponses);
    
    addBotMessage(
      `Perfect! Based on your needs, I think we'd be a great fit. Here's what I recommend:\n\n${suggestedServices}\n\n${bundle.name} (${bundle.price})\n${bundle.services.join('\n')}\n\nWant to skip the back-and-forth? Book a strategy call with our team now!`,
      ["Book Strategy Call", "Send me more info"],
      { type: 'booking' }
    );
  };

  const getSuggestedServices = (responses: Record<string, string>): string => {
    let suggestions = [];
    
    if (responses.Q1 === "Branding" || responses.Q1 === "All of the above") {
      suggestions.push("🎯 Complete Brand Strategy & Design");
    }
    if (responses.Q1 === "Sales" || responses.Q1 === "All of the above") {
      suggestions.push("💰 Conversion-Focused Marketing");
    }
    if (responses.Q1 === "Traffic" || responses.Q1 === "All of the above") {
      suggestions.push("🚀 SEO & Paid Media Management");
    }
    
    return suggestions.join("\n");
  };

  const getServiceBundle = (responses: Record<string, string>) => {
    if (responses.Q1 === "Branding") {
      return SERVICE_BUNDLES.branding;
    } else if (responses.Q1 === "Sales") {
      return SERVICE_BUNDLES.marketing;
    } else if (responses.Q1 === "Traffic") {
      return SERVICE_BUNDLES.website;
    }
    return SERVICE_BUNDLES.branding; // Default
  };

  const handleOptionClick = async (option: string) => {
    if (option === "Book Strategy Call") {
      window.open("https://calendly.com/d/cqyy-j3g-6yg", "_blank");
      addBotMessage(BRAND_VOICE.closer, undefined, { type: 'booking' });
    } else if (option === "Send me more info") {
      addBotMessage("Sure thing! Just drop your email below and I'll send over our proposal and portfolio. 📧", 
        ["Enter email"],
        { type: 'followup' });
    } else if (option.startsWith("Show ")) {
      // Handle portfolio/case study display
      const item = option.replace("Show ", "").toLowerCase();
      addBotMessage(`Here are some amazing ${item} examples from our portfolio...`, 
        ["Book Consultation", "See More"],
        { type: 'service' });
    } else {
      handleUserResponse(option);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={`sia-container ${isOpen ? 'open' : ''}`}>
      <div className="sia-header">
        <div className="sia-title">
          <span className="sia-avatar">S</span>
          <h3>{SIA_CONFIG.name}</h3>
        </div>
        <button onClick={handleClose} className="close-button">×</button>
      </div>
      
      <div className="messages-container">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.type}`}>
            {message.type === 'bot' && <div className="bot-avatar">S</div>}
            <div className="message-content">
              {message.content}
              {message.options && (
                <div className="options-container">
                  {message.options.map((option, optIndex) => (
                    <button
                      key={optIndex}
                      onClick={() => handleOptionClick(option)}
                      className="option-button"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="typing-indicator">
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="input-container">
        <input
          type="text"
          placeholder="Type your message..."
          className="message-input"
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              const input = e.target as HTMLInputElement;
              if (input.value.trim()) {
                handleUserResponse(input.value.trim());
                input.value = '';
              }
            }
          }}
        />
        <button 
          className="send-button"
          onClick={() => {
            const input = document.querySelector('.message-input') as HTMLInputElement;
            if (input.value.trim()) {
              handleUserResponse(input.value.trim());
              input.value = '';
            }
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default SIA; 
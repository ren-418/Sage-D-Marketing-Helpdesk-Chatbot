import React, { useState, useEffect, useRef } from 'react';
import { Message, UserSession, Service, PageContext } from './types';
import { SIA_CONFIG, QUALIFICATION_QUESTIONS, PAGE_SPECIFIC_BEHAVIOR } from './config';
import { trackChatEvent, trackConversion } from '../../services/analytics';
import { loadSession, updateSession } from '../../services/session';
import './SIA.css';

interface SIAProps {
  onClose: () => void;
  pageContext?: PageContext;
}

const SIA: React.FC<SIAProps> = ({ onClose, pageContext = { pageType: 'home' } }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [userSession, setUserSession] = useState<UserSession>(() => {
    const savedSession = loadSession();
    return savedSession || {
      id: Date.now().toString(),
      lastInteraction: new Date(),
      qualification: {
        needs: [],
        businessType: '',
        hasWebsite: false,
        budget: ''
      }
    };
  });
  const [currentQualificationStep, setCurrentQualificationStep] = useState(0);
  const [isOpen, setIsOpen] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
    trackChatEvent('open', { pageContext });
  }, [messages]);

  useEffect(() => {
    const pageBehavior = PAGE_SPECIFIC_BEHAVIOR[pageContext.pageType] || PAGE_SPECIFIC_BEHAVIOR.home;
    addBotMessage(pageBehavior.initialMessage, pageBehavior.actions);
  }, [pageContext.pageType]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const addBotMessage = (content: string, options?: string[]) => {
    setMessages(prev => [...prev, { type: 'bot', content, options }]);
    trackChatEvent('bot_message', { content, options });
  };

  const handleUserResponse = async (response: string) => {
    setMessages(prev => [...prev, { type: 'user', content: response }]);
    setIsTyping(true);

    try {
      if (currentQualificationStep < QUALIFICATION_QUESTIONS.length) {
        // Simulate bot thinking for qualification responses
        await new Promise(resolve => setTimeout(resolve, 800));
        handleQualificationResponse(response);
      } else {
        // Simulate bot thinking for service responses
        await new Promise(resolve => setTimeout(resolve, 1200));
        handleServiceResponse(response);
      }
    } catch (error) {
      console.error('Error processing response:', error);
      addBotMessage("I apologize, but I'm having trouble processing your request. Could you try again?");
    } finally {
      setIsTyping(false);
    }
  };

  const handleQualificationResponse = (response: string) => {
    const currentQuestion = QUALIFICATION_QUESTIONS[currentQualificationStep];
    const key = currentQuestion.key as keyof typeof userSession.qualification;

    const updatedSession = {
      ...userSession,
      qualification: {
        ...userSession.qualification,
        [key]: response
      }
    };

    setUserSession(updatedSession);
    updateSession(updatedSession);
    trackChatEvent('qualification_response', { question: currentQuestion.key, response });

    if (currentQualificationStep < QUALIFICATION_QUESTIONS.length - 1) {
      setCurrentQualificationStep(prev => prev + 1);
      const nextQuestion = QUALIFICATION_QUESTIONS[currentQualificationStep + 1];
      addBotMessage(nextQuestion.question, nextQuestion.options);
    } else {
      suggestServices();
      trackConversion('qualification_complete', updatedSession.qualification);
    }
  };

  const handleServiceResponse = (response: string) => {
    const service = SIA_CONFIG.services.find(s => s.name.toLowerCase() === response.toLowerCase());
    
    if (service) {
      showServiceDetails(service);
      trackConversion('service_selected', service.id);
    } else if (response.toLowerCase().includes('book') || response.toLowerCase().includes('schedule')) {
      offerBooking();
      trackConversion('booking_initiated', {});
    } else if (response.toLowerCase().includes('portfolio') || response.toLowerCase().includes('work')) {
      showPortfolio();
      trackChatEvent('portfolio_view', {});
    } else if (response.toLowerCase().includes('case study') || response.toLowerCase().includes('results')) {
      showCaseStudies();
      trackChatEvent('case_study_view', {});
    } else {
      addBotMessage("I'm not sure I understand. Would you like to:", [
        "Explore Services",
        "See Our Work",
        "Book Strategy Call"
      ]);
    }
  };

  const suggestServices = () => {
    const suggestedServices = SIA_CONFIG.services.filter(service => {
      // Add logic to filter services based on qualification
      if (userSession.qualification.needs.includes('website')) {
        return service.name.toLowerCase().includes('website');
      }
      return true;
    });

    const serviceNames = suggestedServices.map(s => s.name);
    addBotMessage(
      "Based on your needs, I recommend these services:",
      [...serviceNames, "See Portfolio", "Book Strategy Call"]
    );
  };

  const showServiceDetails = (service: Service) => {
    addBotMessage(
      `${service.description}\n\nWant to see our work in this area or book a consultation?`,
      ["See Portfolio", "Book Strategy Call"]
    );
  };

  const offerBooking = () => {
    addBotMessage(
      "Ready to make moves? Let's schedule your strategy session.",
      ["Book Now", "Maybe Later"]
    );
  };

  const showPortfolio = () => {
    addBotMessage(
      "Check out our latest work. Which area interests you most?",
      SIA_CONFIG.services.map(s => s.name)
    );
  };

  const showCaseStudies = () => {
    addBotMessage(
      "Here are some of our success stories. Which service would you like to learn more about?",
      SIA_CONFIG.services.map(s => s.name)
    );
  };

  const handleClose = () => {
    setIsOpen(false);
    trackChatEvent('close', { sessionDuration: Date.now() - userSession.lastInteraction.getTime() });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={`sia-container ${isOpen ? 'open' : ''}`}>
      <div className="sia-header">
        <div className="sia-title">
          <span className="sia-avatar">{SIA_CONFIG.avatar}</span>
          <div className="sia-title-text">
            <h3>{SIA_CONFIG.name}</h3>
            <span className="sia-full-name">{SIA_CONFIG.fullName}</span>
          </div>
        </div>
        <button onClick={handleClose} className="close-button">×</button>
      </div>
      
      <div className="messages-container">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.type}`}>
            {message.type === 'bot' && <div className="bot-avatar">{SIA_CONFIG.avatar}</div>}
            <div className="message-content">
              {message.content}
              {message.options && (
                <div className="options-container">
                  {message.options.map((option, optIndex) => (
                    <button
                      key={optIndex}
                      onClick={() => handleUserResponse(option)}
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
          <div className="message bot">
            <div className="bot-avatar">{SIA_CONFIG.avatar}</div>
            <div className="message-content">
              <div className="typing-indicator">
                <span className="typing-dot"></span>
                <span className="typing-dot"></span>
                <span className="typing-dot"></span>
              </div>
            </div>
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
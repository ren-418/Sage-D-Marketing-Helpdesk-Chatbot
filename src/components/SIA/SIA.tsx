import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Message, UserSession, Service, PageContext } from './types';
import { SIA_CONFIG, QUALIFICATION_QUESTIONS, PAGE_SPECIFIC_BEHAVIOR, EMAIL_CAPTURE_PROMPTS } from './config';
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
  const navigate = useNavigate();
  const [userSession, setUserSession] = useState<UserSession>(() => {
    const savedSession = loadSession();
    return savedSession || {
      id: Date.now().toString(),
      lastInteraction: new Date(),
      qualification: {
        needs: [],
        businessType: '',
        hasWebsite: '',
        websiteSatisfaction: '',
        budget: ''
      }
    };
  });
  const [currentQualificationStep, setCurrentQualificationStep] = useState(0);
  const [isOpen, setIsOpen] = useState(true);
  const [isEmailCapture, setIsEmailCapture] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
    trackChatEvent('open', { pageContext });
  }, [messages]);

  useEffect(() => {
    const pageBehavior = PAGE_SPECIFIC_BEHAVIOR[pageContext.pageType] || PAGE_SPECIFIC_BEHAVIOR.home;
    addBotMessage(pageBehavior.initialMessage, pageBehavior.actions);
  }, [pageContext.pageType]);


  const generateConversationId = () => {
    return 'conv-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const addBotMessage = (content: string, options?: string[]) => {
    setMessages(prev => [...prev, { type: 'bot', content, options }]);
    trackChatEvent('bot_message', { content, options });
  };

  const handleUserResponse = async (response: string, isCustomChat: boolean) => {
    setMessages(prev => [...prev, { type: 'user', content: response }]);
    setIsTyping(true);
    console.log('isCustomChat :::', isCustomChat);
    try {
      if (!!isCustomChat) {
        await handleCustomChat(response);
      } else if (isEmailCapture) {
        await handleEmailCapture(response);
      } else if (currentQualificationStep < QUALIFICATION_QUESTIONS.length) {
        await new Promise(resolve => setTimeout(resolve, 800));
        handleQualificationResponse(response);
      } else {
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

  const handleCustomChat = async (response: string) => {
    const conversationId = generateConversationId();
    const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/chat/message`, {
      message: response,
      conversationId
    });
    console.log(res.data);
    if (res.data.data.response.toLowerCase().includes("user wants to book a consultation call")) {
      offerBooking();
    } else {
      addBotMessage(res.data.data.response);
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

    // Check if we should show the next question
    const nextQuestion = QUALIFICATION_QUESTIONS[currentQualificationStep + 1];
    if (nextQuestion && (!nextQuestion.showIf || nextQuestion.showIf(updatedSession))) {
      setCurrentQualificationStep(prev => prev + 1);
      addBotMessage(nextQuestion.question, nextQuestion.options);
    } else if (currentQualificationStep < QUALIFICATION_QUESTIONS.length - 1) {
      setCurrentQualificationStep(prev => prev + 1);
      const nextVisibleQuestion = QUALIFICATION_QUESTIONS.find((q, i) => 
        i > currentQualificationStep && (!q.showIf || q.showIf(updatedSession))
      );
      if (nextVisibleQuestion) {
        addBotMessage(nextVisibleQuestion.question, nextVisibleQuestion.options);
      } else {
        handleQualificationComplete(updatedSession);
      }
    } else {
      handleQualificationComplete(updatedSession);
    }
  };

  const handleQualificationComplete = (session: UserSession) => {
    trackConversion('qualification_complete', session.qualification);
    
    // Suggest services based on qualification
    const suggestedServices = SIA_CONFIG.services.filter(service => {
      if (session.qualification.needs.includes('website') || 
          session.qualification.websiteSatisfaction === 'No') {
        return service.id === 'web';
      }
      return true;
    });

    const serviceNames = suggestedServices.map(s => s.name); 
    
    // First show service suggestions
    addBotMessage(
      `Based on your needs, I recommend these services: ${serviceNames.join(', ')}.`,
      serviceNames
    );

    // After a short delay, show the next steps
    setTimeout(() => {
      addBotMessage(
        "You seem like a great fit for our services! Would you like to:",
        ["Book a Call", "Enter Email for More Info", "See Portfolio"]
      );
    }, 500);
  };

  const handleServiceResponse = (response: string) => {
    if (response === "Close Chat") {
      setIsOpen(false);
      trackChatEvent('close', { sessionDuration: Date.now() - userSession.lastInteraction.getTime() });
      onClose();
      return;
    }

    if (response === "Book a Call") {
      window.open("https://calendly.com/d/cqyy-j3g-6yg", "_blank");
      return;
    } else if (response === "Enter Email for More Info") {
      navigate("/layouts/get-in-touch");
      return;
    } else if (response === "See Portfolio") {
      navigate("/layouts/our-work");
      return;
    }

    const service = SIA_CONFIG.services.find(s => s.name.toLowerCase() === response.toLowerCase());
    
    if (service) {
      setUserSession(prev => ({ ...prev, lastServiceViewed: service.id }));
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
      // If we don't understand the response, show qualification-based options
      if (currentQualificationStep >= QUALIFICATION_QUESTIONS.length) {
        addBotMessage("I'm not sure I understand. Would you like to:", [
          "Book a Call",
          "Enter Email for More Info",
          "See Portfolio"
        ]);
      } else {
        addBotMessage("I'm not sure I understand. Would you like to:", [
          "Explore Services",
          "See Our Work",
          "Book Strategy Call"
        ]);
      }
    }
  };

  const handleEmailCapture = (email: string) => {
    if (email.includes('@') && email.includes('.')) {
      const updatedSession = {
        ...userSession,
        email
      };
      setUserSession(updatedSession);
      updateSession(updatedSession);
      setIsEmailCapture(false);
      trackConversion('email_captured', {});
      
      // Close chat after successful email capture
      setIsOpen(false);
      trackChatEvent('close', { sessionDuration: Date.now() - userSession.lastInteraction.getTime() });
      onClose();
    } else {
      // Just show error message without additional prompts
      addBotMessage("Please enter a valid email address.");
    }
  };

  const showServiceDetails = (service: Service) => {
    addBotMessage(
      `${service.prompts.initial}\n\n${service.prompts.followUp}`,
      ["See Portfolio", "Book a Call", "Enter Email for More Info"]
    );
  };

  const offerBooking = () => {
    addBotMessage(
      "Ready to make moves? Let's schedule your strategy session.",
      ["Book a Call", "Enter Email for More Info", "Maybe Later"]
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
    if (!userSession.email) {
      setIsEmailCapture(true);
      addBotMessage(EMAIL_CAPTURE_PROMPTS.beforeExit, ["Close Chat"]);
      return;
    }
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
                  {message.options.map((option, optIndex) => {
                    const handleClick = () => {
                      if (option === "Close Chat") {
                        setIsOpen(false);
                        trackChatEvent('close', { sessionDuration: Date.now() - userSession.lastInteraction.getTime() });
                        onClose();
                      } else if (option === "Book a Call") {
                        window.open("https://calendly.com/d/cqyy-j3g-6yg", "_blank");
                      } else if (option === "Enter Email for More Info") {
                        navigate("/layouts/get-in-touch");
                      } else if (option === "See Portfolio") {
                        navigate("/layouts/our-work");
                      } else {
                        handleUserResponse(option, false);
                      }
                    };
                    return (
                      <button
                        key={optIndex}
                        onClick={handleClick}
                        className="option-button"
                      >
                        {option}
                      </button>
                    );
                  })}
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
          type={isEmailCapture ? "email" : "text"}
          placeholder={isEmailCapture ? "Enter your email..." : "Type your message..."}
          className="message-input"
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              const input = e.target as HTMLInputElement;
              if (input.value.trim()) {
                handleUserResponse(input.value.trim(), true);
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
              handleUserResponse(input.value.trim(), true);
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

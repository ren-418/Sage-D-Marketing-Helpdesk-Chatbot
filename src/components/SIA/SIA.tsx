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
      } else if (response === "Explore Services") {
        // Start qualification flow
        setUserSession(prev => ({ ...prev, flowType: 'service' }));
        setCurrentQualificationStep(0);
        const firstQuestion = QUALIFICATION_QUESTIONS[0];
        addBotMessage(firstQuestion.question, firstQuestion.options);
      } else if (response === "See Our Work") {
        // Start portfolio flow
        setUserSession(prev => ({ ...prev, flowType: 'portfolio' }));
        showPortfolio();
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
      `Based on the available options, one of these services would be feasible for you: ${serviceNames.join(', ')}.`,

    );

    // After a short delay, show the next steps
    setTimeout(() => {
      addBotMessage(
        "You seem like a great fit for our services! Would you like to:",
        ["Book a Call", "Fill Our Contact Form", "See Portfolio"]
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
    } else if (response === "Fill Our Contact Form") {
      setIsEmailCapture(true);
      addBotMessage("Please enter your email address, and we'll send you detailed information about our services.");
      return;
    } else if (response === "See Portfolio") {
      navigate("/layouts/our-work");
      return;
    }

    const service = SIA_CONFIG.services.find(s => s.name.toLowerCase() === response.toLowerCase());

    if (service) {
      setUserSession(prev => ({ ...prev, lastServiceViewed: service.id }));
      if (userSession.flowType === 'portfolio') {
        // Portfolio flow - show portfolio details
        showPortfolioDetails(service);
      } else {
        // Service exploration flow - show service details
        showServiceDetails(service);
      }
      trackConversion('service_selected', service.id);
    } else {
      // Show final options
      addBotMessage("Would you like to:", [
        "Book a Call",
        "Fill Our Contact Form",
        "See Portfolio"
      ]);
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

  const showPortfolio = () => {
    addBotMessage(
      "Here's a showcase of our best work. Which area would you like to explore?",
      SIA_CONFIG.services.map(s => s.name)
    );
  };

  const showPortfolioDetails = (service: Service) => {
    // Show portfolio-specific message
    addBotMessage(
      `Here are some of our best ${service.name} projects. Would you like to:`,
      ["View More Projects", "Book a Call", "Fill Our Contact Form"]
    );
  };

  const showServiceDetails = (service: Service) => {
    // Show service-specific message
    addBotMessage(service.prompts.initial);

    setTimeout(() => {
      addBotMessage("Would you like to:", [
        "Book a Call",
        "Fill Our Contact Form",
        "See Portfolio"
      ]);
    }, 1000);
  };

  const offerBooking = () => {
    addBotMessage(
      "Ready to make moves? Let's schedule your strategy session.",
      ["Book a Call", "Fill Our Contact Form", "See Portfolio"]
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
                      } else if (option === "Fill Our Contact Form") {
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

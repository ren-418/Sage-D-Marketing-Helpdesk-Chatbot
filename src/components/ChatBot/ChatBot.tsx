import React, { useState, useRef, useEffect } from 'react';
import { toast } from 'react-toastify';
import './ChatBot.css';

interface Message {
  type: 'user' | 'bot';
  content: string;
  options?: string[];
}

interface ChatBotProps {
  onClose: () => void;
}

const QUALIFICATION_FLOW = {
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

const ChatBot: React.FC<ChatBotProps> = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<keyof typeof QUALIFICATION_FLOW>('Q1');
  const [userResponses, setUserResponses] = useState<Record<string, string>>({});
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Initial greeting
    addBotMessage("Hey there! 👋 I'm SAGEbot, your digital growth partner. We don't do vanilla - we're here to make your brand echo online! What are you looking to improve today?", 
      QUALIFICATION_FLOW.Q1.options);
  }, []);

  const addBotMessage = (content: string, options?: string[]) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { type: 'bot', content, options }]);
      setIsTyping(false);
    }, 1000);
  };

  const handleUserResponse = async (response: string) => {
    // Add user message
    setMessages(prev => [...prev, { type: 'user', content: response }]);
    
    // Store response
    setUserResponses(prev => ({ ...prev, [currentQuestion]: response }));

    // Move to next question or finish qualification
    const questions = Object.keys(QUALIFICATION_FLOW) as (keyof typeof QUALIFICATION_FLOW)[];
    const currentIndex = questions.indexOf(currentQuestion);
    
    if (currentIndex < questions.length - 1) {
      const nextQuestion = questions[currentIndex + 1];
      setCurrentQuestion(nextQuestion);
      addBotMessage(QUALIFICATION_FLOW[nextQuestion].question, QUALIFICATION_FLOW[nextQuestion].options);
    } else {
      // Qualification complete - suggest next steps
      handleQualificationComplete();
    }
  };

  const handleQualificationComplete = () => {
    const suggestedServices = getSuggestedServices(userResponses);
    addBotMessage(`Perfect! Based on your needs, I think we'd be a great fit. Here's what I recommend:\n\n${suggestedServices}\n\nWant to skip the back-and-forth? Book a strategy call with our team now!`, ["Book Strategy Call", "Send me more info"]);
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

  const handleOptionClick = async (option: string) => {
    if (option === "Book Strategy Call") {
      window.open("https://calendly.com/d/cqyy-j3g-6yg", "_blank");
      addBotMessage("Excellent choice! I've opened our booking calendar in a new tab. Can't wait to chat about turning your brand into an icon! 🚀");
    } else if (option === "Send me more info") {
      addBotMessage("Sure thing! Just drop your email below and I'll send over our proposal and portfolio. 📧", ["Enter email"]);
    } else {
      handleUserResponse(option);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
      <div className="chatbot-header">
        <h3>SAGED Chat</h3>
        <button onClick={handleClose} className="close-button">×</button>
      </div>
      
      <div className="messages-container">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.type}`}>
            {message.type === 'bot' && <div className="bot-avatar">S</div>}
            <div className="message-content">{message.content}</div>
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
    </div>
  );
};

export default ChatBot; 
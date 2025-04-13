import React, { useState } from 'react';
import ChatBot from './ChatBot';
import './ChatBotTrigger.css';

const ChatBotTrigger: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && <ChatBot onClose={() => setIsOpen(false)} />}
      <button 
        className={`chat-trigger ${isOpen ? 'hidden' : ''}`}
        onClick={() => setIsOpen(true)}
      >
        <span className="chat-trigger-icon">💬</span>
        <span className="chat-trigger-text">Let's Talk Growth</span>
      </button>
    </>
  );
};

export default ChatBotTrigger; 
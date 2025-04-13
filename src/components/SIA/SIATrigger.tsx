import React, { useState } from 'react';
import SIA from './SIA';
import './SIATrigger.css';

const SIATrigger: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button className="sia-trigger" onClick={handleClick}>
        <span className="sia-trigger-icon">💬</span>
        <span className="sia-trigger-text">Let's Talk Growth</span>
      </button>
      {isOpen && <SIA onClose={handleClose} />}
    </>
  );
};

export default SIATrigger; 
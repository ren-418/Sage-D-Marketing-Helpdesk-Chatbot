// components/RadioButton.tsx
import React from 'react';

interface RadioButtonProps {
  id: string;
  name: string;
  value: string;
  label: string;
  checked: boolean;
  onChange: (value: string) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  id,
  name,
  value,
  label,
  checked,
  onChange,
}) => {
  return (
    <div className="flex items-center w-full">
      {/* Hidden Radio Input */}
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
        className="sr-only"
        aria-checked={checked}
        role="radio"
      />
      {/* Label */}
      <label
        htmlFor={id}
        className={`flex justify-between items-center w-full font-medium h-14 bg-white text-black text-base px-4 rounded-lg select-none 
          ${checked ? 'border-black text-black border' : 'border-gray-300'}
          cursor-pointer 
          transition-colors 
          duration-200
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black`}
      >
        {label}
        {/* Custom Radio Indicator */}
        <span className="flex items-center justify-center">
          {/* Outer Circle */}
          <span className="w-5 h-5 rounded-full border border-black flex items-center justify-center relative">
            {/* Inner Circle */}
            {checked && (
              <span className="w-[11px] h-[11px] bg-black rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
            )}
          </span>
        </span>
      </label>
    </div>
  );
};

export default RadioButton;

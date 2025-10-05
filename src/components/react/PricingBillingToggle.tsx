import React, { useState } from 'react';

interface PricingBillingToggleProps {
  onToggle?: (isAnnual: boolean) => void;
}

export default function PricingBillingToggle({ onToggle }: PricingBillingToggleProps) {
  const [isAnnual, setIsAnnual] = useState(false);

  const handleToggle = () => {
    const newValue = !isAnnual;
    setIsAnnual(newValue);
    if (onToggle) {
      onToggle(newValue);
    }
  };

  return (
    <div className="flex items-center justify-center mb-8">
      <div className="bg-gray-100 rounded-full p-1 flex">
        <button
          onClick={handleToggle}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            !isAnnual
              ? 'bg-white text-gray-900 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Monthly
        </button>
        <button
          onClick={handleToggle}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            isAnnual
              ? 'bg-white text-gray-900 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Annual <span className="text-xs text-green-600 ml-1">(Save 20%)</span>
        </button>
      </div>
    </div>
  );
}

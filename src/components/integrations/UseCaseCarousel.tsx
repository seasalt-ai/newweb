import React, { useState, useEffect } from 'react';
import type { SupportedLanguage } from '../../i18n/helpers';
import PhoneMockup from './PhoneMockup';

interface UseCase {
  industry: string;
  messageTitle: string;
  messageBody: string;
}

interface UseCaseCarouselProps {
  lang: SupportedLanguage;
  translations: any;
  useCases: UseCase[];
  autoAdvanceInterval?: number;
  className?: string;
  actionType?: 'sms' | 'whatsapp' | 'phone-call';
  actionLogo?: string;
}

const UseCaseCarousel: React.FC<UseCaseCarouselProps> = ({
  lang,
  translations,
  useCases,
  autoAdvanceInterval = 5000,
  className = '',
  actionType = 'sms',
  actionLogo,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % useCases.length);
    }, autoAdvanceInterval);

    return () => clearInterval(interval);
  }, [useCases.length, autoAdvanceInterval]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className={`relative ${className}`}>
      {/* Carousel Content */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {useCases.map((useCase, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <div className="flex flex-col items-center gap-6">
                {/* Industry Label */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30">
                  <span className="text-blue-400 font-semibold text-sm">{useCase.industry}</span>
                </div>
                
                {/* Phone Mockup */}
                <PhoneMockup
                  lang={lang}
                  messageTitle={useCase.messageTitle}
                  messageBody={useCase.messageBody}
                  actionType={actionType}
                  actionLogo={actionLogo}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {useCases.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'w-8 bg-gradient-to-r from-blue-500 to-purple-500'
                : 'bg-gray-600 hover:bg-gray-500'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Manual Navigation Arrows */}
      <button
        onClick={() => setCurrentIndex((prev) => (prev - 1 + useCases.length) % useCases.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => setCurrentIndex((prev) => (prev + 1) % useCases.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default UseCaseCarousel;

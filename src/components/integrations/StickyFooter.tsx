import React, { useState, useEffect } from 'react';
import type { SupportedLanguage } from '../../i18n/helpers';

interface StickyFooterProps {
  lang: SupportedLanguage;
  translations: any;
  zapierUrl: string;
  scrollThreshold?: number;
  className?: string;
}

const StickyFooter: React.FC<StickyFooterProps> = ({
  lang,
  translations,
  zapierUrl,
  scrollThreshold = 300,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > scrollThreshold;
      setIsVisible(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollThreshold]);

  const t = (key: string, fallback: string): string => {
    const keys = key.split('.');
    let value = translations;
    for (const k of keys) {
      value = value?.[k];
    }
    return value || fallback;
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      } ${className}`}
    >
      <div className="bg-gradient-to-r from-gray-900/95 via-blue-900/95 to-purple-900/95 backdrop-blur-xl border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Text */}
          <div className="text-center sm:text-left">
            <p className="text-white font-semibold text-lg">
              {t('sticky_cta.text', 'Ready to automate your outreach?')}
            </p>
          </div>

          {/* CTA Button */}
          <a
            href={zapierUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            {t('sticky_cta.button', 'Start Free with Zapier')}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default StickyFooter;

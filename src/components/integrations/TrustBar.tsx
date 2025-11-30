import React from 'react';
import type { SupportedLanguage } from '../../i18n/helpers';
import StatCounter from './StatCounter';

interface TrustBarProps {
  lang: SupportedLanguage;
  translations: any;
  className?: string;
}

const TrustBar: React.FC<TrustBarProps> = ({ lang, translations, className = '' }) => {
  const t = (key: string, fallback: string): string => {
    const keys = key.split('.');
    let value = translations;
    for (const k of keys) {
      value = value?.[k];
    }
    return value || fallback;
  };

  // Placeholder logo placeholders - in production these would be actual company logos
  const companyLogos = [
    { name: 'Company 1', width: 'w-24' },
    { name: 'Company 2', width: 'w-28' },
    { name: 'Company 3', width: 'w-20' },
    { name: 'Company 4', width: 'w-26' },
    { name: 'Zapier Partner', width: 'w-32' },
  ];

  return (
    <div className={`text-center ${className}`}>
      {/* Heading */}
      <h3 className="text-xl font-semibold text-gray-400 mb-8">
        {t('trust.heading', 'Trusted by modern teams at:')}
      </h3>

      {/* Logo Grid */}
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mb-12 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
        {companyLogos.map((logo, index) => (
          <div
            key={index}
            className={`${logo.width} h-12 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg flex items-center justify-center text-gray-400 text-xs font-semibold`}
          >
            {logo.name}
          </div>
        ))}
      </div>

      {/* Stat */}
      <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        <span className="text-gray-300 font-medium">
          {t('trust.stat_prefix', 'Over ')}<StatCounter endValue={1} className="inline" />{t('trust.stat_number', ' Million')}{t('trust.stat_suffix', ' messages optimized by Agentic AI')}
        </span>
      </div>
    </div>
  );
};

export default TrustBar;

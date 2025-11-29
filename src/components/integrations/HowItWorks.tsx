import React from 'react';
import type { SupportedLanguage } from '../../i18n/helpers';

interface HowItWorksProps {
  lang: SupportedLanguage;
  translations: any;
  appName: string;
  className?: string;
}

const HowItWorks: React.FC<HowItWorksProps> = ({ lang, translations, appName, className = '' }) => {
  const t = (key: string, fallback: string): string => {
    const keys = key.split('.');
    let value = translations;
    for (const k of keys) {
      value = value?.[k];
    }
    return value || fallback;
  };

  const steps = [
    {
      number: 1,
      title: t('how_it_works.step1_title', 'Connect'),
      description: t('how_it_works.step1_desc', `Select ${appName}`).replace('{{app}}', appName),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      number: 2,
      title: t('how_it_works.step2_title', 'Prompt'),
      description: t('how_it_works.step2_desc', 'Tell the AI what to do in plain English'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
    },
    {
      number: 3,
      title: t('how_it_works.step3_title', 'Activate'),
      description: t('how_it_works.step3_desc', 'The AI handles the data extraction and sending'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
  ];

  return (
    <div className={className}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
        {t('how_it_works.title', 'How it Works')}
      </h2>
      
      <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4">
        {steps.map((step, index) => (
          <React.Fragment key={step.number}>
            {/* Step Card */}
            <div className="flex-1 max-w-xs">
              <div className="glass-card p-6 rounded-2xl text-center group hover:scale-105 transition-transform duration-300">
                {/* Step Number Badge */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white font-bold text-xl mb-4">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-400 mb-4">
                  {step.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            </div>
            
            {/* Arrow (except after last step) */}
            {index < steps.length - 1 && (
              <div className="flex-shrink-0 text-blue-400">
                <svg className="w-8 h-8 rotate-90 md:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;

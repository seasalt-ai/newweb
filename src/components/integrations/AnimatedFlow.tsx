import React from 'react';
import type { SupportedLanguage } from '../../i18n/helpers';
import PhoneMockup from './PhoneMockup';

interface AnimatedFlowProps {
  lang: SupportedLanguage;
  appName: string;
  appLogo: string;
  actionName: string;
  actionLogo: string;
  actionType?: 'sms' | 'whatsapp' | 'phone-call';
  messyInputExample: {
    field1: string;
    field2: string;
  };
  cleanOutputMessage: {
    title: string;
    body: string;
  };
  className?: string;
}

const AnimatedFlow: React.FC<AnimatedFlowProps> = ({
  lang,
  appName,
  appLogo,
  actionName,
  actionLogo,
  actionType = 'sms',
  messyInputExample,
  cleanOutputMessage,
  className = '',
}) => {
  return (
    <div className={`flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 ${className}`}>
      {/* Left: Trigger */}
      <div className="flex-shrink-0 flex flex-col items-center gap-4">
        <div className="glass-card p-8 rounded-2xl flex items-center justify-center min-h-[200px]">
          <img src={appLogo} alt={appName} className="w-32 h-32 object-contain" />
        </div>
        {/* Label */}
        <div className="text-center">
          <div className="text-sm font-semibold text-gray-500">Trigger</div>
          <div className="text-base font-bold text-gray-900">{appName}</div>
        </div>
      </div>

      {/* Arrow */}
      <div className="flex-shrink-0">
        <svg className="w-12 h-12 text-blue-400 rotate-90 lg:rotate-0 animate-pulse-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </div>

      {/* Center: Agentic Send */}
      <div className="flex-shrink-0 flex flex-col items-center gap-4">
        <div className="relative w-[200px] h-[200px] flex items-center justify-center">
          {/* Pulsing glow rings - Perfect circles */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48">
            <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 animate-ping-slow"></div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40">
            <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-30 animate-pulse"></div>
          </div>
          
          {/* AI Brain Icon */}
          <div className="relative glass-card p-8 rounded-full">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
          </div>
        </div>
        {/* Label */}
        <div className="text-center">
          <div className="text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Agentic Send</div>
          <div className="text-sm font-semibold text-gray-600">Seasalt.ai</div>
        </div>
      </div>

      {/* Arrow */}
      <div className="flex-shrink-0">
        <svg className="w-12 h-12 text-blue-400 rotate-90 lg:rotate-0 animate-pulse-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </div>

      {/* Right: Action */}
      <div className="flex-shrink-0 flex flex-col items-center gap-4">
        <div className="min-h-[200px] flex items-center justify-center">
          <PhoneMockup
            lang={lang}
            messageTitle={cleanOutputMessage.title}
            messageBody={cleanOutputMessage.body}
            actionType={actionType}
            actionLogo={actionLogo}
          />
        </div>
        {/* Label */}
        <div className="text-center">
          <div className="text-sm font-semibold text-gray-500">Action</div>
          <div className="text-base font-bold text-gray-900">{actionName}</div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedFlow;

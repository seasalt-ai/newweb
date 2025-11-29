import React from 'react';
import type { SupportedLanguage } from '../../i18n/helpers';

interface PhoneMockupProps {
  lang: SupportedLanguage;
  senderName?: string;
  messageTitle: string;
  messageBody: string;
  timestamp?: string;
  className?: string;
  actionType?: 'sms' | 'whatsapp' | 'phone-call';
  actionLogo?: string;
}

const PhoneMockup: React.FC<PhoneMockupProps> = ({
  senderName = 'SEASALT',
  messageTitle,
  messageBody,
  timestamp = '9:41',
  className = '',
  actionType = 'sms',
  actionLogo,
}) => {
  // Determine the icon to show based on action type
  const getActionIcon = () => {
    if (actionLogo) {
      return (
        <img src={actionLogo} alt={actionType} className="w-6 h-6 rounded-md object-contain" />
      );
    }

    // Default fallback icons based on action type
    switch (actionType) {
      case 'whatsapp':
        return (
          <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-green-600 rounded-md flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </div>
        );
      case 'phone-call':
        return (
          <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-md flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
            </svg>
          </div>
        );
      default: // SMS
        return (
          <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-md flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </div>
        );
    }
  };

  // Determine notification style based on action type
  const getNotificationStyle = () => {
    switch (actionType) {
      case 'phone-call':
        return 'bg-blue-500/20 backdrop-blur-xl border-blue-400/40';
      case 'whatsapp':
        return 'bg-green-500/20 backdrop-blur-xl border-green-400/40';
      default:
        return 'bg-white/10 backdrop-blur-xl border-white/20';
    }
  };

  return (
    <div className={`relative w-[220px] md:w-[260px] mx-auto ${className}`}>
      {/* iPhone Frame - Showing top half only */}
      <div className="relative bg-gradient-to-b from-gray-900 to-black rounded-t-[3rem] rounded-b-2xl p-3 shadow-2xl border-8 border-b-4 border-gray-800">
        {/* Dynamic Island */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-10"></div>
        
        {/* Screen - Top half only */}
        <div className="relative bg-gradient-to-b from-blue-950 via-indigo-950 to-purple-950 rounded-t-[2.5rem] rounded-b-xl overflow-hidden h-[280px] md:h-[320px]">
          {/* Status Bar */}
          <div className="flex justify-between items-center px-6 pt-3 text-white text-[10px] font-semibold">
            <span>{timestamp}</span>
            <div className="flex gap-1 items-center">
              <div className="w-3 h-2.5 border border-white rounded-sm">
                <div className="w-1.5 h-1.5 bg-white rounded-sm m-px"></div>
              </div>
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </svg>
            </div>
          </div>

          {/* Notification Banner - At the top */}
          <div className="absolute top-12 left-3 right-3">
            <div className={`rounded-xl p-3 shadow-2xl border ${getNotificationStyle()}`}>
              {/* App Icon & Name */}
              <div className="flex items-center gap-2 mb-2">
                <div className="flex-shrink-0">
                  {getActionIcon()}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-white font-semibold text-xs">{senderName}</div>
                  <div className="text-white/60 text-[10px]">now</div>
                </div>
              </div>
              
              {/* Message Content */}
              <div className="space-y-0.5">
                <div className="text-white font-medium text-xs line-clamp-1">{messageTitle}</div>
                <div className="text-white/80 text-[10px] leading-relaxed line-clamp-2">{messageBody}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;

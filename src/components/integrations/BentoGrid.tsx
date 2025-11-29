import React from 'react';
import type { SupportedLanguage } from '../../i18n/helpers';
import StatCounter from './StatCounter';

interface BentoGridProps {
  lang: SupportedLanguage;
  translations: any;
  actionType?: 'sms' | 'whatsapp' | 'phone-call';
  className?: string;
}

const BentoGrid: React.FC<BentoGridProps> = ({ lang, translations, actionType = 'sms', className = '' }) => {
  const t = (key: string, fallback: string): string => {
    const keys = key.split('.');
    let value = translations;
    for (const k of keys) {
      value = value?.[k];
    }
    return value || fallback;
  };

  // Get action-specific stats
  const getActionStats = () => {
    if (actionType === 'phone-call') {
      return {
        title: 'High Answer Rates',
        value: 89,
        suffix: '%',
        description: 'Calls get answered quickly',
        color: 'from-blue-500 to-cyan-500',
        circleColor: 'text-blue-500',
        bgGradient: 'from-white to-cyan-50'
      };
    }
    // SMS and WhatsApp
    return {
      title: '98% Open Rates',
      value: 98,
      suffix: '%',
      description: 'Messages get read within minutes',
      color: 'from-green-500 to-emerald-500',
      circleColor: 'text-green-500',
      bgGradient: 'from-white to-green-50'
    };
  };

  const actionStats = getActionStats();

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
      {/* Large: Radical Simplicity */}
      <div className="md:col-span-2 bg-gradient-to-br from-white to-blue-50 p-8 rounded-3xl shadow-lg border border-gray-100 group hover:shadow-xl transition-all duration-300">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('bento.simplicity_title', 'Radical Simplicity')}</h3>
        <div className="grid grid-cols-2 gap-8">
          {/* Old Way */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-red-500 font-bold text-lg">❌</span>
              <span className="text-red-600 font-semibold">{t('bento.simplicity_old', '10-Step Old Way')}</span>
            </div>
            <div className="space-y-2">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((step) => (
                <div key={step} className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-xs font-semibold">
                    {step}
                  </div>
                  <div className="h-px flex-1 bg-red-200"></div>
                </div>
              ))}
            </div>
          </div>
          
          {/* New Way */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-green-500 font-bold text-lg">✅</span>
              <span className="text-green-600 font-semibold">{t('bento.simplicity_new', '1-Step Agentic Way')}</span>
            </div>
            <div className="space-y-2 flex items-center justify-center h-full">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  1
                </div>
                <div className="text-lg font-bold text-green-600">Done! ✨</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Small: Action-Specific Stats */}
      <div className={`bg-gradient-to-br ${actionStats.bgGradient} p-8 rounded-3xl shadow-lg border border-gray-100 flex flex-col items-center justify-center text-center group hover:shadow-xl transition-all duration-300`}>
        <h3 className="text-xl font-bold text-gray-900 mb-4">{actionStats.title}</h3>
        <div className="relative w-32 h-32">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="64"
              cy="64"
              r="56"
              stroke="currentColor"
              strokeWidth="8"
              fill="none"
              className="text-gray-200"
            />
            <circle
              cx="64"
              cy="64"
              r="56"
              stroke="currentColor"
              strokeWidth="8"
              fill="none"
              className={actionStats.circleColor}
              strokeDasharray="351.86"
              strokeDashoffset={351.86 * (1 - actionStats.value / 100)}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${actionStats.color}`}>
              <StatCounter endValue={actionStats.value} suffix={actionStats.suffix} />
            </div>
          </div>
        </div>
        <p className="text-gray-600 text-sm mt-4">{actionStats.description}</p>
      </div>

      {/* Medium: AI Data Cleaning */}
      <div className="bg-gradient-to-br from-white to-purple-50 p-8 rounded-3xl shadow-lg border border-gray-100 group hover:shadow-xl transition-all duration-300">
        <h3 className="text-xl font-bold text-gray-900 mb-6">{t('bento.ai_cleaning_title', 'AI Data Cleaning')}</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-3 justify-center">
            <div className="text-red-500 text-sm font-mono line-through bg-red-50 px-3 py-1 rounded">555-010 2399</div>
            <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            <div className="text-green-600 text-sm font-mono font-semibold bg-green-50 px-3 py-1 rounded">+15550102399</div>
          </div>
          <div className="flex items-start gap-3 bg-blue-50 p-3 rounded-lg">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="text-sm text-gray-700 font-medium">{t('bento.ai_cleaning_desc', 'AI fixes bad numbers instantly')}</div>
          </div>
        </div>
      </div>

      {/* Medium: Global Reach */}
      <div className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-white to-indigo-50 p-8 rounded-3xl shadow-lg border border-gray-100 group hover:shadow-xl transition-all duration-300">
        <h3 className="text-xl font-bold text-gray-900 mb-6">{t('bento.global_reach_title', 'Global Reach')}</h3>
        <div className="relative h-48 flex items-center justify-center">
          {/* World map visualization */}
          <svg className="w-full h-full absolute opacity-20" viewBox="0 0 400 200" fill="none">
            <path d="M50,100 Q100,80 150,100 T250,100 T350,100" stroke="currentColor" strokeWidth="2" className="text-blue-400" />
            <circle cx="80" cy="95" r="6" fill="currentColor" className="text-blue-400 animate-pulse" />
            <circle cx="150" cy="105" r="6" fill="currentColor" className="text-purple-400 animate-pulse" style={{ animationDelay: '0.3s' }} />
            <circle cx="220" cy="95" r="6" fill="currentColor" className="text-pink-400 animate-pulse" style={{ animationDelay: '0.6s' }} />
            <circle cx="290" cy="100" r="6" fill="currentColor" className="text-green-400 animate-pulse" style={{ animationDelay: '0.9s' }} />
          </svg>
          <div className="relative z-10 text-center">
            <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mb-2">
              {t('bento.global_reach_desc', 'Send to customers worldwide, instantly')}
            </div>
            <p className="text-gray-600 text-sm">190+ countries • 200+ carriers • Instant delivery</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;

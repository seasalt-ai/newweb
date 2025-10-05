import React from 'react';
import { useTranslation, type SupportedLanguage } from '../i18n/helpers';

interface SupportPlanProps {
  lang: SupportedLanguage;
  translations?: any;
}

const SupportPlan: React.FC<SupportPlanProps> = ({ lang, translations }) => {
  // 安全地調用 Hook，如果失敗則使用 SSR translations
  let hookT = null;
  let isLoading = false;
  
  try {
    if (!translations) {
      const hookResult = useTranslation(lang);
      hookT = hookResult.error ? null : hookResult.t;
      isLoading = hookResult.error ? false : hookResult.isLoading;
    }
  } catch (error) {
    console.log('SupportPlan Hook 調用失敗，使用 SSR translations:', error.message);
    hookT = null;
    isLoading = false;
  }
    
  const getText = (key: string, fallback: string = key): string => {
    if (translations) {
      const keys = key.split('.');
      let result: any = translations;
      
      for (const k of keys) {
        if (result && typeof result === 'object' && k in result) {
          result = result[k];
        } else {
          console.warn(`Missing translation key: "${key}" in locale "${lang}"`);
          return fallback;
        }
      }
      
      return typeof result === 'string' ? result : fallback;
    }
    
    return hookT ? hookT(key) : fallback;
  };
  
  if (!translations && isLoading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-12 bg-gray-200 rounded mb-8"></div>
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="h-96 bg-gray-200 rounded"></div>
              <div className="lg:col-span-2 h-96 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {getText('supportPlan.title', 'Support Plans')}
          </h2>
          <p className="text-xl text-gray-600">
            {getText('supportPlan.priceNote', 'Pricing shown below is for implementation and launch support')}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Trial Plan */}
          <div className="bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-2xl p-8 text-white shadow-xl lg:col-span-1 flex flex-col h-full">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-6 text-white">{getText('supportPlan.trial.title', 'Trial Plan')}</h3>
              <div className="text-6xl font-bold mb-6 text-yellow-50">{getText('supportPlan.trial.price', 'Free')}</div>
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-3">
                  <svg className="w-6 h-6 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-lg font-medium text-white">{getText('supportPlan.trial.features.diy', 'DIY Setup Support')}</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <svg className="w-6 h-6 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-lg font-medium text-white">{getText('supportPlan.trial.features.email', 'Email Support')}</span>
                </div>
                <div className="text-base text-yellow-50 mt-4">{getText('supportPlan.trial.features.chat', 'Basic chat support included')}</div>
              </div>
            </div>
          </div>

          {/* Launch Plan */}
          <div className="bg-black rounded-2xl p-8 text-white shadow-xl lg:col-span-2 flex flex-col h-full">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">{getText('supportPlan.launch.title', 'Launch Plan')}</h3>
              <div className="mb-4">
                <span className="text-2xl">{getText('supportPlan.launch.startsAt', 'Starts at')} </span>
                <span className="text-4xl font-bold text-pink-200">{getText('supportPlan.launch.minPrice', '$1,000')}</span>
                <span className="text-2xl"> {getText('supportPlan.launch.upTo', 'up to')} </span>
                <span className="text-4xl font-bold text-pink-200">{getText('supportPlan.launch.maxPrice', '$10,000')}</span>
              </div>
              <div className="text-lg mb-6">{getText('supportPlan.launch.duration', '3-month implementation')}</div>
            </div>

            <div className="mb-8">
              <p className="text-pink-100 mb-6">
                {getText('supportPlan.launch.description', 'Comprehensive implementation and launch support for your SeaX deployment')}
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <div>
                  <div className="font-semibold">{getText('supportPlan.launch.features.meetings.title', 'Weekly Meetings')}</div>
                  <div className="text-pink-100">{getText('supportPlan.launch.features.meetings.description', 'Regular check-ins and progress reviews')}</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <div>
                  <div className="font-semibold">{getText('supportPlan.launch.features.promptTuning.title', 'AI Prompt Tuning')}</div>
                  <div className="text-pink-100">{getText('supportPlan.launch.features.promptTuning.description', 'Custom AI model optimization')}</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <div>
                  <div className="font-semibold">{getText('supportPlan.launch.features.guidance.title', 'Expert Guidance')}</div>
                  <div className="text-pink-100">{getText('supportPlan.launch.features.guidance.description', 'Best practices and strategic advice')}</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <div>
                  <div className="font-semibold">{getText('supportPlan.launch.features.launchSupport.title', 'Launch Support')}</div>
                  <div className="text-pink-100">{getText('supportPlan.launch.features.launchSupport.description', 'Go-live assistance and monitoring')}</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <div>
                  <div className="font-semibold">{getText('supportPlan.launch.features.marketStrategy.title', 'Marketing Strategy')}</div>
                  <div className="text-pink-100">{getText('supportPlan.launch.features.marketStrategy.description', 'Campaign planning and execution')}</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <div>
                  <div className="font-semibold">{getText('supportPlan.launch.features.successfulLaunch.title', 'Successful Launch')}</div>
                  <div className="text-pink-100">{getText('supportPlan.launch.features.successfulLaunch.description', 'Guaranteed successful deployment')}</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <div>
                  <div className="font-semibold">{getText('supportPlan.launch.features.postLaunch.title', 'Post-Launch Support')}</div>
                  <div className="text-pink-100">{getText('supportPlan.launch.features.postLaunch.description', '30-day post-launch monitoring')}</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <div>
                  <div className="font-semibold">{getText('supportPlan.launch.features.operational.title', 'Operational Training')}</div>
                  <div className="text-pink-100">{getText('supportPlan.launch.features.operational.description', 'Team training and documentation')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportPlan;
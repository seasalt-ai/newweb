import React, { useState, useEffect } from 'react';
import { useTranslation, type SupportedLanguage } from '../../../i18n/helpers';

interface QualificationStep {
  step: number;
  title: string;
  description: string;
  outcome: string;
}

interface LeadGenerationInteractiveProps {
  lang: SupportedLanguage;
  translations?: any;
  qualificationProcess: QualificationStep[];
}

const LeadGenerationInteractive: React.FC<LeadGenerationInteractiveProps> = ({ 
  lang, 
  translations,
  qualificationProcess 
}) => {
  const [activeStep, setActiveStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // 使用 SSR 相容的翻譯方案
  const { t: hookT, isLoading } = translations ? 
    { t: null, isLoading: false } : 
    useTranslation(lang);

  const getText = (key: string, fallback: string = key): string => {
    if (translations) {
      const keys = key.split('.');
      let result: any = translations;
      
      for (const k of keys) {
        if (result && typeof result === 'object' && k in result) {
          result = result[k];
        } else {
          return fallback;
        }
      }
      
      return typeof result === 'string' ? result : fallback;
    }
    
    return hookT ? hookT(key) : fallback;
  };

  // 自動循環動畫
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveStep((prev) => (prev + 1) % qualificationProcess.length);
        setIsAnimating(false);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, [qualificationProcess.length]);

  // 處理載入狀態
  if (isLoading) {
    return (
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/2 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/3 mx-auto mb-12"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <div className="h-6 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const namespace = 'seavoice.pages.solutions.outbound.leadGeneration';

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {getText(`${namespace}.process.title`, 'AI-Powered Qualification Process')}
          </h2>
          <p className="text-xl text-gray-600">
            {getText(`${namespace}.process.subtitle`, 'See how AI transforms prospects into qualified leads')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {qualificationProcess.map((process, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-500 transform ${
                activeStep === index 
                  ? 'scale-105 opacity-100' 
                  : 'scale-100 opacity-70 hover:opacity-90'
              } ${isAnimating && activeStep === index ? 'animate-pulse' : ''}`}
              onClick={() => setActiveStep(index)}
              onKeyPress={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setActiveStep(index);
                }
              }}
              role="button"
              tabIndex={0}
            >
              <div 
                className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold transition-all duration-500 ${
                  activeStep === index
                    ? 'bg-purple-600 text-white shadow-lg scale-110'
                    : 'bg-purple-100 text-purple-600 hover:bg-purple-200'
                }`}
              >
                {process.step}
              </div>
              
              <h3 className={`text-xl font-bold mb-4 transition-colors duration-300 ${
                activeStep === index ? 'text-purple-600' : 'text-gray-900'
              }`}>
                {process.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {process.description}
              </p>
              
              <div className={`p-3 rounded-lg transition-all duration-300 ${
                activeStep === index
                  ? 'bg-purple-50 border-2 border-purple-200'
                  : 'bg-gray-100'
              }`}>
                <p className={`text-sm font-semibold ${
                  activeStep === index ? 'text-purple-800' : 'text-gray-700'
                }`}>
                  {process.outcome}
                </p>
              </div>

              {/* Progress indicator */}
              {activeStep === index && (
                <div className="mt-4">
                  <div className="w-8 h-1 bg-purple-600 rounded mx-auto animate-pulse"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Process Flow Visualization */}
        <div className="mt-16 relative">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-4 overflow-hidden">
              {qualificationProcess.map((_, index) => (
                <React.Fragment key={index}>
                  <div
                    className={`w-4 h-4 rounded-full transition-all duration-500 ${
                      index <= activeStep
                        ? 'bg-purple-600 scale-125'
                        : 'bg-gray-300'
                    }`}
                  />
                  {index < qualificationProcess.length - 1 && (
                    <div
                      className={`w-12 h-1 transition-all duration-500 ${
                        index < activeStep
                          ? 'bg-purple-600'
                          : 'bg-gray-300'
                      }`}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
          
          {/* Current step description */}
          <div className="text-center mt-8 p-6 bg-white rounded-xl shadow-lg max-w-2xl mx-auto">
            <h4 className="text-lg font-semibold text-purple-600 mb-2">
              {getText('common.currentStep', 'Current Step')}: {qualificationProcess[activeStep]?.title}
            </h4>
            <p className="text-gray-600">
              {qualificationProcess[activeStep]?.description}
            </p>
          </div>
        </div>

        {/* Interactive Controls */}
        <div className="flex justify-center mt-12 space-x-4">
          <button
            onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
            disabled={activeStep === 0}
            className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {getText('common.previous', 'Previous')}
          </button>
          
          <button
            onClick={() => setActiveStep((prev) => Math.min(qualificationProcess.length - 1, prev + 1))}
            disabled={activeStep === qualificationProcess.length - 1}
            className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {getText('common.next', 'Next')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default LeadGenerationInteractive;
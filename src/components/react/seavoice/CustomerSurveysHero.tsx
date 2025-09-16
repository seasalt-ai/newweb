import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import { type SupportedLanguage } from '../../../i18n/helpers';

interface CustomerSurveysHeroProps {
  lang: SupportedLanguage;
  translations?: any;
}

const CustomerSurveysHero: React.FC<CustomerSurveysHeroProps> = ({ lang, translations }) => {
  // 統一的翻譯獲取函數
  const getText = (key: string, fallback: string = key): string => {
    if (translations) {
      // SSR 模式：從 props 獲取翻譯
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
    
    // 如果沒有 translations，回退到預設值
    return fallback;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center"
    >
      <div className="flex items-center justify-center mb-6">
        <MessageSquare className="w-16 h-16 text-cyan-600" />
      </div>
      <h1 className="text-5xl font-bold text-gray-900 mb-6">
        {getText('seavoice.pages.solutions.outbound.customerSurveys.hero.title', 'Customer Survey Automation')}
      </h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
        {getText('seavoice.pages.solutions.outbound.customerSurveys.hero.description', 'Gather valuable customer feedback through natural voice conversations. Conduct automated surveys that feel personal and engaging, achieving higher response rates and more detailed insights than traditional methods.')}
      </p>
      <motion.a
        href={`/${lang}/pricing`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-block bg-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-700 transition-colors"
      >
        {getText('seavoice.pages.solutions.outbound.customerSurveys.hero.cta', 'Start Survey Campaign')}
      </motion.a>
    </motion.div>
  );
};

export default CustomerSurveysHero;
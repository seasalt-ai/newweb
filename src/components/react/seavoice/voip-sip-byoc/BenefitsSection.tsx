import React from 'react';
import { motion } from 'framer-motion';
import type { SupportedLanguage } from '../../../../i18n/helpers';

interface BenefitsSectionProps {
  lang: SupportedLanguage;
  translations?: any;
}

const BenefitsSection: React.FC<BenefitsSectionProps> = ({ lang, translations }) => {
  // 統一的翻譯獲取函數
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
    
    return fallback;
  };

  const benefits = [
    {
      title: getText('seavoice.platform.voipSipByoc.benefits.costSavings.title', 'Cost Savings'),
      description: getText('seavoice.platform.voipSipByoc.benefits.costSavings.description', 'Reduce communication costs by up to 60% with optimized routing and carrier selection.'),
      metric: getText('seavoice.platform.voipSipByoc.benefits.costSavings.metric', '60%')
    },
    {
      title: getText('seavoice.platform.voipSipByoc.benefits.reliability.title', 'Reliability'),
      description: getText('seavoice.platform.voipSipByoc.benefits.reliability.description', 'Enterprise-grade uptime with automatic failover and redundant infrastructure.'),
      metric: getText('seavoice.platform.voipSipByoc.benefits.reliability.metric', '99.99%')
    },
    {
      title: getText('seavoice.platform.voipSipByoc.benefits.scalability.title', 'Scalability'),
      description: getText('seavoice.platform.voipSipByoc.benefits.scalability.description', 'Handle thousands of concurrent calls with elastic scaling capabilities.'),
      metric: getText('seavoice.platform.voipSipByoc.benefits.scalability.metric', '10,000+')
    },
    {
      title: getText('seavoice.platform.voipSipByoc.benefits.globalReach.title', 'Global Reach'),
      description: getText('seavoice.platform.voipSipByoc.benefits.globalReach.description', 'Connect to customers worldwide with local presence in major markets.'),
      metric: getText('seavoice.platform.voipSipByoc.benefits.globalReach.metric', '200+')
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {getText('seavoice.platform.voipSipByoc.benefits.title', 'Enterprise Benefits')}
          </h2>
          <p className="text-xl text-gray-600">
            {getText('seavoice.platform.voipSipByoc.benefits.subtitle', 'Why leading enterprises choose our voice connectivity solutions')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg text-center"
            >
              <div className="text-4xl font-bold text-blue-600 mb-4">{benefit.metric}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
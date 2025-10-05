import React from 'react';
import { motion } from 'framer-motion';
import { Server, Network, Globe } from 'lucide-react';
import type { SupportedLanguage } from '../../../../i18n/helpers';

interface HowItWorksSectionProps {
  lang: SupportedLanguage;
  translations?: any;
}

const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ lang, translations }) => {
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
            {getText('seavoice.platform.voipSipByoc.howItWorks.title', 'How It Works')}
          </h2>
          <p className="text-xl text-gray-600">
            {getText('seavoice.platform.voipSipByoc.howItWorks.subtitle', 'Simple integration with your existing infrastructure')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Server className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {getText('seavoice.platform.voipSipByoc.howItWorks.yourInfrastructure.title', 'Your Infrastructure')}
              </h3>
              <p className="text-gray-600">
                {getText('seavoice.platform.voipSipByoc.howItWorks.yourInfrastructure.description', 'Existing PBX, VoIP system, or carrier')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Network className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {getText('seavoice.platform.voipSipByoc.howItWorks.seavoicePlatform.title', 'SeaVoice Platform')}
              </h3>
              <p className="text-gray-600">
                {getText('seavoice.platform.voipSipByoc.howItWorks.seavoicePlatform.description', 'AI voice processing and routing')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {getText('seavoice.platform.voipSipByoc.howItWorks.globalNetwork.title', 'Global Network')}
              </h3>
              <p className="text-gray-600">
                {getText('seavoice.platform.voipSipByoc.howItWorks.globalNetwork.description', 'Worldwide carrier connections')}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
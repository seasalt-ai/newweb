import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Settings } from 'lucide-react';
import type { SupportedLanguage } from '../../../../i18n/helpers';

interface TechnicalSpecsSectionProps {
  lang: SupportedLanguage;
  translations?: any;
}

const TechnicalSpecsSection: React.FC<TechnicalSpecsSectionProps> = ({ lang, translations }) => {
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

  const technicalSpecs = [
    { 
      feature: getText('seavoice.platform.voipSipByoc.technicalSpecs.supportedProtocols.feature', 'Supported Protocols'), 
      value: getText('seavoice.platform.voipSipByoc.technicalSpecs.supportedProtocols.value', 'SIP 2.0, RTP, SRTP') 
    },
    { 
      feature: getText('seavoice.platform.voipSipByoc.technicalSpecs.audioCodecs.feature', 'Audio Codecs'), 
      value: getText('seavoice.platform.voipSipByoc.technicalSpecs.audioCodecs.value', 'G.711, G.722, G.729, Opus') 
    },
    { 
      feature: getText('seavoice.platform.voipSipByoc.technicalSpecs.encryption.feature', 'Encryption'), 
      value: getText('seavoice.platform.voipSipByoc.technicalSpecs.encryption.value', 'TLS 1.3, SRTP, AES-256') 
    },
    { 
      feature: getText('seavoice.platform.voipSipByoc.technicalSpecs.networkRequirements.feature', 'Network Requirements'), 
      value: getText('seavoice.platform.voipSipByoc.technicalSpecs.networkRequirements.value', '100 kbps per concurrent call') 
    },
    { 
      feature: getText('seavoice.platform.voipSipByoc.technicalSpecs.latency.feature', 'Latency'), 
      value: getText('seavoice.platform.voipSipByoc.technicalSpecs.latency.value', '< 150ms end-to-end') 
    },
    { 
      feature: getText('seavoice.platform.voipSipByoc.technicalSpecs.jitterBuffer.feature', 'Jitter Buffer'), 
      value: getText('seavoice.platform.voipSipByoc.technicalSpecs.jitterBuffer.value', 'Adaptive, 20-200ms') 
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {getText('seavoice.platform.voipSipByoc.technicalExcellence.title', 'Technical Excellence')}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {getText('seavoice.platform.voipSipByoc.technicalExcellence.subtitle', 'Built on industry-standard protocols with enterprise-grade security and performance. Our platform supports all major codecs and provides real-time quality monitoring.')}
            </p>
            <div className="space-y-6">
              <div className="flex items-center">
                <Shield className="w-6 h-6 text-blue-600 mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {getText('seavoice.platform.voipSipByoc.technicalExcellence.endToEndEncryption.title', 'End-to-End Encryption')}
                  </h3>
                  <p className="text-gray-600">
                    {getText('seavoice.platform.voipSipByoc.technicalExcellence.endToEndEncryption.description', 'TLS 1.3 and SRTP for secure voice transmission')}
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <Zap className="w-6 h-6 text-blue-600 mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {getText('seavoice.platform.voipSipByoc.technicalExcellence.lowLatency.title', 'Low Latency')}
                  </h3>
                  <p className="text-gray-600">
                    {getText('seavoice.platform.voipSipByoc.technicalExcellence.lowLatency.description', 'Sub-150ms latency for crystal clear conversations')}
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <Settings className="w-6 h-6 text-blue-600 mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {getText('seavoice.platform.voipSipByoc.technicalExcellence.advancedConfiguration.title', 'Advanced Configuration')}
                  </h3>
                  <p className="text-gray-600">
                    {getText('seavoice.platform.voipSipByoc.technicalExcellence.advancedConfiguration.description', 'Granular control over routing and quality settings')}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {getText('seavoice.platform.voipSipByoc.technicalSpecs.title', 'Technical Specifications')}
            </h3>
            <div className="space-y-4">
              {technicalSpecs.map((spec, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                  <span className="text-gray-600 font-medium">{spec.feature}</span>
                  <span className="font-semibold text-gray-900">{spec.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecsSection;
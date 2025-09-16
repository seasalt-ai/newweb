import React from 'react';
import { motion } from 'framer-motion';
import { Network, Server, Globe } from 'lucide-react';
import type { SupportedLanguage } from '../../../../i18n/helpers';

interface ConnectionTypesSectionProps {
  lang: SupportedLanguage;
  translations?: any;
}

const ConnectionTypesSection: React.FC<ConnectionTypesSectionProps> = ({ lang, translations }) => {
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

  const connectionTypes = [
    {
      icon: Network,
      title: getText('seavoice.platform.voipSipByoc.connectionTypes.voip.title', 'VoIP Integration'),
      description: getText('seavoice.platform.voipSipByoc.connectionTypes.voip.description', 'Connect your existing VoIP infrastructure seamlessly with our AI voice platform.'),
      features: [
        getText('seavoice.platform.voipSipByoc.connectionTypes.voip.features.sipTrunk', 'SIP trunk compatibility'),
        getText('seavoice.platform.voipSipByoc.connectionTypes.voip.features.codecOptimization', 'Codec optimization'),
        getText('seavoice.platform.voipSipByoc.connectionTypes.voip.features.qos', 'Quality of Service (QoS)'),
        getText('seavoice.platform.voipSipByoc.connectionTypes.voip.features.bandwidthManagement', 'Bandwidth management')
      ],
      pricing: getText('seavoice.platform.voipSipByoc.connectionTypes.voip.pricing', 'Starting at $0.08/minute')
    },
    {
      icon: Server,
      title: getText('seavoice.platform.voipSipByoc.connectionTypes.sip.title', 'SIP Trunking'),
      description: getText('seavoice.platform.voipSipByoc.connectionTypes.sip.description', 'Direct SIP connectivity for maximum control and customization of your voice traffic.'),
      features: [
        getText('seavoice.platform.voipSipByoc.connectionTypes.sip.features.directEndpoints', 'Direct SIP endpoints'),
        getText('seavoice.platform.voipSipByoc.connectionTypes.sip.features.customRouting', 'Custom routing rules'),
        getText('seavoice.platform.voipSipByoc.connectionTypes.sip.features.failoverProtection', 'Failover protection'),
        getText('seavoice.platform.voipSipByoc.connectionTypes.sip.features.realTimeMonitoring', 'Real-time monitoring')
      ],
      pricing: getText('seavoice.platform.voipSipByoc.connectionTypes.sip.pricing', 'Starting at $0.06/minute')
    },
    {
      icon: Globe,
      title: getText('seavoice.platform.voipSipByoc.connectionTypes.byoc.title', 'Bring Your Own Carrier (BYOC)'),
      description: getText('seavoice.platform.voipSipByoc.connectionTypes.byoc.description', 'Use your preferred carriers while leveraging our AI voice capabilities.'),
      features: [
        getText('seavoice.platform.voipSipByoc.connectionTypes.byoc.features.carrierIndependence', 'Carrier independence'),
        getText('seavoice.platform.voipSipByoc.connectionTypes.byoc.features.costOptimization', 'Cost optimization'),
        getText('seavoice.platform.voipSipByoc.connectionTypes.byoc.features.globalReach', 'Global reach'),
        getText('seavoice.platform.voipSipByoc.connectionTypes.byoc.features.vendorFlexibility', 'Vendor flexibility')
      ],
      pricing: getText('seavoice.platform.voipSipByoc.connectionTypes.byoc.pricing', 'Platform fee + carrier rates')
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {getText('seavoice.platform.voipSipByoc.connectionTypes.title', 'Flexible Connectivity Options')}
          </h2>
          <p className="text-xl text-gray-600">
            {getText('seavoice.platform.voipSipByoc.connectionTypes.subtitle', 'Choose the connection method that best fits your infrastructure and requirements')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {connectionTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center mb-6">
                <type.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{type.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{type.description}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">
                  {getText('seavoice.platform.voipSipByoc.connectionTypes.keyFeatures', 'Key Features:')}
                </h4>
                <ul className="space-y-2">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700 text-sm">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="text-sm font-semibold text-blue-800">{type.pricing}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConnectionTypesSection;
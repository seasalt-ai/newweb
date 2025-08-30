import { useTranslation } from 'react-i18next';
import { MEETING_URL, getMeetingUrl } from '../../../constants/urls';
import { motion } from 'framer-motion';
import { Network, Server, Shield, Zap, Globe, Settings } from 'lucide-react';
const VoipSipByocPage = () => {
  const { t, i18n } = useTranslation();
  
  const connectionTypes = [
    {
      icon: Network,
      title: t('voipSipByoc.connectionTypes.voip.title'),
      description: t('voipSipByoc.connectionTypes.voip.description'),
      features: [
        t('voipSipByoc.connectionTypes.voip.features.sipTrunk'),
        t('voipSipByoc.connectionTypes.voip.features.codecOptimization'),
        t('voipSipByoc.connectionTypes.voip.features.qos'),
        t('voipSipByoc.connectionTypes.voip.features.bandwidthManagement')
      ],
      pricing: t('voipSipByoc.connectionTypes.voip.pricing')
    },
    {
      icon: Server,
      title: t('voipSipByoc.connectionTypes.sip.title'),
      description: t('voipSipByoc.connectionTypes.sip.description'),
      features: [
        t('voipSipByoc.connectionTypes.sip.features.directEndpoints'),
        t('voipSipByoc.connectionTypes.sip.features.customRouting'),
        t('voipSipByoc.connectionTypes.sip.features.failoverProtection'),
        t('voipSipByoc.connectionTypes.sip.features.realTimeMonitoring')
      ],
      pricing: t('voipSipByoc.connectionTypes.sip.pricing')
    },
    {
      icon: Globe,
      title: t('voipSipByoc.connectionTypes.byoc.title'),
      description: t('voipSipByoc.connectionTypes.byoc.description'),
      features: [
        t('voipSipByoc.connectionTypes.byoc.features.carrierIndependence'),
        t('voipSipByoc.connectionTypes.byoc.features.costOptimization'),
        t('voipSipByoc.connectionTypes.byoc.features.globalReach'),
        t('voipSipByoc.connectionTypes.byoc.features.vendorFlexibility')
      ],
      pricing: t('voipSipByoc.connectionTypes.byoc.pricing')
    }
  ];

  const benefits = [
    {
      title: t('voipSipByoc.benefits.costSavings.title'),
      description: t('voipSipByoc.benefits.costSavings.description'),
      metric: t('voipSipByoc.benefits.costSavings.metric')
    },
    {
      title: t('voipSipByoc.benefits.reliability.title'),
      description: t('voipSipByoc.benefits.reliability.description'),
      metric: t('voipSipByoc.benefits.reliability.metric')
    },
    {
      title: t('voipSipByoc.benefits.scalability.title'),
      description: t('voipSipByoc.benefits.scalability.description'),
      metric: t('voipSipByoc.benefits.scalability.metric')
    },
    {
      title: t('voipSipByoc.benefits.globalReach.title'),
      description: t('voipSipByoc.benefits.globalReach.description'),
      metric: t('voipSipByoc.benefits.globalReach.metric')
    }
  ];

  const technicalSpecs = [
    { feature: t('voipSipByoc.technicalSpecs.supportedProtocols.feature'), value: t('voipSipByoc.technicalSpecs.supportedProtocols.value') },
    { feature: t('voipSipByoc.technicalSpecs.audioCodecs.feature'), value: t('voipSipByoc.technicalSpecs.audioCodecs.value') },
    { feature: t('voipSipByoc.technicalSpecs.encryption.feature'), value: t('voipSipByoc.technicalSpecs.encryption.value') },
    { feature: t('voipSipByoc.technicalSpecs.networkRequirements.feature'), value: t('voipSipByoc.technicalSpecs.networkRequirements.value') },
    { feature: t('voipSipByoc.technicalSpecs.latency.feature'), value: t('voipSipByoc.technicalSpecs.latency.value') },
    { feature: t('voipSipByoc.technicalSpecs.jitterBuffer.feature'), value: t('voipSipByoc.technicalSpecs.jitterBuffer.value') }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <Network className="w-16 h-16 text-blue-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              {t('voipSipByoc.hero.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {t('voipSipByoc.hero.subtitle')}
            </p>
            <a
              href={getMeetingUrl(i18n.language)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                {t('voipSipByoc.hero.cta')}
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Connection Types */}
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
              {t('voipSipByoc.connectionTypes.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('voipSipByoc.connectionTypes.subtitle')}
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
                  <h4 className="font-semibold text-gray-900 mb-3">{t('voipSipByoc.connectionTypes.keyFeatures')}</h4>
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

      {/* Benefits Grid */}
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
              {t('voipSipByoc.benefits.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('voipSipByoc.benefits.subtitle')}
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

      {/* Technical Specifications */}
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
                {t('voipSipByoc.technicalExcellence.title')}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {t('voipSipByoc.technicalExcellence.subtitle')}
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Shield className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{t('voipSipByoc.technicalExcellence.endToEndEncryption.title')}</h3>
                    <p className="text-gray-600">{t('voipSipByoc.technicalExcellence.endToEndEncryption.description')}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Zap className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{t('voipSipByoc.technicalExcellence.lowLatency.title')}</h3>
                    <p className="text-gray-600">{t('voipSipByoc.technicalExcellence.lowLatency.description')}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Settings className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{t('voipSipByoc.technicalExcellence.advancedConfiguration.title')}</h3>
                    <p className="text-gray-600">{t('voipSipByoc.technicalExcellence.advancedConfiguration.description')}</p>
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('voipSipByoc.technicalSpecs.title')}</h3>
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

      {/* Architecture Diagram */}
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
              {t('voipSipByoc.howItWorks.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('voipSipByoc.howItWorks.subtitle')}
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
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('voipSipByoc.howItWorks.yourInfrastructure.title')}</h3>
                <p className="text-gray-600">{t('voipSipByoc.howItWorks.yourInfrastructure.description')}</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Network className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('voipSipByoc.howItWorks.seavoicePlatform.title')}</h3>
                <p className="text-gray-600">{t('voipSipByoc.howItWorks.seavoicePlatform.description')}</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('voipSipByoc.howItWorks.globalNetwork.title')}</h3>
                <p className="text-gray-600">{t('voipSipByoc.howItWorks.globalNetwork.description')}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">{t('voipSipByoc.cta.title')}</h2>
            <p className="text-xl mb-8 opacity-90">
              {t('voipSipByoc.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={getMeetingUrl(i18n.language)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  {t('voipSipByoc.cta.scheduleConsultation')}
                </motion.button>
              </a>
              <a
                href="https://chat.seasalt.ai/gpt/signup"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  {t('voipSipByoc.cta.signUpForFree')}
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default VoipSipByocPage;
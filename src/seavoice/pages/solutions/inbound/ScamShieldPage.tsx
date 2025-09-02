
import { motion } from 'framer-motion';
import { Shield, AlertTriangle, Phone, BarChart3, CheckCircle, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SEOHelmet from '../../../../components/SEOHelmet';
import { getSEOData, getCanonicalUrl } from '../../../../utils/seo';

const ScamShieldPage = () => {
  const { t, i18n } = useTranslation();
  
  // Generate SEO data using standardized utility
  const seoData = getSEOData(t, 'seavoice.solutions.inbound.scamShield.seo', {
    canonicalUrl: getCanonicalUrl(i18n.language, '/seavoice/solutions/inbound/scam-shield')
  });
  
  const features = [
    {
      icon: Shield,
      title: t('seavoice.solutions.inbound.scamShield.features.realTimeDetection.title'),
      description: t('seavoice.solutions.inbound.scamShield.features.realTimeDetection.description'),
      benefits: [
        t('seavoice.solutions.inbound.scamShield.features.realTimeDetection.benefit1'),
        t('seavoice.solutions.inbound.scamShield.features.realTimeDetection.benefit2'),
        t('seavoice.solutions.inbound.scamShield.features.realTimeDetection.benefit3')
      ]
    },
    {
      icon: AlertTriangle,
      title: t('seavoice.solutions.inbound.scamShield.features.threatIntelligence.title'),
      description: t('seavoice.solutions.inbound.scamShield.features.threatIntelligence.description'),
      benefits: [
        t('seavoice.solutions.inbound.scamShield.features.threatIntelligence.benefit1'),
        t('seavoice.solutions.inbound.scamShield.features.threatIntelligence.benefit2'),
        t('seavoice.solutions.inbound.scamShield.features.threatIntelligence.benefit3')
      ]
    },
    {
      icon: Phone,
      title: t('seavoice.solutions.inbound.scamShield.features.customerProtection.title'),
      description: t('seavoice.solutions.inbound.scamShield.features.customerProtection.description'),
      benefits: [
        t('seavoice.solutions.inbound.scamShield.features.customerProtection.benefit1'),
        t('seavoice.solutions.inbound.scamShield.features.customerProtection.benefit2'),
        t('seavoice.solutions.inbound.scamShield.features.customerProtection.benefit3')
      ]
    }
  ];

  const scamTypes = [
    {
      type: t('seavoice.solutions.inbound.scamShield.scamTypes.phishing.type'),
      description: t('seavoice.solutions.inbound.scamShield.scamTypes.phishing.description'),
      detection: t('seavoice.solutions.inbound.scamShield.scamTypes.phishing.detection'),
      action: t('seavoice.solutions.inbound.scamShield.scamTypes.phishing.action')
    },
    {
      type: t('seavoice.solutions.inbound.scamShield.scamTypes.techSupport.type'),
      description: t('seavoice.solutions.inbound.scamShield.scamTypes.techSupport.description'),
      detection: t('seavoice.solutions.inbound.scamShield.scamTypes.techSupport.detection'),
      action: t('seavoice.solutions.inbound.scamShield.scamTypes.techSupport.action')
    },
    {
      type: t('seavoice.solutions.inbound.scamShield.scamTypes.financialFraud.type'),
      description: t('seavoice.solutions.inbound.scamShield.scamTypes.financialFraud.description'),
      detection: t('seavoice.solutions.inbound.scamShield.scamTypes.financialFraud.detection'),
      action: t('seavoice.solutions.inbound.scamShield.scamTypes.financialFraud.action')
    },
    {
      type: t('seavoice.solutions.inbound.scamShield.scamTypes.romance.type'),
      description: t('seavoice.solutions.inbound.scamShield.scamTypes.romance.description'),
      detection: t('seavoice.solutions.inbound.scamShield.scamTypes.romance.detection'),
      action: t('seavoice.solutions.inbound.scamShield.scamTypes.romance.action')
    }
  ];

  const benefits = [
    { 
      metric: t('seavoice.solutions.inbound.scamShield.benefits.accuracy.metric'), 
      description: t('seavoice.solutions.inbound.scamShield.benefits.accuracy.description') 
    },
    { 
      metric: t('seavoice.solutions.inbound.scamShield.benefits.reduction.metric'), 
      description: t('seavoice.solutions.inbound.scamShield.benefits.reduction.description') 
    },
    { 
      metric: t('seavoice.solutions.inbound.scamShield.benefits.coverage.metric'), 
      description: t('seavoice.solutions.inbound.scamShield.benefits.coverage.description') 
    },
    { 
      metric: t('seavoice.solutions.inbound.scamShield.benefits.preservation.metric'), 
      description: t('seavoice.solutions.inbound.scamShield.benefits.preservation.description') 
    }
  ];

  const protectionLayers = [
    t('seavoice.solutions.inbound.scamShield.protection.layer1'),
    t('seavoice.solutions.inbound.scamShield.protection.layer2'),
    t('seavoice.solutions.inbound.scamShield.protection.layer3'),
    t('seavoice.solutions.inbound.scamShield.protection.layer4'),
    t('seavoice.solutions.inbound.scamShield.protection.layer5'),
    t('seavoice.solutions.inbound.scamShield.protection.layer6')
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHelmet seoData={seoData} />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 via-white to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <Shield className="w-16 h-16 text-red-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              {t('seavoice.solutions.inbound.scamShield.hero.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {t('seavoice.solutions.inbound.scamShield.hero.subtitle')}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors"
            >
              {t('seavoice.solutions.inbound.scamShield.hero.cta')}
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
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
              {t('seavoice.solutions.inbound.scamShield.features.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('seavoice.solutions.inbound.scamShield.features.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                <div className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scam Types Section */}
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
              {t('seavoice.solutions.inbound.scamShield.scamTypes.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('seavoice.solutions.inbound.scamShield.scamTypes.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {scamTypes.map((scam, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-200"
              >
                <div className="flex items-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">{scam.type}</h3>
                </div>
                <p className="text-gray-600 mb-4">{scam.description}</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">{t('seavoice.solutions.inbound.scamShield.scamTypes.detectionMethodLabel')}:</h4>
                    <p className="text-gray-600 text-sm">{scam.detection}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">{t('seavoice.solutions.inbound.scamShield.scamTypes.protectionActionLabel')}:</h4>
                    <p className="text-gray-600 text-sm">{scam.action}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Protection Layers */}
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
                {t('seavoice.solutions.inbound.scamShield.protectionSystem.title')}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {t('seavoice.solutions.inbound.scamShield.protectionSystem.subtitle')}
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Zap className="w-6 h-6 text-red-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{t('seavoice.solutions.inbound.scamShield.protectionSystem.realTimeAnalysis.title')}</h3>
                    <p className="text-gray-600">{t('seavoice.solutions.inbound.scamShield.protectionSystem.realTimeAnalysis.description')}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <BarChart3 className="w-6 h-6 text-red-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{t('seavoice.solutions.inbound.scamShield.protectionSystem.continuousLearning.title')}</h3>
                    <p className="text-gray-600">{t('seavoice.solutions.inbound.scamShield.protectionSystem.continuousLearning.description')}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Shield className="w-6 h-6 text-red-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{t('seavoice.solutions.inbound.scamShield.protectionSystem.zeroFalsePositives.title')}</h3>
                    <p className="text-gray-600">{t('seavoice.solutions.inbound.scamShield.protectionSystem.zeroFalsePositives.description')}</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('seavoice.solutions.inbound.scamShield.protection.title')}</h3>
              <div className="grid grid-cols-1 gap-3">
                {protectionLayers.map((layer, index) => (
                  <div key={index} className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700 font-medium">{layer}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Metrics */}
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
              {t('seavoice.solutions.inbound.scamShield.results.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('seavoice.solutions.inbound.scamShield.results.subtitle')}
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
                className="bg-white rounded-xl p-8 shadow-lg text-center border border-gray-200"
              >
                <div className="text-4xl font-bold text-red-600 mb-4">{benefit.metric}</div>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">{t('seavoice.solutions.inbound.scamShield.cta.title')}</h2>
            <p className="text-xl mb-8 opacity-90">
              {t('seavoice.solutions.inbound.scamShield.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                {t('seavoice.solutions.inbound.scamShield.cta.primaryButton')}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
              >
                {t('seavoice.solutions.inbound.scamShield.cta.secondaryButton')}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ScamShieldPage;
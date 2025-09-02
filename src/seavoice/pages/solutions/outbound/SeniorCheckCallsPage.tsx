
import { motion } from 'framer-motion';
import { Heart, Shield, Clock, Phone, CheckCircle, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SEOHelmet from '../../../../components/SEOHelmet';
import { getSEOData, getCanonicalUrl } from '../../../../utils/seo';

const SeniorCheckCallsPage = () => {
  const { t, i18n } = useTranslation();
  
  // Generate SEO data using standardized utility
  const seoData = getSEOData(t, 'seavoice.pages.solutions.outbound.seniorCheckCalls', {
    canonicalUrl: getCanonicalUrl(i18n.language, '/seavoice/solutions/outbound/senior-check-calls')
  });
  const features = [
    {
      icon: Heart,
      title: t('seavoice.pages.solutions.outbound.seniorCheckCalls.features.wellnessMonitoring.title'),
      description: t('seavoice.pages.solutions.outbound.seniorCheckCalls.features.wellnessMonitoring.description'),
      benefits: [
        t('seavoice.pages.solutions.outbound.seniorCheckCalls.features.wellnessMonitoring.benefit1'),
        t('seavoice.pages.solutions.outbound.seniorCheckCalls.features.wellnessMonitoring.benefit2'),
        t('seavoice.pages.solutions.outbound.seniorCheckCalls.features.wellnessMonitoring.benefit3')
      ]
    },
    {
      icon: Shield,
      title: t('seavoice.pages.solutions.outbound.seniorCheckCalls.features.emergencyDetection.title'),
      description: t('seavoice.pages.solutions.outbound.seniorCheckCalls.features.emergencyDetection.description'),
      benefits: [
        t('seavoice.pages.solutions.outbound.seniorCheckCalls.features.emergencyDetection.benefit1'),
        t('seavoice.pages.solutions.outbound.seniorCheckCalls.features.emergencyDetection.benefit2'),
        t('seavoice.pages.solutions.outbound.seniorCheckCalls.features.emergencyDetection.benefit3')
      ]
    },
    {
      icon: Clock,
      title: t('seavoice.pages.solutions.outbound.seniorCheckCalls.features.flexibleScheduling.title'),
      description: t('seavoice.pages.solutions.outbound.seniorCheckCalls.features.flexibleScheduling.description'),
      benefits: [
        t('seavoice.pages.solutions.outbound.seniorCheckCalls.features.flexibleScheduling.benefit1'),
        t('seavoice.pages.solutions.outbound.seniorCheckCalls.features.flexibleScheduling.benefit2'),
        t('seavoice.pages.solutions.outbound.seniorCheckCalls.features.flexibleScheduling.benefit3')
      ]
    }
  ];

  const checkTypes = [
    {
      type: t('seavoice.pages.solutions.outbound.seniorCheckCalls.checkTypes.dailyWellness.type'),
      description: t('seavoice.pages.solutions.outbound.seniorCheckCalls.checkTypes.dailyWellness.description'),
      frequency: t('seavoice.pages.solutions.outbound.seniorCheckCalls.checkTypes.dailyWellness.frequency'),
      duration: t('seavoice.pages.solutions.outbound.seniorCheckCalls.checkTypes.dailyWellness.duration'),
      focus: [
        t('seavoice.pages.solutions.outbound.seniorCheckCalls.checkTypes.dailyWellness.focus1'),
        t('seavoice.pages.solutions.outbound.seniorCheckCalls.checkTypes.dailyWellness.focus2'),
        t('seavoice.pages.solutions.outbound.seniorCheckCalls.checkTypes.dailyWellness.focus3')
      ]
    },
    {
      type: t('seavoice.pages.solutions.outbound.seniorCheckCalls.checkTypes.weeklyHealth.type'),
      description: t('seavoice.pages.solutions.outbound.seniorCheckCalls.checkTypes.weeklyHealth.description'),
      frequency: t('seavoice.pages.solutions.outbound.seniorCheckCalls.checkTypes.weeklyHealth.frequency'),
      duration: t('seavoice.pages.solutions.outbound.seniorCheckCalls.checkTypes.weeklyHealth.duration'),
      focus: [
        t('seavoice.pages.solutions.outbound.seniorCheckCalls.checkTypes.weeklyHealth.focus1'),
        t('seavoice.pages.solutions.outbound.seniorCheckCalls.checkTypes.weeklyHealth.focus2'),
        t('seavoice.pages.solutions.outbound.seniorCheckCalls.checkTypes.weeklyHealth.focus3')
      ]
    },
    {
      type: t('seavoice.pages.solutions.outbound.seniorCheckCalls.checkTypes.emergencyResponse.type'),
      description: t('seavoice.pages.solutions.outbound.seniorCheckCalls.checkTypes.emergencyResponse.description'),
      frequency: t('seavoice.pages.solutions.outbound.seniorCheckCalls.checkTypes.emergencyResponse.frequency'),
      duration: t('seavoice.pages.solutions.outbound.seniorCheckCalls.checkTypes.emergencyResponse.duration'),
      focus: [
        t('seavoice.pages.solutions.outbound.seniorCheckCalls.checkTypes.emergencyResponse.focus1'),
        t('seavoice.pages.solutions.outbound.seniorCheckCalls.checkTypes.emergencyResponse.focus2'),
        t('seavoice.pages.solutions.outbound.seniorCheckCalls.checkTypes.emergencyResponse.focus3')
      ]
    },
    {
      type: t('seavoice.pages.solutions.outbound.seniorCheckCalls.checkTypes.socialConnection.type'),
      description: t('seavoice.pages.solutions.outbound.seniorCheckCalls.checkTypes.socialConnection.description'),
      frequency: t('seavoice.pages.solutions.outbound.seniorCheckCalls.checkTypes.socialConnection.frequency'),
      duration: t('seavoice.pages.solutions.outbound.seniorCheckCalls.checkTypes.socialConnection.duration'),
      focus: [
        t('seavoice.pages.solutions.outbound.seniorCheckCalls.checkTypes.socialConnection.focus1'),
        t('seavoice.pages.solutions.outbound.seniorCheckCalls.checkTypes.socialConnection.focus2'),
        t('seavoice.pages.solutions.outbound.seniorCheckCalls.checkTypes.socialConnection.focus3')
      ]
    }
  ];

  const benefits = [
    { 
      metric: t('seavoice.pages.solutions.outbound.seniorCheckCalls.benefits.seniorSatisfaction.metric'), 
      description: t('seavoice.pages.solutions.outbound.seniorCheckCalls.benefits.seniorSatisfaction.description')
    },
    { 
      metric: t('seavoice.pages.solutions.outbound.seniorCheckCalls.benefits.emergencyReduction.metric'), 
      description: t('seavoice.pages.solutions.outbound.seniorCheckCalls.benefits.emergencyReduction.description')
    },
    { 
      metric: t('seavoice.pages.solutions.outbound.seniorCheckCalls.benefits.availability.metric'), 
      description: t('seavoice.pages.solutions.outbound.seniorCheckCalls.benefits.availability.description')
    },
    { 
      metric: t('seavoice.pages.solutions.outbound.seniorCheckCalls.benefits.familyPeace.metric'), 
      description: t('seavoice.pages.solutions.outbound.seniorCheckCalls.benefits.familyPeace.description')
    }
  ];

  const safetyProtocols = [
    t('seavoice.pages.solutions.outbound.seniorCheckCalls.safetyProtocols.protocols.missedCallEscalation'),
    t('seavoice.pages.solutions.outbound.seniorCheckCalls.safetyProtocols.protocols.emergencyKeyword'),
    t('seavoice.pages.solutions.outbound.seniorCheckCalls.safetyProtocols.protocols.familyNotifications'),
    t('seavoice.pages.solutions.outbound.seniorCheckCalls.safetyProtocols.protocols.healthcareProvider'),
    t('seavoice.pages.solutions.outbound.seniorCheckCalls.safetyProtocols.protocols.emergencyServices'),
    t('seavoice.pages.solutions.outbound.seniorCheckCalls.safetyProtocols.protocols.medicalAlert')
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHelmet seoData={seoData} />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <Heart className="w-16 h-16 text-blue-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              {t('seavoice.pages.solutions.outbound.seniorCheckCalls.hero.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {t('seavoice.pages.solutions.outbound.seniorCheckCalls.hero.description')}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              {t('seavoice.pages.solutions.outbound.seniorCheckCalls.hero.button')}
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
              {t('seavoice.pages.solutions.outbound.seniorCheckCalls.features.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('seavoice.pages.solutions.outbound.seniorCheckCalls.features.subtitle')}
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
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-6">
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

      {/* Check Types */}
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
              {t('seavoice.pages.solutions.outbound.seniorCheckCalls.checkTypes.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('seavoice.pages.solutions.outbound.seniorCheckCalls.checkTypes.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {checkTypes.map((check, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{check.type}</h3>
                <p className="text-gray-600 mb-6">{check.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">{t('seavoice.pages.solutions.outbound.seniorCheckCalls.checkTypes.labels.frequency')}</h4>
                    <p className="text-gray-600 text-sm">{check.frequency}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">{t('seavoice.pages.solutions.outbound.seniorCheckCalls.checkTypes.labels.duration')}</h4>
                    <p className="text-gray-600 text-sm">{check.duration}</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-3">{t('seavoice.pages.solutions.outbound.seniorCheckCalls.checkTypes.labels.focusAreas')}</h4>
                  <div className="space-y-1">
                    {check.focus.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Protocols */}
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
                {t('seavoice.pages.solutions.outbound.seniorCheckCalls.safetyProtocols.title')}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {t('seavoice.pages.solutions.outbound.seniorCheckCalls.safetyProtocols.description')}
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{t('seavoice.pages.solutions.outbound.seniorCheckCalls.safetyProtocols.emergencyResponse.title')}</h3>
                    <p className="text-gray-600">{t('seavoice.pages.solutions.outbound.seniorCheckCalls.safetyProtocols.emergencyResponse.description')}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{t('seavoice.pages.solutions.outbound.seniorCheckCalls.safetyProtocols.familyCoordination.title')}</h3>
                    <p className="text-gray-600">{t('seavoice.pages.solutions.outbound.seniorCheckCalls.safetyProtocols.familyCoordination.description')}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Shield className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{t('seavoice.pages.solutions.outbound.seniorCheckCalls.safetyProtocols.healthcareIntegration.title')}</h3>
                    <p className="text-gray-600">{t('seavoice.pages.solutions.outbound.seniorCheckCalls.safetyProtocols.healthcareIntegration.description')}</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('seavoice.pages.solutions.outbound.seniorCheckCalls.safetyProtocols.featuresTitle')}</h3>
              <div className="grid grid-cols-1 gap-3">
                {safetyProtocols.map((protocol, index) => (
                  <div key={index} className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700 font-medium">{protocol}</span>
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
              {t('seavoice.pages.solutions.outbound.seniorCheckCalls.benefits.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('seavoice.pages.solutions.outbound.seniorCheckCalls.benefits.subtitle')}
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
                <div className="text-4xl font-bold text-blue-600 mb-4">{benefit.metric}</div>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">{t('seavoice.pages.solutions.outbound.seniorCheckCalls.cta.title')}</h2>
            <p className="text-xl mb-8 opacity-90">
              {t('seavoice.pages.solutions.outbound.seniorCheckCalls.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                {t('seavoice.pages.solutions.outbound.seniorCheckCalls.cta.startButton')}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                {t('seavoice.pages.solutions.outbound.seniorCheckCalls.cta.learnButton')}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SeniorCheckCallsPage;
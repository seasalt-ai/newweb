
import { motion } from 'framer-motion';
import { Heart, Shield, Clock, Users, CheckCircle, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import SEOHelmet from '../../../../components/SEOHelmet';
import { getSEOData, getCanonicalUrl } from '../../../../utils/seo';

const MentalHealthPage = () => {
  const { t, i18n } = useTranslation();
  
  // Generate SEO data using standardized utility
  const seoData = getSEOData(t, 'seavoice.pages.solutions.inbound.mentalHealth', {
    canonicalUrl: getCanonicalUrl(i18n.language, '/seavoice/solutions/inbound/mental-health')
  });
  
  const features = [
    {
      icon: Heart,
      title: t('seavoice.solutions.inbound.mentalHealth.features.empathetic.title'),
      description: t('seavoice.solutions.inbound.mentalHealth.features.empathetic.description'),
      benefits: [
        t('seavoice.solutions.inbound.mentalHealth.features.empathetic.benefits.activeListening'),
        t('seavoice.solutions.inbound.mentalHealth.features.empathetic.benefits.emotionalValidation'),
        t('seavoice.solutions.inbound.mentalHealth.features.empathetic.benefits.crisisRecognition')
      ]
    },
    {
      icon: Shield,
      title: t('seavoice.solutions.inbound.mentalHealth.features.safe.title'),
      description: t('seavoice.solutions.inbound.mentalHealth.features.safe.description'),
      benefits: [
        t('seavoice.solutions.inbound.mentalHealth.features.safe.benefits.hipaaCompliance'),
        t('seavoice.solutions.inbound.mentalHealth.features.safe.benefits.encryptedConversations'),
        t('seavoice.solutions.inbound.mentalHealth.features.safe.benefits.anonymousOptions')
      ]
    },
    {
      icon: Clock,
      title: t('seavoice.solutions.inbound.mentalHealth.features.availability.title'),
      description: t('seavoice.solutions.inbound.mentalHealth.features.availability.description'),
      benefits: [
        t('seavoice.solutions.inbound.mentalHealth.features.availability.benefits.roundTheClockAccess'),
        t('seavoice.solutions.inbound.mentalHealth.features.availability.benefits.immediateResponse'),
        t('seavoice.solutions.inbound.mentalHealth.features.availability.benefits.noWaitTimes')
      ]
    }
  ];

  const capabilities = [
    {
      title: t('seavoice.solutions.inbound.mentalHealth.capabilities.screening.title'),
      description: t('seavoice.solutions.inbound.mentalHealth.capabilities.screening.description'),
      outcomes: [
        t('seavoice.solutions.inbound.mentalHealth.capabilities.screening.outcomes.earlyIdentification'),
        t('seavoice.solutions.inbound.mentalHealth.capabilities.screening.outcomes.riskAssessment'),
        t('seavoice.solutions.inbound.mentalHealth.capabilities.screening.outcomes.appropriateReferrals')
      ]
    },
    {
      title: t('seavoice.solutions.inbound.mentalHealth.capabilities.crisis.title'),
      description: t('seavoice.solutions.inbound.mentalHealth.capabilities.crisis.description'),
      outcomes: [
        t('seavoice.solutions.inbound.mentalHealth.capabilities.crisis.outcomes.crisisDetection'),
        t('seavoice.solutions.inbound.mentalHealth.capabilities.crisis.outcomes.deEscalationTechniques'),
        t('seavoice.solutions.inbound.mentalHealth.capabilities.crisis.outcomes.emergencyProtocols')
      ]
    },
    {
      title: t('seavoice.solutions.inbound.mentalHealth.capabilities.navigation.title'),
      description: t('seavoice.solutions.inbound.mentalHealth.capabilities.navigation.description'),
      outcomes: [
        t('seavoice.solutions.inbound.mentalHealth.capabilities.navigation.outcomes.serviceMatching'),
        t('seavoice.solutions.inbound.mentalHealth.capabilities.navigation.outcomes.appointmentScheduling'),
        t('seavoice.solutions.inbound.mentalHealth.capabilities.navigation.outcomes.followUpSupport')
      ]
    },
    {
      title: t('seavoice.solutions.inbound.mentalHealth.capabilities.emotional.title'),
      description: t('seavoice.solutions.inbound.mentalHealth.capabilities.emotional.description'),
      outcomes: [
        t('seavoice.solutions.inbound.mentalHealth.capabilities.emotional.outcomes.reducedIsolation'),
        t('seavoice.solutions.inbound.mentalHealth.capabilities.emotional.outcomes.emotionalRelief'),
        t('seavoice.solutions.inbound.mentalHealth.capabilities.emotional.outcomes.copingStrategies')
      ]
    }
  ];

  const benefits = [
    { 
      metric: '24/7', 
      description: t('seavoice.solutions.inbound.mentalHealth.benefits.alwaysAvailableSupport') 
    },
    { 
      metric: '60%', 
      description: t('seavoice.solutions.inbound.mentalHealth.benefits.crisisEscalationReduction') 
    },
    { 
      metric: '85%', 
      description: t('seavoice.solutions.inbound.mentalHealth.benefits.userSatisfactionRate') 
    },
    { 
      metric: '40%', 
      description: t('seavoice.solutions.inbound.mentalHealth.benefits.helpSeekingBehaviorIncrease') 
    }
  ];

  const safetyFeatures = [
    t('seavoice.solutions.inbound.mentalHealth.safetyFeatures.crisisKeywordDetection'),
    t('seavoice.solutions.inbound.mentalHealth.safetyFeatures.suicideRiskAssessment'),
    t('seavoice.solutions.inbound.mentalHealth.safetyFeatures.automaticEscalationProtocols'),
    t('seavoice.solutions.inbound.mentalHealth.safetyFeatures.emergencyContactIntegration'),
    t('seavoice.solutions.inbound.mentalHealth.safetyFeatures.professionalHandoffProcedures'),
    t('seavoice.solutions.inbound.mentalHealth.safetyFeatures.followUpScheduling')
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <SEOHelmet {...seoData} />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <Heart className="w-16 h-16 text-pink-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              {t('seavoice.solutions.inbound.mentalHealth.hero.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {t('seavoice.solutions.inbound.mentalHealth.hero.description')}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-pink-700 transition-colors"
            >
              {t('seavoice.solutions.inbound.mentalHealth.hero.cta')}
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
              {t('seavoice.solutions.inbound.mentalHealth.features.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('seavoice.solutions.inbound.mentalHealth.features.description')}
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
                <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg flex items-center justify-center mb-6">
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

      {/* Capabilities Section */}
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
              {t('seavoice.solutions.inbound.mentalHealth.capabilities.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('seavoice.solutions.inbound.mentalHealth.capabilities.description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{capability.title}</h3>
                <p className="text-gray-600 mb-6">{capability.description}</p>
                <div className="space-y-2">
                  {capability.outcomes.map((outcome, outcomeIndex) => (
                    <div key={outcomeIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-pink-600 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-700">{outcome}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Features */}
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
                {t('seavoice.solutions.inbound.mentalHealth.safety.title')}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {t('seavoice.solutions.inbound.mentalHealth.safety.description')}
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Shield className="w-6 h-6 text-pink-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{t('seavoice.solutions.inbound.mentalHealth.safety.crisisDetection.title')}</h3>
                    <p className="text-gray-600">{t('seavoice.solutions.inbound.mentalHealth.safety.crisisDetection.description')}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-pink-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{t('seavoice.solutions.inbound.mentalHealth.safety.professionalHandoff.title')}</h3>
                    <p className="text-gray-600">{t('seavoice.solutions.inbound.mentalHealth.safety.professionalHandoff.description')}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-pink-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{t('seavoice.solutions.inbound.mentalHealth.safety.emergencyProtocols.title')}</h3>
                    <p className="text-gray-600">{t('seavoice.solutions.inbound.mentalHealth.safety.emergencyProtocols.description')}</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('seavoice.solutions.inbound.mentalHealth.safety.features.title')}</h3>
              <div className="grid grid-cols-1 gap-3">
                {safetyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700 font-medium">{feature}</span>
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
              {t('seavoice.solutions.inbound.mentalHealth.benefits.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('seavoice.solutions.inbound.mentalHealth.benefits.description')}
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
                <div className="text-4xl font-bold text-pink-600 mb-4">{benefit.metric}</div>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">{t('seavoice.solutions.inbound.mentalHealth.cta.title')}</h2>
            <p className="text-xl mb-8 opacity-90">
              {t('seavoice.solutions.inbound.mentalHealth.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-pink-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                {t('seavoice.solutions.inbound.mentalHealth.cta.learnMore')}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-pink-600 transition-colors"
              >
                {t('seavoice.solutions.inbound.mentalHealth.cta.contactSpecialists')}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default MentalHealthPage;
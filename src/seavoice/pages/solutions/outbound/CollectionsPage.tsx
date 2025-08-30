
import { motion } from 'framer-motion';
import { CreditCard, Shield, Clock, BarChart3, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const CollectionsPage = () => {
  const { t } = useTranslation();
  const features = [
    {
      icon: CreditCard,
      title: t('seavoice.pages.solutions.outbound.features.paymentReminders.title'),
      description: t('seavoice.pages.solutions.outbound.features.paymentReminders.description'),
      benefits: [
        t('seavoice.pages.solutions.outbound.features.paymentReminders.benefit1'),
        t('seavoice.pages.solutions.outbound.features.paymentReminders.benefit2'),
        t('seavoice.pages.solutions.outbound.features.paymentReminders.benefit3')
      ]
    },
    {
      icon: Shield,
      title: t('seavoice.pages.solutions.outbound.features.compliance.title'),
      description: t('seavoice.pages.solutions.outbound.features.compliance.description'),
      benefits: [
        t('seavoice.pages.solutions.outbound.features.compliance.benefit1'),
        t('seavoice.pages.solutions.outbound.features.compliance.benefit2'),
        t('seavoice.pages.solutions.outbound.features.compliance.benefit3')
      ]
    },
    {
      icon: Clock,
      title: t('seavoice.pages.solutions.outbound.features.optimalTiming.title'),
      description: t('seavoice.pages.solutions.outbound.features.optimalTiming.description'),
      benefits: [
        t('seavoice.pages.solutions.outbound.features.optimalTiming.benefit1'),
        t('seavoice.pages.solutions.outbound.features.optimalTiming.benefit2'),
        t('seavoice.pages.solutions.outbound.features.optimalTiming.benefit3')
      ]
    }
  ];

  const collectionProcess = [
    {
      stage: t('seavoice.pages.solutions.outbound.collectionProcess.earlyReminder.stage'),
      description: t('seavoice.pages.solutions.outbound.collectionProcess.earlyReminder.description'),
      approach: t('seavoice.pages.solutions.outbound.collectionProcess.earlyReminder.approach'),
      success: t('seavoice.pages.solutions.outbound.collectionProcess.earlyReminder.success')
    },
    {
      stage: t('seavoice.pages.solutions.outbound.collectionProcess.followUp.stage'),
      description: t('seavoice.pages.solutions.outbound.collectionProcess.followUp.description'),
      approach: t('seavoice.pages.solutions.outbound.collectionProcess.followUp.approach'),
      success: t('seavoice.pages.solutions.outbound.collectionProcess.followUp.success')
    },
    {
      stage: t('seavoice.pages.solutions.outbound.collectionProcess.finalNotice.stage'),
      description: t('seavoice.pages.solutions.outbound.collectionProcess.finalNotice.description'),
      approach: t('seavoice.pages.solutions.outbound.collectionProcess.finalNotice.approach'),
      success: t('seavoice.pages.solutions.outbound.collectionProcess.finalNotice.success')
    },
    {
      stage: t('seavoice.pages.solutions.outbound.collectionProcess.humanHandoff.stage'),
      description: t('seavoice.pages.solutions.outbound.collectionProcess.humanHandoff.description'),
      approach: t('seavoice.pages.solutions.outbound.collectionProcess.humanHandoff.approach'),
      success: t('seavoice.pages.solutions.outbound.collectionProcess.humanHandoff.success')
    }
  ];

  const benefits = [
    { 
      metric: t('seavoice.pages.solutions.outbound.benefits.collectionRates.metric'), 
      description: t('seavoice.pages.solutions.outbound.benefits.collectionRates.description') 
    },
    { 
      metric: t('seavoice.pages.solutions.outbound.benefits.costReduction.metric'), 
      description: t('seavoice.pages.solutions.outbound.benefits.costReduction.description') 
    },
    { 
      metric: t('seavoice.pages.solutions.outbound.benefits.paymentProcessing.metric'), 
      description: t('seavoice.pages.solutions.outbound.benefits.paymentProcessing.description') 
    },
    { 
      metric: t('seavoice.pages.solutions.outbound.benefits.complianceRate.metric'), 
      description: t('seavoice.pages.solutions.outbound.benefits.complianceRate.description') 
    }
  ];

  const complianceFeatures = [
    t('seavoice.pages.solutions.outbound.complianceSection.features.fdcpaCompliance'),
    t('seavoice.pages.solutions.outbound.complianceSection.features.tcpaCompliance'),
    t('seavoice.pages.solutions.outbound.complianceSection.features.stateRegulation'),
    t('seavoice.pages.solutions.outbound.complianceSection.features.callRecording'),
    t('seavoice.pages.solutions.outbound.complianceSection.features.disputeHandling'),
    t('seavoice.pages.solutions.outbound.complianceSection.features.ceaseDesist')
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-red-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <CreditCard className="w-16 h-16 text-orange-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              {t('seavoice.pages.solutions.outbound.hero.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {t('seavoice.pages.solutions.outbound.hero.description')}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-colors"
            >
              {t('seavoice.pages.solutions.outbound.hero.cta')}
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
              {t('seavoice.pages.solutions.outbound.features.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('seavoice.pages.solutions.outbound.features.subtitle')}
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
                <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg flex items-center justify-center mb-6">
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

      {/* Collection Process */}
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
              {t('seavoice.pages.solutions.outbound.collectionProcess.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('seavoice.pages.solutions.outbound.collectionProcess.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {collectionProcess.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-200"
              >
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{process.stage}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-3">{process.description}</p>
                <p className="text-gray-500 text-xs mb-3 italic">{process.approach}</p>
                <div className="p-2 bg-orange-50 rounded-lg">
                  <p className="text-sm font-semibold text-orange-800">{process.success}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
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
                {t('seavoice.pages.solutions.outbound.complianceSection.title')}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {t('seavoice.pages.solutions.outbound.complianceSection.description')}
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Shield className="w-6 h-6 text-orange-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{t('seavoice.pages.solutions.outbound.complianceSection.subFeatures.regulatoryCompliance.title')}</h3>
                    <p className="text-gray-600">{t('seavoice.pages.solutions.outbound.complianceSection.subFeatures.regulatoryCompliance.description')}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <BarChart3 className="w-6 h-6 text-orange-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{t('seavoice.pages.solutions.outbound.complianceSection.subFeatures.auditTrail.title')}</h3>
                    <p className="text-gray-600">{t('seavoice.pages.solutions.outbound.complianceSection.subFeatures.auditTrail.description')}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-orange-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{t('seavoice.pages.solutions.outbound.complianceSection.subFeatures.timingControls.title')}</h3>
                    <p className="text-gray-600">{t('seavoice.pages.solutions.outbound.complianceSection.subFeatures.timingControls.description')}</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('seavoice.pages.solutions.outbound.complianceSection.featuresTitle')}</h3>
              <div className="grid grid-cols-1 gap-3">
                {complianceFeatures.map((feature, index) => (
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
              {t('seavoice.pages.solutions.outbound.benefits.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('seavoice.pages.solutions.outbound.benefits.subtitle')}
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
                <div className="text-4xl font-bold text-orange-600 mb-4">{benefit.metric}</div>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">{t('seavoice.pages.solutions.outbound.cta.title')}</h2>
            <p className="text-xl mb-8 opacity-90">
              {t('seavoice.pages.solutions.outbound.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                {t('seavoice.pages.solutions.outbound.cta.startFreeTrial')}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
              >
                {t('seavoice.pages.solutions.outbound.cta.scheduleDemo')}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CollectionsPage;
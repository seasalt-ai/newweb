
import { motion } from 'framer-motion';
import { Wrench, Zap, Users, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const TechnicalSupportPage = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: Wrench,
      title: t('seavoice.pages.solutions.inbound.technicalSupport.features.automatedTroubleshooting.title'),
      description: t('seavoice.pages.solutions.inbound.technicalSupport.features.automatedTroubleshooting.description'),
      benefits: [
        t('seavoice.pages.solutions.inbound.technicalSupport.features.automatedTroubleshooting.benefits.0'),
        t('seavoice.pages.solutions.inbound.technicalSupport.features.automatedTroubleshooting.benefits.1'),
        t('seavoice.pages.solutions.inbound.technicalSupport.features.automatedTroubleshooting.benefits.2')
      ]
    },
    {
      icon: Zap,
      title: t('seavoice.pages.solutions.inbound.technicalSupport.features.intelligentEscalation.title'),
      description: t('seavoice.pages.solutions.inbound.technicalSupport.features.intelligentEscalation.description'),
      benefits: [
        t('seavoice.pages.solutions.inbound.technicalSupport.features.intelligentEscalation.benefits.0'),
        t('seavoice.pages.solutions.inbound.technicalSupport.features.intelligentEscalation.benefits.1'),
        t('seavoice.pages.solutions.inbound.technicalSupport.features.intelligentEscalation.benefits.2')
      ]
    },
    {
      icon: Users,
      title: t('seavoice.pages.solutions.inbound.technicalSupport.features.multiPlatformSupport.title'),
      description: t('seavoice.pages.solutions.inbound.technicalSupport.features.multiPlatformSupport.description'),
      benefits: [
        t('seavoice.pages.solutions.inbound.technicalSupport.features.multiPlatformSupport.benefits.0'),
        t('seavoice.pages.solutions.inbound.technicalSupport.features.multiPlatformSupport.benefits.1'),
        t('seavoice.pages.solutions.inbound.technicalSupport.features.multiPlatformSupport.benefits.2')
      ]
    }
  ];

  const supportCapabilities = [
    {
      category: t('seavoice.pages.solutions.inbound.technicalSupport.capabilities.hardwareIssues.category'),
      description: t('seavoice.pages.solutions.inbound.technicalSupport.capabilities.hardwareIssues.description'),
      examples: [
        t('seavoice.pages.solutions.inbound.technicalSupport.capabilities.hardwareIssues.examples.0'),
        t('seavoice.pages.solutions.inbound.technicalSupport.capabilities.hardwareIssues.examples.1'),
        t('seavoice.pages.solutions.inbound.technicalSupport.capabilities.hardwareIssues.examples.2')
      ]
    },
    {
      category: t('seavoice.pages.solutions.inbound.technicalSupport.capabilities.softwareTroubleshooting.category'),
      description: t('seavoice.pages.solutions.inbound.technicalSupport.capabilities.softwareTroubleshooting.description'),
      examples: [
        t('seavoice.pages.solutions.inbound.technicalSupport.capabilities.softwareTroubleshooting.examples.0'),
        t('seavoice.pages.solutions.inbound.technicalSupport.capabilities.softwareTroubleshooting.examples.1'),
        t('seavoice.pages.solutions.inbound.technicalSupport.capabilities.softwareTroubleshooting.examples.2')
      ]
    },
    {
      category: t('seavoice.pages.solutions.inbound.technicalSupport.capabilities.networkProblems.category'),
      description: t('seavoice.pages.solutions.inbound.technicalSupport.capabilities.networkProblems.description'),
      examples: [
        t('seavoice.pages.solutions.inbound.technicalSupport.capabilities.networkProblems.examples.0'),
        t('seavoice.pages.solutions.inbound.technicalSupport.capabilities.networkProblems.examples.1'),
        t('seavoice.pages.solutions.inbound.technicalSupport.capabilities.networkProblems.examples.2')
      ]
    },
    {
      category: t('seavoice.pages.solutions.inbound.technicalSupport.capabilities.accountSecurity.category'),
      description: t('seavoice.pages.solutions.inbound.technicalSupport.capabilities.accountSecurity.description'),
      examples: [
        t('seavoice.pages.solutions.inbound.technicalSupport.capabilities.accountSecurity.examples.0'),
        t('seavoice.pages.solutions.inbound.technicalSupport.capabilities.accountSecurity.examples.1'),
        t('seavoice.pages.solutions.inbound.technicalSupport.capabilities.accountSecurity.examples.2')
      ]
    }
  ];

  const benefits = [
    { metric: '75%', description: t('seavoice.pages.solutions.inbound.technicalSupport.metrics.resolution.description') },
    { metric: '60%', description: t('seavoice.pages.solutions.inbound.technicalSupport.metrics.reductionTime.description') },
    { metric: '90%', description: t('seavoice.pages.solutions.inbound.technicalSupport.metrics.satisfaction.description') },
    { metric: '24/7', description: t('seavoice.pages.solutions.inbound.technicalSupport.metrics.availability.description') }
  ];

  const troubleshootingSteps = [
    {
      step: 1,
      title: t('seavoice.pages.solutions.inbound.technicalSupport.process.steps.issueIdentification.title'),
      description: t('seavoice.pages.solutions.inbound.technicalSupport.process.steps.issueIdentification.description')
    },
    {
      step: 2,
      title: t('seavoice.pages.solutions.inbound.technicalSupport.process.steps.diagnosticAnalysis.title'),
      description: t('seavoice.pages.solutions.inbound.technicalSupport.process.steps.diagnosticAnalysis.description')
    },
    {
      step: 3,
      title: t('seavoice.pages.solutions.inbound.technicalSupport.process.steps.solutionGuidance.title'),
      description: t('seavoice.pages.solutions.inbound.technicalSupport.process.steps.solutionGuidance.description')
    },
    {
      step: 4,
      title: t('seavoice.pages.solutions.inbound.technicalSupport.process.steps.verificationFollowup.title'),
      description: t('seavoice.pages.solutions.inbound.technicalSupport.process.steps.verificationFollowup.description')
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <Wrench className="w-16 h-16 text-blue-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              {t('seavoice.pages.solutions.inbound.technicalSupport.hero.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {t('seavoice.pages.solutions.inbound.technicalSupport.hero.description')}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              {t('seavoice.pages.solutions.inbound.technicalSupport.hero.primaryCta')}
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
              {t('seavoice.pages.solutions.inbound.technicalSupport.features.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('seavoice.pages.solutions.inbound.technicalSupport.features.description')}
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
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mb-6">
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

      {/* Support Capabilities */}
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
              {t('seavoice.pages.solutions.inbound.technicalSupport.capabilities.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('seavoice.pages.solutions.inbound.technicalSupport.capabilities.description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {supportCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{capability.category}</h3>
                <p className="text-gray-600 mb-6">{capability.description}</p>
                <div className="space-y-2">
                  {capability.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-700">{example}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Troubleshooting Process */}
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
              {t('seavoice.pages.solutions.inbound.technicalSupport.process.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('seavoice.pages.solutions.inbound.technicalSupport.process.description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {troubleshootingSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
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
              {t('seavoice.pages.solutions.inbound.technicalSupport.benefits.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('seavoice.pages.solutions.inbound.technicalSupport.benefits.description')}
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">{t('seavoice.pages.solutions.inbound.technicalSupport.cta.title')}</h2>
            <p className="text-xl mb-8 opacity-90">
              {t('seavoice.pages.solutions.inbound.technicalSupport.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                {t('seavoice.pages.solutions.inbound.technicalSupport.cta.primaryButton')}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                {t('seavoice.pages.solutions.inbound.technicalSupport.cta.secondaryButton')}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TechnicalSupportPage;
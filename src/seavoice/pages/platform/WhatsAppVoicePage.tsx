import { useTranslation } from 'react-i18next';
import { MEETING_URL, getMeetingUrl } from '../../../constants/urls';
import { motion } from 'framer-motion';
import { MessageSquare, Globe, Users, Shield, CheckCircle, Smartphone } from 'lucide-react';
const WhatsAppVoicePage = () => {
  const { t, i18n } = useTranslation();
  const features = [
    {
      icon: MessageSquare,
      title: t('seavoice.platform.whatsAppVoice.features.0.title'),
      description: t('seavoice.platform.whatsAppVoice.features.0.description'),
      benefits: [t('seavoice.platform.whatsAppVoice.features.0.benefits.0'), t('seavoice.platform.whatsAppVoice.features.0.benefits.1'), t('seavoice.platform.whatsAppVoice.features.0.benefits.2')]
    },
    {
      icon: Globe,
      title: t('seavoice.platform.whatsAppVoice.features.1.title'),
      description: t('seavoice.platform.whatsAppVoice.features.1.description'),
      benefits: [t('seavoice.platform.whatsAppVoice.features.1.benefits.0'), t('seavoice.platform.whatsAppVoice.features.1.benefits.1'), t('seavoice.platform.whatsAppVoice.features.1.benefits.2')]
    },
    {
      icon: Shield,
      title: t('seavoice.platform.whatsAppVoice.features.2.title'),
      description: t('seavoice.platform.whatsAppVoice.features.2.description'),
      benefits: [t('seavoice.platform.whatsAppVoice.features.2.benefits.0'), t('seavoice.platform.whatsAppVoice.features.2.benefits.1'), t('seavoice.platform.whatsAppVoice.features.2.benefits.2')]
    }
  ];

  const globalStats = [
    { region: t('seavoice.platform.whatsAppVoice.globalStats.stats.0.region'), count: t('seavoice.platform.whatsAppVoice.globalStats.stats.0.count'), growth: t('seavoice.platform.whatsAppVoice.globalStats.stats.0.growth') },
    { region: t('seavoice.platform.whatsAppVoice.globalStats.stats.1.region'), count: t('seavoice.platform.whatsAppVoice.globalStats.stats.1.count'), growth: t('seavoice.platform.whatsAppVoice.globalStats.stats.1.growth') },
    { region: t('seavoice.platform.whatsAppVoice.globalStats.stats.2.region'), count: t('seavoice.platform.whatsAppVoice.globalStats.stats.2.count'), growth: t('seavoice.platform.whatsAppVoice.globalStats.stats.2.growth') },
    { region: t('seavoice.platform.whatsAppVoice.globalStats.stats.3.region'), count: t('seavoice.platform.whatsAppVoice.globalStats.stats.3.count'), growth: t('seavoice.platform.whatsAppVoice.globalStats.stats.3.growth') }
  ];

  const useCases = [
    {
      title: t('seavoice.platform.whatsAppVoice.useCases.0.title'),
      description: t('seavoice.platform.whatsAppVoice.useCases.0.description'),
      metrics: [t('seavoice.platform.whatsAppVoice.useCases.0.metrics.0'), t('seavoice.platform.whatsAppVoice.useCases.0.metrics.1'), t('seavoice.platform.whatsAppVoice.useCases.0.metrics.2')]
    },
    {
      title: t('seavoice.platform.whatsAppVoice.useCases.1.title'),
      description: t('seavoice.platform.whatsAppVoice.useCases.1.description'),
      metrics: [t('seavoice.platform.whatsAppVoice.useCases.1.metrics.0'), t('seavoice.platform.whatsAppVoice.useCases.1.metrics.1'), t('seavoice.platform.whatsAppVoice.useCases.1.metrics.2')]
    },
    {
      title: t('seavoice.platform.whatsAppVoice.useCases.2.title'),
      description: t('seavoice.platform.whatsAppVoice.useCases.2.description'),
      metrics: [t('seavoice.platform.whatsAppVoice.useCases.2.metrics.0'), t('seavoice.platform.whatsAppVoice.useCases.2.metrics.1'), t('seavoice.platform.whatsAppVoice.useCases.2.metrics.2')]
    },
    {
      title: t('seavoice.platform.whatsAppVoice.useCases.3.title'),
      description: t('seavoice.platform.whatsAppVoice.useCases.3.description'),
      metrics: [t('seavoice.platform.whatsAppVoice.useCases.3.metrics.0'), t('seavoice.platform.whatsAppVoice.useCases.3.metrics.1'), t('seavoice.platform.whatsAppVoice.useCases.3.metrics.2')]
    }
  ];

  const integrationSteps = [
    {
      step: 1,
      title: t('seavoice.platform.whatsAppVoice.integration.steps.0.title'),
      description: t('seavoice.platform.whatsAppVoice.integration.steps.0.description')
    },
    {
      step: 2,
      title: t('seavoice.platform.whatsAppVoice.integration.steps.1.title'),
      description: t('seavoice.platform.whatsAppVoice.integration.steps.1.description')
    },
    {
      step: 3,
      title: t('seavoice.platform.whatsAppVoice.integration.steps.2.title'),
      description: t('seavoice.platform.whatsAppVoice.integration.steps.2.description')
    },
    {
      step: 4,
      title: t('seavoice.platform.whatsAppVoice.integration.steps.3.title'),
      description: t('seavoice.platform.whatsAppVoice.integration.steps.3.description')
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              {t('seavoice.platform.whatsAppVoice.hero.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {t('seavoice.platform.whatsAppVoice.hero.subtitle')}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors"
            >
              {t('seavoice.platform.whatsAppVoice.hero.cta')}
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Global Reach Stats */}
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
              {t('seavoice.platform.whatsAppVoice.globalStats.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('seavoice.platform.whatsAppVoice.globalStats.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {globalStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 text-center"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{stat.region}</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">{stat.count}</div>
                <p className="text-sm text-gray-600">{stat.growth}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              {t('seavoice.platform.whatsAppVoice.features.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('seavoice.platform.whatsAppVoice.features.subtitle')}
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
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Grid */}
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
              {t('seavoice.platform.whatsAppVoice.useCases.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('seavoice.platform.whatsAppVoice.useCases.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                <p className="text-gray-600 mb-6">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-700">{metric}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Process */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {t('seavoice.platform.whatsAppVoice.integration.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('seavoice.platform.whatsAppVoice.integration.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {integrationSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
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
                {t('seavoice.platform.whatsAppVoice.demo.title')}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {t('seavoice.platform.whatsAppVoice.demo.subtitle')}
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Smartphone className="w-6 h-6 text-green-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{t('seavoice.platform.whatsAppVoice.demo.features.0.title')}</h3>
                    <p className="text-gray-600">{t('seavoice.platform.whatsAppVoice.demo.features.0.description')}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-green-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{t('seavoice.platform.whatsAppVoice.demo.features.1.title')}</h3>
                    <p className="text-gray-600">{t('seavoice.platform.whatsAppVoice.demo.features.1.description')}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MessageSquare className="w-6 h-6 text-green-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{t('seavoice.platform.whatsAppVoice.demo.features.2.title')}</h3>
                    <p className="text-gray-600">{t('seavoice.platform.whatsAppVoice.demo.features.2.description')}</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">{t('seavoice.platform.whatsAppVoice.demo.dashboard.title')}</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-600">{t('seavoice.platform.whatsAppVoice.demo.dashboard.liveStatus')}</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">{t('seavoice.platform.whatsAppVoice.demo.dashboard.stats.activeVoiceCalls.label')}</span>
                  <span className="font-semibold text-2xl text-green-600">{t('seavoice.platform.whatsAppVoice.demo.dashboard.stats.activeVoiceCalls.value')}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">{t('seavoice.platform.whatsAppVoice.demo.dashboard.stats.messagesToday.label')}</span>
                  <span className="font-semibold text-green-600">{t('seavoice.platform.whatsAppVoice.demo.dashboard.stats.messagesToday.value')}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">{t('seavoice.platform.whatsAppVoice.demo.dashboard.stats.responseRate.label')}</span>
                  <span className="font-semibold text-green-600">{t('seavoice.platform.whatsAppVoice.demo.dashboard.stats.responseRate.value')}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">{t('seavoice.platform.whatsAppVoice.demo.dashboard.stats.customerSatisfaction.label')}</span>
                  <span className="font-semibold text-green-600">{t('seavoice.platform.whatsAppVoice.demo.dashboard.stats.customerSatisfaction.value')}</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-3">
                    <MessageSquare className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-semibold text-gray-900">{t('seavoice.platform.whatsAppVoice.demo.aiAssistant.name')}</span>
                </div>
                <p className="text-sm text-gray-700 italic">
                  "{t('seavoice.platform.whatsAppVoice.demo.aiAssistant.message')}"
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">{t('seavoice.platform.whatsAppVoice.cta.title')}</h2>
            <p className="text-xl mb-8 opacity-90">
              {t('seavoice.platform.whatsAppVoice.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://chat.seasalt.ai/gpt/signup"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  {t('seavoice.platform.whatsAppVoice.cta.primaryButton')}
                </motion.button>
              </a>
              <a
                href={getMeetingUrl(i18n.language)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
                >
                  {t('seavoice.platform.whatsAppVoice.cta.secondaryButton')}
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WhatsAppVoicePage;
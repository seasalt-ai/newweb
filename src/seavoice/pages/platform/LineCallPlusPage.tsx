
import { motion } from 'framer-motion';
import { MessageCircle, Users, Globe, Smartphone, CheckCircle, BarChart3 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const LineCallPlusPage = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: MessageCircle,
      title: t('seavoice.platform.lineCallPlus.features.nativeIntegration.title'),
      description: t('seavoice.platform.lineCallPlus.features.nativeIntegration.description'),
      benefits: [t('seavoice.platform.lineCallPlus.features.nativeIntegration.benefit1'), t('seavoice.platform.lineCallPlus.features.nativeIntegration.benefit2'), t('seavoice.platform.lineCallPlus.features.nativeIntegration.benefit3')]
    },
    {
      icon: Users,
      title: t('seavoice.platform.lineCallPlus.features.businessAccount.title'),
      description: t('seavoice.platform.lineCallPlus.features.businessAccount.description'),
      benefits: [t('seavoice.platform.lineCallPlus.features.businessAccount.benefit1'), t('seavoice.platform.lineCallPlus.features.businessAccount.benefit2'), t('seavoice.platform.lineCallPlus.features.businessAccount.benefit3')]
    },
    {
      icon: Globe,
      title: t('seavoice.platform.lineCallPlus.features.asiaPacific.title'),
      description: t('seavoice.platform.lineCallPlus.features.asiaPacific.description'),
      benefits: [t('seavoice.platform.lineCallPlus.features.asiaPacific.benefit1'), t('seavoice.platform.lineCallPlus.features.asiaPacific.benefit2'), t('seavoice.platform.lineCallPlus.features.asiaPacific.benefit3')]
    }
  ];

  const marketStats = [
    { country: 'Japan', users: '95M+', penetration: '75%' },
    { country: 'Thailand', users: '52M+', penetration: '76%' },
    { country: 'Taiwan', users: '21M+', penetration: '90%' },
    { country: 'South Korea', users: '33M+', penetration: '64%' }
  ];

  const useCases = [
    {
      title: t('seavoice.platform.lineCallPlus.useCases.customerSupport.title'),
      description: t('seavoice.platform.lineCallPlus.useCases.customerSupport.description'),
      metrics: [t('seavoice.platform.lineCallPlus.useCases.customerSupport.metric1'), t('seavoice.platform.lineCallPlus.useCases.customerSupport.metric2'), t('seavoice.platform.lineCallPlus.useCases.customerSupport.metric3')]
    },
    {
      title: t('seavoice.platform.lineCallPlus.useCases.salesConsultations.title'),
      description: t('seavoice.platform.lineCallPlus.useCases.salesConsultations.description'),
      metrics: [t('seavoice.platform.lineCallPlus.useCases.salesConsultations.metric1'), t('seavoice.platform.lineCallPlus.useCases.salesConsultations.metric2'), t('seavoice.platform.lineCallPlus.useCases.salesConsultations.metric3')]
    },
    {
      title: t('seavoice.platform.lineCallPlus.useCases.appointmentBooking.title'),
      description: t('seavoice.platform.lineCallPlus.useCases.appointmentBooking.description'),
      metrics: [t('seavoice.platform.lineCallPlus.useCases.appointmentBooking.metric1'), t('seavoice.platform.lineCallPlus.useCases.appointmentBooking.metric2'), t('seavoice.platform.lineCallPlus.useCases.appointmentBooking.metric3')]
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
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              {t('seavoice.platform.lineCallPlus.hero.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {t('seavoice.platform.lineCallPlus.hero.description')}
            </p>
            <a
              href="https://chat.seasalt.ai/gpt/signup"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors"
              >
                {t('seavoice.platform.lineCallPlus.hero.cta')}
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Market Reach */}
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
              {t('seavoice.platform.lineCallPlus.marketReach.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('seavoice.platform.lineCallPlus.marketReach.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {marketStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 text-center"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{stat.country}</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">{stat.users}</div>
                <p className="text-gray-600">{t('seavoice.platform.lineCallPlus.marketReach.activeUsers')}</p>
                <div className="mt-4 text-lg font-semibold text-gray-900">{stat.penetration}</div>
                <p className="text-sm text-gray-600">{t('seavoice.platform.lineCallPlus.marketReach.marketPenetration')}</p>
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
              {t('seavoice.platform.lineCallPlus.features.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('seavoice.platform.lineCallPlus.features.subtitle')}
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

      {/* Use Cases */}
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
              {t('seavoice.platform.lineCallPlus.useCases.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('seavoice.platform.lineCallPlus.useCases.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
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
              {t('seavoice.platform.lineCallPlus.integration.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('seavoice.platform.lineCallPlus.integration.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('seavoice.platform.lineCallPlus.integration.step1.title')}</h3>
              <p className="text-gray-600">{t('seavoice.platform.lineCallPlus.integration.step1.description')}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('seavoice.platform.lineCallPlus.integration.step2.title')}</h3>
              <p className="text-gray-600">{t('seavoice.platform.lineCallPlus.integration.step2.description')}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('seavoice.platform.lineCallPlus.integration.step3.title')}</h3>
              <p className="text-gray-600">{t('seavoice.platform.lineCallPlus.integration.step3.description')}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Analytics Dashboard */}
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
                {t('seavoice.platform.lineCallPlus.analytics.title')}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {t('seavoice.platform.lineCallPlus.analytics.description')}
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <BarChart3 className="w-6 h-6 text-green-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{t('seavoice.platform.lineCallPlus.analytics.callAnalytics.title')}</h3>
                    <p className="text-gray-600">{t('seavoice.platform.lineCallPlus.analytics.callAnalytics.description')}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-green-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{t('seavoice.platform.lineCallPlus.analytics.userEngagement.title')}</h3>
                    <p className="text-gray-600">{t('seavoice.platform.lineCallPlus.analytics.userEngagement.description')}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Smartphone className="w-6 h-6 text-green-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{t('seavoice.platform.lineCallPlus.analytics.platformInsights.title')}</h3>
                    <p className="text-gray-600">{t('seavoice.platform.lineCallPlus.analytics.platformInsights.description')}</p>
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
                <h3 className="text-lg font-semibold text-gray-900">{t('seavoice.platform.lineCallPlus.analytics.dashboard.title')}</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-600">{t('seavoice.platform.lineCallPlus.analytics.dashboard.live')}</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">{t('seavoice.platform.lineCallPlus.analytics.dashboard.activeCalls')}</span>
                  <span className="font-semibold text-2xl text-green-600">156</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">{t('seavoice.platform.lineCallPlus.analytics.dashboard.responseRate')}</span>
                  <span className="font-semibold text-green-600">92%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">{t('seavoice.platform.lineCallPlus.analytics.dashboard.avgCallDuration')}</span>
                  <span className="font-semibold text-green-600">3:24</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">{t('seavoice.platform.lineCallPlus.analytics.dashboard.customerSatisfaction')}</span>
                  <span className="font-semibold text-green-600">4.8/5</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                <p className="text-sm text-gray-700 italic">
                  "こんにちは！LINEサポートです。どのようにお手伝いできますか？"
                </p>
                <p className="text-xs text-gray-500 mt-1">{t('seavoice.platform.lineCallPlus.analytics.dashboard.sampleResponse')}</p>
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
            <h2 className="text-4xl font-bold mb-6">{t('seavoice.platform.lineCallPlus.cta.title')}</h2>
            <p className="text-xl mb-8 opacity-90">
              {t('seavoice.platform.lineCallPlus.cta.description')}
            </p>
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
                {t('seavoice.platform.lineCallPlus.cta.button')}
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LineCallPlusPage;
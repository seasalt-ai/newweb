
import { motion } from 'framer-motion';
import { RefreshCw, CreditCard, Users, BarChart3, CheckCircle, Calendar } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SEOHelmet from '../../../../components/SEOHelmet';
import { getSEOData, getCanonicalUrl } from '../../../../utils/seo';

const SubscriptionRenewalsPage = () => {
  const { t, i18n } = useTranslation();
  
  // Generate SEO data using standardized utility
  const seoData = getSEOData(t, 'seavoice.solutions.outbound.subscriptionRenewals.seo', {
    canonicalUrl: getCanonicalUrl(i18n.language, '/seavoice/solutions/outbound/subscription-renewals')
  });
  const features = [
    {
      icon: RefreshCw,
      title: t('seavoice.pages.solutions.outbound.subscriptionRenewals.features.automatedRenewalReminders.title'),
      description: t('seavoice.pages.solutions.outbound.subscriptionRenewals.features.automatedRenewalReminders.description'),
      benefits: [
        t('seavoice.pages.solutions.outbound.subscriptionRenewals.features.automatedRenewalReminders.benefit1'),
        t('seavoice.pages.solutions.outbound.subscriptionRenewals.features.automatedRenewalReminders.benefit2'),
        t('seavoice.pages.solutions.outbound.subscriptionRenewals.features.automatedRenewalReminders.benefit3')
      ]
    },
    {
      icon: CreditCard,
      title: t('seavoice.pages.solutions.outbound.subscriptionRenewals.features.paymentProcessing.title'),
      description: t('seavoice.pages.solutions.outbound.subscriptionRenewals.features.paymentProcessing.description'),
      benefits: [
        t('seavoice.pages.solutions.outbound.subscriptionRenewals.features.paymentProcessing.benefit1'),
        t('seavoice.pages.solutions.outbound.subscriptionRenewals.features.paymentProcessing.benefit2'),
        t('seavoice.pages.solutions.outbound.subscriptionRenewals.features.paymentProcessing.benefit3')
      ]
    },
    {
      icon: Users,
      title: t('seavoice.pages.solutions.outbound.subscriptionRenewals.features.customerRetention.title'),
      description: t('seavoice.pages.solutions.outbound.subscriptionRenewals.features.customerRetention.description'),
      benefits: [
        t('seavoice.pages.solutions.outbound.subscriptionRenewals.features.customerRetention.benefit1'),
        t('seavoice.pages.solutions.outbound.subscriptionRenewals.features.customerRetention.benefit2'),
        t('seavoice.pages.solutions.outbound.subscriptionRenewals.features.customerRetention.benefit3')
      ]
    }
  ];

  const renewalProcess = [
    {
      step: 1,
      title: t('seavoice.pages.solutions.outbound.subscriptionRenewals.renewalProcess.step1.title'),
      description: t('seavoice.pages.solutions.outbound.subscriptionRenewals.renewalProcess.step1.description'),
      timing: t('seavoice.pages.solutions.outbound.subscriptionRenewals.renewalProcess.step1.timing'),
      action: t('seavoice.pages.solutions.outbound.subscriptionRenewals.renewalProcess.step1.action')
    },
    {
      step: 2,
      title: t('seavoice.pages.solutions.outbound.subscriptionRenewals.renewalProcess.step2.title'),
      description: t('seavoice.pages.solutions.outbound.subscriptionRenewals.renewalProcess.step2.description'),
      timing: t('seavoice.pages.solutions.outbound.subscriptionRenewals.renewalProcess.step2.timing'),
      action: t('seavoice.pages.solutions.outbound.subscriptionRenewals.renewalProcess.step2.action')
    },
    {
      step: 3,
      title: t('seavoice.pages.solutions.outbound.subscriptionRenewals.renewalProcess.step3.title'),
      description: t('seavoice.pages.solutions.outbound.subscriptionRenewals.renewalProcess.step3.description'),
      timing: t('seavoice.pages.solutions.outbound.subscriptionRenewals.renewalProcess.step3.timing'),
      action: t('seavoice.pages.solutions.outbound.subscriptionRenewals.renewalProcess.step3.action')
    },
    {
      step: 4,
      title: t('seavoice.pages.solutions.outbound.subscriptionRenewals.renewalProcess.step4.title'),
      description: t('seavoice.pages.solutions.outbound.subscriptionRenewals.renewalProcess.step4.description'),
      timing: t('seavoice.pages.solutions.outbound.subscriptionRenewals.renewalProcess.step4.timing'),
      action: t('seavoice.pages.solutions.outbound.subscriptionRenewals.renewalProcess.step4.action')
    }
  ];

  const benefits = [
    { 
      metric: t('seavoice.pages.solutions.outbound.subscriptionRenewals.benefits.metric1.value'), 
      description: t('seavoice.pages.solutions.outbound.subscriptionRenewals.benefits.metric1.description') 
    },
    { 
      metric: t('seavoice.pages.solutions.outbound.subscriptionRenewals.benefits.metric2.value'), 
      description: t('seavoice.pages.solutions.outbound.subscriptionRenewals.benefits.metric2.description') 
    },
    { 
      metric: t('seavoice.pages.solutions.outbound.subscriptionRenewals.benefits.metric3.value'), 
      description: t('seavoice.pages.solutions.outbound.subscriptionRenewals.benefits.metric3.description') 
    },
    { 
      metric: t('seavoice.pages.solutions.outbound.subscriptionRenewals.benefits.metric4.value'), 
      description: t('seavoice.pages.solutions.outbound.subscriptionRenewals.benefits.metric4.description') 
    }
  ];

  const subscriptionTypes = [
    {
      type: t('seavoice.pages.solutions.outbound.subscriptionRenewals.subscriptionTypes.saas.type'),
      description: t('seavoice.pages.solutions.outbound.subscriptionRenewals.subscriptionTypes.saas.description'),
      strategies: [
        t('seavoice.pages.solutions.outbound.subscriptionRenewals.subscriptionTypes.saas.strategy1'),
        t('seavoice.pages.solutions.outbound.subscriptionRenewals.subscriptionTypes.saas.strategy2'),
        t('seavoice.pages.solutions.outbound.subscriptionRenewals.subscriptionTypes.saas.strategy3')
      ]
    },
    {
      type: t('seavoice.pages.solutions.outbound.subscriptionRenewals.subscriptionTypes.mediaEntertainment.type'),
      description: t('seavoice.pages.solutions.outbound.subscriptionRenewals.subscriptionTypes.mediaEntertainment.description'),
      strategies: [
        t('seavoice.pages.solutions.outbound.subscriptionRenewals.subscriptionTypes.mediaEntertainment.strategy1'),
        t('seavoice.pages.solutions.outbound.subscriptionRenewals.subscriptionTypes.mediaEntertainment.strategy2'),
        t('seavoice.pages.solutions.outbound.subscriptionRenewals.subscriptionTypes.mediaEntertainment.strategy3')
      ]
    },
    {
      type: t('seavoice.pages.solutions.outbound.subscriptionRenewals.subscriptionTypes.professionalServices.type'),
      description: t('seavoice.pages.solutions.outbound.subscriptionRenewals.subscriptionTypes.professionalServices.description'),
      strategies: [
        t('seavoice.pages.solutions.outbound.subscriptionRenewals.subscriptionTypes.professionalServices.strategy1'),
        t('seavoice.pages.solutions.outbound.subscriptionRenewals.subscriptionTypes.professionalServices.strategy2'),
        t('seavoice.pages.solutions.outbound.subscriptionRenewals.subscriptionTypes.professionalServices.strategy3')
      ]
    },
    {
      type: t('seavoice.pages.solutions.outbound.subscriptionRenewals.subscriptionTypes.ecommerce.type'),
      description: t('seavoice.pages.solutions.outbound.subscriptionRenewals.subscriptionTypes.ecommerce.description'),
      strategies: [
        t('seavoice.pages.solutions.outbound.subscriptionRenewals.subscriptionTypes.ecommerce.strategy1'),
        t('seavoice.pages.solutions.outbound.subscriptionRenewals.subscriptionTypes.ecommerce.strategy2'),
        t('seavoice.pages.solutions.outbound.subscriptionRenewals.subscriptionTypes.ecommerce.strategy3')
      ]
    }
  ];

  const retentionTactics = [
    t('seavoice.pages.solutions.outbound.subscriptionRenewals.retention.tactics.tactic1'),
    t('seavoice.pages.solutions.outbound.subscriptionRenewals.retention.tactics.tactic2'),
    t('seavoice.pages.solutions.outbound.subscriptionRenewals.retention.tactics.tactic3'),
    t('seavoice.pages.solutions.outbound.subscriptionRenewals.retention.tactics.tactic4'),
    t('seavoice.pages.solutions.outbound.subscriptionRenewals.retention.tactics.tactic5'),
    t('seavoice.pages.solutions.outbound.subscriptionRenewals.retention.tactics.tactic6')
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHelmet seoData={seoData} />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <RefreshCw className="w-16 h-16 text-green-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              {t('seavoice.pages.solutions.outbound.subscriptionRenewals.hero.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {t('seavoice.pages.solutions.outbound.subscriptionRenewals.hero.description')}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors"
            >
              {t('seavoice.pages.solutions.outbound.subscriptionRenewals.hero.cta')}
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
              {t('seavoice.pages.solutions.outbound.subscriptionRenewals.features.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('seavoice.pages.solutions.outbound.subscriptionRenewals.features.subtitle')}
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
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center mb-6">
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

      {/* Renewal Process */}
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
              {t('seavoice.pages.solutions.outbound.subscriptionRenewals.renewalProcess.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('seavoice.pages.solutions.outbound.subscriptionRenewals.renewalProcess.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {renewalProcess.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{process.title}</h3>
                <p className="text-gray-600 mb-4">{process.description}</p>
                <div className="space-y-2">
                  <div className="p-2 bg-green-50 rounded-lg">
                    <p className="text-sm font-semibold text-green-800">{process.timing}</p>
                  </div>
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">{process.action}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Types */}
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
              {t('seavoice.pages.solutions.outbound.subscriptionRenewals.subscriptionTypes.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('seavoice.pages.solutions.outbound.subscriptionRenewals.subscriptionTypes.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {subscriptionTypes.map((subscription, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{subscription.type}</h3>
                <p className="text-gray-600 mb-6">{subscription.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-3">{t('seavoice.pages.solutions.outbound.subscriptionRenewals.subscriptionTypes.renewalStrategies')}</h4>
                  <div className="space-y-2">
                    {subscription.strategies.map((strategy, strategyIndex) => (
                      <div key={strategyIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                        <span className="text-sm text-gray-700">{strategy}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Retention Tactics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {t('seavoice.pages.solutions.outbound.subscriptionRenewals.retention.title')}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {t('seavoice.pages.solutions.outbound.subscriptionRenewals.retention.description')}
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Calendar className="w-6 h-6 text-green-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{t('seavoice.pages.solutions.outbound.subscriptionRenewals.retention.optimalTiming.title')}</h3>
                    <p className="text-gray-600">{t('seavoice.pages.solutions.outbound.subscriptionRenewals.retention.optimalTiming.description')}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <BarChart3 className="w-6 h-6 text-green-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{t('seavoice.pages.solutions.outbound.subscriptionRenewals.retention.usageAnalytics.title')}</h3>
                    <p className="text-gray-600">{t('seavoice.pages.solutions.outbound.subscriptionRenewals.retention.usageAnalytics.description')}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-green-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{t('seavoice.pages.solutions.outbound.subscriptionRenewals.retention.segmentedCampaigns.title')}</h3>
                    <p className="text-gray-600">{t('seavoice.pages.solutions.outbound.subscriptionRenewals.retention.segmentedCampaigns.description')}</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('seavoice.pages.solutions.outbound.subscriptionRenewals.retention.tactics.title')}</h3>
              <div className="grid grid-cols-1 gap-3">
                {retentionTactics.map((tactic, index) => (
                  <div key={index} className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700 font-medium">{tactic}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-white rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">{t('seavoice.pages.solutions.outbound.subscriptionRenewals.retention.dashboard.title')}</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">{t('seavoice.pages.solutions.outbound.subscriptionRenewals.retention.dashboard.renewalsThisMonth')}</span>
                    <span className="font-semibold text-green-600">1,247</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">{t('seavoice.pages.solutions.outbound.subscriptionRenewals.retention.dashboard.renewalRate')}</span>
                    <span className="font-semibold text-green-600">85.3%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">{t('seavoice.pages.solutions.outbound.subscriptionRenewals.retention.dashboard.revenueRetained')}</span>
                    <span className="font-semibold text-green-600">$2.1M</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Metrics */}
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
              {t('seavoice.pages.solutions.outbound.subscriptionRenewals.benefits.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('seavoice.pages.solutions.outbound.subscriptionRenewals.benefits.subtitle')}
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
                <div className="text-4xl font-bold text-green-600 mb-4">{benefit.metric}</div>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">{t('seavoice.pages.solutions.outbound.subscriptionRenewals.cta.title')}</h2>
            <p className="text-xl mb-8 opacity-90">
              {t('seavoice.pages.solutions.outbound.subscriptionRenewals.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                {t('seavoice.pages.solutions.outbound.subscriptionRenewals.cta.primaryButton')}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                {t('seavoice.pages.solutions.outbound.subscriptionRenewals.cta.secondaryButton')}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SubscriptionRenewalsPage;
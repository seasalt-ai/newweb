
import { motion } from 'framer-motion';
import { Bell, Shield, Clock, Zap, CheckCircle, AlertTriangle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ProactiveSupportPage = () => {
  const { t } = useTranslation();
  const features = [
    {
      icon: Bell,
      title: t('seavoice.pages.solutions.outbound.proactiveSupport.features.proactiveNotifications.title'),
      description: t('seavoice.pages.solutions.outbound.proactiveSupport.features.proactiveNotifications.description'),
      benefits: [
        t('seavoice.pages.solutions.outbound.proactiveSupport.features.proactiveNotifications.benefit1'),
        t('seavoice.pages.solutions.outbound.proactiveSupport.features.proactiveNotifications.benefit2'),
        t('seavoice.pages.solutions.outbound.proactiveSupport.features.proactiveNotifications.benefit3')
      ]
    },
    {
      icon: Shield,
      title: t('seavoice.pages.solutions.outbound.proactiveSupport.features.issuePrevention.title'),
      description: t('seavoice.pages.solutions.outbound.proactiveSupport.features.issuePrevention.description'),
      benefits: [
        t('seavoice.pages.solutions.outbound.proactiveSupport.features.issuePrevention.benefit1'),
        t('seavoice.pages.solutions.outbound.proactiveSupport.features.issuePrevention.benefit2'),
        t('seavoice.pages.solutions.outbound.proactiveSupport.features.issuePrevention.benefit3')
      ]
    },
    {
      icon: Clock,
      title: t('seavoice.pages.solutions.outbound.proactiveSupport.features.timelyCommunication.title'),
      description: t('seavoice.pages.solutions.outbound.proactiveSupport.features.timelyCommunication.description'),
      benefits: [
        t('seavoice.pages.solutions.outbound.proactiveSupport.features.timelyCommunication.benefit1'),
        t('seavoice.pages.solutions.outbound.proactiveSupport.features.timelyCommunication.benefit2'),
        t('seavoice.pages.solutions.outbound.proactiveSupport.features.timelyCommunication.benefit3')
      ]
    }
  ];

  const notificationTypes = [
    {
      type: t('seavoice.pages.solutions.outbound.proactiveSupport.notificationTypes.serviceOutages.type'),
      description: t('seavoice.pages.solutions.outbound.proactiveSupport.notificationTypes.serviceOutages.description'),
      examples: [
        t('seavoice.pages.solutions.outbound.proactiveSupport.notificationTypes.serviceOutages.example1'),
        t('seavoice.pages.solutions.outbound.proactiveSupport.notificationTypes.serviceOutages.example2'),
        t('seavoice.pages.solutions.outbound.proactiveSupport.notificationTypes.serviceOutages.example3')
      ],
      urgency: t('seavoice.pages.solutions.outbound.proactiveSupport.notificationTypes.serviceOutages.urgency'),
      timing: t('seavoice.pages.solutions.outbound.proactiveSupport.notificationTypes.serviceOutages.timing')
    },
    {
      type: t('seavoice.pages.solutions.outbound.proactiveSupport.notificationTypes.accountChanges.type'),
      description: t('seavoice.pages.solutions.outbound.proactiveSupport.notificationTypes.accountChanges.description'),
      examples: [
        t('seavoice.pages.solutions.outbound.proactiveSupport.notificationTypes.accountChanges.example1'),
        t('seavoice.pages.solutions.outbound.proactiveSupport.notificationTypes.accountChanges.example2'),
        t('seavoice.pages.solutions.outbound.proactiveSupport.notificationTypes.accountChanges.example3')
      ],
      urgency: t('seavoice.pages.solutions.outbound.proactiveSupport.notificationTypes.accountChanges.urgency'),
      timing: t('seavoice.pages.solutions.outbound.proactiveSupport.notificationTypes.accountChanges.timing')
    },
    {
      type: t('seavoice.pages.solutions.outbound.proactiveSupport.notificationTypes.securityAlerts.type'),
      description: t('seavoice.pages.solutions.outbound.proactiveSupport.notificationTypes.securityAlerts.description'),
      examples: [
        t('seavoice.pages.solutions.outbound.proactiveSupport.notificationTypes.securityAlerts.example1'),
        t('seavoice.pages.solutions.outbound.proactiveSupport.notificationTypes.securityAlerts.example2'),
        t('seavoice.pages.solutions.outbound.proactiveSupport.notificationTypes.securityAlerts.example3')
      ],
      urgency: t('seavoice.pages.solutions.outbound.proactiveSupport.notificationTypes.securityAlerts.urgency'),
      timing: t('seavoice.pages.solutions.outbound.proactiveSupport.notificationTypes.securityAlerts.timing')
    },
    {
      type: t('seavoice.pages.solutions.outbound.proactiveSupport.notificationTypes.productUpdates.type'),
      description: t('seavoice.pages.solutions.outbound.proactiveSupport.notificationTypes.productUpdates.description'),
      examples: [
        t('seavoice.pages.solutions.outbound.proactiveSupport.notificationTypes.productUpdates.example1'),
        t('seavoice.pages.solutions.outbound.proactiveSupport.notificationTypes.productUpdates.example2'),
        t('seavoice.pages.solutions.outbound.proactiveSupport.notificationTypes.productUpdates.example3')
      ],
      urgency: t('seavoice.pages.solutions.outbound.proactiveSupport.notificationTypes.productUpdates.urgency'),
      timing: t('seavoice.pages.solutions.outbound.proactiveSupport.notificationTypes.productUpdates.timing')
    },
    {
      type: t('seavoice.pages.solutions.outbound.proactiveSupport.notificationTypes.billingNotifications.type'),
      description: t('seavoice.pages.solutions.outbound.proactiveSupport.notificationTypes.billingNotifications.description'),
      examples: [
        t('seavoice.pages.solutions.outbound.proactiveSupport.notificationTypes.billingNotifications.example1'),
        t('seavoice.pages.solutions.outbound.proactiveSupport.notificationTypes.billingNotifications.example2'),
        t('seavoice.pages.solutions.outbound.proactiveSupport.notificationTypes.billingNotifications.example3')
      ],
      urgency: t('seavoice.pages.solutions.outbound.proactiveSupport.notificationTypes.billingNotifications.urgency'),
      timing: t('seavoice.pages.solutions.outbound.proactiveSupport.notificationTypes.billingNotifications.timing')
    },
    {
      type: t('seavoice.pages.solutions.outbound.proactiveSupport.notificationTypes.deliveryUpdates.type'),
      description: t('seavoice.pages.solutions.outbound.proactiveSupport.notificationTypes.deliveryUpdates.description'),
      examples: [
        t('seavoice.pages.solutions.outbound.proactiveSupport.notificationTypes.deliveryUpdates.example1'),
        t('seavoice.pages.solutions.outbound.proactiveSupport.notificationTypes.deliveryUpdates.example2'),
        t('seavoice.pages.solutions.outbound.proactiveSupport.notificationTypes.deliveryUpdates.example3')
      ],
      urgency: t('seavoice.pages.solutions.outbound.proactiveSupport.notificationTypes.deliveryUpdates.urgency'),
      timing: t('seavoice.pages.solutions.outbound.proactiveSupport.notificationTypes.deliveryUpdates.timing')
    }
  ];

  const benefits = [
    { metric: t('seavoice.pages.solutions.outbound.proactiveSupport.benefits.reactiveCalls.metric'), description: t('seavoice.pages.solutions.outbound.proactiveSupport.benefits.reactiveCalls.description') },
    { metric: t('seavoice.pages.solutions.outbound.proactiveSupport.benefits.customerSatisfaction.metric'), description: t('seavoice.pages.solutions.outbound.proactiveSupport.benefits.customerSatisfaction.description') },
    { metric: t('seavoice.pages.solutions.outbound.proactiveSupport.benefits.customerChurn.metric'), description: t('seavoice.pages.solutions.outbound.proactiveSupport.benefits.customerChurn.description') },
    { metric: t('seavoice.pages.solutions.outbound.proactiveSupport.benefits.automatedMonitoring.metric'), description: t('seavoice.pages.solutions.outbound.proactiveSupport.benefits.automatedMonitoring.description') }
  ];

  const automationFeatures = [
    t('seavoice.pages.solutions.outbound.proactiveSupport.automationSection.features.realTimeMonitoring'),
    t('seavoice.pages.solutions.outbound.proactiveSupport.automationSection.features.intelligentPrioritization'),
    t('seavoice.pages.solutions.outbound.proactiveSupport.automationSection.features.preferenceManagement'),
    t('seavoice.pages.solutions.outbound.proactiveSupport.automationSection.features.multiChannelDelivery'),
    t('seavoice.pages.solutions.outbound.proactiveSupport.automationSection.features.escalationProtocols'),
    t('seavoice.pages.solutions.outbound.proactiveSupport.automationSection.features.performanceAnalytics')
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <Bell className="w-16 h-16 text-teal-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              {t('seavoice.pages.solutions.outbound.proactiveSupport.hero.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {t('seavoice.pages.solutions.outbound.proactiveSupport.hero.description')}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-700 transition-colors"
            >
              {t('seavoice.pages.solutions.outbound.proactiveSupport.hero.cta')}
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
              {t('seavoice.pages.solutions.outbound.proactiveSupport.features.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('seavoice.pages.solutions.outbound.proactiveSupport.features.subtitle')}
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
                <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-blue-600 rounded-lg flex items-center justify-center mb-6">
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

      {/* Notification Types */}
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
              {t('seavoice.pages.solutions.outbound.proactiveSupport.notificationTypes.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('seavoice.pages.solutions.outbound.proactiveSupport.notificationTypes.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {notificationTypes.map((notification, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900">{notification.type}</h3>
                  <div className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    notification.urgency === 'High' ? 'bg-red-100 text-red-800' :
                    notification.urgency === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {notification.urgency}
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4">{notification.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 text-sm mb-2">{t('seavoice.pages.solutions.outbound.proactiveSupport.labels.examples')}:</h4>
                  <div className="space-y-1">
                    {notification.examples.map((example, exampleIndex) => (
                      <div key={exampleIndex} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-teal-600 rounded-full mr-2"></div>
                        <span className="text-xs text-gray-700">{example}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between text-xs text-gray-500">
                  <span>{t('seavoice.pages.solutions.outbound.proactiveSupport.labels.timing')}: {notification.timing}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Features */}
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
                {t('seavoice.pages.solutions.outbound.proactiveSupport.automationSection.title')}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {t('seavoice.pages.solutions.outbound.proactiveSupport.automationSection.description')}
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Zap className="w-6 h-6 text-teal-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{t('seavoice.pages.solutions.outbound.proactiveSupport.automationSection.subFeatures.realTimeMonitoring.title')}</h3>
                    <p className="text-gray-600">{t('seavoice.pages.solutions.outbound.proactiveSupport.automationSection.subFeatures.realTimeMonitoring.description')}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <AlertTriangle className="w-6 h-6 text-teal-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{t('seavoice.pages.solutions.outbound.proactiveSupport.automationSection.subFeatures.smartPrioritization.title')}</h3>
                    <p className="text-gray-600">{t('seavoice.pages.solutions.outbound.proactiveSupport.automationSection.subFeatures.smartPrioritization.description')}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Shield className="w-6 h-6 text-teal-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{t('seavoice.pages.solutions.outbound.proactiveSupport.automationSection.subFeatures.customerPreferences.title')}</h3>
                    <p className="text-gray-600">{t('seavoice.pages.solutions.outbound.proactiveSupport.automationSection.subFeatures.customerPreferences.description')}</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('seavoice.pages.solutions.outbound.proactiveSupport.automationSection.featuresTitle')}</h3>
              <div className="grid grid-cols-1 gap-3">
                {automationFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-white rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">{t('seavoice.pages.solutions.outbound.proactiveSupport.automationSection.liveMonitoring.title')}</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">{t('seavoice.pages.solutions.outbound.proactiveSupport.automationSection.liveMonitoring.activeMonitors')}</span>
                    <span className="font-semibold text-teal-600">{t('seavoice.pages.solutions.outbound.proactiveSupport.automationSection.liveMonitoring.activeMonitorsValue')}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">{t('seavoice.pages.solutions.outbound.proactiveSupport.automationSection.liveMonitoring.notificationsSent')}</span>
                    <span className="font-semibold text-blue-600">{t('seavoice.pages.solutions.outbound.proactiveSupport.automationSection.liveMonitoring.notificationsSentValue')}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">{t('seavoice.pages.solutions.outbound.proactiveSupport.automationSection.liveMonitoring.issuesPrevented')}</span>
                    <span className="font-semibold text-green-600">{t('seavoice.pages.solutions.outbound.proactiveSupport.automationSection.liveMonitoring.issuesPreventedValue')}</span>
                  </div>
                </div>
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
              {t('seavoice.pages.solutions.outbound.proactiveSupport.benefits.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('seavoice.pages.solutions.outbound.proactiveSupport.benefits.subtitle')}
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
                <div className="text-4xl font-bold text-teal-600 mb-4">{benefit.metric}</div>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">{t('seavoice.pages.solutions.outbound.proactiveSupport.cta.title')}</h2>
            <p className="text-xl mb-8 opacity-90">
              {t('seavoice.pages.solutions.outbound.proactiveSupport.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                {t('seavoice.pages.solutions.outbound.proactiveSupport.cta.startProactiveSupport')}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors"
              >
                {t('seavoice.pages.solutions.outbound.proactiveSupport.cta.seeDemo')}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProactiveSupportPage;
import { motion } from 'framer-motion';
import { CreditCard, Shield, Clock, BarChart3, CheckCircle, Lock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const PaymentProcessingPage = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: CreditCard,
      title: t('seavoice.solutions.inbound.paymentProcessing.features.securePayment.title'),
      description: t('seavoice.solutions.inbound.paymentProcessing.features.securePayment.description'),
      benefits: [
        t('seavoice.solutions.inbound.paymentProcessing.features.securePayment.benefit1'),
        t('seavoice.solutions.inbound.paymentProcessing.features.securePayment.benefit2'),
        t('seavoice.solutions.inbound.paymentProcessing.features.securePayment.benefit3')
      ]
    },
    {
      icon: Shield,
      title: t('seavoice.solutions.inbound.paymentProcessing.features.fraudProtection.title'),
      description: t('seavoice.solutions.inbound.paymentProcessing.features.fraudProtection.description'),
      benefits: [
        t('seavoice.solutions.inbound.paymentProcessing.features.fraudProtection.benefit1'),
        t('seavoice.solutions.inbound.paymentProcessing.features.fraudProtection.benefit2'),
        t('seavoice.solutions.inbound.paymentProcessing.features.fraudProtection.benefit3')
      ]
    },
    {
      icon: Clock,
      title: t('seavoice.solutions.inbound.paymentProcessing.features.instantProcessing.title'),
      description: t('seavoice.solutions.inbound.paymentProcessing.features.instantProcessing.description'),
      benefits: [
        t('seavoice.solutions.inbound.paymentProcessing.features.instantProcessing.benefit1'),
        t('seavoice.solutions.inbound.paymentProcessing.features.instantProcessing.benefit2'),
        t('seavoice.solutions.inbound.paymentProcessing.features.instantProcessing.benefit3')
      ]
    }
  ];

  const paymentMethods = [
    {
      method: t('seavoice.solutions.inbound.paymentProcessing.paymentMethods.creditCards.method'),
      description: t('seavoice.solutions.inbound.paymentProcessing.paymentMethods.creditCards.description'),
      features: [
        t('seavoice.solutions.inbound.paymentProcessing.paymentMethods.creditCards.feature1'),
        t('seavoice.solutions.inbound.paymentProcessing.paymentMethods.creditCards.feature2'),
        t('seavoice.solutions.inbound.paymentProcessing.paymentMethods.creditCards.feature3')
      ]
    },
    {
      method: t('seavoice.solutions.inbound.paymentProcessing.paymentMethods.debitCards.method'),
      description: t('seavoice.solutions.inbound.paymentProcessing.paymentMethods.debitCards.description'),
      features: [
        t('seavoice.solutions.inbound.paymentProcessing.paymentMethods.debitCards.feature1'),
        t('seavoice.solutions.inbound.paymentProcessing.paymentMethods.debitCards.feature2'),
        t('seavoice.solutions.inbound.paymentProcessing.paymentMethods.debitCards.feature3')
      ]
    },
    {
      method: t('seavoice.solutions.inbound.paymentProcessing.paymentMethods.bankTransfers.method'),
      description: t('seavoice.solutions.inbound.paymentProcessing.paymentMethods.bankTransfers.description'),
      features: [
        t('seavoice.solutions.inbound.paymentProcessing.paymentMethods.bankTransfers.feature1'),
        t('seavoice.solutions.inbound.paymentProcessing.paymentMethods.bankTransfers.feature2'),
        t('seavoice.solutions.inbound.paymentProcessing.paymentMethods.bankTransfers.feature3')
      ]
    },
    {
      method: t('seavoice.solutions.inbound.paymentProcessing.paymentMethods.digitalWallets.method'),
      description: t('seavoice.solutions.inbound.paymentProcessing.paymentMethods.digitalWallets.description'),
      features: [
        t('seavoice.solutions.inbound.paymentProcessing.paymentMethods.digitalWallets.feature1'),
        t('seavoice.solutions.inbound.paymentProcessing.paymentMethods.digitalWallets.feature2'),
        t('seavoice.solutions.inbound.paymentProcessing.paymentMethods.digitalWallets.feature3')
      ]
    }
  ];

  const benefits = [
    { metric: t('seavoice.solutions.inbound.paymentProcessing.benefits.uptime.metric'), description: t('seavoice.solutions.inbound.paymentProcessing.benefits.uptime.description') },
    { metric: t('seavoice.solutions.inbound.paymentProcessing.benefits.transactionTime.metric'), description: t('seavoice.solutions.inbound.paymentProcessing.benefits.transactionTime.description') },
    { metric: t('seavoice.solutions.inbound.paymentProcessing.benefits.compliance.metric'), description: t('seavoice.solutions.inbound.paymentProcessing.benefits.compliance.description') },
    { metric: t('seavoice.solutions.inbound.paymentProcessing.benefits.fraudRate.metric'), description: t('seavoice.solutions.inbound.paymentProcessing.benefits.fraudRate.description') }
  ];

  const securityFeatures = [
    t('seavoice.solutions.inbound.paymentProcessing.security.feature1'),
    t('seavoice.solutions.inbound.paymentProcessing.security.feature2'),
    t('seavoice.solutions.inbound.paymentProcessing.security.feature3'),
    t('seavoice.solutions.inbound.paymentProcessing.security.feature4'),
    t('seavoice.solutions.inbound.paymentProcessing.security.feature5'),
    t('seavoice.solutions.inbound.paymentProcessing.security.feature6')
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <CreditCard className="w-16 h-16 text-emerald-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              {t('seavoice.solutions.inbound.paymentProcessing.hero.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {t('seavoice.solutions.inbound.paymentProcessing.hero.description')}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-700 transition-colors"
            >
              {t('seavoice.solutions.inbound.paymentProcessing.hero.cta')}
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
              {t('seavoice.solutions.inbound.paymentProcessing.features.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('seavoice.solutions.inbound.paymentProcessing.features.subtitle')}
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
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-lg flex items-center justify-center mb-6">
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

      {/* Payment Methods */}
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
              {t('seavoice.solutions.inbound.paymentProcessing.paymentMethods.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('seavoice.solutions.inbound.paymentProcessing.paymentMethods.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {paymentMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{method.method}</h3>
                <p className="text-gray-600 mb-6">{method.description}</p>
                <div className="space-y-2">
                  {method.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
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
                {t('seavoice.solutions.inbound.paymentProcessing.security.title')}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {t('seavoice.solutions.inbound.paymentProcessing.security.description')}
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Lock className="w-6 h-6 text-emerald-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{t('seavoice.solutions.inbound.paymentProcessing.security.endToEndEncryption.title')}</h3>
                    <p className="text-gray-600">{t('seavoice.solutions.inbound.paymentProcessing.security.endToEndEncryption.description')}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Shield className="w-6 h-6 text-emerald-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{t('seavoice.solutions.inbound.paymentProcessing.security.pciCompliance.title')}</h3>
                    <p className="text-gray-600">{t('seavoice.solutions.inbound.paymentProcessing.security.pciCompliance.description')}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <BarChart3 className="w-6 h-6 text-emerald-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{t('seavoice.solutions.inbound.paymentProcessing.security.realTimeMonitoring.title')}</h3>
                    <p className="text-gray-600">{t('seavoice.solutions.inbound.paymentProcessing.security.realTimeMonitoring.description')}</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('seavoice.solutions.inbound.paymentProcessing.security.featuresTitle')}</h3>
              <div className="grid grid-cols-1 gap-3">
                {securityFeatures.map((feature, index) => (
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
              {t('seavoice.solutions.inbound.paymentProcessing.benefits.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('seavoice.solutions.inbound.paymentProcessing.benefits.subtitle')}
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
                <div className="text-4xl font-bold text-emerald-600 mb-4">{benefit.metric}</div>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">{t('seavoice.solutions.inbound.paymentProcessing.cta.title')}</h2>
            <p className="text-xl mb-8 opacity-90">
              {t('seavoice.solutions.inbound.paymentProcessing.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-emerald-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                {t('seavoice.solutions.inbound.paymentProcessing.cta.primaryButton')}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors"
              >
                {t('seavoice.solutions.inbound.paymentProcessing.cta.secondaryButton')}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PaymentProcessingPage;

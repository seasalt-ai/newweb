
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { PhoneIncoming, PhoneOutgoing, ArrowRight, Clock, Users, Shield, Heart, Zap, CreditCard } from 'lucide-react';

const SolutionsPage = () => {
  const { t } = useTranslation();
  
  const inboundSolutions = [
    {
      title: t('seavoice.pages.solutions.inbound.virtualAssistant.title'),
      description: t('seavoice.pages.solutions.inbound.virtualAssistant.description'),
      icon: Clock,
      link: '/solutions/inbound/virtual-assistant',
      benefits: [t('seavoice.pages.solutions.inbound.virtualAssistant.benefit1'), t('seavoice.pages.solutions.inbound.virtualAssistant.benefit2'), t('seavoice.pages.solutions.inbound.virtualAssistant.benefit3')]
    },
    {
      title: t('seavoice.pages.solutions.inbound.smartCallTransfer.title'),
      description: t('seavoice.pages.solutions.inbound.smartCallTransfer.description'),
      icon: PhoneIncoming,
      link: '/solutions/inbound/call-transfer',
      benefits: [t('seavoice.pages.solutions.inbound.smartCallTransfer.benefit1'), t('seavoice.pages.solutions.inbound.smartCallTransfer.benefit2'), t('seavoice.pages.solutions.inbound.smartCallTransfer.benefit3')]
    },
    {
      title: t('seavoice.pages.solutions.inbound.ivrReplacement.title'),
      description: t('seavoice.pages.solutions.inbound.ivrReplacement.description'),
      icon: Zap,
      link: '/solutions/inbound/ivr-replacement',
      benefits: [t('seavoice.pages.solutions.inbound.ivrReplacement.benefit1'), t('seavoice.pages.solutions.inbound.ivrReplacement.benefit2'), t('seavoice.pages.solutions.inbound.ivrReplacement.benefit3')]
    },
    {
      title: t('seavoice.pages.solutions.inbound.mentalHealth.title'),
      description: t('seavoice.pages.solutions.inbound.mentalHealth.description'),
      icon: Heart,
      link: '/solutions/inbound/mental-health',
      benefits: [t('seavoice.pages.solutions.inbound.mentalHealth.benefit1'), t('seavoice.pages.solutions.inbound.mentalHealth.benefit2'), t('seavoice.pages.solutions.inbound.mentalHealth.benefit3')]
    },
    {
      title: t('seavoice.pages.solutions.inbound.scamShield.title'),
      description: t('seavoice.pages.solutions.inbound.scamShield.description'),
      icon: Shield,
      link: '/solutions/inbound/scam-shield',
      benefits: [t('seavoice.pages.solutions.inbound.scamShield.benefit1'), t('seavoice.pages.solutions.inbound.scamShield.benefit2'), t('seavoice.pages.solutions.inbound.scamShield.benefit3')]
    },
    {
      title: t('seavoice.pages.solutions.inbound.technicalSupport.title'),
      description: t('seavoice.pages.solutions.inbound.technicalSupport.description'),
      icon: Zap,
      link: '/solutions/inbound/technical-support',
      benefits: [t('seavoice.pages.solutions.inbound.technicalSupport.benefit1'), t('seavoice.pages.solutions.inbound.technicalSupport.benefit2'), t('seavoice.pages.solutions.inbound.technicalSupport.benefit3')]
    },
    {
      title: t('seavoice.pages.solutions.inbound.orderTracking.title'),
      description: t('seavoice.pages.solutions.inbound.orderTracking.description'),
      icon: PhoneIncoming,
      link: '/solutions/inbound/order-tracking',
      benefits: [t('seavoice.pages.solutions.inbound.orderTracking.benefit1'), t('seavoice.pages.solutions.inbound.orderTracking.benefit2'), t('seavoice.pages.solutions.inbound.orderTracking.benefit3')]
    },
    {
      title: t('seavoice.pages.solutions.inbound.paymentProcessing.title'),
      description: t('seavoice.pages.solutions.inbound.paymentProcessing.description'),
      icon: CreditCard,
      link: '/solutions/inbound/payment-processing',
      benefits: [t('seavoice.pages.solutions.inbound.paymentProcessing.benefit1'), t('seavoice.pages.solutions.inbound.paymentProcessing.benefit2'), t('seavoice.pages.solutions.inbound.paymentProcessing.benefit3')]
    },
    {
      title: t('seavoice.pages.solutions.inbound.appointmentBooking.title'),
      description: t('seavoice.pages.solutions.inbound.appointmentBooking.description'),
      icon: Clock,
      link: '/solutions/inbound/appointment-booking',
      benefits: [t('seavoice.pages.solutions.inbound.appointmentBooking.benefit1'), t('seavoice.pages.solutions.inbound.appointmentBooking.benefit2'), t('seavoice.pages.solutions.inbound.appointmentBooking.benefit3')]
    }
  ];

  const outboundSolutions = [
    {
      title: t('seavoice.pages.solutions.outbound.leadGeneration.title'),
      description: t('seavoice.pages.solutions.outbound.leadGeneration.description'),
      icon: Users,
      link: '/solutions/outbound/lead-generation',
      benefits: [t('seavoice.pages.solutions.outbound.leadGeneration.benefit1'), t('seavoice.pages.solutions.outbound.leadGeneration.benefit2'), t('seavoice.pages.solutions.outbound.leadGeneration.benefit3')]
    },
    {
      title: t('seavoice.pages.solutions.outbound.collections.title'),
      description: t('seavoice.pages.solutions.outbound.collections.description'),
      icon: CreditCard,
      link: '/solutions/outbound/collections',
      benefits: [t('seavoice.pages.solutions.outbound.collections.benefit1'), t('seavoice.pages.solutions.outbound.collections.benefit2'), t('seavoice.pages.solutions.outbound.collections.benefit3')]
    },
    {
      title: t('seavoice.pages.solutions.outbound.reactivation.title'),
      description: t('seavoice.pages.solutions.outbound.reactivation.description'),
      icon: Users,
      link: '/solutions/outbound/reactivation',
      benefits: [t('seavoice.pages.solutions.outbound.reactivation.benefit1'), t('seavoice.pages.solutions.outbound.reactivation.benefit2'), t('seavoice.pages.solutions.outbound.reactivation.benefit3')]
    },
    {
      title: t('seavoice.pages.solutions.outbound.seniorChecks.title'),
      description: t('seavoice.pages.solutions.outbound.seniorChecks.description'),
      icon: Heart,
      link: '/solutions/outbound/senior-checks',
      benefits: [t('seavoice.pages.solutions.outbound.seniorChecks.benefit1'), t('seavoice.pages.solutions.outbound.seniorChecks.benefit2'), t('seavoice.pages.solutions.outbound.seniorChecks.benefit3')]
    },
    {
      title: t('seavoice.pages.solutions.outbound.campaigns.title'),
      description: t('seavoice.pages.solutions.outbound.campaigns.description'),
      icon: PhoneOutgoing,
      link: '/solutions/outbound/campaigns',
      benefits: [t('seavoice.pages.solutions.outbound.campaigns.benefit1'), t('seavoice.pages.solutions.outbound.campaigns.benefit2'), t('seavoice.pages.solutions.outbound.campaigns.benefit3')]
    },
    {
      title: t('seavoice.pages.solutions.outbound.proactiveSupport.title'),
      description: t('seavoice.pages.solutions.outbound.proactiveSupport.description'),
      icon: Zap,
      link: '/solutions/outbound/proactive-support',
      benefits: [t('seavoice.pages.solutions.outbound.proactiveSupport.benefit1'), t('seavoice.pages.solutions.outbound.proactiveSupport.benefit2'), t('seavoice.pages.solutions.outbound.proactiveSupport.benefit3')]
    },
    {
      title: t('seavoice.pages.solutions.outbound.renewals.title'),
      description: t('seavoice.pages.solutions.outbound.renewals.description'),
      icon: Clock,
      link: '/solutions/outbound/renewals',
      benefits: [t('seavoice.pages.solutions.outbound.renewals.benefit1'), t('seavoice.pages.solutions.outbound.renewals.benefit2'), t('seavoice.pages.solutions.outbound.renewals.benefit3')]
    },
    {
      title: t('seavoice.pages.solutions.outbound.surveys.title'),
      description: t('seavoice.pages.solutions.outbound.surveys.description'),
      icon: Users,
      link: '/solutions/outbound/surveys',
      benefits: [t('seavoice.pages.solutions.outbound.surveys.benefit1'), t('seavoice.pages.solutions.outbound.surveys.benefit2'), t('seavoice.pages.solutions.outbound.surveys.benefit3')]
    },
    {
      title: t('seavoice.pages.solutions.outbound.fraudAlerts.title'),
      description: t('seavoice.pages.solutions.outbound.fraudAlerts.description'),
      icon: Shield,
      link: '/solutions/outbound/fraud-alerts',
      benefits: [t('seavoice.pages.solutions.outbound.fraudAlerts.benefit1'), t('seavoice.pages.solutions.outbound.fraudAlerts.benefit2'), t('seavoice.pages.solutions.outbound.fraudAlerts.benefit3')]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              {t('seavoice.pages.solutions.hero.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {t('seavoice.pages.solutions.hero.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Inbound Solutions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <PhoneIncoming className="w-12 h-12 text-blue-600 mr-4" />
              <h2 className="text-4xl font-bold text-gray-900">{t('seavoice.pages.solutions.inbound.header')}</h2>
            </div>
            <p className="text-xl text-gray-600">
              {t('seavoice.pages.solutions.inbound.description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {inboundSolutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link to={solution.link}>
                  <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group-hover:border-blue-300 h-full">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center mb-6">
                      <solution.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{solution.description}</p>
                    <div className="space-y-2 mb-6">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                          <span className="text-sm text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                      {t('seavoice.pages.solutions.learnMore')} <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Outbound Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <PhoneOutgoing className="w-12 h-12 text-teal-600 mr-4" />
              <h2 className="text-4xl font-bold text-gray-900">{t('seavoice.pages.solutions.outbound.header')}</h2>
            </div>
            <p className="text-xl text-gray-600">
              {t('seavoice.pages.solutions.outbound.description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {outboundSolutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link to={solution.link}>
                  <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group-hover:border-teal-300 h-full">
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                      <solution.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{solution.description}</p>
                    <div className="space-y-2 mb-6">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                          <span className="text-sm text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center text-teal-600 font-semibold group-hover:translate-x-2 transition-transform">
                      {t('seavoice.pages.solutions.learnMore')} <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">{t('seavoice.pages.solutions.cta.title')}</h2>
            <p className="text-xl mb-8 opacity-90">
              {t('seavoice.pages.solutions.cta.description')}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              {t('seavoice.pages.solutions.cta.button')}
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;
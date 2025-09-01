
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, BarChart3, CheckCircle, Bell } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const AppointmentBookingPage = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: Calendar,
      title: t('seavoice.solutions.inbound.appointmentBooking.features.intelligentScheduling.title'),
      description: t('seavoice.solutions.inbound.appointmentBooking.features.intelligentScheduling.description'),
      benefits: [
        t('seavoice.solutions.inbound.appointmentBooking.features.intelligentScheduling.benefit1'),
        t('seavoice.solutions.inbound.appointmentBooking.features.intelligentScheduling.benefit2'),
        t('seavoice.solutions.inbound.appointmentBooking.features.intelligentScheduling.benefit3')
      ]
    },
    {
      icon: Clock,
      title: t('seavoice.solutions.inbound.appointmentBooking.features.automatedReminders.title'),
      description: t('seavoice.solutions.inbound.appointmentBooking.features.automatedReminders.description'),
      benefits: [
        t('seavoice.solutions.inbound.appointmentBooking.features.automatedReminders.benefit1'),
        t('seavoice.solutions.inbound.appointmentBooking.features.automatedReminders.benefit2'),
        t('seavoice.solutions.inbound.appointmentBooking.features.automatedReminders.benefit3')
      ]
    },
    {
      icon: Users,
      title: t('seavoice.solutions.inbound.appointmentBooking.features.multiProviderSupport.title'),
      description: t('seavoice.solutions.inbound.appointmentBooking.features.multiProviderSupport.description'),
      benefits: [
        t('seavoice.solutions.inbound.appointmentBooking.features.multiProviderSupport.benefit1'),
        t('seavoice.solutions.inbound.appointmentBooking.features.multiProviderSupport.benefit2'),
        t('seavoice.solutions.inbound.appointmentBooking.features.multiProviderSupport.benefit3')
      ]
    }
  ];

  const bookingCapabilities = [
    {
      capability: t('seavoice.solutions.inbound.appointmentBooking.capabilities.appointmentScheduling.capability'),
      description: t('seavoice.solutions.inbound.appointmentBooking.capabilities.appointmentScheduling.description'),
      features: [
        t('seavoice.solutions.inbound.appointmentBooking.capabilities.appointmentScheduling.feature1'),
        t('seavoice.solutions.inbound.appointmentBooking.capabilities.appointmentScheduling.feature2'),
        t('seavoice.solutions.inbound.appointmentBooking.capabilities.appointmentScheduling.feature3')
      ]
    },
    {
      capability: t('seavoice.solutions.inbound.appointmentBooking.capabilities.rescheduling.capability'),
      description: t('seavoice.solutions.inbound.appointmentBooking.capabilities.rescheduling.description'),
      features: [
        t('seavoice.solutions.inbound.appointmentBooking.capabilities.rescheduling.feature1'),
        t('seavoice.solutions.inbound.appointmentBooking.capabilities.rescheduling.feature2'),
        t('seavoice.solutions.inbound.appointmentBooking.capabilities.rescheduling.feature3')
      ]
    },
    {
      capability: t('seavoice.solutions.inbound.appointmentBooking.capabilities.cancellationManagement.capability'),
      description: t('seavoice.solutions.inbound.appointmentBooking.capabilities.cancellationManagement.description'),
      features: [
        t('seavoice.solutions.inbound.appointmentBooking.capabilities.cancellationManagement.feature1'),
        t('seavoice.solutions.inbound.appointmentBooking.capabilities.cancellationManagement.feature2'),
        t('seavoice.solutions.inbound.appointmentBooking.capabilities.cancellationManagement.feature3')
      ]
    },
    {
      capability: t('seavoice.solutions.inbound.appointmentBooking.capabilities.reminderSystem.capability'),
      description: t('seavoice.solutions.inbound.appointmentBooking.capabilities.reminderSystem.description'),
      features: [
        t('seavoice.solutions.inbound.appointmentBooking.capabilities.reminderSystem.feature1'),
        t('seavoice.solutions.inbound.appointmentBooking.capabilities.reminderSystem.feature2'),
        t('seavoice.solutions.inbound.appointmentBooking.capabilities.reminderSystem.feature3')
      ]
    }
  ];

  const benefits = [
    { 
      metric: t('seavoice.solutions.inbound.appointmentBooking.benefits.noShowReduction.metric'), 
      description: t('seavoice.solutions.inbound.appointmentBooking.benefits.noShowReduction.description') 
    },
    { 
      metric: t('seavoice.solutions.inbound.appointmentBooking.benefits.availabilityWindow.metric'), 
      description: t('seavoice.solutions.inbound.appointmentBooking.benefits.availabilityWindow.description') 
    },
    { 
      metric: t('seavoice.solutions.inbound.appointmentBooking.benefits.bookingAccuracy.metric'), 
      description: t('seavoice.solutions.inbound.appointmentBooking.benefits.bookingAccuracy.description') 
    },
    { 
      metric: t('seavoice.solutions.inbound.appointmentBooking.benefits.workloadReduction.metric'), 
      description: t('seavoice.solutions.inbound.appointmentBooking.benefits.workloadReduction.description') 
    }
  ];

  const industries = [
    {
      industry: t('seavoice.solutions.inbound.appointmentBooking.industries.healthcare.industry'),
      description: t('seavoice.solutions.inbound.appointmentBooking.industries.healthcare.description'),
      benefits: [
        t('seavoice.solutions.inbound.appointmentBooking.industries.healthcare.benefit1'),
        t('seavoice.solutions.inbound.appointmentBooking.industries.healthcare.benefit2'),
        t('seavoice.solutions.inbound.appointmentBooking.industries.healthcare.benefit3')
      ]
    },
    {
      industry: t('seavoice.solutions.inbound.appointmentBooking.industries.beautyWellness.industry'),
      description: t('seavoice.solutions.inbound.appointmentBooking.industries.beautyWellness.description'),
      benefits: [
        t('seavoice.solutions.inbound.appointmentBooking.industries.beautyWellness.benefit1'),
        t('seavoice.solutions.inbound.appointmentBooking.industries.beautyWellness.benefit2'),
        t('seavoice.solutions.inbound.appointmentBooking.industries.beautyWellness.benefit3')
      ]
    },
    {
      industry: t('seavoice.solutions.inbound.appointmentBooking.industries.professionalServices.industry'),
      description: t('seavoice.solutions.inbound.appointmentBooking.industries.professionalServices.description'),
      benefits: [
        t('seavoice.solutions.inbound.appointmentBooking.industries.professionalServices.benefit1'),
        t('seavoice.solutions.inbound.appointmentBooking.industries.professionalServices.benefit2'),
        t('seavoice.solutions.inbound.appointmentBooking.industries.professionalServices.benefit3')
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <Calendar className="w-16 h-16 text-purple-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              {t('seavoice.solutions.inbound.appointmentBooking.hero.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {t('seavoice.solutions.inbound.appointmentBooking.hero.description')}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              {t('seavoice.solutions.inbound.appointmentBooking.hero.cta')}
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
              {t('seavoice.solutions.inbound.appointmentBooking.features.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('seavoice.solutions.inbound.appointmentBooking.features.subtitle')}
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
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-6">
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

      {/* Booking Capabilities */}
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
              {t('seavoice.solutions.inbound.appointmentBooking.capabilities.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('seavoice.solutions.inbound.appointmentBooking.capabilities.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bookingCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{capability.capability}</h3>
                <p className="text-gray-600 mb-6">{capability.description}</p>
                <div className="space-y-2">
                  {capability.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Applications */}
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
              {t('seavoice.solutions.inbound.appointmentBooking.industries.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('seavoice.solutions.inbound.appointmentBooking.industries.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{industry.industry}</h3>
                <p className="text-gray-600 mb-6">{industry.description}</p>
                <div className="space-y-2">
                  {industry.benefits.map((benefit, benefitIndex) => (
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

      {/* Reminder System */}
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
                {t('seavoice.solutions.inbound.appointmentBooking.reminderSection.title')}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {t('seavoice.solutions.inbound.appointmentBooking.reminderSection.description')}
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Bell className="w-6 h-6 text-purple-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{t('seavoice.solutions.inbound.appointmentBooking.reminderSection.multiChannelReminders.title')}</h3>
                    <p className="text-gray-600">{t('seavoice.solutions.inbound.appointmentBooking.reminderSection.multiChannelReminders.description')}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-purple-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{t('seavoice.solutions.inbound.appointmentBooking.reminderSection.optimalTiming.title')}</h3>
                    <p className="text-gray-600">{t('seavoice.solutions.inbound.appointmentBooking.reminderSection.optimalTiming.description')}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <BarChart3 className="w-6 h-6 text-purple-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{t('seavoice.solutions.inbound.appointmentBooking.reminderSection.performanceTracking.title')}</h3>
                    <p className="text-gray-600">{t('seavoice.solutions.inbound.appointmentBooking.reminderSection.performanceTracking.description')}</p>
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('seavoice.solutions.inbound.appointmentBooking.reminderSection.reminderTimeline.title')}</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center mr-4 text-sm font-bold">
                    {t('seavoice.solutions.inbound.appointmentBooking.reminderSection.timeline.sevenDays')}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('seavoice.solutions.inbound.appointmentBooking.reminderSection.timeline.initialConfirmation.title')}</h4>
                    <p className="text-gray-600 text-sm">{t('seavoice.solutions.inbound.appointmentBooking.reminderSection.timeline.initialConfirmation.description')}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center mr-4 text-sm font-bold">
                    {t('seavoice.solutions.inbound.appointmentBooking.reminderSection.timeline.oneDay')}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('seavoice.solutions.inbound.appointmentBooking.reminderSection.timeline.dayBefore.title')}</h4>
                    <p className="text-gray-600 text-sm">{t('seavoice.solutions.inbound.appointmentBooking.reminderSection.timeline.dayBefore.description')}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center mr-4 text-sm font-bold">
                    {t('seavoice.solutions.inbound.appointmentBooking.reminderSection.timeline.twoHours')}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('seavoice.solutions.inbound.appointmentBooking.reminderSection.timeline.lastMinute.title')}</h4>
                    <p className="text-gray-600 text-sm">{t('seavoice.solutions.inbound.appointmentBooking.reminderSection.timeline.lastMinute.description')}</p>
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
              {t('seavoice.solutions.inbound.appointmentBooking.benefits.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('seavoice.solutions.inbound.appointmentBooking.benefits.subtitle')}
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
                <div className="text-4xl font-bold text-purple-600 mb-4">{benefit.metric}</div>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">{t('seavoice.solutions.inbound.appointmentBooking.cta.title')}</h2>
            <p className="text-xl mb-8 opacity-90">
              {t('seavoice.solutions.inbound.appointmentBooking.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                {t('seavoice.solutions.inbound.appointmentBooking.cta.startFreeTrial')}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                {t('seavoice.solutions.inbound.appointmentBooking.cta.scheduleDemo')}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AppointmentBookingPage;
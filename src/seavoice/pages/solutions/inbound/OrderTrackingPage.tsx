
import { motion } from 'framer-motion';
import { Package, MapPin, Clock, BarChart3, CheckCircle, Truck } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import SEOHelmet from '../../../../components/SEOHelmet';
import { getSEOData, getCanonicalUrl } from '../../../../utils/seo';

const OrderTrackingPage = () => {
  const { t, i18n } = useTranslation();
  
  // Generate SEO data using standardized utility
  const seoData = getSEOData(t, 'seavoice.pages.solutions.inbound.orderTracking', {
    canonicalUrl: getCanonicalUrl(i18n.language, '/seavoice/solutions/inbound/order-tracking')
  });
  
  const features = [
    {
      icon: Package,
      title: t('seavoice.pages.solutions.inbound.orderTracking.features.realTimeStatus.title'),
      description: t('seavoice.pages.solutions.inbound.orderTracking.features.realTimeStatus.description'),
      benefits: [
        t('seavoice.pages.solutions.inbound.orderTracking.features.realTimeStatus.benefits.liveTracking'),
        t('seavoice.pages.solutions.inbound.orderTracking.features.realTimeStatus.benefits.deliveryEstimates'),
        t('seavoice.pages.solutions.inbound.orderTracking.features.realTimeStatus.benefits.statusNotifications')
      ]
    },
    {
      icon: MapPin,
      title: t('seavoice.pages.solutions.inbound.orderTracking.features.locationTracking.title'),
      description: t('seavoice.pages.solutions.inbound.orderTracking.features.locationTracking.description'),
      benefits: [
        t('seavoice.pages.solutions.inbound.orderTracking.features.locationTracking.benefits.gpsTracking'),
        t('seavoice.pages.solutions.inbound.orderTracking.features.locationTracking.benefits.routeOptimization'),
        t('seavoice.pages.solutions.inbound.orderTracking.features.locationTracking.benefits.deliveryMapping')
      ]
    },
    {
      icon: Clock,
      title: t('seavoice.pages.solutions.inbound.orderTracking.features.proactiveUpdates.title'),
      description: t('seavoice.pages.solutions.inbound.orderTracking.features.proactiveUpdates.description'),
      benefits: [
        t('seavoice.pages.solutions.inbound.orderTracking.features.proactiveUpdates.benefits.delayNotifications'),
        t('seavoice.pages.solutions.inbound.orderTracking.features.proactiveUpdates.benefits.scheduleChanges'),
        t('seavoice.pages.solutions.inbound.orderTracking.features.proactiveUpdates.benefits.deliveryConfirmations')
      ]
    }
  ];

  const trackingCapabilities = [
    {
      stage: t('seavoice.pages.solutions.inbound.orderTracking.tracking.stages.orderPlaced.title'),
      description: t('seavoice.pages.solutions.inbound.orderTracking.tracking.stages.orderPlaced.description'),
      information: [
        t('seavoice.pages.solutions.inbound.orderTracking.tracking.stages.orderPlaced.info.orderNumber'),
        t('seavoice.pages.solutions.inbound.orderTracking.tracking.stages.orderPlaced.info.itemsOrdered'),
        t('seavoice.pages.solutions.inbound.orderTracking.tracking.stages.orderPlaced.info.processingTimeline')
      ]
    },
    {
      stage: t('seavoice.pages.solutions.inbound.orderTracking.tracking.stages.inTransit.title'),
      description: t('seavoice.pages.solutions.inbound.orderTracking.tracking.stages.inTransit.description'),
      information: [
        t('seavoice.pages.solutions.inbound.orderTracking.tracking.stages.inTransit.info.currentLocation'),
        t('seavoice.pages.solutions.inbound.orderTracking.tracking.stages.inTransit.info.expectedDelivery'),
        t('seavoice.pages.solutions.inbound.orderTracking.tracking.stages.inTransit.info.carrierInformation')
      ]
    },
    {
      stage: t('seavoice.pages.solutions.inbound.orderTracking.tracking.stages.outForDelivery.title'),
      description: t('seavoice.pages.solutions.inbound.orderTracking.tracking.stages.outForDelivery.description'),
      information: [
        t('seavoice.pages.solutions.inbound.orderTracking.tracking.stages.outForDelivery.info.deliveryWindow'),
        t('seavoice.pages.solutions.inbound.orderTracking.tracking.stages.outForDelivery.info.driverContact'),
        t('seavoice.pages.solutions.inbound.orderTracking.tracking.stages.outForDelivery.info.specialInstructions')
      ]
    },
    {
      stage: t('seavoice.pages.solutions.inbound.orderTracking.tracking.stages.delivered.title'),
      description: t('seavoice.pages.solutions.inbound.orderTracking.tracking.stages.delivered.description'),
      information: [
        t('seavoice.pages.solutions.inbound.orderTracking.tracking.stages.delivered.info.deliveryTime'),
        t('seavoice.pages.solutions.inbound.orderTracking.tracking.stages.delivered.info.deliveryLocation'),
        t('seavoice.pages.solutions.inbound.orderTracking.tracking.stages.delivered.info.signatureConfirmation')
      ]
    }
  ];

  const benefits = [
    { 
      metric: t('seavoice.pages.solutions.inbound.orderTracking.impact.callReduction.metric'), 
      description: t('seavoice.pages.solutions.inbound.orderTracking.impact.callReduction.description') 
    },
    { 
      metric: t('seavoice.pages.solutions.inbound.orderTracking.impact.satisfaction.metric'), 
      description: t('seavoice.pages.solutions.inbound.orderTracking.impact.satisfaction.description') 
    },
    { 
      metric: t('seavoice.pages.solutions.inbound.orderTracking.impact.availability.metric'), 
      description: t('seavoice.pages.solutions.inbound.orderTracking.impact.availability.description') 
    },
    { 
      metric: t('seavoice.pages.solutions.inbound.orderTracking.impact.workloadReduction.metric'), 
      description: t('seavoice.pages.solutions.inbound.orderTracking.impact.workloadReduction.description') 
    }
  ];

  const integrations = [
    t('seavoice.pages.solutions.inbound.orderTracking.integration.carriers.fedex'),
    t('seavoice.pages.solutions.inbound.orderTracking.integration.carriers.ups'),
    t('seavoice.pages.solutions.inbound.orderTracking.integration.carriers.usps'),
    t('seavoice.pages.solutions.inbound.orderTracking.integration.carriers.dhl'),
    t('seavoice.pages.solutions.inbound.orderTracking.integration.carriers.amazon'),
    t('seavoice.pages.solutions.inbound.orderTracking.integration.carriers.custom')
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <SEOHelmet {...seoData} />
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
              <Package className="w-16 h-16 text-green-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              {t('seavoice.pages.solutions.inbound.orderTracking.hero.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {t('seavoice.pages.solutions.inbound.orderTracking.hero.subtitle')}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors"
            >
              {t('seavoice.pages.solutions.inbound.orderTracking.hero.cta')}
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
              {t('seavoice.pages.solutions.inbound.orderTracking.features.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('seavoice.pages.solutions.inbound.orderTracking.features.subtitle')}
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
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center mb-6">
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

      {/* Tracking Stages */}
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
              {t('seavoice.pages.solutions.inbound.orderTracking.tracking.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('seavoice.pages.solutions.inbound.orderTracking.tracking.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trackingCapabilities.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-200"
              >
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{stage.stage}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{stage.description}</p>
                <div className="space-y-1">
                  {stage.information.map((info, infoIndex) => (
                    <div key={infoIndex} className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></div>
                      <span className="text-xs text-gray-600">{info}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Carrier Integrations */}
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
                {t('seavoice.pages.solutions.inbound.orderTracking.integration.title')}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {t('seavoice.pages.solutions.inbound.orderTracking.integration.description')}
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Truck className="w-6 h-6 text-green-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{t('seavoice.pages.solutions.inbound.orderTracking.integration.multiCarrier.title')}</h3>
                    <p className="text-gray-600">{t('seavoice.pages.solutions.inbound.orderTracking.integration.multiCarrier.description')}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-green-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{t('seavoice.pages.solutions.inbound.orderTracking.integration.realTimeUpdates.title')}</h3>
                    <p className="text-gray-600">{t('seavoice.pages.solutions.inbound.orderTracking.integration.realTimeUpdates.description')}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <BarChart3 className="w-6 h-6 text-green-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{t('seavoice.pages.solutions.inbound.orderTracking.integration.deliveryAnalytics.title')}</h3>
                    <p className="text-gray-600">{t('seavoice.pages.solutions.inbound.orderTracking.integration.deliveryAnalytics.description')}</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('seavoice.pages.solutions.inbound.orderTracking.integration.carriers.title')}</h3>
              <div className="grid grid-cols-2 gap-3">
                {integrations.map((integration, index) => (
                  <div key={index} className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700 font-medium">{integration}</span>
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
              {t('seavoice.pages.solutions.inbound.orderTracking.impact.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('seavoice.pages.solutions.inbound.orderTracking.impact.subtitle')}
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
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">{t('seavoice.pages.solutions.inbound.orderTracking.cta.title')}</h2>
            <p className="text-xl mb-8 opacity-90">
              {t('seavoice.pages.solutions.inbound.orderTracking.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                {t('seavoice.pages.solutions.inbound.orderTracking.cta.startTrial')}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                {t('seavoice.pages.solutions.inbound.orderTracking.cta.seeDemo')}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default OrderTrackingPage;
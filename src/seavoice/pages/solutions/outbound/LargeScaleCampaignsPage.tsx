
import { motion } from 'framer-motion';
import { Megaphone, Users, BarChart3, Globe, CheckCircle, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SEOHelmet from '../../../../components/SEOHelmet';
import { getSEOData, getCanonicalUrl } from '../../../../utils/seo';

const LargeScaleCampaignsPage = () => {
  const { t, i18n } = useTranslation();
  
  // Generate SEO data using standardized utility
  const seoData = getSEOData(t, 'seavoice.solutions.outbound.largeScaleCampaigns.seo', {
    canonicalUrl: getCanonicalUrl(i18n.language, '/seavoice/solutions/outbound/large-scale-campaigns')
  });
  
  const features = [
    {
      icon: Megaphone,
      title: t('seavoice.pages.solutions.outbound.largeScaleCampaigns.features.massCommunication.title'),
      description: t('seavoice.pages.solutions.outbound.largeScaleCampaigns.features.massCommunication.description'),
      benefits: [
        t('seavoice.pages.solutions.outbound.largeScaleCampaigns.features.massCommunication.benefit1'),
        t('seavoice.pages.solutions.outbound.largeScaleCampaigns.features.massCommunication.benefit2'),
        t('seavoice.pages.solutions.outbound.largeScaleCampaigns.features.massCommunication.benefit3')
      ]
    },
    {
      icon: Users,
      title: t('seavoice.pages.solutions.outbound.largeScaleCampaigns.features.audienceSegmentation.title'),
      description: t('seavoice.pages.solutions.outbound.largeScaleCampaigns.features.audienceSegmentation.description'),
      benefits: [
        t('seavoice.pages.solutions.outbound.largeScaleCampaigns.features.audienceSegmentation.benefit1'),
        t('seavoice.pages.solutions.outbound.largeScaleCampaigns.features.audienceSegmentation.benefit2'),
        t('seavoice.pages.solutions.outbound.largeScaleCampaigns.features.audienceSegmentation.benefit3')
      ]
    },
    {
      icon: BarChart3,
      title: t('seavoice.pages.solutions.outbound.largeScaleCampaigns.features.realTimeAnalytics.title'),
      description: t('seavoice.pages.solutions.outbound.largeScaleCampaigns.features.realTimeAnalytics.description'),
      benefits: [
        t('seavoice.pages.solutions.outbound.largeScaleCampaigns.features.realTimeAnalytics.benefit1'),
        t('seavoice.pages.solutions.outbound.largeScaleCampaigns.features.realTimeAnalytics.benefit2'),
        t('seavoice.pages.solutions.outbound.largeScaleCampaigns.features.realTimeAnalytics.benefit3')
      ]
    }
  ];

  const campaignTypes = [
    {
      type: t('seavoice.pages.solutions.outbound.largeScaleCampaigns.campaignTypes.productAnnouncements.type'),
      description: t('seavoice.pages.solutions.outbound.largeScaleCampaigns.campaignTypes.productAnnouncements.description'),
      examples: [
        t('seavoice.pages.solutions.outbound.largeScaleCampaigns.campaignTypes.productAnnouncements.example1'),
        t('seavoice.pages.solutions.outbound.largeScaleCampaigns.campaignTypes.productAnnouncements.example2'),
        t('seavoice.pages.solutions.outbound.largeScaleCampaigns.campaignTypes.productAnnouncements.example3')
      ],
      metrics: [
        t('seavoice.pages.solutions.outbound.largeScaleCampaigns.campaignTypes.productAnnouncements.metric1'),
        t('seavoice.pages.solutions.outbound.largeScaleCampaigns.campaignTypes.productAnnouncements.metric2'),
        t('seavoice.pages.solutions.outbound.largeScaleCampaigns.campaignTypes.productAnnouncements.metric3')
      ]
    },
    {
      type: t('seavoice.pages.solutions.outbound.largeScaleCampaigns.campaignTypes.emergencyNotifications.type'),
      description: t('seavoice.pages.solutions.outbound.largeScaleCampaigns.campaignTypes.emergencyNotifications.description'),
      examples: [
        t('seavoice.pages.solutions.outbound.largeScaleCampaigns.campaignTypes.emergencyNotifications.example1'),
        t('seavoice.pages.solutions.outbound.largeScaleCampaigns.campaignTypes.emergencyNotifications.example2'),
        t('seavoice.pages.solutions.outbound.largeScaleCampaigns.campaignTypes.emergencyNotifications.example3')
      ],
      metrics: [
        t('seavoice.pages.solutions.outbound.largeScaleCampaigns.campaignTypes.emergencyNotifications.metric1'),
        t('seavoice.pages.solutions.outbound.largeScaleCampaigns.campaignTypes.emergencyNotifications.metric2'),
        t('seavoice.pages.solutions.outbound.largeScaleCampaigns.campaignTypes.emergencyNotifications.metric3')
      ]
    },
    {
      type: t('seavoice.pages.solutions.outbound.largeScaleCampaigns.campaignTypes.marketingCampaigns.type'),
      description: t('seavoice.pages.solutions.outbound.largeScaleCampaigns.campaignTypes.marketingCampaigns.description'),
      examples: [
        t('seavoice.pages.solutions.outbound.largeScaleCampaigns.campaignTypes.marketingCampaigns.example1'),
        t('seavoice.pages.solutions.outbound.largeScaleCampaigns.campaignTypes.marketingCampaigns.example2'),
        t('seavoice.pages.solutions.outbound.largeScaleCampaigns.campaignTypes.marketingCampaigns.example3')
      ],
      metrics: [
        t('seavoice.pages.solutions.outbound.largeScaleCampaigns.campaignTypes.marketingCampaigns.metric1'),
        t('seavoice.pages.solutions.outbound.largeScaleCampaigns.campaignTypes.marketingCampaigns.metric2'),
        t('seavoice.pages.solutions.outbound.largeScaleCampaigns.campaignTypes.marketingCampaigns.metric3')
      ]
    },
    {
      type: t('seavoice.pages.solutions.outbound.largeScaleCampaigns.campaignTypes.surveyResearch.type'),
      description: t('seavoice.pages.solutions.outbound.largeScaleCampaigns.campaignTypes.surveyResearch.description'),
      examples: [
        t('seavoice.pages.solutions.outbound.largeScaleCampaigns.campaignTypes.surveyResearch.example1'),
        t('seavoice.pages.solutions.outbound.largeScaleCampaigns.campaignTypes.surveyResearch.example2'),
        t('seavoice.pages.solutions.outbound.largeScaleCampaigns.campaignTypes.surveyResearch.example3')
      ],
      metrics: [
        t('seavoice.pages.solutions.outbound.largeScaleCampaigns.campaignTypes.surveyResearch.metric1'),
        t('seavoice.pages.solutions.outbound.largeScaleCampaigns.campaignTypes.surveyResearch.metric2'),
        t('seavoice.pages.solutions.outbound.largeScaleCampaigns.campaignTypes.surveyResearch.metric3')
      ]
    }
  ];

  const benefits = [
    { 
      metric: t('seavoice.pages.solutions.outbound.largeScaleCampaigns.benefits.metric1.value'), 
      description: t('seavoice.pages.solutions.outbound.largeScaleCampaigns.benefits.metric1.description') 
    },
    { 
      metric: t('seavoice.pages.solutions.outbound.largeScaleCampaigns.benefits.metric2.value'), 
      description: t('seavoice.pages.solutions.outbound.largeScaleCampaigns.benefits.metric2.description') 
    },
    { 
      metric: t('seavoice.pages.solutions.outbound.largeScaleCampaigns.benefits.metric3.value'), 
      description: t('seavoice.pages.solutions.outbound.largeScaleCampaigns.benefits.metric3.description') 
    },
    { 
      metric: t('seavoice.pages.solutions.outbound.largeScaleCampaigns.benefits.metric4.value'), 
      description: t('seavoice.pages.solutions.outbound.largeScaleCampaigns.benefits.metric4.description') 
    }
  ];

  const scalingCapabilities = [
    t('seavoice.pages.solutions.outbound.largeScaleCampaigns.scaling.capabilities.capability1'),
    t('seavoice.pages.solutions.outbound.largeScaleCampaigns.scaling.capabilities.capability2'),
    t('seavoice.pages.solutions.outbound.largeScaleCampaigns.scaling.capabilities.capability3'),
    t('seavoice.pages.solutions.outbound.largeScaleCampaigns.scaling.capabilities.capability4'),
    t('seavoice.pages.solutions.outbound.largeScaleCampaigns.scaling.capabilities.capability5'),
    t('seavoice.pages.solutions.outbound.largeScaleCampaigns.scaling.capabilities.capability6')
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHelmet seoData={seoData} />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <Megaphone className="w-16 h-16 text-indigo-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              {t('seavoice.pages.solutions.outbound.largeScaleCampaigns.hero.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {t('seavoice.pages.solutions.outbound.largeScaleCampaigns.hero.description')}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              {t('seavoice.pages.solutions.outbound.largeScaleCampaigns.hero.cta')}
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
              {t('seavoice.pages.solutions.outbound.largeScaleCampaigns.features.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('seavoice.pages.solutions.outbound.largeScaleCampaigns.features.subtitle')}
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
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center mb-6">
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

      {/* Campaign Types */}
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
              {t('seavoice.pages.solutions.outbound.largeScaleCampaigns.campaignTypes.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('seavoice.pages.solutions.outbound.largeScaleCampaigns.campaignTypes.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {campaignTypes.map((campaign, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{campaign.type}</h3>
                <p className="text-gray-600 mb-6">{campaign.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 text-sm mb-3">{t('seavoice.pages.solutions.outbound.largeScaleCampaigns.campaignTypes.commonExamples')}</h4>
                  <div className="space-y-1">
                    {campaign.examples.map((example, exampleIndex) => (
                      <div key={exampleIndex} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-2"></div>
                        <span className="text-sm text-gray-700">{example}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="p-4 bg-indigo-50 rounded-lg">
                  <h4 className="font-semibold text-indigo-900 text-sm mb-2">{t('seavoice.pages.solutions.outbound.largeScaleCampaigns.campaignTypes.performanceMetrics')}</h4>
                  <div className="space-y-1">
                    {campaign.metrics.map((metric, metricIndex) => (
                      <p key={metricIndex} className="text-xs text-indigo-800">{metric}</p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scaling Capabilities */}
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
                {t('seavoice.pages.solutions.outbound.largeScaleCampaigns.scaling.title')}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {t('seavoice.pages.solutions.outbound.largeScaleCampaigns.scaling.description')}
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Globe className="w-6 h-6 text-indigo-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{t('seavoice.pages.solutions.outbound.largeScaleCampaigns.scaling.globalInfrastructure.title')}</h3>
                    <p className="text-gray-600">{t('seavoice.pages.solutions.outbound.largeScaleCampaigns.scaling.globalInfrastructure.description')}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Zap className="w-6 h-6 text-indigo-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{t('seavoice.pages.solutions.outbound.largeScaleCampaigns.scaling.highSpeedExecution.title')}</h3>
                    <p className="text-gray-600">{t('seavoice.pages.solutions.outbound.largeScaleCampaigns.scaling.highSpeedExecution.description')}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <BarChart3 className="w-6 h-6 text-indigo-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{t('seavoice.pages.solutions.outbound.largeScaleCampaigns.scaling.realTimeMonitoring.title')}</h3>
                    <p className="text-gray-600">{t('seavoice.pages.solutions.outbound.largeScaleCampaigns.scaling.realTimeMonitoring.description')}</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('seavoice.pages.solutions.outbound.largeScaleCampaigns.scaling.capabilities.title')}</h3>
              <div className="grid grid-cols-1 gap-3">
                {scalingCapabilities.map((capability, index) => (
                  <div key={index} className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700 font-medium">{capability}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-white rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">{t('seavoice.pages.solutions.outbound.largeScaleCampaigns.scaling.dashboard.title')}</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">{t('seavoice.pages.solutions.outbound.largeScaleCampaigns.scaling.dashboard.activeCalls')}</span>
                    <span className="font-semibold text-indigo-600">8,547</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">{t('seavoice.pages.solutions.outbound.largeScaleCampaigns.scaling.dashboard.completionRate')}</span>
                    <span className="font-semibold text-green-600">94.2%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">{t('seavoice.pages.solutions.outbound.largeScaleCampaigns.scaling.dashboard.responseRate')}</span>
                    <span className="font-semibold text-blue-600">67.8%</span>
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
              {t('seavoice.pages.solutions.outbound.largeScaleCampaigns.benefits.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('seavoice.pages.solutions.outbound.largeScaleCampaigns.benefits.subtitle')}
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
                <div className="text-4xl font-bold text-indigo-600 mb-4">{benefit.metric}</div>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">{t('seavoice.pages.solutions.outbound.largeScaleCampaigns.cta.title')}</h2>
            <p className="text-xl mb-8 opacity-90">
              {t('seavoice.pages.solutions.outbound.largeScaleCampaigns.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                {t('seavoice.pages.solutions.outbound.largeScaleCampaigns.cta.primaryButton')}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
              >
                {t('seavoice.pages.solutions.outbound.largeScaleCampaigns.cta.secondaryButton')}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LargeScaleCampaignsPage;
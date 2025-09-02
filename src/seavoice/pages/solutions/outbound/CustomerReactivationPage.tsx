
import { motion } from 'framer-motion';
import { UserPlus, Target, BarChart3, Heart, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SEOHelmet from '../../../../components/SEOHelmet';
import { getSEOData, getCanonicalUrl } from '../../../../utils/seo';

const CustomerReactivationPage = () => {
  const { t, i18n } = useTranslation();
  
  // Generate SEO data using standardized utility
  const seoData = getSEOData(t, 'seavoice.solutions.outbound.customerReactivation.seo', {
    canonicalUrl: getCanonicalUrl(i18n.language, '/seavoice/solutions/outbound/customer-reactivation')
  });
  
  const features = [
    {
      icon: Target,
      title: t('seavoice.pages.solutions.outbound.customerReactivation.features.personalizedOutreach.title'),
      description: t('seavoice.pages.solutions.outbound.customerReactivation.features.personalizedOutreach.description'),
      benefits: [
        t('seavoice.pages.solutions.outbound.customerReactivation.features.personalizedOutreach.benefits.customMessaging'),
        t('seavoice.pages.solutions.outbound.customerReactivation.features.personalizedOutreach.benefits.historicalContext'),
        t('seavoice.pages.solutions.outbound.customerReactivation.features.personalizedOutreach.benefits.behavioralInsights')
      ]
    },
    {
      icon: Heart,
      title: t('seavoice.pages.solutions.outbound.customerReactivation.features.winBackCampaigns.title'),
      description: t('seavoice.pages.solutions.outbound.customerReactivation.features.winBackCampaigns.description'),
      benefits: [
        t('seavoice.pages.solutions.outbound.customerReactivation.features.winBackCampaigns.benefits.specialPromotions'),
        t('seavoice.pages.solutions.outbound.customerReactivation.features.winBackCampaigns.benefits.loyaltyRewards'),
        t('seavoice.pages.solutions.outbound.customerReactivation.features.winBackCampaigns.benefits.exclusiveAccess')
      ]
    },
    {
      icon: BarChart3,
      title: t('seavoice.pages.solutions.outbound.customerReactivation.features.performanceAnalytics.title'),
      description: t('seavoice.pages.solutions.outbound.customerReactivation.features.performanceAnalytics.description'),
      benefits: [
        t('seavoice.pages.solutions.outbound.customerReactivation.features.performanceAnalytics.benefits.conversionTracking'),
        t('seavoice.pages.solutions.outbound.customerReactivation.features.performanceAnalytics.benefits.abTesting'),
        t('seavoice.pages.solutions.outbound.customerReactivation.features.performanceAnalytics.benefits.roiAnalysis')
      ]
    }
  ];

  const reactivationProcess = [
    {
      step: 1,
      title: t('seavoice.pages.solutions.outbound.customerReactivation.process.steps.customerSegmentation.title'),
      description: t('seavoice.pages.solutions.outbound.customerReactivation.process.steps.customerSegmentation.description'),
      outcome: t('seavoice.pages.solutions.outbound.customerReactivation.process.steps.customerSegmentation.outcome')
    },
    {
      step: 2,
      title: t('seavoice.pages.solutions.outbound.customerReactivation.process.steps.personalizedOutreach.title'),
      description: t('seavoice.pages.solutions.outbound.customerReactivation.process.steps.personalizedOutreach.description'),
      outcome: t('seavoice.pages.solutions.outbound.customerReactivation.process.steps.personalizedOutreach.outcome')
    },
    {
      step: 3,
      title: t('seavoice.pages.solutions.outbound.customerReactivation.process.steps.offerPresentation.title'),
      description: t('seavoice.pages.solutions.outbound.customerReactivation.process.steps.offerPresentation.description'),
      outcome: t('seavoice.pages.solutions.outbound.customerReactivation.process.steps.offerPresentation.outcome')
    },
    {
      step: 4,
      title: t('seavoice.pages.solutions.outbound.customerReactivation.process.steps.followUpNurturing.title'),
      description: t('seavoice.pages.solutions.outbound.customerReactivation.process.steps.followUpNurturing.description'),
      outcome: t('seavoice.pages.solutions.outbound.customerReactivation.process.steps.followUpNurturing.outcome')
    }
  ];

  const benefits = [
    { 
      metric: t('seavoice.pages.solutions.outbound.customerReactivation.results.reactivationRate.metric'), 
      description: t('seavoice.pages.solutions.outbound.customerReactivation.results.reactivationRate.description') 
    },
    { 
      metric: t('seavoice.pages.solutions.outbound.customerReactivation.results.costReduction.metric'), 
      description: t('seavoice.pages.solutions.outbound.customerReactivation.results.costReduction.description') 
    },
    { 
      metric: t('seavoice.pages.solutions.outbound.customerReactivation.results.responseRate.metric'), 
      description: t('seavoice.pages.solutions.outbound.customerReactivation.results.responseRate.description') 
    },
    { 
      metric: t('seavoice.pages.solutions.outbound.customerReactivation.results.retentionRate.metric'), 
      description: t('seavoice.pages.solutions.outbound.customerReactivation.results.retentionRate.description') 
    }
  ];

  const campaignTypes = [
    {
      type: t('seavoice.pages.solutions.outbound.customerReactivation.campaigns.winBackOffers.title'),
      description: t('seavoice.pages.solutions.outbound.customerReactivation.campaigns.winBackOffers.description'),
      tactics: [
        t('seavoice.pages.solutions.outbound.customerReactivation.campaigns.winBackOffers.tactics.exclusiveDiscounts'),
        t('seavoice.pages.solutions.outbound.customerReactivation.campaigns.winBackOffers.tactics.limitedTimeOffers'),
        t('seavoice.pages.solutions.outbound.customerReactivation.campaigns.winBackOffers.tactics.freeTrials')
      ]
    },
    {
      type: t('seavoice.pages.solutions.outbound.customerReactivation.campaigns.feedbackCollection.title'),
      description: t('seavoice.pages.solutions.outbound.customerReactivation.campaigns.feedbackCollection.description'),
      tactics: [
        t('seavoice.pages.solutions.outbound.customerReactivation.campaigns.feedbackCollection.tactics.exitSurveys'),
        t('seavoice.pages.solutions.outbound.customerReactivation.campaigns.feedbackCollection.tactics.concernResolution'),
        t('seavoice.pages.solutions.outbound.customerReactivation.campaigns.feedbackCollection.tactics.serviceImprovements')
      ]
    },
    {
      type: t('seavoice.pages.solutions.outbound.customerReactivation.campaigns.productUpdates.title'),
      description: t('seavoice.pages.solutions.outbound.customerReactivation.campaigns.productUpdates.description'),
      tactics: [
        t('seavoice.pages.solutions.outbound.customerReactivation.campaigns.productUpdates.tactics.featureAnnouncements'),
        t('seavoice.pages.solutions.outbound.customerReactivation.campaigns.productUpdates.tactics.benefitExplanations'),
        t('seavoice.pages.solutions.outbound.customerReactivation.campaigns.productUpdates.tactics.demoInvitations')
      ]
    },
    {
      type: t('seavoice.pages.solutions.outbound.customerReactivation.campaigns.loyaltyRewards.title'),
      description: t('seavoice.pages.solutions.outbound.customerReactivation.campaigns.loyaltyRewards.description'),
      tactics: [
        t('seavoice.pages.solutions.outbound.customerReactivation.campaigns.loyaltyRewards.tactics.vipStatus'),
        t('seavoice.pages.solutions.outbound.customerReactivation.campaigns.loyaltyRewards.tactics.loyaltyPoints'),
        t('seavoice.pages.solutions.outbound.customerReactivation.campaigns.loyaltyRewards.tactics.exclusiveAccess')
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHelmet {...seoData} />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-red-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <UserPlus className="w-16 h-16 text-orange-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              {t('seavoice.pages.solutions.outbound.customerReactivation.hero.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {t('seavoice.pages.solutions.outbound.customerReactivation.hero.subtitle')}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-colors"
            >
              {t('seavoice.pages.solutions.outbound.customerReactivation.hero.cta')}
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
              {t('seavoice.pages.solutions.outbound.customerReactivation.features.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('seavoice.pages.solutions.outbound.customerReactivation.features.subtitle')}
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
                <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg flex items-center justify-center mb-6">
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

      {/* Reactivation Process */}
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
              {t('seavoice.pages.solutions.outbound.customerReactivation.process.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('seavoice.pages.solutions.outbound.customerReactivation.process.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reactivationProcess.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{process.title}</h3>
                <p className="text-gray-600 mb-4">{process.description}</p>
                <div className="p-3 bg-orange-50 rounded-lg">
                  <p className="text-sm font-semibold text-orange-800">{process.outcome}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Types */}
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
              {t('seavoice.pages.solutions.outbound.customerReactivation.campaigns.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('seavoice.pages.solutions.outbound.customerReactivation.campaigns.subtitle')}
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
                <div className="space-y-2">
                  {campaign.tactics.map((tactic, tacticIndex) => (
                    <div key={tacticIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-700">{tactic}</span>
                    </div>
                  ))}
                </div>
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
              {t('seavoice.pages.solutions.outbound.customerReactivation.results.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('seavoice.pages.solutions.outbound.customerReactivation.results.subtitle')}
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
                <div className="text-4xl font-bold text-orange-600 mb-4">{benefit.metric}</div>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">{t('seavoice.pages.solutions.outbound.customerReactivation.cta.title')}</h2>
            <p className="text-xl mb-8 opacity-90">
              {t('seavoice.pages.solutions.outbound.customerReactivation.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                {t('seavoice.pages.solutions.outbound.customerReactivation.cta.startCampaign')}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
              >
                {t('seavoice.pages.solutions.outbound.customerReactivation.cta.viewCaseStudies')}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CustomerReactivationPage;
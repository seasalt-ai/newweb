
import { motion } from 'framer-motion';
import { MessageSquare, BarChart3, Users, Star, CheckCircle, TrendingUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const CustomerSurveysPage = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: MessageSquare,
      title: t('seavoice.pages.solutions.outbound.customerSurveys.features.conversational.title'),
      description: t('seavoice.pages.solutions.outbound.customerSurveys.features.conversational.description'),
      benefits: [
        t('seavoice.pages.solutions.outbound.customerSurveys.features.conversational.benefits.0'),
        t('seavoice.pages.solutions.outbound.customerSurveys.features.conversational.benefits.1'),
        t('seavoice.pages.solutions.outbound.customerSurveys.features.conversational.benefits.2')
      ]
    },
    {
      icon: BarChart3,
      title: t('seavoice.pages.solutions.outbound.customerSurveys.features.analytics.title'),
      description: t('seavoice.pages.solutions.outbound.customerSurveys.features.analytics.description'),
      benefits: [
        t('seavoice.pages.solutions.outbound.customerSurveys.features.analytics.benefits.0'),
        t('seavoice.pages.solutions.outbound.customerSurveys.features.analytics.benefits.1'),
        t('seavoice.pages.solutions.outbound.customerSurveys.features.analytics.benefits.2')
      ]
    },
    {
      icon: Users,
      title: t('seavoice.pages.solutions.outbound.customerSurveys.features.outreach.title'),
      description: t('seavoice.pages.solutions.outbound.customerSurveys.features.outreach.description'),
      benefits: [
        t('seavoice.pages.solutions.outbound.customerSurveys.features.outreach.benefits.0'),
        t('seavoice.pages.solutions.outbound.customerSurveys.features.outreach.benefits.1'),
        t('seavoice.pages.solutions.outbound.customerSurveys.features.outreach.benefits.2')
      ]
    }
  ];

  const surveyTypes = [
    {
      type: t('seavoice.pages.solutions.outbound.customerSurveys.surveyTypes.csat.title'),
      description: t('seavoice.pages.solutions.outbound.customerSurveys.surveyTypes.csat.description'),
      questions: [
        t('seavoice.pages.solutions.outbound.customerSurveys.surveyTypes.csat.questions.0'),
        t('seavoice.pages.solutions.outbound.customerSurveys.surveyTypes.csat.questions.1'),
        t('seavoice.pages.solutions.outbound.customerSurveys.surveyTypes.csat.questions.2')
      ],
      metrics: [
        t('seavoice.pages.solutions.outbound.customerSurveys.surveyTypes.csat.metrics.0'),
        t('seavoice.pages.solutions.outbound.customerSurveys.surveyTypes.csat.metrics.1'),
        t('seavoice.pages.solutions.outbound.customerSurveys.surveyTypes.csat.metrics.2')
      ]
    },
    {
      type: t('seavoice.pages.solutions.outbound.customerSurveys.surveyTypes.postPurchase.title'),
      description: t('seavoice.pages.solutions.outbound.customerSurveys.surveyTypes.postPurchase.description'),
      questions: [
        t('seavoice.pages.solutions.outbound.customerSurveys.surveyTypes.postPurchase.questions.0'),
        t('seavoice.pages.solutions.outbound.customerSurveys.surveyTypes.postPurchase.questions.1'),
        t('seavoice.pages.solutions.outbound.customerSurveys.surveyTypes.postPurchase.questions.2')
      ],
      metrics: [
        t('seavoice.pages.solutions.outbound.customerSurveys.surveyTypes.postPurchase.metrics.0'),
        t('seavoice.pages.solutions.outbound.customerSurveys.surveyTypes.postPurchase.metrics.1'),
        t('seavoice.pages.solutions.outbound.customerSurveys.surveyTypes.postPurchase.metrics.2')
      ]
    },
    {
      type: t('seavoice.pages.solutions.outbound.customerSurveys.surveyTypes.productDev.title'),
      description: t('seavoice.pages.solutions.outbound.customerSurveys.surveyTypes.productDev.description'),
      questions: [
        t('seavoice.pages.solutions.outbound.customerSurveys.surveyTypes.productDev.questions.0'),
        t('seavoice.pages.solutions.outbound.customerSurveys.surveyTypes.productDev.questions.1'),
        t('seavoice.pages.solutions.outbound.customerSurveys.surveyTypes.productDev.questions.2')
      ],
      metrics: [
        t('seavoice.pages.solutions.outbound.customerSurveys.surveyTypes.productDev.metrics.0'),
        t('seavoice.pages.solutions.outbound.customerSurveys.surveyTypes.productDev.metrics.1'),
        t('seavoice.pages.solutions.outbound.customerSurveys.surveyTypes.productDev.metrics.2')
      ]
    },
    {
      type: t('seavoice.pages.solutions.outbound.customerSurveys.surveyTypes.marketResearch.title'),
      description: t('seavoice.pages.solutions.outbound.customerSurveys.surveyTypes.marketResearch.description'),
      questions: [
        t('seavoice.pages.solutions.outbound.customerSurveys.surveyTypes.marketResearch.questions.0'),
        t('seavoice.pages.solutions.outbound.customerSurveys.surveyTypes.marketResearch.questions.1'),
        t('seavoice.pages.solutions.outbound.customerSurveys.surveyTypes.marketResearch.questions.2')
      ],
      metrics: [
        t('seavoice.pages.solutions.outbound.customerSurveys.surveyTypes.marketResearch.metrics.0'),
        t('seavoice.pages.solutions.outbound.customerSurveys.surveyTypes.marketResearch.metrics.1'),
        t('seavoice.pages.solutions.outbound.customerSurveys.surveyTypes.marketResearch.metrics.2')
      ]
    }
  ];

  const benefits = [
    { 
      metric: t('seavoice.pages.solutions.outbound.customerSurveys.benefits.0.metric'), 
      description: t('seavoice.pages.solutions.outbound.customerSurveys.benefits.0.description') 
    },
    { 
      metric: t('seavoice.pages.solutions.outbound.customerSurveys.benefits.1.metric'), 
      description: t('seavoice.pages.solutions.outbound.customerSurveys.benefits.1.description') 
    },
    { 
      metric: t('seavoice.pages.solutions.outbound.customerSurveys.benefits.2.metric'), 
      description: t('seavoice.pages.solutions.outbound.customerSurveys.benefits.2.description') 
    },
    { 
      metric: t('seavoice.pages.solutions.outbound.customerSurveys.benefits.3.metric'), 
      description: t('seavoice.pages.solutions.outbound.customerSurveys.benefits.3.description') 
    }
  ];

  const analysisFeatures = [
    t('seavoice.pages.solutions.outbound.customerSurveys.analysisFeatures.0'),
    t('seavoice.pages.solutions.outbound.customerSurveys.analysisFeatures.1'),
    t('seavoice.pages.solutions.outbound.customerSurveys.analysisFeatures.2'),
    t('seavoice.pages.solutions.outbound.customerSurveys.analysisFeatures.3'),
    t('seavoice.pages.solutions.outbound.customerSurveys.analysisFeatures.4'),
    t('seavoice.pages.solutions.outbound.customerSurveys.analysisFeatures.5')
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <MessageSquare className="w-16 h-16 text-cyan-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              {t('seavoice.pages.solutions.outbound.customerSurveys.hero.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {t('seavoice.pages.solutions.outbound.customerSurveys.hero.description')}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-700 transition-colors"
            >
              {t('seavoice.pages.solutions.outbound.customerSurveys.hero.cta')}
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
              {t('seavoice.pages.solutions.outbound.customerSurveys.sections.features.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('seavoice.pages.solutions.outbound.customerSurveys.sections.features.subtitle')}
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
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg flex items-center justify-center mb-6">
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

      {/* Survey Types */}
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
              {t('seavoice.pages.solutions.outbound.customerSurveys.sections.surveys.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('seavoice.pages.solutions.outbound.customerSurveys.sections.surveys.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {surveyTypes.map((survey, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{survey.type}</h3>
                <p className="text-gray-600 mb-6">{survey.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 text-sm mb-3">{t('seavoice.pages.solutions.outbound.customerSurveys.sections.sampleQuestions')}</h4>
                  <div className="space-y-2">
                    {survey.questions.map((question, questionIndex) => (
                      <div key={questionIndex} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-cyan-600 rounded-full mr-2 mt-2"></div>
                        <span className="text-sm text-gray-700 italic">"{question}"</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="p-4 bg-cyan-50 rounded-lg">
                  <h4 className="font-semibold text-cyan-900 text-sm mb-2">{t('seavoice.pages.solutions.outbound.customerSurveys.sections.keyMetrics')}</h4>
                  <div className="flex flex-wrap gap-2">
                    {survey.metrics.map((metric, metricIndex) => (
                      <span key={metricIndex} className="text-xs bg-cyan-100 text-cyan-800 px-2 py-1 rounded">
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Analysis & Insights */}
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
                {t('seavoice.pages.solutions.outbound.customerSurveys.sections.analytics.title')}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {t('seavoice.pages.solutions.outbound.customerSurveys.sections.analytics.description')}
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Star className="w-6 h-6 text-cyan-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{t('seavoice.pages.solutions.outbound.customerSurveys.analytics.sentimentAnalysis.title')}</h3>
                    <p className="text-gray-600">{t('seavoice.pages.solutions.outbound.customerSurveys.analytics.sentimentAnalysis.description')}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="w-6 h-6 text-cyan-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{t('seavoice.pages.solutions.outbound.customerSurveys.analytics.trendIdentification.title')}</h3>
                    <p className="text-gray-600">{t('seavoice.pages.solutions.outbound.customerSurveys.analytics.trendIdentification.description')}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <BarChart3 className="w-6 h-6 text-cyan-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{t('seavoice.pages.solutions.outbound.customerSurveys.analytics.actionableReports.title')}</h3>
                    <p className="text-gray-600">{t('seavoice.pages.solutions.outbound.customerSurveys.analytics.actionableReports.description')}</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('seavoice.pages.solutions.outbound.customerSurveys.sections.analysisFeatures.title')}</h3>
              <div className="grid grid-cols-1 gap-3">
                {analysisFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-white rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">{t('seavoice.pages.solutions.outbound.customerSurveys.dashboard.title')}</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">{t('seavoice.pages.solutions.outbound.customerSurveys.dashboard.responsesToday')}</span>
                    <span className="font-semibold text-cyan-600">{t('seavoice.pages.solutions.outbound.customerSurveys.dashboard.responsesTodayValue')}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">{t('seavoice.pages.solutions.outbound.customerSurveys.dashboard.completionRate')}</span>
                    <span className="font-semibold text-green-600">{t('seavoice.pages.solutions.outbound.customerSurveys.dashboard.completionRateValue')}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">{t('seavoice.pages.solutions.outbound.customerSurveys.dashboard.avgSatisfaction')}</span>
                    <span className="font-semibold text-blue-600">{t('seavoice.pages.solutions.outbound.customerSurveys.dashboard.avgSatisfactionValue')}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">{t('seavoice.pages.solutions.outbound.customerSurveys.dashboard.sentiment')}</span>
                    <span className="font-semibold text-green-600">{t('seavoice.pages.solutions.outbound.customerSurveys.dashboard.sentimentValue')}</span>
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
              {t('seavoice.pages.solutions.outbound.customerSurveys.sections.benefits.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('seavoice.pages.solutions.outbound.customerSurveys.sections.benefits.subtitle')}
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
                <div className="text-4xl font-bold text-cyan-600 mb-4">{benefit.metric}</div>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">{t('seavoice.pages.solutions.outbound.customerSurveys.cta.title')}</h2>
            <p className="text-xl mb-8 opacity-90">
              {t('seavoice.pages.solutions.outbound.customerSurveys.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                {t('seavoice.pages.solutions.outbound.customerSurveys.cta.primaryBtn')}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors"
              >
                {t('seavoice.pages.solutions.outbound.customerSurveys.cta.secondaryBtn')}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CustomerSurveysPage;
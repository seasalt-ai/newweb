
import { motion } from 'framer-motion';
import { Zap, MessageSquare, Users, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import SEOHelmet from '../../../../components/SEOHelmet';
import { getSEOData, getCanonicalUrl } from '../../../../utils/seo';

const IvrReplacementPage = () => {
  const { t, i18n } = useTranslation();
  
  // Generate SEO data using standardized utility
  const seoData = getSEOData(t, 'seavoice.solutions.inbound.ivrReplacement.seo', {
    canonicalUrl: getCanonicalUrl(i18n.language, '/seavoice/solutions/inbound/ivr-replacement')
  });
  
  const features = [
    {
      icon: MessageSquare,
      title: t('seavoice.pages.solutions.inbound.ivrReplacement.features.naturalLanguage.title'),
      description: t('seavoice.pages.solutions.inbound.ivrReplacement.features.naturalLanguage.description'),
      benefits: [
        t('seavoice.pages.solutions.inbound.ivrReplacement.features.naturalLanguage.benefit1'),
        t('seavoice.pages.solutions.inbound.ivrReplacement.features.naturalLanguage.benefit2'),
        t('seavoice.pages.solutions.inbound.ivrReplacement.features.naturalLanguage.benefit3')
      ]
    },
    {
      icon: Zap,
      title: t('seavoice.pages.solutions.inbound.ivrReplacement.features.instantResolution.title'),
      description: t('seavoice.pages.solutions.inbound.ivrReplacement.features.instantResolution.description'),
      benefits: [
        t('seavoice.pages.solutions.inbound.ivrReplacement.features.instantResolution.benefit1'),
        t('seavoice.pages.solutions.inbound.ivrReplacement.features.instantResolution.benefit2'),
        t('seavoice.pages.solutions.inbound.ivrReplacement.features.instantResolution.benefit3')
      ]
    },
    {
      icon: Users,
      title: t('seavoice.pages.solutions.inbound.ivrReplacement.features.improvedExperience.title'),
      description: t('seavoice.pages.solutions.inbound.ivrReplacement.features.improvedExperience.description'),
      benefits: [
        t('seavoice.pages.solutions.inbound.ivrReplacement.features.improvedExperience.benefit1'),
        t('seavoice.pages.solutions.inbound.ivrReplacement.features.improvedExperience.benefit2'),
        t('seavoice.pages.solutions.inbound.ivrReplacement.features.improvedExperience.benefit3')
      ]
    }
  ];

  const comparison = [
    {
      aspect: t('seavoice.pages.solutions.inbound.ivrReplacement.comparison.customerExperience.aspect'),
      traditional: t('seavoice.pages.solutions.inbound.ivrReplacement.comparison.customerExperience.traditional'),
      modern: t('seavoice.pages.solutions.inbound.ivrReplacement.comparison.customerExperience.modern'),
      improvement: t('seavoice.pages.solutions.inbound.ivrReplacement.comparison.customerExperience.improvement')
    },
    {
      aspect: t('seavoice.pages.solutions.inbound.ivrReplacement.comparison.timeToResolution.aspect'),
      traditional: t('seavoice.pages.solutions.inbound.ivrReplacement.comparison.timeToResolution.traditional'),
      modern: t('seavoice.pages.solutions.inbound.ivrReplacement.comparison.timeToResolution.modern'),
      improvement: t('seavoice.pages.solutions.inbound.ivrReplacement.comparison.timeToResolution.improvement')
    },
    {
      aspect: t('seavoice.pages.solutions.inbound.ivrReplacement.comparison.callAbandonment.aspect'),
      traditional: t('seavoice.pages.solutions.inbound.ivrReplacement.comparison.callAbandonment.traditional'),
      modern: t('seavoice.pages.solutions.inbound.ivrReplacement.comparison.callAbandonment.modern'),
      improvement: t('seavoice.pages.solutions.inbound.ivrReplacement.comparison.callAbandonment.improvement')
    },
    {
      aspect: t('seavoice.pages.solutions.inbound.ivrReplacement.comparison.accessibility.aspect'),
      traditional: t('seavoice.pages.solutions.inbound.ivrReplacement.comparison.accessibility.traditional'),
      modern: t('seavoice.pages.solutions.inbound.ivrReplacement.comparison.accessibility.modern'),
      improvement: t('seavoice.pages.solutions.inbound.ivrReplacement.comparison.accessibility.improvement')
    }
  ];

  const benefits = [
    { 
      metric: t('seavoice.pages.solutions.inbound.ivrReplacement.benefits.satisfaction.metric'), 
      description: t('seavoice.pages.solutions.inbound.ivrReplacement.benefits.satisfaction.description') 
    },
    { 
      metric: t('seavoice.pages.solutions.inbound.ivrReplacement.benefits.abandonment.metric'), 
      description: t('seavoice.pages.solutions.inbound.ivrReplacement.benefits.abandonment.description') 
    },
    { 
      metric: t('seavoice.pages.solutions.inbound.ivrReplacement.benefits.resolution.metric'), 
      description: t('seavoice.pages.solutions.inbound.ivrReplacement.benefits.resolution.description') 
    },
    { 
      metric: t('seavoice.pages.solutions.inbound.ivrReplacement.benefits.misdirected.metric'), 
      description: t('seavoice.pages.solutions.inbound.ivrReplacement.benefits.misdirected.description') 
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <SEOHelmet {...seoData} />
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
              <Zap className="w-16 h-16 text-indigo-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              {t('seavoice.pages.solutions.inbound.ivrReplacement.hero.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {t('seavoice.pages.solutions.inbound.ivrReplacement.hero.subtitle')}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              {t('seavoice.pages.solutions.inbound.ivrReplacement.hero.cta')}
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
              {t('seavoice.pages.solutions.inbound.ivrReplacement.features.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('seavoice.pages.solutions.inbound.ivrReplacement.features.subtitle')}
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

      {/* Comparison Section */}
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
              {t('seavoice.pages.solutions.inbound.ivrReplacement.comparison.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('seavoice.pages.solutions.inbound.ivrReplacement.comparison.subtitle')}
            </p>
          </motion.div>

          <div className="space-y-8">
            {comparison.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-200"
              >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{item.aspect}</h3>
                  </div>
                  <div className="text-center">
                    <h4 className="text-sm font-semibold text-red-600 mb-2">{t('seavoice.pages.solutions.inbound.ivrReplacement.comparison.traditionalIvr')}</h4>
                    <p className="text-gray-600 text-sm italic">"{item.traditional}"</p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-sm font-semibold text-green-600 mb-2">{t('seavoice.pages.solutions.inbound.ivrReplacement.comparison.naturalLanguage')}</h4>
                    <p className="text-gray-600 text-sm italic">"{item.modern}"</p>
                  </div>
                  <div className="text-center">
                    <div className="p-3 bg-indigo-50 rounded-lg">
                      <p className="text-sm font-semibold text-indigo-800">{item.improvement}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
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
              {t('seavoice.pages.solutions.inbound.ivrReplacement.benefits.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('seavoice.pages.solutions.inbound.ivrReplacement.benefits.subtitle')}
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
            <h2 className="text-4xl font-bold mb-6">{t('seavoice.pages.solutions.inbound.ivrReplacement.cta.title')}</h2>
            <p className="text-xl mb-8 opacity-90">
              {t('seavoice.pages.solutions.inbound.ivrReplacement.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                {t('seavoice.pages.solutions.inbound.ivrReplacement.cta.startTrial')}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
              >
                {t('seavoice.pages.solutions.inbound.ivrReplacement.cta.seeDemo')}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default IvrReplacementPage;
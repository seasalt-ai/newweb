
import { motion } from 'framer-motion';
import { Clock, Phone, Users, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import SEOHelmet from '../../../../components/SEOHelmet';

const VirtualAssistantPage = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  
  // Extract language from pathname
  const pathParts = location.pathname.split('/');
  const currentLang = pathParts[1] || i18n.language || 'en';
  
  // SEO configuration
  const getSEOContent = () => {
    return {
      title: t('seo.seavoice.virtualAssistant.title'),
      description: t('seo.seavoice.virtualAssistant.description'),
      keywords: t('seo.seavoice.virtualAssistant.keywords')
    };
  };
  
  const seoContent = getSEOContent();
  const canonicalUrl = `https://seasalt.ai/${currentLang}/seavoice/solutions/inbound/virtual-assistant`;
  
  const features = [
    {
      icon: Clock,
      title: t('seavoice.pages.solutions.inbound.virtualAssistant.features.availability.title'),
      description: t('seavoice.pages.solutions.inbound.virtualAssistant.features.availability.description'),
      benefits: [
        t('seavoice.pages.solutions.inbound.virtualAssistant.features.availability.benefits.0'),
        t('seavoice.pages.solutions.inbound.virtualAssistant.features.availability.benefits.1'),
        t('seavoice.pages.solutions.inbound.virtualAssistant.features.availability.benefits.2')
      ]
    },
    {
      icon: Phone,
      title: t('seavoice.pages.solutions.inbound.virtualAssistant.features.callHandling.title'),
      description: t('seavoice.pages.solutions.inbound.virtualAssistant.features.callHandling.description'),
      benefits: [
        t('seavoice.pages.solutions.inbound.virtualAssistant.features.callHandling.benefits.0'),
        t('seavoice.pages.solutions.inbound.virtualAssistant.features.callHandling.benefits.1'),
        t('seavoice.pages.solutions.inbound.virtualAssistant.features.callHandling.benefits.2')
      ]
    },
    {
      icon: Users,
      title: t('seavoice.pages.solutions.inbound.virtualAssistant.features.handoffs.title'),
      description: t('seavoice.pages.solutions.inbound.virtualAssistant.features.handoffs.description'),
      benefits: [
        t('seavoice.pages.solutions.inbound.virtualAssistant.features.handoffs.benefits.0'),
        t('seavoice.pages.solutions.inbound.virtualAssistant.features.handoffs.benefits.1'),
        t('seavoice.pages.solutions.inbound.virtualAssistant.features.handoffs.benefits.2')
      ]
    }
  ];

  const useCases = [
    {
      title: t('seavoice.pages.solutions.inbound.virtualAssistant.useCases.healthcare.title'),
      description: t('seavoice.pages.solutions.inbound.virtualAssistant.useCases.healthcare.description'),
      metrics: [
        t('seavoice.pages.solutions.inbound.virtualAssistant.useCases.healthcare.metrics.0'),
        t('seavoice.pages.solutions.inbound.virtualAssistant.useCases.healthcare.metrics.1'),
        t('seavoice.pages.solutions.inbound.virtualAssistant.useCases.healthcare.metrics.2')
      ]
    },
    {
      title: t('seavoice.pages.solutions.inbound.virtualAssistant.useCases.ecommerce.title'),
      description: t('seavoice.pages.solutions.inbound.virtualAssistant.useCases.ecommerce.description'),
      metrics: [
        t('seavoice.pages.solutions.inbound.virtualAssistant.useCases.ecommerce.metrics.0'),
        t('seavoice.pages.solutions.inbound.virtualAssistant.useCases.ecommerce.metrics.1'),
        t('seavoice.pages.solutions.inbound.virtualAssistant.useCases.ecommerce.metrics.2')
      ]
    },
    {
      title: t('seavoice.pages.solutions.inbound.virtualAssistant.useCases.financial.title'),
      description: t('seavoice.pages.solutions.inbound.virtualAssistant.useCases.financial.description'),
      metrics: [
        t('seavoice.pages.solutions.inbound.virtualAssistant.useCases.financial.metrics.0'),
        t('seavoice.pages.solutions.inbound.virtualAssistant.useCases.financial.metrics.1'),
        t('seavoice.pages.solutions.inbound.virtualAssistant.useCases.financial.metrics.2')
      ]
    }
  ];

  const benefits = [
    { metric: '80%', description: t('seavoice.pages.solutions.inbound.virtualAssistant.metrics.abandonment.description') },
    { metric: '24/7', description: t('seavoice.pages.solutions.inbound.virtualAssistant.metrics.availability.description') },
    { metric: '60%', description: t('seavoice.pages.solutions.inbound.virtualAssistant.metrics.costSavings.description') },
    { metric: '95%', description: t('seavoice.pages.solutions.inbound.virtualAssistant.metrics.satisfaction.description') }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Tags */}
      <SEOHelmet
        title={seoContent.title}
        description={seoContent.description}
        favicon="/seasalt-ai-favicon.ico"
        canonicalUrl={canonicalUrl}
        image="/seavoice-logo.png"
        tags={seoContent.keywords.split(', ')}
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <Clock className="w-16 h-16 text-blue-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              {t('seavoice.pages.solutions.inbound.virtualAssistant.hero.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {t('seavoice.pages.solutions.inbound.virtualAssistant.hero.description')}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              {t('seavoice.pages.solutions.inbound.virtualAssistant.hero.primaryCta')}
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
              {t('seavoice.pages.solutions.inbound.virtualAssistant.features.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('seavoice.pages.solutions.inbound.virtualAssistant.features.description')}
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
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-6">
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
              {t('seavoice.pages.solutions.inbound.virtualAssistant.benefits.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('seavoice.pages.solutions.inbound.virtualAssistant.benefits.description')}
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
                className="bg-white rounded-xl p-8 shadow-lg text-center"
              >
                <div className="text-4xl font-bold text-blue-600 mb-4">{benefit.metric}</div>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
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
              {t('seavoice.pages.solutions.inbound.virtualAssistant.useCases.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('seavoice.pages.solutions.inbound.virtualAssistant.useCases.description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                <p className="text-gray-600 mb-6">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-700">{metric}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">{t('seavoice.pages.solutions.inbound.virtualAssistant.cta.title')}</h2>
            <p className="text-xl mb-8 opacity-90">
              {t('seavoice.pages.solutions.inbound.virtualAssistant.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                {t('seavoice.pages.solutions.inbound.virtualAssistant.cta.primaryButton')}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                {t('seavoice.pages.solutions.inbound.virtualAssistant.cta.secondaryButton')}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default VirtualAssistantPage;
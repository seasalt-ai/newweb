import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mic, Zap, Globe, Shield, BarChart3, Settings } from 'lucide-react';
import SEOHelmet from '../../../components/SEOHelmet';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { SUPPORTED_LANGUAGES } from '../../../constants/languages';
import { getSEOData, getCanonicalUrl } from '../../../utils/seo';

const SpeechToTextPage = () => {
  const { t, i18n } = useTranslation();
  
  // Generate SEO data using standardized utility
  const seoData = getSEOData(t, 'seavoice.platform.speechToText', {
    canonicalUrl: getCanonicalUrl(i18n.language, '/seavoice/platform/speech-to-text')
  });
  const features = [
    {
      icon: Zap,
      title: t('seavoice.platform.speechToText.features.0.title'),
      description: t('seavoice.platform.speechToText.features.0.description'),
      specs: [
        t('seavoice.platform.speechToText.features.0.specs.0'),
        t('seavoice.platform.speechToText.features.0.specs.1'),
        t('seavoice.platform.speechToText.features.0.specs.2')
      ]
    },
    {
      icon: Globe,
      title: t('seavoice.platform.speechToText.features.1.title'),
      description: t('seavoice.platform.speechToText.features.1.description'),
      specs: [
        t('seavoice.platform.speechToText.features.1.specs.0'),
        t('seavoice.platform.speechToText.features.1.specs.1'),
        t('seavoice.platform.speechToText.features.1.specs.2')
      ]
    },
    {
      icon: Shield,
      title: t('seavoice.platform.speechToText.features.2.title'),
      description: t('seavoice.platform.speechToText.features.2.description'),
      specs: [
        t('seavoice.platform.speechToText.features.2.specs.0'),
        t('seavoice.platform.speechToText.features.2.specs.1'),
        t('seavoice.platform.speechToText.features.2.specs.2')
      ]
    }
  ];

  const accuracyStats = [
    {
      category: t('seavoice.platform.speechToText.accuracy.stats.0.category'),
      accuracy: t('seavoice.platform.speechToText.accuracy.stats.0.accuracy'),
      improvement: t('seavoice.platform.speechToText.accuracy.stats.0.improvement')
    },
    {
      category: t('seavoice.platform.speechToText.accuracy.stats.1.category'),
      accuracy: t('seavoice.platform.speechToText.accuracy.stats.1.accuracy'),
      improvement: t('seavoice.platform.speechToText.accuracy.stats.1.improvement')
    },
    {
      category: t('seavoice.platform.speechToText.accuracy.stats.2.category'),
      accuracy: t('seavoice.platform.speechToText.accuracy.stats.2.accuracy'),
      improvement: t('seavoice.platform.speechToText.accuracy.stats.2.improvement')
    },
    {
      category: t('seavoice.platform.speechToText.accuracy.stats.3.category'),
      accuracy: t('seavoice.platform.speechToText.accuracy.stats.3.accuracy'),
      improvement: t('seavoice.platform.speechToText.accuracy.stats.3.improvement')
    }
  ];

  const languages = [
    t('seavoice.platform.speechToText.languages.supportedLanguages.0'),
    t('seavoice.platform.speechToText.languages.supportedLanguages.1'),
    t('seavoice.platform.speechToText.languages.supportedLanguages.2'),
    t('seavoice.platform.speechToText.languages.supportedLanguages.3'),
    t('seavoice.platform.speechToText.languages.supportedLanguages.4'),
    t('seavoice.platform.speechToText.languages.supportedLanguages.5'),
    t('seavoice.platform.speechToText.languages.supportedLanguages.6'),
    t('seavoice.platform.speechToText.languages.supportedLanguages.7'),
    t('seavoice.platform.speechToText.languages.supportedLanguages.8'),
    t('seavoice.platform.speechToText.languages.supportedLanguages.9'),
    t('seavoice.platform.speechToText.languages.supportedLanguages.10'),
    t('seavoice.platform.speechToText.languages.supportedLanguages.11'),
    t('seavoice.platform.speechToText.languages.supportedLanguages.12'),
    t('seavoice.platform.speechToText.languages.supportedLanguages.13'),
    t('seavoice.platform.speechToText.languages.supportedLanguages.14'),
    t('seavoice.platform.speechToText.languages.supportedLanguages.15')
  ];

  const useCases = [
    {
      title: t('seavoice.platform.speechToText.useCases.0.title'),
      description: t('seavoice.platform.speechToText.useCases.0.description'),
      benefits: [
        t('seavoice.platform.speechToText.useCases.0.benefits.0'),
        t('seavoice.platform.speechToText.useCases.0.benefits.1'),
        t('seavoice.platform.speechToText.useCases.0.benefits.2'),
        t('seavoice.platform.speechToText.useCases.0.benefits.3')
      ]
    },
    {
      title: t('seavoice.platform.speechToText.useCases.1.title'),
      description: t('seavoice.platform.speechToText.useCases.1.description'),
      benefits: [
        t('seavoice.platform.speechToText.useCases.1.benefits.0'),
        t('seavoice.platform.speechToText.useCases.1.benefits.1'),
        t('seavoice.platform.speechToText.useCases.1.benefits.2'),
        t('seavoice.platform.speechToText.useCases.1.benefits.3')
      ]
    },
    {
      title: t('seavoice.platform.speechToText.useCases.2.title'),
      description: t('seavoice.platform.speechToText.useCases.2.description'),
      benefits: [
        t('seavoice.platform.speechToText.useCases.2.benefits.0'),
        t('seavoice.platform.speechToText.useCases.2.benefits.1'),
        t('seavoice.platform.speechToText.useCases.2.benefits.2'),
        t('seavoice.platform.speechToText.useCases.2.benefits.3')
      ]
    },
    {
      title: t('seavoice.platform.speechToText.useCases.3.title'),
      description: t('seavoice.platform.speechToText.useCases.3.description'),
      benefits: [
        t('seavoice.platform.speechToText.useCases.3.benefits.0'),
        t('seavoice.platform.speechToText.useCases.3.benefits.1'),
        t('seavoice.platform.speechToText.useCases.3.benefits.2'),
        t('seavoice.platform.speechToText.useCases.3.benefits.3')
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Tags */}
      <SEOHelmet
        title={seoData.title}
        description={seoData.description}
        favicon="/seasalt-ai-favicon.ico"
        canonicalUrl={seoData.canonicalUrl}
        availableLanguages={SUPPORTED_LANGUAGES}
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
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <Mic className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              {t('seavoice.platform.speechToText.hero.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {t('seavoice.platform.speechToText.hero.subtitle')}
            </p>
            <a
              href="https://chat.seasalt.ai/gpt/signup"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                {t('seavoice.platform.speechToText.hero.cta')}
              </motion.button>
            </a>
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
              {t('seavoice.platform.speechToText.features.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('seavoice.platform.speechToText.features.subtitle')}
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
                  {feature.specs.map((spec, specIndex) => (
                    <div key={specIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-700">{spec}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Accuracy Stats */}
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
              {t('seavoice.platform.speechToText.accuracy.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('seavoice.platform.speechToText.accuracy.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {accuracyStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg text-center"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4">{stat.category}</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.accuracy}</div>
                <p className="text-sm text-green-600 font-semibold">{stat.improvement}{t('seavoice.platform.speechToText.accuracy.improvementSuffix')}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Language Support */}
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
                {t('seavoice.platform.speechToText.languages.title')}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {t('seavoice.platform.speechToText.languages.subtitle')}
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Globe className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{t('seavoice.platform.speechToText.languages.features.0.title')}</h3>
                    <p className="text-gray-600">{t('seavoice.platform.speechToText.languages.features.0.description')}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Settings className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{t('seavoice.platform.speechToText.languages.features.1.title')}</h3>
                    <p className="text-gray-600">{t('seavoice.platform.speechToText.languages.features.1.description')}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <BarChart3 className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{t('seavoice.platform.speechToText.languages.features.2.title')}</h3>
                    <p className="text-gray-600">{t('seavoice.platform.speechToText.languages.features.2.description')}</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('seavoice.platform.speechToText.languages.supportedTitle')}</h3>
              <div className="grid grid-cols-1 gap-2">
                {languages.map((language, index) => (
                  <div key={index} className="flex items-center py-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">{language}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-white rounded-lg">
                <p className="text-sm text-gray-600 italic">
                  "{t('seavoice.platform.speechToText.languages.customNote')}"
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
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
              {t('seavoice.platform.speechToText.useCases.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('seavoice.platform.speechToText.useCases.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                <p className="text-gray-600 mb-6">{useCase.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs */}
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
              {t('seavoice.platform.speechToText.specs.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('seavoice.platform.speechToText.specs.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-200"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">{t('seavoice.platform.speechToText.specs.performance.title')}</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">{t('seavoice.platform.speechToText.specs.performance.latency.label')}</span>
                  <span className="font-semibold">{t('seavoice.platform.speechToText.specs.performance.latency.value')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">{t('seavoice.platform.speechToText.specs.performance.accuracy.label')}</span>
                  <span className="font-semibold">{t('seavoice.platform.speechToText.specs.performance.accuracy.value')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">{t('seavoice.platform.speechToText.specs.performance.throughput.label')}</span>
                  <span className="font-semibold">{t('seavoice.platform.speechToText.specs.performance.throughput.value')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">{t('seavoice.platform.speechToText.specs.performance.uptime.label')}</span>
                  <span className="font-semibold">{t('seavoice.platform.speechToText.specs.performance.uptime.value')}</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-200"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">{t('seavoice.platform.speechToText.specs.audioFormats.title')}</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">{t('seavoice.platform.speechToText.specs.audioFormats.sampleRate.label')}</span>
                  <span className="font-semibold">{t('seavoice.platform.speechToText.specs.audioFormats.sampleRate.value')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">{t('seavoice.platform.speechToText.specs.audioFormats.bitDepth.label')}</span>
                  <span className="font-semibold">{t('seavoice.platform.speechToText.specs.audioFormats.bitDepth.value')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">{t('seavoice.platform.speechToText.specs.audioFormats.formats.label')}</span>
                  <span className="font-semibold">{t('seavoice.platform.speechToText.specs.audioFormats.formats.value')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">{t('seavoice.platform.speechToText.specs.audioFormats.streaming.label')}</span>
                  <span className="font-semibold">{t('seavoice.platform.speechToText.specs.audioFormats.streaming.value')}</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-200"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">{t('seavoice.platform.speechToText.specs.integration.title')}</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">{t('seavoice.platform.speechToText.specs.integration.api.label')}</span>
                  <span className="font-semibold">{t('seavoice.platform.speechToText.specs.integration.api.value')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">{t('seavoice.platform.speechToText.specs.integration.sdks.label')}</span>
                  <span className="font-semibold">{t('seavoice.platform.speechToText.specs.integration.sdks.value')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">{t('seavoice.platform.speechToText.specs.integration.webhooks.label')}</span>
                  <span className="font-semibold">{t('seavoice.platform.speechToText.specs.integration.webhooks.value')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">{t('seavoice.platform.speechToText.specs.integration.security.label')}</span>
                  <span className="font-semibold">{t('seavoice.platform.speechToText.specs.integration.security.value')}</span>
                </div>
              </div>
            </motion.div>
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
            <h2 className="text-4xl font-bold mb-6">{t('seavoice.platform.speechToText.cta.title')}</h2>
            <p className="text-xl mb-8 opacity-90">
              {t('seavoice.platform.speechToText.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://chat.seasalt.ai/gpt/signup"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  {t('seavoice.platform.speechToText.cta.primaryButton')}
                </motion.button>
              </a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                {t('seavoice.platform.speechToText.cta.secondaryButton')}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SpeechToTextPage;

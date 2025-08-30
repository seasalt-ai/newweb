
import { motion } from 'framer-motion';
import { Mic, Brain, BarChart3, Phone, Globe, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const PlatformPage = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: Mic,
      title: t('seavoice.platform.features.aiVoice.title'),
      description: t('seavoice.platform.features.aiVoice.description'),
      features: [t('seavoice.platform.features.aiVoice.feature1'), t('seavoice.platform.features.aiVoice.feature2'), t('seavoice.platform.features.aiVoice.feature3'), t('seavoice.platform.features.aiVoice.feature4')]
    },
    {
      icon: Brain,
      title: t('seavoice.platform.features.conversationalAI.title'),
      description: t('seavoice.platform.features.conversationalAI.description'),
      features: [t('seavoice.platform.features.conversationalAI.feature1'), t('seavoice.platform.features.conversationalAI.feature2'), t('seavoice.platform.features.conversationalAI.feature3'), t('seavoice.platform.features.conversationalAI.feature4')]
    },
    {
      icon: BarChart3,
      title: t('seavoice.platform.features.analytics.title'),
      description: t('seavoice.platform.features.analytics.description'),
      features: [t('seavoice.platform.features.analytics.feature1'), t('seavoice.platform.features.analytics.feature2'), t('seavoice.platform.features.analytics.feature3'), t('seavoice.platform.features.analytics.feature4')]
    },
    {
      icon: Phone,
      title: t('seavoice.platform.features.telephony.title'),
      description: t('seavoice.platform.features.telephony.description'),
      features: [t('seavoice.platform.features.telephony.feature1'), t('seavoice.platform.features.telephony.feature2'), t('seavoice.platform.features.telephony.feature3'), t('seavoice.platform.features.telephony.feature4')]
    },
    {
      icon: Globe,
      title: t('seavoice.platform.features.integrations.title'),
      description: t('seavoice.platform.features.integrations.description'),
      features: [t('seavoice.platform.features.integrations.feature1'), t('seavoice.platform.features.integrations.feature2'), t('seavoice.platform.features.integrations.feature3'), t('seavoice.platform.features.integrations.feature4')]
    },
    {
      icon: Zap,
      title: t('seavoice.platform.features.speech.title'),
      description: t('seavoice.platform.features.speech.description'),
      features: [t('seavoice.platform.features.speech.feature1'), t('seavoice.platform.features.speech.feature2'), t('seavoice.platform.features.speech.feature3'), t('seavoice.platform.features.speech.feature4')]
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
              {t('seavoice.platform.hero.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {t('seavoice.platform.hero.description')}
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
                {t('seavoice.platform.hero.cta')}
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center mr-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Showcase */}
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
              {t('seavoice.platform.technology.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('seavoice.platform.technology.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: t('seavoice.platform.technology.speechRecognition.title'),
                description: t('seavoice.platform.technology.speechRecognition.description'),
                metrics: [t('seavoice.platform.technology.speechRecognition.metric1'), t('seavoice.platform.technology.speechRecognition.metric2'), t('seavoice.platform.technology.speechRecognition.metric3')]
              },
              {
                title: t('seavoice.platform.technology.nlp.title'),
                description: t('seavoice.platform.technology.nlp.description'),
                metrics: [t('seavoice.platform.technology.nlp.metric1'), t('seavoice.platform.technology.nlp.metric2'), t('seavoice.platform.technology.nlp.metric3')]
              },
              {
                title: t('seavoice.platform.technology.voiceSynthesis.title'),
                description: t('seavoice.platform.technology.voiceSynthesis.description'),
                metrics: [t('seavoice.platform.technology.voiceSynthesis.metric1'), t('seavoice.platform.technology.voiceSynthesis.metric2'), t('seavoice.platform.technology.voiceSynthesis.metric3')]
              }
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{tech.title}</h3>
                <p className="text-gray-600 mb-6">{tech.description}</p>
                <div className="space-y-2">
                  {tech.metrics.map((metric, metricIndex) => (
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
    </div>
  );
};

export default PlatformPage;
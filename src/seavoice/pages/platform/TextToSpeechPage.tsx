import { useState } from 'react';
import { motion } from 'framer-motion';
import { Volume2, User, Settings, Globe, Play, Pause } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const TextToSpeechPage = () => {
  const { t } = useTranslation();
  const [selectedVoice, setSelectedVoice] = useState('sarah');
  const [isPlaying, setIsPlaying] = useState(false);

  const voices = [
    { id: 'sarah', name: t('textToSpeech.voices.sarah.name'), gender: t('textToSpeech.voices.sarah.gender'), accent: t('textToSpeech.voices.sarah.accent'), description: t('textToSpeech.voices.sarah.description') },
    { id: 'tom', name: t('textToSpeech.voices.tom.name'), gender: t('textToSpeech.voices.tom.gender'), accent: t('textToSpeech.voices.tom.accent'), description: t('textToSpeech.voices.tom.description') },
    { id: 'lissa', name: t('textToSpeech.voices.lissa.name'), gender: t('textToSpeech.voices.lissa.gender'), accent: t('textToSpeech.voices.lissa.accent'), description: t('textToSpeech.voices.lissa.description') },
    { id: 'alex', name: t('textToSpeech.voices.alex.name'), gender: t('textToSpeech.voices.alex.gender'), accent: t('textToSpeech.voices.alex.accent'), description: t('textToSpeech.voices.alex.description') },
    { id: 'maria', name: t('textToSpeech.voices.maria.name'), gender: t('textToSpeech.voices.maria.gender'), accent: t('textToSpeech.voices.maria.accent'), description: t('textToSpeech.voices.maria.description') },
    { id: 'hiroshi', name: t('textToSpeech.voices.hiroshi.name'), gender: t('textToSpeech.voices.hiroshi.gender'), accent: t('textToSpeech.voices.hiroshi.accent'), description: t('textToSpeech.voices.hiroshi.description') }
  ];

  const features = [
    {
      icon: User,
      title: t('textToSpeech.features.customVoiceCloning.title'),
      description: t('textToSpeech.features.customVoiceCloning.description'),
      capabilities: [
        t('textToSpeech.features.customVoiceCloning.capabilities.voiceCloning'),
        t('textToSpeech.features.customVoiceCloning.capabilities.brandVoice'),
        t('textToSpeech.features.customVoiceCloning.capabilities.emotionalExpression'),
        t('textToSpeech.features.customVoiceCloning.capabilities.customPronunciations')
      ]
    },
    {
      icon: Settings,
      title: t('textToSpeech.features.advancedControls.title'),
      description: t('textToSpeech.features.advancedControls.description'),
      capabilities: [
        t('textToSpeech.features.advancedControls.capabilities.speedAdjustment'),
        t('textToSpeech.features.advancedControls.capabilities.pitchControl'),
        t('textToSpeech.features.advancedControls.capabilities.emphasisPlacement'),
        t('textToSpeech.features.advancedControls.capabilities.pauseInsertion')
      ]
    },
    {
      icon: Globe,
      title: t('textToSpeech.features.multiLanguageSupport.title'),
      description: t('textToSpeech.features.multiLanguageSupport.description'),
      capabilities: [
        t('textToSpeech.features.multiLanguageSupport.capabilities.fortyPlusLanguages'),
        t('textToSpeech.features.multiLanguageSupport.capabilities.regionalAccents'),
        t('textToSpeech.features.multiLanguageSupport.capabilities.codeSwitching'),
        t('textToSpeech.features.multiLanguageSupport.capabilities.multilingualVoices')
      ]
    }
  ];

  const qualityMetrics = [
    { metric: t('textToSpeech.qualityMetrics.naturalness.metric'), value: t('textToSpeech.qualityMetrics.naturalness.value'), description: t('textToSpeech.qualityMetrics.naturalness.description') },
    { metric: t('textToSpeech.qualityMetrics.intelligibility.metric'), value: t('textToSpeech.qualityMetrics.intelligibility.value'), description: t('textToSpeech.qualityMetrics.intelligibility.description') },
    { metric: t('textToSpeech.qualityMetrics.latency.metric'), value: t('textToSpeech.qualityMetrics.latency.value'), description: t('textToSpeech.qualityMetrics.latency.description') },
    { metric: t('textToSpeech.qualityMetrics.audioQuality.metric'), value: t('textToSpeech.qualityMetrics.audioQuality.value'), description: t('textToSpeech.qualityMetrics.audioQuality.description') }
  ];

  const useCases = [
    {
      title: t('textToSpeech.useCases.customerService.title'),
      description: t('textToSpeech.useCases.customerService.description'),
      benefits: [
        t('textToSpeech.useCases.customerService.benefits.availability'),
        t('textToSpeech.useCases.customerService.benefits.consistentQuality'),
        t('textToSpeech.useCases.customerService.benefits.multiLanguageSupport'),
        t('textToSpeech.useCases.customerService.benefits.brandVoiceAlignment')
      ]
    },
    {
      title: t('textToSpeech.useCases.contentCreation.title'),
      description: t('textToSpeech.useCases.contentCreation.description'),
      benefits: [
        t('textToSpeech.useCases.contentCreation.benefits.costEffectiveProduction'),
        t('textToSpeech.useCases.contentCreation.benefits.quickTurnaround'),
        t('textToSpeech.useCases.contentCreation.benefits.multipleVoiceOptions'),
        t('textToSpeech.useCases.contentCreation.benefits.easyRevisions')
      ]
    },
    {
      title: t('textToSpeech.useCases.accessibility.title'),
      description: t('textToSpeech.useCases.accessibility.description'),
      benefits: [
        t('textToSpeech.useCases.accessibility.benefits.screenReaderEnhancement'),
        t('textToSpeech.useCases.accessibility.benefits.documentNarration'),
        t('textToSpeech.useCases.accessibility.benefits.webAccessibility'),
        t('textToSpeech.useCases.accessibility.benefits.educationalSupport')
      ]
    },
    {
      title: t('textToSpeech.useCases.interactiveApplications.title'),
      description: t('textToSpeech.useCases.interactiveApplications.description'),
      benefits: [
        t('textToSpeech.useCases.interactiveApplications.benefits.realTimeGeneration'),
        t('textToSpeech.useCases.interactiveApplications.benefits.dynamicContent'),
        t('textToSpeech.useCases.interactiveApplications.benefits.userEngagement'),
        t('textToSpeech.useCases.interactiveApplications.benefits.immersiveExperiences')
      ]
    }
  ];

  const handlePlay = () => {
    setIsPlaying(true);
    setTimeout(() => setIsPlaying(false), 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                <Volume2 className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              {t('textToSpeech.hero.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {t('textToSpeech.hero.subtitle')}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              {t('textToSpeech.hero.cta')}
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Interactive Voice Demo */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {t('textToSpeech.demo.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('textToSpeech.demo.subtitle')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200"
          >
            <div className="space-y-6">
              {/* Voice Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  {t('textToSpeech.demo.chooseVoice')}
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {voices.map((voice) => (
                    <motion.div
                      key={voice.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedVoice(voice.id)}
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        selectedVoice === voice.id
                          ? 'border-purple-600 bg-purple-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="font-semibold text-gray-900">{voice.name}</div>
                      <div className="text-sm text-gray-600">{voice.gender} • {voice.accent}</div>
                      <div className="text-xs text-gray-500 mt-1">{voice.description}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Text Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('textToSpeech.demo.textPrompt')}
                </label>
                <textarea
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent resize-none"
                  rows={3}
                  defaultValue={t('textToSpeech.demo.defaultText')}
                  placeholder={t('textToSpeech.demo.placeholderText')}
                />
              </div>

              {/* Play Button */}
              <div className="text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handlePlay}
                  disabled={isPlaying}
                  className={`inline-flex items-center px-8 py-4 rounded-lg text-lg font-semibold transition-all ${
                    isPlaying
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                  }`}
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-5 h-5 mr-2" />
                      {t('textToSpeech.demo.playing')}
                    </>
                  ) : (
                    <>
                      <Play className="w-5 h-5 mr-2" />
                      {t('textToSpeech.demo.generateSpeech')}
                    </>
                  )}
                </motion.button>
              </div>

              {/* Audio Visualization */}
              {isPlaying && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center justify-center space-x-1 h-16"
                >
                  {[...Array(25)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1 bg-gradient-to-t from-purple-600 to-blue-600 rounded-full"
                      animate={{
                        height: [4, Math.random() * 50 + 10, 4],
                      }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        delay: i * 0.05,
                      }}
                    />
                  ))}
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
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
              {t('textToSpeech.features.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('textToSpeech.features.subtitle')}
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
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                <div className="space-y-2">
                  {feature.capabilities.map((capability, capIndex) => (
                    <div key={capIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-700">{capability}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Metrics */}
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
              {t('textToSpeech.qualityMetrics.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('textToSpeech.qualityMetrics.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 text-center"
              >
                <div className="text-3xl font-bold text-purple-600 mb-2">{metric.value}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{metric.metric}</h3>
                <p className="text-sm text-gray-600">{metric.description}</p>
              </motion.div>
            ))}
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
              {t('textToSpeech.useCases.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('textToSpeech.useCases.subtitle')}
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
                      <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Voice Cloning Section */}
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
                {t('textToSpeech.voiceCloning.title')}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {t('textToSpeech.voiceCloning.subtitle')}
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <User className="w-6 h-6 text-purple-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{t('textToSpeech.voiceCloning.brandVoiceConsistency.title')}</h3>
                    <p className="text-gray-600">{t('textToSpeech.voiceCloning.brandVoiceConsistency.description')}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Settings className="w-6 h-6 text-purple-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{t('textToSpeech.voiceCloning.fineTunedControl.title')}</h3>
                    <p className="text-gray-600">{t('textToSpeech.voiceCloning.fineTunedControl.description')}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Volume2 className="w-6 h-6 text-purple-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{t('textToSpeech.voiceCloning.highFidelityOutput.title')}</h3>
                    <p className="text-gray-600">{t('textToSpeech.voiceCloning.highFidelityOutput.description')}</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('textToSpeech.voiceCloning.process.title')}</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center mr-4 text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{t('textToSpeech.voiceCloning.process.step1.title')}</h4>
                    <p className="text-gray-600 text-sm">{t('textToSpeech.voiceCloning.process.step1.description')}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center mr-4 text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{t('textToSpeech.voiceCloning.process.step2.title')}</h4>
                    <p className="text-gray-600 text-sm">{t('textToSpeech.voiceCloning.process.step2.description')}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center mr-4 text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{t('textToSpeech.voiceCloning.process.step3.title')}</h4>
                    <p className="text-gray-600 text-sm">{t('textToSpeech.voiceCloning.process.step3.description')}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">{t('textToSpeech.cta.title')}</h2>
            <p className="text-xl mb-8 opacity-90">
              {t('textToSpeech.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                {t('textToSpeech.cta.startVoiceCloning')}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                {t('textToSpeech.cta.exploreApi')}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TextToSpeechPage;
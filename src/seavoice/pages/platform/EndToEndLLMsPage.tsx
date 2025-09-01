import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Brain, Zap, Shield, Database, MessageSquare, BarChart3 } from 'lucide-react';
import SEOHelmet from '../../../components/SEOHelmet';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { SUPPORTED_LANGUAGES } from '../../../constants/languages';
import { getSEOData, getCanonicalUrl } from '../../../utils/seo';

const EndToEndLLMsPage = () => {
  const { t, i18n } = useTranslation();
  
  // Generate SEO data using standardized utility
  const seoData = getSEOData(t, 'seavoice.platform.endToEndLLMs', {
    canonicalUrl: getCanonicalUrl(i18n.language, '/seavoice/platform/end-to-end-llms')
  });
  
  const features = [
    {
      icon: Brain,
      title: t('seavoice.platform.endToEndLLMs.features.advancedModels.title'),
      description: t('seavoice.platform.endToEndLLMs.features.advancedModels.description'),
      capabilities: [
        t('seavoice.platform.endToEndLLMs.features.advancedModels.gpt4Integration'),
        t('seavoice.platform.endToEndLLMs.features.advancedModels.customFineTuning'),
        t('seavoice.platform.endToEndLLMs.features.advancedModels.domainSpecific'),
        t('seavoice.platform.endToEndLLMs.features.advancedModels.multiModal')
      ]
    },
    {
      icon: Database,
      title: t('seavoice.platform.endToEndLLMs.features.knowledgeIntegration.title'),
      description: t('seavoice.platform.endToEndLLMs.features.knowledgeIntegration.description'),
      capabilities: [
        t('seavoice.platform.endToEndLLMs.features.knowledgeIntegration.documentIngestion'),
        t('seavoice.platform.endToEndLLMs.features.knowledgeIntegration.realTimeUpdates'),
        t('seavoice.platform.endToEndLLMs.features.knowledgeIntegration.semanticSearch'),
        t('seavoice.platform.endToEndLLMs.features.knowledgeIntegration.contextAwareness')
      ]
    },
    {
      icon: Shield,
      title: t('seavoice.platform.endToEndLLMs.features.enterpriseSecurity.title'),
      description: t('seavoice.platform.endToEndLLMs.features.enterpriseSecurity.description'),
      capabilities: [
        t('seavoice.platform.endToEndLLMs.features.enterpriseSecurity.dataEncryption'),
        t('seavoice.platform.endToEndLLMs.features.enterpriseSecurity.accessControls'),
        t('seavoice.platform.endToEndLLMs.features.enterpriseSecurity.auditLogging'),
        t('seavoice.platform.endToEndLLMs.features.enterpriseSecurity.complianceReady')
      ]
    }
  ];

  const llmCapabilities = [
    {
      category: t('seavoice.platform.endToEndLLMs.capabilities.nlu.category'),
      description: t('seavoice.platform.endToEndLLMs.capabilities.nlu.description'),
      metrics: [
        t('seavoice.platform.endToEndLLMs.capabilities.nlu.intentAccuracy'),
        t('seavoice.platform.endToEndLLMs.capabilities.nlu.contextRetention'),
        t('seavoice.platform.endToEndLLMs.capabilities.nlu.sentimentAnalysis')
      ]
    },
    {
      category: t('seavoice.platform.endToEndLLMs.capabilities.conversationalFlow.category'),
      description: t('seavoice.platform.endToEndLLMs.capabilities.conversationalFlow.description'),
      metrics: [
        t('seavoice.platform.endToEndLLMs.capabilities.conversationalFlow.multiTurnCoherence'),
        t('seavoice.platform.endToEndLLMs.capabilities.conversationalFlow.topicSwitching'),
        t('seavoice.platform.endToEndLLMs.capabilities.conversationalFlow.contextPreservation')
      ]
    },
    {
      category: t('seavoice.platform.endToEndLLMs.capabilities.businessLogic.category'),
      description: t('seavoice.platform.endToEndLLMs.capabilities.businessLogic.description'),
      metrics: [
        t('seavoice.platform.endToEndLLMs.capabilities.businessLogic.workflowAccuracy'),
        t('seavoice.platform.endToEndLLMs.capabilities.businessLogic.decisionConsistency'),
        t('seavoice.platform.endToEndLLMs.capabilities.businessLogic.errorHandling')
      ]
    },
    {
      category: t('seavoice.platform.endToEndLLMs.capabilities.personalization.category'),
      description: t('seavoice.platform.endToEndLLMs.capabilities.personalization.description'),
      metrics: [
        t('seavoice.platform.endToEndLLMs.capabilities.personalization.personalizationScore'),
        t('seavoice.platform.endToEndLLMs.capabilities.personalization.userSatisfaction'),
        t('seavoice.platform.endToEndLLMs.capabilities.personalization.engagementRate')
      ]
    }
  ];

  const architectureComponents = [
    {
      title: t('seavoice.platform.endToEndLLMs.architecture.speechInput.title'),
      description: t('seavoice.platform.endToEndLLMs.architecture.speechInput.description'),
      technologies: [
        t('seavoice.platform.endToEndLLMs.architecture.speechInput.kaldiASR'),
        t('seavoice.platform.endToEndLLMs.architecture.speechInput.noiseReduction'),
        t('seavoice.platform.endToEndLLMs.architecture.speechInput.speakerDiarization')
      ]
    },
    {
      title: t('seavoice.platform.endToEndLLMs.architecture.llmProcessing.title'),
      description: t('seavoice.platform.endToEndLLMs.architecture.llmProcessing.description'),
      technologies: [
        t('seavoice.platform.endToEndLLMs.architecture.llmProcessing.gpt4Turbo'),
        t('seavoice.platform.endToEndLLMs.architecture.llmProcessing.customFineTuning'),
        t('seavoice.platform.endToEndLLMs.architecture.llmProcessing.ragIntegration')
      ]
    },
    {
      title: t('seavoice.platform.endToEndLLMs.architecture.responseGeneration.title'),
      description: t('seavoice.platform.endToEndLLMs.architecture.responseGeneration.description'),
      technologies: [
        t('seavoice.platform.endToEndLLMs.architecture.responseGeneration.templateSystems'),
        t('seavoice.platform.endToEndLLMs.architecture.responseGeneration.dynamicContent'),
        t('seavoice.platform.endToEndLLMs.architecture.responseGeneration.complianceChecking')
      ]
    },
    {
      title: t('seavoice.platform.endToEndLLMs.architecture.speechOutput.title'),
      description: t('seavoice.platform.endToEndLLMs.architecture.speechOutput.description'),
      technologies: [
        t('seavoice.platform.endToEndLLMs.architecture.speechOutput.neuralTTS'),
        t('seavoice.platform.endToEndLLMs.architecture.speechOutput.voiceCloning'),
        t('seavoice.platform.endToEndLLMs.architecture.speechOutput.emotionControl')
      ]
    }
  ];

  const useCases = [
    {
      title: t('seavoice.platform.endToEndLLMs.useCases.customerSupport.title'),
      description: t('seavoice.platform.endToEndLLMs.useCases.customerSupport.description'),
      benefits: [
        t('seavoice.platform.endToEndLLMs.useCases.customerSupport.reducedEscalation'),
        t('seavoice.platform.endToEndLLMs.useCases.customerSupport.fasterResolution'),
        t('seavoice.platform.endToEndLLMs.useCases.customerSupport.consistentQuality'),
        t('seavoice.platform.endToEndLLMs.useCases.customerSupport.availability24x7')
      ]
    },
    {
      title: t('seavoice.platform.endToEndLLMs.useCases.salesConversations.title'),
      description: t('seavoice.platform.endToEndLLMs.useCases.salesConversations.description'),
      benefits: [
        t('seavoice.platform.endToEndLLMs.useCases.salesConversations.higherConversion'),
        t('seavoice.platform.endToEndLLMs.useCases.salesConversations.personalizedRecommendations'),
        t('seavoice.platform.endToEndLLMs.useCases.salesConversations.objectionHandling'),
        t('seavoice.platform.endToEndLLMs.useCases.salesConversations.leadQualification')
      ]
    },
    {
      title: t('seavoice.platform.endToEndLLMs.useCases.technicalSupport.title'),
      description: t('seavoice.platform.endToEndLLMs.useCases.technicalSupport.description'),
      benefits: [
        t('seavoice.platform.endToEndLLMs.useCases.technicalSupport.complexTroubleshooting'),
        t('seavoice.platform.endToEndLLMs.useCases.technicalSupport.stepByStepGuidance'),
        t('seavoice.platform.endToEndLLMs.useCases.technicalSupport.documentationAccess'),
        t('seavoice.platform.endToEndLLMs.useCases.technicalSupport.escalationIntelligence')
      ]
    },
    {
      title: t('seavoice.platform.endToEndLLMs.useCases.healthcareAssistance.title'),
      description: t('seavoice.platform.endToEndLLMs.useCases.healthcareAssistance.description'),
      benefits: [
        t('seavoice.platform.endToEndLLMs.useCases.healthcareAssistance.medicalKnowledge'),
        t('seavoice.platform.endToEndLLMs.useCases.healthcareAssistance.appointmentScheduling'),
        t('seavoice.platform.endToEndLLMs.useCases.healthcareAssistance.symptomAssessment'),
        t('seavoice.platform.endToEndLLMs.useCases.healthcareAssistance.careCoordination')
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
      <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center">
                <Brain className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              {t('seavoice.platform.endToEndLLMs.hero.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {t('seavoice.platform.endToEndLLMs.hero.subtitle')}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              {t('seavoice.platform.endToEndLLMs.hero.cta')}
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
              {t('seavoice.platform.endToEndLLMs.features.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('seavoice.platform.endToEndLLMs.features.subtitle')}
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
                  {feature.capabilities.map((capability, capIndex) => (
                    <div key={capIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-700">{capability}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LLM Capabilities */}
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
              {t('seavoice.platform.endToEndLLMs.capabilities.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('seavoice.platform.endToEndLLMs.capabilities.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {llmCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{capability.category}</h3>
                <p className="text-gray-600 mb-6">{capability.description}</p>
                <div className="space-y-2">
                  {capability.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center">
                      <BarChart3 className="w-4 h-4 text-indigo-600 mr-3" />
                      <span className="text-sm text-gray-700">{metric}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Overview */}
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
              {t('seavoice.platform.endToEndLLMs.architecture.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('seavoice.platform.endToEndLLMs.architecture.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {architectureComponents.map((component, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{component.title}</h3>
                <p className="text-gray-600 mb-4">{component.description}</p>
                <div className="space-y-1">
                  {component.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="text-sm text-indigo-600 font-medium">
                      {tech}
                    </div>
                  ))}
                </div>
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
              {t('seavoice.platform.endToEndLLMs.useCases.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('seavoice.platform.endToEndLLMs.useCases.subtitle')}
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
                      <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
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
                {t('seavoice.platform.endToEndLLMs.performance.title')}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {t('seavoice.platform.endToEndLLMs.performance.description')}
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Zap className="w-6 h-6 text-indigo-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{t('seavoice.platform.endToEndLLMs.performance.realTimeTitle')}</h3>
                    <p className="text-gray-600">{t('seavoice.platform.endToEndLLMs.performance.realTimeDesc')}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Shield className="w-6 h-6 text-indigo-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{t('seavoice.platform.endToEndLLMs.performance.securityTitle')}</h3>
                    <p className="text-gray-600">{t('seavoice.platform.endToEndLLMs.performance.securityDesc')}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MessageSquare className="w-6 h-6 text-indigo-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{t('seavoice.platform.endToEndLLMs.performance.qualityTitle')}</h3>
                    <p className="text-gray-600">{t('seavoice.platform.endToEndLLMs.performance.qualityDesc')}</p>
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('seavoice.platform.endToEndLLMs.performance.metricsTitle')}</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">{t('seavoice.platform.endToEndLLMs.performance.responseLatency')}</span>
                  <span className="font-semibold text-2xl text-indigo-600">{t('seavoice.platform.endToEndLLMs.performance.responseLatencyValue')}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">{t('seavoice.platform.endToEndLLMs.performance.intentAccuracy')}</span>
                  <span className="font-semibold text-2xl text-indigo-600">{t('seavoice.platform.endToEndLLMs.performance.intentAccuracyValue')}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">{t('seavoice.platform.endToEndLLMs.performance.contextRetention')}</span>
                  <span className="font-semibold text-2xl text-indigo-600">{t('seavoice.platform.endToEndLLMs.performance.contextRetentionValue')}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">{t('seavoice.platform.endToEndLLMs.performance.uptimeSLA')}</span>
                  <span className="font-semibold text-2xl text-indigo-600">{t('seavoice.platform.endToEndLLMs.performance.uptimeSLAValue')}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">{t('seavoice.platform.endToEndLLMs.performance.concurrentUsers')}</span>
                  <span className="font-semibold text-2xl text-indigo-600">{t('seavoice.platform.endToEndLLMs.performance.concurrentUsersValue')}</span>
                </div>
              </div>
            </motion.div>
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
            <h2 className="text-4xl font-bold mb-6">{t('seavoice.platform.endToEndLLMs.cta.title')}</h2>
            <p className="text-xl mb-8 opacity-90">
              {t('seavoice.platform.endToEndLLMs.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                {t('seavoice.platform.endToEndLLMs.cta.scheduleDemoButton')}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
              >
                {t('seavoice.platform.endToEndLLMs.cta.exploreArchButton')}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EndToEndLLMsPage;

import { Phone, Mic, Volume2, Clock, Globe, Brain, ArrowRight, Play } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const VoiceAgentsPage = () => {
  const { t } = useTranslation();
  
  // Get features list with safety check
  const getFeaturesList = () => {
    const featuresList = t('features.voiceAgents.featuresList', { returnObjects: true });
    return Array.isArray(featuresList) ? featuresList : [
      'Natural speech processing',
      'Multi-language support',
      'Phone system integration',
      'Voice sentiment analysis',
      'Call recording and analysis',
      'Intelligent human escalation'
    ];
  };

  const features = [
    {
      icon: Phone,
      title: t('features.voiceAgents.natural.title', 'Natural Voice Conversations'),
      description: t('features.voiceAgents.natural.description', 'AI-powered voice agents that sound natural and understand context.'),
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Mic,
      title: t('features.voiceAgents.speech.title', 'Advanced Speech Recognition'),
      description: t('features.voiceAgents.speech.description', 'Accurate speech-to-text conversion in multiple languages and accents.'),
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: Volume2,
      title: t('features.voiceAgents.synthesis.title', 'High-Quality Voice Synthesis'),
      description: t('features.voiceAgents.synthesis.description', 'Crystal-clear, human-like voice output with emotional intelligence.'),
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Clock,
      title: t('features.voiceAgents.support.title', '24/7 Voice Support'),
      description: t('features.voiceAgents.support.description', 'Round-the-clock voice assistance for global customer support.'),
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: Globe,
      title: t('features.voiceAgents.multilanguage.title', 'Multi-Language Support'),
      description: t('features.voiceAgents.multilanguage.description', 'Support for 50+ languages with native pronunciation.'),
      color: 'from-teal-500 to-blue-600'
    },
    {
      icon: Brain,
      title: t('features.voiceAgents.routing.title', 'Intelligent Call Routing'),
      description: t('features.voiceAgents.routing.description', 'Smart routing to human agents when complex issues arise.'),
      color: 'from-indigo-500 to-purple-600'
    }
  ];

  const voiceCapabilities = [
    {
      title: t('features.voiceAgents.capabilities.service.title', 'Customer Service Calls'),
      description: t('features.voiceAgents.capabilities.service.description', 'Handle routine inquiries, order status, and basic troubleshooting'),
      accuracy: '95%',
      avgDuration: '2.5 min'
    },
    {
      title: t('features.voiceAgents.capabilities.appointments.title', 'Appointment Scheduling'),
      description: t('features.voiceAgents.capabilities.appointments.description', 'Book, reschedule, and confirm appointments automatically'),
      accuracy: '98%',
      avgDuration: '1.8 min'
    },
    {
      title: t('features.voiceAgents.capabilities.orders.title', 'Order Processing'),
      description: t('features.voiceAgents.capabilities.orders.description', 'Take orders, process payments, and confirm details'),
      accuracy: '92%',
      avgDuration: '3.2 min'
    },
    {
      title: t('features.voiceAgents.capabilities.support.title', 'Technical Support'),
      description: t('features.voiceAgents.capabilities.support.description', 'Guide customers through basic troubleshooting steps'),
      accuracy: '88%',
      avgDuration: '4.1 min'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Phone className="w-16 h-16 text-indigo-300 mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold">
                {t('features.voiceAgents.title', 'Voice Agents')}
              </h1>
            </div>
            <p className="text-2xl text-indigo-200 mb-8 max-w-4xl mx-auto">
              {t('features.voiceAgents.subtitle', 'Transform phone support with AI voice agents that sound natural, understand context, and provide instant assistance in multiple languages.')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://chat.seasalt.ai/gpt/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-500 hover:bg-indigo-400 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 text-center"
              >
                Sign Up For Free
              </a>
              <a
                href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white hover:bg-white hover:text-indigo-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all flex items-center justify-center text-center"
              >
                Schedule Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('features.voiceAgents.capabilitiesTitle', 'Advanced Voice Capabilities')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('features.voiceAgents.capabilitiesSubtitle', 'Our voice agents combine cutting-edge AI with natural language processing for human-like conversations.')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Voice Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('features.voiceAgents.performanceTitle', 'Voice Agent Performance')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('features.voiceAgents.performanceSubtitle', 'See how our voice agents perform across different types of customer interactions.')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {voiceCapabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{capability.title}</h3>
                <p className="text-gray-600 mb-6">{capability.description}</p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center bg-green-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-600">{capability.accuracy}</div>
                    <div className="text-sm text-gray-600">{t('features.voiceAgents.accuracyRate', 'Accuracy Rate')}</div>
                  </div>
                  <div className="text-center bg-blue-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-600">{capability.avgDuration}</div>
                    <div className="text-sm text-gray-600">{t('features.voiceAgents.avgDuration', 'Avg Duration')}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Voice Demo Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('features.voiceAgents.experienceTitle', 'Experience Voice AI in Action')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('features.voiceAgents.experienceSubtitle', 'Listen to real conversations between customers and our voice agents.')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('features.voiceAgents.sampleTitle', 'Sample Conversation')}</h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center mb-2">
                      <Phone className="w-4 h-4 text-blue-600 mr-2" />
                      <span className="text-sm font-medium text-blue-600">{t('features.voiceAgents.voiceAgent', 'Voice Agent')}</span>
                    </div>
                    <p className="text-gray-800">{t('features.voiceAgents.agentGreeting', '"Hello! Thank you for calling SeaChat support. How can I help you today?"')}</p>
                  </div>
                  
                  <div className="bg-gray-100 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <Mic className="w-4 h-4 text-gray-600 mr-2" />
                      <span className="text-sm font-medium text-gray-600">{t('features.voiceAgents.customer', 'Customer')}</span>
                    </div>
                    <p className="text-gray-800">{t('features.voiceAgents.customerQuestion', '"Hi, I need to check the status of my recent order."')}</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center mb-2">
                      <Phone className="w-4 h-4 text-blue-600 mr-2" />
                      <span className="text-sm font-medium text-blue-600">{t('features.voiceAgents.voiceAgent', 'Voice Agent')}</span>
                    </div>
                    <p className="text-gray-800">{t('features.voiceAgents.agentResponse', '"I\'d be happy to help you with that. Could you please provide your order number or the email address associated with your account?"')}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <button className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  <Play className="w-5 h-5" />
                  <span>{t('features.voiceAgents.playDemo', 'Play Full Demo')}</span>
                </button>
                <button className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-700 font-semibold">
                  <Volume2 className="w-5 h-5" />
                  <span>{t('features.voiceAgents.moreSamples', 'More Samples')}</span>
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-indigo-900 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">{t('features.voiceAgents.featuresTitle', 'Voice Agent Features')}</h3>
              <div className="space-y-4">
                {getFeaturesList().map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('features.voiceAgents.ctaTitle', 'Ready to Transform Phone Support?')}
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            {t('features.voiceAgents.ctaSubtitle', 'Experience the future of voice customer support with AI agents that sound and feel human.')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://chat.seasalt.ai/gpt/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors text-center"
            >
              Sign Up For Free
            </a>
            <a
              href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all flex items-center justify-center text-center"
            >
              Schedule Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VoiceAgentsPage;
import { Bot, Zap, Brain, MessageSquare, Clock, TrendingUp, ArrowRight, Play } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const AIAutomationPage = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: Brain,
      title: t('features.aiAutomation.contextAware.title', 'Context-Aware Responses'),
      description: t('features.aiAutomation.contextAware.description', 'AI understands conversation context and provides relevant, intelligent responses.'),
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: TrendingUp,
      title: t('features.aiAutomation.learning.title', 'Learning from Conversations'),
      description: t('features.aiAutomation.learning.description', 'Continuously improves by learning from every customer interaction.'),
      color: 'from-blue-500 to-teal-500'
    },
    {
      icon: MessageSquare,
      title: t('features.aiAutomation.handoff.title', 'Seamless Human Handoff'),
      description: t('features.aiAutomation.handoff.description', 'Smooth transition to human agents when complex issues arise.'),
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Clock,
      title: t('features.aiAutomation.availability.title', '24/7 Availability'),
      description: t('features.aiAutomation.availability.description', 'Provide instant support around the clock, even when agents are offline.'),
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Zap,
      title: t('features.aiAutomation.response.title', 'Instant Response Time'),
      description: t('features.aiAutomation.response.description', 'Respond to customer queries in milliseconds, not minutes.'),
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Bot,
      title: t('features.aiAutomation.multilanguage.title', 'Multi-language Support'),
      description: t('features.aiAutomation.multilanguage.description', 'Communicate with customers in their preferred language automatically.'),
      color: 'from-pink-500 to-purple-500'
    }
  ];

  const automationTypes = [
    {
      title: t('features.aiAutomation.types.faq.title', 'FAQ Automation'),
      description: t('features.aiAutomation.types.faq.description', 'Instantly answer common questions with accurate, up-to-date information.'),
      percentage: 85,
      color: 'bg-blue-500'
    },
    {
      title: t('features.aiAutomation.types.orders.title', 'Order Status Updates'),
      description: t('features.aiAutomation.types.orders.description', 'Provide real-time order tracking and shipping information.'),
      percentage: 92,
      color: 'bg-green-500'
    },
    {
      title: t('features.aiAutomation.types.appointments.title', 'Appointment Scheduling'),
      description: t('features.aiAutomation.types.appointments.description', 'Book appointments and manage calendars automatically.'),
      percentage: 78,
      color: 'bg-purple-500'
    },
    {
      title: t('features.aiAutomation.types.recommendations.title', 'Product Recommendations'),
      description: t('features.aiAutomation.types.recommendations.description', 'Suggest relevant products based on customer preferences.'),
      percentage: 88,
      color: 'bg-teal-500'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-800 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Bot className="w-16 h-16 text-purple-300 mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold">
                {t('features.aiAutomation.title', 'AI Automation')}
              </h1>
            </div>
            <p className="text-2xl text-purple-200 mb-8 max-w-4xl mx-auto">
              {t('features.aiAutomation.subtitle', 'Scale your customer support with intelligent AI that learns, adapts, and provides instant responses while maintaining the human touch when needed.')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://chat.seasalt.ai/gpt/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-500 hover:bg-purple-400 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 text-center"
              >
                {t('features.aiAutomation.tryButton', 'Try AI Automation')}
              </a>
              <a
                href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all flex items-center justify-center"
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
              {t('features.aiAutomation.featuresTitle', 'Intelligent AI Features')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('features.aiAutomation.featuresSubtitle', 'Our AI automation goes beyond simple chatbots to provide truly intelligent customer support.')}
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

      {/* Automation Performance */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('features.aiAutomation.performanceTitle', 'Automation That Actually Works')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('features.aiAutomation.performanceSubtitle', 'See how our AI automation handles different types of customer inquiries with impressive accuracy rates.')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {automationTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{type.title}</h3>
                  <span className="text-2xl font-bold text-gray-900">{type.percentage}%</span>
                </div>
                <p className="text-gray-600 mb-6">{type.description}</p>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className={`${type.color} h-3 rounded-full transition-all duration-1000`}
                    style={{ width: `${type.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI vs Human Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('features.aiAutomation.hybridTitle', 'The Perfect Balance: AI + Human')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('features.aiAutomation.hybridSubtitle', 'Our hybrid approach combines the speed of AI with the empathy of human agents.')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* AI Strengths */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
              <div className="flex items-center mb-6">
                <Bot className="w-12 h-12 text-blue-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">{t('features.aiAutomation.aiStrengthsTitle', 'AI Automation Excels At')}</h3>
              </div>
              <div className="space-y-4">
                  // @ts-ignore
                {Array.isArray(t('features.aiAutomation.aiStrengths', { returnObjects: true })) 
                  ? (t('features.aiAutomation.aiStrengths', { returnObjects: true }) as string[]).map((strength: string, index: number) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 group"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">{strength}</span>
                  </div>
                  ))
                  : []
                }
              </div>
            </div>

            {/* Human Strengths */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 border border-green-100">
              <div className="flex items-center mb-6">
                <MessageSquare className="w-12 h-12 text-green-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">{t('features.aiAutomation.humanStrengthsTitle', 'Human Agents Excel At')}</h3>
              </div>
                  // @ts-ignore
              <div className="space-y-4">
                {Array.isArray(t('features.aiAutomation.humanStrengths', { returnObjects: true })) 
                  ? (t('features.aiAutomation.humanStrengths', { returnObjects: true }) as string[]).map((strength: string, index: number) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 group"
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">{strength}</span>
                  </div>
                  ))
                  : []
                }
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('features.aiAutomation.ctaTitle', 'Ready to Scale with AI?')}
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            {t('features.aiAutomation.ctaSubtitle', 'Start with free human agents, then add AI automation when you\'re ready to scale. The perfect hybrid approach for growing businesses.')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://chat.seasalt.ai/gpt/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors text-center"
            >
              Sign Up For Free
            </a>
            <a
              href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all flex items-center justify-center"
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

export default AIAutomationPage;
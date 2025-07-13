import { Users, MessageCircle, Clock, Shield, Star, CheckCircle, Infinity, Heart, Coffee } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const HumanAgentsPage = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: Infinity,
      title: t('features.humanAgents.unlimited.title', 'Unlimited Agent Hours'),
      description: t('features.humanAgents.unlimited.description', 'No time limits, no hourly caps. Your human agent works as much as you need, completely free.')
    },
    {
      icon: MessageCircle,
      title: t('features.humanAgents.realtime.title', 'Real-time Chat Management'),
      description: t('features.humanAgents.realtime.description', 'Handle multiple conversations simultaneously with our intuitive chat interface.')
    },
    {
      icon: Users,
      title: t('features.humanAgents.collaboration.title', 'Multi-agent Collaboration'),
      description: t('features.humanAgents.collaboration.description', 'Scale your team with seamless agent-to-agent handoffs and collaboration tools.')
    },
    {
      icon: Shield,
      title: t('features.humanAgents.security.title', 'Advanced Security'),
      description: t('features.humanAgents.security.description', 'Enterprise-grade security with end-to-end encryption and data protection.')
    },
    {
      icon: Star,
      title: t('features.humanAgents.analytics.title', 'Performance Analytics'),
      description: t('features.humanAgents.analytics.description', 'Track response times, customer satisfaction, and agent performance metrics.')
    },
    {
      icon: CheckCircle,
      title: t('features.humanAgents.workflows.title', 'Custom Workflows'),
      description: t('features.humanAgents.workflows.description', 'Create personalized workflows and automation rules for your support process.')
    }
  ];

  const benefits = [
    {
      title: t('features.humanAgents.benefits.personal.title', 'Personal Touch'),
      description: t('features.humanAgents.benefits.personal.description', 'Human empathy and understanding that AI cannot replicate'),
      icon: Heart
    },
    {
      title: t('features.humanAgents.benefits.complex.title', 'Complex Problem Solving'),
      description: t('features.humanAgents.benefits.complex.description', 'Handle nuanced situations that require human judgment'),
      icon: Users
    },
    {
      title: t('features.humanAgents.benefits.brand.title', 'Brand Representation'),
      description: t('features.humanAgents.benefits.brand.description', 'Agents who truly understand and represent your brand values'),
      icon: Star
    },
    {
      title: t('features.humanAgents.benefits.relationships.title', 'Customer Relationships'),
      description: t('features.humanAgents.benefits.relationships.description', 'Build lasting relationships through genuine human connections'),
      icon: Coffee
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Users className="w-16 h-16 text-teal-300 mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold">
                {t('features.humanAgents.title', 'Human Agent Chat')}
              </h1>
            </div>
            <p className="text-2xl text-blue-200 mb-8 max-w-4xl mx-auto">
              {t('features.humanAgents.subtitle', 'Start with real human support agents, completely free for life. No limits, no catches, just genuine human connection with your customers.')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-teal-500 hover:bg-teal-400 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105">
                {t('features.humanAgents.startButton', 'Start Free Forever')}
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all">
                {t('features.humanAgents.demoButton', 'Watch Demo')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Free Forever Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('features.humanAgents.freeForever.title', 'Truly Free as in Free 🍺 & 🎙️')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('features.humanAgents.freeForever.subtitle', 'We mean it when we say free. One human agent for life, with unlimited everything.')}
            </p>
          </div>

          <div className="bg-white rounded-3xl p-12 shadow-2xl border border-green-100">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  {t('features.humanAgents.freeForever.meaningTitle', 'What "Free Forever" Really Means')}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    <span className="text-lg text-gray-700">{t('features.humanAgents.freeForever.agent', '1 Human Agent for Life')}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    <span className="text-lg text-gray-700">{t('features.humanAgents.freeForever.conversations', 'Unlimited Chat Conversations')}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    <span className="text-lg text-gray-700">{t('features.humanAgents.freeForever.history', 'Unlimited Chat History')}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    <span className="text-lg text-gray-700">{t('features.humanAgents.freeForever.contacts', 'Unlimited Contacts')}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    <span className="text-lg text-gray-700">{t('features.humanAgents.freeForever.export', 'Freedom to Export All Data')}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    <span className="text-lg text-gray-700">{t('features.humanAgents.freeForever.noCredit', 'No Credit Card Required')}</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-100 to-teal-100 rounded-2xl p-8 text-center">
                <div className="text-6xl font-bold text-green-600 mb-4">∞</div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">{t('features.humanAgents.freeForever.unlimited', 'Unlimited Everything')}</h4>
                <p className="text-gray-700 mb-6">
                  {t('features.humanAgents.freeForever.noCaps', 'No hidden fees, no time limits, no conversation caps. Just pure, unlimited human support.')}
                </p>
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <div className="text-3xl font-bold text-gray-900">$0</div>
                  <div className="text-gray-600">{t('features.humanAgents.freeForever.forever', 'Forever')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('features.humanAgents.featuresTitle', 'Powerful Human Agent Features')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('features.humanAgents.featuresSubtitle', 'Everything you need to provide exceptional human-powered customer support.')}
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
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
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

      {/* Why Human Agents Matter */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('features.humanAgents.whyMatterTitle', 'Why Human Agents Still Matter')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('features.humanAgents.whyMatterSubtitle', 'In an AI-driven world, human connection remains irreplaceable for building trust and solving complex problems.')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  className="text-center bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('features.humanAgents.ctaTitle', 'Ready to Start with Human Agents?')}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            {t('features.humanAgents.ctaSubtitle', 'Join thousands of businesses providing exceptional customer support with our free human agents.')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://chat.seasalt.ai/gpt/signup" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                {t('features.humanAgents.ctaStartButton', 'Start Free Now')}
            </a>
            <a
              href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all"
            >
              {t('features.humanAgents.ctaDemoButton', 'Schedule Demo')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HumanAgentsPage;
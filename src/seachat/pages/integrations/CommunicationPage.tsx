import { Mail, MessageSquare, Video, Slack, CheckCircle } from 'lucide-react';
import { SiWhatsapp, SiKakaotalk, SiGooglechat, SiZalo } from 'react-icons/si';
import { useTranslation } from 'react-i18next';

const CommunicationPage = () => {
  const { t } = useTranslation();
  
  const platforms = [
    {
      name: t('integrations.communication.platforms.discord.name', 'Discord'),
      icon: MessageSquare,
      color: 'from-indigo-500 to-purple-500',
      description: t('integrations.communication.platforms.discord.description', 'Community support through Discord servers and channels'),
      features: [
        t('integrations.communication.platforms.discord.features.server', 'Server integration'),
        t('integrations.communication.platforms.discord.features.voice', 'Voice channels'),
        t('integrations.communication.platforms.discord.features.moderation', 'Community moderation'),
        t('integrations.communication.platforms.discord.features.bot', 'Bot features')
      ],
      setupTime: t('integrations.communication.platforms.discord.setupTime', '10 minutes'),
      category: t('integrations.communication.platforms.discord.category', 'Community')
    },
    {
      name: t('integrations.communication.platforms.email.name', 'Email Platforms'),
      icon: Mail,
      color: 'from-gray-500 to-gray-700',
      description: t('integrations.communication.platforms.email.description', 'Connect with Gmail, Outlook, and other email providers'),
      features: [
        t('integrations.communication.platforms.email.features.routing', 'Email routing'),
        t('integrations.communication.platforms.email.features.templates', 'Template responses'),
        t('integrations.communication.platforms.email.features.attachments', 'Attachment handling'),
        t('integrations.communication.platforms.email.features.threading', 'Threading')
      ],
      setupTime: t('integrations.communication.platforms.email.setupTime', '7 minutes'),
      category: t('integrations.communication.platforms.email.category', 'Email')
    },
    {
      name: t('integrations.communication.platforms.googlechat.name', 'Google Chat'),
      icon: SiGooglechat,
      color: 'from-blue-600 to-blue-800',
      description: t('integrations.communication.platforms.googlechat.description', 'Streamline team communication within the Google Workspace ecosystem.'),
      features: [
        t('integrations.communication.platforms.googlechat.features.spaces', 'Spaces for collaboration'),
        t('integrations.communication.platforms.googlechat.features.bots', 'Bot integrations'),
        t('integrations.communication.platforms.googlechat.features.files', 'File sharing'),
        t('integrations.communication.platforms.googlechat.features.meetings', 'Meet integration')
      ],
      setupTime: t('integrations.communication.platforms.googlechat.setupTime', '8 minutes'),
      category: t('integrations.communication.platforms.googlechat.category', 'Team Chat')
    },
    {
      name: t('integrations.communication.platforms.kakaotalk.name', 'KakaoTalk'),
      icon: SiKakaotalk,
      color: 'from-yellow-400 to-yellow-600',
      description: t('integrations.communication.platforms.kakaotalk.description', 'Connect with users in South Korea and beyond with KakaoTalk.'),
      features: [
        t('integrations.communication.platforms.kakaotalk.features.channels', 'Plus Friend Channels'),
        t('integrations.communication.platforms.kakaotalk.features.messages', 'Rich messages'),
        t('integrations.communication.platforms.kakaotalk.features.commerce', 'Kakao Commerce integration'),
        t('integrations.communication.platforms.kakaotalk.features.payments', 'Kakao Pay integration')
      ],
      setupTime: t('integrations.communication.platforms.kakaotalk.setupTime', '12 minutes'),
      category: t('integrations.communication.platforms.kakaotalk.category', 'Messaging')
    },
    {
      name: t('integrations.communication.platforms.teams.name', 'Microsoft Teams'),
      icon: Video,
      color: 'from-blue-500 to-purple-500',
      description: t('integrations.communication.platforms.teams.description', 'Connect with Microsoft Teams for enterprise communication'),
      features: [
        t('integrations.communication.platforms.teams.features.channels', 'Team channels'),
        t('integrations.communication.platforms.teams.features.calls', 'Video calls'),
        t('integrations.communication.platforms.teams.features.files', 'File collaboration'),
        t('integrations.communication.platforms.teams.features.apps', 'App integration')
      ],
      setupTime: t('integrations.communication.platforms.teams.setupTime', '8 minutes'),
      category: t('integrations.communication.platforms.teams.category', 'Enterprise')
    },
    {
      name: t('integrations.communication.platforms.slack.name', 'Slack'),
      icon: Slack,
      color: 'from-purple-500 to-indigo-500',
      description: t('integrations.communication.platforms.slack.description', 'Integrate with Slack for team collaboration and internal notifications'),
      features: [
        t('integrations.communication.platforms.slack.features.channels', 'Channel notifications'),
        t('integrations.communication.platforms.slack.features.messages', 'Direct messages'),
        t('integrations.communication.platforms.slack.features.commands', 'Bot commands'),
        t('integrations.communication.platforms.slack.features.files', 'File sharing')
      ],
      setupTime: t('integrations.communication.platforms.slack.setupTime', '5 minutes'),
      category: t('integrations.communication.platforms.slack.category', 'Team Chat')
    },
    {
      name: t('integrations.communication.platforms.telegram.name', 'Telegram'),
      icon: MessageSquare,
      color: 'from-blue-500 to-teal-500',
      description: t('integrations.communication.platforms.telegram.description', 'Telegram bot integration for instant messaging support'),
      features: [
        t('integrations.communication.platforms.telegram.features.api', 'Bot API'),
        t('integrations.communication.platforms.telegram.features.groups', 'Group chats'),
        t('integrations.communication.platforms.telegram.features.channels', 'Channel broadcasting'),
        t('integrations.communication.platforms.telegram.features.files', 'File transfers')
      ],
      setupTime: t('integrations.communication.platforms.telegram.setupTime', '15 minutes'),
      category: t('integrations.communication.platforms.telegram.category', 'Messaging')
    },
    {
      name: t('integrations.communication.platforms.whatsapp.name', 'WhatsApp'),
      icon: SiWhatsapp,
      color: 'from-green-500 to-green-700',
      description: t('integrations.communication.platforms.whatsapp.description', 'Engage with customers directly on the world\'s most popular messaging app.'),
      features: [
        t('integrations.communication.platforms.whatsapp.features.messaging', 'Rich messaging'),
        t('integrations.communication.platforms.whatsapp.features.businessApi', 'Business API'),
        t('integrations.communication.platforms.whatsapp.features.templates', 'Message templates'),
        t('integrations.communication.platforms.whatsapp.features.automation', 'Automated responses')
      ],
      setupTime: t('integrations.communication.platforms.whatsapp.setupTime', '10 minutes'),
      category: t('integrations.communication.platforms.whatsapp.category', 'Messaging')
    },
    {
      name: t('integrations.communication.platforms.zalo.name', 'Zalo'),
      icon: SiZalo,
      color: 'from-blue-400 to-blue-600',
      description: t('integrations.communication.platforms.zalo.description', 'Connect with customers in Vietnam and Southeast Asia via Zalo.'),
      features: [
        t('integrations.communication.platforms.zalo.features.messaging', 'Rich messaging'),
        t('integrations.communication.platforms.zalo.features.officialAccount', 'Official Accounts'),
        t('integrations.communication.platforms.zalo.features.miniApp', 'Mini Apps'),
        t('integrations.communication.platforms.zalo.features.payments', 'Zalo Pay integration')
      ],
      setupTime: t('integrations.communication.platforms.zalo.setupTime', '10 minutes'),
      category: t('integrations.communication.platforms.zalo.category', 'Messaging')
    }
  ];

  const benefits = [
    {
      title: t('integrations.communication.benefits.unified.title', 'Unified Communication'),
      description: t('integrations.communication.benefits.unified.description', 'Manage all communication channels from one central hub'),
      metric: '100%'
    },
    {
      title: t('integrations.communication.benefits.collaboration.title', 'Team Collaboration'),
      description: t('integrations.communication.benefits.collaboration.description', 'Improve internal team coordination and response times'),
      metric: '60%'
    },
    {
      title: t('integrations.communication.benefits.efficiency.title', 'Response Efficiency'),
      description: t('integrations.communication.benefits.efficiency.description', 'Faster resolution with integrated communication tools'),
      metric: '45%'
    },
    {
      title: t('integrations.communication.benefits.satisfaction.title', 'Customer Satisfaction'),
      description: t('integrations.communication.benefits.satisfaction.description', 'Better support experience across all channels'),
      metric: '92%'
    }
  ];

  const features = [
    {
      title: t('integrations.communication.features.feature1.title', 'Real-time Messaging'),
      description: t('integrations.communication.features.feature1.description', 'Engage with customers instantly across all integrated platforms, ensuring timely responses and improved satisfaction.')
    },
    {
      title: t('integrations.communication.features.feature2.title', 'Automated Workflows'),
      description: t('integrations.communication.features.feature2.description', 'Set up automated responses and routing rules to efficiently manage incoming messages and reduce manual effort.')
    },
    {
      title: t('integrations.communication.features.feature3.title', 'Unified Inbox'),
      description: t('integrations.communication.features.feature3.description', 'Manage all conversations from a single, intuitive interface, eliminating the need to switch between different applications.')
    },
    {
      title: t('integrations.communication.features.feature4.title', 'Performance Analytics'),
      description: t('integrations.communication.features.feature4.description', 'Gain insights into communication volume, response times, and agent performance with comprehensive analytics and reporting.')
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <MessageSquare className="w-16 h-16 text-indigo-300 mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold">
                {t('integrations.communication.title', 'Communication Tools')}
              </h1>
            </div>
            <p className="text-2xl text-indigo-200 mb-8 max-w-4xl mx-auto">
              {t('integrations.communication.subtitle', 'Integrate with popular communication platforms like Slack, Teams, Discord, and more to streamline your support workflow and team collaboration.')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://chat.seasalt.ai/gpt/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-500 hover:bg-indigo-400 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 inline-block"
              >
                {t('integrations.communication.connectButton', 'Connect Communication Tools')}
              </a>
              <a
                href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white hover:bg-white hover:text-indigo-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all inline-block"
              >
                {t('integrations.communication.demoButton', 'Schedule Integration Demo')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Platforms */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('integrations.communication.platformsTitle', 'Popular Communication Platforms')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('integrations.communication.platformsSubtitle', 'Connect with the communication tools your team already uses for seamless workflow integration.')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => {
              const IconComponent = platform.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${platform.color} rounded-2xl flex items-center justify-center`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm font-medium">
                      {platform.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{platform.name}</h3>
                  <p className="text-gray-600 mb-6">{platform.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {platform.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-sm text-gray-600">
                      {t('integrations.communication.setup')}: <span className="font-medium text-gray-900">{platform.setupTime}</span>
                    </div>
                  </div>
                  
                <a
                  href="https://chat.seasalt.ai/gpt/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:scale-105 inline-block text-center"
                >
                  {t('integrations.communication.connectPlatform', 'Connect with {{platformName}}', { platformName: platform.name })}
                </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('integrations.communication.benefitsTitle', 'Benefits of Integrated Communication')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('integrations.communication.benefitsSubtitle', 'Enhance your customer support and internal collaboration with seamless integrations.')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <h3 className="text-3xl font-bold text-indigo-600 mb-2">{benefit.metric}</h3>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h4>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('integrations.communication.featuresTitle', 'Key Features')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('integrations.communication.featuresSubtitle', 'Discover how our communication integrations can transform your workflow.')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-700 to-indigo-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('integrations.communication.cta.title', 'Ready to Streamline Your Communication?')}
            </h2>
          <p className="text-xl text-blue-200 mb-10">
            {t('integrations.communication.cta.subtitle', 'Connect your favorite communication tools and enhance your team\'s productivity and customer engagement.')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://chat.seasalt.ai/gpt/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-indigo-800 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 inline-block text-center"
            >
              {t('integrations.communication.cta.connectButton', 'Get Started Now')}
            </a>
            <a
              href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-indigo-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all inline-block text-center"
            >
              {t('integrations.communication.cta.contactButton', 'Contact Sales')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommunicationPage;
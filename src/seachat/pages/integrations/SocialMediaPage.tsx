import { MessageSquare, Instagram, Facebook, ArrowRight, CheckCircle } from 'lucide-react';
import { SiTiktok, SiLine, SiWhatsapp, SiX } from 'react-icons/si';
import { useTranslation } from 'react-i18next';

const SocialMediaPage = () => {
  const { t } = useTranslation();
  
  const platforms = [
    {
      name: t('integrations.social.platforms.whatsapp.name', 'WhatsApp Business'),
      icon: SiWhatsapp,
      color: 'from-green-500 to-emerald-500',
      description: t('integrations.social.platforms.whatsapp.description', 'Connect with customers on the world\'s most popular messaging platform'),
      features: [
        t('integrations.social.platforms.whatsapp.features.api', 'Business API'), 
        t('integrations.social.platforms.whatsapp.features.media', 'Rich media'), 
        t('integrations.social.platforms.whatsapp.features.templates', 'Templates'), 
        t('integrations.social.platforms.whatsapp.features.groups', 'Groups')
      ],
      users: t('integrations.social.platforms.whatsapp.users', '2B+ users'),
      setupTime: t('integrations.social.platforms.whatsapp.setupTime', '10 minutes')
    },
    {
      name: t('integrations.social.platforms.instagram.name', 'Instagram'),
      icon: Instagram,
      color: 'from-pink-500 to-purple-500',
      description: t('integrations.social.platforms.instagram.description', 'Manage Instagram DMs and story replies in one unified inbox'),
      features: [
        t('integrations.social.platforms.instagram.features.dm', 'Direct messages'), 
        t('integrations.social.platforms.instagram.features.stories', 'Story replies'), 
        t('integrations.social.platforms.instagram.features.media', 'Media sharing'), 
        t('integrations.social.platforms.instagram.features.responses', 'Quick responses')
      ],
      users: t('integrations.social.platforms.instagram.users', '1.4B+ users'),
      setupTime: t('integrations.social.platforms.instagram.setupTime', '8 minutes')
    },
    {
      name: t('integrations.social.platforms.facebook.name', 'Facebook Messenger'),
      icon: Facebook,
      color: 'from-blue-500 to-indigo-500',
      description: t('integrations.social.platforms.facebook.description', 'Provide customer support through Facebook\'s messaging platform'),
      features: [
        t('integrations.social.platforms.facebook.features.page', 'Page integration'), 
        t('integrations.social.platforms.facebook.features.responses', 'Automated responses'), 
        t('integrations.social.platforms.facebook.features.cards', 'Rich cards'), 
        t('integrations.social.platforms.facebook.features.menu', 'Persistent menu')
      ],
      users: t('integrations.social.platforms.facebook.users', '1.3B+ users'),
      setupTime: t('integrations.social.platforms.facebook.setupTime', '12 minutes')
    },
    {
      name: t('integrations.social.platforms.twitter.name', 'Twitter/X'),
      icon: SiX,
      color: 'from-gray-700 to-black',
      description: t('integrations.social.platforms.twitter.description', 'Handle customer inquiries and mentions on Twitter/X platform'),
      features: [
        t('integrations.social.platforms.twitter.features.dm', 'Direct messages'), 
        t('integrations.social.platforms.twitter.features.mentions', 'Mention tracking'), 
        t('integrations.social.platforms.twitter.features.responses', 'Tweet responses'), 
        t('integrations.social.platforms.twitter.features.threads', 'Thread management')
      ],
      users: t('integrations.social.platforms.twitter.users', '450M+ users'),
      setupTime: t('integrations.social.platforms.twitter.setupTime', '15 minutes')
    },
    {
      name: t('integrations.social.platforms.line.name', 'LINE'),
      icon: SiLine,
      color: 'from-green-400 to-green-600',
      description: t('integrations.social.platforms.line.description', 'Provide seamless customer support and engagement on LINE'),
      features: [
        t('integrations.social.platforms.line.features.messaging', 'Rich messaging'), 
        t('integrations.social.platforms.line.features.stickers', 'Sticker support'), 
        t('integrations.social.platforms.line.features.broadcast', 'Broadcast messages'), 
        t('integrations.social.platforms.line.features.payments', 'LINE Pay integration')
      ],
      users: t('integrations.social.platforms.line.users', '180M+ users'),
      setupTime: t('integrations.social.platforms.line.setupTime', '10 minutes')
    },
    {
      name: t('integrations.social.platforms.tiktok.name', 'TikTok'),
      icon: SiTiktok,
      color: 'from-black to-gray-800',
      description: t('integrations.social.platforms.tiktok.description', 'Engage with your audience and manage customer interactions on TikTok'),
      features: [
        t('integrations.social.platforms.tiktok.features.comments', 'Comment management'), 
        t('integrations.social.platforms.tiktok.features.dm', 'Direct messages'), 
        t('integrations.social.platforms.tiktok.features.analytics', 'Audience analytics'), 
        t('integrations.social.platforms.tiktok.features.ads', 'Ad campaign support')
      ],
      users: t('integrations.social.platforms.tiktok.users', '1B+ users'),
      setupTime: t('integrations.social.platforms.tiktok.setupTime', '15 minutes')
    }
  ];

  const benefits = [
    {
      title: t('integrations.social.benefits.meet.title', 'Meet Customers Where They Are'),
      description: t('integrations.social.benefits.meet.description', 'Provide support on the platforms your customers already use daily'),
      metric: '5B+'
    },
    {
      title: t('integrations.social.benefits.response.title', 'Faster Response Times'),
      description: t('integrations.social.benefits.response.description', 'Respond to social media inquiries in real-time'),
      metric: '<30s'
    },
    {
      title: t('integrations.social.benefits.unified.title', 'Unified Management'),
      description: t('integrations.social.benefits.unified.description', 'Handle all social platforms from one dashboard'),
      metric: '100%'
    },
    {
      title: t('integrations.social.benefits.reputation.title', 'Brand Reputation'),
      description: t('integrations.social.benefits.reputation.description', 'Maintain positive brand image with quick, helpful responses'),
      metric: '95%'
    }
  ];

  const featuresFromTranslation = t('integrations.social.features', { returnObjects: true });
  const features = Array.isArray(featuresFromTranslation) ? featuresFromTranslation : [];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-pink-900 via-purple-800 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <MessageSquare className="w-16 h-16 text-pink-300 mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold">
                {t('integrations.social.title', 'Social Media Integrations')}
              </h1>
            </div>
            <p className="text-2xl text-pink-200 mb-8 max-w-4xl mx-auto">
              {t('integrations.social.subtitle', 'Connect all your social media platforms and provide seamless customer support across WhatsApp, Instagram, Facebook, Twitter, and more.')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://chat.seasalt.ai/gpt/signup" className="bg-pink-500 hover:bg-pink-400 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 text-center">
                {t('integrations.social.connectButton', 'Connect Social Platforms')}
              </a>
              <a href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/" className="border-2 border-white text-white hover:bg-white hover:text-pink-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all text-center">
                {t('integrations.social.demoButton', 'Schedule Social Demo')}
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
              {t('integrations.social.platformsTitle', 'All Major Social Platforms')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('integrations.social.platformsSubtitle', 'Integrate with every social platform your customers use for comprehensive social media support.')}
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
                  <div className={`w-16 h-16 bg-gradient-to-br ${platform.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <IconComponent className="w-8 h-8 text-white" />
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
                  
                  <div className="flex items-center justify-between mb-6 text-sm">
                    <div className="text-gray-600">
                      <span className="font-medium text-gray-900">{platform.users}</span> {t('integrations.social.worldwide', 'worldwide')}
                    </div>
                    <div className="text-gray-600">
                      {t('integrations.social.setup')}: <span className="font-medium text-gray-900">{platform.setupTime}</span>
                    </div>
                  </div>
                  
                  <a href="https://chat.seasalt.ai/gpt/signup" className={`w-full bg-gradient-to-r ${platform.color} hover:opacity-90 text-white py-3 px-6 rounded-lg font-semibold transition-all transform hover:scale-105 text-center`}>
                    {t('integrations.social.connectPlatform', 'Connect')} {platform.name}
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
              {t('integrations.social.benefitsTitle', 'Social Media Support Benefits')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('integrations.social.benefitsSubtitle', 'Transform your social media presence into a powerful customer support channel.')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl font-bold text-pink-600 mb-4">{benefit.metric}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {t('integrations.social.managementTitle', 'Complete Social Media Management')}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {t('integrations.social.managementSubtitle', 'Everything you need to manage customer interactions across all social media platforms from one unified dashboard.')}
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 border border-pink-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('integrations.social.dashboardTitle', 'Social Media Dashboard')}</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-green-500">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{t('integrations.social.whatsapp', 'WhatsApp Business')}</span>
                    <span className="text-sm text-green-600">{t('integrations.social.newMessages', '12 new messages')}</span>
                  </div>
                  <p className="text-sm text-gray-600">{t('integrations.social.productInquiries', 'Customer inquiries about product availability')}</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-pink-500">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{t('integrations.social.instagram', 'Instagram')}</span>
                    <span className="text-sm text-pink-600">{t('integrations.social.storyReplies', '8 story replies')}</span>
                  </div>
                  <p className="text-sm text-gray-600">{t('integrations.social.productComments', 'Comments on latest product showcase')}</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-blue-500">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{t('integrations.social.facebook', 'Facebook')}</span>
                    <span className="text-sm text-blue-600">{t('integrations.social.pageMessages', '5 page messages')}</span>
                  </div>
                  <p className="text-sm text-gray-600">{t('integrations.social.supportRequests', 'Support requests and general inquiries')}</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-gray-500">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{t('integrations.social.twitter', 'Twitter/X')}</span>
                    <span className="text-sm text-gray-600">{t('integrations.social.mentions', '3 mentions')}</span>
                  </div>
                  <p className="text-sm text-gray-600">{t('integrations.social.brandMentions', 'Brand mentions requiring response')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('integrations.social.ctaTitle', 'Ready to Unify Your Social Media Support?')}
          </h2>
          <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto">
            {t('integrations.social.ctaSubtitle', 'Connect all your social media platforms and provide exceptional customer support where your customers spend their time.')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://chat.seasalt.ai/gpt/signup" className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors text-center">
              {t('integrations.social.ctaConnectButton', 'Connect Social Platforms')}
            </a>
            <a href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/" className="border-2 border-white text-white hover:bg-white hover:text-pink-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all flex items-center justify-center text-center">
              {t('integrations.social.ctaGuideButton', 'Schedule E-commerce Demo')}
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialMediaPage;
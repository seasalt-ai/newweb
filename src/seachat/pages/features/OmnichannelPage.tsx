import { Globe, MessageSquare, Phone, Mail, Instagram, Facebook, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { MEETING_URL, getMeetingUrl } from '../../../constants/urls';
const OmnichannelPage = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  
  const channels = [
    {
      icon: Globe,
      name: t('seachat.features.omnichannel.channels.website.name', 'Website Chat'),
      description: t('seachat.features.omnichannel.channels.website.description', 'Embed chat widgets on any website platform'),
      features: [
        t('seachat.features.omnichannel.channels.website.seachat.features.compatibility', 'Universal compatibility'), 
        t('seachat.features.omnichannel.channels.website.seachat.features.styling', 'Custom styling'), 
        t('seachat.features.omnichannel.channels.website.seachat.features.responsive', 'Mobile responsive'), 
        t('seachat.features.omnichannel.channels.website.seachat.features.sync', 'Real-time sync')
      ]
    },
    {
      icon: MessageSquare,
      name: t('seachat.features.omnichannel.channels.whatsapp.name', 'WhatsApp Business'),
      description: t('seachat.features.omnichannel.channels.whatsapp.description', 'Connect with customers on the world\'s most popular messaging app'),
      features: [
        t('seachat.features.omnichannel.channels.whatsapp.seachat.features.api', 'Business API integration'), 
        t('seachat.features.omnichannel.channels.whatsapp.seachat.features.media', 'Rich media support'), 
        t('seachat.features.omnichannel.channels.whatsapp.seachat.features.templates', 'Template messages'), 
        t('seachat.features.omnichannel.channels.whatsapp.seachat.features.groups', 'Group messaging')
      ]
    },
    {
      icon: Instagram,
      name: t('seachat.features.omnichannel.channels.instagram.name', 'Instagram Direct'),
      description: t('seachat.features.omnichannel.channels.instagram.description', 'Manage Instagram DMs and story replies in one place'),
      features: [
        t('seachat.features.omnichannel.channels.instagram.seachat.features.replies', 'Story reply management'), 
        t('seachat.features.omnichannel.channels.instagram.seachat.features.media', 'Media sharing'), 
        t('seachat.features.omnichannel.channels.instagram.seachat.features.responses', 'Quick responses'), 
        t('seachat.features.omnichannel.channels.instagram.seachat.features.greetings', 'Automated greetings')
      ]
    },
    {
      icon: Facebook,
      name: t('seachat.features.omnichannel.channels.facebook.name', 'Facebook Messenger'),
      description: t('seachat.features.omnichannel.channels.facebook.description', 'Provide support through Facebook\'s messaging platform'),
      features: [
        t('seachat.features.omnichannel.channels.facebook.seachat.features.integration', 'Page integration'), 
        t('seachat.features.omnichannel.channels.facebook.seachat.features.responses', 'Automated responses'), 
        t('seachat.features.omnichannel.channels.facebook.seachat.features.cards', 'Rich cards'), 
        t('seachat.features.omnichannel.channels.facebook.seachat.features.menu', 'Persistent menu')
      ]
    },
    {
      icon: Phone,
      name: t('seachat.features.omnichannel.channels.voice.name', 'Voice Calls'),
      description: t('seachat.features.omnichannel.channels.voice.description', 'Handle phone support with AI voice agents'),
      features: [
        t('seachat.features.omnichannel.channels.voice.seachat.features.conversations', 'Natural conversations'), 
        t('seachat.features.omnichannel.channels.voice.seachat.features.routing', 'Call routing'), 
        t('seachat.features.omnichannel.channels.voice.seachat.features.voicemail', 'Voicemail transcription'), 
        t('seachat.features.omnichannel.channels.voice.seachat.features.conference', 'Conference calls')
      ]
    },
    {
      icon: Mail,
      name: t('seachat.features.omnichannel.channels.email.name', 'Email Support'),
      description: t('seachat.features.omnichannel.channels.email.description', 'Manage email tickets with intelligent routing'),
      features: [
        t('seachat.features.omnichannel.channels.email.seachat.features.categorization', 'Smart categorization'), 
        t('seachat.features.omnichannel.channels.email.seachat.features.responses', 'Auto-responses'), 
        t('seachat.features.omnichannel.channels.email.seachat.features.templates', 'Email templates'), 
        t('seachat.features.omnichannel.channels.email.seachat.features.priority', 'Priority handling')
      ]
    }
  ];

  const benefits = [
    {
      title: t('seachat.features.omnichannel.benefits.unifiedView.title', 'Unified Customer View'),
      description: t('seachat.features.omnichannel.benefits.unifiedView.description', 'See complete customer history across all channels in one interface'),
      metric: '360°'
    },
    {
      title: t('seachat.features.omnichannel.benefits.handoffs.title', 'Seamless Handoffs'),
      description: t('seachat.features.omnichannel.benefits.handoffs.description', 'Customers can switch channels without losing conversation context'),
      metric: '100%'
    },
    {
      title: t('seachat.features.omnichannel.benefits.resolution.title', 'Faster Resolution'),
      description: t('seachat.features.omnichannel.benefits.resolution.description', 'Reduce resolution time with unified agent workflows'),
      metric: '45%'
    },
    {
      title: t('seachat.features.omnichannel.benefits.satisfaction.title', 'Higher Satisfaction'),
      description: t('seachat.features.omnichannel.benefits.satisfaction.description', 'Consistent experience across all touchpoints'),
      metric: '92%'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-800 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Globe className="w-16 h-16 text-purple-300 mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold">
                {t('seachat.features.omnichannel.title', 'Omnichannel Support')}
              </h1>
            </div>
            <p className="text-2xl text-purple-200 mb-8 max-w-4xl mx-auto">
              {t('seachat.features.omnichannel.subtitle', 'Connect all your customer touchpoints in one unified platform. Provide consistent, seamless support across websites, social media, phone, and email.')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://chat.seasalt.ai/gpt/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-500 hover:bg-purple-400 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 text-center"
              >
                Sign Up For Free
              </a>
              <a
                href={getMeetingUrl(currentLanguage)}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all text-center"
              >
                Schedule Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Channels */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('seachat.features.omnichannel.channelsTitle', 'All Your Channels, One Platform')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('seachat.features.omnichannel.channelsSubtitle', 'Connect and manage customer conversations across every channel your customers use.')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {channels.map((channel, index) => {
              const IconComponent = channel.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{channel.name}</h3>
                  <p className="text-gray-600 mb-6">{channel.description}</p>
                  
                  <div className="space-y-2">
                    {channel.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
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
              {t('seachat.features.omnichannel.benefitsTitle', 'The Power of True Omnichannel')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('seachat.features.omnichannel.benefitsSubtitle', 'Go beyond just having multiple channels. Create unified experiences that delight customers.')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl font-bold text-purple-600 mb-4">{benefit.metric}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unified Inbox Demo */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('seachat.features.omnichannel.inboxTitle', 'Unified Inbox Experience')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('seachat.features.omnichannel.inboxSubtitle', 'See how all your customer conversations come together in one intelligent interface.')}
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-purple-900 rounded-2xl p-8 text-white">
            <div className="grid lg:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-6">{t('seachat.features.omnichannel.activeConversations', 'Active Conversations')}</h3>
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm border-l-4 border-blue-400">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Sarah Chen</span>
                      <Globe className="w-4 h-4 text-blue-400" />
                    </div>
                    <p className="text-sm text-gray-300">{t('seachat.features.omnichannel.websiteChat', 'Website chat about product seachat.features...')}</p>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm border-l-4 border-green-400">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Mike Johnson</span>
                      <MessageSquare className="w-4 h-4 text-green-400" />
                    </div>
                    <p className="text-sm text-gray-300">{t('seachat.features.omnichannel.whatsappInquiry', 'WhatsApp inquiry about order status...')}</p>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm border-l-4 border-pink-400">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Emma Wilson</span>
                      <Instagram className="w-4 h-4 text-pink-400" />
                    </div>
                    <p className="text-sm text-gray-300">{t('seachat.features.omnichannel.instagramDM', 'Instagram DM about return policy...')}</p>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-2">
                <h3 className="text-xl font-bold mb-6">{t('seachat.features.omnichannel.conversationView', 'Conversation View')}</h3>
                <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                  <div className="space-y-4">
                    <div className="bg-blue-500/20 rounded-lg p-3">
                      <div className="text-sm text-blue-300 mb-1">{t('seachat.features.omnichannel.customerVia', 'Customer via Website')}</div>
                      <p>{t('seachat.features.omnichannel.customerMessage', 'Hi, I\'m interested in your AI automation seachat.features. Can you tell me more?')}</p>
                    </div>
                    
                    <div className="bg-purple-500/20 rounded-lg p-3">
                      <div className="text-sm text-purple-300 mb-1">{t('seachat.features.omnichannel.agentResponse', 'Agent Response')}</div>
                      <p>{t('seachat.features.omnichannel.agentMessage', 'I\'d be happy to help! Our AI automation can handle up to 80% of routine inquiries...')}</p>
                    </div>
                    
                    <div className="bg-green-500/20 rounded-lg p-3">
                      <div className="text-sm text-green-300 mb-1">{t('seachat.features.omnichannel.customerViaWhatsapp', 'Customer via WhatsApp')}</div>
                      <p>{t('seachat.features.omnichannel.whatsappMessage', 'Thanks! Can I continue this conversation on WhatsApp?')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('seachat.features.omnichannel.ctaTitle', 'Ready to Unify Your Customer Channels?')}
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            {t('seachat.features.omnichannel.ctaSubtitle', 'Connect all your customer touchpoints and provide seamless support experiences that keep customers coming back.')}
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
              href={getMeetingUrl(currentLanguage)}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all flex items-center justify-center text-center"
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

export default OmnichannelPage;
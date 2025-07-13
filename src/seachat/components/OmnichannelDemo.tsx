import React, { useState, useEffect, useRef, useMemo } from 'react';
import { MessageCircle, Instagram, Facebook, Twitter, Mail, Phone, Globe, ShoppingBag, Palette, MessageSquare, Zap, ArrowRight, Check, Info, MessageSquareText } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SiLine, SiWordpress, SiWix, SiShopify, SiZendesk } from 'react-icons/si';

// Inline SVG for LINE icon
const LineIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width={props.width || 16} height={props.height || 16} {...props}>
    <rect width="40" height="40" rx="8" fill="#06C755"/>
    <path d="M20 10C13.373 10 8 14.477 8 20c0 3.09 1.81 5.82 4.63 7.59-.15.52-.98 3.37-1.02 3.6 0 0-.02.17.09.24.11.07.25.05.25.05.33-.05 3.82-2.51 4.34-2.85.91.13 1.85.2 2.81.2 6.627 0 12-4.477 12-10S26.627 10 20 10z" fill="#fff"/>
    <path d="M14.5 19.5v4m0-4 2.5 4m0-4v4m3-4v4m0-4 2.5 4m0-4v4m3-4v4" stroke="#06C755" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const OmnichannelDemo = () => {
  const { t } = useTranslation();
  const [activeChannel, setActiveChannel] = useState('website');
  const [fade, setFade] = useState(false);
  
  const channels = useMemo(() => ([
    {
      id: 'website',
      name: t('seachat.omnichannelDemo.channels.website.name', 'Website'),
      icon: Globe,
      color: 'bg-blue-500',
      description: t('seachat.omnichannelDemo.channels.website.description', 'Universal widget that works on any HTML website'),
      stats: { messages: '3.2K', responseTime: '< 15s' },
      features: [
        'Universal compatibility',
        'Custom styling',
        'Mobile responsive',
        'Real-time sync'
      ]
    },
    {
      id: 'whatsapp',
      name: t('seachat.omnichannelDemo.channels.whatsapp.name', 'WhatsApp'),
      icon: MessageCircle,
      color: 'bg-green-500',
      description: t('seachat.omnichannelDemo.channels.whatsapp.description', 'Connect with customers on the world\'s most popular messaging app'),
      stats: { messages: '2.8K', responseTime: '< 30s' },
      features: [
        'Business API integration',
        'Rich media support',
        'Template messages',
        'Group messaging'
      ]
    },
    {
      id: 'instagram',
      name: t('seachat.omnichannelDemo.channels.instagram.name', 'Instagram'),
      icon: Instagram,
      color: 'bg-pink-500',
      description: t('seachat.omnichannelDemo.channels.instagram.description', 'Manage Instagram DMs and story replies in one unified inbox'),
      stats: { messages: '1.5K', responseTime: '< 45s' },
      features: [
        'Story reply management',
        'Media sharing',
        'Quick responses',
        'Automated greetings'
      ]
    },
    {
      id: 'facebook',
      name: t('seachat.omnichannelDemo.channels.facebook.name', 'Facebook'),
      icon: Facebook,
      color: 'bg-blue-600',
      description: t('seachat.omnichannelDemo.channels.facebook.description', 'Provide customer support through Facebook\'s messaging platform'),
      stats: { messages: '1.2K', responseTime: '< 1min' },
      features: [
        'Page integration',
        'Automated responses',
        'Rich cards',
        'Persistent menu'
      ]
    },
    {
      id: 'line',
      name: t('seachat.omnichannelDemo.channels.line.name', 'Line'),
      icon: SiLine,
      color: 'bg-green-700',
      description: t('seachat.omnichannelDemo.channels.line.description', 'The most popular chat app in Japan, Taiwan, and Thailand'),
      stats: { messages: '1.8K', responseTime: '< 40s' },
      features: [
        'Official Account integration',
        'Rich media support',
        'Stickers and emoji',
        'Automated replies'
      ]
    },
    {
      id: 'email',
      name: t('seachat.omnichannelDemo.channels.email.name', 'Email'),
      icon: Mail,
      color: 'bg-red-500',
      description: t('seachat.omnichannelDemo.channels.email.description', 'Manage email tickets with intelligent routing'),
      stats: { messages: '1.4K', responseTime: '< 30min' },
      features: [
        'Smart categorization',
        'Auto-responses',
        'Email templates',
        'Priority handling'
      ]
    },
    {
      id: 'phone',
      name: t('seachat.omnichannelDemo.channels.phone.name', 'Phone Call'),
      icon: Phone,
      color: 'bg-purple-500',
      description: t('seachat.omnichannelDemo.channels.phone.description', 'Handle voice support with AI voice agents'),
      stats: { messages: '650', responseTime: '< 2min' },
      features: [
        'Natural conversations',
        'Call routing',
        'Voicemail transcription',
        'Conference calls'
      ]
    },
    {
      id: 'ecommerce',
      name: t('seachat.omnichannelDemo.channels.ecommerce.name', 'E-commerce'),
      icon: ShoppingBag,
      color: 'bg-orange-500',
      description: t('seachat.omnichannelDemo.channels.ecommerce.description', 'Integrate with online stores for order management'),
      stats: { messages: '2.1K', responseTime: '< 20s' },
      features: [
        'Order tracking',
        'Product information',
        'Inventory checks',
        'Shopping cart recovery'
      ]
    }
  ]), [t]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveChannel((prevChannelId) => {
        const currentIndex = channels.findIndex(c => c.id === prevChannelId);
        const nextIndex = (currentIndex + 1) % channels.length;
        return channels[nextIndex].id;
      });
    }, 3000); // Change channel every 3 seconds

    return () => clearInterval(interval);
  }, [channels]);

  useEffect(() => {
    setFade(true);
    const timeout = setTimeout(() => setFade(false), 300); // Duration of fade-out
    return () => clearTimeout(timeout);
  }, [activeChannel]);

  const platformIcons = {
    'Generic Website': Globe,
    'WordPress': SiWordpress,
    'Shopify': SiShopify,
    'Wix': SiWix,
    'Squarespace': Palette,
    'MailerLite': Zap, // fallback to a generic icon
    'ZenDesk': SiZendesk,
    'WhatsApp': MessageCircle,
    'Instagram': Instagram,
    'Facebook': Facebook,
    'Line': SiLine,
    'Phone Call': Phone,
    'Email': Mail,
    'Contact Form': Info,
    'SMS': MessageSquare
  } as const;

  type PlatformKey = keyof typeof platformIcons;

  const getChannel = (id: string) => channels.find(channel => channel.id === id) || channels[0];
  const currentChannel = getChannel(activeChannel);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('seachat.omnichannelDemo.title', 'Deploy Everywhere Your Customers Are')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('seachat.omnichannelDemo.subtitle', 'Seamlessly connect all your customer touchpoints across websites, social media, and communication platforms.')}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Channel List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-teal-500 p-4">
                <h3 className="text-xl font-bold text-white">
                  {t('seachat.omnichannelDemo.title', 'Communication Channels')}
                </h3>
              </div>
              <div className="divide-y">
                {channels.map((channel) => {
                  const IconComponent = channel.icon;
                  return (
                    <button
                      key={channel.id}
                      onClick={() => setActiveChannel(channel.id)}
                      className={`w-full p-4 flex items-center space-x-4 text-left transition-colors ${
                        activeChannel === channel.id ? 'bg-blue-50' : 'hover:bg-gray-50'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-lg ${channel.color} flex items-center justify-center flex-shrink-0`}>
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-900">{channel.name}</h4>
                        <p className="text-sm text-gray-600 truncate">{channel.description}</p>
                      </div>
                      {activeChannel === channel.id && (
                        <Check className="w-5 h-5 text-blue-600" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Channel Details */}
          <div className="lg:col-span-3">
            <div className={`bg-white rounded-2xl shadow-lg overflow-hidden h-full transition-opacity duration-300 ${fade ? 'opacity-0' : 'opacity-100'}`}>
              <div className={`${currentChannel.color} p-6 text-white`}>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    {React.createElement(currentChannel.icon, { className: "w-6 h-6" })}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{currentChannel.name}</h3>
                    <p className="text-white/80">{currentChannel.description}</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-gray-900">{currentChannel.stats.messages}</div>
                    <div className="text-sm text-gray-600">{t('seachat.omnichannelDemo.messagesPerDay', 'Messages/day')}</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-600">{currentChannel.stats.responseTime}</div>
                    <div className="text-sm text-gray-600">{t('seachat.omnichannelDemo.responseTime', 'Response time')}</div>
                  </div>
                </div>

                {/* Features */}
                <h4 className="font-semibold text-gray-900 mb-4">{t('seachat.omnichannelDemo.keyFeatures', 'Key Features')}</h4>
                <div className="space-y-3 mb-8">
                  {currentChannel.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Integration Button */}
                <a href="https://chat.seasalt.ai/gpt/signup" className="w-full bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                  <span>{t('seachat.omnichannelDemo.integrateChannel', 'Integrate')} {currentChannel.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Platform Categories */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Globe className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('seachat.omnichannelDemo.platformCategories.website.title', 'Website Integration')}</h3>
            <p className="text-gray-600 mb-4">{t('seachat.omnichannelDemo.platformCategories.website.description', 'Deploy on any website platform with our universal widget')}</p>
            <div className="flex flex-wrap justify-center gap-2">
              {(['Generic Website', 'WordPress', 'Shopify', 'Wix', 'Squarespace', 'MailerLite', 'ZenDesk'] as PlatformKey[]).map((platform) => {
                const Icon = platformIcons[platform];
                return (
                  <span key={platform} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                    {Icon && <Icon className="w-4 h-4 mr-1" />}
                    {platform}
                  </span>
                );
              })}
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <div className="w-16 h-16 bg-pink-100 rounded-lg flex items-center justify-center mx-auto mb-6">
              <MessageSquare className="w-8 h-8 text-pink-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('seachat.omnichannelDemo.platformCategories.socialMedia.title', 'Social Media')}</h3>
            <p className="text-gray-600 mb-4">{t('seachat.omnichannelDemo.platformCategories.socialMedia.description', 'Connect with customers on their favorite social platforms')}</p>
            <div className="flex flex-wrap justify-center gap-2">
              {(['WhatsApp', 'Instagram', 'Facebook', 'Line'] as PlatformKey[]).map((platform) => {
                const Icon = platformIcons[platform];
                return (
                  <span key={platform} className="bg-pink-50 text-pink-700 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                    {Icon && <Icon className="w-4 h-4 mr-1" />}
                    {platform}
                  </span>
                );
              })}
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Phone className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('seachat.omnichannelDemo.platformCategories.traditional.title', 'Traditional Channels')}</h3>
            <p className="text-gray-600 mb-4">{t('seachat.omnichannelDemo.platformCategories.traditional.description', 'Maintain support through classic communication methods')}</p>
            <div className="flex flex-wrap justify-center gap-2">
              {(['Phone Call', 'Email', 'Contact Form', 'SMS'] as PlatformKey[]).map((platform) => {
                const Icon = platformIcons[platform];
                return (
                  <span key={platform} className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                    {Icon && <Icon className="w-4 h-4 mr-1" />}
                    {platform}
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        {/* Quick Setup Guide */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">{t('seachat.omnichannelDemo.quickSetup.title', 'Ready to Deploy Everywhere?')}</h3>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              {t('seachat.omnichannelDemo.quickSetup.subtitle', 'Get started in minutes with our simple integration process')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {(t('seachat.omnichannelDemo.quickSetup.steps', { returnObjects: true }) as { title: string; description: string; }[] || []).map((step: { title: string; description: string; }, index: number) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">{index + 1}</span>
                </div>
                <h4 className="font-semibold mb-2">{step.title}</h4>
                <p className="text-blue-100 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <a href="https://chat.seasalt.ai/gpt/signup" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              {t('seachat.omnichannelDemo.quickSetup.button', 'Start Free Deployment')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OmnichannelDemo;
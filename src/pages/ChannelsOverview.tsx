import React from 'react';
import { MessageCircle, Phone, MessageSquare, Monitor, Instagram, Mail, FileText, Smartphone, Globe, ArrowLeft, Star, Zap, Shield } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHelmet from '../components/SEOHelmet';
import { useTranslation } from 'react-i18next';

const ChannelsOverview = () => {
  const { i18n } = useTranslation();
  const canonicalUrl = typeof window !== 'undefined' 
    ? `${window.location.origin}/${i18n.language}/channels-overview` 
    : `/${i18n.language}/channels-overview`;

  const channels = [
    {
      icon: <MessageCircle className="h-8 w-8" />,
      name: 'WhatsApp Business',
      capabilities: [
        'AI-powered chatbot responses',
        'Bulk messaging campaigns',
        'Voice message support',
        'Meta Cloud API integration'
      ],
      difficulty: 'Easy',
      difficultyColor: 'bg-green-100 text-green-800',
      link: '/channels/whatsapp',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: <Phone className="h-8 w-8" />,
      name: 'Voice & Phone Calls',
      capabilities: [
        'AI voicebot with human handoff',
        'Auto dialer campaigns',
        'Multi-agent round robin',
        'Twilio Flex integration'
      ],
      difficulty: 'Medium',
      difficultyColor: 'bg-yellow-100 text-yellow-800',
      link: '/channels/phone-calls',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      name: 'SMS Messaging',
      capabilities: [
        'Bulk SMS campaigns',
        'Two-way conversations',
        'Global delivery (200+ countries)',
        'TCPA compliance tools'
      ],
      difficulty: 'Easy',
      difficultyColor: 'bg-green-100 text-green-800',
      link: '/channels/sms',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      name: 'Website Chat Widget',
      capabilities: [
        'Embeddable chat widget',
        'Customizable design',
        'Lead capture forms',
        'WordPress, Shopify integration'
      ],
      difficulty: 'Easy',
      difficultyColor: 'bg-green-100 text-green-800',
      link: '/channels/website-chat',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50'
    },
    {
      icon: <Instagram className="h-8 w-8" />,
      name: 'Instagram DMs',
      capabilities: [
        'Automated DM responses',
        'Story interaction handling',
        'Image recognition AI',
        'Business account integration'
      ],
      difficulty: 'Medium',
      difficultyColor: 'bg-yellow-100 text-yellow-800',
      link: '/channels/instagram',
      color: 'text-pink-600',
      bgColor: 'bg-pink-50'
    },
    {
      icon: <Mail className="h-8 w-8" />,
      name: 'Facebook Messenger',
      capabilities: [
        'Facebook business integration',
        'Shop integration',
        'Lead generation tools',
        'Social proof features'
      ],
      difficulty: 'Medium',
      difficultyColor: 'bg-yellow-100 text-yellow-800',
      link: '/channels/facebook-messenger',
      color: 'text-blue-700',
      bgColor: 'bg-blue-50'
    },
    {
      icon: <FileText className="h-8 w-8" />,
      name: 'Contact Forms',
      capabilities: [
        'MailerLite integration',
        'HubSpot form sync',
        'Instant lead engagement',
        'CRM synchronization'
      ],
      difficulty: 'Easy',
      difficultyColor: 'bg-green-100 text-green-800',
      link: '/channels/contact-forms',
      color: 'text-gray-600',
      bgColor: 'bg-gray-50'
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      name: 'LINE Business',
      capabilities: [
        'LINE Official Account',
        'Asian market focus',
        'Business messaging',
        'Cultural localization'
      ],
      difficulty: 'Medium',
      difficultyColor: 'bg-yellow-100 text-yellow-800',
      link: '/channels/line',
      color: 'text-green-500',
      bgColor: 'bg-green-50'
    },
    {
      icon: <Globe className="h-8 w-8" />,
      name: 'Website Widget',
      capabilities: [
        'Omnichannel widget',
        'WordPress, Shopify, Wix support',
        'MailerLite integration',
        'Advanced analytics'
      ],
      difficulty: 'Easy',
      difficultyColor: 'bg-green-100 text-green-800',
      link: '/channels/website-widget',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  const benefits = [
    {
      icon: <Star className="h-8 w-8" />,
      title: 'Unified Customer View',
      description: 'Single conversation history across all channels with complete context',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Consistent AI Training',
      description: 'One knowledge base powers responses across all communication platforms',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Seamless Handoffs',
      description: 'Transfer conversations between channels without losing context or history',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* SEO Tags */}
      <SEOHelmet
        title="Communication Channels - Seasalt.ai"
        description="Connect WhatsApp, phone calls, SMS, contact forms, and social media in a single dashboard. Manage every customer conversation from one powerful platform."
        favicon="/seasalt-ai-favicon.ico"
        canonicalUrl={canonicalUrl}
        availableLanguages={['en', 'es', 'zh-TW']}
      />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <a href="/" className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200 mb-8">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Home
              </a>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Every Customer Channel,{' '}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  One Unified Platform
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Connect WhatsApp, phone calls, SMS, contact forms, and social media in a single dashboard. 
                Manage every customer conversation from one powerful platform.
              </p>
            </div>

            {/* Central Hub Visualization */}
            <div className="relative max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-2xl p-8 text-center">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-xl mb-6">
                  <h3 className="text-2xl font-bold">Seasalt.ai Hub</h3>
                  <p className="opacity-90">All channels unified</p>
                </div>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
                  {channels.slice(0, 5).map((channel, index) => (
                    <div key={index} className={`${channel.bgColor} ${channel.color} p-3 rounded-lg`}>
                      {channel.icon}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Channels Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Choose Your Channels
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Start with the channels your customers use most, then expand as you grow. 
                Each integration takes minutes, not months.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {channels.map((channel, index) => (
                <div 
                  key={index}
                  className={`p-6 rounded-2xl border-2 border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 group`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`${channel.bgColor} ${channel.color} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                      {channel.icon}
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${channel.difficultyColor}`}>
                      {channel.difficulty}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {channel.name}
                  </h3>
                  
                  <ul className="space-y-2 mb-6">
                    {channel.capabilities.map((capability, capIndex) => (
                      <li key={capIndex} className="flex items-start text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        {capability}
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href={channel.link}
                    className="block w-full text-center bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 rounded-lg font-medium transition-colors duration-200"
                  >
                    Learn More
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Benefits */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Integration Benefits
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                When all your channels work together, magic happens. See why unified communication 
                is the future of customer engagement.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group text-center"
                >
                  <div className={`${benefit.bgColor} ${benefit.color} p-4 rounded-2xl w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Unify Your Customer Channels?
            </h2>
            <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
              Start with our free plan and connect your first channel in minutes. 
              Scale up as your business grows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                 href="https://seax.seasalt.ai/signup"
                 className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
               >
                 Sign Up
              </a>
              <a
                href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
              >
                Book A Demo
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ChannelsOverview;
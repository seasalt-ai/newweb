import React from 'react';
import { MessageCircle, Check, Shield, Globe, Bot, Users, ArrowLeft } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEOHelmet from '../../components/SEOHelmet';
import { useTranslation } from 'react-i18next';

const WhatsApp = () => {
  const { i18n } = useTranslation();
  const canonicalUrl = typeof window !== 'undefined' 
    ? `${window.location.origin}/${i18n.language}/channels/whatsapp` 
    : `/${i18n.language}/channels/whatsapp`;

  const features = [
    {
      icon: <Bot className="h-8 w-8" />,
      title: 'AI-Powered Responses',
      description: 'Automated customer service with natural language processing that understands context and intent'
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Bulk Campaign Management',
      description: 'Send template messages to thousands of contacts with advanced targeting and scheduling'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Human Agent Handoff',
      description: 'Seamless transition from bot to live agent with /live_agent command and full conversation history'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Meta Business Integration',
      description: 'Full access to WhatsApp Business Platform features with enterprise-grade security'
    }
  ];

  const setupSteps = [
    'Create Meta Developer Account',
    'Configure WhatsApp Business API',
    'Set up webhook endpoints',
    'Generate access tokens',
    'Test message delivery',
    'Launch your first campaign'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* SEO Tags */}
      <SEOHelmet
        title="WhatsApp Business Integration - Seasalt.ai"
        description="Connect your WhatsApp Business account to Seasalt.ai for AI-powered conversations, bulk campaigns, and seamless human agent support. Reach 2+ billion users worldwide."
        favicon="/seasalt-ai-favicon.ico"
        canonicalUrl={canonicalUrl}
        availableLanguages={['en', 'es', 'zh-TW']}
      />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 via-white to-green-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
              <div>
                <a href="/channels-overview" className="inline-flex items-center text-gray-600 hover:text-green-600 transition-colors duration-200 mb-8">
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Back to Channels
                </a>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Transform WhatsApp into Your{' '}
                  <span className="bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
                    Business Command Center
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Connect your WhatsApp Business account to Seasalt.ai for AI-powered conversations, 
                  bulk campaigns, and seamless human agent support. Reach 2+ billion users worldwide.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://seax.seasalt.ai/signup"
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
                  >
                    Connect WhatsApp in 10 Minutes
                  </a>
                  <a
                    href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
                    className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
                  >
                    See Demo
                  </a>
                </div>
              </div>
              
              <div className="mt-12 lg:mt-0">
                <div className="relative">
                  <div className="bg-white rounded-2xl shadow-2xl p-6">
                    <div className="flex items-center mb-4">
                      <MessageCircle className="h-8 w-8 text-green-600 mr-3" />
                      <h3 className="text-lg font-semibold">WhatsApp Business</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-green-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-700">Customer: "Where's my order #12345?"</p>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-700">AI Bot: "Your order is out for delivery and will arrive today by 6 PM. Track it here: [link]"</p>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-700">Customer: "Can I change the delivery address?"</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-700">AI Bot: "Let me connect you with a human agent for address changes..."</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Key Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to turn WhatsApp into a powerful business communication platform
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <div className="text-green-600 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Setup Process */}
        <section id="setup" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Setup Process Visualization
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Step-by-step guide to connect your WhatsApp Business account with enterprise-grade security
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {setupSteps.map((step, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center mb-3">
                    <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                      {index + 1}
                    </div>
                    <h3 className="font-semibold text-gray-900">{step}</h3>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-green-50 border-2 border-green-200 rounded-2xl p-8">
              <div className="flex items-start">
                <Shield className="h-8 w-8 text-green-600 mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">
                    Enterprise-Grade Security
                  </h3>
                  <p className="text-green-700">
                    Your WhatsApp integration includes end-to-end encryption, secure token management, 
                    and compliance with Meta's business policies. All data is protected with bank-level security.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Connect WhatsApp?
            </h2>
            <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses using WhatsApp to provide better customer service 
              and drive more sales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://seax.seasalt.ai/signup"
                className="bg-white text-green-600 hover:bg-gray-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
              >
                Start Integration
              </a>
              <a
                href="#support"
                className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
              >
                Get Help
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WhatsApp;
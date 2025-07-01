import React from 'react';
import { Globe, Palette, Code, BarChart3, Smartphone, Monitor, ArrowLeft } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const WebsiteWidget = () => {
  const platforms = [
    {
      name: 'WordPress',
      description: 'Easy plugin installation for WordPress sites',
      icon: '🔌'
    },
    {
      name: 'Shopify',
      description: 'Native integration with Shopify stores',
      icon: '🛍️'
    },
    {
      name: 'Squarespace',
      description: 'Simple embed code for Squarespace sites',
      icon: '📐'
    },
    {
      name: 'Wix',
      description: 'Drag-and-drop widget for Wix websites',
      icon: '🎨'
    },
    {
      name: 'MailerLite',
      description: 'Direct integration with MailerLite landing pages',
      icon: '📧'
    },
    {
      name: 'Custom HTML',
      description: 'Universal embed code for any website',
      icon: '💻'
    }
  ];

  const features = [
    {
      icon: <Palette className="h-8 w-8" />,
      title: 'Customizable Design',
      description: 'Match your brand with custom colors, fonts, and positioning options'
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: 'Mobile Responsive',
      description: 'Perfect experience across all devices and screen sizes'
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: 'No-Code Setup',
      description: 'Add to any website in under 5 minutes without technical knowledge'
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: 'Advanced Analytics',
      description: 'Track visitor engagement, conversion rates, and chat performance'
    }
  ];

  const widgetStyles = [
    {
      name: 'Chat Bubble',
      description: 'Classic floating chat bubble in bottom corner',
      color: 'bg-blue-500'
    },
    {
      name: 'Slide-in Panel',
      description: 'Elegant slide-in panel from the side',
      color: 'bg-green-500'
    },
    {
      name: 'Embedded Form',
      description: 'Inline contact form within page content',
      color: 'bg-purple-500'
    },
    {
      name: 'Full-Screen Modal',
      description: 'Attention-grabbing full-screen overlay',
      color: 'bg-orange-500'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-orange-50 via-white to-orange-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
              <div>
                <a href="/channels-overview" className="inline-flex items-center text-gray-600 hover:text-orange-600 transition-colors duration-200 mb-8">
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Back to Channels
                </a>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                  One Widget,{' '}
                  <span className="bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">
                    Every Platform
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Deploy our omnichannel widget on WordPress, Shopify, Squarespace, Wix, MailerLite, 
                  and any website. Give customers choice with unified chat, voice, and messaging.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#setup"
                    className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
                  >
                    Deploy Widget Now
                  </a>
                  <a
                    href="#demo"
                    className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
                  >
                    See Live Demo
                  </a>
                </div>
              </div>
              
              <div className="mt-12 lg:mt-0">
                <div className="relative">
                  <div className="bg-white rounded-2xl shadow-2xl p-6">
                    <div className="flex items-center mb-4">
                      <Globe className="h-8 w-8 text-orange-600 mr-3" />
                      <h3 className="text-lg font-semibold">Universal Widget</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-orange-50 p-3 rounded-lg border-l-4 border-orange-500">
                        <p className="text-sm font-medium text-orange-800">💬 Chat</p>
                        <p className="text-xs text-orange-600">Instant messaging support</p>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
                        <p className="text-sm font-medium text-blue-800">📞 Voice</p>
                        <p className="text-xs text-blue-600">One-click voice calls</p>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
                        <p className="text-sm font-medium text-green-800">📱 WhatsApp</p>
                        <p className="text-xs text-green-600">Direct WhatsApp connection</p>
                      </div>
                      <div className="bg-purple-50 p-3 rounded-lg border-l-4 border-purple-500">
                        <p className="text-sm font-medium text-purple-800">📧 Email</p>
                        <p className="text-xs text-purple-600">Contact form integration</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Support */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Works with Every Platform
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                No matter what platform you use, our widget integrates seamlessly with your existing website
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {platforms.map((platform, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 group">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {platform.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {platform.name}
                  </h3>
                  <p className="text-gray-600">
                    {platform.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Advanced Features */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Advanced Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                More than just a chat widget - a complete customer engagement platform
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="text-orange-600 mb-4">
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

        {/* Widget Styles */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Choose Your Style
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Multiple widget styles to match your website design and user experience goals
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {widgetStyles.map((style, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 group">
                  <div className={`w-12 h-12 ${style.color} rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300`}></div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {style.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {style.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Benefits */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-12 shadow-xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Why Choose Our Widget?
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Monitor className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Channel Switching
                  </h3>
                  <p className="text-gray-600">
                    Seamless transition between chat, voice, and messaging without losing context
                  </p>
                </div>
                <div className="text-center">
                  <BarChart3 className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Queue Management
                  </h3>
                  <p className="text-gray-600">
                    Intelligent routing based on agent availability and customer priority
                  </p>
                </div>
                <div className="text-center">
                  <Globe className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Global Support
                  </h3>
                  <p className="text-gray-600">
                    Multi-language support and timezone-aware routing for international customers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Deploy Your Widget?
            </h2>
            <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
              Add powerful omnichannel communication to your website in under 5 minutes. 
              No coding required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#signup"
                className="bg-white text-orange-600 hover:bg-gray-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
              >
                Get Widget Code
              </a>
              <a
                href="#customize"
                className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
              >
                Customize Design
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WebsiteWidget;
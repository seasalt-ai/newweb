import { useEffect } from 'react';
import { Monitor, Zap, Users, BarChart3, Globe, Shield, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const WebsiteChat = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const features = [
    {
      icon: <Code className="h-8 w-8" />,
      title: 'No-Code Setup',
      description: 'Add to any website in under 5 minutes without technical knowledge required'
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: 'Custom Branding',
      description: 'Match your brand with custom colors, fonts, and messaging styles'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Lead Capture',
      description: 'Automatically collect visitor information and qualify leads in real-time'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Instant Responses',
      description: 'AI-powered responses provide immediate help to website visitors 24/7'
    }
  ];

  const integrations = [
    'WordPress',
    'Shopify',
    'Squarespace', 
    'Wix',
    'Webflow',
    'Custom HTML'
  ];

  const customizationOptions = [
    {
      title: 'Position & Size',
      description: 'Choose corner placement, size, and visibility settings'
    },
    {
      title: 'Colors & Fonts',
      description: 'Match your brand colors and typography perfectly'
    },
    {
      title: 'Welcome Messages',
      description: 'Customize greeting messages and conversation starters'
    },
    {
      title: 'Trigger Rules',
      description: 'Set when and where the widget appears to visitors'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-50 via-white to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
              <div>
                <Link to="/channels-overview" className="inline-flex items-center text-gray-600 hover:text-indigo-600 transition-colors duration-200 mb-8">
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Back to Channels
                </Link>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Turn Website Visitors into{' '}
                  <span className="bg-gradient-to-r from-indigo-600 to-indigo-700 bg-clip-text text-transparent">
                    Conversations
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Add a powerful AI chat widget to your website in under 5 minutes. 
                  Capture leads, provide instant support, and never miss an opportunity.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://chat.seasalt.ai/gpt/signup"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
                  >
                    Get Your Free Widget
                  </a>
                  <a
                    href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/" className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
                  >
                    Book A Demo
                  </a>
                </div>
              </div>
              
              <div className="mt-12 lg:mt-0">
                <div className="relative">
                  <div className="bg-white rounded-2xl shadow-2xl p-6">
                    <div className="flex items-center mb-4">
                      <Monitor className="h-8 w-8 text-indigo-600 mr-3" />
                      <h3 className="text-lg font-semibold">Website Chat Widget</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-indigo-50 p-3 rounded-lg">
                        <p className="text-sm font-medium text-indigo-800">👋 Welcome!</p>
                        <p className="text-xs text-indigo-600">How can we help you today?</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-700">Visitor: "Do you offer free shipping?"</p>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-sm text-blue-700">AI: "Yes! Free shipping on orders over $50. Would you like to see our current promotions?"</p>
                      </div>
                      <div className="flex space-x-2">
                        <button className="bg-indigo-600 text-white px-3 py-1 rounded text-xs">Yes, show me</button>
                        <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded text-xs">No thanks</button>
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
                Everything you need to engage website visitors and convert them into customers
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <div className="text-indigo-600 mb-4">
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

        {/* Platform Integrations */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Works with Every Platform
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Easy integration with all major website builders and platforms
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {integrations.map((platform, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 text-center">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <span className="text-indigo-600 font-bold text-lg">{platform[0]}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm">{platform}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Customization Showcase */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Customization Showcase
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Make the widget truly yours with extensive customization options
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {customizationOptions.map((option, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {option.title}
                  </h3>
                  <p className="text-gray-600">
                    {option.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-indigo-50 border-2 border-indigo-200 rounded-2xl p-8">
              <div className="text-center">
                <Palette className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-indigo-900 mb-4">
                  Real-time Preview
                </h3>
                <p className="text-indigo-700 max-w-2xl mx-auto">
                  See your changes instantly with our live preview feature. Customize colors, 
                  positioning, and messages while seeing exactly how it will look on your website.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Analytics Dashboard */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-12 shadow-xl">
              <div className="text-center mb-12">
                <BarChart3 className="h-16 w-16 text-indigo-600 mx-auto mb-6" />
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Powerful Analytics
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Track visitor engagement, conversion rates, and chat performance with detailed analytics
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center p-4 bg-indigo-50 rounded-lg">
                  <div className="text-2xl font-bold text-indigo-600">2,847</div>
                  <div className="text-sm text-indigo-700">Conversations</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">23%</div>
                  <div className="text-sm text-green-700">Conversion Rate</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">1.2m</div>
                  <div className="text-sm text-orange-700">Response Time</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">94%</div>
                  <div className="text-sm text-purple-700">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-indigo-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Add Chat to Your Website?
            </h2>
            <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
              Get your custom chat widget in minutes. No coding required, 
              full customization available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://seax.seasalt.ai/signup"
                className="bg-white text-indigo-600 hover:bg-gray-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
              >
                Get Widget Code
              </a>
              <a
                href="#customize"
                className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
              >
                Customize Now
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WebsiteChat;
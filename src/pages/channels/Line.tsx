import { useEffect } from 'react';
import { Smartphone, Globe, Users, BarChart3, MapPin, Zap, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Line = () => {
  const { i18n } = useTranslation();
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const markets = [
    {
      country: 'Japan',
      users: '95M',
      penetration: '75%',
      flag: '🇯🇵'
    },
    {
      country: 'Taiwan',
      users: '21M',
      penetration: '90%',
      flag: '🇹🇼'
    },
    {
      country: 'Thailand',
      users: '53M',
      penetration: '76%',
      flag: '🇹🇭'
    },
    {
      country: 'South Korea',
      users: '35M',
      penetration: '68%',
      flag: '🇰🇷'
    }
  ];

  const features = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Regional Dominance',
      description: 'Access to over 200 million LINE users across key Asian markets'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'LINE Official Account',
      description: 'Full integration with LINE Official Account for business messaging'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Rich Messaging',
      description: 'Support for stickers, rich menus, and interactive message formats'
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: 'Cultural Adaptation',
      description: 'Localized messaging features optimized for different Asian markets'
    }
  ];

  const businessFeatures = [
    {
      title: 'LINE Pay Integration',
      description: 'Accept payments directly through LINE for seamless transactions'
    },
    {
      title: 'Rich Menu Design',
      description: 'Create interactive menus for easy customer navigation'
    },
    {
      title: 'Broadcast Messaging',
      description: 'Send targeted messages to your LINE followers'
    },
    {
      title: 'Chatbot Builder',
      description: 'Visual chatbot builder optimized for LINE interactions'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 via-white to-green-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
              <div>
                <Link to={`/${i18n.language}/channels-overview`} className="inline-flex items-center text-gray-600 hover:text-green-600 transition-colors duration-200 mb-8">
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Back to Channels
                </Link>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Dominate Asian Markets with{' '}
                  <span className="bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">
                    LINE Integration
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Connect with over 200 million LINE users across Asia with AI-powered conversations 
                  and business messaging. Perfect for businesses targeting Japanese, Taiwanese, Thai, and Korean markets.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://chat.seasalt.ai/gpt/signup"
                    className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
                  >
                    Start LINE Integration
                  </a>
                  <a
                    href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
                    className="border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
                  >
                    See Demo
                  </a>
                </div>
              </div>
              
              <div className="mt-12 lg:mt-0">
                <div className="relative">
                  <div className="bg-white rounded-2xl shadow-2xl p-6">
                    <div className="flex items-center mb-4">
                      <Smartphone className="h-8 w-8 text-green-500 mr-3" />
                      <h3 className="text-lg font-semibold">LINE Business</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-green-50 p-3 rounded-lg">
                        <p className="text-sm font-medium text-green-800">🇯🇵 Customer: "商品について質問があります"</p>
                        <p className="text-xs text-green-600">(I have a question about the product)</p>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-sm text-blue-700">AI: "こんにちは！喜んでお手伝いします。どの商品についてですか？"</p>
                        <p className="text-xs text-blue-600">(Hello! I'm happy to help. Which product?)</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-700">🎌 Sticker: Thank you!</p>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <p className="text-sm text-green-700">AI: "どういたしまして！他にご質問はありますか？"</p>
                        <p className="text-xs text-green-600">(You're welcome! Any other questions?)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Market Focus */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Market Focus
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                LINE's dominance in key Asian markets makes it essential for businesses targeting these regions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {markets.map((market, index) => (
                <div key={index} className="bg-green-50 p-6 rounded-2xl border-2 border-green-200 hover:shadow-lg transition-all duration-300 text-center">
                  <div className="text-4xl mb-4">{market.flag}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {market.country}
                  </h3>
                  <div className="space-y-2">
                    <div className="bg-white p-2 rounded-lg">
                      <div className="text-lg font-bold text-green-600">{market.users}</div>
                      <div className="text-xs text-green-700">Active Users</div>
                    </div>
                    <div className="bg-white p-2 rounded-lg">
                      <div className="text-lg font-bold text-green-600">{market.penetration}</div>
                      <div className="text-xs text-green-700">Market Penetration</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                LINE Business Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Leverage LINE's unique features for business communication and customer engagement
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="text-green-500 mb-4">
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

        {/* Business Messaging */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Advanced Business Messaging
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Take advantage of LINE's rich messaging features for enhanced customer experiences
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {businessFeatures.map((feature, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
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

        {/* Cultural Adaptation */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-12 text-white">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Cultural Adaptation
                </h2>
                <p className="text-xl opacity-90 max-w-2xl mx-auto">
                  Our AI understands cultural nuances and communication styles across different Asian markets
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white bg-opacity-20 p-6 rounded-xl">
                  <MapPin className="h-8 w-8 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Localized Responses</h3>
                  <p className="text-sm opacity-90">AI responses adapted for local communication styles and cultural preferences</p>
                </div>
                <div className="bg-white bg-opacity-20 p-6 rounded-xl">
                  <Users className="h-8 w-8 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Multi-Language Support</h3>
                  <p className="text-sm opacity-90">Native support for Japanese, Chinese, Thai, Korean, and English</p>
                </div>
                <div className="bg-white bg-opacity-20 p-6 rounded-xl">
                  <Smartphone className="h-8 w-8 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Sticker Integration</h3>
                  <p className="text-sm opacity-90">Smart use of LINE stickers and emojis for natural conversations</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-500 to-green-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Enter Asian Markets?
            </h2>
            <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
              Connect with millions of potential customers across Asia through LINE's 
              dominant messaging platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://seax.seasalt.ai/signup"
                className="bg-white text-green-600 hover:bg-gray-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
              >
                Start LINE Integration
              </a>
              <a
                href="#consultation"
                className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
              >
                Get Market Consultation
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Line;
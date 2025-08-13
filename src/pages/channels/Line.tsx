import { useEffect } from 'react';
import { Smartphone, Globe, Users, BarChart3, MapPin, Zap, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEOHelmet from '../../components/SEOHelmet';

const SUPPORTED_LANGUAGES = ['en', 'zh-TW'];

const Line = () => {
  const { t, i18n } = useTranslation();
  
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
      title: t('channels.line.features.regionalDominance.title'),
      description: t('channels.line.features.regionalDominance.description')
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: t('channels.line.features.officialAccount.title'),
      description: t('channels.line.features.officialAccount.description')
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: t('channels.line.features.richMessaging.title'),
      description: t('channels.line.features.richMessaging.description')
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: t('channels.line.features.culturalAdaptation.title'),
      description: t('channels.line.features.culturalAdaptation.description')
    }
  ];

  const businessFeatures = [
    {
      title: t('channels.line.businessFeatures.payIntegration.title'),
      description: t('channels.line.businessFeatures.payIntegration.description')
    },
    {
      title: t('channels.line.businessFeatures.richMenu.title'),
      description: t('channels.line.businessFeatures.richMenu.description')
    },
    {
      title: t('channels.line.businessFeatures.broadcast.title'),
      description: t('channels.line.businessFeatures.broadcast.description')
    },
    {
      title: t('channels.line.businessFeatures.chatbot.title'),
      description: t('channels.line.businessFeatures.chatbot.description')
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHelmet 
        title={t('channels.line.seo.title')}
        description={t('channels.line.seo.description')}
        availableLanguages={SUPPORTED_LANGUAGES}
        favicon="/favicon.ico"
      />
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 via-white to-green-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
              <div>
                <Link to={`/${i18n.language}/channels-overview`} className="inline-flex items-center text-gray-600 hover:text-green-600 transition-colors duration-200 mb-8">
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  {t('channels.line.navigation.backToChannels')}
                </Link>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                  {t('channels.line.hero.title')}
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  {t('channels.line.hero.subtitle')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://chat.seasalt.ai/gpt/signup"
                    className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
                  >
                    {t('channels.line.hero.cta.startIntegration')}
                  </a>
                  <a
                    href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
                    className="border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
                  >
                    {t('channels.line.hero.cta.seeDemo')}
                  </a>
                </div>
              </div>
              
              <div className="mt-12 lg:mt-0">
                <div className="relative">
                  <div className="bg-white rounded-2xl shadow-2xl p-6">
                    <div className="flex items-center mb-4">
                      <Smartphone className="h-8 w-8 text-green-500 mr-3" />
                      <h3 className="text-lg font-semibold">{t('channels.line.hero.demo.title')}</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-green-50 p-3 rounded-lg">
                        <p className="text-sm font-medium text-green-800">🇯🇵 Customer: "{t('channels.line.hero.demo.customer')}"</p>
                        <p className="text-xs text-green-600">{t('channels.line.hero.demo.customerTranslation')}</p>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-sm text-blue-700">AI: "{t('channels.line.hero.demo.ai1')}"</p>
                        <p className="text-xs text-blue-600">{t('channels.line.hero.demo.ai1Translation')}</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-700">🎌 {t('channels.line.hero.demo.stickerMessage')}</p>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <p className="text-sm text-green-700">AI: "{t('channels.line.hero.demo.ai2')}"</p>
                        <p className="text-xs text-green-600">{t('channels.line.hero.demo.ai2Translation')}</p>
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
                {t('channels.line.marketFocus.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('channels.line.marketFocus.subtitle')}
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
                      <div className="text-xs text-green-700">{t('channels.line.marketFocus.activeUsers')}</div>
                    </div>
                    <div className="bg-white p-2 rounded-lg">
                      <div className="text-lg font-bold text-green-600">{market.penetration}</div>
                      <div className="text-xs text-green-700">{t('channels.line.marketFocus.marketPenetration')}</div>
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
                {t('channels.line.features.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('channels.line.features.subtitle')}
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
                {t('channels.line.businessMessaging.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('channels.line.businessMessaging.subtitle')}
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
                  {t('channels.line.culturalAdaptationSection.title')}
                </h2>
                <p className="text-xl opacity-90 max-w-2xl mx-auto">
                  {t('channels.line.culturalAdaptationSection.subtitle')}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white bg-opacity-20 p-6 rounded-xl">
                  <MapPin className="h-8 w-8 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{t('channels.line.culturalFeatures.localized.title')}</h3>
                  <p className="text-sm opacity-90">{t('channels.line.culturalFeatures.localized.description')}</p>
                </div>
                <div className="bg-white bg-opacity-20 p-6 rounded-xl">
                  <Users className="h-8 w-8 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{t('channels.line.culturalFeatures.multiLanguage.title')}</h3>
                  <p className="text-sm opacity-90">{t('channels.line.culturalFeatures.multiLanguage.description')}</p>
                </div>
                <div className="bg-white bg-opacity-20 p-6 rounded-xl">
                  <Smartphone className="h-8 w-8 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{t('channels.line.culturalFeatures.sticker.title')}</h3>
                  <p className="text-sm opacity-90">{t('channels.line.culturalFeatures.sticker.description')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-500 to-green-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              {t('channels.line.cta.title')}
            </h2>
            <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
              {t('channels.line.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://seax.seasalt.ai/signup"
                className="bg-white text-green-600 hover:bg-gray-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
              >
                {t('channels.line.cta.startIntegration')}
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
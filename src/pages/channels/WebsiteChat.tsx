import { useEffect } from 'react';
import { Monitor, Zap, Users, BarChart3, ArrowLeft, Code, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEOHelmet from '../../components/SEOHelmet';

const WebsiteChat = () => {
  const { t } = useTranslation();
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const features = [
    {
      icon: <Code className="h-8 w-8" />,
      title: t('channels.websiteChat.features.noCodeSetup.title'),
      description: t('channels.websiteChat.features.noCodeSetup.description')
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: t('channels.websiteChat.features.customBranding.title'),
      description: t('channels.websiteChat.features.customBranding.description')
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: t('channels.websiteChat.features.leadCapture.title'),
      description: t('channels.websiteChat.features.leadCapture.description')
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: t('channels.websiteChat.features.instantResponses.title'),
      description: t('channels.websiteChat.features.instantResponses.description')
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
      title: t('channels.websiteChat.customization.positionSize.title'),
      description: t('channels.websiteChat.customization.positionSize.description')
    },
    {
      title: t('channels.websiteChat.customization.colorsFonts.title'),
      description: t('channels.websiteChat.customization.colorsFonts.description')
    },
    {
      title: t('channels.websiteChat.customization.welcomeMessages.title'),
      description: t('channels.websiteChat.customization.welcomeMessages.description')
    },
    {
      title: t('channels.websiteChat.customization.triggerRules.title'),
      description: t('channels.websiteChat.customization.triggerRules.description')
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHelmet
        title={t('channels.websiteChat.hero.title.prefix') + ' ' + t('channels.websiteChat.hero.title.highlight')}
        description={t('channels.websiteChat.hero.description')}
        favicon="/favicon.ico"
        canonicalUrl={`${window.location.origin}/channels/website-chat`}
      />
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-50 via-white to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
              <div>
                <Link to="/channels-overview" className="inline-flex items-center text-gray-600 hover:text-indigo-600 transition-colors duration-200 mb-8">
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  {t('channels.websiteChat.navigation.backToChannels')}
                </Link>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                  {t('channels.websiteChat.hero.title.prefix')}{' '}
                  <span className="bg-gradient-to-r from-indigo-600 to-indigo-700 bg-clip-text text-transparent">
                    {t('channels.websiteChat.hero.title.highlight')}
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  {t('channels.websiteChat.hero.description')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://chat.seasalt.ai/gpt/signup"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
                  >
                    {t('channels.websiteChat.hero.cta.primary')}
                  </a>
                  <a
                    href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/" className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
                  >
                    {t('channels.websiteChat.hero.cta.secondary')}
                  </a>
                </div>
              </div>
              
              <div className="mt-12 lg:mt-0">
                <div className="relative">
                  <div className="bg-white rounded-2xl shadow-2xl p-6">
                    <div className="flex items-center mb-4">
                      <Monitor className="h-8 w-8 text-indigo-600 mr-3" />
                      <h3 className="text-lg font-semibold">{t('channels.websiteChat.hero.widget.title')}</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-indigo-50 p-3 rounded-lg">
                        <p className="text-sm font-medium text-indigo-800">{t('channels.websiteChat.hero.widget.welcome.greeting')}</p>
                        <p className="text-xs text-indigo-600">{t('channels.websiteChat.hero.widget.welcome.question')}</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-700">{t('channels.websiteChat.hero.widget.visitor.message')}</p>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-sm text-blue-700">{t('channels.websiteChat.hero.widget.ai.response')}</p>
                      </div>
                      <div className="flex space-x-2">
                        <button className="bg-indigo-600 text-white px-3 py-1 rounded text-xs">{t('channels.websiteChat.hero.widget.button.yes')}</button>
                        <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded text-xs">{t('channels.websiteChat.hero.widget.button.no')}</button>
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
                {t('channels.websiteChat.features.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('channels.websiteChat.features.subtitle')}
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
                {t('channels.websiteChat.platforms.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('channels.websiteChat.platforms.subtitle')}
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
                {t('channels.websiteChat.customization.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('channels.websiteChat.customization.subtitle')}
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
                  {t('channels.websiteChat.customization.realTimePreview.title')}
                </h3>
                <p className="text-indigo-700 max-w-2xl mx-auto">
                  {t('channels.websiteChat.customization.realTimePreview.description')}
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
                  {t('channels.websiteChat.analytics.title')}
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  {t('channels.websiteChat.analytics.subtitle')}
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center p-4 bg-indigo-50 rounded-lg">
                  <div className="text-2xl font-bold text-indigo-600">2,847</div>
                  <div className="text-sm text-indigo-700">{t('channels.websiteChat.analytics.conversations')}</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">23%</div>
                  <div className="text-sm text-green-700">{t('channels.websiteChat.analytics.conversionRate')}</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">1.2m</div>
                  <div className="text-sm text-orange-700">{t('channels.websiteChat.analytics.responseTime')}</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">94%</div>
                  <div className="text-sm text-purple-700">{t('channels.websiteChat.analytics.satisfaction')}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-indigo-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              {t('channels.websiteChat.cta.title')}
            </h2>
            <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
              {t('channels.websiteChat.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://seax.seasalt.ai/signup"
                className="bg-white text-indigo-600 hover:bg-gray-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
              >
                {t('channels.websiteChat.cta.button')}
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
import { useEffect } from 'react';
import { Globe, Palette, Code, BarChart3, ArrowLeft, Smartphone, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEOHelmet from '../../components/SEOHelmet';
import { SUPPORTED_LANGUAGES } from '../../constants/languages';

const WebsiteWidget = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const platforms = [
    {
      name: t('channels.websiteWidget.platforms.wordpress.name'),
      description: t('channels.websiteWidget.platforms.wordpress.description'),
      icon: '🔌'
    },
    {
      name: t('channels.websiteWidget.platforms.shopify.name'),
      description: t('channels.websiteWidget.platforms.shopify.description'),
      icon: '🛍️'
    },
    {
      name: t('channels.websiteWidget.platforms.squarespace.name'),
      description: t('channels.websiteWidget.platforms.squarespace.description'),
      icon: '📐'
    },
    {
      name: t('channels.websiteWidget.platforms.wix.name'),
      description: t('channels.websiteWidget.platforms.wix.description'),
      icon: '🎨'
    },
    {
      name: t('channels.websiteWidget.platforms.mailerlite.name'),
      description: t('channels.websiteWidget.platforms.mailerlite.description'),
      icon: '📧'
    },
    {
      name: t('channels.websiteWidget.platforms.custom.name'),
      description: t('channels.websiteWidget.platforms.custom.description'),
      icon: '💻'
    }
  ];

  const features = [
    {
      icon: <Palette className="h-8 w-8" />,
      title: t('channels.websiteWidget.features.design.title'),
      description: t('channels.websiteWidget.features.design.description')
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: t('channels.websiteWidget.features.mobile.title'),
      description: t('channels.websiteWidget.features.mobile.description')
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: t('channels.websiteWidget.features.nocode.title'),
      description: t('channels.websiteWidget.features.nocode.description')
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: t('channels.websiteWidget.features.analytics.title'),
      description: t('channels.websiteWidget.features.analytics.description')
    }
  ];

  const widgetStyles = [
    {
      name: t('channels.websiteWidget.styles.chatBubble.name'),
      description: t('channels.websiteWidget.styles.chatBubble.description'),
      color: 'bg-blue-500'
    },
    {
      name: t('channels.websiteWidget.styles.slidePanel.name'),
      description: t('channels.websiteWidget.styles.slidePanel.description'),
      color: 'bg-green-500'
    },
    {
      name: t('channels.websiteWidget.styles.embeddedForm.name'),
      description: t('channels.websiteWidget.styles.embeddedForm.description'),
      color: 'bg-purple-500'
    },
    {
      name: t('channels.websiteWidget.styles.fullModal.name'),
      description: t('channels.websiteWidget.styles.fullModal.description'),
      color: 'bg-orange-500'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHelmet
        title={t('channels.websiteWidget.seo.title')}
        description={t('channels.websiteWidget.seo.description')}
        availableLanguages={SUPPORTED_LANGUAGES}
        favicon="/favicon.ico"
      />
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-orange-50 via-white to-orange-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
              <div>
                <Link to={`/${currentLanguage}/channels-overview`} className="inline-flex items-center text-gray-600 hover:text-orange-600 transition-colors duration-200 mb-8">
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  {t('channels.websiteWidget.navigation.backToChannels')}
                </Link>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                  {t('channels.websiteWidget.hero.title')}{' '}
                  <span className="bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">
                    {t('channels.websiteWidget.hero.titleHighlight')}
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  {t('channels.websiteWidget.hero.subtitle')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://seax.seasalt.ai/signup"
                    className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
                  >
                    {t('channels.websiteWidget.hero.cta.deploy')}
                  </a>
                  <a
                    href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/" className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
                  >
                    {t('channels.websiteWidget.hero.cta.demo')}
                  </a>
                </div>
              </div>
              
              <div className="mt-12 lg:mt-0">
                <div className="relative">
                  <div className="bg-white rounded-2xl shadow-2xl p-6">
                    <div className="flex items-center mb-4">
                      <Globe className="h-8 w-8 text-orange-600 mr-3" />
                      <h3 className="text-lg font-semibold">{t('channels.websiteWidget.hero.widget.title')}</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-orange-50 p-3 rounded-lg border-l-4 border-orange-500">
                        <p className="text-sm font-medium text-orange-800">{t('channels.websiteWidget.hero.widget.chat.label')}</p>
                        <p className="text-xs text-orange-600">{t('channels.websiteWidget.hero.widget.chat.description')}</p>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
                        <p className="text-sm font-medium text-blue-800">{t('channels.websiteWidget.hero.widget.voice.label')}</p>
                        <p className="text-xs text-blue-600">{t('channels.websiteWidget.hero.widget.voice.description')}</p>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
                        <p className="text-sm font-medium text-green-800">{t('channels.websiteWidget.hero.widget.whatsapp.label')}</p>
                        <p className="text-xs text-green-600">{t('channels.websiteWidget.hero.widget.whatsapp.description')}</p>
                      </div>
                      <div className="bg-purple-50 p-3 rounded-lg border-l-4 border-purple-500">
                        <p className="text-sm font-medium text-purple-800">{t('channels.websiteWidget.hero.widget.email.label')}</p>
                        <p className="text-xs text-purple-600">{t('channels.websiteWidget.hero.widget.email.description')}</p>
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
                {t('channels.websiteWidget.platforms.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('channels.websiteWidget.platforms.subtitle')}
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
                {t('channels.websiteWidget.features.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('channels.websiteWidget.features.subtitle')}
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
                {t('channels.websiteWidget.styles.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('channels.websiteWidget.styles.subtitle')}
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
                  {t('channels.websiteWidget.benefits.title')}
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Monitor className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {t('channels.websiteWidget.benefits.switching.title')}
                  </h3>
                  <p className="text-gray-600">
                    {t('channels.websiteWidget.benefits.switching.description')}
                  </p>
                </div>
                <div className="text-center">
                  <BarChart3 className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {t('channels.websiteWidget.benefits.queue.title')}
                  </h3>
                  <p className="text-gray-600">
                    {t('channels.websiteWidget.benefits.queue.description')}
                  </p>
                </div>
                <div className="text-center">
                  <Globe className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {t('channels.websiteWidget.benefits.global.title')}
                  </h3>
                  <p className="text-gray-600">
                    {t('channels.websiteWidget.benefits.global.description')}
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
              {t('channels.websiteWidget.cta.title')}
            </h2>
            <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
              {t('channels.websiteWidget.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://seax.seasalt.ai/signup"
                className="bg-white text-orange-600 hover:bg-gray-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
              >
                {t('channels.websiteWidget.cta.getWidget')}
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
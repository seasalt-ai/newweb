import { useEffect } from 'react';
import { Mail, ShoppingBag, Users, BarChart3, Star, Zap, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEOHelmet from '../../components/SEOHelmet';
import { SUPPORTED_LANGUAGES } from '../../constants/languages';
import { MEETING_URL, getMeetingUrl } from '../../constants/urls';

const FacebookMessenger = () => {
  const { i18n, t } = useTranslation();
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const canonicalUrl = `https://www.seasalt.ai/${i18n.language}/channels/facebook-messenger`;
  
  const features = [
    {
      icon: <ShoppingBag className="h-8 w-8" />,
      title: t('channels.facebookMessenger.features.shopIntegration.title'),
      description: t('channels.facebookMessenger.features.shopIntegration.description')
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: t('channels.facebookMessenger.features.leadGeneration.title'),
      description: t('channels.facebookMessenger.features.leadGeneration.description')
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: t('channels.facebookMessenger.features.socialProof.title'),
      description: t('channels.facebookMessenger.features.socialProof.description')
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: t('channels.facebookMessenger.features.instantResponses.title'),
      description: t('channels.facebookMessenger.features.instantResponses.description')
    }
  ];

  const socialCommerceFeatures = [
    {
      title: t('channels.facebookMessenger.socialCommerce.productCatalog.title'),
      description: t('channels.facebookMessenger.socialCommerce.productCatalog.description')
    },
    {
      title: t('channels.facebookMessenger.socialCommerce.cartRecovery.title'),
      description: t('channels.facebookMessenger.socialCommerce.cartRecovery.description')
    },
    {
      title: t('channels.facebookMessenger.socialCommerce.orderTracking.title'),
      description: t('channels.facebookMessenger.socialCommerce.orderTracking.description')
    },
    {
      title: t('channels.facebookMessenger.socialCommerce.customerReviews.title'),
      description: t('channels.facebookMessenger.socialCommerce.customerReviews.description')
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHelmet 
        title={t('channels.facebookMessenger.hero.title') + ' ' + t('channels.facebookMessenger.hero.titleHighlight')}
        description={t('channels.facebookMessenger.hero.subtitle')}
        favicon="/favicon.ico"
        canonicalUrl={canonicalUrl}
        availableLanguages={SUPPORTED_LANGUAGES}
      />
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
              <div>
                <Link to={`/${i18n.language}/channels-overview`} className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200 mb-8">
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  {t('channels.facebookMessenger.navigation.backToChannels')}
                </Link>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                  {t('channels.facebookMessenger.hero.title')}{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                    {t('channels.facebookMessenger.hero.titleHighlight')}
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  {t('channels.facebookMessenger.hero.subtitle')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://chat.seasalt.ai/gpt/signup"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
                  >
                    {t('channels.facebookMessenger.hero.cta.primary')}
                  </a>
                  <a
                    href={getMeetingUrl(i18n.language)}
                    className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
                  >
                    {t('channels.facebookMessenger.hero.cta.secondary')}
                  </a>
                </div>
              </div>
              
              <div className="mt-12 lg:mt-0">
                <div className="relative">
                  <div className="bg-white rounded-2xl shadow-2xl p-6">
                    <div className="flex items-center mb-4">
                      <Mail className="h-8 w-8 text-blue-600 mr-3" />
                      <h3 className="text-lg font-semibold">{t('channels.facebookMessenger.hero.demo.title')}</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-sm font-medium text-blue-800">{t('channels.facebookMessenger.hero.demo.customerQuery')}</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-700">{t('channels.facebookMessenger.hero.demo.aiResponse1')}</p>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-green-200 rounded mr-3"></div>
                          <div>
                            <p className="text-sm font-medium text-green-800">{t('channels.facebookMessenger.hero.demo.productName')}</p>
                            <p className="text-xs text-green-600">{t('channels.facebookMessenger.hero.demo.productPrice')}</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-sm text-blue-700">{t('channels.facebookMessenger.hero.demo.customerQuery2')}</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-700">{t('channels.facebookMessenger.hero.demo.aiResponse2')}</p>
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
                {t('channels.facebookMessenger.features.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('channels.facebookMessenger.features.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <div className="text-blue-600 mb-4">
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

        {/* Social Commerce Deep Dive */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {t('channels.facebookMessenger.socialCommerce.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('channels.facebookMessenger.socialCommerce.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {socialCommerceFeatures.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
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

        {/* Facebook Business Ecosystem */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-white">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  {t('channels.facebookMessenger.businessEcosystem.title')}
                </h2>
                <p className="text-xl opacity-90 max-w-2xl mx-auto">
                  {t('channels.facebookMessenger.businessEcosystem.subtitle')}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white bg-opacity-20 p-6 rounded-xl">
                  <ShoppingBag className="h-8 w-8 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{t('channels.facebookMessenger.businessEcosystem.shop.title')}</h3>
                  <p className="text-sm opacity-90">{t('channels.facebookMessenger.businessEcosystem.shop.description')}</p>
                </div>
                <div className="bg-white bg-opacity-20 p-6 rounded-xl">
                  <BarChart3 className="h-8 w-8 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{t('channels.facebookMessenger.businessEcosystem.ads.title')}</h3>
                  <p className="text-sm opacity-90">{t('channels.facebookMessenger.businessEcosystem.ads.description')}</p>
                </div>
                <div className="bg-white bg-opacity-20 p-6 rounded-xl">
                  <Users className="h-8 w-8 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{t('channels.facebookMessenger.businessEcosystem.pages.title')}</h3>
                  <p className="text-sm opacity-90">{t('channels.facebookMessenger.businessEcosystem.pages.description')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {t('channels.facebookMessenger.results.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('channels.facebookMessenger.results.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{t('channels.facebookMessenger.results.engagement.value')}</div>
                <div className="text-sm text-gray-600">{t('channels.facebookMessenger.results.engagement.description')}</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">{t('channels.facebookMessenger.results.conversion.value')}</div>
                <div className="text-sm text-gray-600">{t('channels.facebookMessenger.results.conversion.description')}</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">{t('channels.facebookMessenger.results.costReduction.value')}</div>
                <div className="text-sm text-gray-600">{t('channels.facebookMessenger.results.costReduction.description')}</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">{t('channels.facebookMessenger.results.availability.value')}</div>
                <div className="text-sm text-gray-600">{t('channels.facebookMessenger.results.availability.description')}</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              {t('channels.facebookMessenger.cta.title')}
            </h2>
            <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
              {t('channels.facebookMessenger.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://seax.seasalt.ai/signup"
                className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
              >
                {t('channels.facebookMessenger.cta.primary')}
              </a>
              <a
                href={getMeetingUrl(i18n.language)} className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
              >
                {t('channels.facebookMessenger.cta.secondary')}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FacebookMessenger;
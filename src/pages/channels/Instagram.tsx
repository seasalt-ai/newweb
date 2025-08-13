import { useEffect } from 'react';
import { Instagram, Camera, Users, Bot, BarChart3, Heart, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEOHelmet from '../../components/SEOHelmet';
import { SUPPORTED_LANGUAGES } from '../../constants/languages';

const InstagramPage = () => {
  const { i18n, t } = useTranslation();
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const features = [
    {
      icon: <Camera className="h-8 w-8" />,
      title: t('channels.instagram.features.imageRecognition.title'),
      description: t('channels.instagram.features.imageRecognition.description')
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: t('channels.instagram.features.storyIntegration.title'),
      description: t('channels.instagram.features.storyIntegration.description')
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: t('channels.instagram.features.influencerSupport.title'),
      description: t('channels.instagram.features.influencerSupport.description')
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: t('channels.instagram.features.smartAutomation.title'),
      description: t('channels.instagram.features.smartAutomation.description')
    }
  ];

  const useCases = [
    {
      title: t('channels.instagram.useCases.ecommerce.title'),
      description: t('channels.instagram.useCases.ecommerce.description'),
      metric: t('channels.instagram.useCases.ecommerce.metric')
    },
    {
      title: t('channels.instagram.useCases.influencers.title'),
      description: t('channels.instagram.useCases.influencers.description'),
      metric: t('channels.instagram.useCases.influencers.metric')
    },
    {
      title: t('channels.instagram.useCases.localBusiness.title'),
      description: t('channels.instagram.useCases.localBusiness.description'),
      metric: t('channels.instagram.useCases.localBusiness.metric')
    },
    {
      title: t('channels.instagram.useCases.contentCreators.title'),
      description: t('channels.instagram.useCases.contentCreators.description'),
      metric: t('channels.instagram.useCases.contentCreators.metric')
    }
  ];

  const canonicalUrl = typeof window !== 'undefined' ? `${window.location.origin}/${i18n.language}/channels/instagram` : '';

  return (
    <div className="min-h-screen bg-white">
      <SEOHelmet 
        title={`${t('channels.instagram.hero.title.prefix')} ${t('channels.instagram.hero.title.highlight')} - Seasalt.ai`}
        description={t('channels.instagram.hero.subtitle')}
        favicon="/favicon.ico"
        canonicalUrl={canonicalUrl}
        availableLanguages={SUPPORTED_LANGUAGES}
      />
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-pink-50 via-white to-purple-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
              <div>
                <Link to={`/${i18n.language}/channels-overview`} className="inline-flex items-center text-gray-600 hover:text-pink-600 transition-colors duration-200 mb-8">
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  {t('channels.instagram.navigation.backToChannels')}
                </Link>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                  {t('channels.instagram.hero.title.prefix')}{' '}
                  <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                    {t('channels.instagram.hero.title.highlight')}
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  {t('channels.instagram.hero.subtitle')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://chat.seasalt.ai/gpt/signup"
                    className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
                  >
                    {t('channels.instagram.hero.cta.primary')}
                  </a>
                  <a
                    href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
                    className="border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
                  >
                    {t('channels.instagram.hero.cta.secondary')}
                  </a>
                </div>
              </div>
              
              <div className="mt-12 lg:mt-0">
                <div className="relative">
                  <div className="bg-white rounded-2xl shadow-2xl p-6">
                    <div className="flex items-center mb-4">
                      <Instagram className="h-8 w-8 text-pink-600 mr-3" />
                      <h3 className="text-lg font-semibold">{t('channels.instagram.hero.demo.title')}</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-pink-50 p-3 rounded-lg flex items-center">
                        <div className="w-8 h-8 bg-pink-200 rounded-full mr-3"></div>
                        <div>
                          <p className="text-sm font-medium text-pink-800">{t('channels.instagram.hero.demo.user1.handle')}</p>
                          <p className="text-xs text-pink-600">{t('channels.instagram.hero.demo.user1.message')}</p>
                        </div>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-sm text-blue-700">{t('channels.instagram.hero.demo.ai1.response')}</p>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg flex items-center">
                        <div className="w-8 h-8 bg-green-200 rounded-full mr-3"></div>
                        <div>
                          <p className="text-sm font-medium text-green-800">{t('channels.instagram.hero.demo.user2.handle')}</p>
                          <p className="text-xs text-green-600">{t('channels.instagram.hero.demo.user2.message')}</p>
                        </div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-700">{t('channels.instagram.hero.demo.ai2.response')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Visual-First Approach */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {t('channels.instagram.visualFirst.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('channels.instagram.visualFirst.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <div className="text-pink-600 mb-4">
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

        {/* Use Cases */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {t('channels.instagram.useCases.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('channels.instagram.useCases.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {useCase.description}
                  </p>
                  <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-3 rounded-lg">
                    <p className="text-pink-800 font-semibold text-sm">{useCase.metric}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Instagram Business Features */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-12 text-white">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  {t('channels.instagram.businessIntegration.title')}
                </h2>
                <p className="text-xl opacity-90 max-w-2xl mx-auto">
                  {t('channels.instagram.businessIntegration.subtitle')}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white bg-opacity-20 p-6 rounded-xl">
                  <BarChart3 className="h-8 w-8 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{t('channels.instagram.businessIntegration.analyticsIntegration.title')}</h3>
                  <p className="text-sm opacity-90">{t('channels.instagram.businessIntegration.analyticsIntegration.description')}</p>
                </div>
                <div className="bg-white bg-opacity-20 p-6 rounded-xl">
                  <Users className="h-8 w-8 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{t('channels.instagram.businessIntegration.audienceInsights.title')}</h3>
                  <p className="text-sm opacity-90">{t('channels.instagram.businessIntegration.audienceInsights.description')}</p>
                </div>
                <div className="bg-white bg-opacity-20 p-6 rounded-xl">
                  <Heart className="h-8 w-8 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{t('channels.instagram.businessIntegration.engagementTracking.title')}</h3>
                  <p className="text-sm opacity-90">{t('channels.instagram.businessIntegration.engagementTracking.description')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              {t('channels.instagram.cta.title')}
            </h2>
            <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
              {t('channels.instagram.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://seax.seasalt.ai/signup"
                className="bg-white text-pink-600 hover:bg-gray-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
              >
                {t('channels.instagram.cta.primary')}
              </a>
              <a
                href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
                className="border-2 border-white text-white hover:bg-white hover:text-pink-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
              >
                {t('channels.instagram.cta.secondary')}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default InstagramPage;
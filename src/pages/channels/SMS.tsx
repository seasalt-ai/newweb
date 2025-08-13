import { useEffect } from 'react';
import { MessageSquare, Globe, Shield, BarChart3, Clock, Users, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEOHelmet from '../../components/SEOHelmet';
import { SUPPORTED_LANGUAGES } from '../../constants/languages';

const SMS = () => {
  const { t, i18n } = useTranslation();
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const canonicalUrl = typeof window !== 'undefined' 
    ? `${window.location.origin}/${i18n.language}/channels/sms` 
    : `/${i18n.language}/channels/sms`;

  const features = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: t('channels.sms.features.globalReach.title'),
      description: t('channels.sms.features.globalReach.description')
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: t('channels.sms.features.compliance.title'),
      description: t('channels.sms.features.compliance.description')
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: t('channels.sms.features.analytics.title'),
      description: t('channels.sms.features.analytics.description')
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: t('channels.sms.features.scheduling.title'),
      description: t('channels.sms.features.scheduling.description')
    }
  ];

  const useCases = [
    {
      title: t('channels.sms.useCases.marketing.title'),
      description: t('channels.sms.useCases.marketing.description'),
      stats: t('channels.sms.useCases.marketing.stats')
    },
    {
      title: t('channels.sms.useCases.appointments.title'),
      description: t('channels.sms.useCases.appointments.description'),
      stats: t('channels.sms.useCases.appointments.stats')
    },
    {
      title: t('channels.sms.useCases.orders.title'),
      description: t('channels.sms.useCases.orders.description'),
      stats: t('channels.sms.useCases.orders.stats')
    },
    {
      title: t('channels.sms.useCases.support.title'),
      description: t('channels.sms.useCases.support.description'),
      stats: t('channels.sms.useCases.support.stats')
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* SEO Tags */}
      <SEOHelmet
        title={t('channels.sms.seo.title')}
        description={t('channels.sms.seo.description')}
        favicon="/seasalt-ai-favicon.ico"
        canonicalUrl={canonicalUrl}
        availableLanguages={SUPPORTED_LANGUAGES}
      />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-50 via-white to-purple-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
              <div>
                <Link to={`/${i18n.language}/channels-overview`} className="inline-flex items-center text-gray-600 hover:text-purple-600 transition-colors duration-200 mb-8">
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  {t('channels.sms.nav.backToChannels')}
                </Link>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                  {t('channels.sms.hero.title.prefix')}{' '}
                  <span className="bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
                    {t('channels.sms.hero.title.highlight')}
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  {t('channels.sms.hero.description')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://seax.seasalt.ai/signup"
                    className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
                  >
                    {t('channels.sms.hero.primaryCta')}
                  </a>
                  <a
                    href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
                    className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
                  >
                    {t('channels.sms.hero.secondaryCta')}
                  </a>
                </div>
              </div>
              
              <div className="mt-12 lg:mt-0">
                <div className="relative">
                  <div className="bg-white rounded-2xl shadow-2xl p-6">
                    <div className="flex items-center mb-4">
                      <MessageSquare className="h-8 w-8 text-purple-600 mr-3" />
                      <h3 className="text-lg font-semibold">{t('channels.sms.hero.campaign.title')}</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-purple-50 p-3 rounded-lg">
                        <p className="text-sm font-medium text-purple-800">{t('channels.sms.hero.campaign.flashSale.title')}</p>
                        <p className="text-xs text-purple-600">{t('channels.sms.hero.campaign.flashSale.sent')}</p>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <p className="text-sm font-medium text-green-800">{t('channels.sms.hero.campaign.delivered.title')}</p>
                        <p className="text-xs text-green-600">{t('channels.sms.hero.campaign.delivered.rate')}</p>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-sm font-medium text-blue-800">{t('channels.sms.hero.campaign.replies.title')}</p>
                        <p className="text-xs text-blue-600">{t('channels.sms.hero.campaign.replies.rate')}</p>
                      </div>
                      <div className="bg-orange-50 p-3 rounded-lg">
                        <p className="text-sm font-medium text-orange-800">{t('channels.sms.hero.campaign.conversions.title')}</p>
                        <p className="text-xs text-orange-600">{t('channels.sms.hero.campaign.conversions.revenue')}</p>
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
                {t('channels.sms.features.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('channels.sms.features.description')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <div className="text-purple-600 mb-4">
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
                {t('channels.sms.useCases.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('channels.sms.useCases.description')}
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
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <p className="text-purple-800 font-semibold text-sm">{useCase.stats}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Campaign Builder */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-12 text-white">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  {t('channels.sms.builder.title')}
                </h2>
                <p className="text-xl opacity-90 max-w-2xl mx-auto">
                  {t('channels.sms.builder.description')}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white bg-opacity-20 p-6 rounded-xl">
                  <Users className="h-8 w-8 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{t('channels.sms.builder.segmentation.title')}</h3>
                  <p className="text-sm opacity-90">{t('channels.sms.builder.segmentation.description')}</p>
                </div>
                <div className="bg-white bg-opacity-20 p-6 rounded-xl">
                  <Clock className="h-8 w-8 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{t('channels.sms.builder.timing.title')}</h3>
                  <p className="text-sm opacity-90">{t('channels.sms.builder.timing.description')}</p>
                </div>
                <div className="bg-white bg-opacity-20 p-6 rounded-xl">
                  <BarChart3 className="h-8 w-8 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{t('channels.sms.builder.analytics.title')}</h3>
                  <p className="text-sm opacity-90">{t('channels.sms.builder.analytics.description')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              {t('channels.sms.cta.title')}
            </h2>
            <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
              {t('channels.sms.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                 href="https://seax.seasalt.ai/signup"
                 className="bg-white text-purple-600 hover:bg-gray-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
               >
                 {t('channels.sms.cta.button')}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SMS;
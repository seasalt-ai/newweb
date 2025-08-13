import { useEffect } from 'react';
import { MessageCircle, Shield, Globe, Bot, Users, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEOHelmet from '../../components/SEOHelmet';
import { useTranslation } from 'react-i18next';
import { SUPPORTED_LANGUAGES } from '../../constants/languages';

const WhatsApp = () => {
  const { t, i18n } = useTranslation();
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const canonicalUrl = typeof window !== 'undefined' 
    ? `${window.location.origin}/${i18n.language}/channels/whatsapp` 
    : `/${i18n.language}/channels/whatsapp`;

  const features = [
    {
      icon: <Bot className="h-8 w-8" />,
      title: t('channels.whatsapp.features.aiResponses.title'),
      description: t('channels.whatsapp.features.aiResponses.description')
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: t('channels.whatsapp.features.bulkCampaigns.title'),
      description: t('channels.whatsapp.features.bulkCampaigns.description')
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: t('channels.whatsapp.features.humanHandoff.title'),
      description: t('channels.whatsapp.features.humanHandoff.description')
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: t('channels.whatsapp.features.metaIntegration.title'),
      description: t('channels.whatsapp.features.metaIntegration.description')
    }
  ];

  const setupSteps = [
    t('channels.whatsapp.setup.steps.0'),
    t('channels.whatsapp.setup.steps.1'),
    t('channels.whatsapp.setup.steps.2'),
    t('channels.whatsapp.setup.steps.3'),
    t('channels.whatsapp.setup.steps.4'),
    t('channels.whatsapp.setup.steps.5')
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* SEO Tags */}
      <SEOHelmet
        title={t('channels.whatsapp.seo.title')}
        description={t('channels.whatsapp.seo.description')}
        favicon="/seasalt-ai-favicon.ico"
        canonicalUrl={canonicalUrl}
        availableLanguages={SUPPORTED_LANGUAGES}
      />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 via-white to-green-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
              <div>
                <Link to={`/${i18n.language}/channels-overview`} className="inline-flex items-center text-gray-600 hover:text-green-600 transition-colors duration-200 mb-8">
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  {t('channels.whatsapp.nav.backToChannels')}
                </Link>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                  {t('channels.whatsapp.hero.title.prefix')}{' '}
                  <span className="bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
                    {t('channels.whatsapp.hero.title.highlight')}
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  {t('channels.whatsapp.hero.description')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://seax.seasalt.ai/signup"
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
                  >
                    {t('channels.whatsapp.hero.primaryCta')}
                  </a>
                  <a
                    href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
                    className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
                  >
                    {t('channels.whatsapp.hero.secondaryCta')}
                  </a>
                </div>
              </div>
              
              <div className="mt-12 lg:mt-0">
                <div className="relative">
                  <div className="bg-white rounded-2xl shadow-2xl p-6">
                    <div className="flex items-center mb-4">
                      <MessageCircle className="h-8 w-8 text-green-600 mr-3" />
                      <h3 className="text-lg font-semibold">{t('channels.whatsapp.hero.demoTitle')}</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-green-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-700">{t('channels.whatsapp.hero.demoMessages.customer1')}</p>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-700">{t('channels.whatsapp.hero.demoMessages.bot1')}</p>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-700">{t('channels.whatsapp.hero.demoMessages.customer2')}</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-700">{t('channels.whatsapp.hero.demoMessages.bot2')}</p>
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
                {t('channels.whatsapp.features.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('channels.whatsapp.features.description')}
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
                {t('channels.whatsapp.setup.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('channels.whatsapp.setup.description')}
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
                    {t('channels.whatsapp.setup.security.title')}
                  </h3>
                  <p className="text-green-700">
                    {t('channels.whatsapp.setup.security.description')}
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
              {t('channels.whatsapp.cta.title')}
            </h2>
            <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
              {t('channels.whatsapp.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://seax.seasalt.ai/signup"
                className="bg-white text-green-600 hover:bg-gray-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
              >
                {t('channels.whatsapp.cta.button')}
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
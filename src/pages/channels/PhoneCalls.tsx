import { useEffect } from 'react';
import { Phone, Bot, Users, BarChart3, Globe, Shield, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEOHelmet from '../../components/SEOHelmet';
import { MEETING_URL, getMeetingUrl } from '../../constants/urls';
import { getSEOData, getCanonicalUrl } from '../../utils/seo';

const PhoneCalls = () => {
  const { t, i18n } = useTranslation();
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Generate SEO data using standardized utility
  const seoData = getSEOData(t, 'channels.phoneCalls', {
    canonicalUrl: getCanonicalUrl(i18n.language, '/channels/phone-calls')
  });

  const features = [
    {
      icon: <Phone className="h-8 w-8" />,
      title: t('channels.phoneCalls.features.humanDialpad.title'),
      description: t('channels.phoneCalls.features.humanDialpad.description')
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: t('channels.phoneCalls.features.aiVoiceBot.title'),
      description: t('channels.phoneCalls.features.aiVoiceBot.description')
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: t('channels.phoneCalls.features.multiAgent.title'),
      description: t('channels.phoneCalls.features.multiAgent.description')
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: t('channels.phoneCalls.features.analytics.title'),
      description: t('channels.phoneCalls.features.analytics.description')
    }
  ];

  const benefits = [
    t('channels.phoneCalls.partnership.goldPartner.benefit1'),
    t('channels.phoneCalls.partnership.goldPartner.benefit2'),
    t('channels.phoneCalls.partnership.goldPartner.benefit3'),
    t('channels.phoneCalls.partnership.goldPartner.benefit4')
  ];

  const useCases = [
    {
      title: t('channels.phoneCalls.useCases.sales.title'),
      description: t('channels.phoneCalls.useCases.sales.description')
    },
    {
      title: t('channels.phoneCalls.useCases.support.title'),
      description: t('channels.phoneCalls.useCases.support.description')
    },
    {
      title: t('channels.phoneCalls.useCases.appointments.title'),
      description: t('channels.phoneCalls.useCases.appointments.description')
    },
    {
      title: t('channels.phoneCalls.useCases.followup.title'),
      description: t('channels.phoneCalls.useCases.followup.description')
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <SEOHelmet {...seoData} />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
              <div>
                <Link to={`/${i18n.language}/channels-overview`} className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200 mb-8">
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  {t('channels.phoneCalls.nav.backToChannels')}
                </Link>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                  {t('channels.phoneCalls.hero.title.prefix')}{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                    {t('channels.phoneCalls.hero.title.highlight')}
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  {t('channels.phoneCalls.hero.description')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://seax.seasalt.ai/signup"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
                  >
                    {t('channels.phoneCalls.hero.primaryCta')}
                  </a>
                  <a
                    href={getMeetingUrl(i18n.language)}
                    className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
                  >
                    {t('channels.phoneCalls.hero.secondaryCta')}
                  </a>
                </div>
              </div>
              
              <div className="mt-12 lg:mt-0">
                <div className="relative">
                  <div className="bg-white rounded-2xl shadow-2xl p-6">
                    <div className="flex items-center mb-4">
                      <Phone className="h-8 w-8 text-blue-600 mr-3" />
                      <h3 className="text-lg font-semibold">{t('channels.phoneCalls.hero.dialpad.title')}</h3>
                    </div>
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {[1,2,3,4,5,6,7,8,9,'*',0,'#'].map((num, index) => (
                        <button key={index} className="bg-gray-100 hover:bg-gray-200 p-3 rounded-lg text-center font-semibold">
                          {num}
                        </button>
                      ))}
                    </div>
                    <div className="space-y-2">
                      <button className="w-full bg-green-600 text-white py-2 rounded-lg">{t('channels.phoneCalls.hero.dialpad.callButton')}</button>
                      <button className="w-full bg-red-600 text-white py-2 rounded-lg">{t('channels.phoneCalls.hero.dialpad.endCallButton')}</button>
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
                {t('channels.phoneCalls.features.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('channels.phoneCalls.features.description')}
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

        {/* Twilio Partnership */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {t('channels.phoneCalls.partnership.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('channels.phoneCalls.partnership.description')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <Shield className="h-12 w-12 text-blue-600 mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('channels.phoneCalls.partnership.goldPartner.title')}</h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <Globe className="h-12 w-12 text-green-600 mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('channels.phoneCalls.partnership.global.title')}</h3>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800">{t('channels.phoneCalls.partnership.global.countries.title')}</h4>
                    <p className="text-green-700 text-sm">{t('channels.phoneCalls.partnership.global.countries.description')}</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800">{t('channels.phoneCalls.partnership.global.uptime.title')}</h4>
                    <p className="text-blue-700 text-sm">{t('channels.phoneCalls.partnership.global.uptime.description')}</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-800">{t('channels.phoneCalls.partnership.global.setup.title')}</h4>
                    <p className="text-purple-700 text-sm">{t('channels.phoneCalls.partnership.global.setup.description')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {t('channels.phoneCalls.useCases.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('channels.phoneCalls.useCases.description')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              {t('channels.phoneCalls.cta.title')}
            </h2>
            <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
              {t('channels.phoneCalls.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://seax.seasalt.ai/signup"
                className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
              >
                {t('channels.phoneCalls.cta.button')}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PhoneCalls;
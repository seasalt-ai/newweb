import { useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHelmet from '../components/SEOHelmet';
import { useTranslation } from 'react-i18next';
import { SUPPORTED_LANGUAGES } from '../constants/languages';
import { MEETING_URL, getMeetingUrl } from '../constants/urls';

const CompareUsOverview = () => {
  const { t, i18n } = useTranslation();
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const canonicalUrl = typeof window !== 'undefined' 
    ? `${window.location.origin}/${i18n.language}/compare-us-overview` 
    : `/${i18n.language}/compare-us-overview`;

  const competitors = [
    {
      name: 'Aircall',
      category: t('compareUsOverview.competitors.aircall.category'),
      description: t('compareUsOverview.competitors.aircall.description'),
      link: `/${i18n.language}/compare/aircall-alternative`,
      color: 'bg-blue-50 border-blue-200'
    },
    {
      name: 'RingCentral',
      category: t('compareUsOverview.competitors.ringcentral.category'),
      description: t('compareUsOverview.competitors.ringcentral.description'),
      link: `/${i18n.language}/compare/ringcentral-alternative`,
      color: 'bg-purple-50 border-purple-200'
    },
    {
      name: 'Genesys Cloud CX',
      category: t('compareUsOverview.competitors.genesys.category'),
      description: t('compareUsOverview.competitors.genesys.description'),
      link: `/${i18n.language}/compare/genesys-alternative`,
      color: 'bg-red-50 border-red-200'
    },
    {
      name: 'Five9',
      category: t('compareUsOverview.competitors.five9.category'),
      description: t('compareUsOverview.competitors.five9.description'),
      link: `/${i18n.language}/compare/five9-alternative`,
      color: 'bg-orange-50 border-orange-200'
    },
    {
      name: 'Avaya',
      category: t('compareUsOverview.competitors.avaya.category'),
      description: t('compareUsOverview.competitors.avaya.description'),
      link: `/${i18n.language}/compare/avaya-alternative`,
      color: 'bg-indigo-50 border-indigo-200'
    },
    {
      name: 'Google Voice',
      category: t('compareUsOverview.competitors.googleVoice.category'),
      description: t('compareUsOverview.competitors.googleVoice.description'),
      link: `/${i18n.language}/compare/google-voice-alternative`,
      color: 'bg-green-50 border-green-200'
    },
    {
      name: 'respond.io',
      category: t('compareUsOverview.competitors.respondIo.category'),
      description: t('compareUsOverview.competitors.respondIo.description'),
      link: `/${i18n.language}/compare/respond-io-alternative`,
      color: 'bg-teal-50 border-teal-200'
    },
    {
      name: 'Intercom',
      category: t('compareUsOverview.competitors.intercom.category'),
      description: t('compareUsOverview.competitors.intercom.description'),
      link: `/${i18n.language}/compare/intercom-alternative`,
      color: 'bg-pink-50 border-pink-200'
    },
    {
      name: 'Kustomer',
      category: t('compareUsOverview.competitors.kustomer.category'),
      description: t('compareUsOverview.competitors.kustomer.description'),
      link: `/${i18n.language}/compare/kustomer-alternative`,
      color: 'bg-yellow-50 border-yellow-200'
    },
    {
      name: '3CX',
      category: t('compareUsOverview.competitors.threeCx.category'),
      description: t('compareUsOverview.competitors.threeCx.description'),
      link: `/${i18n.language}/compare/3cx-alternative`,
      color: 'bg-gray-50 border-gray-200'
    },
    {
      name: 'Dialpad',
      category: t('compareUsOverview.competitors.dialpad.category'),
      description: t('compareUsOverview.competitors.dialpad.description'),
      link: `/${i18n.language}/compare/dialpad-alternative`,
      color: 'bg-cyan-50 border-cyan-200'
    },
    {
      name: '8x8',
      category: t('compareUsOverview.competitors.eightByEight.category'),
      description: t('compareUsOverview.competitors.eightByEight.description'),
      link: `/${i18n.language}/compare/8x8-alternative`,
      color: 'bg-slate-50 border-slate-200'
    },
    {
      name: 'OpenPhone',
      category: t('compareUsOverview.competitors.openphone.category'),
      description: t('compareUsOverview.competitors.openphone.description'),
      link: `/${i18n.language}/compare/openphone-alternative`,
      color: 'bg-emerald-50 border-emerald-200'
    }
  ];


  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* SEO Tags */}
      <SEOHelmet
        title={t('compareUsOverview.seo.title')}
        description={t('compareUsOverview.seo.description')}
        favicon="/seasalt-ai-favicon.ico"
        canonicalUrl={canonicalUrl}
        availableLanguages={['en', 'es', 'zh-TW']}
      />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Link to={`/${i18n.language}/`} className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200 mb-8">
                <ArrowLeft className="h-5 w-5 mr-2" />
                {t('compareUsOverview.hero.backToHome')}
              </Link>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                {t('compareUsOverview.hero.title')}{' '}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {t('compareUsOverview.hero.titleHighlight')}
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('compareUsOverview.hero.subtitle')}
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-6 mb-16">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">13</div>
                <div className="text-sm text-gray-600">{t('compareUsOverview.stats.competitorsAnalyzed')}</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">$25</div>
                <div className="text-sm text-gray-600">{t('compareUsOverview.stats.startingPrice')}</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">9</div>
                <div className="text-sm text-gray-600">{t('compareUsOverview.stats.channelsIncluded')}</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">1</div>
                <div className="text-sm text-gray-600">{t('compareUsOverview.stats.unifiedPlatform')}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Competitors Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {t('compareUsOverview.competitorsSection.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('compareUsOverview.competitorsSection.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {competitors.map((competitor, index) => (
                <Link
                  key={index}
                  to={competitor.link}
                  className={`p-6 rounded-2xl border-2 ${competitor.color} hover:shadow-lg transition-all duration-300 group`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                        {competitor.name}
                      </h3>
                      <span className="text-sm font-medium text-gray-600 bg-white px-2 py-1 rounded-full">
                        {competitor.category}
                      </span>
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-200" />
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {competitor.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Compare Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {t('compareUsOverview.whyCompareSection.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('compareUsOverview.whyCompareSection.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="bg-blue-100 p-4 rounded-2xl w-fit mx-auto mb-6">
                  <div className="text-2xl">🔍</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {t('compareUsOverview.benefits.transparency.title')}
                </h3>
                <p className="text-gray-600">
                  {t('compareUsOverview.benefits.transparency.description')}
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="bg-green-100 p-4 rounded-2xl w-fit mx-auto mb-6">
                  <div className="text-2xl">💡</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {t('compareUsOverview.benefits.decisions.title')}
                </h3>
                <p className="text-gray-600">
                  {t('compareUsOverview.benefits.decisions.description')}
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="bg-purple-100 p-4 rounded-2xl w-fit mx-auto mb-6">
                  <div className="text-2xl">🎯</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {t('compareUsOverview.benefits.fit.title')}
                </h3>
                <p className="text-gray-600">
                  {t('compareUsOverview.benefits.fit.description')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              {t('compareUsOverview.cta.title')}
            </h2>
            <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
              {t('compareUsOverview.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                 href="https://seax.seasalt.ai/signup"
                 className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
               >
                 {t('compareUsOverview.cta.signUp')}
              </a>
              <a
                href={getMeetingUrl(i18n.language)} className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
              >
                {t('compareUsOverview.cta.bookDemo')}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CompareUsOverview;
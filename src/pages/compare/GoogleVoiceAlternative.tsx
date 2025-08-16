import { ArrowLeft, Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEOHelmet from '../../components/SEOHelmet';
import { SUPPORTED_LANGUAGES } from '../../constants/languages';
import { MEETING_URL, getMeetingUrl } from '../../constants/urls';

const GoogleVoiceAlternative = () => {
  const { t, i18n } = useTranslation();

  const comparisonFeatures = [
    {
      feature: t('compare.googleVoiceAlternative.comparison.features.systemType.feature'),
      seasalt: t('compare.googleVoiceAlternative.comparison.features.systemType.seasalt'),
      competitor: t('compare.googleVoiceAlternative.comparison.features.systemType.competitor'),
      seasaltAdvantage: true
    },
    {
      feature: t('compare.googleVoiceAlternative.comparison.features.teamCollaboration.feature'),
      seasalt: t('compare.googleVoiceAlternative.comparison.features.teamCollaboration.seasalt'),
      competitor: t('compare.googleVoiceAlternative.comparison.features.teamCollaboration.competitor'),
      seasaltAdvantage: true
    },
    {
      feature: t('compare.googleVoiceAlternative.comparison.features.crmIntegrations.feature'),
      seasalt: t('compare.googleVoiceAlternative.comparison.features.crmIntegrations.seasalt'),
      competitor: t('compare.googleVoiceAlternative.comparison.features.crmIntegrations.competitor'),
      seasaltAdvantage: true
    },
    {
      feature: t('compare.googleVoiceAlternative.comparison.features.supportedChannels.feature'),
      seasalt: t('compare.googleVoiceAlternative.comparison.features.supportedChannels.seasalt'),
      competitor: t('compare.googleVoiceAlternative.comparison.features.supportedChannels.competitor'),
      seasaltAdvantage: true
    },
    {
      feature: t('compare.googleVoiceAlternative.comparison.features.automation.feature'),
      seasalt: t('compare.googleVoiceAlternative.comparison.features.automation.seasalt'),
      competitor: t('compare.googleVoiceAlternative.comparison.features.automation.competitor'),
      seasaltAdvantage: true
    },
    {
      feature: t('compare.googleVoiceAlternative.comparison.features.tollFree.feature'),
      seasalt: t('compare.googleVoiceAlternative.comparison.features.tollFree.seasalt'),
      competitor: t('compare.googleVoiceAlternative.comparison.features.tollFree.competitor'),
      seasaltAdvantage: true
    },
    {
      feature: t('compare.googleVoiceAlternative.comparison.features.callAnalytics.feature'),
      seasalt: t('compare.googleVoiceAlternative.comparison.features.callAnalytics.seasalt'),
      competitor: t('compare.googleVoiceAlternative.comparison.features.callAnalytics.competitor'),
      seasaltAdvantage: true
    },
    {
      feature: t('compare.googleVoiceAlternative.comparison.features.bestFor.feature'),
      seasalt: t('compare.googleVoiceAlternative.comparison.features.bestFor.seasalt'),
      competitor: t('compare.googleVoiceAlternative.comparison.features.bestFor.competitor'),
      seasaltAdvantage: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHelmet 
        title={t('compare.googleVoiceAlternative.seo.title')}
        description={t('compare.googleVoiceAlternative.seo.description')}
        canonicalUrl={`https://seasalt.ai/${i18n.language}/compare/google-voice-alternative`}
        availableLanguages={SUPPORTED_LANGUAGES}
        favicon="/favicon.ico"
      />
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 via-white to-green-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to={`/${i18n.language}/compare-us-overview`} className="inline-flex items-center text-gray-600 hover:text-green-600 transition-colors duration-200 mb-8">
              <ArrowLeft className="h-5 w-5 mr-2" />
              {t('compare.googleVoiceAlternative.nav.backToOverview')}
            </Link>
            
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                {t('compare.googleVoiceAlternative.hero.title.line1')}{' '}
                <span className="bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
                  {t('compare.googleVoiceAlternative.hero.title.line2')}
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                {t('compare.googleVoiceAlternative.hero.subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Comparison */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {t('compare.googleVoiceAlternative.comparison.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('compare.googleVoiceAlternative.comparison.subtitle')}
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">{t('compare.googleVoiceAlternative.comparison.table.feature')}</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-blue-600">{t('compare.googleVoiceAlternative.comparison.table.seasalt')}</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">{t('compare.googleVoiceAlternative.comparison.table.competitor')}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {comparisonFeatures.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.feature}</td>
                        <td className="px-6 py-4 text-center">
                          <div className="flex items-center justify-center">
                            {item.seasaltAdvantage && <Check className="h-5 w-5 text-green-600 mr-2" />}
                            <span className="text-sm text-gray-700">{item.seasalt}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <div className="flex items-center justify-center">
                            {item.seasaltAdvantage && <X className="h-5 w-5 text-red-500 mr-2" />}
                            <span className="text-sm text-gray-700">{item.competitor}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Growth Limitations */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {t('compare.googleVoiceAlternative.growthLimitations.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('compare.googleVoiceAlternative.growthLimitations.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="bg-red-100 p-3 rounded-lg mb-4">
                  <X className="h-8 w-8 text-red-600 mx-auto" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{t('compare.googleVoiceAlternative.growthLimitations.firstEmployee.title')}</h3>
                <p className="text-gray-600 text-sm">
                  {t('compare.googleVoiceAlternative.growthLimitations.firstEmployee.description')}
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="bg-red-100 p-3 rounded-lg mb-4">
                  <X className="h-8 w-8 text-red-600 mx-auto" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{t('compare.googleVoiceAlternative.growthLimitations.crmIntegration.title')}</h3>
                <p className="text-gray-600 text-sm">
                  {t('compare.googleVoiceAlternative.growthLimitations.crmIntegration.description')}
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="bg-red-100 p-3 rounded-lg mb-4">
                  <X className="h-8 w-8 text-red-600 mx-auto" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{t('compare.googleVoiceAlternative.growthLimitations.professionalFeatures.title')}</h3>
                <p className="text-gray-600 text-sm">
                  {t('compare.googleVoiceAlternative.growthLimitations.professionalFeatures.description')}
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="bg-red-100 p-3 rounded-lg mb-4">
                  <X className="h-8 w-8 text-red-600 mx-auto" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{t('compare.googleVoiceAlternative.growthLimitations.multipleChannels.title')}</h3>
                <p className="text-gray-600 text-sm">
                  {t('compare.googleVoiceAlternative.growthLimitations.multipleChannels.description')}
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="bg-red-100 p-3 rounded-lg mb-4">
                  <X className="h-8 w-8 text-red-600 mx-auto" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{t('compare.googleVoiceAlternative.growthLimitations.automation.title')}</h3>
                <p className="text-gray-600 text-sm">
                  {t('compare.googleVoiceAlternative.growthLimitations.automation.description')}
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="bg-red-100 p-3 rounded-lg mb-4">
                  <X className="h-8 w-8 text-red-600 mx-auto" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{t('compare.googleVoiceAlternative.growthLimitations.internationalSupport.title')}</h3>
                <p className="text-gray-600 text-sm">
                  {t('compare.googleVoiceAlternative.growthLimitations.internationalSupport.description')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Migration Benefits */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {t('compare.googleVoiceAlternative.benefits.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('compare.googleVoiceAlternative.benefits.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-green-600 mb-6">{t('compare.googleVoiceAlternative.benefits.teamCollaboration.title')}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.googleVoiceAlternative.benefits.teamCollaboration.feature1')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.googleVoiceAlternative.benefits.teamCollaboration.feature2')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.googleVoiceAlternative.benefits.teamCollaboration.feature3')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.googleVoiceAlternative.benefits.teamCollaboration.feature4')}</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-blue-600 mb-6">{t('compare.googleVoiceAlternative.benefits.professionalFeatures.title')}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.googleVoiceAlternative.benefits.professionalFeatures.feature1')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.googleVoiceAlternative.benefits.professionalFeatures.feature2')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.googleVoiceAlternative.benefits.professionalFeatures.feature3')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.googleVoiceAlternative.benefits.professionalFeatures.feature4')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              {t('compare.googleVoiceAlternative.cta.title')}
            </h2>
            <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
              {t('compare.googleVoiceAlternative.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                 href="https://seax.seasalt.ai/signup"
                 className="bg-white text-green-600 hover:bg-gray-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
               >
                 {t('compare.googleVoiceAlternative.cta.signUp')}
              </a>
              <a
                href={getMeetingUrl(i18n.language)}
                className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
              >
                {t('compare.googleVoiceAlternative.cta.bookDemo')}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GoogleVoiceAlternative;
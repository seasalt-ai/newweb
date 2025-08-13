import { ArrowLeft, Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEOHelmet from '../../components/SEOHelmet';
import { SUPPORTED_LANGUAGES } from '../../constants/languages';

const AvayaAlternative = () => {
  const { i18n, t } = useTranslation();
  const comparisonFeatures = [
    {
      feature: t('compare.avayaAlternative.comparison.features.platformType.name'),
      seasalt: t('compare.avayaAlternative.comparison.features.platformType.seasalt'),
      competitor: t('compare.avayaAlternative.comparison.features.platformType.competitor'),
      seasaltAdvantage: true
    },
    {
      feature: t('compare.avayaAlternative.comparison.features.startingPrice.name'),
      seasalt: t('compare.avayaAlternative.comparison.features.startingPrice.seasalt'),
      competitor: t('compare.avayaAlternative.comparison.features.startingPrice.competitor'),
      seasaltAdvantage: true
    },
    {
      feature: t('compare.avayaAlternative.comparison.features.setupComplexity.name'),
      seasalt: t('compare.avayaAlternative.comparison.features.setupComplexity.seasalt'),
      competitor: t('compare.avayaAlternative.comparison.features.setupComplexity.competitor'),
      seasaltAdvantage: true
    },
    {
      feature: t('compare.avayaAlternative.comparison.features.modernArchitecture.name'),
      seasalt: t('compare.avayaAlternative.comparison.features.modernArchitecture.seasalt'),
      competitor: t('compare.avayaAlternative.comparison.features.modernArchitecture.competitor'),
      seasaltAdvantage: true
    },
    {
      feature: t('compare.avayaAlternative.comparison.features.aiIntegration.name'),
      seasalt: t('compare.avayaAlternative.comparison.features.aiIntegration.seasalt'),
      competitor: t('compare.avayaAlternative.comparison.features.aiIntegration.competitor'),
      seasaltAdvantage: true
    },
    {
      feature: t('compare.avayaAlternative.comparison.features.targetMarket.name'),
      seasalt: t('compare.avayaAlternative.comparison.features.targetMarket.seasalt'),
      competitor: t('compare.avayaAlternative.comparison.features.targetMarket.competitor'),
      seasaltAdvantage: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHelmet
        title={t('compare.avayaAlternative.seo.title')}
        description={t('compare.avayaAlternative.seo.description')}
        canonicalUrl={`/${i18n.language}/compare/avaya-alternative`}
        availableLanguages={SUPPORTED_LANGUAGES}
        favicon="/favicon.ico"
      />
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-50 via-white to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to={`/${i18n.language}/compare-us-overview`} className="inline-flex items-center text-gray-600 hover:text-indigo-600 transition-colors duration-200 mb-8">
              <ArrowLeft className="h-5 w-5 mr-2" />
              {t('compare.avayaAlternative.navigation.backToCompare')}
            </Link>
            
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                {t('compare.avayaAlternative.hero.title.main')}{' '}
                <span className="bg-gradient-to-r from-indigo-600 to-indigo-700 bg-clip-text text-transparent">
                  {t('compare.avayaAlternative.hero.title.highlight')}
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                {t('compare.avayaAlternative.hero.description')}
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Comparison */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {t('compare.avayaAlternative.comparison.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('compare.avayaAlternative.comparison.subtitle')}
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">{t('compare.avayaAlternative.comparison.tableHeaders.feature')}</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-blue-600">{t('compare.avayaAlternative.comparison.tableHeaders.seasalt')}</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">{t('compare.avayaAlternative.comparison.tableHeaders.avaya')}</th>
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

        {/* Architecture Comparison */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {t('compare.avayaAlternative.architecture.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('compare.avayaAlternative.architecture.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-indigo-600 mb-6">{t('compare.avayaAlternative.architecture.seasalt.title')}</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.avayaAlternative.architecture.seasalt.feature1')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.avayaAlternative.architecture.seasalt.feature2')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.avayaAlternative.architecture.seasalt.feature3')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.avayaAlternative.architecture.seasalt.feature4')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.avayaAlternative.architecture.seasalt.feature5')}</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-600 mb-6">{t('compare.avayaAlternative.architecture.avaya.title')}</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.avayaAlternative.architecture.avaya.feature1')}</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.avayaAlternative.architecture.avaya.feature2')}</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.avayaAlternative.architecture.avaya.feature3')}</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.avayaAlternative.architecture.avaya.feature4')}</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.avayaAlternative.architecture.avaya.feature5')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Business Impact */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {t('compare.avayaAlternative.businessImpact.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('compare.avayaAlternative.businessImpact.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-green-50 p-6 rounded-xl text-center">
                <h3 className="text-xl font-bold text-green-800 mb-4">{t('compare.avayaAlternative.businessImpact.timeToValue.title')}</h3>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{t('compare.avayaAlternative.businessImpact.timeToValue.seasalt.value')}</div>
                    <div className="text-sm text-green-700">{t('compare.avayaAlternative.businessImpact.timeToValue.seasalt.label')}</div>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <div className="text-2xl font-bold text-red-600">{t('compare.avayaAlternative.businessImpact.timeToValue.avaya.value')}</div>
                    <div className="text-sm text-red-700">{t('compare.avayaAlternative.businessImpact.timeToValue.avaya.label')}</div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl text-center">
                <h3 className="text-xl font-bold text-blue-800 mb-4">{t('compare.avayaAlternative.businessImpact.setupComplexity.title')}</h3>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{t('compare.avayaAlternative.businessImpact.setupComplexity.seasalt.value')}</div>
                    <div className="text-sm text-blue-700">{t('compare.avayaAlternative.businessImpact.setupComplexity.seasalt.label')}</div>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <div className="text-2xl font-bold text-red-600">{t('compare.avayaAlternative.businessImpact.setupComplexity.avaya.value')}</div>
                    <div className="text-sm text-red-700">{t('compare.avayaAlternative.businessImpact.setupComplexity.avaya.label')}</div>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-xl text-center">
                <h3 className="text-xl font-bold text-purple-800 mb-4">{t('compare.avayaAlternative.businessImpact.ongoingMaintenance.title')}</h3>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">{t('compare.avayaAlternative.businessImpact.ongoingMaintenance.seasalt.value')}</div>
                    <div className="text-sm text-purple-700">{t('compare.avayaAlternative.businessImpact.ongoingMaintenance.seasalt.label')}</div>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <div className="text-2xl font-bold text-red-600">{t('compare.avayaAlternative.businessImpact.ongoingMaintenance.avaya.value')}</div>
                    <div className="text-sm text-red-700">{t('compare.avayaAlternative.businessImpact.ongoingMaintenance.avaya.label')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-indigo-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              {t('compare.avayaAlternative.cta.title')}
            </h2>
            <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
              {t('compare.avayaAlternative.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                 href="https://seax.seasalt.ai/signup"
                 className="bg-white text-indigo-600 hover:bg-gray-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
               >
                 {t('compare.avayaAlternative.cta.signUp')}
              </a>
              <a
                href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/" className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
              >
                {t('compare.avayaAlternative.cta.bookDemo')}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AvayaAlternative;
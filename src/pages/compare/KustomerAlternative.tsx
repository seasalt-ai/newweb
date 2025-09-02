import { ArrowLeft, Check, X, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEOHelmet from '../../components/SEOHelmet';
import { MEETING_URL, getMeetingUrl } from '../../constants/urls';
import { getSEOData, getCanonicalUrl } from '../../utils/seo';

const KustomerAlternative = () => {
  const { t, i18n } = useTranslation();
  
  // Generate SEO data using standardized utility
  const seoData = getSEOData(t, 'compare.kustomerAlternative', {
    canonicalUrl: getCanonicalUrl(i18n.language, '/compare/kustomer-alternative')
  });
  
  const comparisonFeatures = [
    {
      feature: t('compare.kustomerAlternative.comparison.features.pricingModel.name'),
      seasalt: t('compare.kustomerAlternative.comparison.features.pricingModel.seasalt'),
      competitor: t('compare.kustomerAlternative.comparison.features.pricingModel.kustomer'),
      seasaltAdvantage: true
    },
    {
      feature: t('compare.kustomerAlternative.comparison.features.startingPrice.name'),
      seasalt: t('compare.kustomerAlternative.comparison.features.startingPrice.seasalt'),
      competitor: t('compare.kustomerAlternative.comparison.features.startingPrice.kustomer'),
      seasaltAdvantage: true
    },
    {
      feature: t('compare.kustomerAlternative.comparison.features.minimumCommitment.name'),
      seasalt: t('compare.kustomerAlternative.comparison.features.minimumCommitment.seasalt'),
      competitor: t('compare.kustomerAlternative.comparison.features.minimumCommitment.kustomer'),
      seasaltAdvantage: true
    },
    {
      feature: t('compare.kustomerAlternative.comparison.features.aiCapabilities.name'),
      seasalt: t('compare.kustomerAlternative.comparison.features.aiCapabilities.seasalt'),
      competitor: t('compare.kustomerAlternative.comparison.features.aiCapabilities.kustomer'),
      seasaltAdvantage: true
    },
    {
      feature: t('compare.kustomerAlternative.comparison.features.omnichannelTimeline.name'),
      seasalt: t('compare.kustomerAlternative.comparison.features.omnichannelTimeline.seasalt'),
      competitor: t('compare.kustomerAlternative.comparison.features.omnichannelTimeline.kustomer'),
      seasaltAdvantage: false
    },
    {
      feature: t('compare.kustomerAlternative.comparison.features.coreFocus.name'),
      seasalt: t('compare.kustomerAlternative.comparison.features.coreFocus.seasalt'),
      competitor: t('compare.kustomerAlternative.comparison.features.coreFocus.kustomer'),
      seasaltAdvantage: false
    },
    {
      feature: t('compare.kustomerAlternative.comparison.features.bestFor.name'),
      seasalt: t('compare.kustomerAlternative.comparison.features.bestFor.seasalt'),
      competitor: t('compare.kustomerAlternative.comparison.features.bestFor.kustomer'),
      seasaltAdvantage: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHelmet {...seoData} />
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 via-white to-green-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to={`/${i18n.language}/compare-us-overview`} className="inline-flex items-center text-gray-600 hover:text-green-600 transition-colors duration-200 mb-8">
              <ArrowLeft className="h-5 w-5 mr-2" />
              {t('compare.kustomerAlternative.nav.backLink')}
            </Link>
            
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                {t('compare.kustomerAlternative.hero.title')}{' '}
                <span className="bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
                  {t('compare.kustomerAlternative.hero.highlight')}
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                {t('compare.kustomerAlternative.hero.description')}
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Comparison */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {t('compare.kustomerAlternative.comparison.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('compare.kustomerAlternative.comparison.subtitle')}
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">{t('compare.kustomerAlternative.comparison.table.headers.feature')}</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-blue-600">{t('compare.kustomerAlternative.comparison.table.headers.seasalt')}</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">{t('compare.kustomerAlternative.comparison.table.headers.kustomer')}</th>
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

        {/* Cost Barrier Analysis */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {t('compare.kustomerAlternative.costBarrier.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('compare.kustomerAlternative.costBarrier.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{t('compare.kustomerAlternative.costBarrier.scenarios.twoAgents.title')}</h3>
                <div className="space-y-3">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-xl font-bold text-green-600">{t('compare.kustomerAlternative.costBarrier.scenarios.twoAgents.seasaltPrice')}</div>
                    <div className="text-sm text-green-700">{t('compare.kustomerAlternative.costBarrier.scenarios.twoAgents.seasaltLabel')}</div>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <div className="text-xl font-bold text-red-600">{t('compare.kustomerAlternative.costBarrier.scenarios.twoAgents.kustomerPrice')}</div>
                    <div className="text-sm text-red-700">{t('compare.kustomerAlternative.costBarrier.scenarios.twoAgents.kustomerLabel')}</div>
                  </div>
                  <div className="text-sm text-gray-600">{t('compare.kustomerAlternative.costBarrier.scenarios.twoAgents.savings')}</div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{t('compare.kustomerAlternative.costBarrier.scenarios.fiveAgents.title')}</h3>
                <div className="space-y-3">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-xl font-bold text-green-600">{t('compare.kustomerAlternative.costBarrier.scenarios.fiveAgents.seasaltPrice')}</div>
                    <div className="text-sm text-green-700">{t('compare.kustomerAlternative.costBarrier.scenarios.fiveAgents.seasaltLabel')}</div>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <div className="text-xl font-bold text-red-600">{t('compare.kustomerAlternative.costBarrier.scenarios.fiveAgents.kustomerPrice')}</div>
                    <div className="text-sm text-red-700">{t('compare.kustomerAlternative.costBarrier.scenarios.fiveAgents.kustomerLabel')}</div>
                  </div>
                  <div className="text-sm text-gray-600">{t('compare.kustomerAlternative.costBarrier.scenarios.fiveAgents.savings')}</div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{t('compare.kustomerAlternative.costBarrier.scenarios.eightAgents.title')}</h3>
                <div className="space-y-3">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-xl font-bold text-green-600">{t('compare.kustomerAlternative.costBarrier.scenarios.eightAgents.seasaltPrice')}</div>
                    <div className="text-sm text-green-700">{t('compare.kustomerAlternative.costBarrier.scenarios.eightAgents.seasaltLabel')}</div>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <div className="text-xl font-bold text-red-600">{t('compare.kustomerAlternative.costBarrier.scenarios.eightAgents.kustomerPrice')}</div>
                    <div className="text-sm text-red-700">{t('compare.kustomerAlternative.costBarrier.scenarios.eightAgents.kustomerLabel')}</div>
                  </div>
                  <div className="text-sm text-gray-600">{t('compare.kustomerAlternative.costBarrier.scenarios.eightAgents.savings')}</div>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-red-50 border-2 border-red-200 rounded-2xl p-8">
              <div className="text-center">
                <AlertCircle className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-red-800 mb-4">
                  {t('compare.kustomerAlternative.costBarrier.problem.title')}
                </h3>
                <p className="text-red-700 max-w-2xl mx-auto">
                  {t('compare.kustomerAlternative.costBarrier.problem.description')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* AI Cost Comparison */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {t('compare.kustomerAlternative.aiCosts.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('compare.kustomerAlternative.aiCosts.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-blue-600 mb-6">{t('compare.kustomerAlternative.aiCosts.seasalt.title')}</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800">{t('compare.kustomerAlternative.aiCosts.seasalt.voiceAi.title')}</h4>
                    <p className="text-blue-700 text-sm">{t('compare.kustomerAlternative.aiCosts.seasalt.voiceAi.description')}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800">{t('compare.kustomerAlternative.aiCosts.seasalt.chatAi.title')}</h4>
                    <p className="text-blue-700 text-sm">{t('compare.kustomerAlternative.aiCosts.seasalt.chatAi.description')}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800">{t('compare.kustomerAlternative.aiCosts.seasalt.smartRouting.title')}</h4>
                    <p className="text-blue-700 text-sm">{t('compare.kustomerAlternative.aiCosts.seasalt.smartRouting.description')}</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border-2 border-green-200">
                    <h4 className="font-semibold text-green-800">{t('compare.kustomerAlternative.aiCosts.seasalt.totalCost.title')}</h4>
                    <p className="text-green-700 font-bold">{t('compare.kustomerAlternative.aiCosts.seasalt.totalCost.amount')}</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-600 mb-6">{t('compare.kustomerAlternative.aiCosts.kustomer.title')}</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800">{t('compare.kustomerAlternative.aiCosts.kustomer.perUser.title')}</h4>
                    <p className="text-gray-700 text-sm">{t('compare.kustomerAlternative.aiCosts.kustomer.perUser.description')}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800">{t('compare.kustomerAlternative.aiCosts.kustomer.perConversation.title')}</h4>
                    <p className="text-gray-700 text-sm">{t('compare.kustomerAlternative.aiCosts.kustomer.perConversation.description')}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800">{t('compare.kustomerAlternative.aiCosts.kustomer.example.title')}</h4>
                    <p className="text-gray-700 text-sm">{t('compare.kustomerAlternative.aiCosts.kustomer.example.calculation')}</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg border-2 border-red-200">
                    <h4 className="font-semibold text-red-800">{t('compare.kustomerAlternative.aiCosts.kustomer.totalCost.title')}</h4>
                    <p className="text-red-700 font-bold">{t('compare.kustomerAlternative.aiCosts.kustomer.totalCost.amount')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {t('compare.kustomerAlternative.features.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('compare.kustomerAlternative.features.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-green-600 mb-6">{t('compare.kustomerAlternative.features.shared.title')}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.kustomerAlternative.features.shared.unifiedInbox')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.kustomerAlternative.features.shared.conversationHistory')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.kustomerAlternative.features.shared.teamCollaboration')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.kustomerAlternative.features.shared.analytics')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.kustomerAlternative.features.shared.crmIntegrations')}</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-blue-600 mb-6">{t('compare.kustomerAlternative.features.advantages.title')}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.kustomerAlternative.features.advantages.noMinimum')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.kustomerAlternative.features.advantages.aiIncluded')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.kustomerAlternative.features.advantages.nativeVoice')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.kustomerAlternative.features.advantages.selfService')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.kustomerAlternative.features.advantages.smeFocused')}</span>
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
              {t('compare.kustomerAlternative.cta.title')}
            </h2>
            <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
              {t('compare.kustomerAlternative.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                 href="https://seax.seasalt.ai/signup"
                 className="bg-white text-green-600 hover:bg-gray-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
               >
                 {t('compare.kustomerAlternative.cta.signUp')}
              </a>
              <a
                href={getMeetingUrl(i18n.language)} className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
              >
                {t('compare.kustomerAlternative.cta.bookDemo')}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default KustomerAlternative;
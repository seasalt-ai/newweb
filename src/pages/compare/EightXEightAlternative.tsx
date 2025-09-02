import { ArrowLeft, Check, X, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEOHelmet from '../../components/SEOHelmet';
import { useNormalizedLanguage } from '../../hooks/useNormalizedLanguage';
import { MEETING_URL, getMeetingUrl } from '../../constants/urls';
import { getSEOData, getCanonicalUrl } from '../../utils/seo';

const EightXEightAlternative = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = useNormalizedLanguage();
  
  // Generate SEO data using standardized utility
  const seoData = getSEOData(t, 'compare.eightXEightAlternative.seo', {
    canonicalUrl: getCanonicalUrl(i18n.language, '/compare/8x8-alternative')
  });
  
  const comparisonFeatures = [
    {
      feature: t('compare.eightXEightAlternative.comparison.features.targetCustomer.name'),
      seasalt: t('compare.eightXEightAlternative.comparison.features.targetCustomer.seasalt'),
      competitor: t('compare.eightXEightAlternative.comparison.features.targetCustomer.eightXEight'),
      seasaltAdvantage: true
    },
    {
      feature: t('compare.eightXEightAlternative.comparison.features.pricingModel.name'),
      seasalt: t('compare.eightXEightAlternative.comparison.features.pricingModel.seasalt'),
      competitor: t('compare.eightXEightAlternative.comparison.features.pricingModel.eightXEight'),
      seasaltAdvantage: true
    },
    {
      feature: t('compare.eightXEightAlternative.comparison.features.startingPrice.name'),
      seasalt: t('compare.eightXEightAlternative.comparison.features.startingPrice.seasalt'),
      competitor: t('compare.eightXEightAlternative.comparison.features.startingPrice.eightXEight'),
      seasaltAdvantage: true
    },
    {
      feature: t('compare.eightXEightAlternative.comparison.features.omnichannelRouting.name'),
      seasalt: t('compare.eightXEightAlternative.comparison.features.omnichannelRouting.seasalt'),
      competitor: t('compare.eightXEightAlternative.comparison.features.omnichannelRouting.eightXEight'),
      seasaltAdvantage: false
    },
    {
      feature: t('compare.eightXEightAlternative.comparison.features.workforceManagement.name'),
      seasalt: t('compare.eightXEightAlternative.comparison.features.workforceManagement.seasalt'),
      competitor: t('compare.eightXEightAlternative.comparison.features.workforceManagement.eightXEight'),
      seasaltAdvantage: false
    },
    {
      feature: t('compare.eightXEightAlternative.comparison.features.easeOfSetup.name'),
      seasalt: t('compare.eightXEightAlternative.comparison.features.easeOfSetup.seasalt'),
      competitor: t('compare.eightXEightAlternative.comparison.features.easeOfSetup.eightXEight'),
      seasaltAdvantage: true
    },
    {
      feature: t('compare.eightXEightAlternative.comparison.features.bestFor.name'),
      seasalt: t('compare.eightXEightAlternative.comparison.features.bestFor.seasalt'),
      competitor: t('compare.eightXEightAlternative.comparison.features.bestFor.eightXEight'),
      seasaltAdvantage: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHelmet {...seoData} />
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to={`/${currentLanguage}/compare-us-overview`} className="inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-200 mb-8">
              <ArrowLeft className="h-5 w-5 mr-2" />
              {t('compare.eightXEightAlternative.nav.backLink')}
            </Link>
            
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                {t('compare.eightXEightAlternative.hero.title')}{' '}
                <span className="bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                  {t('compare.eightXEightAlternative.hero.highlight')}
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                {t('compare.eightXEightAlternative.hero.description')}
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Comparison */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {t('compare.eightXEightAlternative.comparison.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('compare.eightXEightAlternative.comparison.subtitle')}
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">{t('compare.eightXEightAlternative.comparison.table.headers.feature')}</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-blue-600">{t('compare.eightXEightAlternative.comparison.table.headers.seasalt')}</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">{t('compare.eightXEightAlternative.comparison.table.headers.eightXEight')}</th>
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

        {/* Pricing Transparency */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {t('compare.eightXEightAlternative.pricingTransparency.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('compare.eightXEightAlternative.pricingTransparency.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-blue-600 mb-6">{t('compare.eightXEightAlternative.pricingTransparency.seasalt.title')}</h3>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800">{t('compare.eightXEightAlternative.pricingTransparency.seasalt.pricing.title')}</h4>
                    <p className="text-green-700 text-sm">{t('compare.eightXEightAlternative.pricingTransparency.seasalt.pricing.description')}</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800">{t('compare.eightXEightAlternative.pricingTransparency.seasalt.selfService.title')}</h4>
                    <p className="text-blue-700 text-sm">{t('compare.eightXEightAlternative.pricingTransparency.seasalt.selfService.description')}</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-800">{t('compare.eightXEightAlternative.pricingTransparency.seasalt.noMinimums.title')}</h4>
                    <p className="text-purple-700 text-sm">{t('compare.eightXEightAlternative.pricingTransparency.seasalt.noMinimums.description')}</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-800">{t('compare.eightXEightAlternative.pricingTransparency.seasalt.predictableCosts.title')}</h4>
                    <p className="text-orange-700 text-sm">{t('compare.eightXEightAlternative.pricingTransparency.seasalt.predictableCosts.description')}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-600 mb-6">{t('compare.eightXEightAlternative.pricingTransparency.eightXEight.title')}</h3>
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800">{t('compare.eightXEightAlternative.pricingTransparency.eightXEight.hiddenPricing.title')}</h4>
                    <p className="text-red-700 text-sm">{t('compare.eightXEightAlternative.pricingTransparency.eightXEight.hiddenPricing.description')}</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800">{t('compare.eightXEightAlternative.pricingTransparency.eightXEight.salesProcess.title')}</h4>
                    <p className="text-red-700 text-sm">{t('compare.eightXEightAlternative.pricingTransparency.eightXEight.salesProcess.description')}</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800">{t('compare.eightXEightAlternative.pricingTransparency.eightXEight.enterpriseFocus.title')}</h4>
                    <p className="text-red-700 text-sm">{t('compare.eightXEightAlternative.pricingTransparency.eightXEight.enterpriseFocus.description')}</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800">{t('compare.eightXEightAlternative.pricingTransparency.eightXEight.complexContracts.title')}</h4>
                    <p className="text-red-700 text-sm">{t('compare.eightXEightAlternative.pricingTransparency.eightXEight.complexContracts.description')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-8">
              <div className="text-center">
                <AlertCircle className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-yellow-800 mb-4">
                  {t('compare.eightXEightAlternative.pricingTransparency.quoteBasedProblem.title')}
                </h3>
                <p className="text-yellow-700 max-w-2xl mx-auto">
                  {t('compare.eightXEightAlternative.pricingTransparency.quoteBasedProblem.description')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {t('compare.eightXEightAlternative.featureComparison.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('compare.eightXEightAlternative.featureComparison.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-blue-600 mb-6">{t('compare.eightXEightAlternative.featureComparison.seasalt.title')}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.eightXEightAlternative.featureComparison.seasalt.features.essentialOmnichannel')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.eightXEightAlternative.featureComparison.seasalt.features.aiAutomation')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.eightXEightAlternative.featureComparison.seasalt.features.simpleSetup')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.eightXEightAlternative.featureComparison.seasalt.features.intuitiveUI')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.eightXEightAlternative.featureComparison.seasalt.features.affordableScaling')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.eightXEightAlternative.featureComparison.seasalt.features.fastTimeToValue')}</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-600 mb-6">{t('compare.eightXEightAlternative.featureComparison.eightXEight.title')}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.eightXEightAlternative.featureComparison.eightXEight.features.advancedWorkforce')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.eightXEightAlternative.featureComparison.eightXEight.features.comprehensiveAnalytics')}</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-yellow-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.eightXEightAlternative.featureComparison.eightXEight.features.complexImplementation')}</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-yellow-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.eightXEightAlternative.featureComparison.eightXEight.features.steepLearning')}</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-yellow-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.eightXEightAlternative.featureComparison.eightXEight.features.highTotalCost')}</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-yellow-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.eightXEightAlternative.featureComparison.eightXEight.features.longDeployment')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Business Impact */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {t('compare.eightXEightAlternative.businessImpact.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('compare.eightXEightAlternative.businessImpact.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('compare.eightXEightAlternative.businessImpact.timeToDeploy.title')}</h3>
                <div className="space-y-3">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{t('compare.eightXEightAlternative.businessImpact.timeToDeploy.seasalt.value')}</div>
                    <div className="text-sm text-green-700">{t('compare.eightXEightAlternative.businessImpact.timeToDeploy.seasalt.label')}</div>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <div className="text-2xl font-bold text-red-600">{t('compare.eightXEightAlternative.businessImpact.timeToDeploy.eightXEight.value')}</div>
                    <div className="text-sm text-red-700">{t('compare.eightXEightAlternative.businessImpact.timeToDeploy.eightXEight.label')}</div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('compare.eightXEightAlternative.businessImpact.learningCurve.title')}</h3>
                <div className="space-y-3">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{t('compare.eightXEightAlternative.businessImpact.learningCurve.seasalt.value')}</div>
                    <div className="text-sm text-green-700">{t('compare.eightXEightAlternative.businessImpact.learningCurve.seasalt.label')}</div>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <div className="text-2xl font-bold text-red-600">{t('compare.eightXEightAlternative.businessImpact.learningCurve.eightXEight.value')}</div>
                    <div className="text-sm text-red-700">{t('compare.eightXEightAlternative.businessImpact.learningCurve.eightXEight.label')}</div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('compare.eightXEightAlternative.businessImpact.totalCost.title')}</h3>
                <div className="space-y-3">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{t('compare.eightXEightAlternative.businessImpact.totalCost.seasalt.value')}</div>
                    <div className="text-sm text-green-700">{t('compare.eightXEightAlternative.businessImpact.totalCost.seasalt.label')}</div>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <div className="text-2xl font-bold text-red-600">{t('compare.eightXEightAlternative.businessImpact.totalCost.eightXEight.value')}</div>
                    <div className="text-sm text-red-700">{t('compare.eightXEightAlternative.businessImpact.totalCost.eightXEight.label')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-gray-700 to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              {t('compare.eightXEightAlternative.cta.title')}
            </h2>
            <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
              {t('compare.eightXEightAlternative.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                 href="https://seax.seasalt.ai/signup"
                 className="bg-white text-gray-800 hover:bg-gray-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
               >
                 {t('compare.eightXEightAlternative.cta.buttons.signUp')}
              </a>
              <a
                href={getMeetingUrl(i18n.language)} className="border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
              >
                {t('compare.eightXEightAlternative.cta.buttons.bookDemo')}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EightXEightAlternative;
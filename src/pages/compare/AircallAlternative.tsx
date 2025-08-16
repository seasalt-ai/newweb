import { ArrowLeft, Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEOHelmet from '../../components/SEOHelmet';
import { SUPPORTED_LANGUAGES } from '../../constants/languages';
import { MEETING_URL, getMeetingUrl } from '../../constants/urls';

const AircallAlternative = () => {
  const { t, i18n } = useTranslation();
  
  const comparisonFeatures = [
    {
      feature: t('compare.aircallAlternative.comparison.features.pricingModel.name'),
      seasalt: t('compare.aircallAlternative.comparison.features.pricingModel.seasalt'),
      competitor: t('compare.aircallAlternative.comparison.features.pricingModel.competitor'),
      seasaltAdvantage: true
    },
    {
      feature: t('compare.aircallAlternative.comparison.features.userMinimum.name'),
      seasalt: t('compare.aircallAlternative.comparison.features.userMinimum.seasalt'),
      competitor: t('compare.aircallAlternative.comparison.features.userMinimum.competitor'),
      seasaltAdvantage: true
    },
    {
      feature: t('compare.aircallAlternative.comparison.features.unifiedComm.name'),
      seasalt: t('compare.aircallAlternative.comparison.features.unifiedComm.seasalt'),
      competitor: t('compare.aircallAlternative.comparison.features.unifiedComm.competitor'),
      seasaltAdvantage: true
    },
    {
      feature: t('compare.aircallAlternative.comparison.features.aiVoiceAgent.name'),
      seasalt: t('compare.aircallAlternative.comparison.features.aiVoiceAgent.seasalt'),
      competitor: t('compare.aircallAlternative.comparison.features.aiVoiceAgent.competitor'),
      seasaltAdvantage: true
    },
    {
      feature: t('compare.aircallAlternative.comparison.features.aiCallSummaries.name'),
      seasalt: t('compare.aircallAlternative.comparison.features.aiCallSummaries.seasalt'),
      competitor: t('compare.aircallAlternative.comparison.features.aiCallSummaries.competitor'),
      seasaltAdvantage: true
    },
    {
      feature: t('compare.aircallAlternative.comparison.features.advancedAnalytics.name'),
      seasalt: t('compare.aircallAlternative.comparison.features.advancedAnalytics.seasalt'),
      competitor: t('compare.aircallAlternative.comparison.features.advancedAnalytics.competitor'),
      seasaltAdvantage: true
    },
    {
      feature: t('compare.aircallAlternative.comparison.features.callQuality.name'),
      seasalt: t('compare.aircallAlternative.comparison.features.callQuality.seasalt'),
      competitor: t('compare.aircallAlternative.comparison.features.callQuality.competitor'),
      seasaltAdvantage: true
    },
    {
      feature: t('compare.aircallAlternative.comparison.features.bestFor.name'),
      seasalt: t('compare.aircallAlternative.comparison.features.bestFor.seasalt'),
      competitor: t('compare.aircallAlternative.comparison.features.bestFor.competitor'),
      seasaltAdvantage: false
    }
  ];
  
  const currentUrl = `https://www.seasalt.ai/${i18n.language}/compare/aircall-alternative`;

  return (
    <div className="min-h-screen bg-white">
      <SEOHelmet
        title={t('compare.aircallAlternative.seo.title')}
        description={t('compare.aircallAlternative.seo.description')}
        canonicalUrl={currentUrl}
        availableLanguages={SUPPORTED_LANGUAGES}
        favicon="/favicon.ico"
      />
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to={`/${i18n.language}/compare-us-overview`} className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200 mb-8">
              <ArrowLeft className="h-5 w-5 mr-2" />
              {t('compare.aircallAlternative.nav.backToOverview')}
            </Link>
            
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                {t('compare.aircallAlternative.hero.title.part1')}{' '}
                <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                  {t('compare.aircallAlternative.hero.title.part2')}
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                {t('compare.aircallAlternative.hero.subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Comparison */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {t('compare.aircallAlternative.comparison.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('compare.aircallAlternative.comparison.subtitle')}
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">{t('compare.aircallAlternative.comparison.table.headers.feature')}</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-blue-600">{t('compare.aircallAlternative.comparison.table.headers.seasalt')}</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">{t('compare.aircallAlternative.comparison.table.headers.aircall')}</th>
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

        {/* Cost Breakdown */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {t('compare.aircallAlternative.costComparison.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('compare.aircallAlternative.costComparison.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-red-50 p-8 rounded-xl border-2 border-red-200">
                <h3 className="text-2xl font-bold text-red-800 mb-6 text-center">{t('compare.aircallAlternative.costComparison.aircall.title')}</h3>
                <div className="space-y-3 text-red-700">
                  <div className="flex justify-between">
                    <span>{t('compare.aircallAlternative.costComparison.aircall.basePlan')}</span>
                    <span className="font-semibold">{t('compare.aircallAlternative.costComparison.aircall.basePlanCost')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('compare.aircallAlternative.costComparison.aircall.aiVoiceAddon')}</span>
                    <span className="font-semibold">{t('compare.aircallAlternative.costComparison.aircall.aiVoiceAddonCost')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('compare.aircallAlternative.costComparison.aircall.whatsappIntegration')}</span>
                    <span className="font-semibold">{t('compare.aircallAlternative.costComparison.aircall.whatsappIntegrationCost')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('compare.aircallAlternative.costComparison.aircall.advancedAnalytics')}</span>
                    <span className="font-semibold">{t('compare.aircallAlternative.costComparison.aircall.advancedAnalyticsCost')}</span>
                  </div>
                  <div className="border-t border-red-300 pt-3 mt-3">
                    <div className="flex justify-between text-xl font-bold text-red-800">
                      <span>{t('compare.aircallAlternative.costComparison.aircall.totalPerUser')}</span>
                      <span>{t('compare.aircallAlternative.costComparison.aircall.totalPerUserCost')}</span>
                    </div>
                    <p className="text-sm text-red-600 mt-2">{t('compare.aircallAlternative.costComparison.aircall.minimumNote')}</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-8 rounded-xl border-2 border-green-200">
                <h3 className="text-2xl font-bold text-green-800 mb-6 text-center">{t('compare.aircallAlternative.costComparison.seasalt.title')}</h3>
                <div className="space-y-3 text-green-700">
                  <div className="flex justify-between">
                    <span>{t('compare.aircallAlternative.costComparison.seasalt.admin')}</span>
                    <span className="font-semibold">{t('compare.aircallAlternative.costComparison.seasalt.adminCost')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('compare.aircallAlternative.costComparison.seasalt.additionalAgents')}</span>
                    <span className="font-semibold">{t('compare.aircallAlternative.costComparison.seasalt.additionalAgentsCost')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('compare.aircallAlternative.costComparison.seasalt.aiVoiceIncluded')}</span>
                    <span className="font-semibold">{t('compare.aircallAlternative.costComparison.seasalt.aiVoiceIncludedCost')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('compare.aircallAlternative.costComparison.seasalt.allChannelsIncluded')}</span>
                    <span className="font-semibold">{t('compare.aircallAlternative.costComparison.seasalt.allChannelsIncludedCost')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('compare.aircallAlternative.costComparison.seasalt.analyticsIncluded')}</span>
                    <span className="font-semibold">{t('compare.aircallAlternative.costComparison.seasalt.analyticsIncludedCost')}</span>
                  </div>
                  <div className="border-t border-green-300 pt-3 mt-3">
                    <div className="flex justify-between text-xl font-bold text-green-800">
                      <span>{t('compare.aircallAlternative.costComparison.seasalt.total')}</span>
                      <span>{t('compare.aircallAlternative.costComparison.seasalt.totalCost')}</span>
                    </div>
                    <p className="text-sm text-green-600 mt-2">{t('compare.aircallAlternative.costComparison.seasalt.savings')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              {t('compare.aircallAlternative.cta.title')}
            </h2>
            <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
              {t('compare.aircallAlternative.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                 href="https://seax.seasalt.ai/signup"
                 className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
               >
                 {t('compare.aircallAlternative.cta.signUp')}
              </a>
              <a
                href={getMeetingUrl(i18n.language)} className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
              >
                {t('compare.aircallAlternative.cta.bookDemo')}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AircallAlternative;
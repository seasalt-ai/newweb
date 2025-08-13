import { ArrowLeft, Check, X, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEOHelmet from '../../components/SEOHelmet';

const ThreeCXAlternative = () => {
  const { t, i18n } = useTranslation();
  const comparisonFeatures = [
    {
      feature: t('compare.threeCXAlternative.comparison.features.platformType.name'),
      seasalt: t('compare.threeCXAlternative.comparison.features.platformType.seasalt'),
      competitor: t('compare.threeCXAlternative.comparison.features.platformType.threeCX'),
      seasaltAdvantage: true
    },
    {
      feature: t('compare.threeCXAlternative.comparison.features.pricingModel.name'),
      seasalt: t('compare.threeCXAlternative.comparison.features.pricingModel.seasalt'),
      competitor: t('compare.threeCXAlternative.comparison.features.pricingModel.threeCX'),
      seasaltAdvantage: true
    },
    {
      feature: t('compare.threeCXAlternative.comparison.features.managementOverhead.name'),
      seasalt: t('compare.threeCXAlternative.comparison.features.managementOverhead.seasalt'),
      competitor: t('compare.threeCXAlternative.comparison.features.managementOverhead.threeCX'),
      seasaltAdvantage: true
    },
    {
      feature: t('compare.threeCXAlternative.comparison.features.omnichannelInbox.name'),
      seasalt: t('compare.threeCXAlternative.comparison.features.omnichannelInbox.seasalt'),
      competitor: t('compare.threeCXAlternative.comparison.features.omnichannelInbox.threeCX'),
      seasaltAdvantage: true
    },
    {
      feature: t('compare.threeCXAlternative.comparison.features.aiCapabilities.name'),
      seasalt: t('compare.threeCXAlternative.comparison.features.aiCapabilities.seasalt'),
      competitor: t('compare.threeCXAlternative.comparison.features.aiCapabilities.threeCX'),
      seasaltAdvantage: true
    },
    {
      feature: t('compare.threeCXAlternative.comparison.features.bestFor.name'),
      seasalt: t('compare.threeCXAlternative.comparison.features.bestFor.seasalt'),
      competitor: t('compare.threeCXAlternative.comparison.features.bestFor.threeCX'),
      seasaltAdvantage: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHelmet 
        title={t('compare.threeCXAlternative.seo.title')}
        description={t('compare.threeCXAlternative.seo.description')}
        favicon="/favicon.ico"
        canonicalUrl={`https://seasalt.ai/${i18n.language}/compare/3cx-alternative`}
        availableLanguages={['en', 'zh-TW']}
      />
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-50 via-white to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to={`/${i18n.language}/compare-us-overview`} className="inline-flex items-center text-gray-600 hover:text-indigo-600 transition-colors duration-200 mb-8">
              <ArrowLeft className="h-5 w-5 mr-2" />
              {t('compare.threeCXAlternative.nav.backLink')}
            </Link>
            
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                {t('compare.threeCXAlternative.hero.title')}{' '}
                <span className="bg-gradient-to-r from-indigo-600 to-indigo-700 bg-clip-text text-transparent">
                  {t('compare.threeCXAlternative.hero.highlight')}
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                {t('compare.threeCXAlternative.hero.description')}
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Comparison */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {t('compare.threeCXAlternative.comparison.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('compare.threeCXAlternative.comparison.subtitle')}
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">{t('compare.threeCXAlternative.comparison.table.headers.feature')}</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-blue-600">{t('compare.threeCXAlternative.comparison.table.headers.seasalt')}</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">{t('compare.threeCXAlternative.comparison.table.headers.threeCX')}</th>
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

        {/* Hidden Costs Analysis */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {t('compare.threeCXAlternative.hiddenCosts.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('compare.threeCXAlternative.hiddenCosts.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-indigo-600 mb-6">{t('compare.threeCXAlternative.hiddenCosts.seasalt.title')}</h3>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800">${t('compare.threeCXAlternative.hiddenCosts.seasalt.pricing')}</h4>
                    <p className="text-green-700 text-sm">{t('compare.threeCXAlternative.hiddenCosts.seasalt.pricingDescription')}</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800">{t('compare.threeCXAlternative.hiddenCosts.seasalt.cloudHosting.title')}</h4>
                    <p className="text-blue-700 text-sm">{t('compare.threeCXAlternative.hiddenCosts.seasalt.cloudHosting.description')}</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-800">{t('compare.threeCXAlternative.hiddenCosts.seasalt.support.title')}</h4>
                    <p className="text-purple-700 text-sm">{t('compare.threeCXAlternative.hiddenCosts.seasalt.support.description')}</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-800">{t('compare.threeCXAlternative.hiddenCosts.seasalt.updates.title')}</h4>
                    <p className="text-orange-700 text-sm">{t('compare.threeCXAlternative.hiddenCosts.seasalt.updates.description')}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800">{t('compare.threeCXAlternative.hiddenCosts.seasalt.ssl.title')}</h4>
                    <p className="text-gray-700 text-sm">{t('compare.threeCXAlternative.hiddenCosts.seasalt.ssl.description')}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-600 mb-6">{t('compare.threeCXAlternative.hiddenCosts.threeCX.title')}</h3>
                <div className="space-y-4">
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-800">{t('compare.threeCXAlternative.hiddenCosts.threeCX.baseLicense.price')}</h4>
                    <p className="text-yellow-700 text-sm">{t('compare.threeCXAlternative.hiddenCosts.threeCX.baseLicense.description')}</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800">{t('compare.threeCXAlternative.hiddenCosts.threeCX.hostingCosts.title')}</h4>
                    <p className="text-red-700 text-sm">{t('compare.threeCXAlternative.hiddenCosts.threeCX.hostingCosts.description')}</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800">{t('compare.threeCXAlternative.hiddenCosts.threeCX.supportTickets.title')}</h4>
                    <p className="text-red-700 text-sm">{t('compare.threeCXAlternative.hiddenCosts.threeCX.supportTickets.description')}</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800">{t('compare.threeCXAlternative.hiddenCosts.threeCX.itManagement.title')}</h4>
                    <p className="text-red-700 text-sm">{t('compare.threeCXAlternative.hiddenCosts.threeCX.itManagement.description')}</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800">{t('compare.threeCXAlternative.hiddenCosts.threeCX.sslCerts.title')}</h4>
                    <p className="text-red-700 text-sm">{t('compare.threeCXAlternative.hiddenCosts.threeCX.sslCerts.description')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-red-50 border-2 border-red-200 rounded-2xl p-8">
              <div className="text-center">
                <AlertCircle className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-red-800 mb-4">
                  {t('compare.threeCXAlternative.hiddenCosts.realCost.title')}
                </h3>
                <p className="text-red-700 max-w-2xl mx-auto mb-6">
                  {t('compare.threeCXAlternative.hiddenCosts.realCost.description')}
                </p>
                <div className="bg-white p-4 rounded-lg inline-block">
                  <p className="text-red-800 font-semibold">
                    {t('compare.threeCXAlternative.hiddenCosts.realCost.calculation')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Complexity */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {t('compare.threeCXAlternative.technicalComplexity.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('compare.threeCXAlternative.technicalComplexity.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-red-600 mb-6">{t('compare.threeCXAlternative.technicalComplexity.youManage.title')}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.threeCXAlternative.technicalComplexity.youManage.items.serverProvisioning')}</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.threeCXAlternative.technicalComplexity.youManage.items.osUpdates')}</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.threeCXAlternative.technicalComplexity.youManage.items.sslInstallation')}</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.threeCXAlternative.technicalComplexity.youManage.items.firewallConfig')}</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.threeCXAlternative.technicalComplexity.youManage.items.backupRecovery')}</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.threeCXAlternative.technicalComplexity.youManage.items.troubleshooting')}</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.threeCXAlternative.technicalComplexity.youManage.items.capacityPlanning')}</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-green-600 mb-6">{t('compare.threeCXAlternative.technicalComplexity.seasaltHandles.title')}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.threeCXAlternative.technicalComplexity.seasaltHandles.items.infrastructureManagement')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.threeCXAlternative.technicalComplexity.seasaltHandles.items.automaticUpdates')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.threeCXAlternative.technicalComplexity.seasaltHandles.items.sslManagement')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.threeCXAlternative.technicalComplexity.seasaltHandles.items.enterpriseSecurity')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.threeCXAlternative.technicalComplexity.seasaltHandles.items.automatedBackups')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.threeCXAlternative.technicalComplexity.seasaltHandles.items.monitoringSupport')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.threeCXAlternative.technicalComplexity.seasaltHandles.items.automaticScaling')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-indigo-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              {t('compare.threeCXAlternative.cta.title')}
            </h2>
            <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
              {t('compare.threeCXAlternative.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                 href="https://seax.seasalt.ai/signup"
                 className="bg-white text-indigo-600 hover:bg-gray-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
               >
                 {t('compare.threeCXAlternative.cta.buttons.signUp')}
              </a>
              <a
                href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/" className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
              >
                {t('compare.threeCXAlternative.cta.buttons.bookDemo')}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ThreeCXAlternative;
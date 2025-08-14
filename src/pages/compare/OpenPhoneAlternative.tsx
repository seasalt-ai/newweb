import { ArrowLeft, Check, X, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEOHelmet from '../../components/SEOHelmet';
import { useNormalizedLanguage } from '../../hooks/useNormalizedLanguage';

const OpenPhoneAlternative = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = useNormalizedLanguage();
  
  const comparisonFeatures = [
    {
      feature: t('compare.openPhoneAlternative.comparison.features.platformType.name'),
      seasalt: t('compare.openPhoneAlternative.comparison.features.platformType.seasalt'),
      competitor: t('compare.openPhoneAlternative.comparison.features.platformType.openPhone'),
      seasaltAdvantage: true
    },
    {
      feature: t('compare.openPhoneAlternative.comparison.features.supportedChannels.name'),
      seasalt: t('compare.openPhoneAlternative.comparison.features.supportedChannels.seasalt'),
      competitor: t('compare.openPhoneAlternative.comparison.features.supportedChannels.openPhone'),
      seasaltAdvantage: true
    },
    {
      feature: t('compare.openPhoneAlternative.comparison.features.unifiedInbox.name'),
      seasalt: t('compare.openPhoneAlternative.comparison.features.unifiedInbox.seasalt'),
      competitor: t('compare.openPhoneAlternative.comparison.features.unifiedInbox.openPhone'),
      seasaltAdvantage: true
    },
    {
      feature: t('compare.openPhoneAlternative.comparison.features.aiFeatures.name'),
      seasalt: t('compare.openPhoneAlternative.comparison.features.aiFeatures.seasalt'),
      competitor: t('compare.openPhoneAlternative.comparison.features.aiFeatures.openPhone'),
      seasaltAdvantage: true
    },
    {
      feature: t('compare.openPhoneAlternative.comparison.features.advancedRouting.name'),
      seasalt: t('compare.openPhoneAlternative.comparison.features.advancedRouting.seasalt'),
      competitor: t('compare.openPhoneAlternative.comparison.features.advancedRouting.openPhone'),
      seasaltAdvantage: true
    },
    {
      feature: t('compare.openPhoneAlternative.comparison.features.crmIntegrations.name'),
      seasalt: t('compare.openPhoneAlternative.comparison.features.crmIntegrations.seasalt'),
      competitor: t('compare.openPhoneAlternative.comparison.features.crmIntegrations.openPhone'),
      seasaltAdvantage: true
    },
    {
      feature: t('compare.openPhoneAlternative.comparison.features.bestFor.name'),
      seasalt: t('compare.openPhoneAlternative.comparison.features.bestFor.seasalt'),
      competitor: t('compare.openPhoneAlternative.comparison.features.bestFor.openPhone'),
      seasaltAdvantage: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHelmet 
        title={t('compare.openPhoneAlternative.seo.title')}
        description={t('compare.openPhoneAlternative.seo.description')}
        canonicalUrl={`https://seasalt.ai/${currentLanguage}/compare/openphone-alternative`}
        hreflang={[
          { lang: 'en', url: 'https://seasalt.ai/en/compare/openphone-alternative' },
          { lang: 'zh-TW', url: 'https://seasalt.ai/zh-TW/compare/openphone-alternative' }
        ]}
      />
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 via-white to-green-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to={`/${currentLanguage}/compare-us-overview`} className="inline-flex items-center text-gray-600 hover:text-green-600 transition-colors duration-200 mb-8">
              <ArrowLeft className="h-5 w-5 mr-2" />
              {t('compare.openPhoneAlternative.nav.backLink')}
            </Link>
            
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                {t('compare.openPhoneAlternative.hero.title')}{' '}
                <span className="bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
                  {t('compare.openPhoneAlternative.hero.highlight')}
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                {t('compare.openPhoneAlternative.hero.description')}
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Comparison */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {t('compare.openPhoneAlternative.comparison.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('compare.openPhoneAlternative.comparison.subtitle')}
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">{t('compare.openPhoneAlternative.comparison.table.headers.feature')}</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-blue-600">{t('compare.openPhoneAlternative.comparison.table.headers.seasalt')}</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">{t('compare.openPhoneAlternative.comparison.table.headers.openPhone')}</th>
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
                            {item.seasaltAdvantage && <AlertCircle className="h-5 w-5 text-yellow-500 mr-2" />}
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
                {t('compare.openPhoneAlternative.growthLimitations.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('compare.openPhoneAlternative.growthLimitations.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="bg-yellow-100 p-3 rounded-lg mb-4">
                  <AlertCircle className="h-8 w-8 text-yellow-600 mx-auto" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{t('compare.openPhoneAlternative.growthLimitations.customerChat.title')}</h3>
                <p className="text-gray-600 text-sm">
                  {t('compare.openPhoneAlternative.growthLimitations.customerChat.description')}
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="bg-yellow-100 p-3 rounded-lg mb-4">
                  <AlertCircle className="h-8 w-8 text-yellow-600 mx-auto" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{t('compare.openPhoneAlternative.growthLimitations.automation.title')}</h3>
                <p className="text-gray-600 text-sm">
                  {t('compare.openPhoneAlternative.growthLimitations.automation.description')}
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="bg-yellow-100 p-3 rounded-lg mb-4">
                  <AlertCircle className="h-8 w-8 text-yellow-600 mx-auto" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{t('compare.openPhoneAlternative.growthLimitations.complexRouting.title')}</h3>
                <p className="text-gray-600 text-sm">
                  {t('compare.openPhoneAlternative.growthLimitations.complexRouting.description')}
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="bg-yellow-100 p-3 rounded-lg mb-4">
                  <AlertCircle className="h-8 w-8 text-yellow-600 mx-auto" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{t('compare.openPhoneAlternative.growthLimitations.marketingCampaigns.title')}</h3>
                <p className="text-gray-600 text-sm">
                  {t('compare.openPhoneAlternative.growthLimitations.marketingCampaigns.description')}
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="bg-yellow-100 p-3 rounded-lg mb-4">
                  <AlertCircle className="h-8 w-8 text-yellow-600 mx-auto" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{t('compare.openPhoneAlternative.growthLimitations.unifiedCustomerView.title')}</h3>
                <p className="text-gray-600 text-sm">
                  {t('compare.openPhoneAlternative.growthLimitations.unifiedCustomerView.description')}
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="bg-yellow-100 p-3 rounded-lg mb-4">
                  <AlertCircle className="h-8 w-8 text-yellow-600 mx-auto" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{t('compare.openPhoneAlternative.growthLimitations.advancedAnalytics.title')}</h3>
                <p className="text-gray-600 text-sm">
                  {t('compare.openPhoneAlternative.growthLimitations.advancedAnalytics.description')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Expansion */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {t('compare.openPhoneAlternative.featureExpansion.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('compare.openPhoneAlternative.featureExpansion.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-green-600 mb-6">{t('compare.openPhoneAlternative.featureExpansion.keepWorks.title')}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.openPhoneAlternative.featureExpansion.keepWorks.sharedNumber')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.openPhoneAlternative.featureExpansion.keepWorks.teamSMS')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.openPhoneAlternative.featureExpansion.keepWorks.simpleInterface')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.openPhoneAlternative.featureExpansion.keepWorks.mobileApp')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.openPhoneAlternative.featureExpansion.keepWorks.affordablePricing')}</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-blue-600 mb-6">{t('compare.openPhoneAlternative.featureExpansion.addCapabilities.title')}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.openPhoneAlternative.featureExpansion.addCapabilities.whatsapp')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.openPhoneAlternative.featureExpansion.addCapabilities.webchat')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.openPhoneAlternative.featureExpansion.addCapabilities.socialMedia')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.openPhoneAlternative.featureExpansion.addCapabilities.aiVoicebots')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.openPhoneAlternative.featureExpansion.addCapabilities.analytics')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Comparison */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {t('compare.openPhoneAlternative.pricingComparison.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('compare.openPhoneAlternative.pricingComparison.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{t('compare.openPhoneAlternative.pricingComparison.openPhoneStarter.title')}</h3>
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-gray-900">{t('compare.openPhoneAlternative.pricingComparison.openPhoneStarter.price')}</div>
                  <div className="text-sm text-gray-600">{t('compare.openPhoneAlternative.pricingComparison.openPhoneStarter.period')}</div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-sm text-gray-700">{t('compare.openPhoneAlternative.pricingComparison.openPhoneStarter.voiceOnly')}</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                    <span className="text-sm text-gray-700">{t('compare.openPhoneAlternative.pricingComparison.openPhoneStarter.noAI')}</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                    <span className="text-sm text-gray-700">{t('compare.openPhoneAlternative.pricingComparison.openPhoneStarter.noChannels')}</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-yellow-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{t('compare.openPhoneAlternative.pricingComparison.openPhoneAddons.title')}</h3>
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-yellow-600">{t('compare.openPhoneAlternative.pricingComparison.openPhoneAddons.price')}</div>
                  <div className="text-sm text-gray-600">{t('compare.openPhoneAlternative.pricingComparison.openPhoneAddons.period')}</div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-sm text-gray-700">{t('compare.openPhoneAlternative.pricingComparison.openPhoneAddons.businessPlan')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-sm text-gray-700">{t('compare.openPhoneAlternative.pricingComparison.openPhoneAddons.aiFeatures')}</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                    <span className="text-sm text-gray-700">{t('compare.openPhoneAlternative.pricingComparison.openPhoneAddons.stillLimited')}</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{t('compare.openPhoneAlternative.pricingComparison.seasalt.title')}</h3>
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-blue-600">{t('compare.openPhoneAlternative.pricingComparison.seasalt.price')}</div>
                  <div className="text-sm text-gray-600">{t('compare.openPhoneAlternative.pricingComparison.seasalt.period')}</div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-sm text-gray-700">{t('compare.openPhoneAlternative.pricingComparison.seasalt.allChannels')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-sm text-gray-700">{t('compare.openPhoneAlternative.pricingComparison.seasalt.aiIncluded')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-sm text-gray-700">{t('compare.openPhoneAlternative.pricingComparison.seasalt.completePlatform')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Migration Path */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {t('compare.openPhoneAlternative.migrationPath.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('compare.openPhoneAlternative.migrationPath.subtitle')}
              </p>
            </div>

            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8">
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
                  <h3 className="font-semibold text-green-800 mb-2">{t('compare.openPhoneAlternative.migrationPath.keepNumber.title')}</h3>
                  <p className="text-green-700 text-sm">{t('compare.openPhoneAlternative.migrationPath.keepNumber.description')}</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
                  <h3 className="font-semibold text-green-800 mb-2">{t('compare.openPhoneAlternative.migrationPath.addChannels.title')}</h3>
                  <p className="text-green-700 text-sm">{t('compare.openPhoneAlternative.migrationPath.addChannels.description')}</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
                  <h3 className="font-semibold text-green-800 mb-2">{t('compare.openPhoneAlternative.migrationPath.enableAI.title')}</h3>
                  <p className="text-green-700 text-sm">{t('compare.openPhoneAlternative.migrationPath.enableAI.description')}</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
                  <h3 className="font-semibold text-green-800 mb-2">{t('compare.openPhoneAlternative.migrationPath.trainTeam.title')}</h3>
                  <p className="text-green-700 text-sm">{t('compare.openPhoneAlternative.migrationPath.trainTeam.description')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              {t('compare.openPhoneAlternative.cta.title')}
            </h2>
            <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
              {t('compare.openPhoneAlternative.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                 href="https://seax.seasalt.ai/signup"
                 className="bg-white text-green-600 hover:bg-gray-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
               >
                 {t('compare.openPhoneAlternative.cta.buttons.signUp')}
              </a>
              <a
                href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
                className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
              >
                {t('compare.openPhoneAlternative.cta.buttons.bookDemo')}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default OpenPhoneAlternative;
import { ArrowLeft, Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEOHelmet from '../../components/SEOHelmet';
import { MEETING_URL, getMeetingUrl } from '../../constants/urls';
import { getSEOData, getCanonicalUrl } from '../../utils/seo';

const DialpadAlternative = () => {
  const { t, i18n } = useTranslation();
  
  // Generate SEO data using standardized utility
  const seoData = getSEOData(t, 'compare.dialpadAlternative.seo', {
    canonicalUrl: getCanonicalUrl(i18n.language, '/compare/dialpad-alternative')
  });
  
  const comparisonFeatures = [
    {
      feature: t('compare.dialpadAlternative.comparison.features.platformArchitecture.name'),
      seasalt: t('compare.dialpadAlternative.comparison.features.platformArchitecture.seasalt'),
      competitor: t('compare.dialpadAlternative.comparison.features.platformArchitecture.dialpad'),
      seasaltAdvantage: true
    },
    {
      feature: t('compare.dialpadAlternative.comparison.features.startingPrice.name'),
      seasalt: t('compare.dialpadAlternative.comparison.features.startingPrice.seasalt'),
      competitor: t('compare.dialpadAlternative.comparison.features.startingPrice.dialpad'),
      seasaltAdvantage: false
    },
    {
      feature: t('compare.dialpadAlternative.comparison.features.contactCenterPrice.name'),
      seasalt: t('compare.dialpadAlternative.comparison.features.contactCenterPrice.seasalt'),
      competitor: t('compare.dialpadAlternative.comparison.features.contactCenterPrice.dialpad'),
      seasaltAdvantage: true
    },
    {
      feature: t('compare.dialpadAlternative.comparison.features.unifiedVoiceDigital.name'),
      seasalt: t('compare.dialpadAlternative.comparison.features.unifiedVoiceDigital.seasalt'),
      competitor: t('compare.dialpadAlternative.comparison.features.unifiedVoiceDigital.dialpad'),
      seasaltAdvantage: true
    },
    {
      feature: t('compare.dialpadAlternative.comparison.features.voiceAI.name'),
      seasalt: t('compare.dialpadAlternative.comparison.features.voiceAI.seasalt'),
      competitor: t('compare.dialpadAlternative.comparison.features.voiceAI.dialpad'),
      seasaltAdvantage: false
    },
    {
      feature: t('compare.dialpadAlternative.comparison.features.globalSMS.name'),
      seasalt: t('compare.dialpadAlternative.comparison.features.globalSMS.seasalt'),
      competitor: t('compare.dialpadAlternative.comparison.features.globalSMS.dialpad'),
      seasaltAdvantage: true
    },
    {
      feature: t('compare.dialpadAlternative.comparison.features.bestFor.name'),
      seasalt: t('compare.dialpadAlternative.comparison.features.bestFor.seasalt'),
      competitor: t('compare.dialpadAlternative.comparison.features.bestFor.dialpad'),
      seasaltAdvantage: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHelmet {...seoData} />
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to={`/${i18n.language}/compare-us-overview`} className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200 mb-8">
              <ArrowLeft className="h-5 w-5 mr-2" />
              {t('compare.dialpadAlternative.nav.backLink')}
            </Link>
            
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                {t('compare.dialpadAlternative.hero.title')}{' '}
                <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                  {t('compare.dialpadAlternative.hero.highlight')}
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                {t('compare.dialpadAlternative.hero.description')}
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Comparison */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {t('compare.dialpadAlternative.comparison.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('compare.dialpadAlternative.comparison.subtitle')}
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">{t('compare.dialpadAlternative.comparison.table.headers.feature')}</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-blue-600">{t('compare.dialpadAlternative.comparison.table.headers.seasalt')}</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">{t('compare.dialpadAlternative.comparison.table.headers.dialpad')}</th>
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

        {/* Pricing Tiers Comparison */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {t('compare.dialpadAlternative.pricingTiers.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('compare.dialpadAlternative.pricingTiers.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{t('compare.dialpadAlternative.pricingTiers.dialpadStandard.title')}</h3>
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-gray-900">{t('compare.dialpadAlternative.pricingTiers.dialpadStandard.price')}</div>
                  <div className="text-sm text-gray-600">{t('compare.dialpadAlternative.pricingTiers.dialpadStandard.period')}</div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-sm text-gray-700">{t('compare.dialpadAlternative.pricingTiers.dialpadStandard.features.basicCalling')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-sm text-gray-700">{t('compare.dialpadAlternative.pricingTiers.dialpadStandard.features.voiceIntelligence')}</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                    <span className="text-sm text-gray-700">{t('compare.dialpadAlternative.pricingTiers.dialpadStandard.features.noOmnichannel')}</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                    <span className="text-sm text-gray-700">{t('compare.dialpadAlternative.pricingTiers.dialpadStandard.features.noContactCenter')}</span>
                  </li>
                </ul>
                <div className="text-center">
                  <span className="text-sm text-gray-600">{t('compare.dialpadAlternative.pricingTiers.dialpadStandard.goodFor')}</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-red-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{t('compare.dialpadAlternative.pricingTiers.dialpadSupport.title')}</h3>
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-red-600">{t('compare.dialpadAlternative.pricingTiers.dialpadSupport.price')}</div>
                  <div className="text-sm text-gray-600">{t('compare.dialpadAlternative.pricingTiers.dialpadSupport.period')}</div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-sm text-gray-700">{t('compare.dialpadAlternative.pricingTiers.dialpadSupport.features.contactCenterFeatures')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-sm text-gray-700">{t('compare.dialpadAlternative.pricingTiers.dialpadSupport.features.omnichannelRouting')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-sm text-gray-700">{t('compare.dialpadAlternative.pricingTiers.dialpadSupport.features.advancedAnalytics')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-sm text-gray-700">{t('compare.dialpadAlternative.pricingTiers.dialpadSupport.features.digitalChannels')}</span>
                  </li>
                </ul>
                <div className="text-center">
                  <span className="text-sm text-red-600">{t('compare.dialpadAlternative.pricingTiers.dialpadSupport.requiredFor')}</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{t('compare.dialpadAlternative.pricingTiers.seasalt.title')}</h3>
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-blue-600">{t('compare.dialpadAlternative.pricingTiers.seasalt.price')}</div>
                  <div className="text-sm text-gray-600">{t('compare.dialpadAlternative.pricingTiers.seasalt.period')}</div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-sm text-gray-700">{t('compare.dialpadAlternative.pricingTiers.seasalt.features.fullContactCenter')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-sm text-gray-700">{t('compare.dialpadAlternative.pricingTiers.seasalt.features.allChannelsIncluded')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-sm text-gray-700">{t('compare.dialpadAlternative.pricingTiers.seasalt.features.aiVoiceChat')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-sm text-gray-700">{t('compare.dialpadAlternative.pricingTiers.seasalt.features.noUpgradeRequired')}</span>
                  </li>
                </ul>
                <div className="text-center">
                  <span className="text-sm text-blue-600">{t('compare.dialpadAlternative.pricingTiers.seasalt.perfectFor')}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cost Analysis */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {t('compare.dialpadAlternative.costAnalysis.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('compare.dialpadAlternative.costAnalysis.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{t('compare.dialpadAlternative.costAnalysis.agents5.title')}</h3>
                <div className="space-y-3">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="text-xl font-bold text-blue-600">{t('compare.dialpadAlternative.costAnalysis.agents5.seasalt.price')}</div>
                    <div className="text-sm text-blue-700">{t('compare.dialpadAlternative.costAnalysis.agents5.seasalt.label')}</div>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-xl font-bold text-green-600">{t('compare.dialpadAlternative.costAnalysis.agents5.dialpadBasic.price')}</div>
                    <div className="text-sm text-green-700">{t('compare.dialpadAlternative.costAnalysis.agents5.dialpadBasic.label')}</div>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <div className="text-xl font-bold text-red-600">{t('compare.dialpadAlternative.costAnalysis.agents5.dialpadCC.price')}</div>
                    <div className="text-sm text-red-700">{t('compare.dialpadAlternative.costAnalysis.agents5.dialpadCC.label')}</div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{t('compare.dialpadAlternative.costAnalysis.agents10.title')}</h3>
                <div className="space-y-3">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="text-xl font-bold text-blue-600">{t('compare.dialpadAlternative.costAnalysis.agents10.seasalt.price')}</div>
                    <div className="text-sm text-blue-700">{t('compare.dialpadAlternative.costAnalysis.agents10.seasalt.label')}</div>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-xl font-bold text-green-600">{t('compare.dialpadAlternative.costAnalysis.agents10.dialpadBasic.price')}</div>
                    <div className="text-sm text-green-700">{t('compare.dialpadAlternative.costAnalysis.agents10.dialpadBasic.label')}</div>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <div className="text-xl font-bold text-red-600">{t('compare.dialpadAlternative.costAnalysis.agents10.dialpadCC.price')}</div>
                    <div className="text-sm text-red-700">{t('compare.dialpadAlternative.costAnalysis.agents10.dialpadCC.label')}</div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{t('compare.dialpadAlternative.costAnalysis.agents20.title')}</h3>
                <div className="space-y-3">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="text-xl font-bold text-blue-600">{t('compare.dialpadAlternative.costAnalysis.agents20.seasalt.price')}</div>
                    <div className="text-sm text-blue-700">{t('compare.dialpadAlternative.costAnalysis.agents20.seasalt.label')}</div>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-xl font-bold text-green-600">{t('compare.dialpadAlternative.costAnalysis.agents20.dialpadBasic.price')}</div>
                    <div className="text-sm text-green-700">{t('compare.dialpadAlternative.costAnalysis.agents20.dialpadBasic.label')}</div>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <div className="text-xl font-bold text-red-600">{t('compare.dialpadAlternative.costAnalysis.agents20.dialpadCC.price')}</div>
                    <div className="text-sm text-red-700">{t('compare.dialpadAlternative.costAnalysis.agents20.dialpadCC.label')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Voice AI Comparison */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {t('compare.dialpadAlternative.voiceAI.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('compare.dialpadAlternative.voiceAI.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-blue-600 mb-6">{t('compare.dialpadAlternative.voiceAI.seasalt.title')}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.dialpadAlternative.voiceAI.seasalt.features.voicebotHandling')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.dialpadAlternative.voiceAI.seasalt.features.realtimeTranscription')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.dialpadAlternative.voiceAI.seasalt.features.aiChatbots')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.dialpadAlternative.voiceAI.seasalt.features.unifiedAI')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.dialpadAlternative.voiceAI.seasalt.features.includedPricing')}</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-600 mb-6">{t('compare.dialpadAlternative.voiceAI.dialpad.title')}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.dialpadAlternative.voiceAI.dialpad.features.excellentTranscription')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.dialpadAlternative.voiceAI.dialpad.features.aiSummaries')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.dialpadAlternative.voiceAI.dialpad.features.sentimentAnalysis')}</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.dialpadAlternative.voiceAI.dialpad.features.limitedVoiceOnly')}</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.dialpadAlternative.voiceAI.dialpad.features.noAutomatedHandling')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              {t('compare.dialpadAlternative.cta.title')}
            </h2>
            <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
              {t('compare.dialpadAlternative.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                 href="https://seax.seasalt.ai/signup"
                 className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
               >
                 {t('compare.dialpadAlternative.cta.buttons.signUp')}
              </a>
              <a
                href={getMeetingUrl(i18n.language)} className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
              >
                {t('compare.dialpadAlternative.cta.buttons.bookDemo')}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DialpadAlternative;

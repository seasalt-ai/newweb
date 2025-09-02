import { ArrowLeft, Check, X, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEOHelmet from '../../components/SEOHelmet';
import { MEETING_URL, getMeetingUrl } from '../../constants/urls';
import { getSEOData, getCanonicalUrl } from '../../utils/seo';

const IntercomAlternative = () => {
  const { t, i18n } = useTranslation();
  
  // Generate SEO data using standardized utility
  const seoData = getSEOData(t, 'compare.intercomAlternative.seo', {
    canonicalUrl: getCanonicalUrl(i18n.language, '/compare/intercom-alternative')
  });
  
  const comparisonFeatures = [
    {
      feature: t('compare.intercomAlternative.comparison.features.pricingModel.name'),
      seasalt: t('compare.intercomAlternative.comparison.features.pricingModel.seasalt'),
      competitor: t('compare.intercomAlternative.comparison.features.pricingModel.competitor'),
      seasaltAdvantage: true
    },
    {
      feature: t('compare.intercomAlternative.comparison.features.startingPrice.name'),
      seasalt: t('compare.intercomAlternative.comparison.features.startingPrice.seasalt'),
      competitor: t('compare.intercomAlternative.comparison.features.startingPrice.competitor'),
      seasaltAdvantage: true
    },
    {
      feature: t('compare.intercomAlternative.comparison.features.aiAgentCost.name'),
      seasalt: t('compare.intercomAlternative.comparison.features.aiAgentCost.seasalt'),
      competitor: t('compare.intercomAlternative.comparison.features.aiAgentCost.competitor'),
      seasaltAdvantage: true
    },
    {
      feature: t('compare.intercomAlternative.comparison.features.voiceCalling.name'),
      seasalt: t('compare.intercomAlternative.comparison.features.voiceCalling.seasalt'),
      competitor: t('compare.intercomAlternative.comparison.features.voiceCalling.competitor'),
      seasaltAdvantage: true
    },
    {
      feature: t('compare.intercomAlternative.comparison.features.coreFocus.name'),
      seasalt: t('compare.intercomAlternative.comparison.features.coreFocus.seasalt'),
      competitor: t('compare.intercomAlternative.comparison.features.coreFocus.competitor'),
      seasaltAdvantage: false
    },
    {
      feature: t('compare.intercomAlternative.comparison.features.bestFor.name'),
      seasalt: t('compare.intercomAlternative.comparison.features.bestFor.seasalt'),
      competitor: t('compare.intercomAlternative.comparison.features.bestFor.competitor'),
      seasaltAdvantage: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHelmet {...seoData} />
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-50 via-white to-purple-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to={`/${i18n.language}/compare-us-overview`} className="inline-flex items-center text-gray-600 hover:text-purple-600 transition-colors duration-200 mb-8">
              <ArrowLeft className="h-5 w-5 mr-2" />
              {t('compare.intercomAlternative.navigation.backText')}
            </Link>
            
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                {t('compare.intercomAlternative.hero.title.prefix')}{' '}
                <span className="bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
                  {t('compare.intercomAlternative.hero.title.highlight')}
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                {t('compare.intercomAlternative.hero.subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Comparison */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {t('compare.intercomAlternative.comparison.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('compare.intercomAlternative.comparison.subtitle')}
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">{t('compare.intercomAlternative.comparison.table.feature')}</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-blue-600">{t('compare.intercomAlternative.comparison.table.seasalt')}</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">{t('compare.intercomAlternative.comparison.table.competitor')}</th>
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

        {/* Pricing Complexity */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {t('compare.intercomAlternative.pricing.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('compare.intercomAlternative.pricing.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-blue-600 mb-6">{t('compare.intercomAlternative.pricing.seasalt.title')}</h3>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800">{t('compare.intercomAlternative.pricing.seasalt.perAgent.title')}</h4>
                    <p className="text-green-700 text-sm">{t('compare.intercomAlternative.pricing.seasalt.perAgent.description')}</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800">{t('compare.intercomAlternative.pricing.seasalt.aiIncluded.title')}</h4>
                    <p className="text-blue-700 text-sm">{t('compare.intercomAlternative.pricing.seasalt.aiIncluded.description')}</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-800">{t('compare.intercomAlternative.pricing.seasalt.allChannels.title')}</h4>
                    <p className="text-purple-700 text-sm">{t('compare.intercomAlternative.pricing.seasalt.allChannels.description')}</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-800">{t('compare.intercomAlternative.pricing.seasalt.predictable.title')}</h4>
                    <p className="text-orange-700 text-sm">{t('compare.intercomAlternative.pricing.seasalt.predictable.description')}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-600 mb-6">{t('compare.intercomAlternative.pricing.intercom.title')}</h3>
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800">{t('compare.intercomAlternative.pricing.intercom.basePrice.title')}</h4>
                    <p className="text-red-700 text-sm">{t('compare.intercomAlternative.pricing.intercom.basePrice.description')}</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800">{t('compare.intercomAlternative.pricing.intercom.aiResolution.title')}</h4>
                    <p className="text-red-700 text-sm">{t('compare.intercomAlternative.pricing.intercom.aiResolution.description')}</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800">{t('compare.intercomAlternative.pricing.intercom.payPerUse.title')}</h4>
                    <p className="text-red-700 text-sm">{t('compare.intercomAlternative.pricing.intercom.payPerUse.description')}</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800">{t('compare.intercomAlternative.pricing.intercom.unpredictable.title')}</h4>
                    <p className="text-red-700 text-sm">{t('compare.intercomAlternative.pricing.intercom.unpredictable.description')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cost Scenario Analysis */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {t('compare.intercomAlternative.scenarios.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('compare.intercomAlternative.scenarios.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">{t('compare.intercomAlternative.scenarios.light.title')}</h3>
                <div className="space-y-3">
                  <div className="text-center">
                    <div className="text-sm text-gray-600 mb-2">{t('compare.intercomAlternative.scenarios.light.description')}</div>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-lg font-bold text-green-600 text-center">{t('compare.intercomAlternative.scenarios.light.seasalt.price')}</div>
                    <div className="text-sm text-green-700 text-center">{t('compare.intercomAlternative.scenarios.light.seasalt.label')}</div>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <div className="text-lg font-bold text-red-600 text-center">{t('compare.intercomAlternative.scenarios.light.intercom.price')}</div>
                    <div className="text-sm text-red-700 text-center">{t('compare.intercomAlternative.scenarios.light.intercom.label')}</div>
                    <div className="text-xs text-red-600 text-center mt-1">{t('compare.intercomAlternative.scenarios.light.intercom.breakdown')}</div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">{t('compare.intercomAlternative.scenarios.medium.title')}</h3>
                <div className="space-y-3">
                  <div className="text-center">
                    <div className="text-sm text-gray-600 mb-2">{t('compare.intercomAlternative.scenarios.medium.description')}</div>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-lg font-bold text-green-600 text-center">{t('compare.intercomAlternative.scenarios.medium.seasalt.price')}</div>
                    <div className="text-sm text-green-700 text-center">{t('compare.intercomAlternative.scenarios.medium.seasalt.label')}</div>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <div className="text-lg font-bold text-red-600 text-center">{t('compare.intercomAlternative.scenarios.medium.intercom.price')}</div>
                    <div className="text-sm text-red-700 text-center">{t('compare.intercomAlternative.scenarios.medium.intercom.label')}</div>
                    <div className="text-xs text-red-600 text-center mt-1">{t('compare.intercomAlternative.scenarios.medium.intercom.breakdown')}</div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">{t('compare.intercomAlternative.scenarios.heavy.title')}</h3>
                <div className="space-y-3">
                  <div className="text-center">
                    <div className="text-sm text-gray-600 mb-2">{t('compare.intercomAlternative.scenarios.heavy.description')}</div>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-lg font-bold text-green-600 text-center">{t('compare.intercomAlternative.scenarios.heavy.seasalt.price')}</div>
                    <div className="text-sm text-green-700 text-center">{t('compare.intercomAlternative.scenarios.heavy.seasalt.label')}</div>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <div className="text-lg font-bold text-red-600 text-center">{t('compare.intercomAlternative.scenarios.heavy.intercom.price')}</div>
                    <div className="text-sm text-red-700 text-center">{t('compare.intercomAlternative.scenarios.heavy.intercom.label')}</div>
                    <div className="text-xs text-red-600 text-center mt-1">{t('compare.intercomAlternative.scenarios.heavy.intercom.breakdown')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Channel Coverage */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {t('compare.intercomAlternative.channels.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('compare.intercomAlternative.channels.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-blue-600 mb-6">{t('compare.intercomAlternative.channels.seasalt.title')}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.intercomAlternative.channels.seasalt.voice')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.intercomAlternative.channels.seasalt.whatsapp')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.intercomAlternative.channels.seasalt.sms')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.intercomAlternative.channels.seasalt.social')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.intercomAlternative.channels.seasalt.website')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.intercomAlternative.channels.seasalt.unified')}</span>
                  </li>
                </ul>
              </div>

              <div className="bg-purple-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-purple-600 mb-6">{t('compare.intercomAlternative.channels.intercom.title')}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.intercomAlternative.channels.intercom.websiteChat')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.intercomAlternative.channels.intercom.proactive')}</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-yellow-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.intercomAlternative.channels.intercom.voiceAddon')}</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-yellow-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.intercomAlternative.channels.intercom.smsLimited')}</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.intercomAlternative.channels.intercom.noWhatsapp')}</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.intercomAlternative.channels.intercom.noSocial')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              {t('compare.intercomAlternative.cta.title')}
            </h2>
            <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
              {t('compare.intercomAlternative.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                 href="https://seax.seasalt.ai/signup"
                 className="bg-white text-purple-600 hover:bg-gray-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
               >
                 {t('compare.intercomAlternative.cta.signUp')}
              </a>
              <a
                href={getMeetingUrl(i18n.language)} className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
              >
                {t('compare.intercomAlternative.cta.bookDemo')}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default IntercomAlternative;
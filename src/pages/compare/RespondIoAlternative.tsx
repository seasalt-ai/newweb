import { ArrowLeft, Check, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEOHelmet from '../../components/SEOHelmet';
import { MEETING_URL, getMeetingUrl } from '../../constants/urls';
import { getSEOData, getCanonicalUrl } from '../../utils/seo';

const RespondIoAlternative = () => {
  const { t, i18n } = useTranslation();
  
  // Generate SEO data using standardized utility
  const seoData = getSEOData(t, 'compare.respondIoAlternative', {
    canonicalUrl: getCanonicalUrl(i18n.language, '/compare/respond-io-alternative')
  });
  
  const comparisonFeatures = [
    {
      feature: t('compare.respondIoAlternative.comparison.features.pricingModel.name'),
      seasalt: t('compare.respondIoAlternative.comparison.features.pricingModel.seasalt'),
      competitor: t('compare.respondIoAlternative.comparison.features.pricingModel.competitor'),
      seasaltAdvantage: true
    },
    {
      feature: t('compare.respondIoAlternative.comparison.features.startingPrice.name'),
      seasalt: t('compare.respondIoAlternative.comparison.features.startingPrice.seasalt'),
      competitor: t('compare.respondIoAlternative.comparison.features.startingPrice.competitor'),
      seasaltAdvantage: true
    },
    {
      feature: t('compare.respondIoAlternative.comparison.features.voiceCalling.name'),
      seasalt: t('compare.respondIoAlternative.comparison.features.voiceCalling.seasalt'),
      competitor: t('compare.respondIoAlternative.comparison.features.voiceCalling.competitor'),
      seasaltAdvantage: true
    },
    {
      feature: t('compare.respondIoAlternative.comparison.features.whatsappFees.name'),
      seasalt: t('compare.respondIoAlternative.comparison.features.whatsappFees.seasalt'),
      competitor: t('compare.respondIoAlternative.comparison.features.whatsappFees.competitor'),
      seasaltAdvantage: true
    },
    {
      feature: t('compare.respondIoAlternative.comparison.features.aiAgent.name'),
      seasalt: t('compare.respondIoAlternative.comparison.features.aiAgent.seasalt'),
      competitor: t('compare.respondIoAlternative.comparison.features.aiAgent.competitor'),
      seasaltAdvantage: true
    },
    {
      feature: t('compare.respondIoAlternative.comparison.features.coreFocus.name'),
      seasalt: t('compare.respondIoAlternative.comparison.features.coreFocus.seasalt'),
      competitor: t('compare.respondIoAlternative.comparison.features.coreFocus.competitor'),
      seasaltAdvantage: false
    },
    {
      feature: t('compare.respondIoAlternative.comparison.features.bestFor.name'),
      seasalt: t('compare.respondIoAlternative.comparison.features.bestFor.seasalt'),
      competitor: t('compare.respondIoAlternative.comparison.features.bestFor.competitor'),
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
              {t('compare.respondIoAlternative.navigation.backLink')}
            </Link>
            
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                {t('compare.respondIoAlternative.hero.title.main')}{' '}
                <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                  {t('compare.respondIoAlternative.hero.title.highlight')}
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                {t('compare.respondIoAlternative.hero.description')}
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Comparison */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {t('compare.respondIoAlternative.comparison.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('compare.respondIoAlternative.comparison.subtitle')}
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">{t('compare.respondIoAlternative.comparison.table.headers.feature')}</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-blue-600">{t('compare.respondIoAlternative.comparison.table.headers.seasalt')}</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">{t('compare.respondIoAlternative.comparison.table.headers.competitor')}</th>
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
                {t('compare.respondIoAlternative.pricing.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('compare.respondIoAlternative.pricing.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-blue-600 mb-6">{t('compare.respondIoAlternative.pricing.seasalt.title')}</h3>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800">{t('compare.respondIoAlternative.pricing.seasalt.perAgent.title')}</h4>
                    <p className="text-green-700 text-sm">{t('compare.respondIoAlternative.pricing.seasalt.perAgent.description')}</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800">{t('compare.respondIoAlternative.pricing.seasalt.allChannels.title')}</h4>
                    <p className="text-blue-700 text-sm">{t('compare.respondIoAlternative.pricing.seasalt.allChannels.description')}</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-800">{t('compare.respondIoAlternative.pricing.seasalt.usageIncluded.title')}</h4>
                    <p className="text-purple-700 text-sm">{t('compare.respondIoAlternative.pricing.seasalt.usageIncluded.description')}</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-800">{t('compare.respondIoAlternative.pricing.seasalt.noSurprises.title')}</h4>
                    <p className="text-orange-700 text-sm">{t('compare.respondIoAlternative.pricing.seasalt.noSurprises.description')}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-600 mb-6">{t('compare.respondIoAlternative.pricing.competitor.title')}</h3>
                <div className="space-y-4">
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-800">{t('compare.respondIoAlternative.pricing.competitor.monthlyContacts.title')}</h4>
                    <p className="text-yellow-700 text-sm">{t('compare.respondIoAlternative.pricing.competitor.monthlyContacts.description')}</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800">{t('compare.respondIoAlternative.pricing.competitor.separateFees.title')}</h4>
                    <p className="text-red-700 text-sm">{t('compare.respondIoAlternative.pricing.competitor.separateFees.description')}</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800">{t('compare.respondIoAlternative.pricing.competitor.voiceBeta.title')}</h4>
                    <p className="text-red-700 text-sm">{t('compare.respondIoAlternative.pricing.competitor.voiceBeta.description')}</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800">{t('compare.respondIoAlternative.pricing.competitor.unpredictableCosts.title')}</h4>
                    <p className="text-red-700 text-sm">{t('compare.respondIoAlternative.pricing.competitor.unpredictableCosts.description')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Voice Integration Comparison */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {t('compare.respondIoAlternative.voice.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('compare.respondIoAlternative.voice.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-blue-600 mb-6">{t('compare.respondIoAlternative.voice.seasalt.title')}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.respondIoAlternative.voice.seasalt.nativeVoice')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.respondIoAlternative.voice.seasalt.aiVoicebot')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.respondIoAlternative.voice.seasalt.unifiedHistory')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.respondIoAlternative.voice.seasalt.phoneFeatures')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.respondIoAlternative.voice.seasalt.productionReady')}</span>
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-yellow-600 mb-6">{t('compare.respondIoAlternative.voice.competitor.title')}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-yellow-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.respondIoAlternative.voice.competitor.betaTesting')}</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-yellow-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.respondIoAlternative.voice.competitor.limitedFeatures')}</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-yellow-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.respondIoAlternative.voice.competitor.potentialBugs')}</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-yellow-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.respondIoAlternative.voice.competitor.uncertainRoadmap')}</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-yellow-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.respondIoAlternative.voice.competitor.notRecommended')}</span>
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
              {t('compare.respondIoAlternative.cta.title')}
            </h2>
            <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
              {t('compare.respondIoAlternative.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                 href="https://seax.seasalt.ai/signup"
                 className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
               >
                 {t('compare.respondIoAlternative.cta.signUp')}
              </a>
              <a
                href={getMeetingUrl(i18n.language)} className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
              >
                {t('compare.respondIoAlternative.cta.bookDemo')}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default RespondIoAlternative;
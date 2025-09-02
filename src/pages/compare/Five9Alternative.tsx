import { ArrowLeft, Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEOHelmet from '../../components/SEOHelmet';
import { MEETING_URL, getMeetingUrl } from '../../constants/urls';
import { getSEOData, getCanonicalUrl } from '../../utils/seo';

const Five9Alternative = () => {
  const { t, i18n } = useTranslation();
  
  // Generate SEO data using standardized utility
  const seoData = getSEOData(t, 'compare.five9Alternative', {
    canonicalUrl: getCanonicalUrl(i18n.language, '/compare/five9-alternative')
  });
  
  const comparisonFeatures = [
    {
      feature: t('compare.five9Alternative.comparison.features.targetCustomer.name'),
      seasalt: t('compare.five9Alternative.comparison.features.targetCustomer.seasalt'),
      competitor: t('compare.five9Alternative.comparison.features.targetCustomer.competitor'),
      seasaltAdvantage: true
    },
    {
      feature: t('compare.five9Alternative.comparison.features.startingPrice.name'),
      seasalt: t('compare.five9Alternative.comparison.features.startingPrice.seasalt'),
      competitor: t('compare.five9Alternative.comparison.features.startingPrice.competitor'),
      seasaltAdvantage: true
    },
    {
      feature: t('compare.five9Alternative.comparison.features.pricingModel.name'),
      seasalt: t('compare.five9Alternative.comparison.features.pricingModel.seasalt'),
      competitor: t('compare.five9Alternative.comparison.features.pricingModel.competitor'),
      seasaltAdvantage: true
    },
    {
      feature: t('compare.five9Alternative.comparison.features.setupComplexity.name'),
      seasalt: t('compare.five9Alternative.comparison.features.setupComplexity.seasalt'),
      competitor: t('compare.five9Alternative.comparison.features.setupComplexity.competitor'),
      seasaltAdvantage: true
    },
    {
      feature: t('compare.five9Alternative.comparison.features.outboundFocus.name'),
      seasalt: t('compare.five9Alternative.comparison.features.outboundFocus.seasalt'),
      competitor: t('compare.five9Alternative.comparison.features.outboundFocus.competitor'),
      seasaltAdvantage: false
    },
    {
      feature: t('compare.five9Alternative.comparison.features.bestFor.name'),
      seasalt: t('compare.five9Alternative.comparison.features.bestFor.seasalt'),
      competitor: t('compare.five9Alternative.comparison.features.bestFor.competitor'),
      seasaltAdvantage: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHelmet {...seoData} />
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-orange-50 via-white to-orange-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to={`/${i18n.language}/compare-us-overview`} className="inline-flex items-center text-gray-600 hover:text-orange-600 transition-colors duration-200 mb-8">
              <ArrowLeft className="h-5 w-5 mr-2" />
              {t('compare.five9Alternative.navigation.backLink')}
            </Link>
            
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                {t('compare.five9Alternative.hero.title.part1')}{' '}
                <span className="bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">
                  {t('compare.five9Alternative.hero.title.part2')}
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                {t('compare.five9Alternative.hero.subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Comparison */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {t('compare.five9Alternative.comparison.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('compare.five9Alternative.comparison.subtitle')}
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">{t('compare.five9Alternative.comparison.table.headers.feature')}</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-blue-600">{t('compare.five9Alternative.comparison.table.headers.seasalt')}</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">{t('compare.five9Alternative.comparison.table.headers.five9')}</th>
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

        {/* Cost Analysis */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {t('compare.five9Alternative.cost.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('compare.five9Alternative.cost.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{t('compare.five9Alternative.cost.agents5.title')}</h3>
                <div className="space-y-3">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-xl font-bold text-green-600">{t('compare.five9Alternative.cost.agents5.seasalt.price')}</div>
                    <div className="text-sm text-green-700">{t('compare.five9Alternative.cost.agents5.seasalt.label')}</div>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <div className="text-xl font-bold text-red-600">{t('compare.five9Alternative.cost.agents5.five9.price')}</div>
                    <div className="text-sm text-red-700">{t('compare.five9Alternative.cost.agents5.five9.label')}</div>
                  </div>
                  <div className="text-sm text-gray-600">{t('compare.five9Alternative.cost.agents5.savings')}</div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{t('compare.five9Alternative.cost.agents10.title')}</h3>
                <div className="space-y-3">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-xl font-bold text-green-600">{t('compare.five9Alternative.cost.agents10.seasalt.price')}</div>
                    <div className="text-sm text-green-700">{t('compare.five9Alternative.cost.agents10.seasalt.label')}</div>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <div className="text-xl font-bold text-red-600">{t('compare.five9Alternative.cost.agents10.five9.price')}</div>
                    <div className="text-sm text-red-700">{t('compare.five9Alternative.cost.agents10.five9.label')}</div>
                  </div>
                  <div className="text-sm text-gray-600">{t('compare.five9Alternative.cost.agents10.savings')}</div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{t('compare.five9Alternative.cost.agents20.title')}</h3>
                <div className="space-y-3">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-xl font-bold text-green-600">{t('compare.five9Alternative.cost.agents20.seasalt.price')}</div>
                    <div className="text-sm text-green-700">{t('compare.five9Alternative.cost.agents20.seasalt.label')}</div>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <div className="text-xl font-bold text-red-600">{t('compare.five9Alternative.cost.agents20.five9.price')}</div>
                    <div className="text-sm text-red-700">{t('compare.five9Alternative.cost.agents20.five9.label')}</div>
                  </div>
                  <div className="text-sm text-gray-600">{t('compare.five9Alternative.cost.agents20.savings')}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Focus */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {t('compare.five9Alternative.features.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('compare.five9Alternative.features.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-blue-600 mb-6">{t('compare.five9Alternative.features.seasalt.title')}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.five9Alternative.features.seasalt.feature1')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.five9Alternative.features.seasalt.feature2')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.five9Alternative.features.seasalt.feature3')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.five9Alternative.features.seasalt.feature4')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">{t('compare.five9Alternative.features.seasalt.feature5')}</span>
                  </li>
                </ul>
              </div>

              <div className="bg-orange-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-orange-600 mb-6">{t('compare.five9Alternative.features.five9.title')}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-3 mt-0.5">•</span>
                    <span className="text-gray-700">{t('compare.five9Alternative.features.five9.feature1')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-3 mt-0.5">•</span>
                    <span className="text-gray-700">{t('compare.five9Alternative.features.five9.feature2')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-3 mt-0.5">•</span>
                    <span className="text-gray-700">{t('compare.five9Alternative.features.five9.feature3')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-3 mt-0.5">•</span>
                    <span className="text-gray-700">{t('compare.five9Alternative.features.five9.feature4')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-3 mt-0.5">•</span>
                    <span className="text-gray-700">{t('compare.five9Alternative.features.five9.feature5')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              {t('compare.five9Alternative.cta.title')}
            </h2>
            <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
              {t('compare.five9Alternative.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                 href="https://seax.seasalt.ai/signup"
                 className="bg-white text-orange-600 hover:bg-gray-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
               >
                 {t('compare.five9Alternative.cta.signUp')}
              </a>
              <a
                href={getMeetingUrl(i18n.language)} className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
              >
                {t('compare.five9Alternative.cta.bookDemo')}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Five9Alternative;
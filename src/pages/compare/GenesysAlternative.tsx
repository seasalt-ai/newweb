import { ArrowLeft, Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEOHelmet from '../../components/SEOHelmet';
import { MEETING_URL, getMeetingUrl } from '../../constants/urls';
import { getSEOData, getCanonicalUrl } from '../../utils/seo';

const GenesysAlternative = () => {
  const { t, i18n } = useTranslation();
  
  // Generate SEO data using standardized utility
  const seoData = getSEOData(t, 'compare.genesysAlternative', {
    canonicalUrl: getCanonicalUrl(i18n.language, '/compare/genesys-alternative')
  });
  
  const comparisonFeatures = [
    {
      feature: t('compare.genesysAlternative.features.targetCustomer.name'),
      seasalt: t('compare.genesysAlternative.features.targetCustomer.seasalt'),
      competitor: t('compare.genesysAlternative.features.targetCustomer.competitor'),
      seasaltAdvantage: true
    },
    {
      feature: t('compare.genesysAlternative.features.startingPrice.name'),
      seasalt: t('compare.genesysAlternative.features.startingPrice.seasalt'),
      competitor: t('compare.genesysAlternative.features.startingPrice.competitor'),
      seasaltAdvantage: true
    },
    {
      feature: t('compare.genesysAlternative.features.minimumCommitment.name'),
      seasalt: t('compare.genesysAlternative.features.minimumCommitment.seasalt'),
      competitor: t('compare.genesysAlternative.features.minimumCommitment.competitor'),
      seasaltAdvantage: true
    },
    {
      feature: t('compare.genesysAlternative.features.pricingComplexity.name'),
      seasalt: t('compare.genesysAlternative.features.pricingComplexity.seasalt'),
      competitor: t('compare.genesysAlternative.features.pricingComplexity.competitor'),
      seasaltAdvantage: true
    },
    {
      feature: t('compare.genesysAlternative.features.easeOfSetup.name'),
      seasalt: t('compare.genesysAlternative.features.easeOfSetup.seasalt'),
      competitor: t('compare.genesysAlternative.features.easeOfSetup.competitor'),
      seasaltAdvantage: true
    },
    {
      feature: t('compare.genesysAlternative.features.bestFor.name'),
      seasalt: t('compare.genesysAlternative.features.bestFor.seasalt'),
      competitor: t('compare.genesysAlternative.features.bestFor.competitor'),
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
              {t('compare.genesysAlternative.nav.backToOverview')}
            </Link>
            
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                {t('compare.genesysAlternative.hero.title1')}{' '}
                <span className="bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
                  {t('compare.genesysAlternative.hero.title2')}
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                {t('compare.genesysAlternative.hero.subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Comparison */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {t('compare.genesysAlternative.comparison.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('compare.genesysAlternative.comparison.subtitle')}
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">{t('compare.genesysAlternative.table.headers.feature')}</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-blue-600">{t('compare.genesysAlternative.table.headers.seasalt')}</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">{t('compare.genesysAlternative.table.headers.genesys')}</th>
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

        {/* Cost Reality Check */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {t('compare.genesysAlternative.costReality.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('compare.genesysAlternative.costReality.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-blue-600 mb-6">{t('compare.genesysAlternative.seasaltBenefits.title')}</h3>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800">{t('compare.genesysAlternative.seasaltBenefits.noMinimum.title')}</h4>
                    <p className="text-green-700 text-sm">{t('compare.genesysAlternative.seasaltBenefits.noMinimum.description')}</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800">{t('compare.genesysAlternative.seasaltBenefits.simplePricing.title')}</h4>
                    <p className="text-blue-700 text-sm">{t('compare.genesysAlternative.seasaltBenefits.simplePricing.description')}</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-800">{t('compare.genesysAlternative.seasaltBenefits.quickSetup.title')}</h4>
                    <p className="text-purple-700 text-sm">{t('compare.genesysAlternative.seasaltBenefits.quickSetup.description')}</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-800">{t('compare.genesysAlternative.seasaltBenefits.selfService.title')}</h4>
                    <p className="text-orange-700 text-sm">{t('compare.genesysAlternative.seasaltBenefits.selfService.description')}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-600 mb-6">{t('compare.genesysAlternative.genesysLimitations.title')}</h3>
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800">{t('compare.genesysAlternative.genesysLimitations.highMinimums.title')}</h4>
                    <p className="text-red-700 text-sm">{t('compare.genesysAlternative.genesysLimitations.highMinimums.description')}</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800">{t('compare.genesysAlternative.genesysLimitations.complexPricing.title')}</h4>
                    <p className="text-red-700 text-sm">{t('compare.genesysAlternative.genesysLimitations.complexPricing.description')}</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800">{t('compare.genesysAlternative.genesysLimitations.longImplementation.title')}</h4>
                    <p className="text-red-700 text-sm">{t('compare.genesysAlternative.genesysLimitations.longImplementation.description')}</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800">{t('compare.genesysAlternative.genesysLimitations.enterpriseSales.title')}</h4>
                    <p className="text-red-700 text-sm">{t('compare.genesysAlternative.genesysLimitations.enterpriseSales.description')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              {t('compare.genesysAlternative.cta.title')}
            </h2>
            <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
              {t('compare.genesysAlternative.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                 href="https://seax.seasalt.ai/signup"
                 className="bg-white text-purple-600 hover:bg-gray-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
               >
                 {t('compare.genesysAlternative.cta.signUp')}
              </a>
              <a
                href={getMeetingUrl(i18n.language)} className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
              >
                {t('compare.genesysAlternative.cta.bookDemo')}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GenesysAlternative;
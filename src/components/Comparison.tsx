import { Check, X, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Comparison = () => {
  const { i18n, t } = useTranslation();
  
  const competitors = [
    {
      name: 'Seasalt.ai',
      startingPrice: t('comparison.competitors.seasalt.startingPrice'),
      pricingModel: t('comparison.competitors.seasalt.pricingModel'),
      unifiedVoiceDigital: t('comparison.competitors.seasalt.unifiedVoiceDigital'),
      aiCapabilities: t('comparison.competitors.seasalt.aiCapabilities'),
      bestFor: t('comparison.competitors.seasalt.bestFor'),
      highlight: true,
      link: null
    },
    {
      name: 'Aircall',
      startingPrice: t('comparison.competitors.aircall.startingPrice'),
      pricingModel: t('comparison.competitors.aircall.pricingModel'),
      unifiedVoiceDigital: t('comparison.competitors.aircall.unifiedVoiceDigital'),
      aiCapabilities: t('comparison.competitors.aircall.aiCapabilities'),
      bestFor: t('comparison.competitors.aircall.bestFor'),
      highlight: false,
      link: `/${i18n.language}/compare/aircall-alternative`
    },
    {
      name: 'RingCentral',
      startingPrice: t('comparison.competitors.ringcentral.startingPrice'),
      pricingModel: t('comparison.competitors.ringcentral.pricingModel'),
      unifiedVoiceDigital: t('comparison.competitors.ringcentral.unifiedVoiceDigital'),
      aiCapabilities: t('comparison.competitors.ringcentral.aiCapabilities'),
      bestFor: t('comparison.competitors.ringcentral.bestFor'),
      highlight: false,
      link: `/${i18n.language}/compare/ringcentral-alternative`
    },
    {
      name: 'Genesys Cloud CX',
      startingPrice: t('comparison.competitors.genesys.startingPrice'),
      pricingModel: t('comparison.competitors.genesys.pricingModel'),
      unifiedVoiceDigital: t('comparison.competitors.genesys.unifiedVoiceDigital'),
      aiCapabilities: t('comparison.competitors.genesys.aiCapabilities'),
      bestFor: t('comparison.competitors.genesys.bestFor'),
      highlight: false,
      link: `/${i18n.language}/compare/genesys-alternative`
    },
    {
      name: 'Five9',
      startingPrice: t('comparison.competitors.five9.startingPrice'),
      pricingModel: t('comparison.competitors.five9.pricingModel'),
      unifiedVoiceDigital: t('comparison.competitors.five9.unifiedVoiceDigital'),
      aiCapabilities: t('comparison.competitors.five9.aiCapabilities'),
      bestFor: t('comparison.competitors.five9.bestFor'),
      highlight: false,
      link: `/${i18n.language}/compare/five9-alternative`
    },
    {
      name: 'Google Voice',
      startingPrice: t('comparison.competitors.googleVoice.startingPrice'),
      pricingModel: t('comparison.competitors.googleVoice.pricingModel'),
      unifiedVoiceDigital: t('comparison.competitors.googleVoice.unifiedVoiceDigital'),
      aiCapabilities: t('comparison.competitors.googleVoice.aiCapabilities'),
      bestFor: t('comparison.competitors.googleVoice.bestFor'),
      highlight: false,
      link: `/${i18n.language}/compare/google-voice-alternative`
    }
  ];

  const renderCapability = (capability: string) => {
    if (capability.includes('✅')) {
      return <Check className="h-5 w-5 text-green-600" />;
    } else if (capability.includes('❌')) {
      return <X className="h-5 w-5 text-red-500" />;
    } else if (capability.includes('⚠️')) {
      return <AlertCircle className="h-5 w-5 text-yellow-500" />;
    }
    return capability;
  };

  return (
    <section id="compare" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t('comparison.title')}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            {t('comparison.description')}
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead className="bg-gray-50 text-left">
                <tr>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-gray-900">{t('comparison.table.headers.platform')}</th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm font-semibold text-gray-900">{t('comparison.table.headers.startingPrice')}</th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm font-semibold text-gray-900">{t('comparison.table.headers.pricingModel')}</th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm font-semibold text-gray-900">{t('comparison.table.headers.unifiedVoiceDigital')}</th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm font-semibold text-gray-900">{t('comparison.table.headers.aiCapabilities')}</th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm font-semibold text-gray-900">{t('comparison.table.headers.bestFor')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {competitors.map((competitor, index) => (
                  <tr 
                    key={index} 
                    className={competitor.highlight ? 'bg-blue-50 border-2 border-blue-200' : 'hover:bg-gray-50'}
                  >
                    <td className="px-4 sm:px-6 py-3 sm:py-4">
                      <div className="flex items-center">
                        {competitor.link ? (
                          <Link 
                            to={competitor.link}
                            className={`text-xs sm:text-sm font-semibold hover:underline ${
                              competitor.highlight ? 'text-blue-900' : 'text-blue-600 hover:text-blue-800'
                            }`}
                          >
                            {competitor.name}
                          </Link>
                        ) : (
                          <span className={`text-xs sm:text-sm font-semibold ${competitor.highlight ? 'text-blue-900' : 'text-gray-900'}`}>
                            {competitor.name}
                          </span>
                        )}
                        {competitor.highlight && (
                          <span className="ml-2 px-1.5 sm:px-2 py-0.5 sm:py-1 bg-blue-600 text-white text-xs rounded-full">
                            {t('comparison.recommended')}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm text-gray-700">{competitor.startingPrice}</td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm text-gray-700">{competitor.pricingModel}</td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm">{renderCapability(competitor.unifiedVoiceDigital)}</td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm">{renderCapability(competitor.aiCapabilities)}</td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm text-gray-700">{competitor.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            to={`/${i18n.language}/compare-us-overview`}
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            {t('comparison.cta.seeAllComparisons')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
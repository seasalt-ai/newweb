import { Check, X, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Comparison = () => {
  const { t, i18n } = useTranslation();
  
  const competitors = [
    {
      nameKey: 'comparison.competitors.seasalt.name',
      startingPriceKey: 'comparison.competitors.seasalt.startingPrice',
      pricingModelKey: 'comparison.competitors.seasalt.pricingModel',
      unifiedVoiceDigitalKey: 'comparison.competitors.seasalt.unifiedVoiceDigital',
      aiCapabilitiesKey: 'comparison.competitors.seasalt.aiCapabilities',
      bestForKey: 'comparison.competitors.seasalt.bestFor',
      highlight: true,
      link: null
    },
    {
      nameKey: 'comparison.competitors.aircall.name',
      startingPriceKey: 'comparison.competitors.aircall.startingPrice',
      pricingModelKey: 'comparison.competitors.aircall.pricingModel',
      unifiedVoiceDigitalKey: 'comparison.competitors.aircall.unifiedVoiceDigital',
      aiCapabilitiesKey: 'comparison.competitors.aircall.aiCapabilities',
      bestForKey: 'comparison.competitors.aircall.bestFor',
      highlight: false,
      link: `/${i18n.language}/compare/aircall-alternative`
    },
    {
      nameKey: 'comparison.competitors.ringcentral.name',
      startingPriceKey: 'comparison.competitors.ringcentral.startingPrice',
      pricingModelKey: 'comparison.competitors.ringcentral.pricingModel',
      unifiedVoiceDigitalKey: 'comparison.competitors.ringcentral.unifiedVoiceDigital',
      aiCapabilitiesKey: 'comparison.competitors.ringcentral.aiCapabilities',
      bestForKey: 'comparison.competitors.ringcentral.bestFor',
      highlight: false,
      link: `/${i18n.language}/compare/ringcentral-alternative`
    },
    {
      nameKey: 'comparison.competitors.genesys.name',
      startingPriceKey: 'comparison.competitors.genesys.startingPrice',
      pricingModelKey: 'comparison.competitors.genesys.pricingModel',
      unifiedVoiceDigitalKey: 'comparison.competitors.genesys.unifiedVoiceDigital',
      aiCapabilitiesKey: 'comparison.competitors.genesys.aiCapabilities',
      bestForKey: 'comparison.competitors.genesys.bestFor',
      highlight: false,
      link: `/${i18n.language}/compare/genesys-alternative`
    },
    {
      nameKey: 'comparison.competitors.five9.name',
      startingPriceKey: 'comparison.competitors.five9.startingPrice',
      pricingModelKey: 'comparison.competitors.five9.pricingModel',
      unifiedVoiceDigitalKey: 'comparison.competitors.five9.unifiedVoiceDigital',
      aiCapabilitiesKey: 'comparison.competitors.five9.aiCapabilities',
      bestForKey: 'comparison.competitors.five9.bestFor',
      highlight: false,
      link: `/${i18n.language}/compare/five9-alternative`
    },
    {
      nameKey: 'comparison.competitors.googleVoice.name',
      startingPriceKey: 'comparison.competitors.googleVoice.startingPrice',
      pricingModelKey: 'comparison.competitors.googleVoice.pricingModel',
      unifiedVoiceDigitalKey: 'comparison.competitors.googleVoice.unifiedVoiceDigital',
      aiCapabilitiesKey: 'comparison.competitors.googleVoice.aiCapabilities',
      bestForKey: 'comparison.competitors.googleVoice.bestFor',
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
            {t('comparison.subtitle')}
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead className="bg-gray-50 text-left">
                <tr>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-gray-900">{t('comparison.headers.platform')}</th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm font-semibold text-gray-900">{t('comparison.headers.startingPrice')}</th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm font-semibold text-gray-900">{t('comparison.headers.pricingModel')}</th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm font-semibold text-gray-900">{t('comparison.headers.unifiedVoiceDigital')}</th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm font-semibold text-gray-900">{t('comparison.headers.aiCapabilities')}</th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm font-semibold text-gray-900">{t('comparison.headers.bestFor')}</th>
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
                            {t(competitor.nameKey)}
                          </Link>
                        ) : (
                          <span className={`text-xs sm:text-sm font-semibold ${competitor.highlight ? 'text-blue-900' : 'text-gray-900'}`}>
                            {t(competitor.nameKey)}
                          </span>
                        )}
                        {competitor.highlight && (
                          <span className="ml-2 px-1.5 sm:px-2 py-0.5 sm:py-1 bg-blue-600 text-white text-xs rounded-full">
                            {t('comparison.recommended')}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm text-gray-700">{t(competitor.startingPriceKey)}</td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm text-gray-700">{t(competitor.pricingModelKey)}</td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm">{renderCapability(t(competitor.unifiedVoiceDigitalKey))}</td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm">{renderCapability(t(competitor.aiCapabilitiesKey))}</td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm text-gray-700">{t(competitor.bestForKey)}</td>
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
            {t('comparison.cta.button')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
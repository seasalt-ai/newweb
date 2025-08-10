import { Check, X, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Comparison = () => {
  const { i18n } = useTranslation();
  
  const competitors = [
    {
      name: 'Seasalt.ai',
      startingPrice: '$20/agent/mo',
      pricingModel: 'Simple Per-User',
      unifiedVoiceDigital: '✅ Yes, Native',
      aiCapabilities: '✅ Yes, Native Voice & Chatbots',
      bestFor: 'SMEs needing an affordable, truly all-in-one platform.',
      highlight: true,
      link: null
    },
    {
      name: 'Aircall',
      startingPrice: '$30/user/mo',
      pricingModel: 'Per-User + Add-ons',
      unifiedVoiceDigital: '⚠️ Voice + WhatsApp (Add-on)',
      aiCapabilities: '⚠️ AI is a paid add-on',
      bestFor: 'Sales teams that can afford multiple add-ons and meet the 3-user minimum.',
      highlight: false,
      link: '/compare/aircall-alternative'
    },
    {
      name: 'RingCentral',
      startingPrice: '$65/agent/mo',
      pricingModel: 'Complex Tiers',
      unifiedVoiceDigital: '❌ Separate Products',
      aiCapabilities: '✅ Yes (AI-powered CCaaS)',
      bestFor: 'Large companies needing a broad UCaaS platform with a separate CCaaS.',
      highlight: false,
      link: '/compare/ringcentral-alternative'
    },
    {
      name: 'Genesys Cloud CX',
      startingPrice: '$75/user/mo',
      pricingModel: 'Per-User + High Minimums',
      unifiedVoiceDigital: '✅ Yes (in higher tiers)',
      aiCapabilities: '✅ Yes (Complex token system)',
      bestFor: 'Large enterprises with dedicated contact center teams and budgets.',
      highlight: false,
      link: '/compare/genesys-alternative'
    },
    {
      name: 'Five9',
      startingPrice: '$119/user/mo',
      pricingModel: 'Per-User + Bundles',
      unifiedVoiceDigital: '✅ Yes (in premium tiers)',
      aiCapabilities: '✅ Yes (Advanced AI)',
      bestFor: 'Large, outbound-heavy contact centers needing enterprise-grade tools.',
      highlight: false,
      link: '/compare/five9-alternative'
    },
    {
      name: 'Google Voice',
      startingPrice: '$10/user/mo',
      pricingModel: 'Per-User + Workspace Fee',
      unifiedVoiceDigital: '❌ No',
      aiCapabilities: '❌ No (Voicemail transcription only)',
      bestFor: 'Solopreneurs (US-only) needing a basic, separate phone number.',
      highlight: false,
      link: '/compare/google-voice-alternative'
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
            Why Growing Businesses Choose Seasalt.ai Over the Alternatives
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            See how we compare to other solutions. We're the only platform 
            that delivers enterprise features with small business simplicity.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead className="bg-gray-50 text-left">
                <tr>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-gray-900">Platform</th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm font-semibold text-gray-900">Starting Price</th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm font-semibold text-gray-900">Pricing Model</th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm font-semibold text-gray-900">Unified Voice & Digital</th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm font-semibold text-gray-900">AI Capabilities</th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm font-semibold text-gray-900">Best For</th>
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
                            Recommended
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
            See All Detailed Comparisons
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
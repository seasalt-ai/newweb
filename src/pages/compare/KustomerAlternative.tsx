import { ArrowLeft, Check, X, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const KustomerAlternative = () => {
  const { i18n } = useTranslation();
  const comparisonFeatures = [
    {
      feature: 'Pricing Model',
      seasalt: 'Simple & predictable per-agent fee',
      competitor: 'Per-Seat or Per-Conversation',
      seasaltAdvantage: true
    },
    {
      feature: 'Starting Price',
      seasalt: '$25/agent/month',
      competitor: '$89/seat/month',
      seasaltAdvantage: true
    },
    {
      feature: 'Minimum Commitment',
      seasalt: '1 User',
      competitor: '8 Seats (on per-seat plan)',
      seasaltAdvantage: true
    },
    {
      feature: 'AI Capabilities',
      seasalt: 'Included (usage-based)',
      competitor: 'Paid Add-on ($40/user/mo or $0.60/convo)',
      seasaltAdvantage: true
    },
    {
      feature: 'Omnichannel Timeline',
      seasalt: 'Yes',
      competitor: 'Yes, very strong',
      seasaltAdvantage: false
    },
    {
      feature: 'Core Focus',
      seasalt: 'Affordable, unified communications for SMEs',
      competitor: 'Enterprise-scale, data-driven customer service',
      seasaltAdvantage: false
    },
    {
      feature: 'Best For',
      seasalt: 'Growing businesses needing a powerful but affordable omnichannel solution',
      competitor: 'Large support teams that can meet the seat minimum and need deep data integration',
      seasaltAdvantage: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 via-white to-green-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to={`/${i18n.language}/compare-us-overview`} className="inline-flex items-center text-gray-600 hover:text-green-600 transition-colors duration-200 mb-8">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Compare Us Overview
            </Link>
            
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Enterprise Power for an SME Price.{' '}
                <span className="bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
                  Why Pay for 8 Seats When You Only Need 2?
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Kustomer is a powerful, true omnichannel platform that provides a unified view of the customer journey. However, its power 
                comes at an enterprise price. The per-seat plan starts at $89/month with a mandatory 8-seat minimum, making it inaccessible 
                for most SMEs. Critical AI capabilities are also expensive add-ons. Seasalt.ai delivers the core omnichannel functionality 
                and AI automation SMEs need.
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Comparison */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                SME-Accessible vs. Enterprise-Only
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See why powerful features shouldn't require enterprise minimums
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-blue-600">Seasalt.ai</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Kustomer</th>
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

        {/* Cost Barrier Analysis */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                The 8-Seat Minimum Barrier
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how Kustomer's minimum commitment prices out growing businesses
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-4">2 Agents</h3>
                <div className="space-y-3">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-xl font-bold text-green-600">$75/mo</div>
                    <div className="text-sm text-green-700">Seasalt.ai</div>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <div className="text-xl font-bold text-red-600">$712/mo</div>
                    <div className="text-sm text-red-700">Kustomer (8-seat min)</div>
                  </div>
                  <div className="text-sm text-gray-600">Save $637/month</div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-4">5 Agents</h3>
                <div className="space-y-3">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-xl font-bold text-green-600">$175/mo</div>
                    <div className="text-sm text-green-700">Seasalt.ai</div>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <div className="text-xl font-bold text-red-600">$712/mo</div>
                    <div className="text-sm text-red-700">Kustomer (8-seat min)</div>
                  </div>
                  <div className="text-sm text-gray-600">Save $537/month</div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-4">8 Agents</h3>
                <div className="space-y-3">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-xl font-bold text-green-600">$225/mo</div>
                    <div className="text-sm text-green-700">Seasalt.ai</div>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <div className="text-xl font-bold text-red-600">$712/mo</div>
                    <div className="text-sm text-red-700">Kustomer</div>
                  </div>
                  <div className="text-sm text-gray-600">Save $487/month</div>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-red-50 border-2 border-red-200 rounded-2xl p-8">
              <div className="text-center">
                <AlertCircle className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-red-800 mb-4">
                  The SME Accessibility Problem
                </h3>
                <p className="text-red-700 max-w-2xl mx-auto">
                  Kustomer's 8-seat minimum means even a 2-person team pays for 6 unused seats. 
                  This creates an artificial barrier that prevents growing businesses from accessing 
                  powerful omnichannel features until they reach enterprise scale.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* AI Cost Comparison */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                AI Included vs. Expensive Add-On
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how AI costs add up when it's treated as a premium feature
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-blue-600 mb-6">Seasalt.ai: AI Included</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800">Voice AI</h4>
                    <p className="text-blue-700 text-sm">Included in base plan</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800">Chat AI</h4>
                    <p className="text-blue-700 text-sm">Included in base plan</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800">Smart Routing</h4>
                    <p className="text-blue-700 text-sm">Included in base plan</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border-2 border-green-200">
                    <h4 className="font-semibold text-green-800">Total AI Cost</h4>
                    <p className="text-green-700 font-bold">$0 additional</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-600 mb-6">Kustomer: AI as Add-On</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800">KIQ AI (Per-User)</h4>
                    <p className="text-gray-700 text-sm">$40/user/month additional</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800">KIQ AI (Per-Conversation)</h4>
                    <p className="text-gray-700 text-sm">$0.60/conversation</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800">Example: 8 users</h4>
                    <p className="text-gray-700 text-sm">8 × $40 = $320/month extra</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg border-2 border-red-200">
                    <h4 className="font-semibold text-red-800">Total AI Cost</h4>
                    <p className="text-red-700 font-bold">$320+ additional</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                What You Get vs. What You Pay For
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Both platforms offer strong omnichannel capabilities, but at very different price points
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-green-600 mb-6">What You Get with Both</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Unified omnichannel inbox</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Customer conversation history</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Team collaboration tools</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Analytics and reporting</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">CRM integrations</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-blue-600 mb-6">Seasalt.ai Advantages</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">No minimum seat requirements</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">AI included in base price</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Native voice calling platform</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Self-service setup and management</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">SME-focused pricing and features</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Get Enterprise Features Without Enterprise Minimums
            </h2>
            <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
              Why pay for 8 seats when you only need 2? Get powerful omnichannel 
              capabilities that scale with your actual team size.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                 href="https://seax.seasalt.ai/signup"
                 className="bg-white text-green-600 hover:bg-gray-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
               >
                 Sign Up
              </a>
              <a
                href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/" className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
              >
                Book A Demo
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default KustomerAlternative;
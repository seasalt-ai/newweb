import React from 'react';
import { ArrowLeft, Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const DialpadAlternative = () => {
  const comparisonFeatures = [
    {
      feature: 'Platform Architecture',
      seasalt: 'True Unified Contact Center',
      competitor: 'Separate UCaaS and CCaaS products',
      seasaltAdvantage: true
    },
    {
      feature: 'Starting Price (UCaaS)',
      seasalt: '$25/agent/month',
      competitor: '$15/user/month',
      seasaltAdvantage: false
    },
    {
      feature: 'Contact Center Price',
      seasalt: '$25/agent/month',
      competitor: '$80+/user/month',
      seasaltAdvantage: true
    },
    {
      feature: 'Unified Voice & Digital',
      seasalt: 'Yes, natively included',
      competitor: 'No, requires expensive CCaaS plan',
      seasaltAdvantage: true
    },
    {
      feature: 'Voice AI',
      seasalt: 'Yes, Voicebots & Transcription',
      competitor: 'Yes, strong transcription & summaries',
      seasaltAdvantage: false
    },
    {
      feature: 'Global SMS',
      seasalt: 'Yes',
      competitor: 'Requires Pro plan ($25/mo+)',
      seasaltAdvantage: true
    },
    {
      feature: 'Best For',
      seasalt: 'SMEs wanting a simple, powerful, and truly unified contact center',
      competitor: 'Businesses that prioritize AI for voice calls but don\'t need a unified digital inbox',
      seasaltAdvantage: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/compare-us-overview" className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200 mb-8">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Compare Us Overview
            </Link>
            
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Don't Pay Extra for a "Contact Center."{' '}
                <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                  Get One Unified Platform from the Start
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Dialpad offers a strong UCaaS platform with excellent voice intelligence (AI transcription and summaries) at an attractive 
                entry price of $15/user/month. However, this is not their contact center solution. True contact center features, including 
                omnichannel routing and advanced analytics, require upgrading to much more expensive plans like Dialpad Support, which starts 
                at $80/user/month. Seasalt.ai is built as a unified contact center from the ground up.
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Comparison */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Unified Contact Center vs. Separate Products
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See why starting with a unified platform beats upgrading to expensive contact center tiers
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-blue-600">Seasalt.ai</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Dialpad</th>
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
                The Contact Center Upgrade Trap
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how Dialpad's attractive entry price leads to expensive upgrades for contact center features
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Dialpad Standard</h3>
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-gray-900">$15</div>
                  <div className="text-sm text-gray-600">/user/month</div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-sm text-gray-700">Basic calling</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-sm text-gray-700">Voice intelligence</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                    <span className="text-sm text-gray-700">No omnichannel</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                    <span className="text-sm text-gray-700">No contact center features</span>
                  </li>
                </ul>
                <div className="text-center">
                  <span className="text-sm text-gray-600">Good for: Basic business phone</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-red-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Dialpad Support</h3>
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-red-600">$80+</div>
                  <div className="text-sm text-gray-600">/user/month</div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-sm text-gray-700">Contact center features</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-sm text-gray-700">Omnichannel routing</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-sm text-gray-700">Advanced analytics</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-sm text-gray-700">Digital channels</span>
                  </li>
                </ul>
                <div className="text-center">
                  <span className="text-sm text-red-600">Required for: Contact center needs</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Seasalt.ai</h3>
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-blue-600">$25</div>
                  <div className="text-sm text-gray-600">/agent/month</div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-sm text-gray-700">Full contact center</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-sm text-gray-700">All channels included</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-sm text-gray-700">AI voice & chat</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-sm text-gray-700">No upgrade required</span>
                  </li>
                </ul>
                <div className="text-center">
                  <span className="text-sm text-blue-600">Perfect for: Complete solution</span>
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
                The Real Cost of Contact Center Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how Dialpad's upgrade costs compare to Seasalt.ai's unified pricing
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-4">5 Agents</h3>
                <div className="space-y-3">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="text-xl font-bold text-blue-600">$125/mo</div>
                    <div className="text-sm text-blue-700">Seasalt.ai (Complete)</div>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-xl font-bold text-green-600">$75/mo</div>
                    <div className="text-sm text-green-700">Dialpad (Basic only)</div>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <div className="text-xl font-bold text-red-600">$400/mo</div>
                    <div className="text-sm text-red-700">Dialpad (Contact Center)</div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-4">10 Agents</h3>
                <div className="space-y-3">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="text-xl font-bold text-blue-600">$275/mo</div>
                    <div className="text-sm text-blue-700">Seasalt.ai (Complete)</div>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-xl font-bold text-green-600">$150/mo</div>
                    <div className="text-sm text-green-700">Dialpad (Basic only)</div>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <div className="text-xl font-bold text-red-600">$800/mo</div>
                    <div className="text-sm text-red-700">Dialpad (Contact Center)</div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-4">20 Agents</h3>
                <div className="space-y-3">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="text-xl font-bold text-blue-600">$525/mo</div>
                    <div className="text-sm text-blue-700">Seasalt.ai (Complete)</div>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-xl font-bold text-green-600">$300/mo</div>
                    <div className="text-sm text-green-700">Dialpad (Basic only)</div>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <div className="text-xl font-bold text-red-600">$1,600/mo</div>
                    <div className="text-sm text-red-700">Dialpad (Contact Center)</div>
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
                Voice AI: Both Platforms Excel
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Both platforms offer strong voice AI capabilities, but in different contexts
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-blue-600 mb-6">Seasalt.ai: Complete AI Suite</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">AI voicebot for automated call handling</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Real-time transcription and summaries</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">AI chatbots for digital channels</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Unified AI across all channels</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Included in base pricing</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-600 mb-6">Dialpad: Voice-Focused AI</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Excellent real-time transcription</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">AI-powered call summaries</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Sentiment analysis</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">Limited to voice channel only</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">No automated call handling</span>
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
              Skip the Expensive Upgrade Path
            </h2>
            <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
              Why start with basic features and pay 3x more for contact center capabilities? 
              Get everything you need from day one at a fraction of the cost.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                 href="https://seax.seasalt.ai/signup"
                 className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
               >
                 Sign Up
              </a>
              <a
                href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
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

export default DialpadAlternative;
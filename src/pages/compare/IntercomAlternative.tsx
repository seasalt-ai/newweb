import React from 'react';
import { ArrowLeft, Check, X, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const IntercomAlternative = () => {
  const comparisonFeatures = [
    {
      feature: 'Pricing Model',
      seasalt: 'Simple & predictable per-agent fee',
      competitor: 'Per-Seat + Per-Resolution + Add-ons',
      seasaltAdvantage: true
    },
    {
      feature: 'Starting Price',
      seasalt: '$25/agent/month',
      competitor: '$29-$39/seat/month',
      seasaltAdvantage: true
    },
    {
      feature: 'AI Agent Cost',
      seasalt: 'Included (usage-based)',
      competitor: '$0.99 per resolution',
      seasaltAdvantage: true
    },
    {
      feature: 'Voice Calling',
      seasalt: 'Yes, native and fully supported',
      competitor: 'Pay-as-you-go add-on',
      seasaltAdvantage: true
    },
    {
      feature: 'Core Focus',
      seasalt: 'Unified Contact Center',
      competitor: 'Website Engagement & Support',
      seasaltAdvantage: false
    },
    {
      feature: 'Best For',
      seasalt: 'SMEs needing a complete communication hub for all channels',
      competitor: 'SaaS and web-based businesses focused on converting and supporting users on their site',
      seasaltAdvantage: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-50 via-white to-purple-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/compare-us-overview" className="inline-flex items-center text-gray-600 hover:text-purple-600 transition-colors duration-200 mb-8">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Compare Us Overview
            </Link>
            
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Beyond the Website Widget.{' '}
                <span className="bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
                  Get a Complete Customer Communication Platform
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Intercom excels at proactive website engagement with its best-in-class live chat and AI chatbot, Fin. However, its pricing model 
                is complex and expensive, with separate charges per seat, per AI resolution ($0.99 each), and for add-ons. Voice and SMS are 
                pay-as-you-go afterthoughts. Seasalt.ai is built as a true contact center, where voice is a primary channel.
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Comparison */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Complete Platform vs. Website-Focused Tool
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See why a unified contact center beats a specialized website engagement tool
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-blue-600">Seasalt.ai</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Intercom</th>
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
                Simple vs. Complex Pricing
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Why transparent pricing beats per-resolution charges and usage fees
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-blue-600 mb-6">Seasalt.ai: Transparent Pricing</h3>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800">$25/agent/month</h4>
                    <p className="text-green-700 text-sm">Everything included, no surprises</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800">AI Included</h4>
                    <p className="text-blue-700 text-sm">Voice and chatbots included in plan</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-800">All Channels</h4>
                    <p className="text-purple-700 text-sm">Voice, SMS, WhatsApp, chat - no extra fees</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-800">Predictable Costs</h4>
                    <p className="text-orange-700 text-sm">Easy to budget and forecast</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-600 mb-6">Intercom: Complex Billing</h3>
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800">$39/seat/month</h4>
                    <p className="text-red-700 text-sm">Base price before add-ons</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800">$0.99 per AI resolution</h4>
                    <p className="text-red-700 text-sm">Charges for each AI interaction</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800">Pay-per-use Voice</h4>
                    <p className="text-red-700 text-sm">Voice calling charged separately</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800">Unpredictable Bills</h4>
                    <p className="text-red-700 text-sm">Costs vary based on usage</p>
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
                Real-World Cost Scenarios
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how Intercom's per-resolution pricing can quickly add up
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">Light Usage</h3>
                <div className="space-y-3">
                  <div className="text-center">
                    <div className="text-sm text-gray-600 mb-2">3 agents, 100 AI resolutions/month</div>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-lg font-bold text-green-600 text-center">$75/mo</div>
                    <div className="text-sm text-green-700 text-center">Seasalt.ai</div>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <div className="text-lg font-bold text-red-600 text-center">$216/mo</div>
                    <div className="text-sm text-red-700 text-center">Intercom</div>
                    <div className="text-xs text-red-600 text-center mt-1">($117 base + $99 AI)</div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">Medium Usage</h3>
                <div className="space-y-3">
                  <div className="text-center">
                    <div className="text-sm text-gray-600 mb-2">5 agents, 300 AI resolutions/month</div>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-lg font-bold text-green-600 text-center">$150/mo</div>
                    <div className="text-sm text-green-700 text-center">Seasalt.ai</div>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <div className="text-lg font-bold text-red-600 text-center">$492/mo</div>
                    <div className="text-sm text-red-700 text-center">Intercom</div>
                    <div className="text-xs text-red-600 text-center mt-1">($195 base + $297 AI)</div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">Heavy Usage</h3>
                <div className="space-y-3">
                  <div className="text-center">
                    <div className="text-sm text-gray-600 mb-2">10 agents, 1000 AI resolutions/month</div>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-lg font-bold text-green-600 text-center">$275/mo</div>
                    <div className="text-sm text-green-700 text-center">Seasalt.ai</div>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <div className="text-lg font-bold text-red-600 text-center">$1,380/mo</div>
                    <div className="text-sm text-red-700 text-center">Intercom</div>
                    <div className="text-xs text-red-600 text-center mt-1">($390 base + $990 AI)</div>
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
                Complete Channel Coverage vs. Website Focus
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Why businesses need more than just website engagement
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-blue-600 mb-6">Seasalt.ai: Complete Coverage</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Native voice calling and phone system</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">WhatsApp Business integration</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">SMS marketing and support</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Social media messaging (Instagram, Facebook)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Website chat and contact forms</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Unified inbox for all channels</span>
                  </li>
                </ul>
              </div>

              <div className="bg-purple-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-purple-600 mb-6">Intercom: Website-Focused</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Excellent website chat and engagement</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Proactive messaging and targeting</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-yellow-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">Voice calling as pay-per-use add-on</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-yellow-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">Limited SMS capabilities</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">No native WhatsApp Business integration</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">No social media messaging support</span>
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
              Ready for Complete Customer Communication?
            </h2>
            <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
              Stop paying per resolution and get a complete platform that covers 
              all your customer communication needs at a predictable price.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                 href="https://seax.seasalt.ai/signup"
                 className="bg-white text-purple-600 hover:bg-gray-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
               >
                 Sign Up
              </a>
              <a
                href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
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

export default IntercomAlternative;
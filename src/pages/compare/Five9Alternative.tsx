import React from 'react';
import { ArrowLeft, Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Five9Alternative = () => {
  const comparisonFeatures = [
    {
      feature: 'Target Customer',
      seasalt: 'Small to Medium Businesses (SMEs)',
      competitor: 'Large Enterprises',
      seasaltAdvantage: true
    },
    {
      feature: 'Starting Price',
      seasalt: '$25/agent/month',
      competitor: '$119/user/month',
      seasaltAdvantage: true
    },
    {
      feature: 'Pricing Model',
      seasalt: 'Simple & Transparent',
      competitor: 'Per-User + Bundles + Complex tiers',
      seasaltAdvantage: true
    },
    {
      feature: 'Setup Complexity',
      seasalt: 'Self-service, minutes to deploy',
      competitor: 'Requires professional services and implementation team',
      seasaltAdvantage: true
    },
    {
      feature: 'Outbound Focus',
      seasalt: 'Balanced inbound/outbound with AI automation',
      competitor: 'Heavy outbound focus with advanced dialing',
      seasaltAdvantage: false
    },
    {
      feature: 'Best For',
      seasalt: 'SMEs needing affordable omnichannel with AI automation',
      competitor: 'Large, outbound-heavy contact centers with dedicated teams',
      seasaltAdvantage: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-orange-50 via-white to-orange-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/compare-us-overview" className="inline-flex items-center text-gray-600 hover:text-orange-600 transition-colors duration-200 mb-8">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Compare Us Overview
            </Link>
            
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Powerful Outbound Without the{' '}
                <span className="bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">
                  Enterprise Price Tag
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Five9 is a powerful platform designed for large, outbound-heavy contact centers with enterprise budgets starting at $119/user/month. 
                While excellent for massive call centers, it's overkill and overpriced for most growing businesses. Seasalt.ai delivers the 
                omnichannel and AI capabilities SMEs need with balanced inbound/outbound features at a fraction of the cost.
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Comparison */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Enterprise vs. SME-Focused Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See why you don't need enterprise complexity to get powerful results
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-blue-600">Seasalt.ai</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Five9</th>
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
                The Cost Reality
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how Five9's enterprise pricing compares to Seasalt.ai's SME-focused approach
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-4">5 Agents</h3>
                <div className="space-y-3">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-xl font-bold text-green-600">$175/mo</div>
                    <div className="text-sm text-green-700">Seasalt.ai</div>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <div className="text-xl font-bold text-red-600">$595/mo</div>
                    <div className="text-sm text-red-700">Five9</div>
                  </div>
                  <div className="text-sm text-gray-600">Save $420/month</div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-4">10 Agents</h3>
                <div className="space-y-3">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-xl font-bold text-green-600">$275/mo</div>
                    <div className="text-sm text-green-700">Seasalt.ai</div>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <div className="text-xl font-bold text-red-600">$1,190/mo</div>
                    <div className="text-sm text-red-700">Five9</div>
                  </div>
                  <div className="text-sm text-gray-600">Save $915/month</div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-4">20 Agents</h3>
                <div className="space-y-3">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-xl font-bold text-green-600">$525/mo</div>
                    <div className="text-sm text-green-700">Seasalt.ai</div>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <div className="text-xl font-bold text-red-600">$2,380/mo</div>
                    <div className="text-sm text-red-700">Five9</div>
                  </div>
                  <div className="text-sm text-gray-600">Save $1,855/month</div>
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
                Balanced Approach vs. Outbound-Heavy
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Most businesses need both inbound and outbound capabilities, not just heavy outbound focus
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-blue-600 mb-6">Seasalt.ai: Balanced Omnichannel</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Inbound customer support across all channels</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Outbound marketing campaigns (SMS, WhatsApp, Voice)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">AI automation for both inbound and outbound</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Unified inbox for all customer interactions</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Perfect for growing businesses</span>
                  </li>
                </ul>
              </div>

              <div className="bg-orange-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-orange-600 mb-6">Five9: Outbound-Heavy Focus</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-3 mt-0.5">•</span>
                    <span className="text-gray-700">Advanced predictive dialing capabilities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-3 mt-0.5">•</span>
                    <span className="text-gray-700">Complex campaign management tools</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-3 mt-0.5">•</span>
                    <span className="text-gray-700">Enterprise-grade compliance features</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-3 mt-0.5">•</span>
                    <span className="text-gray-700">Designed for high-volume call centers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-3 mt-0.5">•</span>
                    <span className="text-gray-700">Requires dedicated management team</span>
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
              Get Powerful Features Without Enterprise Complexity
            </h2>
            <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
              Why pay 5x more for features you don't need? Get the balanced omnichannel 
              solution that grows with your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                 href="https://seax.seasalt.ai/signup"
                 className="bg-white text-orange-600 hover:bg-gray-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
               >
                 Sign Up
              </a>
              <a
                href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/" className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
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

export default Five9Alternative;
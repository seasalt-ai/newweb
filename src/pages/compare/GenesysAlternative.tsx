import React from 'react';
import { ArrowLeft, Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const GenesysAlternative = () => {
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
      competitor: '$75/user/month',
      seasaltAdvantage: true
    },
    {
      feature: 'Minimum Commitment',
      seasalt: 'None',
      competitor: 'High (~$2,000/month minimum)',
      seasaltAdvantage: true
    },
    {
      feature: 'Pricing Complexity',
      seasalt: 'Simple & Transparent',
      competitor: 'Extremely Complex. Tiered plans, usage tokens, add-ons, quote-based',
      seasaltAdvantage: true
    },
    {
      feature: 'Ease of Setup',
      seasalt: 'Minutes to go live',
      competitor: 'Requires significant implementation resources',
      seasaltAdvantage: true
    },
    {
      feature: 'Best For',
      seasalt: 'SMEs needing powerful features with simplicity and affordability',
      competitor: 'Global corporations with 100s of agents and dedicated management teams',
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
                Enterprise Power,{' '}
                <span className="bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
                  Without the Enterprise Price & Complexity
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Genesys is a powerful, enterprise-grade platform designed for massive corporations with dedicated IT teams and deep pockets. 
                Their pricing models reflect this, with high per-user costs, significant minimum monthly commitments (~$2,000/mo minimum), 
                and complex, token-based billing for AI features. For an SME, this is not just unaffordable—it's unmanageable.
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Comparison */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                SME-Focused vs. Enterprise-Only
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See why Seasalt.ai delivers the power you need without the complexity you don't
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-blue-600">Seasalt.ai</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Genesys Cloud CX</th>
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
                The Real Cost of Enterprise Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Why enterprise pricing doesn't make sense for growing businesses
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-blue-600 mb-6">Seasalt.ai: Built for SMEs</h3>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800">No Minimum Commitment</h4>
                    <p className="text-green-700 text-sm">Start with 1 user, scale as you grow</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800">Simple Pricing</h4>
                    <p className="text-blue-700 text-sm">$25/agent/month, all features included</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-800">Quick Setup</h4>
                    <p className="text-purple-700 text-sm">Go live in minutes, not months</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-800">Self-Service</h4>
                    <p className="text-orange-700 text-sm">No implementation team required</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-600 mb-6">Genesys: Enterprise Focus</h3>
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800">High Minimums</h4>
                    <p className="text-red-700 text-sm">~$2,000/month minimum commitment</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800">Complex Pricing</h4>
                    <p className="text-red-700 text-sm">Tiered plans, usage tokens, quote-based</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800">Long Implementation</h4>
                    <p className="text-red-700 text-sm">Requires dedicated implementation resources</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800">Enterprise Sales</h4>
                    <p className="text-red-700 text-sm">Must contact sales for pricing</p>
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
              Get Enterprise Features at SME Prices
            </h2>
            <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
              Why pay enterprise prices when you can get the features you need 
              at a fraction of the cost?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#signup"
                className="bg-white text-purple-600 hover:bg-gray-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
              >
                Start Free Trial
              </a>
              <a
                href="#demo"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
              >
                See Live Demo
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
import React from 'react';
import { ArrowLeft, Check, X, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const AircallAlternative = () => {
  const comparisonFeatures = [
    {
      feature: 'Pricing Model',
      seasalt: 'Simple per-user fee',
      competitor: 'Per-license + multiple required add-ons',
      seasaltAdvantage: true
    },
    {
      feature: 'User Minimum',
      seasalt: '1',
      competitor: '3',
      seasaltAdvantage: true
    },
    {
      feature: 'Unified Voice & WhatsApp',
      seasalt: 'Yes, natively included',
      competitor: 'No, requires $10/mo add-on',
      seasaltAdvantage: true
    },
    {
      feature: 'AI Voice Agent',
      seasalt: 'Yes, included (usage-based)',
      competitor: 'No, requires $0.99/min add-on',
      seasaltAdvantage: true
    },
    {
      feature: 'AI Call Summaries',
      seasalt: 'Yes, included',
      competitor: 'No, requires $9/mo add-on',
      seasaltAdvantage: true
    },
    {
      feature: 'Advanced Analytics',
      seasalt: 'Yes, included',
      competitor: 'No, requires $15/mo add-on',
      seasaltAdvantage: true
    },
    {
      feature: 'Reported Call Quality',
      seasalt: 'High-quality voice',
      competitor: 'Users report inconsistent quality and dropped calls',
      seasaltAdvantage: true
    },
    {
      feature: 'Best For',
      seasalt: 'SMEs needing an affordable, truly all-in-one solution',
      competitor: 'Sales/support teams that can meet the user minimum and afford multiple add-ons',
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
                Tired of Add-on Fees and User Minimums?{' '}
                <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                  See Why Growing Teams Choose Seasalt.ai Over Aircall
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Aircall is known for its user-friendly interface but forces small teams into a corner with a mandatory 3-user minimum 
                and a pricing model that walls off critical features like AI, advanced analytics, and even WhatsApp integration behind 
                expensive monthly add-ons. Seasalt.ai provides a truly all-in-one platform with transparent pricing.
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Comparison */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Feature-by-Feature Comparison
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how Seasalt.ai delivers all the features you need without the add-on fees and complexity
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-blue-600">Seasalt.ai</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Aircall</th>
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

        {/* Cost Breakdown */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                The Real Cost Comparison
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how Aircall's add-on fees quickly add up compared to Seasalt.ai's transparent pricing
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-red-50 p-8 rounded-xl border-2 border-red-200">
                <h3 className="text-2xl font-bold text-red-800 mb-6 text-center">Aircall Reality Check</h3>
                <div className="space-y-3 text-red-700">
                  <div className="flex justify-between">
                    <span>Base plan (per user)</span>
                    <span className="font-semibold">$30/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span>AI Voice add-on</span>
                    <span className="font-semibold">+$9/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span>WhatsApp integration</span>
                    <span className="font-semibold">+$10/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Advanced analytics</span>
                    <span className="font-semibold">+$15/month</span>
                  </div>
                  <div className="border-t border-red-300 pt-3 mt-3">
                    <div className="flex justify-between text-xl font-bold text-red-800">
                      <span>Total per user</span>
                      <span>$64/month</span>
                    </div>
                    <p className="text-sm text-red-600 mt-2">Plus 3-user minimum = $192/month minimum</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-8 rounded-xl border-2 border-green-200">
                <h3 className="text-2xl font-bold text-green-800 mb-6 text-center">Seasalt.ai</h3>
                <div className="space-y-3 text-green-700">
                  <div className="flex justify-between">
                    <span>Admin (first user)</span>
                    <span className="font-semibold">$50/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Additional agents</span>
                    <span className="font-semibold">$25/month each</span>
                  </div>
                  <div className="flex justify-between">
                    <span>AI Voice + Chat included</span>
                    <span className="font-semibold">$0</span>
                  </div>
                  <div className="flex justify-between">
                    <span>All channels included</span>
                    <span className="font-semibold">$0</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Analytics included</span>
                    <span className="font-semibold">$0</span>
                  </div>
                  <div className="border-t border-green-300 pt-3 mt-3">
                    <div className="flex justify-between text-xl font-bold text-green-800">
                      <span>Total (3 users)</span>
                      <span>$100/month</span>
                    </div>
                    <p className="text-sm text-green-600 mt-2">Save $92/month vs. Aircall</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Escape Add-on Fees?
            </h2>
            <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
              Join thousands of growing businesses who switched from Aircall to get all the features 
              they need without the complexity and hidden costs.
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

export default AircallAlternative;
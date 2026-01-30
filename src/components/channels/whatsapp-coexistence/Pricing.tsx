import React, { useState, useEffect } from 'react';
import { DollarSign, TrendingUp, ArrowRight } from 'lucide-react';

interface ROICalculatorProps {
  lang: string;
}

const ROICalculator: React.FC<ROICalculatorProps> = ({ lang }) => {
  const [monthlyMessages, setMonthlyMessages] = useState(5000);
  const [currentCost, setCurrentCost] = useState(500);
  const [appPercentage, setAppPercentage] = useState(40);

  const calculateSavings = () => {
    // Coexistence cost calculation
    // App messages = Free
    // API messages = Charged (assuming $0.02 per message for API)
    const apiMessages = Math.round(monthlyMessages * ((100 - appPercentage) / 100));
    const appMessages = Math.round(monthlyMessages * (appPercentage / 100));

    const apiCost = apiMessages * 0.02; // Estimated API cost
    const appCost = 0; // Free
    const totalCost = apiCost + appCost;

    const savings = currentCost - totalCost;
    const savingsPercentage = Math.max(0, (savings / currentCost) * 100);

    return {
      apiCost,
      appCost,
      totalCost,
      savings,
      savingsPercentage
    };
  };

  const results = calculateSavings();

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Pricing & ROI Calculator
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Calculate how much WhatsApp Coexistence can save your business
            </p>
          </div>

          {/* ROI Calculator */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left: Calculator Inputs */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Your Current Setup
                </h3>

                {/* Monthly Messages Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Monthly Messages
                  </label>
                  <input
                    type="number"
                    value={monthlyMessages}
                    onChange={(e) => setMonthlyMessages(Number(e.target.value))}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter monthly message volume"
                    min="100"
                    max="1000000"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Typical range: 1,000 - 50,000 messages/month
                  </p>
                </div>

                {/* Current Cost Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Monthly Cost ($)
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="number"
                      value={currentCost}
                      onChange={(e) => setCurrentCost(Number(e.target.value))}
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="500"
                      min="0"
                      max="10000"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    SMS/Email software, call center, etc.
                  </p>
                </div>

                {/* App Messages Slider */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Manual App Messages: {appPercentage}%
                  </label>
                  <input
                    type="range"
                    value={appPercentage}
                    onChange={(e) => setAppPercentage(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    min="0"
                    max="100"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>0% (All API)</span>
                    <span>100% (All Free)</span>
                  </div>
                  <p className="text-xs text-green-600 mt-2">
                    Messages sent via app are FREE!
                  </p>
                </div>
              </div>

              {/* Right: Results */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border-2 border-green-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Your Savings
                </h3>

                {/* Savings Amount */}
                <div className="bg-white rounded-xl p-6 mb-4 shadow-md">
                  <p className="text-sm text-gray-600 mb-1">Estimated Monthly Savings</p>
                  <div className="flex items-baseline">
                    <DollarSign className="w-8 h-8 text-green-600 mr-2" />
                    <span className="text-5xl font-bold text-green-600">
                      {results.savings > 0 ? results.savings.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 }) : '0'}
                    </span>
                  </div>
                  {results.savingsPercentage > 0 && (
                    <div className="flex items-center mt-2">
                      <TrendingUp className="w-5 h-5 text-green-500 mr-2" />
                      <span className="text-lg font-semibold text-green-700">
                        {results.savingsPercentage.toFixed(1)}% cost reduction
                      </span>
                    </div>
                  )}
                </div>

                {/* Breakdown */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-green-200">
                    <span className="text-gray-700">App Messages (Free)</span>
                    <span className="font-semibold text-green-600">
                      ${results.appCost.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-green-200">
                    <span className="text-gray-700">API Messages (Charged)</span>
                    <span className="font-semibold text-green-600">
                      ${results.apiCost.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-green-200">
                    <span className="text-gray-700">Total Cost</span>
                    <span className="font-bold text-green-700 text-lg">
                      ${results.totalCost.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-700">Current Cost</span>
                    <span className="font-bold text-gray-900 text-lg">
                      ${currentCost.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Annual Projection */}
                <div className="bg-green-600 text-white rounded-xl p-4 mt-4">
                  <p className="text-sm text-green-100 mb-1">Annual Projection</p>
                  <div className="flex items-baseline">
                    <DollarSign className="w-6 h-6 mr-2" />
                    <span className="text-3xl font-bold">
                      {(results.savings * 12).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                    </span>
                  </div>
                  <p className="text-sm text-green-100 mt-1">potential savings per year</p>
                </div>
              </div>
            </div>
          </div>

          {/* Conversation Categories */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              WhatsApp Conversation Categories
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Marketing */}
              <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <h4 className="text-lg font-bold text-gray-900">Marketing</h4>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  Promotions, product launches, cart reminders
                </p>
                <p className="text-lg font-bold text-red-700">
                  $$$ Highest
                </p>
                <p className="text-xs text-gray-500">
                  ~$0.17/conv (varies by region)
                </p>
              </div>

              {/* Utility */}
              <div className="bg-orange-50 rounded-xl p-6 border-2 border-orange-200">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
                  <h4 className="text-lg font-bold text-gray-900">Utility</h4>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  Order confirmations, delivery updates
                </p>
                <p className="text-lg font-bold text-orange-700">
                  $$ Medium
                </p>
                <p className="text-xs text-gray-500">
                  ~$0.03/conv (varies by region)
                </p>
              </div>

              {/* Authentication */}
              <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                  <h4 className="text-lg font-bold text-gray-900">Authentication</h4>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  OTPs, login codes, security verifications
                </p>
                <p className="text-lg font-bold text-blue-700">
                  $ Lowest
                </p>
                <p className="text-xs text-gray-500">
                  ~$0.013/conv (varies by region)
                </p>
              </div>

              {/* Service */}
              <div className="bg-green-50 rounded-xl p-6 border-2 border-green-300">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-green-600 rounded-full mr-2"></div>
                  <h4 className="text-lg font-bold text-gray-900">Service</h4>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  Customer-initiated inquiries (24h window)
                </p>
                <p className="text-lg font-bold text-green-700">
                  FREE
                </p>
                <p className="text-xs text-green-600">
                  Replies within service window
                </p>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <p className="text-lg text-gray-600 mb-6">
              See your actual savings with WhatsApp Coexistence
            </p>
            <a
              href="https://seax.seasalt.ai/signup"
              className="inline-flex items-center justify-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Sign Up Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;

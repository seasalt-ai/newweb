import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Phone, Clock, Users } from 'lucide-react';

const PriceCalculator = () => {
  const [planType, setPlanType] = useState<'inbound' | 'inbound-outbound'>('inbound');
  const [localNumbers, setLocalNumbers] = useState(1);
  const [tollFreeNumbers, setTollFreeNumbers] = useState(0);
  const [voiceAIMinutes, setVoiceAIMinutes] = useState(500);
  const [humanMinutes, setHumanMinutes] = useState(100);

  const basePlan = planType === 'inbound' ? 29.99 : 99;
  const phoneNumberCost = (localNumbers * 2) + (tollFreeNumbers * 3);
  const voiceAICost = voiceAIMinutes * 0.12;
  const humanCallCost = humanMinutes * 0.015;
  const totalMonthly = basePlan + phoneNumberCost + voiceAICost + humanCallCost;

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <Calculator className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-4xl font-bold text-gray-900">
              Monthly Price Calculator
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate your exact monthly cost based on your usage needs. 
            All pricing is for USA/Canada with phone charges included.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Calculator Inputs */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Configure Your Plan</h3>
            
            {/* Plan Type Selection */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-4">
                1. Choose Your Plan Type
              </label>
              <div className="grid grid-cols-1 gap-3">
                <button
                  onClick={() => setPlanType('inbound')}
                  className={`p-4 rounded-lg border-2 transition-all text-left ${
                    planType === 'inbound'
                      ? 'border-teal-500 bg-teal-50 text-teal-900'
                      : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <div className="font-semibold">Inbound Only - $29.99/month</div>
                  <div className="text-sm opacity-80">Perfect for customer service</div>
                </button>
                <button
                  onClick={() => setPlanType('inbound-outbound')}
                  className={`p-4 rounded-lg border-2 transition-all text-left ${
                    planType === 'inbound-outbound'
                      ? 'border-blue-500 bg-blue-50 text-blue-900'
                      : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <div className="font-semibold">Inbound + Outbound - $99/month</div>
                  <div className="text-sm opacity-80">Scale your voice campaigns</div>
                </button>
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-4">
                <Phone className="w-4 h-4 inline mr-2" />
                2. Phone Numbers (with E911 address)
              </label>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Local Numbers ($2/month each)</label>
                  <input
                    type="number"
                    min="0"
                    max="50"
                    value={localNumbers}
                    onChange={(e) => setLocalNumbers(Number(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Toll-Free Numbers ($3/month each)</label>
                  <input
                    type="number"
                    min="0"
                    max="20"
                    value={tollFreeNumbers}
                    onChange={(e) => setTollFreeNumbers(Number(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Voice AI Minutes */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-4">
                <Clock className="w-4 h-4 inline mr-2" />
                3. Voice AI Minutes ($0.12/minute - ChatGPT-4o mini)
              </label>
              <div className="space-y-2">
                <input
                  type="range"
                  min="0"
                  max="5000"
                  step="50"
                  value={voiceAIMinutes}
                  onChange={(e) => setVoiceAIMinutes(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>0 min</span>
                  <span className="font-semibold text-blue-600">{voiceAIMinutes} minutes</span>
                  <span>5,000 min</span>
                </div>
                <input
                  type="number"
                  min="0"
                  max="10000"
                  value={voiceAIMinutes}
                  onChange={(e) => setVoiceAIMinutes(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Human Agent Minutes */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-4">
                <Users className="w-4 h-4 inline mr-2" />
                4. Human Agent Minutes ($0.015/minute)
              </label>
              <div className="space-y-2">
                <input
                  type="range"
                  min="0"
                  max="2000"
                  step="25"
                  value={humanMinutes}
                  onChange={(e) => setHumanMinutes(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>0 min</span>
                  <span className="font-semibold text-green-600">{humanMinutes} minutes</span>
                  <span>2,000 min</span>
                </div>
                <input
                  type="number"
                  min="0"
                  max="5000"
                  value={humanMinutes}
                  onChange={(e) => setHumanMinutes(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </motion.div>

          {/* Pricing Breakdown */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Monthly Cost Breakdown</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-700">
                  {planType === 'inbound' ? 'Inbound Only Plan' : 'Inbound + Outbound Plan'}
                </span>
                <span className="font-semibold text-lg">${basePlan.toFixed(2)}</span>
              </div>
              
              {(localNumbers > 0 || tollFreeNumbers > 0) && (
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <div>
                    <div className="text-gray-700">Phone Numbers</div>
                    <div className="text-sm text-gray-500">
                      {localNumbers > 0 && `${localNumbers} local`}
                      {localNumbers > 0 && tollFreeNumbers > 0 && ', '}
                      {tollFreeNumbers > 0 && `${tollFreeNumbers} toll-free`}
                    </div>
                  </div>
                  <span className="font-semibold text-lg">${phoneNumberCost.toFixed(2)}</span>
                </div>
              )}
              
              {voiceAIMinutes > 0 && (
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <div>
                    <div className="text-gray-700">Voice AI Minutes</div>
                    <div className="text-sm text-gray-500">{voiceAIMinutes} min × $0.12</div>
                  </div>
                  <span className="font-semibold text-lg">${voiceAICost.toFixed(2)}</span>
                </div>
              )}
              
              {humanMinutes > 0 && (
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <div>
                    <div className="text-gray-700">Human Agent Minutes</div>
                    <div className="text-sm text-gray-500">{humanMinutes} min × $0.015</div>
                  </div>
                  <span className="font-semibold text-lg">${humanCallCost.toFixed(2)}</span>
                </div>
              )}
            </div>

            <div className="border-t-2 border-gray-300 pt-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold text-gray-900">Total Monthly Cost</span>
                <span className="text-3xl font-bold text-blue-600">${totalMonthly.toFixed(2)}</span>
              </div>
              
              <div className="bg-white rounded-lg p-4 mb-6">
                <div className="text-sm text-gray-600 space-y-1">
                  <div>✅ USA/Canada coverage included</div>
                  <div>✅ All phone charges included</div>
                  <div>✅ E911 address registration included</div>
                  <div>✅ Call recording and analytics</div>
                  {planType === 'inbound-outbound' && <div>✅ Outbound campaigns and bulk calling</div>}
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href={planType === 'inbound' ? 'https://chat.seasalt.ai/signup' : 'https://seax.seasalt.ai/signup'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 px-6 rounded-lg font-semibold text-white text-center inline-block transition-all transform hover:scale-105 ${
                    planType === 'inbound' ? 'bg-teal-600 hover:bg-teal-700' : 'bg-blue-600 hover:bg-blue-700'
                  }`}
                >
                  Get Started with {planType === 'inbound' ? 'Inbound Only' : 'Inbound + Outbound'}
                </a>
                <a
                  href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 rounded-lg font-semibold text-gray-700 bg-white border-2 border-gray-300 text-center inline-block transition-all hover:border-gray-400"
                >
                  Schedule a Demo
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-white rounded-xl p-6 shadow-lg max-w-4xl mx-auto">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Important Notes</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
              <div>
                • Pricing shown is for USA/Canada only
              </div>
              <div>
                • All phone call charges are included in the rates shown
              </div>
              <div>
                • Voice AI uses ChatGPT-4o mini model at $0.12/minute
              </div>
              <div>
                • Human agent minutes are for call transfers and direct calls
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PriceCalculator;

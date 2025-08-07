import { useState } from 'react';
import { Calculator, Users, Phone, MessageSquare, Info } from 'lucide-react';

const OmniChannelCalculator = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const [users, setUsers] = useState(1);
  const [localNumbers, setLocalNumbers] = useState(1);
  const [tollFreeNumbers, setTollFreeNumbers] = useState(0);
  const [whatsappNumbers, setWhatsappNumbers] = useState(1);
  const [smsCount, setSmsCount] = useState(100);
  const [callMinutes, setCallMinutes] = useState(100);
  const [voicemailDrops, setVoicemailDrops] = useState(0);
  const [whatsappMessages, setWhatsappMessages] = useState(100);

  // Pricing constants
  const pricing = {
    firstUser: {
      monthly: 99,
      yearly: 999
    },
    additionalUser: {
      monthly: 49,
      yearly: 499
    },
    localNumber: 2,
    tollFreeNumber: 3,
    whatsappNumber: 0,
    smsRate: 0.02,
    callRate: 0.015,
    voicemailRate: 0.05,
    whatsappRate: 0 // Free for business-initiated messages
  };

  // Calculate monthly costs
  const calculateMonthlyCosts = () => {
    const userCost = pricing.firstUser.monthly + (Math.max(0, users - 1) * pricing.additionalUser.monthly);
    const phoneNumberCost = (localNumbers * pricing.localNumber) + (tollFreeNumbers * pricing.tollFreeNumber);
    const whatsappNumberCost = whatsappNumbers * pricing.whatsappNumber;
    const smsCost = smsCount * pricing.smsRate;
    const callCost = callMinutes * pricing.callRate;
    const voicemailCost = voicemailDrops * pricing.voicemailRate;
    const whatsappCost = whatsappMessages * pricing.whatsappRate;
    
    return {
      userCost,
      phoneNumberCost,
      whatsappNumberCost,
      smsCost,
      callCost,
      voicemailCost,
      whatsappCost,
      total: userCost + phoneNumberCost + whatsappNumberCost + smsCost + callCost + voicemailCost + whatsappCost
    };
  };

  // Calculate yearly costs
  const calculateYearlyCosts = () => {
    const userCost = pricing.firstUser.yearly + (Math.max(0, users - 1) * pricing.additionalUser.yearly);
    const phoneNumberCost = ((localNumbers * pricing.localNumber) + (tollFreeNumbers * pricing.tollFreeNumber)) * 12;
    const whatsappNumberCost = whatsappNumbers * pricing.whatsappNumber * 12;
    const smsCost = smsCount * pricing.smsRate * 12;
    const callCost = callMinutes * pricing.callRate * 12;
    const voicemailCost = voicemailDrops * pricing.voicemailRate * 12;
    const whatsappCost = whatsappMessages * pricing.whatsappRate * 12;
    
    return {
      userCost,
      phoneNumberCost,
      whatsappNumberCost,
      smsCost,
      callCost,
      voicemailCost,
      whatsappCost,
      total: userCost + phoneNumberCost + whatsappNumberCost + smsCost + callCost + voicemailCost + whatsappCost
    };
  };

  const monthlyCosts = calculateMonthlyCosts();
  const yearlyCosts = calculateYearlyCosts();
  const currentCosts = billingPeriod === 'monthly' ? monthlyCosts : yearlyCosts;

  // Calculate savings for yearly plan
  const monthlyTotal = monthlyCosts.total;
  const yearlyTotal = yearlyCosts.total;
  const yearlyEquivalent = monthlyTotal * 12;
  const savings = yearlyEquivalent - yearlyTotal;

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Calculator className="w-8 h-8 text-blue-600" />
          <h2 className="text-3xl font-bold text-gray-900">Omni-channel Plan Calculator</h2>
        </div>
        <p className="text-lg text-gray-600">
          Using USA/Canada as an example. For other countries, please{' '}
          <a href="mailto:seax@seasalt.ai" className="text-blue-600 hover:text-blue-800 underline">
            contact us
          </a>
        </p>
      </div>

      {/* Billing Period Toggle */}
      <div className="flex items-center justify-center mb-8">
        <span className={`mr-3 ${billingPeriod === 'monthly' ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
          Monthly
        </span>
        <button
          onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
          className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              billingPeriod === 'yearly' ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
        <span className={`ml-3 ${billingPeriod === 'yearly' ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
          Yearly <span className="text-green-500 font-semibold">(Save 2 Months)</span>
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Configuration Panel */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Configure Your Plan</h3>
          
          {/* Users */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-blue-600" />
              <label className="text-sm font-medium text-gray-700">Number of Users</label>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setUsers(Math.max(1, users - 1))}
                className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-lg font-semibold leading-none select-none"
                style={{ lineHeight: '1' }}
              >
                −
              </button>
              <span className="text-xl font-semibold w-12 text-center">{users}</span>
              <button
                onClick={() => setUsers(users + 1)}
                className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center text-lg font-semibold leading-none select-none"
                style={{ lineHeight: '1' }}
              >
                +
              </button>
            </div>
            <p className="text-sm text-gray-500">
              First user: {billingPeriod === 'monthly' ? '$99/month' : '$999/year'} | 
              Additional: {billingPeriod === 'monthly' ? '$49/month' : '$499/year'}
            </p>
          </div>

          {/* Phone Numbers */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-green-600" />
              <label className="text-sm font-medium text-gray-700">Phone Numbers</label>
            </div>
            
            {/* Local Numbers */}
            <div className="ml-7">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Local Numbers ($2/month each)</span>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setLocalNumbers(Math.max(0, localNumbers - 1))}
                    className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-sm leading-none select-none"
                    style={{ lineHeight: '1' }}
                  >
                    −
                  </button>
                  <span className="w-8 text-center">{localNumbers}</span>
                  <button
                    onClick={() => setLocalNumbers(localNumbers + 1)}
                    className="w-8 h-8 rounded-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center text-sm leading-none select-none"
                    style={{ lineHeight: '1' }}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Toll-Free Numbers */}
            <div className="ml-7">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Toll-Free Numbers ($3/month each)</span>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setTollFreeNumbers(Math.max(0, tollFreeNumbers - 1))}
                    className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-sm leading-none select-none"
                    style={{ lineHeight: '1' }}
                  >
                    −
                  </button>
                  <span className="w-8 text-center">{tollFreeNumbers}</span>
                  <button
                    onClick={() => setTollFreeNumbers(tollFreeNumbers + 1)}
                    className="w-8 h-8 rounded-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center text-sm leading-none select-none"
                    style={{ lineHeight: '1' }}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp Numbers */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <MessageSquare className="w-5 h-5 text-emerald-600" />
              <label className="text-sm font-medium text-gray-700">WhatsApp Numbers</label>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setWhatsappNumbers(Math.max(0, whatsappNumbers - 1))}
                className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-lg font-semibold leading-none select-none"
                style={{ lineHeight: '1' }}
              >
                −
              </button>
              <span className="text-xl font-semibold w-12 text-center">{whatsappNumbers}</span>
              <button
                onClick={() => setWhatsappNumbers(whatsappNumbers + 1)}
                className="w-10 h-10 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center text-lg font-semibold leading-none select-none"
                style={{ lineHeight: '1' }}
              >
                +
              </button>
            </div>
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 flex items-start space-x-2">
              <Info className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-emerald-700">
                WhatsApp fees are paid directly to Meta. Seasalt.ai imposes NO markup.
              </p>
            </div>
          </div>

          {/* Usage */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-gray-900">Monthly Usage</h4>
            
            {/* SMS */}
            <div className="space-y-2">
              <label className="text-sm text-gray-600">SMS Messages ($0.02 each)</label>
              <input
                type="range"
                min="0"
                max="10000"
                step="100"
                value={smsCount}
                onChange={(e) => setSmsCount(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>0</span>
                <span className="font-medium">{smsCount.toLocaleString()}</span>
                <span>10k+</span>
              </div>
            </div>

            {/* Call Minutes */}
            <div className="space-y-2">
              <label className="text-sm text-gray-600">Call Minutes ($0.015/minute)</label>
              <input
                type="range"
                min="0"
                max="5000"
                step="50"
                value={callMinutes}
                onChange={(e) => setCallMinutes(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>0</span>
                <span className="font-medium">{callMinutes.toLocaleString()}</span>
                <span>5k+</span>
              </div>
            </div>

            {/* Voicemail Drops */}
            <div className="space-y-2">
              <label className="text-sm text-gray-600">Voicemail Drops ($0.05 each)</label>
              <input
                type="range"
                min="0"
                max="1000"
                step="10"
                value={voicemailDrops}
                onChange={(e) => setVoicemailDrops(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>0</span>
                <span className="font-medium">{voicemailDrops.toLocaleString()}</span>
                <span>1k+</span>
              </div>
            </div>

            {/* WhatsApp Messages */}
            <div className="space-y-2">
              <label className="text-sm text-gray-600">WhatsApp Business-Initiated Messages (no markup)</label>
              <input
                type="range"
                min="0"
                max="10000"
                step="100"
                value={whatsappMessages}
                onChange={(e) => setWhatsappMessages(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>0</span>
                <span className="font-medium">{whatsappMessages.toLocaleString()}</span>
                <span>10k+</span>
              </div>
            </div>
          </div>
        </div>

        {/* Results Panel */}
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            {billingPeriod === 'monthly' ? 'Monthly' : 'Yearly'} Pricing Breakdown
          </h3>
          
          <div className="space-y-4">
            {/* User Costs */}
            <div className="flex justify-between items-center py-2 border-b border-gray-200">
              <div>
                <span className="text-gray-700">Users ({users})</span>
                <p className="text-sm text-gray-500">
                  1 first user + {Math.max(0, users - 1)} additional
                </p>
              </div>
              <span className="text-lg font-semibold">${currentCosts.userCost.toLocaleString()}</span>
            </div>

            {/* Phone Number Costs */}
            {(localNumbers > 0 || tollFreeNumbers > 0) && (
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <div>
                  <span className="text-gray-700">Phone Numbers</span>
                  <p className="text-sm text-gray-500">
                    {localNumbers} local + {tollFreeNumbers} toll-free
                  </p>
                </div>
                <span className="text-lg font-semibold">
                  ${(billingPeriod === 'monthly' ? currentCosts.phoneNumberCost : currentCosts.phoneNumberCost).toLocaleString()}
                </span>
              </div>
            )}

            {/* WhatsApp Numbers */}
            {whatsappNumbers > 0 && (
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <div>
                  <span className="text-gray-700">WhatsApp Numbers ({whatsappNumbers})</span>
                  <p className="text-sm text-emerald-600">Free - No markup</p>
                </div>
                <span className="text-lg font-semibold text-emerald-600">$0</span>
              </div>
            )}

            {/* Usage Costs */}
            {smsCount > 0 && (
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-700">SMS ({smsCount.toLocaleString()})</span>
                <span className="text-lg font-semibold">${currentCosts.smsCost.toFixed(2)}</span>
              </div>
            )}

            {callMinutes > 0 && (
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-700">Call Minutes ({callMinutes.toLocaleString()})</span>
                <span className="text-lg font-semibold">${currentCosts.callCost.toFixed(2)}</span>
              </div>
            )}

            {voicemailDrops > 0 && (
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-700">Voicemail Drops ({voicemailDrops.toLocaleString()})</span>
                <span className="text-lg font-semibold">${currentCosts.voicemailCost.toFixed(2)}</span>
              </div>
            )}

            {whatsappMessages > 0 && (
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <div>
                  <span className="text-gray-700">WhatsApp Messages ({whatsappMessages.toLocaleString()})</span>
                  <p className="text-sm text-emerald-600">Business-initiated - paid to Meta, No markup</p>
                </div>
                <span className="text-lg font-semibold text-emerald-600">$0</span>
              </div>
            )}

            {/* Total */}
            <div className="flex justify-between items-center py-4 border-t-2 border-gray-300">
              <span className="text-xl font-bold text-gray-900">
                Total {billingPeriod === 'monthly' ? 'Monthly' : 'Yearly'}
              </span>
              <span className="text-2xl font-bold text-blue-600">
                ${currentCosts.total.toLocaleString()}
              </span>
            </div>

            {/* Yearly Savings */}
            {billingPeriod === 'yearly' && savings > 0 && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-green-800 font-semibold">
                    You save ${savings.toLocaleString()} per year!
                  </span>
                </div>
                <p className="text-sm text-green-700 mt-1">
                  Equivalent to getting 2 months free with the yearly plan
                </p>
              </div>
            )}
          </div>

          {/* CTA */}
          <div className="mt-8 space-y-3">
            <a
              href="https://seax.seasalt.ai/signup"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-center inline-block"
            >
              Get Started with Omni-channel
            </a>
            <a
              href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
              className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg transition-colors text-center inline-block"
            >
              Talk to Sales
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OmniChannelCalculator;

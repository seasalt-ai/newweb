import React, { useState } from 'react';
import { type SupportedLanguage } from '../../../i18n/helpers';

interface PriceCalculatorProps {
  lang: SupportedLanguage;
  translations?: any;
}

const PriceCalculator: React.FC<PriceCalculatorProps> = ({ lang, translations }) => {
  const [planType, setPlanType] = useState<'inbound' | 'inbound-outbound'>('inbound');
  const [localNumbers, setLocalNumbers] = useState(1);
  const [tollFreeNumbers, setTollFreeNumbers] = useState(0);
  const [voiceAIMinutes, setVoiceAIMinutes] = useState(500);
  const [humanMinutes, setHumanMinutes] = useState(100);

  // 統一的翻譯獲取函數
  const getText = (key: string, fallback: string = key): string => {
    if (translations) {
      // SSR 模式：從 props 獲取翻譯
      const keys = key.split('.');
      let result: any = translations;

      for (const k of keys) {
        if (result && typeof result === 'object' && k in result) {
          result = result[k];
        } else {
          console.warn(`Missing translation key: "${key}" in locale "${lang}"`);
          return fallback;
        }
      }

      return typeof result === 'string' ? result : fallback;
    }

    // 如果沒有 translations prop，直接回傳 fallback
    return fallback;
  };

  const basePlan = planType === 'inbound' ? 29.99 : 99;
  const phoneNumberCost = (localNumbers * 2) + (tollFreeNumbers * 3);
  const voiceAICost = voiceAIMinutes * 0.12;
  const humanCallCost = humanMinutes * 0.015;
  const totalMonthly = basePlan + phoneNumberCost + voiceAICost + humanCallCost;

  const meetingUrl = `https://calendar.app.google/FLjCxzbYLqG6CkNs9?utm_source=website&utm_medium=footer&utm_campaign=cta&utm_content=demo_${lang}`;

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            {/* Calculator Icon */}
            <svg className="w-8 h-8 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <h2 className="text-4xl font-bold text-gray-900">
              {getText('seavoice.priceCalculator.hero.title', 'AI Voice Pricing Calculator')}
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {getText('seavoice.priceCalculator.hero.subtitle', 'Calculate your personalized SeaVoice pricing based on your business needs')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Calculator Inputs */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {getText('seavoice.priceCalculator.configure.title', 'Configure Your Plan')}
            </h3>

            {/* Plan Type Selection */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-4">
                {getText('seavoice.priceCalculator.planType.label', 'Choose Your Plan Type')}
              </label>
              <div className="grid grid-cols-1 gap-3">
                <button
                  onClick={() => setPlanType('inbound')}
                  className={`p-4 rounded-lg border-2 transition-all text-left ${planType === 'inbound'
                      ? 'border-teal-500 bg-teal-50 text-teal-900'
                      : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                    }`}
                >
                  <div className="font-semibold">
                    {getText('seavoice.priceCalculator.planType.inbound.title', 'Inbound Only ($29.99/month)')}
                  </div>
                  <div className="text-sm opacity-80">
                    {getText('seavoice.priceCalculator.planType.inbound.description', 'Perfect for customer service calls')}
                  </div>
                </button>
                <button
                  onClick={() => setPlanType('inbound-outbound')}
                  className={`p-4 rounded-lg border-2 transition-all text-left ${planType === 'inbound-outbound'
                      ? 'border-blue-500 bg-blue-50 text-blue-900'
                      : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                    }`}
                >
                  <div className="font-semibold">
                    {getText('seavoice.priceCalculator.planType.inboundOutbound.title', 'Inbound + Outbound ($99/month)')}
                  </div>
                  <div className="text-sm opacity-80">
                    {getText('seavoice.priceCalculator.planType.inboundOutbound.description', 'Includes bulk campaigns and outbound calling')}
                  </div>
                </button>
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-4">
                <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {getText('seavoice.priceCalculator.phoneNumbers.label', 'Phone Numbers')}
              </label>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    {getText('seavoice.priceCalculator.phoneNumbers.local.label', 'Local Numbers ($2/month each)')}
                  </label>
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
                  <label className="block text-sm text-gray-600 mb-2">
                    {getText('seavoice.priceCalculator.phoneNumbers.tollFree.label', 'Toll-Free Numbers ($3/month each)')}
                  </label>
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
                <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {getText('seavoice.priceCalculator.voiceAI.label', 'Voice AI Minutes per Month')}
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
                  <span>{getText('seavoice.priceCalculator.voiceAI.range.min', '0')}</span>
                  <span className="font-semibold text-blue-600">
                    {voiceAIMinutes} {getText('seavoice.priceCalculator.voiceAI.range.current', 'minutes')}
                  </span>
                  <span>{getText('seavoice.priceCalculator.voiceAI.range.max', '5,000+')}</span>
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
                <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {getText('seavoice.priceCalculator.humanAgent.label', 'Human Agent Minutes per Month')}
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
                  <span>{getText('seavoice.priceCalculator.humanAgent.range.min', '0')}</span>
                  <span className="font-semibold text-green-600">
                    {humanMinutes} {getText('seavoice.priceCalculator.humanAgent.range.current', 'minutes')}
                  </span>
                  <span>{getText('seavoice.priceCalculator.humanAgent.range.max', '2,000+')}</span>
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
          </div>

          {/* Pricing Breakdown */}
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {getText('seavoice.priceCalculator.breakdown.title', 'Monthly Cost Breakdown')}
            </h3>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-700">
                  {planType === 'inbound'
                    ? getText('seavoice.priceCalculator.breakdown.inboundPlan', 'Inbound Only Plan')
                    : getText('seavoice.priceCalculator.breakdown.inboundOutboundPlan', 'Inbound + Outbound Plan')
                  }
                </span>
                <span className="font-semibold text-lg">${basePlan.toFixed(2)}</span>
              </div>

              {(localNumbers > 0 || tollFreeNumbers > 0) && (
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <div>
                    <div className="text-gray-700">
                      {getText('seavoice.priceCalculator.breakdown.phoneNumbersTitle', 'Phone Numbers')}
                    </div>
                    <div className="text-sm text-gray-500">
                      {localNumbers > 0 && `${localNumbers} ${getText('seavoice.priceCalculator.breakdown.phoneNumbers.local', 'local')}`}
                      {localNumbers > 0 && tollFreeNumbers > 0 && ', '}
                      {tollFreeNumbers > 0 && `${tollFreeNumbers} ${getText('seavoice.priceCalculator.breakdown.phoneNumbers.tollFree', 'toll-free')}`}
                    </div>
                  </div>
                  <span className="font-semibold text-lg">${phoneNumberCost.toFixed(2)}</span>
                </div>
              )}

              {voiceAIMinutes > 0 && (
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <div>
                    <div className="text-gray-700">
                      {getText('seavoice.priceCalculator.breakdown.voiceAI.title', 'Voice AI Usage')}
                    </div>
                    <div className="text-sm text-gray-500">
                      {voiceAIMinutes} {getText('seavoice.priceCalculator.breakdown.voiceAI.calculation', 'minutes × $0.12')}
                    </div>
                  </div>
                  <span className="font-semibold text-lg">${voiceAICost.toFixed(2)}</span>
                </div>
              )}

              {humanMinutes > 0 && (
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <div>
                    <div className="text-gray-700">
                      {getText('seavoice.priceCalculator.breakdown.humanAgent.title', 'Human Agent Time')}
                    </div>
                    <div className="text-sm text-gray-500">
                      {humanMinutes} {getText('seavoice.priceCalculator.breakdown.humanAgent.calculation', 'minutes × $0.015')}
                    </div>
                  </div>
                  <span className="font-semibold text-lg">${humanCallCost.toFixed(2)}</span>
                </div>
              )}
            </div>

            <div className="border-t-2 border-gray-300 pt-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold text-gray-900">
                  {getText('seavoice.priceCalculator.breakdown.total', 'Total Monthly Cost')}
                </span>
                <span className="text-3xl font-bold text-blue-600">${totalMonthly.toFixed(2)}</span>
              </div>

              <div className="bg-white rounded-lg p-4 mb-6">
                <div className="text-sm text-gray-600 space-y-1">
                  <div>✅ {getText('seavoice.priceCalculator.features.usaCanada', 'USA & Canada calling included')}</div>
                  <div>✅ {getText('seavoice.priceCalculator.features.phoneCharges', 'No hidden phone charges')}</div>
                  <div>✅ {getText('seavoice.priceCalculator.features.e911', 'E911 address registration')}</div>
                  <div>✅ {getText('seavoice.priceCalculator.features.recording', 'Call recording & transcription')}</div>
                  {planType === 'inbound-outbound' && (
                    <div>✅ {getText('seavoice.priceCalculator.features.outboundCampaigns', 'Bulk outbound campaigns')}</div>
                  )}
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href={planType === 'inbound' ? 'https://chat.seasalt.ai/signup' : 'https://seax.seasalt.ai/signup'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 px-6 rounded-lg font-semibold text-white text-center inline-block transition-all transform hover:scale-105 ${planType === 'inbound' ? 'bg-teal-600 hover:bg-teal-700' : 'bg-blue-600 hover:bg-blue-700'
                    }`}
                >
                  {planType === 'inbound'
                    ? getText('seavoice.priceCalculator.cta.getStartedInbound', 'Get Started - Inbound Only')
                    : getText('seavoice.priceCalculator.cta.getStartedInboundOutbound', 'Get Started - Inbound + Outbound')
                  }
                </a>
                <a
                  href={meetingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 rounded-lg font-semibold text-gray-700 bg-white border-2 border-gray-300 text-center inline-block transition-all hover:border-gray-400"
                >
                  {getText('seavoice.priceCalculator.cta.scheduleDemo', 'Schedule Demo')}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-xl p-6 shadow-lg max-w-4xl mx-auto">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">
              {getText('seavoice.priceCalculator.notes.title', 'Important Notes')}
            </h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
              <div>
                • {getText('seavoice.priceCalculator.notes.usaCanadaOnly', 'USA & Canada calling only')}
              </div>
              <div>
                • {getText('seavoice.priceCalculator.notes.phoneChargesIncluded', 'All phone charges included')}
              </div>
              <div>
                • {getText('seavoice.priceCalculator.notes.voiceAIModel', 'Voice AI uses ChatGPT-4o mini model')}
              </div>
              <div>
                • {getText('seavoice.priceCalculator.notes.humanAgentMinutes', 'Human agent minutes at $0.015/min')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceCalculator;
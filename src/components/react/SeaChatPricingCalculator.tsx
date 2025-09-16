import React, { useState } from 'react';
import { useTranslation, type SupportedLanguage } from '../../i18n/helpers';

interface PricingCalculatorProps {
  lang: SupportedLanguage;
  translations?: any;
}

const SeaChatPricingCalculator: React.FC<PricingCalculatorProps> = ({ lang, translations }) => {
  // 條件式 Hook 使用，避免 SSR 錯誤
  const { t: hookT, isLoading } = translations ? 
    { t: null, isLoading: false } : 
    useTranslation(lang);
    
  const getText = (key: string, fallback: string = key): string => {
    if (translations) {
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
    
    return hookT ? hookT(key) : fallback;
  };

  const [selectedModel, setSelectedModel] = useState('ChatGPT-4o mini');
  const [chatResponses, setChatResponses] = useState(1000);
  const [voiceMinutes, setVoiceMinutes] = useState(100);
  const [voiceQuality, setVoiceQuality] = useState<'standard' | 'premium'>('standard');
  const [humanAgents, setHumanAgents] = useState(4);
  const [aiAgents, setAiAgents] = useState(10);
  const [workspaces, setWorkspaces] = useState(2);
  const [calculatorBilling, setCalculatorBilling] = useState<'monthly' | 'yearly'>('monthly');

  const pricingData = {
    "pricing": [
      {
        "model_name": "ChatGPT-3.5-turbo",
        "per_text_response": 0.01,
        "per_voice_minute": {
          "standard": 0.15,
          "premium": 0.15
        },
        "plans": ["Standard"]
      },
      {
        "model_name": "ChatGPT-4o mini",
        "per_text_response": 0.006,
        "per_voice_minute": {
          "standard": 0.12,
          "premium": 0.18
        },
        "plans": ["Premium", "Enterprise"]
      },
      {
        "model_name": "ChatGPT-4o",
        "per_text_response": 0.08,
        "per_voice_minute": {
          "standard": 0.80,
          "premium": 0.86
        },
        "plans": ["Premium", "Enterprise"]
      },
      {
        "model_name": "ChatGPT-4.1 Mini",
        "per_text_response": 0.018,
        "per_voice_minute": {
          "standard": 0.17,
          "premium": 0.23
        },
        "plans": ["Premium", "Enterprise"]
      },
      {
        "model_name": "ChatGPT-5 Mini",
        "per_text_response": 0.015,
        "per_voice_minute": {
          "standard": 0.16,
          "premium": 0.22
        },
        "plans": ["Premium", "Enterprise"]
      },
      {
        "model_name": "ChatGPT-4o Realtime API",
        "per_text_response": null,
        "per_voice_minute": {
          "standard": 0.19,
          "premium": 0.25
        },
        "plans": ["Premium", "Enterprise"],
        "voice_only": true
      },
      {
        "model_name": "Mistral-large",
        "per_text_response": 0.08,
        "per_voice_minute": {
          "standard": 0.80,
          "premium": 0.86
        },
        "plans": ["Premium", "Enterprise"]
      }
    ]
  };

  const calculateUsageCost = () => {
    const model = pricingData.pricing.find(p => p.model_name === selectedModel);
    if (!model) return 0;
    
    const textCost = model.per_text_response ? chatResponses * model.per_text_response : 0;
    const voiceCost = voiceMinutes * model.per_voice_minute[voiceQuality];
    return textCost + voiceCost;
  };

  const calculateAddonsCost = () => {
    const additionalHumanAgents = Math.max(0, humanAgents - 4);
    const additionalAiAgents = Math.max(0, aiAgents - 10);
    const additionalWorkspaces = Math.max(0, workspaces - 2);
    
    const humanAgentCost = additionalHumanAgents * 10;
    const aiAgentCost = additionalAiAgents * 3;
    const workspaceCost = additionalWorkspaces * 15;
    
    return humanAgentCost + aiAgentCost + workspaceCost;
  };

  const getCalculatorTotalCost = () => {
    const licenseCost = calculatorBilling === 'yearly' ? 299 : 29.99;
    const usageCost = calculateUsageCost();
    const addonsCost = calculateAddonsCost();
    const monthlyTotal = (licenseCost + usageCost + addonsCost);
    return calculatorBilling === 'yearly' ? monthlyTotal + (usageCost + addonsCost) * 11 : monthlyTotal;
  };

  if (!translations && isLoading) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-12 bg-gray-200 rounded mb-8"></div>
            <div className="h-96 bg-gray-200 rounded"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {getText('seachat.pricing.calculator.title', 'Usage Calculator')}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {getText('seachat.pricing.calculator.description', 'Estimate your monthly costs based on your usage needs')}
          </p>
          
          {/* Calculator Billing Toggle */}
          <div className="flex items-center justify-center mb-6">
            <span className={`mr-3 text-lg ${calculatorBilling === 'monthly' ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>
              {getText('seachat.pricing.billing.monthly', 'Monthly')}
            </span>
            <button
              onClick={() => setCalculatorBilling(calculatorBilling === 'monthly' ? 'yearly' : 'monthly')}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-orange-500 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  calculatorBilling === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`ml-3 text-lg ${calculatorBilling === 'yearly' ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>
              {getText('seachat.pricing.billing.yearly', 'Yearly')}
            </span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-8 shadow-xl">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Model Selection */}
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-4">
                {getText('seachat.pricing.calculator.modelSelect', 'Select AI Model')}
              </label>
              <select 
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                className="w-full p-4 rounded-xl border border-orange-200 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-lg"
              >
                {pricingData.pricing
                  .filter(model => model.plans.includes('Premium'))
                  .map(model => (
                    <option key={model.model_name} value={model.model_name}>
                      {model.model_name}
                    </option>
                  ))
                }
              </select>
              <div className="mt-2 text-sm text-gray-600">
                {(() => {
                  const model = pricingData.pricing.find(p => p.model_name === selectedModel);
                  return model ? (
                    <div className="space-y-1">
                      {model.per_text_response ? (
                        <div>${model.per_text_response.toFixed(3)} {getText('seachat.pricing.calculator.perChatResponse', 'per chat response')}</div>
                      ) : (
                        <div className="text-gray-500 italic">{getText('seachat.pricing.calculator.voiceOnly', 'Voice only model')}</div>
                      )}
                      <div>
                        <div className="font-medium text-gray-700 mb-1">{getText('seachat.pricing.calculator.voicePricing', 'Voice pricing')}:</div>
                        <div className="ml-2 space-y-0.5">
                          <div>${model.per_voice_minute.standard.toFixed(2)} {getText('seachat.pricing.calculator.perVoiceMinute', 'per voice minute')} ({getText('seachat.pricing.calculator.standardVoice', 'Standard')})</div>
                          <div>${model.per_voice_minute.premium.toFixed(2)} {getText('seachat.pricing.calculator.perVoiceMinute', 'per voice minute')} ({getText('seachat.pricing.calculator.premiumVoice', 'Premium')})</div>
                        </div>
                      </div>
                    </div>
                  ) : null;
                })()}
              </div>
            </div>

            {/* Usage Summary */}
            <div className="bg-white rounded-xl p-6 border border-orange-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{getText('seachat.pricing.calculator.priceBreakdown', 'Price Breakdown')}</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">{calculatorBilling === 'yearly' ? getText('seachat.pricing.calculator.licenseYearly', 'License Fee (Yearly)') : getText('seachat.pricing.calculator.licenseFee', 'License Fee')}</span>
                  <span className="font-semibold">
                    ${calculatorBilling === 'yearly' ? '299.00' : '29.99'}
                  </span>
                </div>
                {calculatorBilling === 'yearly' && (
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">{getText('seachat.pricing.calculator.usageCostYearly', 'Usage Cost (Yearly)')}</span>
                    <span className="font-semibold">${(calculateUsageCost() * 12).toFixed(2)}</span>
                  </div>
                )}
                {calculatorBilling === 'monthly' && (
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">{getText('seachat.pricing.calculator.usageCost', 'Usage Cost')}</span>
                    <span className="font-semibold">${calculateUsageCost().toFixed(2)}</span>
                  </div>
                )}
                {calculatorBilling === 'yearly' && (
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">{getText('seachat.pricing.calculator.addOnsCostYearly', 'Add-ons Cost (Yearly)')}</span>
                    <span className="font-semibold">${(calculateAddonsCost() * 12).toFixed(2)}</span>
                  </div>
                )}
                {calculatorBilling === 'monthly' && (
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">{getText('seachat.pricing.calculator.addOnsCost', 'Add-ons Cost')}</span>
                    <span className="font-semibold">${calculateAddonsCost().toFixed(2)}</span>
                  </div>
                )}
                <div className="border-t border-orange-200 pt-3">
                  <div className="flex justify-between items-center text-xl">
                    <span className="font-bold text-gray-900">{calculatorBilling === 'yearly' ? getText('seachat.pricing.calculator.totalPerYear', 'Total per Year') : getText('seachat.pricing.calculator.totalPerMonth', 'Total per Month')}</span>
                    <span className="font-bold text-orange-600">${getCalculatorTotalCost().toFixed(2)}</span>
                  </div>
                  {calculatorBilling === 'yearly' && (
                    <div className="flex justify-between items-center text-sm mt-2">
                      <span className="text-gray-500">{getText('seachat.pricing.calculator.averagePerMonth', 'Average per month')}</span>
                      <span className="text-gray-700 font-medium">${(getCalculatorTotalCost() / 12).toFixed(2)}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Usage Sliders */}
          <div className="space-y-8">
            {/* AI Usage Section */}
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-6">{getText('seachat.pricing.calculator.aiUsage', 'AI Usage')}</h4>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-4">
                    {getText('seachat.pricing.calculator.chatResponses', 'Chat Responses')}: <span className="text-orange-600">{chatResponses.toLocaleString()}</span>
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="10000"
                    step="100"
                    value={chatResponses}
                    onChange={(e) => setChatResponses(parseInt(e.target.value))}
                    className="w-full h-3 bg-orange-200 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #fb923c 0%, #fb923c ${(chatResponses / 10000) * 100}%, #fed7aa ${(chatResponses / 10000) * 100}%, #fed7aa 100%)`
                    }}
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>0</span>
                    <span>10,000+</span>
                  </div>
                  <div className="mt-3 text-center">
                    <div className="bg-white rounded-lg p-3 border border-orange-300">
                      <div className="text-sm text-gray-600 mb-1">{getText('seachat.pricing.calculator.chatCost', 'Chat Cost')}</div>
                      <div className="text-xl font-bold text-orange-600">
                        ${(() => {
                          const model = pricingData.pricing.find(p => p.model_name === selectedModel);
                          return model && model.per_text_response ? (chatResponses * model.per_text_response).toFixed(2) : '0.00';
                        })()}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-4">
                    {getText('seachat.pricing.calculator.voiceMinutes', 'Voice Minutes')}: <span className="text-orange-600">{voiceMinutes.toLocaleString()}</span>
                    <div className="text-sm text-gray-500 mt-1">{getText('seachat.pricing.calculator.voiceMinutesNote', 'AI voice conversations and phone calls')}</div>
                  </label>
                  
                  {/* Voice Quality Selection */}
                  <div className="mb-4">
                    <div className="flex items-center space-x-6">
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="voiceQuality"
                          value="standard"
                          checked={voiceQuality === 'standard'}
                          onChange={(e) => setVoiceQuality(e.target.value as 'standard' | 'premium')}
                          className="mr-2 text-orange-600 focus:ring-orange-500"
                        />
                        <span className="text-sm font-medium text-gray-700">{getText('seachat.pricing.calculator.standardVoice', 'Standard')}</span>
                      </label>
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="voiceQuality"
                          value="premium"
                          checked={voiceQuality === 'premium'}
                          onChange={(e) => setVoiceQuality(e.target.value as 'standard' | 'premium')}
                          className="mr-2 text-orange-600 focus:ring-orange-500"
                        />
                        <span className="text-sm font-medium text-gray-700">{getText('seachat.pricing.calculator.premiumVoice', 'Premium')}</span>
                      </label>
                    </div>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="2000"
                    step="10"
                    value={voiceMinutes}
                    onChange={(e) => setVoiceMinutes(parseInt(e.target.value))}
                    className="w-full h-3 bg-orange-200 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #fb923c 0%, #fb923c ${(voiceMinutes / 2000) * 100}%, #fed7aa ${(voiceMinutes / 2000) * 100}%, #fed7aa 100%)`
                    }}
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>0</span>
                    <span>2,000+</span>
                  </div>
                  <div className="mt-3 text-center">
                    <div className="bg-white rounded-lg p-3 border border-orange-300">
                      <div className="text-sm text-gray-600 mb-1">{getText('seachat.pricing.calculator.voiceCost', 'Voice Cost')}</div>
                      <div className="text-xl font-bold text-orange-600">
                        ${(() => {
                          const model = pricingData.pricing.find(p => p.model_name === selectedModel);
                          return model ? (voiceMinutes * model.per_voice_minute[voiceQuality]).toFixed(2) : '0.00';
                        })()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Add-ons Section */}
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-6">{getText('seachat.pricing.calculator.additionalResources', 'Additional Resources')}</h4>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-base font-semibold text-gray-900 mb-3">
                    {getText('seachat.pricing.calculator.humanAgents', 'Human Agents')}: <span className="text-orange-600">{humanAgents}</span>
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="20"
                    step="1"
                    value={humanAgents}
                    onChange={(e) => setHumanAgents(parseInt(e.target.value))}
                    className="w-full h-3 bg-orange-200 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #fb923c 0%, #fb923c ${((humanAgents - 1) / 19) * 100}%, #fed7aa ${((humanAgents - 1) / 19) * 100}%, #fed7aa 100%)`
                    }}
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>1</span>
                    <span>20+</span>
                  </div>
                  <div className="mt-3 text-center">
                    <div className="bg-white rounded-lg p-3 border border-orange-300">
                      <div className="text-xs text-gray-500 mb-1">{getText('seachat.pricing.calculator.included', 'Included')}: 4</div>
                      <div className="text-sm text-gray-600 mb-1">
                        {getText('seachat.pricing.calculator.extra', 'Extra')}: {Math.max(0, humanAgents - 4)} × $10
                      </div>
                      <div className="text-lg font-bold text-orange-600">
                        ${Math.max(0, humanAgents - 4) * 10}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-base font-semibold text-gray-900 mb-3">
                    {getText('seachat.pricing.calculator.aiAgents', 'AI Agents')}: <span className="text-orange-600">{aiAgents}</span>
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="30"
                    step="1"
                    value={aiAgents}
                    onChange={(e) => setAiAgents(parseInt(e.target.value))}
                    className="w-full h-3 bg-orange-200 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #fb923c 0%, #fb923c ${((aiAgents - 1) / 29) * 100}%, #fed7aa ${((aiAgents - 1) / 29) * 100}%, #fed7aa 100%)`
                    }}
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>1</span>
                    <span>30+</span>
                  </div>
                  <div className="mt-3 text-center">
                    <div className="bg-white rounded-lg p-3 border border-orange-300">
                      <div className="text-xs text-gray-500 mb-1">{getText('seachat.pricing.calculator.included', 'Included')}: 10</div>
                      <div className="text-sm text-gray-600 mb-1">
                        {getText('seachat.pricing.calculator.extra', 'Extra')}: {Math.max(0, aiAgents - 10)} × $3
                      </div>
                      <div className="text-lg font-bold text-orange-600">
                        ${Math.max(0, aiAgents - 10) * 3}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-base font-semibold text-gray-900 mb-3">
                    {getText('seachat.pricing.calculator.workspaces', 'Workspaces')}: <span className="text-orange-600">{workspaces}</span>
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    step="1"
                    value={workspaces}
                    onChange={(e) => setWorkspaces(parseInt(e.target.value))}
                    className="w-full h-3 bg-orange-200 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #fb923c 0%, #fb923c ${((workspaces - 1) / 9) * 100}%, #fed7aa ${((workspaces - 1) / 9) * 100}%, #fed7aa 100%)`
                    }}
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>1</span>
                    <span>10+</span>
                  </div>
                  <div className="mt-3 text-center">
                    <div className="bg-white rounded-lg p-3 border border-orange-300">
                      <div className="text-xs text-gray-500 mb-1">{getText('seachat.pricing.calculator.included', 'Included')}: 2</div>
                      <div className="text-sm text-gray-600 mb-1">
                        {getText('seachat.pricing.calculator.extra', 'Extra')}: {Math.max(0, workspaces - 2)} × $15
                      </div>
                      <div className="text-lg font-bold text-orange-600">
                        ${Math.max(0, workspaces - 2) * 15}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              {getText('seachat.pricing.calculator.disclaimer', 'Estimated costs based on your selected usage. Actual costs may vary.')}
              <br />{getText('seachat.pricing.calculator.disclaimerDetails', 'Premium plan includes the features shown above as base allocation.')}
            </p>
            <div className="mt-4 bg-white rounded-lg p-4 text-sm">
              <div className="font-semibold text-gray-900 mb-2">{getText('seachat.pricing.calculator.planIncludes', 'Premium Plan Base Includes:')}</div>
              <div className="grid md:grid-cols-3 gap-4 text-left">
                <div>• {getText('seachat.pricing.calculator.planIncludesHuman', '4 Human Agents')}</div>
                <div>• {getText('seachat.pricing.calculator.planIncludesAI', '10 AI Agents')}</div>
                <div>• {getText('seachat.pricing.calculator.planIncludesWorkspaces', '2 Workspaces')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeaChatPricingCalculator;
import { useState } from 'react';
import { Check, Zap, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SupportPlan from '../../components/SupportPlan';

const PricingPage = () => {
  const { t } = useTranslation();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedModel, setSelectedModel] = useState('ChatGPT-4o mini');
  const [chatResponses, setChatResponses] = useState(1000);
  const [voiceMinutes, setVoiceMinutes] = useState(100);
  const [humanAgents, setHumanAgents] = useState(4);
  const [aiAgents, setAiAgents] = useState(10);
  const [workspaces, setWorkspaces] = useState(2);
  const [calculatorBilling, setCalculatorBilling] = useState<'monthly' | 'yearly'>('monthly');

  const pricingData = {
    "pricing": [
      {
        "model_name": "ChatGPT-3.5-turbo",
        "per_text_response": 0.01,
        "per_voice_minute": 0.15,
        "plans": ["Standard"]
      },
      {
        "model_name": "ChatGPT-4o mini",
        "per_text_response": 0.006,
        "per_voice_minute": 0.12,
        "plans": ["Premium", "Enterprise"]
      },
      {
        "model_name": "ChatGPT-4o",
        "per_text_response": 0.08,
        "per_voice_minute": 0.80,
        "plans": ["Premium", "Enterprise"]
      },
      {
        "model_name": "Mistral-large",
        "per_text_response": 0.08,
        "per_voice_minute": 0.80,
        "plans": ["Premium", "Enterprise"]
      }
    ]
  };

  const getPremiumPrice = () => {
    return billingCycle === 'yearly' ? 299 : 29.99;
  };

  const calculateUsageCost = () => {
    const model = pricingData.pricing.find(p => p.model_name === selectedModel);
    if (!model) return 0;
    
    const textCost = chatResponses * model.per_text_response;
    const voiceCost = voiceMinutes * model.per_voice_minute;
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

  const plans = [
    {
      id: 'free',
      name: t('seachat.pricingPage.plans.free.name'),
      tagline: t('seachat.pricingPage.plans.free.tagline'),
      description: t('seachat.pricingPage.plans.free.description'),
      price: 0,
      originalPrice: 0,
      features: t('seachat.pricingPage.plans.free.features', { returnObjects: true }) as any[],
      buttonText: t('seachat.pricingPage.plans.free.buttonText'),
      buttonStyle: 'bg-purple-600 hover:bg-purple-700 text-white',
      cardStyle: 'bg-gradient-to-br from-purple-400 to-purple-600 text-white',
      highlight: false
    },
    {
      id: 'premium',
      name: t('seachat.pricingPage.plans.premium.name'),
      tagline: t('seachat.pricingPage.plans.premium.tagline'),
      description: t('seachat.pricingPage.plans.premium.description'),
      price: getPremiumPrice(),
      originalPrice: billingCycle === 'yearly' ? 29.99 : 0,
      features: t('seachat.pricingPage.plans.premium.features', { returnObjects: true }) as any[],
      buttonText: t('seachat.pricingPage.plans.premium.buttonText'),
      buttonStyle: 'bg-orange-500 hover:bg-orange-600 text-white',
      cardStyle: 'bg-gradient-to-br from-orange-300 to-orange-500 text-white',
      badge: t('seachat.pricingPage.plans.premium.badge'),
      highlight: true
    },
    {
      id: 'enterprise',
      name: t('seachat.pricingPage.plans.enterprise.name'),
      tagline: t('seachat.pricingPage.plans.enterprise.tagline'),
      description: t('seachat.pricingPage.plans.enterprise.description'),
      price: null,
      originalPrice: 0,
      features: t('seachat.pricingPage.plans.enterprise.features', { returnObjects: true }) as any[],
      buttonText: t('seachat.pricingPage.plans.enterprise.buttonText'),
      buttonStyle: 'bg-green-500 hover:bg-green-600 text-white',
      cardStyle: 'bg-gradient-to-br from-green-400 to-green-600 text-white'
    }
  ];

  // Convert features array to the expected structure
  const processedPlans = plans.map(plan => ({
    ...plan,
    features: (plan.features as any[]).map(feature => ({
      description: typeof feature === 'string' ? feature : feature.description,
      sub_features: typeof feature === 'string' ? [] : (feature.sub_features || [])
    }))
  }));

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-800 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t('seachat.pricingPage.hero.title')}
          </h1>
          <p className="text-2xl text-blue-200 mb-8 max-w-4xl mx-auto">
            {t('seachat.pricingPage.hero.subtitle')}
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-8">
            <span className={`mr-3 ${billingCycle === 'monthly' ? 'text-white' : 'text-blue-300'}`}>Monthly</span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`ml-3 ${billingCycle === 'yearly' ? 'text-white' : 'text-blue-300'}`}>
              Yearly <span className="text-green-300 font-semibold">(Save 2 Months)</span>
            </span>
          </div>
        </div>
      </section>


      {/* Pricing Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-8">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-3xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                  plan.highlight ? 'scale-105 ring-4 ring-orange-200' : ''
                }`}
              >

                {/* Card Header with gradient background */}
                <div className={`${plan.cardStyle || 'bg-white'} p-6 text-center`}>
                  {plan.tagline && (
                    <p className="text-sm font-medium mb-2 opacity-90">{plan.tagline}</p>
                  )}
                  <h3 className="text-3xl font-bold mb-4">{plan.name}</h3>
                  
                  <div className="mb-4">
                    {plan.id === 'free' ? (
                      <div className="flex items-center justify-center">
                        <span className="text-5xl font-bold">$0</span>
                      </div>
                    ) : plan.id === 'enterprise' ? (
                      <div className="py-4">
                        <button className="bg-white bg-opacity-20 hover:bg-opacity-30 px-6 py-3 rounded-lg font-semibold transition-all">
                          Contact Us
                        </button>
                      </div>
                    ) : (
                      <div>
                        <div className="flex items-center justify-center">
                          <span className="text-5xl font-bold">
                            ${billingCycle === 'yearly' ? plan.price : plan.price}
                          </span>
                          <span className="text-xl ml-2">
                            /{billingCycle === 'yearly' ? 'year' : 'month'}
                          </span>
                        </div>
                        {billingCycle === 'yearly' && (
                          <div className="mt-2">
                            <span className="text-sm opacity-75">Save 2 months vs monthly billing</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Body */}
                <div className="bg-white p-6">
                  <div className="max-h-96 overflow-y-auto">
                    <ul className="space-y-2">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="">
                          <div className="flex items-start space-x-3">
                            <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-700">{feature.description}</span>
                          </div>
                          {feature.sub_features && feature.sub_features.length > 0 && (
                            <ul className="ml-7 mt-1 space-y-1">
                              {feature.sub_features.map((subFeature: any, subIndex: number) => (
                                <li key={subIndex} className="flex items-start space-x-2">
                                  <span className="w-2 h-2 bg-gray-400 rounded-full flex-shrink-0 mt-2" />
                                  <span className="text-xs text-gray-600">{subFeature.description}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {plan.id !== 'enterprise' && (
                    <div className="mt-6">
                      <a 
                        href="https://chat.seasalt.ai/gpt/signup" 
                        className={`w-full py-3 px-6 rounded-lg font-semibold transition-all transform hover:scale-105 text-center inline-block ${plan.buttonStyle}`}
                      >
                        {plan.buttonText}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* Pricing Note */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">
              * Prices vary by country. The prices listed are for the United States. For other countries, please contact us.
            </p>
          </div>
        </div>
      </section>

      {/* Usage Calculator */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('seachat.pricingPage.usageCalculator.title')}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {t('seachat.pricingPage.usageCalculator.subtitle')}
            </p>
            
            {/* Calculator Billing Toggle */}
            <div className="flex items-center justify-center mb-6">
              <span className={`mr-3 text-lg ${calculatorBilling === 'monthly' ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>{t('seachat.pricingPage.billingToggle.monthly')}</span>
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
                {t('seachat.pricingPage.billingToggle.yearly')}
              </span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-8 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Model Selection */}
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-4">
                  {t('seachat.pricingPage.usageCalculator.selectModel')}
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
                        <div>${model.per_text_response.toFixed(3)} per chat response</div>
                        <div>${model.per_voice_minute.toFixed(2)} per voice minute</div>
                      </div>
                    ) : null;
                  })()}
                </div>
              </div>

              {/* Usage Summary */}
              <div className="bg-white rounded-xl p-6 border border-orange-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t(`seachat.pricingPage.usageCalculator.costBreakdown.${calculatorBilling}`)}</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">{t(`seachat.pricingPage.usageCalculator.licenseFee.${calculatorBilling}`)}</span>
                    <span className="font-semibold">
                      ${calculatorBilling === 'yearly' ? '299.00' : '29.99'}
                    </span>
                  </div>
                  {calculatorBilling === 'yearly' && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">{t('seachat.pricingPage.usageCalculator.usageCost.yearly')}</span>
                      <span className="font-semibold">${(calculateUsageCost() * 12).toFixed(2)}</span>
                    </div>
                  )}
                  {calculatorBilling === 'monthly' && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">{t('seachat.pricingPage.usageCalculator.usageCost.monthly')}</span>
                      <span className="font-semibold">${calculateUsageCost().toFixed(2)}</span>
                    </div>
                  )}
                  {calculatorBilling === 'yearly' && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">{t('seachat.pricingPage.usageCalculator.addonsCost.yearly')}</span>
                      <span className="font-semibold">${(calculateAddonsCost() * 12).toFixed(2)}</span>
                    </div>
                  )}
                  {calculatorBilling === 'monthly' && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">{t('seachat.pricingPage.usageCalculator.addonsCost.monthly')}</span>
                      <span className="font-semibold">${calculateAddonsCost().toFixed(2)}</span>
                    </div>
                  )}
                  <div className="border-t border-orange-200 pt-3">
                    <div className="flex justify-between items-center text-xl">
                      <span className="font-bold text-gray-900">{t(`seachat.pricingPage.usageCalculator.total.${calculatorBilling}`)}</span>
                      <span className="font-bold text-orange-600">${getCalculatorTotalCost().toFixed(2)}</span>
                    </div>
                    {calculatorBilling === 'yearly' && (
                      <div className="flex justify-between items-center text-sm mt-2">
                        <span className="text-gray-500">{t('seachat.pricingPage.usageCalculator.averagePerMonth')}</span>
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
                <h4 className="text-xl font-bold text-gray-900 mb-6">{t('seachat.pricingPage.usageCalculator.aiUsage.title')}</h4>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-lg font-semibold text-gray-900 mb-4">
                      {t('seachat.pricingPage.usageCalculator.aiUsage.chatResponses')}: <span className="text-orange-600">{chatResponses.toLocaleString()}</span>
                      <div className="text-sm text-gray-500 mt-1 opacity-0">Placeholder</div>
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="10000"
                      step="100"
                      value={chatResponses}
                      onChange={(e) => setChatResponses(parseInt(e.target.value))}
                      className="w-full h-3 bg-orange-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-2">
                      <span>0</span>
                      <span>10,000+</span>
                    </div>
                    <div className="mt-3 text-center">
                      <div className="bg-white rounded-lg p-3 border border-orange-300">
                        <div className="text-sm text-gray-600 mb-1">{t('seachat.pricingPage.usageCalculator.aiUsage.chatCost')}</div>
                        <div className="text-xl font-bold text-orange-600">
                          ${(() => {
                            const model = pricingData.pricing.find(p => p.model_name === selectedModel);
                            return model ? (chatResponses * model.per_text_response).toFixed(2) : '0.00';
                          })()}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-lg font-semibold text-gray-900 mb-4">
                      {t('seachat.pricingPage.usageCalculator.aiUsage.voiceMinutes')}: <span className="text-orange-600">{voiceMinutes.toLocaleString()}</span>
                      <div className="text-sm text-gray-500 mt-1">{t('seachat.pricingPage.usageCalculator.aiUsage.voiceDisclaimer')}</div>
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="2000"
                      step="10"
                      value={voiceMinutes}
                      onChange={(e) => setVoiceMinutes(parseInt(e.target.value))}
                      className="w-full h-3 bg-orange-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-2">
                      <span>0</span>
                      <span>2,000+</span>
                    </div>
                    <div className="mt-3 text-center">
                      <div className="bg-white rounded-lg p-3 border border-orange-300">
                        <div className="text-sm text-gray-600 mb-1">{t('seachat.pricingPage.usageCalculator.aiUsage.voiceCost')}</div>
                        <div className="text-xl font-bold text-orange-600">
                          ${(() => {
                            const model = pricingData.pricing.find(p => p.model_name === selectedModel);
                            return model ? (voiceMinutes * model.per_voice_minute).toFixed(2) : '0.00';
                          })()}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Add-ons Section */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-6">Additional Resources</h4>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-base font-semibold text-gray-900 mb-3">
                      Human Agents: <span className="text-orange-600">{humanAgents}</span>
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="20"
                      step="1"
                      value={humanAgents}
                      onChange={(e) => setHumanAgents(parseInt(e.target.value))}
                      className="w-full h-3 bg-orange-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-2">
                      <span>1</span>
                      <span>20+</span>
                    </div>
                    <div className="mt-3 text-center">
                      <div className="bg-white rounded-lg p-3 border border-orange-300">
                        <div className="text-xs text-gray-500 mb-1">Included: 4</div>
                        <div className="text-sm text-gray-600 mb-1">
                          Extra: {Math.max(0, humanAgents - 4)} × $10
                        </div>
                        <div className="text-lg font-bold text-orange-600">
                          ${Math.max(0, humanAgents - 4) * 10}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-base font-semibold text-gray-900 mb-3">
                      AI Agents: <span className="text-orange-600">{aiAgents}</span>
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="30"
                      step="1"
                      value={aiAgents}
                      onChange={(e) => setAiAgents(parseInt(e.target.value))}
                      className="w-full h-3 bg-orange-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-2">
                      <span>1</span>
                      <span>30+</span>
                    </div>
                    <div className="mt-3 text-center">
                      <div className="bg-white rounded-lg p-3 border border-orange-300">
                        <div className="text-xs text-gray-500 mb-1">Included: 10</div>
                        <div className="text-sm text-gray-600 mb-1">
                          Extra: {Math.max(0, aiAgents - 10)} × $3
                        </div>
                        <div className="text-lg font-bold text-orange-600">
                          ${Math.max(0, aiAgents - 10) * 3}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-base font-semibold text-gray-900 mb-3">
                      Workspaces: <span className="text-orange-600">{workspaces}</span>
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      step="1"
                      value={workspaces}
                      onChange={(e) => setWorkspaces(parseInt(e.target.value))}
                      className="w-full h-3 bg-orange-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-2">
                      <span>1</span>
                      <span>10+</span>
                    </div>
                    <div className="mt-3 text-center">
                      <div className="bg-white rounded-lg p-3 border border-orange-300">
                        <div className="text-xs text-gray-500 mb-1">Included: 2</div>
                        <div className="text-sm text-gray-600 mb-1">
                          Extra: {Math.max(0, workspaces - 2)} × $15
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
                * Usage costs are calculated based on actual consumption. The Premium plan includes:
                <br />License fee (${calculatorBilling === 'yearly' ? '$299/year' : '$29.99/month'}) + AI Usage (pay per use) + Additional resources beyond the included limits.
              </p>
              <div className="mt-4 bg-white rounded-lg p-4 text-sm">
                <div className="font-semibold text-gray-900 mb-2">Premium Plan Includes:</div>
                <div className="grid md:grid-cols-3 gap-4 text-left">
                  <div>• 4 Human Agents</div>
                  <div>• 10 AI Agents</div>
                  <div>• 2 Workspaces</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('seachat.pricingPage.featureComparison.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('seachat.pricingPage.featureComparison.subtitle')}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">{t('seachat.pricingPage.featureComparison.headers.features')}</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-purple-600">{t('seachat.pricingPage.plans.free.name')}</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-orange-600">{t('seachat.pricingPage.plans.premium.name')}</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-green-600">{t('seachat.pricingPage.plans.enterprise.name')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    ['Human Agents', '1 agent', '4 users', 'Unlimited'],
                    ['AI Agents', '1 agent (100 replies)', '10 agents (unlimited)', 'Custom build'],
                    ['AI Models', 'ChatGPT-3.5', 'ChatGPT-4o, Mistral', 'Advanced models'],
                    ['Knowledge Base', '20 docs (200KB)', '5000 docs (10MB each)', 'Unlimited'],
                    ['Voice AI Agents', '❌', '✅', '✅'],
                    ['Phone Calls', '❌', '✅ Inbound/Outbound', '✅'],
                    ['Automation', '❌', '✅ Advanced', '✅ Custom'],
                    ['API Integration', '❌', '✅', '✅ Custom'],
                    ['Workspaces', '1', '2 ($15 each extra)', 'Multiple'],
                    ['Support', 'Community', 'Email + Phone', 'Dedicated technical']
                  ].map(([feature, free, premium, enterprise], index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{feature}</td>
                      <td className="px-6 py-4 text-sm text-gray-600 text-center">{free}</td>
                      <td className="px-6 py-4 text-sm text-gray-600 text-center">{premium}</td>
                      <td className="px-6 py-4 text-sm text-gray-600 text-center">{enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Support Plan */}
      <SupportPlan />

      {/* Enterprise CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Zap className="w-12 h-12 text-yellow-300 mr-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              {t('seachat.pricingPage.enterpriseCta.title')}
            </h2>
          </div>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            {t('seachat.pricingPage.enterpriseCta.subtitle')}
          </p>
          <div className="flex justify-center">
            <a 
              href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all flex items-center justify-center"
            >
              {t('seachat.pricingPage.enterpriseCta.button')}
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('seachat.pricingPage.faq.title')}
            </h2>
          </div>

          <div className="space-y-8">
            {[
              {
                question: "Is the free plan really free forever?",
                answer: "Yes! Our Truly Free plan includes 1 human agent for life with unlimited conversations, chat history, and contacts. Plus, you get 1 AI agent with 100 lifetime AI replies to try our AI features. No credit card required, no hidden fees."
              },
              {
                question: "What's the difference between monthly and yearly billing?",
                answer: "With yearly billing, you save 2 months on the Premium plan ($299/year vs $359.88/year if paid monthly). The billing cycle only affects the Premium plan - the Free plan is always free and Enterprise is custom pricing."
              },
              {
                question: "Can I upgrade or downgrade my plan anytime?",
                answer: "Absolutely! You can change your plan at any time. Upgrades take effect immediately, and downgrades take effect at the end of your current billing cycle."
              },
              {
                question: "What happens if I exceed my AI reply limit on the Free plan?",
                answer: "The Free plan includes 100 lifetime AI replies. Once you reach this limit, you'll need to upgrade to Premium for unlimited AI responses. Your human agent functionality remains unlimited on all plans."
              },
              {
                question: "How does the Premium plan pricing work?",
                answer: "Premium has two components: a license fee ($29.99/month or $299/year) plus usage-based pricing. Usage includes AI responses starting at $0.006 each (ChatGPT-4o mini) and voice calls at $0.12/minute. Additional human users cost $10/month each, and extra workspaces cost $15/month each."
              },
              {
                question: "What happens to my data if I cancel?",
                answer: "You own your data. You can export all your chat history, contacts, and knowledge base content at any time, even on the free plan. We believe in data freedom and transparency."
              },
              {
                question: "Do you offer custom pricing for large enterprises?",
                answer: "Yes! Our Enterprise plan offers custom builds, multiple AI services perfect for agencies, custom API integrations, and professional design guidelines with technical support. Contact our sales team for a personalized quote."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
import { useState } from 'react';
import { Check, Zap, ArrowRight, MessageSquare, Bot, Users, Clock, Globe, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SupportPlan from '../../components/SupportPlan';
import { MEETING_URL, getMeetingUrl } from '../../constants/urls';
import SEOHelmet from '../../components/SEOHelmet';
import { getSEOData, getCanonicalUrl } from '../../utils/seo';

const PricingPage = () => {
  const { t, i18n } = useTranslation('seachat');
  
  // Generate SEO data using standardized utility
  const seoData = getSEOData(t, 'seachat.pricing', {
    canonicalUrl: getCanonicalUrl(i18n.language, '/seachat/pricing')
  });
  
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
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
          "premium": 0.15  // Same price for both tiers for 3.5-turbo
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

  const getPremiumPrice = () => {
    return billingCycle === 'yearly' ? 299 : 29.99;
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

  const plans = [
    {
      id: 'free',
      name: t('seachat.pricing.plans.free.name'),
      tagline: t('seachat.pricing.plans.free.tagline'),
      description: t('seachat.pricing.plans.free.description'),
      price: 0,
      originalPrice: 0,
      features: [
        {
          description: t('seachat.pricing.plans.free.features.humanAgent'),
          sub_features: []
        },
        {
          description: t('seachat.pricing.plans.free.features.unlimitedHumanChats'),
          sub_features: []
        },
        {
          description: t('seachat.pricing.plans.free.features.unlimitedContacts'),
          sub_features: []
        },
        {
          description: t('seachat.pricing.plans.free.features.unlimitedHistory'),
          sub_features: []
        },
        {
          description: t('seachat.pricing.plans.free.features.exportHistory'),
          sub_features: []
        },
        {
          description: t('seachat.pricing.plans.free.features.channels'),
          sub_features: []
        },
        {
          description: t('seachat.pricing.plans.free.features.integrations'),
          sub_features: []
        },
        {
          description: t('seachat.pricing.plans.free.features.aiAgent'),
          sub_features: [
            { description: t('seachat.pricing.plans.free.features.aiAgentModel'), sub_features: [] }
          ]
        },
        {
          description: t('seachat.pricing.plans.free.features.knowledgeBase'),
          sub_features: []
        },
        {
          description: t('seachat.pricing.plans.free.features.workspace'),
          sub_features: []
        }
      ],
      buttonText: t('seachat.pricing.plans.free.buttonText'),
      buttonStyle: 'bg-purple-600 hover:bg-purple-700 text-white',
      cardStyle: 'bg-gradient-to-br from-purple-400 to-purple-600 text-white',
      highlight: false
    },
    {
      id: 'premium',
      name: t('seachat.pricing.plans.premium.name'),
      tagline: t('seachat.pricing.plans.premium.tagline'),
      description: t('seachat.pricing.plans.premium.description'),
      month: t('seachat.pricing.plans.premium.month'),
      year: t('seachat.pricing.plans.premium.year'),
      year_description: t('seachat.pricing.plans.premium.year_description'),
      price: getPremiumPrice(),
      originalPrice: billingCycle === 'yearly' ? 29.99 : 0,
      features: [
        {
          description: t('seachat.pricing.plans.premium.features.humanAgent'),
          sub_features: [
            { description: t('seachat.pricing.plans.premium.features.supportHumanAgent'), sub_features: [] },
            { description: t('seachat.pricing.plans.premium.features.assignAgent'), sub_features: [] },
            { description: t('seachat.pricing.plans.premium.features.unreadCounter'), sub_features: [] },
            { description: t('seachat.pricing.plans.premium.features.liveTransferToHuman'), sub_features: [] },
            { description: t('seachat.pricing.plans.premium.features.liveTransferToAI'), sub_features: [] }
          ]
        },
        { description: t('seachat.pricing.plans.premium.features.unlimitedHumanChats'), sub_features: [] },
        { description: t('seachat.pricing.plans.premium.features.unlimitedContacts'), sub_features: [] },
        { description: t('seachat.pricing.plans.premium.features.unlimitedHistory'), sub_features: [] },
        { description: t('seachat.pricing.plans.premium.features.exportHistory'), sub_features: [] },
        { description: t('seachat.pricing.plans.premium.features.additionalChannels'), sub_features: [] },
        { description: t('seachat.pricing.plans.premium.features.additionalIntegrations'), sub_features: [] },
        {
          description: t('seachat.pricing.plans.premium.features.aiAgents'),
          sub_features: [
            { description: t('seachat.pricing.plans.premium.features.aiModels'), sub_features: [] },
            { description: t('seachat.pricing.plans.premium.features.knowledgeBase'), sub_features: [] },
            { description: t('seachat.pricing.plans.premium.features.chatSummary'), sub_features: [] },
            { description: t('seachat.pricing.plans.premium.features.agentPrivacy'), sub_features: [] },
            { description: t('seachat.pricing.plans.premium.features.contactCapture'), sub_features: [] }
          ]
        },
        { description: t('seachat.pricing.plans.premium.features.chatCost'), sub_features: [] },
        { description: t('seachat.pricing.plans.premium.features.voiceCost'), sub_features: [] },
        { description: t('seachat.pricing.plans.premium.features.workspaces'), sub_features: [] },
        {
          description: t('seachat.pricing.plans.premium.features.knowledgeBaseTitle'),
          sub_features: [
            { description: t('seachat.pricing.plans.premium.features.advancedSearch'), sub_features: [] },
            { description: t('seachat.pricing.plans.premium.features.fileTypes'), sub_features: [] }
          ]
        },
        {
          description: t('seachat.pricing.plans.premium.features.automationTitle'),
          sub_features: [
            { description: t('seachat.pricing.plans.premium.features.autoLabel'), sub_features: [] },
            { description: t('seachat.pricing.plans.premium.features.builtInActions'), sub_features: [] },
            { description: t('seachat.pricing.plans.premium.features.externalAPI'), sub_features: [] }
          ]
        },
        {
          description: t('seachat.pricing.plans.premium.features.voiceAgentsTitle'),
          sub_features: [
            { description: t('seachat.pricing.plans.premium.features.voiceMessages'), sub_features: [] },
            { description: t('seachat.pricing.plans.premium.features.phoneCalls'), sub_features: [] },
            { description: t('seachat.pricing.plans.premium.features.callDirection'), sub_features: [] },
            { description: t('seachat.pricing.plans.premium.features.transferAgent'), sub_features: [] },
            { description: t('seachat.pricing.plans.premium.features.callForwarding'), sub_features: [] },
            { description: t('seachat.pricing.plans.premium.features.sttLanguages'), sub_features: [] },
            { description: t('seachat.pricing.plans.premium.features.ttsLanguages'), sub_features: [] },
            { description: t('seachat.pricing.plans.premium.features.callRecording'), sub_features: [] },
            { description: t('seachat.pricing.plans.premium.features.callNotification'), sub_features: [] },
            { description: t('seachat.pricing.plans.premium.features.formTrackers'), sub_features: [] },
            { description: t('seachat.pricing.plans.premium.features.slotExtractors'), sub_features: [] }
          ]
        },
        {
          description: t('seachat.pricing.plans.premium.features.timezoneTitle'),
          sub_features: [
            { description: t('seachat.pricing.plans.premium.features.businessHours'), sub_features: [] },
            { description: t('seachat.pricing.plans.premium.features.appointmentBooking'), sub_features: [] }
          ]
        }
      ],
      buttonText: t('seachat.pricing.plans.premium.buttonText'),
      buttonStyle: 'bg-orange-500 hover:bg-orange-600 text-white',
      cardStyle: 'bg-gradient-to-br from-orange-300 to-orange-500 text-white',
      badge: t('seachat.pricing.plans.premium.badge'),
      highlight: true
    },
    {
      id: 'enterprise',
      name: t('seachat.pricing.plans.enterprise.name'),
      tagline: t('seachat.pricing.plans.enterprise.tagline'),
      description: t('seachat.pricing.plans.enterprise.description'),
      price: null,
      originalPrice: 0,
      features: [
        { description: t('seachat.pricing.plans.enterprise.features.premiumIncluded'), sub_features: [] },
        { description: t('seachat.pricing.plans.enterprise.features.customBuild'), sub_features: [] },
        { description: t('seachat.pricing.plans.enterprise.features.multipleWorkspaces'), sub_features: [] },
        { description: t('seachat.pricing.plans.enterprise.features.workspaceAgents'), sub_features: [] },
        { description: t('seachat.pricing.plans.enterprise.features.gpt4oRealtimeAPI'), sub_features: [] },
        { description: t('seachat.pricing.plans.enterprise.features.customAPI'), sub_features: [] },
        { description: t('seachat.pricing.plans.enterprise.features.fineTuning'), sub_features: [] }
      ],
      buttonText: t('seachat.pricing.plans.enterprise.buttonText'),
      buttonStyle: 'bg-green-500 hover:bg-green-600 text-white',
      cardStyle: 'bg-gradient-to-br from-green-400 to-green-600 text-white'
    }
  ];

  return (
    <>
      <SEOHelmet {...seoData} />
      <div className="pt-4">
        {/* Hero Section */}
      <section className="pt-16 pb-20 bg-gradient-to-br from-blue-900 via-purple-800 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t('pricing.hero.title')}
          </h1>
          <p className="text-2xl text-blue-200 mb-8 max-w-4xl mx-auto">
            {t('pricing.hero.subtitle')}
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-8">
            <span className={`mr-3 ${billingCycle === 'monthly' ? 'text-white' : 'text-blue-300'}`}>{t('seachat.pricing.billing.monthly')}</span>
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
              {t('seachat.pricing.billing.yearly')} <span className="text-green-300 font-semibold">({t('seachat.pricing.billing.save')})</span>
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
                          {plan.buttonText}
                        </button>
                      </div>
                    ) : (
                      <div>
                        <div className="flex items-center justify-center">
                          <span className="text-5xl font-bold">
                            ${billingCycle === 'yearly' ? plan.price : plan.price}
                          </span>
                          <span className="text-xl ml-2">
                            /{billingCycle === 'yearly' ? plan.year : plan.month}
                          </span>
                        </div>
                        {billingCycle === 'yearly' && (
                          <div className="mt-2">
                            <span className="text-sm opacity-75">${plan.year_description}</span>
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
                              {feature.sub_features.map((subFeature, subIndex) => (
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
              * {t('seachat.pricing.note')}
            </p>
          </div>
        </div>
      </section>

      {/* Usage Calculator */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('seachat.pricing.calculator.title')}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {t('seachat.pricing.calculator.description')}
            </p>
            
            {/* Calculator Billing Toggle */}
            <div className="flex items-center justify-center mb-6">
              <span className={`mr-3 text-lg ${calculatorBilling === 'monthly' ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>{t('seachat.pricing.billing.monthly')}</span>
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
                {t('seachat.pricing.billing.yearly')}
              </span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-8 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Model Selection */}
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-4">
                  {t('seachat.pricing.calculator.modelSelect')}
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
                          <div>${model.per_text_response.toFixed(3)} {t('seachat.pricing.calculator.perChatResponse')}</div>
                        ) : (
                          <div className="text-gray-500 italic">{t('seachat.pricing.calculator.voiceOnly')}</div>
                        )}
                        <div>
                          <div className="font-medium text-gray-700 mb-1">{t('seachat.pricing.calculator.voicePricing')}:</div>
                          <div className="ml-2 space-y-0.5">
                            <div>${model.per_voice_minute.standard.toFixed(2)} {t('seachat.pricing.calculator.perVoiceMinute')} ({t('seachat.pricing.calculator.standardVoice')})</div>
                            <div>${model.per_voice_minute.premium.toFixed(2)} {t('seachat.pricing.calculator.perVoiceMinute')} ({t('seachat.pricing.calculator.premiumVoice')})</div>
                          </div>
                        </div>
                      </div>
                    ) : null;
                  })()}
                </div>
              </div>

              {/* Usage Summary */}
              <div className="bg-white rounded-xl p-6 border border-orange-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('seachat.pricing.calculator.priceBreakdown')}</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">{calculatorBilling === 'yearly' ? t('seachat.pricing.calculator.licenseYearly') : t('seachat.pricing.calculator.licenseFee')}</span>
                    <span className="font-semibold">
                      ${calculatorBilling === 'yearly' ? '299.00' : '29.99'}
                    </span>
                  </div>
                  {calculatorBilling === 'yearly' && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">{t('seachat.pricing.calculator.usageCostYearly')}</span>
                      <span className="font-semibold">${(calculateUsageCost() * 12).toFixed(2)}</span>
                    </div>
                  )}
                  {calculatorBilling === 'monthly' && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">{t('seachat.pricing.calculator.usageCost')}</span>
                      <span className="font-semibold">${calculateUsageCost().toFixed(2)}</span>
                    </div>
                  )}
                  {calculatorBilling === 'yearly' && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">{t('seachat.pricing.calculator.addOnsCostYearly')}</span>
                      <span className="font-semibold">${(calculateAddonsCost() * 12).toFixed(2)}</span>
                    </div>
                  )}
                  {calculatorBilling === 'monthly' && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">{t('seachat.pricing.calculator.addOnsCost')}</span>
                      <span className="font-semibold">${calculateAddonsCost().toFixed(2)}</span>
                    </div>
                  )}
                  <div className="border-t border-orange-200 pt-3">
                    <div className="flex justify-between items-center text-xl">
                      <span className="font-bold text-gray-900">{calculatorBilling === 'yearly' ? t('seachat.pricing.calculator.totalPerYear') : t('seachat.pricing.calculator.totalPerMonth')}</span>
                      <span className="font-bold text-orange-600">${getCalculatorTotalCost().toFixed(2)}</span>
                    </div>
                    {calculatorBilling === 'yearly' && (
                      <div className="flex justify-between items-center text-sm mt-2">
                        <span className="text-gray-500">{t('seachat.pricing.calculator.averagePerMonth')}</span>
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
                <h4 className="text-xl font-bold text-gray-900 mb-6">{t('seachat.pricing.calculator.aiUsage')}</h4>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-lg font-semibold text-gray-900 mb-4">
                      {t('seachat.pricing.calculator.chatResponses')}: <span className="text-orange-600">{chatResponses.toLocaleString()}</span>
                      <div className="text-sm text-gray-500 mt-1 opacity-0">{t('seachat.pricing.calculator.placeholderText')}</div>
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
                        <div className="text-sm text-gray-600 mb-1">{t('seachat.pricing.calculator.chatCost')}</div>
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
                      {t('seachat.pricing.calculator.voiceMinutes')}: <span className="text-orange-600">{voiceMinutes.toLocaleString()}</span>
                      <div className="text-sm text-gray-500 mt-1">{t('seachat.pricing.calculator.voiceMinutesNote')}</div>
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
                          <span className="text-sm font-medium text-gray-700">{t('seachat.pricing.calculator.standardVoice')}</span>
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
                          <span className="text-sm font-medium text-gray-700">{t('seachat.pricing.calculator.premiumVoice')}</span>
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
                      className="w-full h-3 bg-orange-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-2">
                      <span>0</span>
                      <span>2,000+</span>
                    </div>
                    <div className="mt-3 text-center">
                      <div className="bg-white rounded-lg p-3 border border-orange-300">
                        <div className="text-sm text-gray-600 mb-1">{t('seachat.pricing.calculator.voiceCost')}</div>
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
                <h4 className="text-xl font-bold text-gray-900 mb-6">{t('seachat.pricing.calculator.additionalResources')}</h4>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-base font-semibold text-gray-900 mb-3">
                      {t('seachat.pricing.calculator.humanAgents')}: <span className="text-orange-600">{humanAgents}</span>
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
                        <div className="text-xs text-gray-500 mb-1">{t('seachat.pricing.calculator.included')}: 4</div>
                        <div className="text-sm text-gray-600 mb-1">
                          {t('seachat.pricing.calculator.extra')}: {Math.max(0, humanAgents - 4)} × $10
                        </div>
                        <div className="text-lg font-bold text-orange-600">
                          ${Math.max(0, humanAgents - 4) * 10}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-base font-semibold text-gray-900 mb-3">
                      {t('seachat.pricing.calculator.aiAgents')}: <span className="text-orange-600">{aiAgents}</span>
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
                        <div className="text-xs text-gray-500 mb-1">{t('seachat.pricing.calculator.included')}: 10</div>
                        <div className="text-sm text-gray-600 mb-1">
                          {t('seachat.pricing.calculator.extra')}: {Math.max(0, aiAgents - 10)} × $3
                        </div>
                        <div className="text-lg font-bold text-orange-600">
                          ${Math.max(0, aiAgents - 10) * 3}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-base font-semibold text-gray-900 mb-3">
                      {t('seachat.pricing.calculator.workspaces')}: <span className="text-orange-600">{workspaces}</span>
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
                        <div className="text-xs text-gray-500 mb-1">{t('seachat.pricing.calculator.included')}: 2</div>
                        <div className="text-sm text-gray-600 mb-1">
                          {t('seachat.pricing.calculator.extra')}: {Math.max(0, workspaces - 2)} × $15
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
                {t('seachat.pricing.calculator.disclaimer')}
                <br />{t('seachat.pricing.calculator.disclaimerDetails')}
              </p>
              <div className="mt-4 bg-white rounded-lg p-4 text-sm">
                <div className="font-semibold text-gray-900 mb-2">{t('seachat.pricing.calculator.planIncludes')}</div>
                <div className="grid md:grid-cols-3 gap-4 text-left">
                  <div>• {t('seachat.pricing.calculator.planIncludesHuman')}</div>
                  <div>• {t('seachat.pricing.calculator.planIncludesAI')}</div>
                  <div>• {t('seachat.pricing.calculator.planIncludesWorkspaces')}</div>
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
              {t('seachat.pricing.comparison.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('seachat.pricing.comparison.subtitle')}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">{t('seachat.pricing.comparison.featuresTitle')}</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-purple-600">{t('seachat.pricing.comparison.trulyFree')}</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-orange-600">{t('seachat.pricing.comparison.premium')}</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-green-600">{t('seachat.pricing.comparison.enterprise')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    {
                      feature: t('seachat.pricing.comparison.humanAgents'),
                      free: t('seachat.pricing.comparison.features.humanAgents.free'),
                      premium: t('seachat.pricing.comparison.features.humanAgents.premium'),
                      enterprise: t('seachat.pricing.comparison.features.humanAgents.enterprise')
                    },
                    {
                      feature: t('seachat.pricing.comparison.aiAgents'),
                      free: t('seachat.pricing.comparison.features.aiAgents.free'),
                      premium: t('seachat.pricing.comparison.features.aiAgents.premium'),
                      enterprise: t('seachat.pricing.comparison.features.aiAgents.enterprise')
                    },
                    {
                      feature: t('seachat.pricing.comparison.aiModels'),
                      free: t('seachat.pricing.comparison.features.aiModels.free'),
                      premium: t('seachat.pricing.comparison.features.aiModels.premium'),
                      enterprise: t('seachat.pricing.comparison.features.aiModels.enterprise')
                    },
                    {
                      feature: t('seachat.pricing.comparison.knowledgeBase'),
                      free: t('seachat.pricing.comparison.features.knowledgeBase.free'),
                      premium: t('seachat.pricing.comparison.features.knowledgeBase.premium'),
                      enterprise: t('seachat.pricing.comparison.features.knowledgeBase.enterprise')
                    },
                    {
                      feature: t('seachat.pricing.comparison.voiceAI'),
                      free: t('seachat.pricing.comparison.features.voiceAI.free'),
                      premium: t('seachat.pricing.comparison.features.voiceAI.premium'),
                      enterprise: t('seachat.pricing.comparison.features.voiceAI.enterprise')
                    },
                    {
                      feature: t('seachat.pricing.comparison.phoneCalls'),
                      free: t('seachat.pricing.comparison.features.phoneCalls.free'),
                      premium: t('seachat.pricing.comparison.features.phoneCalls.premium'),
                      enterprise: t('seachat.pricing.comparison.features.phoneCalls.enterprise')
                    },
                    {
                      feature: t('seachat.pricing.comparison.automation'),
                      free: t('seachat.pricing.comparison.features.automation.free'),
                      premium: t('seachat.pricing.comparison.features.automation.premium'),
                      enterprise: t('seachat.pricing.comparison.features.automation.enterprise')
                    },
                    {
                      feature: t('seachat.pricing.comparison.apiIntegration'),
                      free: t('seachat.pricing.comparison.features.apiIntegration.free'),
                      premium: t('seachat.pricing.comparison.features.apiIntegration.premium'),
                      enterprise: t('seachat.pricing.comparison.features.apiIntegration.enterprise')
                    },
                    {
                      feature: t('seachat.pricing.comparison.workspaces'),
                      free: t('seachat.pricing.comparison.features.workspaces.free'),
                      premium: t('seachat.pricing.comparison.features.workspaces.premium'),
                      enterprise: t('seachat.pricing.comparison.features.workspaces.enterprise')
                    },
                    {
                      feature: t('seachat.pricing.comparison.support'),
                      free: t('seachat.pricing.comparison.features.support.free'),
                      premium: t('seachat.pricing.comparison.features.support.premium'),
                      enterprise: t('seachat.pricing.comparison.features.support.enterprise')
                    }
                  ].map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.feature}</td>
                      <td className="px-6 py-4 text-sm text-gray-600 text-center">{row.free}</td>
                      <td className="px-6 py-4 text-sm text-gray-600 text-center">{row.premium}</td>
                      <td className="px-6 py-4 text-sm text-gray-600 text-center">{row.enterprise}</td>
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
              {t('seachat.pricing.enterprise.title')}
            </h2>
          </div>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            {t('seachat.pricing.enterprise.description')}
          </p>
          <div className="flex justify-center">
            <a 
              href={getMeetingUrl(i18n.language)} 
              target="_blank" 
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all flex items-center justify-center"
            >
              {t('seachat.pricing.enterprise.contactSales')}
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
              {t('seachat.pricing.faq.title')}
            </h2>
          </div>

          <div className="space-y-8">
            {[
              {
                question: t('seachat.pricing.faq.question1'),
                answer: t('seachat.pricing.faq.answer1')
              },
              {
                question: t('seachat.pricing.faq.question2'),
                answer: t('seachat.pricing.faq.answer2')
              },
              {
                question: t('seachat.pricing.faq.question3'),
                answer: t('seachat.pricing.faq.answer3')
              },
              {
                question: t('seachat.pricing.faq.question4'),
                answer: t('seachat.pricing.faq.answer4')
              },
              {
                question: t('seachat.pricing.faq.question5'),
                answer: t('seachat.pricing.faq.answer5')
              },
              {
                question: t('seachat.pricing.faq.question6'),
                answer: t('seachat.pricing.faq.answer6')
              },
              {
                question: t('seachat.pricing.faq.question7'),
                answer: t('seachat.pricing.faq.answer7')
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

      {/* SPECTACULAR FINAL CTA SECTION */}
      <section className="relative py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full animate-bounce delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/10 rounded-full animate-pulse delay-500"></div>
          <div className="absolute top-20 right-1/4 w-16 h-16 bg-white/10 rounded-full animate-bounce delay-700"></div>
          
          {/* Floating Chat Icons */}
          <div className="absolute top-1/3 left-1/6 animate-pulse">
            <MessageSquare className="w-8 h-8 text-white/20" />
          </div>
          <div className="absolute bottom-1/3 right-1/6 animate-pulse delay-1000">
            <Bot className="w-10 h-10 text-white/20" />
          </div>
          <div className="absolute top-2/3 left-3/4 animate-pulse delay-500">
            <Users className="w-6 h-6 text-white/20" />
          </div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Main Heading with Animation */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              {t('seachat.pricing.cta.title')}
              <span className="block bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-400 bg-clip-text text-transparent">
                {t('seachat.pricing.cta.subtitle')}
              </span>
            </h2>
            <p className="text-xl sm:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              {t('seachat.pricing.cta.description')}
            </p>
          </motion.div>
          
          {/* Impressive Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-black text-white mb-2 flex items-center justify-center">
                <MessageSquare className="w-8 h-8 mr-2 text-green-400" />
                {t('seachat.pricing.cta.stats.messages')}
              </div>
              <div className="text-sm text-blue-200">{t('seachat.pricing.cta.stats.messagesLabel')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-black text-white mb-2 flex items-center justify-center">
                <Clock className="w-8 h-8 mr-2 text-yellow-400" />
                {t('seachat.pricing.cta.stats.uptime')}
              </div>
              <div className="text-sm text-blue-200">{t('seachat.pricing.cta.stats.uptimeLabel')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-black text-white mb-2 flex items-center justify-center">
                <Globe className="w-8 h-8 mr-2 text-blue-400" />
                {t('seachat.pricing.cta.stats.channels')}
              </div>
              <div className="text-sm text-blue-200">{t('seachat.pricing.cta.stats.channelsLabel')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-black text-white mb-2 flex items-center justify-center">
                <Shield className="w-8 h-8 mr-2 text-purple-400" />
                {t('seachat.pricing.cta.stats.hipaa')}
              </div>
              <div className="text-sm text-blue-200">{t('seachat.pricing.cta.stats.hipaaLabel')}</div>
            </div>
          </motion.div>
          
          {/* Mega CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
          >
            <a
              href="https://chat.seasalt.ai/signup"
              className="group relative inline-flex items-center justify-center px-12 py-6 text-2xl font-black text-indigo-900 bg-gradient-to-r from-yellow-300 via-orange-400 to-yellow-300 rounded-3xl shadow-2xl hover:shadow-yellow-300/50 transform hover:scale-110 transition-all duration-300 animate-pulse hover:animate-none"
            >
              <span className="relative z-10 flex items-center">
                <Zap className="w-8 h-8 mr-3 animate-bounce" />
                {t('seachat.pricing.cta.startFree')}
                <ArrowRight className="w-8 h-8 ml-3 group-hover:translate-x-2 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <a
              href={getMeetingUrl(i18n.language)}
              className="inline-flex items-center px-8 py-4 text-xl font-semibold text-white border-2 border-white rounded-2xl hover:bg-white hover:text-indigo-900 transition-all duration-300 transform hover:scale-105"
            >
              <MessageSquare className="w-6 h-6 mr-3" />
              {t('seachat.pricing.cta.bookDemo')}
            </a>
          </motion.div>
          
          {/* Trust Badges with Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-8 text-blue-200 text-sm mb-12"
          >
            <div className="flex items-center gap-2">
              <Check className="w-6 h-6 text-green-400" />
              <span className="font-semibold">{t('seachat.pricing.cta.badges.noCoding')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-6 h-6 text-green-400" />
              <span className="font-semibold">{t('seachat.pricing.cta.badges.freePlan')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-6 h-6 text-green-400" />
              <span className="font-semibold">{t('seachat.pricing.cta.badges.cancelAnytime')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-6 h-6 text-green-400" />
              <span className="font-semibold">{t('seachat.pricing.cta.badges.support')}</span>
            </div>
          </motion.div>
          
          {/* Urgency Message with Pulsing Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="p-6 bg-gradient-to-r from-red-500/20 to-pink-500/20 backdrop-blur rounded-2xl border border-white/30 animate-pulse">
              <p className="text-white font-bold text-lg">
                <span className="text-yellow-300">Limited Time:</span> {t('seachat.pricing.cta.urgency')}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
    </>
  );
};

export default PricingPage;
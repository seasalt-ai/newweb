import { useState } from 'react';
import { Check, Star, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const PricingSection = () => {
  const { t } = useTranslation();
  const [chatVolume, setChatVolume] = useState(1000);
  const [agents, setAgents] = useState(2);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const calculatePrice = (plan: string) => {
    if (plan === 'free') return 0;
    if (plan === 'starter') return Math.max(29, Math.ceil(chatVolume / 1000) * 15);
    if (plan === 'growth') return Math.max(99, Math.ceil(chatVolume / 1000) * 25);
    if (plan === 'enterprise') return Math.max(299, Math.ceil(chatVolume / 1000) * 45);
    return 0;
  };

  const getDiscountedPrice = (plan: string) => {
    const basePrice = calculatePrice(plan);
    return billingCycle === 'yearly' ? Math.floor(basePrice * 0.8) : basePrice;
  };

  const plans = [
    {
      id: 'free',
      name: t('seachat.pricing.plans.free.name'),
      description: t('seachat.pricing.plans.free.description'),
      price: 0,
      originalPrice: 0,
      features: t('seachat.pricing.plans.free.features', { returnObjects: true }),
      limitations: t('seachat.pricing.plans.free.limitations', { returnObjects: true }),
      buttonText: t('seachat.pricing.plans.free.button'),
      buttonStyle: 'bg-gray-600 hover:bg-gray-700 text-white'
    },
    {
      id: 'starter',
      name: t('seachat.pricing.plans.starter.name'),
      description: t('seachat.pricing.plans.starter.description'),
      price: getDiscountedPrice('starter'),
      originalPrice: billingCycle === 'yearly' ? calculatePrice('starter') : 0,
      badge: t('seachat.pricing.plans.starter.badge'),
      features: t('seachat.pricing.plans.starter.features', { returnObjects: true }),
      buttonText: t('seachat.pricing.plans.starter.button'),
      buttonStyle: 'bg-teal-500 hover:bg-teal-600 text-white'
    },
    {
      id: 'growth',
      name: t('seachat.pricing.plans.growth.name'),
      description: t('seachat.pricing.plans.growth.description'),
      price: getDiscountedPrice('growth'),
      originalPrice: billingCycle === 'yearly' ? calculatePrice('growth') : 0,
      features: t('seachat.pricing.plans.growth.features', { returnObjects: true }),
      buttonText: t('seachat.pricing.plans.growth.button'),
      buttonStyle: 'bg-blue-600 hover:bg-blue-700 text-white'
    },
    {
      id: 'enterprise',
      name: t('seachat.pricing.plans.enterprise.name'),
      description: t('seachat.pricing.plans.enterprise.description'),
      price: getDiscountedPrice('enterprise'),
      originalPrice: billingCycle === 'yearly' ? calculatePrice('enterprise') : 0,
      features: t('seachat.pricing.plans.enterprise.features', { returnObjects: true }),
      buttonText: t('seachat.pricing.plans.enterprise.button'),
      buttonStyle: 'bg-purple-600 hover:bg-purple-700 text-white'
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('seachat.pricing.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {t('seachat.pricing.subtitle')}
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-8">
            <span className={`mr-3 ${billingCycle === 'monthly' ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
              {t('seachat.pricing.monthly')}
            </span>
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
            <span className={`ml-3 ${billingCycle === 'yearly' ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
              {t('seachat.pricing.yearly')} <span className="text-green-500 font-semibold">({t('seachat.pricing.save')})</span>
            </span>
          </div>
        </div>

        {/* Interactive Sliders */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
              {t('seachat.pricing.customize')}
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  {t('seachat.pricing.chatVolume')}: <span className="font-bold text-teal-600">{chatVolume.toLocaleString()}</span>
                </label>
                <input
                  type="range"
                  min="100"
                  max="10000"
                  step="100"
                  value={chatVolume}
                  onChange={(e) => setChatVolume(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>100</span>
                  <span>10,000+</span>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  {t('seachat.pricing.agents')}: <span className="font-bold text-teal-600">{agents}</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="20"
                  step="1"
                  value={agents}
                  onChange={(e) => setAgents(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>1</span>
                  <span>20+</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-4 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                plan.badge ? 'border-teal-500 ring-4 ring-teal-100' : 'border-gray-100'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-teal-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>{plan.badge}</span>
                  </span>
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                    <span className="text-gray-600 ml-2">/{billingCycle === 'monthly' ? t('seachat.pricing.plans.free.period') : t('seachat.pricing.yearly').toLowerCase()}</span>
                  </div>
                  {plan.originalPrice && plan.originalPrice > 0 && billingCycle === 'yearly' && (
                    <div className="flex items-center mt-2">
                      <span className="text-lg text-gray-500 line-through">${plan.originalPrice}/month</span>
                      <span className="ml-2 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                        {t('seachat.pricing.save')}
                      </span>
                    </div>
                  )}
                  {plan.price > 0 && (
                    <p className="text-sm text-gray-500 mt-1">
                      {t('seachat.pricing.basedOn')} {chatVolume.toLocaleString()} {t('seachat.pricing.chatsPerPeriod')}/{billingCycle === 'monthly' ? t('seachat.pricing.month') : t('seachat.pricing.year')}
                    </p>
                  )}
                </div>

                  // @ts-ignore
                <ul className="space-y-3 mb-8">
                  {(plan.features as string[]).map((feature: string, index: number) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {plan.limitations && (
                  <div className="mb-6">
                      // @ts-ignore
                    <p className="text-sm font-medium text-gray-500 mb-2">{t('seachat.pricing.limitations')}:</p>
                    <ul className="space-y-1">
                      {(plan.limitations as string[]).map((limitation: string, index: number) => (
                        <li key={index} className="text-sm text-gray-500 flex items-center space-x-2">
                          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                          <span>{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {plan.id === 'free' ? (
                  <a href="https://chat.seasalt.ai/gpt/signup" className={`w-full py-3 px-6 rounded-lg font-semibold transition-all transform hover:scale-105 text-center inline-block ${plan.buttonStyle}`}>
                    {plan.buttonText}
                  </a>
                ) : (
                  <a href="https://chat.seasalt.ai/gpt/signup" className={`w-full py-3 px-6 rounded-lg font-semibold transition-all transform hover:scale-105 text-center inline-block ${plan.buttonStyle}`}>
                    {plan.buttonText}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise Contact */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <div className="flex items-center justify-center mb-4">
              <Zap className="w-8 h-8 mr-2" />
              <h3 className="text-2xl font-bold">{t('seachat.pricing.enterprise.title')}</h3>
            </div>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              {t('seachat.pricing.enterprise.description')}
            </p>
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              {t('seachat.pricing.enterprise.button')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
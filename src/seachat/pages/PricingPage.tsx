import React, { useState } from 'react';
import { Check, Star, Zap, ArrowRight, Infinity } from 'lucide-react';

const PricingPage = () => {
  const [chatVolume, setChatVolume] = useState(1000);
  const [agents, setAgents] = useState(2);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const calculatePrice = (plan: string, cycle: 'monthly' | 'yearly' = 'monthly') => {
    if (plan === 'free') return 0;
    
    let basePrice = 0;
    if (plan === 'starter') basePrice = Math.max(29, Math.ceil(chatVolume / 1000) * 15);
    if (plan === 'growth') basePrice = Math.max(99, Math.ceil(chatVolume / 1000) * 25);
    if (plan === 'enterprise') basePrice = Math.max(299, Math.ceil(chatVolume / 1000) * 45);
    
    return cycle === 'yearly' ? Math.floor(basePrice * 0.8) : basePrice;
  };

  const plans = [
    {
      id: 'free',
      name: 'Free Forever',
      description: 'Perfect for getting started with human agents',
      price: 0,
      originalPrice: 0,
      features: [
        '1 Human agent for life',
        'Unlimited chat conversations',
        'Unlimited chat history',
        'Unlimited contacts',
        'Basic chat widget',
        'Email support',
        '3 channels (Web, Email, Phone)',
        'Basic analytics',
        'Community support',
        'Freedom to export all data'
      ],
      limitations: ['No AI automation', 'Limited integrations', 'Basic customization'],
      buttonText: 'Start Free Forever',
      buttonStyle: 'bg-green-600 hover:bg-green-700 text-white',
      badge: 'Most Popular',
      highlight: true
    },
    {
      id: 'starter',
      name: 'AI Starter',
      description: 'Add AI automation to scale your support',
      price: calculatePrice('starter', billingCycle),
      originalPrice: billingCycle === 'yearly' ? calculatePrice('starter', 'monthly') : 0,
      features: [
        'Everything in Free',
        'AI agent automation',
        'Knowledge base (5GB)',
        'Advanced analytics',
        'Priority email support',
        '10 integrations',
        'Custom branding',
        'Basic AI training',
        'Multi-language support'
      ],
      buttonText: 'Start AI Trial',
      buttonStyle: 'bg-teal-500 hover:bg-teal-600 text-white'
    },
    {
      id: 'growth',
      name: 'Growth',
      description: 'Advanced features for growing teams',
      price: calculatePrice('growth', billingCycle),
      originalPrice: billingCycle === 'yearly' ? calculatePrice('growth', 'monthly') : 0,
      features: [
        'Everything in Starter',
        'Advanced AI features (RAG, Memory)',
        'Unlimited knowledge base',
        'Voice agents',
        'API access',
        'Custom workflows',
        'Phone support',
        'Advanced integrations',
        'Team collaboration tools'
      ],
      buttonText: 'Try Growth',
      buttonStyle: 'bg-blue-600 hover:bg-blue-700 text-white'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Custom solutions for large organizations',
      price: calculatePrice('enterprise', billingCycle),
      originalPrice: billingCycle === 'yearly' ? calculatePrice('enterprise', 'monthly') : 0,
      features: [
        'Everything in Growth',
        'Dedicated success manager',
        'Custom integrations',
        'Advanced security & compliance',
        'SLA guarantees',
        'On-premise deployment',
        '24/7 phone support',
        'Custom AI model training',
        'White-label solutions'
      ],
      buttonText: 'Contact Sales',
      buttonStyle: 'bg-purple-600 hover:bg-purple-700 text-white'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-800 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Pricing That Grows With You
          </h1>
          <p className="text-2xl text-blue-200 mb-8 max-w-4xl mx-auto">
            Start completely free with human agents, then add AI when you're ready to scale. 
            No surprises, no hidden fees, just transparent pricing.
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
              Yearly <span className="text-green-300 font-semibold">(Save 20%)</span>
            </span>
          </div>
        </div>
      </section>

      {/* Interactive Sliders */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
              Customize Your Plan
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Monthly Chat Volume: <span className="font-bold text-teal-600">{chatVolume.toLocaleString()}</span>
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
                  Number of Agents: <span className="font-bold text-teal-600">{agents}</span>
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
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative bg-white rounded-3xl shadow-xl border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                  plan.highlight ? 'border-green-500 ring-4 ring-green-100 scale-105' : 'border-gray-200'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span>{plan.badge}</span>
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <div className="mb-8">
                    <div className="flex items-baseline">
                      {plan.id === 'free' ? (
                        <div className="flex items-center">
                          <Infinity className="w-8 h-8 text-green-600 mr-2" />
                          <span className="text-4xl font-bold text-green-600">FREE</span>
                        </div>
                      ) : (
                        <>
                          <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                          <span className="text-gray-600 ml-2">/{billingCycle === 'yearly' ? 'year' : 'month'}</span>
                        </>
                      )}
                    </div>
                    {plan.originalPrice > 0 && billingCycle === 'yearly' && (
                      <div className="flex items-center mt-2">
                        <span className="text-lg text-gray-500 line-through">${plan.originalPrice}/month</span>
                        <span className="ml-2 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                          Save 20%
                        </span>
                      </div>
                    )}
                    {plan.price > 0 && (
                      <p className="text-sm text-gray-500 mt-2">
                        Based on {chatVolume.toLocaleString()} chats/{billingCycle === 'yearly' ? 'year' : 'month'}
                      </p>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {plan.limitations && (
                    <div className="mb-8">
                      <p className="text-sm font-medium text-gray-500 mb-3">Limitations:</p>
                      <ul className="space-y-2">
                        {plan.limitations.map((limitation, index) => (
                          <li key={index} className="text-sm text-gray-500 flex items-center space-x-2">
                            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                            <span>{limitation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <button className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 ${plan.buttonStyle}`}>
                    {plan.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Compare All Features
            </h2>
            <p className="text-xl text-gray-600">
              See exactly what's included in each plan
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Features</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Free</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Starter</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Growth</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    ['Human Agents', '1 for life', '1-5', '1-20', 'Unlimited'],
                    ['AI Automation', '❌', '✅', '✅', '✅'],
                    ['Advanced AI (RAG, Memory)', '❌', '❌', '✅', '✅'],
                    ['Knowledge Base', 'Basic', '5GB', 'Unlimited', 'Unlimited'],
                    ['Voice Agents', '❌', '❌', '✅', '✅'],
                    ['Custom Integrations', '❌', 'Limited', '✅', '✅'],
                    ['API Access', '❌', 'Basic', 'Full', 'Full'],
                    ['Support', 'Community', 'Email', 'Phone', '24/7 Dedicated'],
                    ['SLA Guarantee', '❌', '❌', '❌', '✅']
                  ].map(([feature, free, starter, growth, enterprise], index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{feature}</td>
                      <td className="px-6 py-4 text-sm text-gray-600 text-center">{free}</td>
                      <td className="px-6 py-4 text-sm text-gray-600 text-center">{starter}</td>
                      <td className="px-6 py-4 text-sm text-gray-600 text-center">{growth}</td>
                      <td className="px-6 py-4 text-sm text-gray-600 text-center">{enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Zap className="w-12 h-12 text-yellow-300 mr-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Need Something Custom?
            </h2>
          </div>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            We offer custom enterprise solutions including on-premise deployment, 
            advanced security features, and dedicated support teams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Schedule Enterprise Demo
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all flex items-center justify-center">
              Contact Sales Team
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-8">
            {[
              {
                question: "Is the free plan really free forever?",
                answer: "Yes! Our free plan includes 1 human agent for life with unlimited conversations, chat history, and contacts. No credit card required, no hidden fees."
              },
              {
                question: "Can I upgrade or downgrade my plan anytime?",
                answer: "Absolutely! You can change your plan at any time. Upgrades take effect immediately, and downgrades take effect at the end of your current billing cycle."
              },
              {
                question: "What happens to my data if I cancel?",
                answer: "You own your data. You can export all your chat history, contacts, and knowledge base content at any time, even on the free plan."
              },
              {
                question: "Do you offer custom pricing for large enterprises?",
                answer: "Yes! We offer custom enterprise solutions with volume discounts, dedicated support, and specialized features. Contact our sales team for a personalized quote."
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
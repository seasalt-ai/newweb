import React, { useState } from 'react';
import { Check, Star, ArrowLeft, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEOHelmet from '../components/SEOHelmet';
import Header from '../components/Header';

const PricingPage = () => {
  const { i18n } = useTranslation();
  const [isAnnualBilling, setIsAnnualBilling] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  // Generate canonical URL for SEO
  const canonicalUrl = typeof window !== 'undefined' 
    ? `${window.location.origin}/${i18n.language}/pricing` 
    : `/${i18n.language}/pricing`;

  const plans = [
    {
      name: 'Live Agent',
      price: '$0',
      period: 'forever',
      tagline: 'Truly Free, Forever. Perfect for getting started.',
      description: 'Perfect for getting started. Unify your inbox with 1 human agent.',
      features: [
        '1 Human Agent',
        'Unlimited Human Agent Chats',
        'WhatsApp/Messenger/LINE/Webchat',
        'Basic Integrations (Shopify, etc.)',
        'Email support'
      ],
      cta: 'Sign Up',
      ctaStyle: 'bg-gray-600 hover:bg-gray-700 text-white',
      popular: false
    },
    {
      name: 'Professional',
      price: isAnnualBilling ? '$40' : '$50',
      period: 'per month',
      additionalPrice: isAnnualBilling ? '+ $20/month for each additional agent' : '+ $25/month for each additional agent',
      tagline: 'The complete, unified solution for growing businesses.',
      description: 'Everything you need to automate and scale your customer communications.',
      features: [
        'Everything in Live Agent',
        'AI Automation (Voicebot & Chatbot)',
        'All Communication Channels (including Phone Calls)',
        'Outbound Marketing Campaigns',
        'CRM Integrations (HubSpot, Salesforce)',
        'Advanced analytics & reporting',
        'Priority support',
        'HIPAA compliance available'
      ],
      cta: 'Get Started',
      ctaStyle: 'bg-blue-600 hover:bg-blue-700 text-white',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Let\'s Talk',
      period: '',
      tagline: 'For teams with custom needs.',
      description: 'For larger teams with specific needs like advanced compliance or custom integrations.',
      features: [
        'Everything in Professional',
        'HIPAA Compliance',
        'Custom Integrations',
        'Dedicated Account Manager',
        'Custom AI training',
        'White-label options',
        'SLA guarantees',
        'On-premise deployment options'
      ],
      cta: 'Contact Sales',
      ctaStyle: 'border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600',
      popular: false
    }
  ];

  const competitors = [
    {
      name: 'Seasalt.ai',
      startingPrice: '$25/agent/mo',
      pricingModel: 'Simple Per-User',
      unifiedVoiceDigital: '✅ Yes, Native',
      aiCapabilities: '✅ Yes, Native Voice & Chatbots',
      bestFor: 'SMEs needing an affordable, truly all-in-one platform.',
      highlight: true,
      link: null
    },
    {
      name: 'Aircall',
      startingPrice: '$30/user/mo',
      pricingModel: 'Per-User + Add-ons',
      unifiedVoiceDigital: '⚠️ Voice + WhatsApp (Add-on)',
      aiCapabilities: '⚠️ AI is a paid add-on',
      bestFor: 'Sales teams that can afford multiple add-ons and meet the 3-user minimum.',
      highlight: false,
      link: '/compare/aircall-alternative'
    },
    {
      name: 'RingCentral',
      startingPrice: '$65/agent/mo',
      pricingModel: 'Complex Tiers',
      unifiedVoiceDigital: '❌ Separate Products',
      aiCapabilities: '✅ Yes (AI-powered CCaaS)',
      bestFor: 'Large companies needing a broad UCaaS platform with a separate CCaaS.',
      highlight: false,
      link: '/compare/ringcentral-alternative'
    },
    {
      name: 'Genesys Cloud CX',
      startingPrice: '$75/user/mo',
      pricingModel: 'Per-User + High Minimums',
      unifiedVoiceDigital: '✅ Yes (in higher tiers)',
      aiCapabilities: '✅ Yes (Complex token system)',
      bestFor: 'Large enterprises with dedicated contact center teams and budgets.',
      highlight: false,
      link: '/compare/genesys-alternative'
    },
    {
      name: 'Five9',
      startingPrice: '$119/user/mo',
      pricingModel: 'Per-User + Bundles',
      unifiedVoiceDigital: '✅ Yes (in premium tiers)',
      aiCapabilities: '✅ Yes (Advanced AI)',
      bestFor: 'Large, outbound-heavy contact centers needing enterprise-grade tools.',
      highlight: false,
      link: '/compare/five9-alternative'
    },
    {
      name: 'Google Voice',
      startingPrice: '$10/user/mo',
      pricingModel: 'Per-User + Workspace Fee',
      unifiedVoiceDigital: '❌ No',
      aiCapabilities: '❌ No (Voicemail transcription only)',
      bestFor: 'Solopreneurs (US-only) needing a basic, separate phone number.',
      highlight: false,
      link: '/compare/google-voice-alternative'
    },
    {
      name: 'respond.io',
      startingPrice: '$79/mo',
      pricingModel: 'Monthly Active Contacts',
      unifiedVoiceDigital: '⚠️ Digital-first (Voice is Beta)',
      aiCapabilities: '✅ Yes (AI Agent on higher tiers)',
      bestFor: 'Marketing/sales teams focused on messaging channels like WhatsApp.',
      highlight: false,
      link: '/compare/respond-io-alternative'
    },
    {
      name: 'Intercom',
      startingPrice: '$39/seat/mo',
      pricingModel: 'Per-Seat + Add-ons + Usage',
      unifiedVoiceDigital: '⚠️ Digital-first (Voice is pay-as-you-go)',
      aiCapabilities: '✅ Yes (Fin AI Agent is per-resolution)',
      bestFor: 'Businesses focused on proactive website engagement and support.',
      highlight: false,
      link: '/compare/intercom-alternative'
    }
  ];

  const faqs = [
    {
      question: 'Is there a free trial?',
      answer: 'Yes! Our Live Agent plan is completely free forever for 1 human agent. For Professional features, we offer a 14-day free trial with no credit card required.'
    },
    {
      question: 'Can I change my plan later?',
      answer: 'Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing adjustments.'
    },
    {
      question: 'What counts as a "conversation"?',
      answer: 'We don\'t charge per conversation! Our pricing is simple per-user pricing with unlimited conversations across all channels. No usage fees or surprise charges.'
    },
    {
      question: 'Are there any setup fees?',
      answer: 'No setup fees ever! We include free onboarding and setup assistance for all Professional and Enterprise plans. You can be up and running in minutes.'
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Tags */}
      <SEOHelmet
        title="Pricing - Seasalt.ai"
        description="Simple, transparent pricing that grows with you. No hidden fees. No complex add-ons. Just one powerful platform for all your conversations."
        favicon="/seasalt-ai-favicon.ico"
        canonicalUrl={canonicalUrl}
        availableLanguages={['en', 'es', 'zh-TW']}
      />
      {/* Global Header */}
      <Header />
      {/* Main Content */}
      <main className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing That Grows With You
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8">
              No hidden fees. No complex add-ons. Just one powerful platform for all your conversations.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-3 sm:space-x-4 mb-8 sm:mb-12">
              <span className={`text-base sm:text-lg ${!isAnnualBilling ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>
                Billed Monthly
              </span>
              <button
                onClick={() => setIsAnnualBilling(!isAnnualBilling)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  isAnnualBilling ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isAnnualBilling ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-base sm:text-lg ${isAnnualBilling ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>
                Billed Annually
              </span>
              {isAnnualBilling && (
                <span className="bg-green-100 text-green-800 px-2 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-medium">
                  Save 20%
                </span>
              )}
            </div>
          </div>

          {/* Pricing Tiers */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-16 sm:mb-20">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`relative p-6 sm:p-8 rounded-2xl border-2 ${
                  plan.popular 
                    ? 'border-blue-500 shadow-xl md:scale-105' 
                    : 'border-gray-200 hover:border-gray-300 hover:shadow-lg'
                } transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-600 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold flex items-center">
                      <Star className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-6 sm:mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">{plan.name}</h3>
                  <div className="mb-1 sm:mb-2">
                    <span className="text-xs sm:text-sm text-blue-600 font-medium">{plan.tagline}</span>
                  </div>
                  <div className="mb-3 sm:mb-4">
                    <span className="text-3xl sm:text-4xl font-bold text-gray-900">{plan.price}</span>
                    {plan.period && (
                      <span className="text-base sm:text-lg text-gray-600 ml-1 sm:ml-2">{plan.period}</span>
                    )}
                  </div>
                  {plan.additionalPrice && (
                    <p className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">{plan.additionalPrice}</p>
                  )}
                  <p className="text-sm sm:text-base text-gray-600">{plan.description}</p>
                </div>

                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-semibold transition-all duration-200 text-sm sm:text-base ${plan.ctaStyle}`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>

          {/* Master Competitor Comparison Table */}
          <div className="mb-16 sm:mb-20">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                The SME Communications Landscape: How We Stack Up
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                See how Seasalt.ai compares to other solutions in the market. We're the only platform 
                that delivers enterprise features with small business simplicity.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[800px]">
                  <thead className="bg-gray-50 text-left">
                    <tr>
                      <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-gray-900">Competitor</th>
                      <th className="px-4 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm font-semibold text-gray-900">Starting Price</th>
                      <th className="px-4 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm font-semibold text-gray-900">Pricing Model</th>
                      <th className="px-4 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm font-semibold text-gray-900">Unified Voice & Digital</th>
                      <th className="px-4 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm font-semibold text-gray-900">AI Capabilities</th>
                      <th className="px-4 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm font-semibold text-gray-900">Best For</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {competitors.map((competitor, index) => (
                      <tr 
                        key={index} 
                        className={competitor.highlight ? 'bg-blue-50 border-2 border-blue-200' : 'hover:bg-gray-50'}
                      >
                        <td className="px-4 sm:px-6 py-3 sm:py-4">
                          <div className="flex items-center">
                            {competitor.link ? (
                              <Link 
                                to={competitor.link}
                                className={`text-xs sm:text-sm font-semibold hover:underline ${
                                  competitor.highlight ? 'text-blue-900' : 'text-blue-600 hover:text-blue-800'
                                }`}
                              >
                                {competitor.name}
                              </Link>
                            ) : (
                              <span className={`text-xs sm:text-sm font-semibold ${competitor.highlight ? 'text-blue-900' : 'text-gray-900'}`}>
                                {competitor.name}
                              </span>
                            )}
                            {competitor.highlight && (
                              <span className="ml-2 px-1.5 sm:px-2 py-0.5 sm:py-1 bg-blue-600 text-white text-xs rounded-full">
                                Recommended
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm text-gray-700">{competitor.startingPrice}</td>
                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm text-gray-700">{competitor.pricingModel}</td>
                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm text-gray-700">{competitor.unifiedVoiceDigital}</td>
                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm text-gray-700">{competitor.aiCapabilities}</td>
                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm text-gray-700">{competitor.bestFor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-16 sm:mb-20">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-8 sm:mb-12">
              Frequently Asked Questions
            </h3>
            <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <span className="text-base sm:text-lg font-semibold text-gray-900">{faq.question}</span>
                    <ChevronDown 
                      className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
                        openFaq === index ? 'transform rotate-180' : ''
                      }`} 
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-4 sm:px-6 pb-4">
                      <p className="text-sm sm:text-base text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <a
               href="https://seax.seasalt.ai/signup" className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-lg sm:text-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Sign Up Now
            </a>
            <p className="text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4">Setup in under 5 minutes</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PricingPage;
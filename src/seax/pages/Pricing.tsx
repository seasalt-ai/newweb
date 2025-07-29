import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHelmet from '../../components/SEOHelmet';
import ROICalculator from '../components/ROICalculator';
import SupportPlan from '../../components/SupportPlan';
import OmniChannelCalculator from '../components/OmniChannelCalculator';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { 
  Check, 
  ArrowRight, 
  MessageSquare, 
  Phone, 
  Zap, 
  Shield,
  Users,
  Building2
} from 'lucide-react';

const Pricing = () => {
  const { t } = useTranslation();

  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  const pricingTiers = [
    {
      name: t('seax.pricing.whatsappOnly.name'),
      subheader: t('seax.pricing.whatsappOnly.subheader'),
      price: billingPeriod === 'monthly' ? t('seax.pricing.whatsappOnly.priceMonthly') : t('seax.pricing.whatsappOnly.priceYearly'),
      period: billingPeriod === 'monthly' ? t('seax.pricing.period.monthly') : t('seax.pricing.period.yearly'),
      description: t('seax.pricing.whatsappOnly.description'),
      features: [
        t('seax.pricing.whatsappOnly.features.sendReceive'),
        t('seax.pricing.whatsappOnly.features.support'),
        t('seax.pricing.whatsappOnly.features.unlimitedContacts'),
        t('seax.pricing.whatsappOnly.features.templates'),
        t('seax.pricing.whatsappOnly.features.workspace')
      ],
      limitations: [],
      recommended: false,
      cta: t('seax.pricing.whatsappOnly.cta'),
      icon: MessageSquare,
      bgColor: 'from-purple-400 to-purple-500',
      textColor: 'text-white'
    },
    {
      name: t('seax.pricing.omniChannel.name'),
      subheader: t('seax.pricing.omniChannel.subheader'),
      price: billingPeriod === 'monthly' ? t('seax.pricing.omniChannel.priceMonthly') : t('seax.pricing.omniChannel.priceYearly'),
      additionalPrice: billingPeriod === 'monthly' ? t('seax.pricing.omniChannel.additionalPriceMonthly') : t('seax.pricing.omniChannel.additionalPriceYearly'),
      period: billingPeriod === 'monthly' ? t('seax.pricing.period.monthly') : t('seax.pricing.period.yearly'),
      description: t('seax.pricing.omniChannel.description'),
      additionalDescription: t('seax.pricing.omniChannel.additionalDescription'),
      features: [
        t('seax.pricing.omniChannel.features.sms'),
        t('seax.pricing.omniChannel.features.phoneCalls'),
        t('seax.pricing.omniChannel.features.smsCampaign'),
        t('seax.pricing.omniChannel.features.apiAccess'),
        t('seax.pricing.omniChannel.features.phoneCampaign'),
        t('seax.pricing.omniChannel.features.seaChatIntegration'),
        t('seax.pricing.omniChannel.features.workspace'),
        t('seax.pricing.omniChannel.features.additionalWorkspace'),
        t('seax.pricing.omniChannel.features.communication'),
        t('seax.pricing.omniChannel.features.smsMmsCosts'),
        t('seax.pricing.omniChannel.features.voicemailDropCost'),
        t('seax.pricing.omniChannel.features.voiceAiAgentsCost')
      ],
      limitations: [],
      recommended: true,
      cta: t('seax.pricing.omniChannel.cta'),
      icon: Zap,
      bgColor: 'from-blue-400 to-blue-500',
      textColor: 'text-white'
    },
    {
      name: t('seax.pricing.custom.name'),
      subheader: t('seax.pricing.custom.subheader'),
      price: t('seax.pricing.custom.price'),
      period: '',
      description: t('seax.pricing.custom.description'),
      features: [
        t('seax.pricing.custom.features.multipleWorkspaces'),
        t('seax.pricing.custom.features.multipleAiAgents'),
        t('seax.pricing.custom.features.designAndSupport')
      ],
      limitations: [],
      recommended: false,
      cta: t('seax.pricing.custom.cta'),
      icon: Building2,
      bgColor: 'from-green-400 to-green-500',
      textColor: 'text-white'
    }
  ];

  const channelPricing = [
    {
      name: 'SMS Local (10DLC)',
      'campaign approval and setup (optional)': '$150',
      monthly: '$2/number',
      usage: '$0.02/message (USA/CA)',
      description: 'Brand registration and A2P registration required',
      icon: MessageSquare,
      color: 'blue'
    },
    {
      name: 'SMS Toll-Free',
      'campaign approval and setup (optional)': '$150',
      monthly: '$3/number',
      usage: '$0.02/message (USA/CA)',
      description: 'Higher trust, higher throughput',
      icon: Shield,
      color: 'green'
    },
    {
      name: 'SMS Short-Code',
      setup: '$2,000',
      quarterly: '$3,000/code',
      usage: '$0.02/message (USA/CA)',
      description: 'Highest throughput',
      icon: Zap,
      color: 'purple'
    },
    {
      name: 'WhatsApp Business Platform',
      'Meta Suite approval and setup (optional)': '$150',
      monthly: '$0',
      usage: '$0.00/message (worldwide)',
      description: 'You pay Meta directly. No markup from Seasalt.ai',
      icon: Users,
      color: 'emerald'
    },
    {
      name: 'Voice Calls',
      setup: 'Free',
      monthly: 'each number costs $2-$3/month with E911 address',
      usage: '$0.015/minute (USA/CA)',
      description: '100+ countries',
      icon: Phone,
      color: 'orange'
    },
    {
      name: 'Voicemail Drop',
      setup: 'Free',
      monthly: 'each number costs $2-$3/month with E911 address',
      usage: '$0.05 per drop (USA/CA)',
      description: '100+ countries',
      icon: Phone,
      color: 'orange'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600',
      emerald: 'bg-emerald-100 text-emerald-600',
      orange: 'bg-orange-100 text-orange-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHelmet 
        title="SeaX Pricing - Transparent, Scalable, Value-Driven"
        description="Simple, transparent pricing for mass SMS, WhatsApp, and voice communication. Scale from thousands to millions of messages with predictable costs."
        favicon="/seasalt-ai-favicon.ico"
      />
      
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent
            <span className="text-blue-600 block">Pricing That Scales</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Start small or go big - our pricing grows with your business. 
            No hidden fees, no surprises, just predictable costs that deliver results.
          </p>
          
        </div>
      </div>

      {/* Pricing Tiers */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Choose Your Plan
            </h2>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-8">
              <span className={`mr-3 ${billingPeriod === 'monthly' ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>Monthly</span>
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
                Yearly <span className="text-green-500 font-semibold">(Saves 2 Months)</span>
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className="relative bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full">
                {/* Header with gradient background */}
                <div className={`bg-gradient-to-r ${tier.bgColor} p-8 text-center`}>
                  <div className="text-sm text-white/80 mb-2">{tier.subheader}</div>
                  <h3 className={`text-2xl font-bold mb-4 ${tier.textColor}`}>{tier.name}</h3>
                </div>
                
                {/* Pricing */}
                <div className="px-8 py-6 text-center">
                  {tier.name === 'Custom' ? (
                    <div className="mb-4">
                      <div className="text-xl font-medium text-gray-600 mb-2">{tier.description}</div>
                    </div>
                  ) : tier.name === 'Omni-channel' ? (
                    <div className="mb-4">
                      <div className="flex justify-center items-center space-x-4">
                        <div>
                          <div className="text-4xl font-bold text-blue-600">{tier.price}</div>
                          <div className="text-sm text-gray-600">{tier.description}</div>
                        </div>
                        <div>
                          <div className="text-4xl font-bold text-blue-600">{tier.additionalPrice}</div>
                          <div className="text-sm text-gray-600">{tier.additionalDescription}</div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="mb-4">
                      <div className="text-4xl font-bold text-purple-600 mb-2">{tier.price}</div>
                      <div className="text-sm text-gray-600">{tier.description}</div>
                    </div>
                  )}
                </div>
                
                {/* Features - This will grow to fill available space */}
                <div className="px-8 pb-6 flex-grow">
                  <div className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* CTA Button - This will stay at the bottom */}
                <div className="px-8 pb-8 mt-auto">
                  {tier.name === 'Custom' ? (
                    <a
                      href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
                      className="w-full py-3 px-6 rounded-lg font-semibold transition-all transform hover:scale-105 text-center inline-block bg-green-500 hover:bg-green-600 text-white"
                    >
                      {tier.cta}
                    </a>
                  ) : (
                    <a
                      href="https://seax.seasalt.ai/signup"
                      className={`w-full py-3 px-6 rounded-lg font-semibold transition-all transform hover:scale-105 text-center inline-block ${
                        tier.name === 'WhatsApp Only'
                          ? 'bg-purple-500 hover:bg-purple-600 text-white'
                          : 'bg-blue-500 hover:bg-blue-600 text-white'
                      }`}
                    >
                      {tier.cta}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* Disclaimer */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-600">
              * Prices vary by country. The prices listed are for the United States. For other countries, please contact us.
            </p>
          </div>
        </div>
      </div>

      {/* Channel-Specific Pricing */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Per-Channel Pricing
            </h2>
            <p className="text-lg text-gray-600">
              Transparent pricing for each communication channel
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {channelPricing.map((channel, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`p-3 rounded-lg ${getColorClasses(channel.color)}`}>
                    <channel.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{channel.name}</h3>
                    <p className="text-sm text-gray-600">{channel.description}</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {/* Campaign/Meta approval setup */}
                  {channel['campaign approval and setup (optional)'] && (
                    <div className="flex justify-between">
                      <span className="text-gray-600 text-sm">Campaign setup:</span>
                      <span className="font-semibold text-sm">{channel['campaign approval and setup (optional)']}</span>
                    </div>
                  )}
                  {channel['Meta Suite approval and setup (optional)'] && (
                    <div className="flex justify-between">
                      <span className="text-gray-600 text-sm">Meta setup:</span>
                      <span className="font-semibold text-sm">{channel['Meta Suite approval and setup (optional)']}</span>
                    </div>
                  )}
                  
                  {/* Setup */}
                  {channel.setup && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Setup:</span>
                      <span className="font-semibold">{channel.setup}</span>
                    </div>
                  )}
                  
                  {/* Monthly */}
                  {channel.monthly && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monthly:</span>
                      <span className="font-semibold text-sm">{channel.monthly}</span>
                    </div>
                  )}
                  
                  {/* Quarterly */}
                  {channel.quarterly && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Quarterly:</span>
                      <span className="font-semibold">{channel.quarterly}</span>
                    </div>
                  )}
                  
                  {/* Usage */}
                  <div className="flex justify-between">
                    <span className="text-gray-600">Usage:</span>
                    <span className="font-semibold">{channel.usage}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Omni-channel Calculator */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <OmniChannelCalculator />
        </div>
      </div>

      {/* ROI Calculator */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Calculate Your ROI
            </h2>
            <p className="text-lg text-gray-600">
              See how much you can save and earn with SeaX
            </p>
          </div>
          
          <ROICalculator />
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How does volume pricing work?
              </h3>
              <p className="text-gray-600">
                Our pricing automatically scales with your usage. Higher volumes get better per-message rates. 
                We'll recommend the best SMS type (Local, Toll-Free, or Short-Code) based on your volume.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Are there any hidden fees?
              </h3>
              <p className="text-gray-600">
                No hidden fees, ever. You only pay for what you use. Setup fees are clearly stated, 
                and there are no long-term contracts or cancellation fees.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I change plans anytime?
              </h3>
              <p className="text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, 
                and you'll be charged prorated amounts.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What about international messaging?
              </h3>
              <p className="text-gray-600">
                We support messaging to 200+ countries. Rates vary by destination, but we provide 
                transparent pricing for all regions. Voice calls are available in 100+ countries.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Support Plan */}
      <SupportPlan />

      {/* CTA Section */}
      <div className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Start your free trial today - no credit card required
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://seax.seasalt.ai/signup"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2"
            >
              <span>Sign Up Now</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            
            <a
              href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Talk to Sales
            </a>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Pricing;

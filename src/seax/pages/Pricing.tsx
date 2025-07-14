import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHelmet from '../../components/SEOHelmet';
import ROICalculator from '../components/ROICalculator';
import { useTranslation } from 'react-i18next';
import { 
  Check, 
  X, 
  ArrowRight, 
  MessageSquare, 
  Phone, 
  Zap, 
  Shield,
  Users,
  Building2,
  Star
} from 'lucide-react';

const Pricing = () => {
  const { i18n: _i18n } = useTranslation();

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$500',
      period: '/month',
      description: 'Perfect for small businesses getting started',
      features: [
        'Up to 50K messages/month',
        'SMS Local (10DLC)',
        'Basic analytics',
        'Email support',
        'API access',
        'Campaign templates'
      ],
      limitations: [
        'WhatsApp Business',
        'Voice calls',
        'Advanced analytics',
        'Priority support',
        'Custom integrations'
      ],
      recommended: false,
      cta: 'Sign Up Now',
      icon: MessageSquare
    },
    {
      name: 'Growth',
      price: '$2,500',
      period: '/month',
      description: 'For growing businesses with higher volume needs',
      features: [
        'Up to 200K messages/month',
        'SMS Local + Toll-Free',
        'WhatsApp Business Platform',
        'Voice calls (basic)',
        'Advanced analytics',
        'Phone + email support',
        'CRM integrations',
        'A/B testing',
        'Custom reporting'
      ],
      limitations: [
        'SMS Short-code',
        'Priority support',
        'Dedicated account manager'
      ],
      recommended: true,
      cta: 'Get Started',
      icon: Zap
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations with mission-critical needs',
      features: [
        'Unlimited messages',
        'All SMS types',
        'Full WhatsApp Business',
        'Advanced voice features',
        'Real-time analytics',
        'Priority support',
        'Dedicated account manager',
        'Custom integrations',
        'SLA guarantees',
        'White-label options'
      ],
      limitations: [],
      recommended: false,
      cta: 'Contact Sales',
      icon: Building2
    }
  ];

  const channelPricing = [
    {
      name: 'SMS Local (10DLC)',
      setup: '$50',
      monthly: '$10/number',
      usage: '$0.0075/message',
      description: 'Brand registration required',
      icon: MessageSquare,
      color: 'blue'
    },
    {
      name: 'SMS Toll-Free',
      setup: 'Free',
      monthly: '$50/number',
      usage: '$0.015/message',
      description: 'Higher trust, faster setup',
      icon: Shield,
      color: 'green'
    },
    {
      name: 'SMS Short-Code',
      setup: '$1,000',
      monthly: '$1,000/code',
      usage: '$0.005/message',
      description: 'Highest throughput',
      icon: Zap,
      color: 'purple'
    },
    {
      name: 'WhatsApp Business',
      setup: 'Free',
      monthly: '$0',
      usage: '$0.015+/message',
      description: 'Varies by country',
      icon: Users,
      color: 'emerald'
    },
    {
      name: 'Voice Calls',
      setup: 'Free',
      monthly: '$0',
      usage: '$0.015+/minute',
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
          
          <div className="flex justify-center items-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-green-500" />
              <span>No setup fees</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-green-500" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-green-500" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Tiers */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Choose Your Plan
            </h2>
            <p className="text-lg text-gray-600">
              Select the perfect plan for your business size and needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`relative bg-white rounded-2xl shadow-lg border-2 ${
                tier.recommended ? 'border-blue-500' : 'border-gray-200'
              } p-8`}>
                {tier.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className="bg-gray-50 p-4 rounded-lg w-fit mx-auto mb-4">
                    <tier.icon className="w-8 h-8 text-gray-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {tier.price}
                    <span className="text-lg font-normal text-gray-600">{tier.period}</span>
                  </div>
                  <p className="text-gray-600">{tier.description}</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                  
                  {tier.limitations.map((limitation, limitationIndex) => (
                    <div key={limitationIndex} className="flex items-start space-x-3">
                      <X className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-400">{limitation}</span>
                    </div>
                  ))}
                </div>
                
                {tier.cta === 'Contact Sales' ? (
                  <a
                    href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
                    className={`block w-full text-center py-3 rounded-lg font-semibold transition-colors ${
                      tier.recommended
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {tier.cta}
                  </a>
                ) : (
                  <a
                    href="https://seax.seasalt.ai/signup"
                    className={`block w-full text-center py-3 rounded-lg font-semibold transition-colors ${
                      tier.recommended
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {tier.cta}
                  </a>
                )}
              </div>
            ))}
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
                  <div className="flex justify-between">
                    <span className="text-gray-600">Setup:</span>
                    <span className="font-semibold">{channel.setup}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monthly:</span>
                    <span className="font-semibold">{channel.monthly}</span>
                  </div>
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

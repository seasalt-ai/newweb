import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHelmet from '../../components/SEOHelmet';
import { getSEOData, getCanonicalUrl } from '../../utils/seo';
import ROICalculator from '../components/ROICalculator';
import SupportPlan from '../../components/SupportPlan';
import OmniChannelCalculator from '../components/OmniChannelCalculator';
import { useTranslation } from 'react-i18next';
import { MEETING_URL, getMeetingUrl } from '../../constants/urls';
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
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  // Generate SEO data using standardized utility
  const seoData = getSEOData(t, 'seax.pricing', {
    canonicalUrl: getCanonicalUrl(i18n.language, '/seax/pricing')
  });

  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  const pricingTiers = [
    {
      name: t('seax.pricing.plans.whatsapp.name'),
      subheader: t('seax.pricing.plans.whatsapp.subheader'),
      price: billingPeriod === 'monthly' ? t('seax.pricing.plans.whatsapp.price.monthly') : t('seax.pricing.plans.whatsapp.price.yearly'),
      period: billingPeriod === 'monthly' ? t('seax.pricing.plans.whatsapp.period.monthly') : t('seax.pricing.plans.whatsapp.period.yearly'),
      description: t('seax.pricing.plans.whatsapp.description'),
      features: [
        t('seax.pricing.plans.whatsapp.features.0'),
        t('seax.pricing.plans.whatsapp.features.1'),
        t('seax.pricing.plans.whatsapp.features.2'),
        t('seax.pricing.plans.whatsapp.features.3'),
        t('seax.pricing.plans.whatsapp.features.4')
      ],
      limitations: [],
      recommended: false,
      cta: t('seax.pricing.plans.whatsapp.cta'),
      icon: MessageSquare,
      bgColor: 'from-purple-400 to-purple-500',
      textColor: 'text-white'
    },
    {
      name: t('seax.pricing.plans.omnichannel.name'),
      subheader: t('seax.pricing.plans.omnichannel.subheader'),
      price: billingPeriod === 'monthly' ? t('seax.pricing.plans.omnichannel.price.monthly') : t('seax.pricing.plans.omnichannel.price.yearly'),
      additionalPrice: billingPeriod === 'monthly' ? t('seax.pricing.plans.omnichannel.additionalPrice.monthly') : t('seax.pricing.plans.omnichannel.additionalPrice.yearly'),
      period: billingPeriod === 'monthly' ? t('seax.pricing.plans.omnichannel.period.monthly') : t('seax.pricing.plans.omnichannel.period.yearly'),
      description: t('seax.pricing.plans.omnichannel.description'),
      additionalDescription: t('seax.pricing.plans.omnichannel.additionalDescription'),
      features: [
        t('seax.pricing.plans.omnichannel.features.0'),
        t('seax.pricing.plans.omnichannel.features.1'),
        t('seax.pricing.plans.omnichannel.features.2'),
        t('seax.pricing.plans.omnichannel.features.3'),
        t('seax.pricing.plans.omnichannel.features.4'),
        t('seax.pricing.plans.omnichannel.features.5'),
        t('seax.pricing.plans.omnichannel.features.6'),
        t('seax.pricing.plans.omnichannel.features.7'),
        t('seax.pricing.plans.omnichannel.features.8'),
        t('seax.pricing.plans.omnichannel.features.9'),
        t('seax.pricing.plans.omnichannel.features.10'),
        t('seax.pricing.plans.omnichannel.features.11')
      ],
      limitations: [],
      recommended: true,
      cta: t('seax.pricing.plans.omnichannel.cta'),
      icon: Zap,
      bgColor: 'from-blue-400 to-blue-500',
      textColor: 'text-white'
    },
    {
      name: t('seax.pricing.plans.custom.name'),
      subheader: t('seax.pricing.plans.custom.subheader'),
      price: t('seax.pricing.plans.custom.price'),
      period: '',
      description: t('seax.pricing.plans.custom.description'),
      features: [
        t('seax.pricing.plans.custom.features.0'),
        t('seax.pricing.plans.custom.features.1'),
        t('seax.pricing.plans.custom.features.2')
      ],
      limitations: [],
      recommended: false,
      cta: t('seax.pricing.plans.custom.cta'),
      icon: Building2,
      bgColor: 'from-green-400 to-green-500',
      textColor: 'text-white'
    }
  ];

  const channelPricing = [
    {
      name: t('seax.pricing.channels.smsLocal.name'),
      'campaign approval and setup (optional)': t('seax.pricing.channels.smsLocal.campaignSetup'),
      monthly: t('seax.pricing.channels.smsLocal.monthly'),
      usage: t('seax.pricing.channels.smsLocal.usage'),
      description: t('seax.pricing.channels.smsLocal.description'),
      icon: MessageSquare,
      color: 'blue'
    },
    {
      name: t('seax.pricing.channels.smsTollFree.name'),
      'campaign approval and setup (optional)': t('seax.pricing.channels.smsTollFree.campaignSetup'),
      monthly: t('seax.pricing.channels.smsTollFree.monthly'),
      usage: t('seax.pricing.channels.smsTollFree.usage'),
      description: t('seax.pricing.channels.smsTollFree.description'),
      icon: Shield,
      color: 'green'
    },
    {
      name: t('seax.pricing.channels.smsShortCode.name'),
      setup: t('seax.pricing.channels.smsShortCode.setup'),
      quarterly: t('seax.pricing.channels.smsShortCode.quarterly'),
      usage: t('seax.pricing.channels.smsShortCode.usage'),
      description: t('seax.pricing.channels.smsShortCode.description'),
      icon: Zap,
      color: 'purple'
    },
    {
      name: t('seax.pricing.channels.whatsapp.name'),
      'Meta Suite approval and setup (optional)': t('seax.pricing.channels.whatsapp.metaSetup'),
      monthly: t('seax.pricing.channels.whatsapp.monthly'),
      usage: t('seax.pricing.channels.whatsapp.usage'),
      description: t('seax.pricing.channels.whatsapp.description'),
      icon: Users,
      color: 'emerald'
    },
    {
      name: t('seax.pricing.channels.voice.name'),
      setup: t('seax.pricing.channels.voice.setup'),
      monthly: t('seax.pricing.channels.voice.monthly'),
      usage: t('seax.pricing.channels.voice.usage'),
      description: t('seax.pricing.channels.voice.description'),
      icon: Phone,
      color: 'orange'
    },
    {
      name: t('seax.pricing.channels.voicemail.name'),
      setup: t('seax.pricing.channels.voicemail.setup'),
      monthly: t('seax.pricing.channels.voicemail.monthly'),
      usage: t('seax.pricing.channels.voicemail.usage'),
      description: t('seax.pricing.channels.voicemail.description'),
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
      <Header />
      
      <SEOHelmet {...seoData} />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            {t('seax.pricing.hero.title.main')}
            <span className="text-blue-200 block">{t('seax.pricing.hero.title.highlight')}</span>
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            {t('seax.pricing.hero.description')}
          </p>
          
        </div>
      </div>

      {/* Pricing Tiers */}
      <div className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('seax.pricing.plans.title')}
            </h2>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-8">
              <span className={`mr-3 ${billingPeriod === 'monthly' ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>{t('seax.pricing.plans.billing.monthly')}</span>
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
                {t('seax.pricing.plans.billing.yearly')} <span className="text-green-500 font-semibold">{t('seax.pricing.plans.billing.savings')}</span>
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className="relative bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                {/* Header with gradient background */}
                <div className={`bg-gradient-to-r ${tier.bgColor} p-8 text-center`}>
                  <div className="text-sm text-white/80 mb-2">{tier.subheader}</div>
                  <h3 className={`text-2xl font-bold mb-4 ${tier.textColor}`}>{tier.name}</h3>
                </div>
                
                {/* Pricing */}
                <div className="px-8 py-6 text-center">
                  {tier.name === t('seax.pricing.plans.custom.name') ? (
                    <div className="mb-4">
                      <div className="text-xl font-medium text-gray-600 mb-2">{tier.description}</div>
                    </div>
                  ) : tier.name === t('seax.pricing.plans.omnichannel.name') ? (
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
                  {tier.name === t('seax.pricing.plans.custom.name') ? (
                    <a
                      href={getMeetingUrl(currentLanguage)}
                      className="w-full py-3 px-6 rounded-lg font-semibold transition-all transform hover:scale-105 text-center inline-block bg-green-500 hover:bg-green-600 text-white"
                    >
                      {tier.cta}
                    </a>
                  ) : (
                    <a
                      href="https://seax.seasalt.ai/signup"
                      className={`w-full py-3 px-6 rounded-lg font-semibold transition-all transform hover:scale-105 text-center inline-block ${
                        tier.name === t('seax.pricing.plans.whatsapp.name')
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
              {t('seax.pricing.plans.disclaimer')}
            </p>
          </div>
        </div>
      </div>

      {/* Channel-Specific Pricing */}
      <div className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('seax.pricing.channels.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('seax.pricing.channels.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {channelPricing.map((channel, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
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
                      <span className="text-gray-600 text-sm">{t('seax.pricing.channels.labels.campaignSetup')}</span>
                      <span className="font-semibold text-sm">{channel['campaign approval and setup (optional)']}</span>
                    </div>
                  )}
                  {channel['Meta Suite approval and setup (optional)'] && (
                    <div className="flex justify-between">
                      <span className="text-gray-600 text-sm">{t('seax.pricing.channels.labels.metaSetup')}</span>
                      <span className="font-semibold text-sm">{channel['Meta Suite approval and setup (optional)']}</span>
                    </div>
                  )}
                  
                  {/* Setup */}
                  {channel.setup && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">{t('seax.pricing.channels.labels.setup')}</span>
                      <span className="font-semibold">{channel.setup}</span>
                    </div>
                  )}
                  
                  {/* Monthly */}
                  {channel.monthly && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">{t('seax.pricing.channels.labels.monthly')}</span>
                      <span className="font-semibold text-sm">{channel.monthly}</span>
                    </div>
                  )}
                  
                  {/* Quarterly */}
                  {channel.quarterly && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">{t('seax.pricing.channels.labels.quarterly')}</span>
                      <span className="font-semibold">{channel.quarterly}</span>
                    </div>
                  )}
                  
                  {/* Usage */}
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t('seax.pricing.channels.labels.usage')}</span>
                    <span className="font-semibold">{channel.usage}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Omni-channel Calculator */}
      <div className="py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <OmniChannelCalculator />
        </div>
      </div>

      {/* ROI Calculator */}
      <div className="py-20 bg-gradient-to-br from-rose-50 via-pink-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('seax.pricing.roi.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('seax.pricing.roi.subtitle')}
            </p>
          </div>
          
          <ROICalculator />
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('seax.pricing.faq.title')}
            </h2>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {t('seax.pricing.faq.volume.question')}
              </h3>
              <p className="text-gray-600">
                {t('seax.pricing.faq.volume.answer')}
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {t('seax.pricing.faq.fees.question')}
              </h3>
              <p className="text-gray-600">
                {t('seax.pricing.faq.fees.answer')}
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {t('seax.pricing.faq.plans.question')}
              </h3>
              <p className="text-gray-600">
                {t('seax.pricing.faq.plans.answer')}
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {t('seax.pricing.faq.international.question')}
              </h3>
              <p className="text-gray-600">
                {t('seax.pricing.faq.international.answer')}
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
            {t('seax.pricing.cta.title')}
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            {t('seax.pricing.cta.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://seax.seasalt.ai/signup"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2"
            >
              <span>{t('seax.pricing.cta.signUp')}</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            
            <a
              href={getMeetingUrl(currentLanguage)}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              {t('seax.pricing.cta.talkToSales')}
            </a>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Pricing;

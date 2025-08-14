import { useState } from 'react';
import { Check, Star, ChevronDown, Users, Building2, Sparkles, MessageSquare, Phone, Bot, Instagram, Facebook, Monitor, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEOHelmet from '../components/SEOHelmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { SUPPORTED_LANGUAGES } from '../constants/languages';

const PricingPage = () => {
  const { t, i18n } = useTranslation();
  const [isAnnualBilling, setIsAnnualBilling] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  // Generate canonical URL for SEO
  const canonicalUrl = typeof window !== 'undefined' 
    ? `${window.location.origin}/${i18n.language}/pricing` 
    : `/${i18n.language}/pricing`;

  const plans = [
    {
      name: t('pricing.legacy.liveAgent.name'),
      price: t('pricing.legacy.liveAgent.price'),
      period: t('pricing.legacy.liveAgent.period'),
      tagline: t('pricing.legacy.liveAgent.tagline'),
      description: t('pricing.legacy.liveAgent.description'),
      features: [
        t('pricing.legacy.liveAgent.features.0'),
        t('pricing.legacy.liveAgent.features.1'),
        t('pricing.legacy.liveAgent.features.2'),
        t('pricing.legacy.liveAgent.features.3'),
        t('pricing.legacy.liveAgent.features.4')
      ],
      cta: t('pricing.legacy.liveAgent.cta'),
      ctaStyle: 'bg-gray-600 hover:bg-gray-700 text-white',
      popular: false
    },
    {
      name: t('pricing.legacy.professional.name'),
      price: isAnnualBilling ? t('pricing.legacy.professional.priceAnnual') : t('pricing.legacy.professional.priceMonthly'),
      period: t('pricing.legacy.professional.period'),
      additionalPrice: isAnnualBilling ? t('pricing.legacy.professional.additionalPriceAnnual') : t('pricing.legacy.professional.additionalPriceMonthly'),
      tagline: t('pricing.legacy.professional.tagline'),
      description: t('pricing.legacy.professional.description'),
      features: [
        t('pricing.legacy.professional.features.0'),
        t('pricing.legacy.professional.features.1'),
        t('pricing.legacy.professional.features.2'),
        t('pricing.legacy.professional.features.3'),
        t('pricing.legacy.professional.features.4'),
        t('pricing.legacy.professional.features.5'),
        t('pricing.legacy.professional.features.6'),
        t('pricing.legacy.professional.features.7')
      ],
      cta: t('pricing.legacy.professional.cta'),
      ctaStyle: 'bg-blue-600 hover:bg-blue-700 text-white',
      popular: true
    },
    {
      name: t('pricing.legacy.enterprise.name'),
      price: t('pricing.legacy.enterprise.price'),
      period: t('pricing.legacy.enterprise.period'),
      tagline: t('pricing.legacy.enterprise.tagline'),
      description: t('pricing.legacy.enterprise.description'),
      features: [
        t('pricing.legacy.enterprise.features.0'),
        t('pricing.legacy.enterprise.features.1'),
        t('pricing.legacy.enterprise.features.2'),
        t('pricing.legacy.enterprise.features.3'),
        t('pricing.legacy.enterprise.features.4'),
        t('pricing.legacy.enterprise.features.5'),
        t('pricing.legacy.enterprise.features.6'),
        t('pricing.legacy.enterprise.features.7')
      ],
      cta: t('pricing.legacy.enterprise.cta'),
      ctaStyle: 'border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600',
      popular: false
    }
  ];

  const competitors = [
    {
      name: t('pricing.comparisonseasalt.name'),
      startingPrice: t('pricing.comparison.seasalt.startingPrice'),
      pricingModel: t('pricing.comparison.seasalt.pricingModel'),
      unifiedVoiceDigital: t('pricing.comparison.seasalt.unifiedVoiceDigital'),
      aiCapabilities: t('pricing.comparison.seasalt.aiCapabilities'),
      bestFor: t('pricing.comparison.seasalt.bestFor'),
      highlight: true,
      link: null
    },
    {
      name: t('pricing.comparison.aircall.name'),
      startingPrice: t('pricing.comparison.aircall.startingPrice'),
      pricingModel: t('pricing.comparison.aircall.pricingModel'),
      unifiedVoiceDigital: t('pricing.comparison.aircall.unifiedVoiceDigital'),
      aiCapabilities: t('pricing.comparison.aircall.aiCapabilities'),
      bestFor: t('pricing.comparison.aircall.bestFor'),
      highlight: false,
      link: '/compare/aircall-alternative'
    },
    {
      name: t('pricing.comparison.ringcentral.name'),
      startingPrice: t('pricing.comparison.ringcentral.startingPrice'),
      pricingModel: t('pricing.comparison.ringcentral.pricingModel'),
      unifiedVoiceDigital: t('pricing.comparison.ringcentral.unifiedVoiceDigital'),
      aiCapabilities: t('pricing.comparison.ringcentral.aiCapabilities'),
      bestFor: t('pricing.comparison.ringcentral.bestFor'),
      highlight: false,
      link: '/compare/ringcentral-alternative'
    },
    {
      name: t('pricing.comparison.genesys.name'),
      startingPrice: t('pricing.comparison.genesys.startingPrice'),
      pricingModel: t('pricing.comparison.genesys.pricingModel'),
      unifiedVoiceDigital: t('pricing.comparison.genesys.unifiedVoiceDigital'),
      aiCapabilities: t('pricing.comparison.genesys.aiCapabilities'),
      bestFor: t('pricing.comparison.genesys.bestFor'),
      highlight: false,
      link: '/compare/genesys-alternative'
    },
    {
      name: t('pricing.comparison.five9.name'),
      startingPrice: t('pricing.comparison.five9.startingPrice'),
      pricingModel: t('pricing.comparison.five9.pricingModel'),
      unifiedVoiceDigital: t('pricing.comparison.five9.unifiedVoiceDigital'),
      aiCapabilities: t('pricing.comparison.five9.aiCapabilities'),
      bestFor: t('pricing.comparison.five9.bestFor'),
      highlight: false,
      link: '/compare/five9-alternative'
    },
    {
      name: t('pricing.comparison.googleVoice.name'),
      startingPrice: t('pricing.comparison.googleVoice.startingPrice'),
      pricingModel: t('pricing.comparison.googleVoice.pricingModel'),
      unifiedVoiceDigital: t('pricing.comparison.googleVoice.unifiedVoiceDigital'),
      aiCapabilities: t('pricing.comparison.googleVoice.aiCapabilities'),
      bestFor: t('pricing.comparison.googleVoice.bestFor'),
      highlight: false,
      link: '/compare/google-voice-alternative'
    },
    {
      name: t('pricing.comparison.respondIo.name'),
      startingPrice: t('pricing.comparison.respondIo.startingPrice'),
      pricingModel: t('pricing.comparison.respondIo.pricingModel'),
      unifiedVoiceDigital: t('pricing.comparison.respondIo.unifiedVoiceDigital'),
      aiCapabilities: t('pricing.comparison.respondIo.aiCapabilities'),
      bestFor: t('pricing.comparison.respondIo.bestFor'),
      highlight: false,
      link: '/compare/respond-io-alternative'
    },
    {
      name: t('pricing.comparison.intercom.name'),
      startingPrice: t('pricing.comparison.intercom.startingPrice'),
      pricingModel: t('pricing.comparison.intercom.pricingModel'),
      unifiedVoiceDigital: t('pricing.comparison.intercom.unifiedVoiceDigital'),
      aiCapabilities: t('pricing.comparison.intercom.aiCapabilities'),
      bestFor: t('pricing.comparison.intercom.bestFor'),
      highlight: false,
      link: '/compare/intercom-alternative'
    }
  ];

  const faqs = [
    {
      question: t('pricing.faq.1.question'),
      answer: t('pricing.faq.1.answer')
    },
    {
      question: t('pricing.faq.2.question'),
      answer: t('pricing.faq.2.answer')
    },
    {
      question: t('pricing.faq.3.question'),
      answer: t('pricing.faq.3.answer')
    },
    {
      question: t('pricing.faq.4.question'),
      answer: t('pricing.faq.4.answer')
    },
    {
      question: t('pricing.faq.5.question'),
      answer: t('pricing.faq.5.answer')
    },
    {
      question: t('pricing.faq.6.question'),
      answer: t('pricing.faq.6.answer')
    },
    {
      question: t('pricing.faq.7.question'),
      answer: t('pricing.faq.7.answer')
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Tags */}
      <SEOHelmet
        title={t('pricing.seo.title')}
        description={t('pricing.seo.description')}
        favicon="/seasalt-ai-favicon.ico"
        canonicalUrl={canonicalUrl}
        availableLanguages={SUPPORTED_LANGUAGES}
      />
      {/* Global Header */}
      <Header />
      {/* Main Content */}
      <main>
        {/* Hero Section with Gradient Background */}
        <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                {t('pricing.hero.title')}
              </h1>
              <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto mb-6 sm:mb-8">
                {t('pricing.hero.description')}
              </p>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden py-12 sm:py-20">

          {/* Strategy 3: Audience-Focused Section */}
          <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50 mb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('pricing.audienceSection.title')}</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  {t('pricing.audienceSection.description')}
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                {/* For Startups - Enhanced Design */}
                <div className="relative bg-gradient-to-br from-teal-50 via-green-50 to-emerald-50 rounded-3xl p-8 shadow-2xl border-2 border-teal-200 hover:shadow-3xl hover:scale-105 transition-all duration-300 group">
                  {/* Decorative Element */}
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-teal-400 to-green-500 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-green-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{t('pricing.audienceSection.startups.title')}</h3>
                        <p className="text-teal-600 font-medium">{t('pricing.audienceSection.startups.subtitle')}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-5">
                      <div className="bg-white/70 rounded-xl p-4 shadow-sm">
                        <div className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <Check className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <p className="font-bold text-gray-900">{t('pricing.audienceSection.startups.seachatFree.title')}</p>
                            <p className="text-sm text-gray-700">{t('pricing.audienceSection.startups.seachatFree.description')}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/70 rounded-xl p-4 shadow-sm">
                        <div className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <Check className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <p className="font-bold text-gray-900">{t('pricing.audienceSection.startups.seavoice.title')}</p>
                            <p className="text-sm text-gray-700">{t('pricing.audienceSection.startups.seavoice.description')}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/70 rounded-xl p-4 shadow-sm">
                        <div className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <Check className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <p className="font-bold text-gray-900">{t('pricing.audienceSection.startups.seax.title')}</p>
                            <p className="text-sm text-gray-700">{t('pricing.audienceSection.startups.seax.description')}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 pt-4 border-t border-teal-200">
                      <p className="text-center font-semibold text-teal-700">{t('pricing.audienceSection.startups.footer')}</p>
                    </div>
                  </div>
                </div>
                
                {/* For Enterprises - Enhanced Design */}
                <div className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl p-8 shadow-2xl border-2 border-blue-200 hover:shadow-3xl hover:scale-105 transition-all duration-300 group">
                  {/* Decorative Element */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                        <Building2 className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{t('pricing.audienceSection.enterprise.title')}</h3>
                        <p className="text-blue-600 font-medium">{t('pricing.audienceSection.enterprise.subtitle')}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-5">
                      <div className="bg-white/70 rounded-xl p-4 shadow-sm">
                        <div className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <Check className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <p className="font-bold text-gray-900">{t('pricing.audienceSection.enterprise.seachatPremium.title')}</p>
                            <p className="text-sm text-gray-700">{t('pricing.audienceSection.enterprise.seachatPremium.description')}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/70 rounded-xl p-4 shadow-sm">
                        <div className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <Check className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <p className="font-bold text-gray-900">{t('pricing.audienceSection.enterprise.seaxProfessional.title')}</p>
                            <p className="text-sm text-gray-700">{t('pricing.audienceSection.enterprise.seaxProfessional.description')}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/70 rounded-xl p-4 shadow-sm">
                        <div className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <Check className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <p className="font-bold text-gray-900">{t('pricing.audienceSection.enterprise.customEnterprise.title')}</p>
                            <p className="text-sm text-gray-700">{t('pricing.audienceSection.enterprise.customEnterprise.description')}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 pt-4 border-t border-blue-200">
                      <p className="text-center font-semibold text-blue-700">{t('pricing.audienceSection.enterprise.footer')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* New Plan Structure */}
          <div className="mb-16 sm:mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('pricing.plans.title')}</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {t('pricing.plans.description')}
              </p>
            </div>
            
            {/* 4 Main Plans - ULTRA BOLD DISTINCTIONS */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto mb-12">
              {/* Live Agent - SeaChat Free */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-300 hover:shadow-2xl transition-all transform hover:scale-105 relative overflow-visible">
                {/* Bold Visual Indicator */}
                <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-orange-400 to-orange-600"></div>
                <div className="absolute -top-3 -right-3 bg-orange-500 text-white px-4 py-2 rounded-full text-xs font-bold transform rotate-12 shadow-lg whitespace-nowrap">
                  {t('pricing.plans.liveAgent.tagline')}
                </div>
                
                <div className="text-center mb-4 mt-2">
                  <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center">
                    <MessageSquare className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t('pricing.plans.liveAgent.name')}</h3>
                  <div className="text-4xl font-black text-orange-600 mb-1">{t('pricing.plans.liveAgent.price')}</div>
                  <p className="text-sm font-bold text-orange-700 mb-3 uppercase tracking-wide">{t('pricing.plans.liveAgent.period')}</p>
                </div>
                
                {/* MEGA HIGHLIGHT BOX */}
                <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-3 mb-4">
                  <p className="text-center font-black text-orange-800 text-sm uppercase tracking-wide">
                    {t('pricing.plans.liveAgent.highlight')}
                  </p>
                  <p className="text-center text-xs text-orange-700 mt-1">
                    {t('pricing.plans.liveAgent.channels')}
                  </p>
                </div>
                
                <div className="space-y-2 mb-6">
                  <div className="bg-orange-50 rounded p-2 flex items-start space-x-2">
                    <Check className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span className="text-xs font-semibold text-orange-800">{t('pricing.plans.liveAgent.feature1')}</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-gray-700">{t('pricing.plans.liveAgent.feature2')}</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-gray-700">{t('pricing.plans.liveAgent.feature3')}</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-gray-700">{t('pricing.plans.liveAgent.feature4')}</span>
                  </div>
                </div>
                <a 
                  href="https://chat.seasalt.ai/signup"
                  className="block bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-4 py-3 rounded-lg font-bold transition-all text-center text-sm shadow-lg transform hover:scale-105 mb-2"
                >
                  {t('pricing.plans.liveAgent.cta')}
                </a>
                <p className="text-center text-xs text-gray-500">{t('pricing.plans.liveAgent.poweredBy')}</p>
              </div>
              
              {/* WhatsApp Only - SeaX */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-emerald-300 hover:shadow-2xl transition-all transform hover:scale-105 relative overflow-visible">
                {/* Bold Visual Indicator */}
                <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-emerald-400 to-green-500"></div>
                <div className="absolute -top-3 -right-3 bg-emerald-500 text-white px-4 py-2 rounded-full text-xs font-bold transform rotate-12 shadow-lg whitespace-nowrap">
                  {t('pricing.plans.whatsappOnly.tagline')}
                </div>
                
                <div className="text-center mb-4 mt-2">
                  <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full flex items-center justify-center">
                    <Phone className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t('pricing.plans.whatsappOnly.name')}</h3>
                  <div className="text-4xl font-black text-emerald-600 mb-1">{t('pricing.plans.whatsappOnly.price')}</div>
                  <p className="text-sm font-bold text-emerald-700 mb-3 uppercase tracking-wide">{t('pricing.plans.whatsappOnly.period')}</p>
                </div>
                
                {/* MEGA HIGHLIGHT BOX */}
                <div className="bg-emerald-50 border-2 border-emerald-200 rounded-lg p-3 mb-4">
                  <p className="text-center font-black text-emerald-800 text-sm uppercase tracking-wide">
                    {t('pricing.plans.whatsappOnly.highlight')}
                  </p>
                  <p className="text-center text-xs text-emerald-700 mt-1">
                    {t('pricing.plans.whatsappOnly.channels')}
                  </p>
                </div>
                
                <div className="space-y-2 mb-6">
                  <div className="bg-emerald-50 rounded p-2 flex items-start space-x-2">
                    <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-xs font-semibold text-emerald-800">{t('pricing.plans.whatsappOnly.feature1')}</span>
                  </div>
                  <div className="bg-emerald-50 rounded p-2 flex items-start space-x-2">
                    <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-xs font-semibold text-emerald-800">{t('pricing.plans.whatsappOnly.feature2')}</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-gray-700">{t('pricing.plans.whatsappOnly.feature3')}</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-gray-700">{t('pricing.plans.whatsappOnly.feature4')}</span>
                  </div>
                </div>
                <a 
                  href="https://seax.seasalt.ai/signup"
                  className="block bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-4 py-3 rounded-lg font-bold transition-all text-center text-sm shadow-lg transform hover:scale-105 mb-2"
                >
                  {t('pricing.plans.whatsappOnly.cta')}
                </a>
                <p className="text-center text-xs text-gray-500">{t('pricing.plans.whatsappOnly.poweredBy')}</p>
              </div>
              
              {/* Omnichannel - SeaX */}
              <div className="bg-white rounded-2xl p-6 shadow-xl border-4 border-blue-400 hover:shadow-2xl transition-all transform hover:scale-105 relative overflow-visible pt-12">
                {/* ULTRA Bold Visual Indicators - Fixed positioning */}
                <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 animate-pulse"></div>
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-xs font-black flex items-center shadow-2xl">
                    <Star className="w-4 h-4 mr-1 animate-spin" />
                    {t('pricing.plans.omnichannel.popular')}
                  </span>
                </div>
                <div className="absolute -top-4 -right-4 bg-blue-500 text-white px-4 py-3 rounded-full text-xs font-bold transform rotate-12 shadow-lg whitespace-nowrap z-20">
                  {t('pricing.plans.omnichannel.tagline')}
                </div>
                
                <div className="text-center mb-4 mt-4">
                  <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-blue-100 to-purple-200 rounded-full flex items-center justify-center">
                    <Building2 className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t('pricing.plans.omnichannel.name')}</h3>
                  <div className="flex justify-center items-center space-x-2 mb-1">
                    <div>
                      <div className="text-3xl font-black text-blue-600">{t('pricing.plans.omnichannel.firstUserPrice')}</div>
                      <div className="text-xs font-bold text-blue-700">{t('pricing.plans.omnichannel.firstUserLabel')}</div>
                    </div>
                    <div className="text-blue-400 font-black text-2xl">+</div>
                    <div>
                      <div className="text-3xl font-black text-blue-600">{t('pricing.plans.omnichannel.additionalUserPrice')}</div>
                      <div className="text-xs font-bold text-blue-700">{t('pricing.plans.omnichannel.additionalUserLabel')}</div>
                    </div>
                  </div>
                  <p className="text-sm font-bold text-blue-700 mb-3 uppercase tracking-wide">{t('pricing.plans.omnichannel.period')}</p>
                </div>
                
                {/* MEGA HIGHLIGHT BOX */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-300 rounded-lg p-3 mb-4">
                  <p className="text-center font-black text-blue-800 text-sm uppercase tracking-wide">
                    {t('pricing.plans.omnichannel.highlight')}
                  </p>
                  <p className="text-center text-xs text-blue-700 mt-1 font-semibold">
                    {t('pricing.plans.omnichannel.subHighlight')}
                  </p>
                </div>
                
                <div className="space-y-2 mb-6">
                  <div className="bg-blue-50 rounded p-2 flex items-start space-x-2 border border-blue-200">
                    <Phone className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-xs font-black text-blue-800">{t('pricing.plans.omnichannel.feature1')}</span>
                  </div>
                  <div className="bg-blue-50 rounded p-2 flex items-start space-x-2 border border-blue-200">
                    <Users className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-xs font-black text-blue-800">{t('pricing.plans.omnichannel.feature2')}</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-gray-700">{t('pricing.plans.omnichannel.feature3')}</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-gray-700">{t('pricing.plans.omnichannel.feature4')}</span>
                  </div>
                </div>
                <a 
                  href="https://SeaX.seasalt.ai/signup"
                  className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 text-white px-4 py-3 rounded-lg font-black transition-all text-center text-sm shadow-2xl transform hover:scale-105 uppercase mb-2"
                >
                  {t('pricing.plans.omnichannel.cta')}
                </a>
                <p className="text-center text-xs text-gray-500">{t('pricing.plans.omnichannel.poweredBy')}</p>
              </div>
              
              {/* Custom - Enterprise */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-300 hover:shadow-xl transition-all">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 mx-auto mb-3 bg-gray-100 rounded-full flex items-center justify-center">
                    <Building2 className="w-8 h-8 text-gray-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t('pricing.plans.custom.name')}</h3>
                  <div className="text-lg font-semibold text-gray-600 mb-2">{t('pricing.plans.custom.subtitle')}</div>
                  <p className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wide">{t('pricing.plans.custom.period')}</p>
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-gray-700">{t('pricing.plans.custom.feature1')}</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-gray-700">{t('pricing.plans.custom.feature2')}</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-gray-700">{t('pricing.plans.custom.feature3')}</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-gray-700">{t('pricing.plans.custom.feature4')}</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-gray-700">{t('pricing.plans.custom.feature5')}</span>
                  </div>
                </div>
                <a 
                  href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
                  className="block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors text-center text-sm"
                >
                  {t('pricing.plans.custom.cta')}
                </a>
              </div>
            </div>
            
            {/* AI Add-ons with Combo Pricing */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('pricing.aiAddons.title')}</h3>
                <p className="text-lg text-gray-600">
                  {t('pricing.aiAddons.description')}
                </p>
              </div>
              
              <div className="flex flex-col lg:flex-row items-center justify-center gap-8 max-w-4xl mx-auto">
                {/* Chat AI with SeaChat */}
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 text-center flex-1 max-w-xs">
                  <MessageSquare className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">{t('pricing.aiAddons.chatAI.title')}</h4>
                  <div className="text-2xl font-bold text-green-600 mb-2">{t('pricing.aiAddons.chatAI.price')}</div>
                  <p className="text-sm text-gray-600">{t('pricing.aiAddons.chatAI.period')}</p>
                </div>
                
                {/* Plus Sign */}
                <div className="text-2xl font-bold text-gray-400">+</div>
                
                {/* Voice AI with SeaVoice */}
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 text-center flex-1 max-w-xs">
                  <Phone className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">{t('pricing.aiAddons.voiceAI.title')}</h4>
                  <div className="text-2xl font-bold text-blue-600 mb-2">{t('pricing.aiAddons.voiceAI.price')}</div>
                  <p className="text-sm text-gray-600">{t('pricing.aiAddons.voiceAI.period')}</p>
                </div>
                
                {/* Equals Sign */}
                <div className="text-2xl font-bold text-gray-400">=</div>
                
                {/* Combo Price */}
                <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-xl p-6 shadow-lg text-center flex-1 max-w-xs">
                  <Sparkles className="w-8 h-8 text-white mx-auto mb-3" />
                  <h4 className="text-lg font-semibold mb-2">{t('pricing.aiAddons.combo.title')}</h4>
                  <div className="text-2xl font-bold mb-2">{t('pricing.aiAddons.combo.price')}</div>
                  <p className="text-sm opacity-90">{t('pricing.aiAddons.combo.period')}</p>
                </div>
              </div>
              
              <div className="text-center mt-6">
                <p className="text-lg font-semibold text-gray-700">
                  {t('pricing.aiAddons.combo.benefit')}
                </p>
              </div>
            </div>
            
            {/* Transparent AI Pricing */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 mb-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('pricing.transparentAI.title')}</h3>
                <p className="text-lg text-gray-600">
                  {t('pricing.transparentAI.description')}
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {/* Chat AI */}
                <div className="bg-white rounded-xl shadow-md p-6 text-center">
                  <MessageSquare className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{t('pricing.transparentAI.chatAI.title')}</h4>
                  <div className="text-3xl font-bold text-green-600 mb-2">{t('pricing.transparentAI.chatAI.price')}</div>
                  <p className="text-sm text-gray-600 mb-4">{t('pricing.transparentAI.chatAI.period')}</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• {t('pricing.transparentAI.chatAI.feature1')}</li>
                    <li>• {t('pricing.transparentAI.chatAI.feature2')}</li>
                    <li>• {t('pricing.transparentAI.chatAI.feature3')}</li>
                  </ul>
                </div>
                
                {/* Voice AI */}
                <div className="bg-white rounded-xl shadow-md p-6 text-center">
                  <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{t('pricing.transparentAI.voiceAI.title')}</h4>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{t('pricing.transparentAI.voiceAI.price')}</div>
                  <p className="text-sm text-gray-600 mb-4">{t('pricing.transparentAI.voiceAI.period')}</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• {t('pricing.transparentAI.voiceAI.feature1')}</li>
                    <li>• {t('pricing.transparentAI.voiceAI.feature2')}</li>
                    <li>• {t('pricing.transparentAI.voiceAI.feature3')}</li>
                  </ul>
                </div>
                
                {/* Premium AI */}
                <div className="bg-white rounded-xl shadow-md p-6 text-center">
                  <Sparkles className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{t('pricing.transparentAI.premiumAI.title')}</h4>
                  <div className="text-3xl font-bold text-purple-600 mb-2">{t('pricing.transparentAI.premiumAI.price')}</div>
                  <p className="text-sm text-gray-600 mb-4">{t('pricing.transparentAI.premiumAI.period')}</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• {t('pricing.transparentAI.premiumAI.feature1')}</li>
                    <li>• {t('pricing.transparentAI.premiumAI.feature2')}</li>
                    <li>• {t('pricing.transparentAI.premiumAI.feature3')}</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Transparent Communication Pricing */}
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('pricing.transparentCommunication.title')}</h3>
                <p className="text-lg text-gray-600">
                  {t('pricing.transparentCommunication.title')}
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {/* SMS */}
                <div className="bg-blue-50 rounded-xl p-6 text-center border border-blue-200">
                  <MessageSquare className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{t('pricing.transparentCommunication.sms.title')}</h4>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{t('pricing.transparentCommunication.sms.price')}</div>
                  <p className="text-sm text-gray-600 mb-4">{t('pricing.transparentCommunication.sms.period')}</p>
                  <p className="text-sm text-gray-600">{t('pricing.transparentCommunication.sms.description')}</p>
                </div>
                
                {/* Voice Calls */}
                <div className="bg-green-50 rounded-xl p-6 text-center border border-green-200">
                  <Phone className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{t('pricing.transparentCommunication.voiceCalls.title')}</h4>
                  <div className="text-3xl font-bold text-green-600 mb-2">{t('pricing.transparentCommunication.voiceCalls.price')}</div>
                  <p className="text-sm text-gray-600 mb-4">{t('pricing.transparentCommunication.voiceCalls.period')}</p>
                  <p className="text-sm text-gray-600">{t('pricing.transparentCommunication.voiceCalls.description')}</p>
                </div>
                
                {/* WhatsApp Business */}
                <div className="bg-emerald-50 rounded-xl p-6 text-center border border-emerald-200">
                  <Users className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{t('pricing.transparentCommunication.whatsapp.title')}</h4>
                  <div className="text-3xl font-bold text-emerald-600 mb-2">{t('pricing.transparentCommunication.whatsapp.price')}</div>
                  <p className="text-sm text-gray-600 mb-4">{t('pricing.transparentCommunication.whatsapp.period')}</p>
                  <p className="text-sm text-gray-600">{t('pricing.transparentCommunication.whatsapp.description')}</p>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                  {t('pricing.transparentCommunication.otherChannels')}
                </p>
              </div>
            </div>
          </div>

          {/* Master Competitor Comparison Table */}
          <div className="mb-16 sm:mb-20">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {t('pricing.comparison.title')}
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                {t('pricing.comparison.description')}
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[800px]">
                  <thead className="bg-gray-50 text-left">
                    <tr>
                      <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-gray-900">{t('pricing.comparison.table.competitor')}</th>
                      <th className="px-4 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm font-semibold text-gray-900">{t('pricing.comparison.table.startingPrice')}</th>
                      <th className="px-4 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm font-semibold text-gray-900">{t('pricing.comparison.table.pricingModel')}</th>
                      <th className="px-4 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm font-semibold text-gray-900">{t('pricing.comparison.table.unifiedVoiceDigital')}</th>
                      <th className="px-4 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm font-semibold text-gray-900">{t('pricing.comparison.table.aiCapabilities')}</th>
                      <th className="px-4 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm font-semibold text-gray-900">{t('pricing.comparison.table.bestFor')}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {competitors.map((competitor, index) => (
                      <tr 
                        key={index} 
                        className={competitor.highlight ? 'bg-blue-50 border-2 border-blue-200' : 'hover:bg-gray-50'}
                      >
                        <td className="px-4 sm:px-6 py-3 sm:py-4">
                          <div className="flex items-center flex-wrap gap-2">
                            <div className="flex-shrink-0">
                              {competitor.link ? (
                                <Link 
                                  to={competitor.link}
                                  className={`text-xs sm:text-sm font-semibold hover:underline break-words hyphens-auto ${
                                    competitor.highlight ? 'text-blue-900' : 'text-blue-600 hover:text-blue-800'
                                  }`}
                                >
                                  {competitor.name}
                                </Link>
                              ) : (
                                <span className={`text-xs sm:text-sm font-semibold break-words hyphens-auto ${competitor.highlight ? 'text-blue-900' : 'text-gray-900'}`}>
                                  {competitor.name}
                                </span>
                              )}
                            </div>
                            {competitor.highlight && (
                              <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-blue-600 text-white text-xs rounded-full whitespace-nowrap flex-shrink-0">
                                {t('pricing.comparison.seasalt.recommended')}
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm text-gray-700">
                          <div className="break-words hyphens-auto">{competitor.startingPrice}</div>
                        </td>
                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm text-gray-700">
                          <div className="break-words hyphens-auto">{competitor.pricingModel}</div>
                        </td>
                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm text-gray-700">
                          <div className="break-words hyphens-auto">{competitor.unifiedVoiceDigital}</div>
                        </td>
                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm text-gray-700">
                          <div className="break-words hyphens-auto">{competitor.aiCapabilities}</div>
                        </td>
                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm text-gray-700">
                          <div className="break-words hyphens-auto leading-tight">{competitor.bestFor}</div>
                        </td>
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
              {t('pricing.faq.title')}
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

          {/* Dramatic Final CTA Section */}
          <section className="relative py-20 bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-bounce delay-1000"></div>
              <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-500"></div>
            </div>
            
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              {/* Main Heading */}
              <div className="mb-8">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
                  {t('pricing.cta.title')}
                  <span className="block bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                    {t('pricing.cta.titleGradient')}
                  </span>
                </h2>
                <p className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                  {t('pricing.cta.description')}
                </p>
              </div>
              
              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-black text-white mb-2">{t('pricing.cta.stats.customers')}</div>
                  <div className="text-sm text-blue-200">{t('pricing.cta.stats.customersLabel')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-black text-white mb-2">{t('pricing.cta.stats.uptime')}</div>
                  <div className="text-sm text-blue-200">{t('pricing.cta.stats.uptimeLabel')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-black text-white mb-2">{t('pricing.cta.stats.support')}</div>
                  <div className="text-sm text-blue-200">{t('pricing.cta.stats.supportLabel')}</div>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <a
                  href="https://seax.seasalt.ai/signup"
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-xl font-black text-blue-900 bg-gradient-to-r from-yellow-300 via-orange-400 to-yellow-300 rounded-2xl shadow-2xl hover:shadow-yellow-300/50 transform hover:scale-110 transition-all duration-300 animate-pulse hover:animate-none"
                >
                  <span className="relative z-10 flex items-center">
                    {t('pricing.cta.primary')}
                    <Star className="w-6 h-6 ml-2 animate-spin" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                
                <a
                  href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
                  className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white border-2 border-white rounded-xl hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105"
                >
                  {t('pricing.cta.secondary')}
                </a>
              </div>
              
              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center items-center gap-6 text-blue-200 text-sm">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>{t('pricing.cta.trustBadge1')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>{t('pricing.cta.trustBadge2')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>{t('pricing.cta.trustBadge3')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>{t('pricing.cta.trustBadge4')}</span>
                </div>
              </div>
              
              {/* Urgency Message */}
              <div className="mt-8 p-4 bg-white/10 backdrop-blur rounded-xl border border-white/20">
                <p className="text-white font-semibold">
                  {t('pricing.cta.urgency')}
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;
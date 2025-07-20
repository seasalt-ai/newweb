import { useState } from 'react';
import { Check, Star, ChevronDown, Users, Building2, Sparkles, MessageSquare, Phone, Instagram, Facebook, Monitor, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEOHelmet from '../components/SEOHelmet';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PricingPage = () => {
  const { i18n } = useTranslation();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  // Generate canonical URL for SEO
  const canonicalUrl = typeof window !== 'undefined' 
    ? `${window.location.origin}/${i18n.language}/pricing` 
    : `/${i18n.language}/pricing`;


  const competitors = [
    {
      name: 'Seasalt.ai',
      startingPrice: '$20/agent/mo',
      pricingModel: 'Simple Per-User',
      unifiedVoiceDigital: '✅ Yes, Native',
      aiCapabilities: '✅ Yes, Native Voice \u0026 Chatbots',
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
      question: 'Is the free plan really free forever?',
      answer: 'Yes! Our Live Agent plan includes 1 human agent for life with unlimited conversations, chat history, and contacts. Plus, you get 100 lifetime AI replies to try our AI features. No credit card required, no hidden fees.'
    },
    {
      question: 'How does AI pricing work across SeaChat, SeaX, and SeaVoice?',
      answer: 'All Voice AI calls across SeaChat, SeaX, and SeaVoice use the same $0.12 per minute rate with ChatGPT-4o mini model. Chat AI responses start at $0.006 each. Higher-tier models like ChatGPT-4o cost $0.80 per minute and are available on premium plans.'
    },
    {
      question: 'Can I upgrade or downgrade my plan anytime?',
      answer: 'Absolutely! You can change your plan at any time. Upgrades take effect immediately, and downgrades take effect at the end of your current billing cycle. We\'ll prorate any billing adjustments.'
    },
    {
      question: 'What\'s the difference between WhatsApp Only and Omnichannel plans?',
      answer: 'WhatsApp Only ($19.99/month) focuses on WhatsApp messaging with unlimited contacts and templates. Omnichannel ($99/month for first user, $49 for additional) includes SMS, voice calls, campaigns, API access, and SeaChat integration for a complete contact center experience.'
    },
    {
      question: 'Are there any hidden fees or setup costs?',
      answer: 'No hidden fees ever! Phone numbers cost $2-$3/month with E911 address. SMS costs $0.02/message, voice calls $0.015/minute (USA/CA). WhatsApp messages are free worldwide - you pay Meta directly with no markup from us.'
    },
    {
      question: 'What happens to my data if I cancel?',
      answer: 'You own your data. You can export all your chat history, contacts, and knowledge base content at any time, even on the free plan. We believe in data freedom and transparency.'
    },
    {
      question: 'Do you offer volume discounts for large enterprises?',
      answer: 'Yes! Our Custom Enterprise plan offers negotiated pricing based on your specific volume and usage patterns. Contact our sales team for custom pricing, multiple workspaces, HIPAA compliance, and white-label solutions.'
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
          </div>

          {/* Strategy 3: Audience-Focused Section */}
          <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50 mb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Growth Path</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  From startups to enterprises, we have the right solution for every stage of your journey
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
                        <h3 className="text-2xl font-bold text-gray-900">For Startups & SMEs</h3>
                        <p className="text-teal-600 font-medium">Start Small, Scale Smart</p>
                      </div>
                    </div>
                    
                    <div className="space-y-5">
                      <div className="bg-white/70 rounded-xl p-4 shadow-sm">
                        <div className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <Check className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <p className="font-bold text-gray-900">🚀 Start Free with SeaChat</p>
                            <p className="text-sm text-gray-700">$0 forever - 1 human agent, unlimited chats</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/70 rounded-xl p-4 shadow-sm">
                        <div className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <Check className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <p className="font-bold text-gray-900">📞 Scale with SeaVoice</p>
                            <p className="text-sm text-gray-700">$29.99/month - Add voice AI for inbound calls</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/70 rounded-xl p-4 shadow-sm">
                        <div className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <Check className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <p className="font-bold text-gray-900">🌟 Grow with SeaX</p>
                            <p className="text-sm text-gray-700">$99/month - Complete omnichannel platform</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 pt-4 border-t border-teal-200">
                      <p className="text-center font-semibold text-teal-700">Perfect for businesses with 1-50 employees</p>
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
                        <h3 className="text-2xl font-bold text-gray-900">For Medium to Large Enterprises</h3>
                        <p className="text-blue-600 font-medium">Enterprise-Grade Solutions</p>
                      </div>
                    </div>
                    
                    <div className="space-y-5">
                      <div className="bg-white/70 rounded-xl p-4 shadow-sm">
                        <div className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <Check className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <p className="font-bold text-gray-900">🤖 SeaChat Premium</p>
                            <p className="text-sm text-gray-700">$29.99/month + usage - Enterprise-grade text AI</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/70 rounded-xl p-4 shadow-sm">
                        <div className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <Check className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <p className="font-bold text-gray-900">🏢 SeaX Professional</p>
                            <p className="text-sm text-gray-700">$99/month - Unified platform with AI and omnichannel</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/70 rounded-xl p-4 shadow-sm">
                        <div className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <Check className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <p className="font-bold text-gray-900">⚡ Custom Enterprise</p>
                            <p className="text-sm text-gray-700">Contact us - White-label, HIPAA, custom integrations</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 pt-4 border-t border-blue-200">
                      <p className="text-center font-semibold text-blue-700">Perfect for businesses with 50+ employees</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* New Plan Structure */}
          <div className="mb-16 sm:mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Start free and scale as you grow with our flexible pricing options
              </p>
            </div>
            
            {/* 4 Main Plans - ULTRA BOLD DISTINCTIONS */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto mb-12">
              {/* Live Agent - SeaChat Free */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-300 hover:shadow-2xl transition-all transform hover:scale-105 relative overflow-visible">
                {/* Bold Visual Indicator */}
                <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-orange-400 to-orange-600"></div>
                <div className="absolute -top-3 -right-3 bg-orange-500 text-white px-4 py-2 rounded-full text-xs font-bold transform rotate-12 shadow-lg whitespace-nowrap">
                  👤 HUMAN ONLY
                </div>
                
                <div className="text-center mb-4 mt-2">
                  <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center">
                    <MessageSquare className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Live Agent</h3>
                  <div className="text-4xl font-black text-orange-600 mb-1">$0</div>
                  <p className="text-sm font-bold text-orange-700 mb-3 uppercase tracking-wide">FREE FOREVER</p>
                </div>
                
                {/* MEGA HIGHLIGHT BOX */}
                <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-3 mb-4">
                  <p className="text-center font-black text-orange-800 text-sm uppercase tracking-wide">
                    🌟 ALL CHANNELS + HUMAN AGENTS ONLY
                  </p>
                  <p className="text-center text-xs text-orange-700 mt-1">
                    WhatsApp • Messenger • Line • Instagram • Web Chat
                  </p>
                </div>
                
                <div className="space-y-2 mb-6">
                  <div className="bg-orange-50 rounded p-2 flex items-start space-x-2">
                    <Check className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span className="text-xs font-semibold text-orange-800">1 human agent included</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-gray-700">Unlimited human conversations</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-gray-700">100 AI replies to try features</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-gray-700">Basic Shopify integrations</span>
                  </div>
                </div>
                <a 
                  href="https://chat.seasalt.ai/signup"
                  className="block bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-4 py-3 rounded-lg font-bold transition-all text-center text-sm shadow-lg transform hover:scale-105 mb-2"
                >
                  🚀 START FREE NOW
                </a>
                <p className="text-center text-xs text-gray-500">Powered by SeaChat</p>
              </div>
              
              {/* WhatsApp Only - SeaX */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-emerald-300 hover:shadow-2xl transition-all transform hover:scale-105 relative overflow-visible">
                {/* Bold Visual Indicator */}
                <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-emerald-400 to-green-500"></div>
                <div className="absolute -top-3 -right-3 bg-emerald-500 text-white px-4 py-2 rounded-full text-xs font-bold transform rotate-12 shadow-lg whitespace-nowrap">
                  💬 MESSAGING ONLY
                </div>
                
                <div className="text-center mb-4 mt-2">
                  <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full flex items-center justify-center">
                    <Phone className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">WhatsApp Only</h3>
                  <div className="text-4xl font-black text-emerald-600 mb-1">$19.99</div>
                  <p className="text-sm font-bold text-emerald-700 mb-3 uppercase tracking-wide">PER USER/MONTH</p>
                </div>
                
                {/* MEGA HIGHLIGHT BOX */}
                <div className="bg-emerald-50 border-2 border-emerald-200 rounded-lg p-3 mb-4">
                  <p className="text-center font-black text-emerald-800 text-sm uppercase tracking-wide">
                    📲 WHATSAPP BUSINESS SPECIALIST
                  </p>
                  <p className="text-center text-xs text-emerald-700 mt-1">
                    Campaigns • API • 2-Way Chat
                  </p>
                </div>
                
                <div className="space-y-2 mb-6">
                  <div className="bg-emerald-50 rounded p-2 flex items-start space-x-2">
                    <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-xs font-semibold text-emerald-800">WhatsApp Business Platform</span>
                  </div>
                  <div className="bg-emerald-50 rounded p-2 flex items-start space-x-2">
                    <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-xs font-semibold text-emerald-800">Campaign management tools</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-gray-700">WhatsApp API access</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-gray-700">Unlimited contacts & templates</span>
                  </div>
                </div>
                <a 
                  href="https://seax.seasalt.ai/signup"
                  className="block bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-4 py-3 rounded-lg font-bold transition-all text-center text-sm shadow-lg transform hover:scale-105 mb-2"
                >
                  📱 START WHATSAPP
                </a>
                <p className="text-center text-xs text-gray-500">Powered by SeaX</p>
              </div>
              
              {/* Omnichannel - SeaX */}
              <div className="bg-white rounded-2xl p-6 shadow-xl border-4 border-blue-400 hover:shadow-2xl transition-all transform hover:scale-105 relative overflow-visible pt-12">
                {/* ULTRA Bold Visual Indicators - Fixed positioning */}
                <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 animate-pulse"></div>
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-xs font-black flex items-center shadow-2xl">
                    <Star className="w-4 h-4 mr-1 animate-spin" />
                    🏆 MOST POPULAR
                  </span>
                </div>
                <div className="absolute -top-4 -right-4 bg-blue-500 text-white px-4 py-3 rounded-full text-xs font-bold transform rotate-12 shadow-lg whitespace-nowrap z-20">
                  🌐 ONE UI, ALL CHANNELS
                </div>
                
                <div className="text-center mb-4 mt-4">
                  <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-blue-100 to-purple-200 rounded-full flex items-center justify-center">
                    <Building2 className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Omnichannel</h3>
                  <div className="flex justify-center items-center space-x-2 mb-1">
                    <div>
                      <div className="text-3xl font-black text-blue-600">$99</div>
                      <div className="text-xs font-bold text-blue-700">FIRST USER</div>
                    </div>
                    <div className="text-blue-400 font-black text-2xl">+</div>
                    <div>
                      <div className="text-3xl font-black text-blue-600">$49</div>
                      <div className="text-xs font-bold text-blue-700">EACH EXTRA</div>
                    </div>
                  </div>
                  <p className="text-sm font-bold text-blue-700 mb-3 uppercase tracking-wide">PER MONTH</p>
                </div>
                
                {/* MEGA HIGHLIGHT BOX */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-300 rounded-lg p-3 mb-4">
                  <p className="text-center font-black text-blue-800 text-sm uppercase tracking-wide">
                    🎯 COMPLETE CONTACT CENTER
                  </p>
                  <p className="text-center text-xs text-blue-700 mt-1 font-semibold">
                    Make & Receive PHONE CALLS!
                  </p>
                </div>
                
                <div className="space-y-2 mb-6">
                  <div className="bg-blue-50 rounded p-2 flex items-start space-x-2 border border-blue-200">
                    <Phone className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-xs font-black text-blue-800">AGENTS MAKE & RECEIVE CALLS</span>
                  </div>
                  <div className="bg-blue-50 rounded p-2 flex items-start space-x-2 border border-blue-200">
                    <Users className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-xs font-black text-blue-800">SMS + VOICE + WHATSAPP</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-gray-700">Voice & SMS campaigns</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-gray-700">RESTful API + SeaChat integration</span>
                  </div>
                </div>
                <a 
                  href="https://SeaX.seasalt.ai/signup"
                  className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 text-white px-4 py-3 rounded-lg font-black transition-all text-center text-sm shadow-2xl transform hover:scale-105 uppercase mb-2"
                >
                  🚀 START FULL CENTER
                </a>
                <p className="text-center text-xs text-gray-500">Powered by SeaX</p>
              </div>
              
              {/* Custom - Enterprise */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-300 hover:shadow-xl transition-all">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 mx-auto mb-3 bg-gray-100 rounded-full flex items-center justify-center">
                    <Building2 className="w-8 h-8 text-gray-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Custom</h3>
                  <div className="text-lg font-semibold text-gray-600 mb-2">Let's build a project</div>
                  <p className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wide">Negotiate your own price</p>
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-gray-700">Multiple workspaces</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-gray-700">Perfect for agencies</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-gray-700">Custom API integrations</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-gray-700">HIPAA compliance</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-gray-700">White-label options</span>
                  </div>
                </div>
                <a 
                  href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
                  className="block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors text-center text-sm"
                >
                  Contact Us
                </a>
              </div>
            </div>
            
            {/* AI Add-ons with Combo Pricing */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">⭐ AI Add-Ons</h3>
                <p className="text-lg text-gray-600">
                  Enhance any plan with AI capabilities
                </p>
              </div>
              
              <div className="flex flex-col lg:flex-row items-center justify-center gap-8 max-w-4xl mx-auto">
                {/* Chat AI with SeaChat */}
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 text-center flex-1 max-w-xs">
                  <MessageSquare className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Chat AI with SeaChat</h4>
                  <div className="text-2xl font-bold text-green-600 mb-2">$29.99</div>
                  <p className="text-sm text-gray-600">per month</p>
                </div>
                
                {/* Plus Sign */}
                <div className="text-2xl font-bold text-gray-400">+</div>
                
                {/* Voice AI with SeaVoice */}
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 text-center flex-1 max-w-xs">
                  <Phone className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Voice AI with SeaVoice</h4>
                  <div className="text-2xl font-bold text-blue-600 mb-2">$29.99</div>
                  <p className="text-sm text-gray-600">per month</p>
                </div>
                
                {/* Equals Sign */}
                <div className="text-2xl font-bold text-gray-400">=</div>
                
                {/* Combo Price */}
                <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-xl p-6 shadow-lg text-center flex-1 max-w-xs">
                  <Sparkles className="w-8 h-8 text-white mx-auto mb-3" />
                  <h4 className="text-lg font-semibold mb-2">Both AI Features</h4>
                  <div className="text-2xl font-bold mb-2">$29.99</div>
                  <p className="text-sm opacity-90">per month total</p>
                </div>
              </div>
              
              <div className="text-center mt-6">
                <p className="text-lg font-semibold text-gray-700">
                  🎉 Get both Chat AI and Voice AI for just $29.99/month combined!
                </p>
              </div>
            </div>
            
            {/* Transparent AI Pricing */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 mb-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Transparent AI Pricing</h3>
                <p className="text-lg text-gray-600">
                  Pay only for what you use with our clear, usage-based AI pricing
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {/* Chat AI */}
                <div className="bg-white rounded-xl shadow-md p-6 text-center">
                  <MessageSquare className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Chat AI</h4>
                  <div className="text-3xl font-bold text-green-600 mb-2">$0.006</div>
                  <p className="text-sm text-gray-600 mb-4">per response (ChatGPT-4o mini)</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• WhatsApp, Messenger, Web chat</li>
                    <li>• 24/7 automated responses</li>
                    <li>• Knowledge base integration</li>
                  </ul>
                </div>
                
                {/* Voice AI */}
                <div className="bg-white rounded-xl shadow-md p-6 text-center">
                  <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Voice AI</h4>
                  <div className="text-3xl font-bold text-blue-600 mb-2">$0.12</div>
                  <p className="text-sm text-gray-600 mb-4">per minute (ChatGPT-4o mini)</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Inbound & outbound calls</li>
                    <li>• Natural voice conversations</li>
                    <li>• Call recording & summaries</li>
                  </ul>
                </div>
                
                {/* Premium AI */}
                <div className="bg-white rounded-xl shadow-md p-6 text-center">
                  <Sparkles className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Premium AI</h4>
                  <div className="text-3xl font-bold text-purple-600 mb-2">$0.80</div>
                  <p className="text-sm text-gray-600 mb-4">per minute (ChatGPT-4o)</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Advanced reasoning</li>
                    <li>• Complex conversations</li>
                    <li>• Custom enterprise features</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Transparent Communication Pricing */}
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Transparent Communication Pricing</h3>
                <p className="text-lg text-gray-600">
                  Clear, upfront pricing for all your communication needs
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {/* SMS */}
                <div className="bg-blue-50 rounded-xl p-6 text-center border border-blue-200">
                  <MessageSquare className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">SMS</h4>
                  <div className="text-3xl font-bold text-blue-600 mb-2">$0.02</div>
                  <p className="text-sm text-gray-600 mb-4">per message (USA/CA)</p>
                  <p className="text-sm text-gray-600">Reliable text messaging with transparent per-message rates</p>
                </div>
                
                {/* Voice Calls */}
                <div className="bg-green-50 rounded-xl p-6 text-center border border-green-200">
                  <Phone className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Voice Calls</h4>
                  <div className="text-3xl font-bold text-green-600 mb-2">$0.015</div>
                  <p className="text-sm text-gray-600 mb-4">per minute (USA/CA)</p>
                  <p className="text-sm text-gray-600">Crystal-clear voice calls across 100+ countries</p>
                </div>
                
                {/* WhatsApp Business */}
                <div className="bg-emerald-50 rounded-xl p-6 text-center border border-emerald-200">
                  <Users className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">WhatsApp Business</h4>
                  <div className="text-3xl font-bold text-emerald-600 mb-2">$0.00</div>
                  <p className="text-sm text-gray-600 mb-4">per message worldwide</p>
                  <p className="text-sm text-gray-600">You pay Meta directly. No markup from Seasalt.ai</p>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                  📱 Other channels like <Instagram className="inline w-5 h-5 text-pink-500 mx-1" />Instagram, <Facebook className="inline w-5 h-5 text-blue-600 mx-1" />Facebook Messenger, and <Monitor className="inline w-5 h-5 text-gray-600 mx-1" />Webchat have no markup or are completely <Gift className="inline w-5 h-5 text-green-600 mx-1" />free.
                </p>
              </div>
            </div>
          </div>

          {/* Master Competitor Comparison Table */}
          <div className="mb-16 sm:mb-20">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                The Global Communications Landscape: How We Stack Up
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
                  Ready to Transform Your
                  <span className="block bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                    Customer Communications?
                  </span>
                </h2>
                <p className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                  Join thousands of businesses using Seasalt.ai to deliver exceptional customer experiences
                </p>
              </div>
              
              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-black text-white mb-2">10,000+</div>
                  <div className="text-sm text-blue-200">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-black text-white mb-2">99.9%</div>
                  <div className="text-sm text-blue-200">Uptime SLA</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-black text-white mb-2">24/7</div>
                  <div className="text-sm text-blue-200">Support</div>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <a
                  href="https://seax.seasalt.ai/signup"
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-xl font-black text-blue-900 bg-gradient-to-r from-yellow-300 via-orange-400 to-yellow-300 rounded-2xl shadow-2xl hover:shadow-yellow-300/50 transform hover:scale-110 transition-all duration-300 animate-pulse hover:animate-none"
                >
                  <span className="relative z-10 flex items-center">
                    🚀 SIGN UP NOW
                    <Star className="w-6 h-6 ml-2 animate-spin" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                
                <a
                  href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
                  className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white border-2 border-white rounded-xl hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105"
                >
                  📞 Talk to Sales
                </a>
              </div>
              
              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center items-center gap-6 text-blue-200 text-sm">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>One-Click Setup</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Setup in Under 5 Minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Cancel Anytime</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>True Free Plan Available</span>
                </div>
              </div>
              
              {/* Urgency Message */}
              <div className="mt-8 p-4 bg-white/10 backdrop-blur rounded-xl border border-white/20">
                <p className="text-white font-semibold">
                  ⚡ <span className="text-yellow-300">Limited Time:</span> Get 2 months free on annual plans + priority onboarding support!
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
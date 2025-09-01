
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SupportPlan from '../../components/SupportPlan';
import PriceCalculator from '../components/PriceCalculator';
import { MEETING_URL, getMeetingUrl } from '../../constants/urls';
import SEOHelmet from '../../components/SEOHelmet';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { SUPPORTED_LANGUAGES } from '../../constants/languages';
import { getSEOData, getCanonicalUrl } from '../../utils/seo';

const PricingPage = () => {
  const { t, i18n } = useTranslation();
  
  // Generate SEO data using standardized utility
  const seoData = getSEOData(t, 'seavoice.pricing', {
    canonicalUrl: getCanonicalUrl(i18n.language, '/seavoice/pricing')
  });

  const plans = [
    {
      id: 'inboundOnly',
      name: t('seavoice.pricing.plans.inboundOnly.name', 'Inbound Only'),
      tagline: t('seavoice.pricing.plans.inboundOnly.tagline', 'Perfect for Customer Service'),
      price: t('seavoice.pricing.plans.inboundOnly.price', '$29.99'),
      period: t('seavoice.pricing.plans.inboundOnly.period', '/month'),
      description: t('seavoice.pricing.plans.inboundOnly.description', 'Ideal for businesses needing an inbound call solution with Voice AI (based on SeaChat Premium plan)'),
      features: [
        t('seavoice.pricing.plans.inboundOnly.features.aiCallHandling', 'AI-based call handling (inbound calls only)'),
        t('seavoice.pricing.plans.inboundOnly.features.voiceAIPrice', 'Voice AI starts at $0.12 per minute (ChatGPT-4o mini model)'),
        t('seavoice.pricing.plans.inboundOnly.features.phoneNumber', 'Phone number included ($2-$3/month with E911 address)'),
        t('seavoice.pricing.plans.inboundOnly.features.callRecording', 'Call recording and summary'),
        t('seavoice.pricing.plans.inboundOnly.features.transferHuman', 'Transfer to human agent support'),
        t('seavoice.pricing.plans.inboundOnly.features.multiLanguage', 'Multi-language voice support'),
        t('seavoice.pricing.plans.inboundOnly.features.sttLanguages', '10+ Speech-To-Text languages'),
        t('seavoice.pricing.plans.inboundOnly.features.ttsLanguages', '10+ Text-To-Speech languages with voices from Azure, ElevenLabs, OpenAI'),
        t('seavoice.pricing.plans.inboundOnly.features.crmIntegrations', 'CRM integrations (Salesforce, HubSpot)'),
        t('seavoice.pricing.plans.inboundOnly.features.calendarIntegration', 'Calendar integration (Google, Outlook)'),
        t('seavoice.pricing.plans.inboundOnly.features.callAnalytics', 'Call analytics and reporting'),
        t('seavoice.pricing.plans.inboundOnly.features.emailNotifications', 'Email notifications for calls')
      ],
      limitations: [
        t('seavoice.pricing.plans.inboundOnly.limitations.noOutbound', 'No outbound calling capabilities'),
        t('seavoice.pricing.plans.inboundOnly.limitations.noBulkCampaigns', 'No bulk campaign features')
      ],
      cta: t('seavoice.pricing.plans.inboundOnly.cta', 'Start with Inbound Only'),
      ctaUrl: 'https://chat.seasalt.ai/signup',
      popular: false,
      cardStyle: 'bg-gradient-to-br from-teal-400 to-teal-600 text-white',
      buttonStyle: 'bg-teal-600 hover:bg-teal-700 text-white',
      poweredBy: t('seavoice.pricing.plans.inboundOnly.poweredBy', 'Powered by SeaChat'),
    },
    {
      id: 'inboundOutbound',
      name: t('seavoice.pricing.plans.inboundOutbound.name', 'Inbound + Outbound'),
      tagline: t('seavoice.pricing.plans.inboundOutbound.tagline', 'Scale Your Voice Campaigns'),
      price: t('seavoice.pricing.plans.inboundOutbound.price', '$99'),
      period: t('seavoice.pricing.plans.inboundOutbound.period', '/month'),
      description: t('seavoice.pricing.plans.inboundOutbound.description', 'Perfect for large-scale voice AI campaigns (equivalent to SeaX Omni-channel plan for first user)'),
      features: [
        t('seavoice.pricing.plans.inboundOutbound.features.everythingInbound', 'Everything in Inbound Only plan'),
        t('seavoice.pricing.plans.inboundOutbound.features.outboundCalling', 'Outbound calling and campaigns'),
        t('seavoice.pricing.plans.inboundOutbound.features.bulkCampaigns', 'Bulk voice AI campaigns'),
        t('seavoice.pricing.plans.inboundOutbound.features.voiceAIPrice', 'Voice AI starts at $0.12 per minute (ChatGPT-4o mini model)'),
        t('seavoice.pricing.plans.inboundOutbound.features.additionalUsers', 'Additional users: $49/month each'),
        t('seavoice.pricing.plans.inboundOutbound.features.multipleNumbers', 'Multiple phone numbers supported'),
        t('seavoice.pricing.plans.inboundOutbound.features.campaignScheduling', 'Campaign scheduling and automation'),
        t('seavoice.pricing.plans.inboundOutbound.features.advancedRouting', 'Advanced call routing'),
        t('seavoice.pricing.plans.inboundOutbound.features.customVoiceTraining', 'Custom voice training'),
        t('seavoice.pricing.plans.inboundOutbound.features.voicemailDrop', 'Voicemail drop capability ($0.05 per drop)'),
        t('seavoice.pricing.plans.inboundOutbound.features.apiAccess', 'RESTful API access'),
        t('seavoice.pricing.plans.inboundOutbound.features.seachatIntegration', 'SeaChat integration for multi-channel support'),
        t('seavoice.pricing.plans.inboundOutbound.features.advancedAnalytics', 'Advanced analytics dashboard'),
        t('seavoice.pricing.plans.inboundOutbound.features.prioritySupport', 'Priority support')
      ],
      limitations: [],
      cta: t('seavoice.pricing.plans.inboundOutbound.cta', 'Start with Inbound + Outbound'),
      ctaUrl: 'https://seax.seasalt.ai/signup',
      popular: true,
      badge: t('seavoice.pricing.plans.inboundOutbound.badge', 'Most Popular'),
      cardStyle: 'bg-gradient-to-br from-blue-400 to-blue-600 text-white',
      buttonStyle: 'bg-blue-600 hover:bg-blue-700 text-white',
      poweredBy: t('seavoice.pricing.plans.inboundOutbound.poweredBy', 'Powered by SeaX + SeaChat'),
    },
    {
      id: 'custom',
      name: t('seavoice.pricing.plans.custom.name', 'Custom Plan'),
      tagline: t('seavoice.pricing.plans.custom.tagline', 'Enterprise-Grade Solutions'),
      price: t('seavoice.pricing.plans.custom.price', 'Contact Us'),
      period: t('seavoice.pricing.plans.custom.period', ''),
      description: t('seavoice.pricing.plans.custom.description', 'Bespoke solutions tailored to specific business needs (similar to SeaChat/SeaX Enterprise plans)'),
      customPriceMessage: t('seavoice.pricing.plans.custom.customPriceMessage', 'Let\'s build a project'),
      features: [
        t('seavoice.pricing.plans.custom.features.everythingInboundOutbound', 'Everything in Inbound + Outbound plan'),
        t('seavoice.pricing.plans.custom.features.multipleWorkspaces', 'Multiple workspaces (perfect for agencies)'),
        t('seavoice.pricing.plans.custom.features.workspaceAgents', 'Each workspace has multiple AI agents and phone numbers'),
        t('seavoice.pricing.plans.custom.features.customPricing', 'Custom pricing per minute based on volume'),
        t('seavoice.pricing.plans.custom.features.accountManager', 'Dedicated account manager'),
        t('seavoice.pricing.plans.custom.features.uptimeSLA', '99.99% uptime SLA'),
        t('seavoice.pricing.plans.custom.features.compliance', 'HIPAA/PCI compliance available'),
        t('seavoice.pricing.plans.custom.features.whiteLabel', 'White-label solutions'),
        t('seavoice.pricing.plans.custom.features.customAPI', 'Custom API integrations'),
        t('seavoice.pricing.plans.custom.features.advancedSecurity', 'Advanced security features'),
        t('seavoice.pricing.plans.custom.features.voiceCloning', 'Custom voice cloning'),
        t('seavoice.pricing.plans.custom.features.phoneSupport', 'Priority phone support'),
        t('seavoice.pricing.plans.custom.features.technicalSupport', 'Professional design guidelines and technical support'),
        t('seavoice.pricing.plans.custom.features.onPremise', 'On-premise deployment options')
      ],
      limitations: [],
      cta: t('seavoice.pricing.plans.custom.cta', 'Contact Us'),
      ctaUrl: getMeetingUrl(i18n.language),
      popular: false,
      cardStyle: 'bg-gradient-to-br from-green-400 to-green-600 text-white',
      buttonStyle: 'bg-green-600 hover:bg-green-700 text-white',
    },
  ];

  const faqs = [
    {
      question: t('seavoice.pricing.faq.question1', 'How does SeaVoice pricing relate to SeaChat and SeaX?'),
      answer: t('seavoice.pricing.faq.answer1', 'SeaVoice Inbound Only plan ($29.99/month) is based on SeaChat Premium plan, focusing on inbound voice AI. The Inbound + Outbound plan ($99/month) mirrors SeaX Omni-channel pricing for comprehensive voice campaigns. All voice AI calls start at $0.12 per minute using ChatGPT-4o mini model.'),
    },
    {
      question: t('seavoice.pricing.faq.question2', 'What\'s the difference between Inbound Only and Inbound + Outbound plans?'),
      answer: t('seavoice.pricing.faq.answer2', 'Inbound Only ($29.99/month) handles incoming calls with AI, perfect for customer service. Inbound + Outbound ($99/month for first user) adds bulk campaign capabilities and outbound calling, ideal for sales and marketing teams running large-scale voice campaigns.'),
    },
    {
      question: t('seavoice.pricing.faq.question3', 'Can I keep my existing business phone numbers?'),
      answer: t('seavoice.pricing.faq.answer3', 'Yes, you can keep your existing business numbers and forward calls to SeaVoice, or we can provide new numbers. Each phone number costs $2-$3/month with E911 address registration.'),
    },
    {
      question: t('seavoice.pricing.faq.question4', 'How much do voice AI calls actually cost?'),
      answer: t('seavoice.pricing.faq.answer4', 'All voice AI calls start at $0.12 per minute using the ChatGPT-4o mini model. This is the same rate across SeaChat Premium and SeaVoice plans. Higher-tier models like ChatGPT-4o cost $0.80 per minute and are available on custom plans.'),
    },
    {
      question: t('seavoice.pricing.faq.question5', 'What happens when contacts call back after an outbound campaign?'),
      answer: t('seavoice.pricing.faq.answer5', 'With the Inbound + Outbound plan, when contacts call back after receiving campaign calls, our inbound Voice AI will automatically handle these calls, providing seamless continuity in your customer communications.'),
    },
    {
      question: t('seavoice.pricing.faq.question6', 'Can I upgrade from Inbound Only to Inbound + Outbound?'),
      answer: t('seavoice.pricing.faq.answer6', 'Absolutely! You can upgrade your plan at any time. The upgrade takes effect immediately, and you\'ll gain access to outbound calling, campaign features, and additional user seats.'),
    },
    {
      question: t('seavoice.pricing.faq.question7', 'Do you offer volume discounts for high-usage customers?'),
      answer: t('seavoice.pricing.faq.answer7', 'Yes, our Custom Plan offers negotiated pricing based on your specific volume and usage patterns. Contact our sales team to discuss custom pricing that scales with your business needs.'),
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Tags */}
      <SEOHelmet
        title={seoData.title}
        description={seoData.description}
        favicon="/seasalt-ai-favicon.ico"
        canonicalUrl={seoData.canonicalUrl}
        availableLanguages={SUPPORTED_LANGUAGES}
      />
      
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              {t('seavoice.pricing.hero.title', 'Simple, Transparent Pricing')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {t('seavoice.pricing.hero.subtitle', 'Voice AI solutions designed for inbound customer service and outbound campaigns. Built on SeaChat Premium ($29.99) and SeaX Omni-channel ($99) foundations.')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                  plan.popular ? 'scale-105 ring-4 ring-blue-200' : ''
                }`}
              >
                {/* Card Header with gradient background */}
                <div className={`${plan.cardStyle || 'bg-white'} p-6 text-center`}>
                  {plan.tagline && (
                    <p className="text-sm font-medium mb-2 opacity-90">{plan.tagline}</p>
                  )}
                  <h3 className="text-3xl font-bold mb-4">{plan.name}</h3>
                  
                  <div className="mb-4">
                    {plan.id === 'custom' ? (
                      <div className="py-4">
                        <div className="text-2xl font-semibold">
                          {plan.customPriceMessage}
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className="flex items-center justify-center">
                          <span className="text-5xl font-bold">
                            {plan.price}
                          </span>
                          <span className="text-xl ml-2">
                            {plan.period}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Body */}
                <div className="bg-white p-6">
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <div>
                    <ul className="space-y-2">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="">
                          <div className="flex items-start space-x-3">
                            <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        </li>
                      ))}
                      
                      {plan.limitations.map((limitation, limitationIndex) => (
                        <li key={limitationIndex} className="">
                          <div className="flex items-start space-x-3 opacity-60">
                            <X className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-500">{limitation}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {plan.id !== 'custom' && (
                    <div className="mt-6">
                      <a 
                        href={plan.ctaUrl} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full py-3 px-6 rounded-lg font-semibold transition-all transform hover:scale-105 text-center inline-block ${plan.buttonStyle}`}
                      >
                        {plan.cta}
                      </a>
                      <p className="text-xs text-gray-500 text-center mt-2">
                        {plan.poweredBy}
                      </p>
                    </div>
                  )}
                  
                  {plan.id === 'custom' && (
                    <div className="mt-6">
                      <a 
                        href={plan.ctaUrl} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full py-3 px-6 rounded-lg font-semibold transition-all transform hover:scale-105 text-center inline-block ${plan.buttonStyle}`}
                      >
                        {plan.cta}
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Price Calculator */}
      <PriceCalculator />

      {/* Product Relationship Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {t('seavoice.pricing.productRelationship.title', 'How SeaVoice Connects with SeaChat & SeaX')}
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-blue-600 mb-4">{t('seavoice.pricing.productRelationship.seachatIntegration.title', '🔗 SeaChat Integration')}</h3>
                <p className="text-gray-700 mb-4">
                  {t('seavoice.pricing.productRelationship.seachatIntegration.description', 'SeaVoice Inbound Only ($29.99/month) is built on SeaChat Premium plan foundations, providing voice AI capabilities for incoming calls at $0.12 per minute.')}
                </p>
                <p className="text-sm text-gray-600">
                  {t('seavoice.pricing.productRelationship.seachatIntegration.subtitle', 'Perfect for businesses wanting to add voice AI to their existing SeaChat setup.')}
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-blue-600 mb-4">{t('seavoice.pricing.productRelationship.seaxIntegration.title', '📞 SeaX Integration')}</h3>
                <p className="text-gray-700 mb-4">
                  {t('seavoice.pricing.productRelationship.seaxIntegration.description', 'SeaVoice Inbound + Outbound ($99/month) mirrors SeaX Omni-channel pricing, enabling large-scale voice campaigns with callback handling.')}
                </p>
                <p className="text-sm text-gray-600">
                  {t('seavoice.pricing.productRelationship.seaxIntegration.subtitle', 'Ideal for businesses running outbound campaigns who need comprehensive voice AI coverage.')}
                </p>
              </div>
            </div>
            <div className="mt-8 bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-green-600 mb-4">{t('seavoice.pricing.productRelationship.completePicture.title', '✨ The Complete Picture')}</h3>
              <p className="text-gray-700">
                {t('seavoice.pricing.productRelationship.completePicture.description', 'All Voice AI calls across SeaChat, SeaX, and SeaVoice use the same $0.12 per minute rate with ChatGPT-4o mini model. When contacts call back after outbound campaigns, SeaVoice seamlessly handles these inbound calls with the same AI intelligence.')}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support Plan */}
      <SupportPlan />

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {t('seavoice.pricing.faq.title', 'Frequently Asked Questions')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('seavoice.pricing.faq.subtitle', 'Everything you need to know about SeaVoice pricing and features')}
            </p>
          </motion.div>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">{t('seavoice.pricing.cta.title', 'Ready to Get Started?')}</h2>
            <p className="text-xl mb-8 opacity-90">
              {t('seavoice.pricing.cta.subtitle', 'Start your free trial today and experience the power of AI voice automation')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://chat.seasalt.ai/gpt/signup"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  {t('seavoice.pricing.cta.signUpFree', 'Sign Up For Free')}
                </motion.button>
              </a>
              <a
                href={getMeetingUrl(i18n.language)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  {t('seavoice.pricing.cta.scheduleDemo', 'Schedule Demo')}
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
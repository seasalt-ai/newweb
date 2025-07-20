
import { motion } from 'framer-motion';
import { Check, X, Star } from 'lucide-react';
import SupportPlan from '../../components/SupportPlan';

const PricingPage = () => {
  const plans = [
    {
      name: 'Inbound Only',
      tagline: 'Perfect for Customer Service',
      price: '$29.99',
      period: '/month',
      description: 'Ideal for businesses needing an inbound call solution with Voice AI (based on SeaChat Premium plan)',
      features: [
        'AI-based call handling (inbound calls only)',
        'Voice AI starts at $0.12 per minute (ChatGPT-4o mini model)',
        'Phone number included ($2-$3/month with E911 address)',
        'Call recording and summary',
        'Transfer to human agent support',
        'Multi-language voice support',
        '10+ Speech-To-Text languages',
        '10+ Text-To-Speech languages with voices from Azure, ElevenLabs, OpenAI',
        'CRM integrations (Salesforce, HubSpot)',
        'Calendar integration (Google, Outlook)',
        'Call analytics and reporting',
        'Email notifications for calls'
      ],
      limitations: [
        'No outbound calling capabilities',
        'No bulk campaign features'
      ],
      cta: 'Start with Inbound Only',
      ctaUrl: 'https://chat.seasalt.ai/signup',
      popular: false,
      cardStyle: 'bg-gradient-to-br from-teal-400 to-teal-600 text-white',
      buttonStyle: 'bg-teal-600 hover:bg-teal-700 text-white',
    },
    {
      name: 'Inbound + Outbound',
      tagline: 'Scale Your Voice Campaigns',
      price: '$99',
      period: '/month',
      description: 'Perfect for large-scale voice AI campaigns (equivalent to SeaX Omni-channel plan for first user)',
      features: [
        'Everything in Inbound Only plan',
        'Outbound calling and campaigns',
        'Bulk voice AI campaigns',
        'Voice AI starts at $0.12 per minute (ChatGPT-4o mini model)',
        'Additional users: $49/month each',
        'Multiple phone numbers supported',
        'Campaign scheduling and automation',
        'Advanced call routing',
        'Custom voice training',
        'Voicemail drop capability ($0.05 per drop)',
        'RESTful API access',
        'SeaChat integration for multi-channel support',
        'Advanced analytics dashboard',
        'Priority support'
      ],
      limitations: [],
      cta: 'Start with Inbound + Outbound',
      ctaUrl: 'https://seax.seasalt.ai/signup',
      popular: true,
      badge: 'Most Popular',
      cardStyle: 'bg-gradient-to-br from-blue-400 to-blue-600 text-white',
      buttonStyle: 'bg-blue-600 hover:bg-blue-700 text-white',
    },
    {
      name: 'Custom Plan',
      tagline: 'Enterprise-Grade Solutions',
      price: 'Contact Us',
      period: '',
      description: 'Bespoke solutions tailored to specific business needs (similar to SeaChat/SeaX Enterprise plans)',
      features: [
        'Everything in Inbound + Outbound plan',
        'Multiple workspaces (perfect for agencies)',
        'Each workspace has multiple AI agents and phone numbers',
        'Custom pricing per minute based on volume',
        'Dedicated account manager',
        '99.99% uptime SLA',
        'HIPAA/PCI compliance available',
        'White-label solutions',
        'Custom API integrations',
        'Advanced security features',
        'Custom voice cloning',
        'Priority phone support',
        'Professional design guidelines and technical support',
        'On-premise deployment options'
      ],
      limitations: [],
      cta: 'Contact Us',
      ctaUrl: 'https://meetings.hubspot.com/seasalt-ai/seasalt-meeting',
      popular: false,
      cardStyle: 'bg-gradient-to-br from-green-400 to-green-600 text-white',
      buttonStyle: 'bg-green-600 hover:bg-green-700 text-white',
    },
  ];

  const faqs = [
    {
      question: 'How does SeaVoice pricing relate to SeaChat and SeaX?',
      answer: 'SeaVoice Inbound Only plan ($29.99/month) is based on SeaChat Premium plan, focusing on inbound voice AI. The Inbound + Outbound plan ($99/month) mirrors SeaX Omni-channel pricing for comprehensive voice campaigns. All voice AI calls start at $0.12 per minute using ChatGPT-4o mini model.',
    },
    {
      question: 'What\'s the difference between Inbound Only and Inbound + Outbound plans?',
      answer: 'Inbound Only ($29.99/month) handles incoming calls with AI, perfect for customer service. Inbound + Outbound ($99/month for first user) adds bulk campaign capabilities and outbound calling, ideal for sales and marketing teams running large-scale voice campaigns.',
    },
    {
      question: 'Can I keep my existing business phone numbers?',
      answer: 'Yes, you can keep your existing business numbers and forward calls to SeaVoice, or we can provide new numbers. Each phone number costs $2-$3/month with E911 address registration.',
    },
    {
      question: 'How much do voice AI calls actually cost?',
      answer: 'All voice AI calls start at $0.12 per minute using the ChatGPT-4o mini model. This is the same rate across SeaChat Premium and SeaVoice plans. Higher-tier models like ChatGPT-4o cost $0.80 per minute and are available on custom plans.',
    },
    {
      question: 'What happens when contacts call back after an outbound campaign?',
      answer: 'With the Inbound + Outbound plan, when contacts call back after receiving campaign calls, our inbound Voice AI will automatically handle these calls, providing seamless continuity in your customer communications.',
    },
    {
      question: 'Can I upgrade from Inbound Only to Inbound + Outbound?',
      answer: 'Absolutely! You can upgrade your plan at any time. The upgrade takes effect immediately, and you\'ll gain access to outbound calling, campaign features, and additional user seats.',
    },
    {
      question: 'Do you offer volume discounts for high-usage customers?',
      answer: 'Yes, our Custom Plan offers negotiated pricing based on your specific volume and usage patterns. Contact our sales team to discuss custom pricing that scales with your business needs.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
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
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Voice AI solutions designed for inbound customer service and outbound campaigns. 
              Built on SeaChat Premium ($29.99) and SeaX Omni-channel ($99) foundations.
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
                    {plan.name === 'Custom Plan' ? (
                      <div className="py-4">
                        <button className="bg-white bg-opacity-20 hover:bg-opacity-30 px-6 py-3 rounded-lg font-semibold transition-all">
                          Contact Us
                        </button>
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
                  
                  <div className="max-h-96 overflow-y-auto">
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

                  {plan.name !== 'Custom Plan' && (
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
                  
                  {plan.name === 'Custom Plan' && (
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
              How SeaVoice Connects with SeaChat & SeaX
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-blue-600 mb-4">🔗 SeaChat Integration</h3>
                <p className="text-gray-700 mb-4">
                  SeaVoice Inbound Only ($29.99/month) is built on SeaChat Premium plan foundations, 
                  providing voice AI capabilities for incoming calls at $0.12 per minute.
                </p>
                <p className="text-sm text-gray-600">
                  Perfect for businesses wanting to add voice AI to their existing SeaChat setup.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-blue-600 mb-4">📞 SeaX Integration</h3>
                <p className="text-gray-700 mb-4">
                  SeaVoice Inbound + Outbound ($99/month) mirrors SeaX Omni-channel pricing, 
                  enabling large-scale voice campaigns with callback handling.
                </p>
                <p className="text-sm text-gray-600">
                  Ideal for businesses running outbound campaigns who need comprehensive voice AI coverage.
                </p>
              </div>
            </div>
            <div className="mt-8 bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-green-600 mb-4">✨ The Complete Picture</h3>
              <p className="text-gray-700">
                All Voice AI calls across SeaChat, SeaX, and SeaVoice use the same $0.12 per minute rate 
                with ChatGPT-4o mini model. When contacts call back after outbound campaigns, 
                SeaVoice seamlessly handles these inbound calls with the same AI intelligence.
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
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about SeaVoice pricing and features
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
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90">
              Start your free trial today and experience the power of AI voice automation
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
                  Sign Up For Free
                </motion.button>
              </a>
              <a
                href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Schedule Demo
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
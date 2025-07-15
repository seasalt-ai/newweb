
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PhoneIncoming, PhoneOutgoing, ArrowRight, Clock, Users, Shield, Heart, Zap, CreditCard } from 'lucide-react';

const SolutionsPage = () => {
  const inboundSolutions = [
    {
      title: '24/7 Virtual Assistant',
      description: 'Provide immediate support outside business hours with intelligent call handling.',
      icon: Clock,
      link: '/solutions/inbound/virtual-assistant',
      benefits: ['24/7 availability', 'Instant response', 'Cost reduction']
    },
    {
      title: 'Smart Call Transfer',
      description: 'Intelligently route calls to the right department based on caller intent.',
      icon: PhoneIncoming,
      link: '/solutions/inbound/call-transfer',
      benefits: ['Reduced wait times', 'Better routing', 'Improved efficiency']
    },
    {
      title: 'IVR Replacement',
      description: 'Replace outdated phone menus with natural language understanding.',
      icon: Zap,
      link: '/solutions/inbound/ivr-replacement',
      benefits: ['Natural conversations', 'Better UX', 'Higher satisfaction']
    },
    {
      title: 'Mental Health Companion',
      description: 'Provide empathetic support for mental health screenings and resources.',
      icon: Heart,
      link: '/solutions/inbound/mental-health',
      benefits: ['24/7 support', 'Empathetic responses', 'Crisis escalation']
    },
    {
      title: 'Scam Shield Protection',
      description: 'Identify and block fraudulent calls to protect your customers.',
      icon: Shield,
      link: '/solutions/inbound/scam-shield',
      benefits: ['Fraud detection', 'Customer protection', 'Reduced scam calls']
    },
    {
      title: 'Technical Support',
      description: 'Automate troubleshooting and guide users through technical issues.',
      icon: Zap,
      link: '/solutions/inbound/technical-support',
      benefits: ['Self-service solutions', 'Faster resolution', 'Cost savings']
    },
    {
      title: 'Order Status & Tracking',
      description: 'Let customers check order status and delivery information instantly.',
      icon: PhoneIncoming,
      link: '/solutions/inbound/order-tracking',
      benefits: ['Instant updates', 'Reduced calls', 'Better experience']
    },
    {
      title: 'Payment Processing',
      description: 'Securely process payments and handle billing inquiries.',
      icon: CreditCard,
      link: '/solutions/inbound/payment-processing',
      benefits: ['Secure transactions', 'Automated billing', 'PCI compliance']
    },
    {
      title: 'Appointment Booking',
      description: 'Enable autonomous appointment scheduling and management.',
      icon: Clock,
      link: '/solutions/inbound/appointment-booking',
      benefits: ['24/7 booking', 'Calendar sync', 'Automated reminders']
    }
  ];

  const outboundSolutions = [
    {
      title: 'Lead Generation & Qualification',
      description: 'Proactively qualify leads and schedule follow-ups for sales teams.',
      icon: Users,
      link: '/solutions/outbound/lead-generation',
      benefits: ['Higher conversion', 'Qualified leads', 'Sales efficiency']
    },
    {
      title: 'Collections Service',
      description: 'Automate payment reminders and collection processes.',
      icon: CreditCard,
      link: '/solutions/outbound/collections',
      benefits: ['Faster collections', 'Payment arrangements', 'Compliance']
    },
    {
      title: 'Customer Reactivation',
      description: 'Re-engage inactive customers with personalized outreach.',
      icon: Users,
      link: '/solutions/outbound/reactivation',
      benefits: ['Win-back campaigns', 'Personalized offers', 'Customer retention']
    },
    {
      title: 'Senior Check Calls',
      description: 'Provide wellness checks for seniors on regular or on-demand basis.',
      icon: Heart,
      link: '/solutions/outbound/senior-checks',
      benefits: ['Wellness monitoring', 'Emergency escalation', 'Peace of mind']
    },
    {
      title: 'Large Scale Campaigns',
      description: 'Execute high-volume marketing and informational campaigns.',
      icon: PhoneOutgoing,
      link: '/solutions/outbound/campaigns',
      benefits: ['Mass reach', 'Personalized messages', 'Cost effective']
    },
    {
      title: 'Proactive Support',
      description: 'Notify customers about service updates and important information.',
      icon: Zap,
      link: '/solutions/outbound/proactive-support',
      benefits: ['Proactive communication', 'Issue prevention', 'Customer satisfaction']
    },
    {
      title: 'Subscription Renewals',
      description: 'Automate subscription renewal reminders and processing.',
      icon: Clock,
      link: '/solutions/outbound/renewals',
      benefits: ['Automated renewals', 'Reduced churn', 'Revenue protection']
    },
    {
      title: 'Customer Surveys',
      description: 'Conduct automated post-service feedback collection.',
      icon: Users,
      link: '/solutions/outbound/surveys',
      benefits: ['Feedback collection', 'Quality insights', 'Improvement data']
    },
    {
      title: 'Fraud Alerts',
      description: 'Alert customers to suspicious account activity immediately.',
      icon: Shield,
      link: '/solutions/outbound/fraud-alerts',
      benefits: ['Real-time alerts', 'Account protection', 'Fraud prevention']
    }
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
              AI Voice Solutions for Every Business Need
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover comprehensive inbound and outbound voice automation solutions 
              designed to transform your customer communications and business operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Inbound Solutions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <PhoneIncoming className="w-12 h-12 text-blue-600 mr-4" />
              <h2 className="text-4xl font-bold text-gray-900">Inbound Solutions</h2>
            </div>
            <p className="text-xl text-gray-600">
              Handle incoming calls with intelligent automation and superior customer experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {inboundSolutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link to={solution.link}>
                  <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group-hover:border-blue-300 h-full">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center mb-6">
                      <solution.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{solution.description}</p>
                    <div className="space-y-2 mb-6">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                          <span className="text-sm text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Outbound Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <PhoneOutgoing className="w-12 h-12 text-teal-600 mr-4" />
              <h2 className="text-4xl font-bold text-gray-900">Outbound Solutions</h2>
            </div>
            <p className="text-xl text-gray-600">
              Proactively engage customers with automated outbound calling campaigns
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {outboundSolutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link to={solution.link}>
                  <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group-hover:border-teal-300 h-full">
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                      <solution.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{solution.description}</p>
                    <div className="space-y-2 mb-6">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                          <span className="text-sm text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center text-teal-600 font-semibold group-hover:translate-x-2 transition-transform">
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </Link>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business Communications?</h2>
            <p className="text-xl mb-8 opacity-90">
              Discover how our AI voice solutions can automate your customer interactions and drive business growth
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule a Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;
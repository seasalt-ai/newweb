
import { motion } from 'framer-motion';
import { MessageSquare, Globe, Users, Shield, CheckCircle, Smartphone } from 'lucide-react';

const WhatsAppVoicePage = () => {
  const features = [
    {
      icon: MessageSquare,
      title: 'WhatsApp Business API',
      description: 'Official integration with WhatsApp Business API for verified business communications.',
      benefits: ['Green checkmark verification', 'Business profile features', 'Message templates']
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Connect with 2+ billion WhatsApp users worldwide through voice calling.',
      benefits: ['180+ countries supported', 'Multi-language capabilities', 'Local number presence']
    },
    {
      icon: Shield,
      title: 'End-to-End Security',
      description: 'Leverage WhatsApp\'s end-to-end encryption for secure business communications.',
      benefits: ['Message encryption', 'Secure voice calls', 'Privacy compliance']
    }
  ];

  const globalStats = [
    { region: 'Global Users', count: '2.78B+', growth: '+3.2% YoY' },
    { region: 'Business Accounts', count: '200M+', growth: '+15% YoY' },
    { region: 'Daily Messages', count: '100B+', growth: '+8% YoY' },
    { region: 'Countries', count: '180+', growth: 'Full Coverage' }
  ];

  const useCases = [
    {
      title: 'Customer Support',
      description: 'Provide instant voice support directly within WhatsApp conversations.',
      metrics: ['60% faster resolution', '95% customer satisfaction', 'Seamless escalation']
    },
    {
      title: 'Sales & Consultations',
      description: 'Convert chat inquiries to voice calls for personalized sales experiences.',
      metrics: ['4x higher conversion', 'Personal touch', 'Trust building']
    },
    {
      title: 'Appointment Booking',
      description: 'Enable voice-based appointment scheduling within WhatsApp Business.',
      metrics: ['One-tap booking', 'Calendar sync', 'Automated confirmations']
    },
    {
      title: 'Order Management',
      description: 'Handle order inquiries, updates, and support through voice interactions.',
      metrics: ['Real-time updates', 'Order tracking', 'Issue resolution']
    }
  ];

  const integrationSteps = [
    {
      step: 1,
      title: 'WhatsApp Business Setup',
      description: 'Connect your WhatsApp Business account or create a new verified business profile.'
    },
    {
      step: 2,
      title: 'Voice Agent Configuration',
      description: 'Configure AI voice agents with your business logic, scripts, and brand voice.'
    },
    {
      step: 3,
      title: 'API Integration',
      description: 'Integrate with your existing systems using our comprehensive API and webhooks.'
    },
    {
      step: 4,
      title: 'Go Live',
      description: 'Launch your voice-enabled WhatsApp Business and start engaging customers.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              WhatsApp Voice API for Businesses
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Transform your WhatsApp Business account with AI-powered voice calling. 
              Reach 2+ billion users worldwide with seamless voice interactions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Get WhatsApp Business API
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Global Reach Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Reach the World's Largest Messaging Platform
            </h2>
            <p className="text-xl text-gray-600">
              WhatsApp dominates global messaging with unprecedented reach and engagement
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {globalStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 text-center"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{stat.region}</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">{stat.count}</div>
                <p className="text-sm text-gray-600">{stat.growth}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Enterprise WhatsApp Voice Features
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to provide exceptional voice experiences on WhatsApp
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Transform Customer Interactions
            </h2>
            <p className="text-xl text-gray-600">
              See how businesses use WhatsApp Voice API to enhance customer relationships
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                <p className="text-gray-600 mb-6">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-700">{metric}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Process */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Simple Integration Process
            </h2>
            <p className="text-xl text-gray-600">
              Get started with WhatsApp Voice API in just four steps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {integrationSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                See It in Action
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Experience how seamlessly voice calling integrates with WhatsApp Business. 
                Our AI agents can handle complex conversations while maintaining the familiar 
                WhatsApp experience your customers love.
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Smartphone className="w-6 h-6 text-green-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">One-Tap Calling</h3>
                    <p className="text-gray-600">Customers can initiate voice calls directly from chat</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-green-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Seamless Handoff</h3>
                    <p className="text-gray-600">Smooth transition between AI and human agents</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MessageSquare className="w-6 h-6 text-green-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Unified History</h3>
                    <p className="text-gray-600">Complete conversation history across chat and voice</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">WhatsApp Business Dashboard</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-600">Live</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Active Voice Calls</span>
                  <span className="font-semibold text-2xl text-green-600">89</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Messages Today</span>
                  <span className="font-semibold text-green-600">2,847</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Response Rate</span>
                  <span className="font-semibold text-green-600">96%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Customer Satisfaction</span>
                  <span className="font-semibold text-green-600">4.9/5</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-3">
                    <MessageSquare className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-semibold text-gray-900">AI Assistant</span>
                </div>
                <p className="text-sm text-gray-700 italic">
                  "Hi! I'm here to help with your order. Would you like to speak with me directly? 
                  Just tap the call button above!"
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Transform WhatsApp Business?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of businesses using WhatsApp Voice API to provide exceptional customer experiences
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
                  className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Started Today
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
                  className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
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

export default WhatsAppVoicePage;
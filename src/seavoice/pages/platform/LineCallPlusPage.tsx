
import { motion } from 'framer-motion';
import { MessageCircle, Users, Globe, Smartphone, CheckCircle, BarChart3 } from 'lucide-react';

const LineCallPlusPage = () => {
  const features = [
    {
      icon: MessageCircle,
      title: 'Native LINE Integration',
      description: 'Seamlessly integrate voice calling directly within the LINE messaging platform.',
      benefits: ['One-tap calling from chat', 'Unified conversation history', 'Rich media support']
    },
    {
      icon: Users,
      title: 'Business Account Support',
      description: 'Full support for LINE Business accounts with advanced features and analytics.',
      benefits: ['Verified business profiles', 'Custom branding options', 'Advanced user management']
    },
    {
      icon: Globe,
      title: 'Asia-Pacific Focus',
      description: 'Optimized for key Asian markets where LINE dominates business communications.',
      benefits: ['Local language support', 'Regional compliance', 'Cultural customization']
    }
  ];

  const marketStats = [
    { country: 'Japan', users: '95M+', penetration: '75%' },
    { country: 'Thailand', users: '52M+', penetration: '76%' },
    { country: 'Taiwan', users: '21M+', penetration: '90%' },
    { country: 'South Korea', users: '33M+', penetration: '64%' }
  ];

  const useCases = [
    {
      title: 'Customer Support',
      description: 'Provide instant voice support directly within LINE conversations.',
      metrics: ['50% faster resolution', '90% customer satisfaction', '24/7 availability']
    },
    {
      title: 'Sales Consultations',
      description: 'Convert chat inquiries to voice calls for personalized sales experiences.',
      metrics: ['3x higher conversion', 'Personalized recommendations', 'Trust building']
    },
    {
      title: 'Appointment Booking',
      description: 'Enable voice-based appointment scheduling within LINE Business accounts.',
      metrics: ['Instant confirmations', 'Calendar integration', 'Automated reminders']
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
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              LINE Call Plus for Businesses
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Transform your LINE Business account with AI-powered voice calling. 
              Connect with customers across Asia-Pacific markets through their preferred messaging platform.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Start LINE Integration
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Market Reach */}
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
              Reach Millions Across Asia-Pacific
            </h2>
            <p className="text-xl text-gray-600">
              LINE dominates business communications in key Asian markets
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {marketStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 text-center"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{stat.country}</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">{stat.users}</div>
                <p className="text-gray-600">Active Users</p>
                <div className="mt-4 text-lg font-semibold text-gray-900">{stat.penetration}</div>
                <p className="text-sm text-gray-600">Market Penetration</p>
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
              Powerful LINE Business Features
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to provide exceptional voice experiences on LINE
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

      {/* Use Cases */}
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
              See how businesses use LINE Call Plus to enhance customer relationships
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
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
              Get started with LINE Call Plus in just a few steps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Connect LINE Business</h3>
              <p className="text-gray-600">Link your existing LINE Business account or create a new one with our guided setup.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Configure Voice Agents</h3>
              <p className="text-gray-600">Set up your AI voice agents with custom scripts, voices, and business logic.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Go Live</h3>
              <p className="text-gray-600">Launch your voice-enabled LINE Business account and start engaging customers.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Analytics Dashboard */}
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
                Comprehensive Analytics
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Track performance, understand customer behavior, and optimize your LINE voice 
                interactions with detailed analytics and reporting.
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <BarChart3 className="w-6 h-6 text-green-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Call Analytics</h3>
                    <p className="text-gray-600">Track call volume, duration, and success rates</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-green-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">User Engagement</h3>
                    <p className="text-gray-600">Monitor user interactions and satisfaction scores</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Smartphone className="w-6 h-6 text-green-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Platform Insights</h3>
                    <p className="text-gray-600">LINE-specific metrics and performance data</p>
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
                <h3 className="text-lg font-semibold text-gray-900">LINE Call Analytics</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-600">Live</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Active Calls</span>
                  <span className="font-semibold text-2xl text-green-600">156</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Response Rate</span>
                  <span className="font-semibold text-green-600">92%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Avg. Call Duration</span>
                  <span className="font-semibold text-green-600">3:24</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Customer Satisfaction</span>
                  <span className="font-semibold text-green-600">4.8/5</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                <p className="text-sm text-gray-700 italic">
                  "こんにちは！LINEサポートです。どのようにお手伝いできますか？"
                </p>
                <p className="text-xs text-gray-500 mt-1">Japanese voice agent responding to customer</p>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Expand in Asia-Pacific?</h2>
            <p className="text-xl mb-8 opacity-90">
              Connect with millions of LINE users and transform your customer engagement across key Asian markets
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start LINE Integration
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LineCallPlusPage;
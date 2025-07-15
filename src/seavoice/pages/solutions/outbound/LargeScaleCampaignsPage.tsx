
import { motion } from 'framer-motion';
import { Megaphone, Users, BarChart3, Globe, CheckCircle, Zap } from 'lucide-react';

const LargeScaleCampaignsPage = () => {
  const features = [
    {
      icon: Megaphone,
      title: 'Mass Communication',
      description: 'Reach thousands of customers simultaneously with personalized voice messages.',
      benefits: ['Unlimited concurrent calls', 'Personalized messaging', 'Global reach']
    },
    {
      icon: Users,
      title: 'Audience Segmentation',
      description: 'Target specific customer segments with tailored messages and timing.',
      benefits: ['Demographic targeting', 'Behavioral segmentation', 'Custom audiences']
    },
    {
      icon: BarChart3,
      title: 'Real-Time Analytics',
      description: 'Monitor campaign performance and optimize in real-time for better results.',
      benefits: ['Live dashboards', 'Performance metrics', 'A/B testing']
    }
  ];

  const campaignTypes = [
    {
      type: 'Product Announcements',
      description: 'Launch new products or services with widespread awareness campaigns',
      examples: ['New feature releases', 'Product launches', 'Service updates'],
      metrics: ['Reach: 100K+ customers', 'Awareness: 85% increase', 'Engagement: 45% response']
    },
    {
      type: 'Emergency Notifications',
      description: 'Rapidly disseminate critical information during emergencies',
      examples: ['Service outages', 'Safety alerts', 'Policy changes'],
      metrics: ['Speed: 1000 calls/minute', 'Delivery: 99% success', 'Response: < 5 minutes']
    },
    {
      type: 'Marketing Campaigns',
      description: 'Execute large-scale promotional and marketing initiatives',
      examples: ['Seasonal promotions', 'Brand campaigns', 'Event invitations'],
      metrics: ['Conversion: 12% average', 'ROI: 300% typical', 'Reach: Unlimited scale']
    },
    {
      type: 'Survey & Research',
      description: 'Conduct market research and gather customer feedback at scale',
      examples: ['Market research', 'Customer satisfaction', 'Product feedback'],
      metrics: ['Response: 35% rate', 'Completion: 80%', 'Insights: Real-time']
    }
  ];

  const benefits = [
    { metric: '10,000+', description: 'Concurrent calls supported' },
    { metric: '99.9%', description: 'Message delivery success rate' },
    { metric: '75%', description: 'Cost reduction vs traditional methods' },
    { metric: '24/7', description: 'Campaign execution capability' }
  ];

  const scalingCapabilities = [
    'Unlimited concurrent calls',
    'Global carrier network',
    'Multi-language support',
    'Time zone optimization',
    'Regulatory compliance',
    'Real-time monitoring'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <Megaphone className="w-16 h-16 text-indigo-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Large Scale Outbound Campaigns
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Execute massive voice campaigns that reach thousands of customers simultaneously. 
              From product launches to emergency notifications, deliver personalized messages 
              at unprecedented scale with AI-powered efficiency.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              Launch Mass Campaign
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
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
              Enterprise-Scale Campaign Features
            </h2>
            <p className="text-xl text-gray-600">
              Powerful tools for managing and executing large-scale voice campaigns
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
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                <div className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Types */}
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
              Campaign Types & Applications
            </h2>
            <p className="text-xl text-gray-600">
              Versatile solutions for different business communication needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {campaignTypes.map((campaign, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{campaign.type}</h3>
                <p className="text-gray-600 mb-6">{campaign.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 text-sm mb-3">Common Examples:</h4>
                  <div className="space-y-1">
                    {campaign.examples.map((example, exampleIndex) => (
                      <div key={exampleIndex} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-2"></div>
                        <span className="text-sm text-gray-700">{example}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="p-4 bg-indigo-50 rounded-lg">
                  <h4 className="font-semibold text-indigo-900 text-sm mb-2">Performance Metrics:</h4>
                  <div className="space-y-1">
                    {campaign.metrics.map((metric, metricIndex) => (
                      <p key={metricIndex} className="text-xs text-indigo-800">{metric}</p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scaling Capabilities */}
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
                Unlimited Scale & Reach
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our platform is built to handle campaigns of any size, from thousands to millions 
                of calls. With global carrier partnerships and advanced infrastructure, we ensure 
                reliable delivery at massive scale.
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Globe className="w-6 h-6 text-indigo-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Global Infrastructure</h3>
                    <p className="text-gray-600">Worldwide carrier network for maximum reach</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Zap className="w-6 h-6 text-indigo-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">High-Speed Execution</h3>
                    <p className="text-gray-600">1000+ concurrent calls per minute</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <BarChart3 className="w-6 h-6 text-indigo-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Real-Time Monitoring</h3>
                    <p className="text-gray-600">Live campaign performance tracking</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Scaling Capabilities</h3>
              <div className="grid grid-cols-1 gap-3">
                {scalingCapabilities.map((capability, index) => (
                  <div key={index} className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700 font-medium">{capability}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-white rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Campaign Dashboard</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Active Calls:</span>
                    <span className="font-semibold text-indigo-600">8,547</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Completion Rate:</span>
                    <span className="font-semibold text-green-600">94.2%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Response Rate:</span>
                    <span className="font-semibold text-blue-600">67.8%</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Metrics */}
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
              Campaign Performance Results
            </h2>
            <p className="text-xl text-gray-600">
              Proven effectiveness at enterprise scale
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg text-center border border-gray-200"
              >
                <div className="text-4xl font-bold text-indigo-600 mb-4">{benefit.metric}</div>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Scale Your Communications?</h2>
            <p className="text-xl mb-8 opacity-90">
              Launch massive voice campaigns that reach thousands of customers with personalized messages
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Plan Your Campaign
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
              >
                See Case Studies
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LargeScaleCampaignsPage;
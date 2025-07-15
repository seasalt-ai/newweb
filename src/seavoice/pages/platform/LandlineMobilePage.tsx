
import { motion } from 'framer-motion';
import { Phone, Smartphone, Globe, Shield, Clock, CheckCircle } from 'lucide-react';

const LandlineMobilePage = () => {
  const features = [
    {
      icon: Phone,
      title: 'Traditional Landline Integration',
      description: 'Seamlessly connect your existing landline infrastructure with AI voice capabilities.',
      benefits: ['Keep your existing phone numbers', 'No hardware changes required', 'Instant AI backup for busy lines']
    },
    {
      icon: Smartphone,
      title: 'Mobile Network Connectivity',
      description: 'Direct integration with mobile carriers for outbound campaigns and customer engagement.',
      benefits: ['Reach customers on their mobile devices', 'High delivery rates', 'SMS fallback options']
    },
    {
      icon: Globe,
      title: 'Global Coverage',
      description: 'Connect with customers worldwide through our extensive carrier network partnerships.',
      benefits: ['200+ countries supported', 'Local number presence', 'Competitive international rates']
    }
  ];

  const useCases = [
    {
      title: 'Appointment Reminders',
      description: 'Automatically call patients, customers, or clients to confirm upcoming appointments.',
      metrics: ['40% reduction in no-shows', '95% contact success rate', '24/7 automated calling']
    },
    {
      title: 'Emergency Notifications',
      description: 'Rapidly notify large groups during emergencies or critical updates.',
      metrics: ['1000+ calls per minute', 'Multi-language support', 'Delivery confirmation']
    },
    {
      title: 'Customer Surveys',
      description: 'Conduct post-service surveys to gather valuable customer feedback.',
      metrics: ['3x higher response rates', 'Real-time sentiment analysis', 'Automated reporting']
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
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center mr-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-blue-600 rounded-full flex items-center justify-center">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Landline & Mobile Voice Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Transform your traditional phone systems with AI-powered voice agents that work 
              seamlessly with landlines and mobile networks worldwide.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Start Free Trial
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
              Universal Voice Connectivity
            </h2>
            <p className="text-xl text-gray-600">
              Connect with any phone system, anywhere in the world
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
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center mb-6">
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

      {/* Use Cases Section */}
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
              Popular Use Cases
            </h2>
            <p className="text-xl text-gray-600">
              See how businesses leverage landline and mobile voice automation
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
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                <p className="text-gray-600 mb-6">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-700">{metric}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs */}
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
                Enterprise-Grade Reliability
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Built for mission-critical communications with carrier-grade infrastructure 
                and 99.99% uptime guarantee.
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Shield className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Security & Compliance</h3>
                    <p className="text-gray-600">SOC 2, HIPAA, and PCI compliant infrastructure</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">24/7 Monitoring</h3>
                    <p className="text-gray-600">Real-time system monitoring and instant failover</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Globe className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Global Infrastructure</h3>
                    <p className="text-gray-600">Redundant data centers across multiple regions</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Specifications</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Concurrent Calls</span>
                  <span className="font-semibold">Unlimited</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Audio Quality</span>
                  <span className="font-semibold">HD Voice (G.722)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Latency</span>
                  <span className="font-semibold">&lt; 150ms</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Uptime SLA</span>
                  <span className="font-semibold">99.99%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Global Coverage</span>
                  <span className="font-semibold">200+ Countries</span>
                </div>
              </div>
            </motion.div>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Modernize Your Phone System?</h2>
            <p className="text-xl mb-8 opacity-90">
              Connect your landline and mobile infrastructure with AI voice agents in minutes
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule Integration Call
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LandlineMobilePage;
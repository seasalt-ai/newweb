
import { motion } from 'framer-motion';
import { Bell, Shield, Clock, Zap, CheckCircle, AlertTriangle } from 'lucide-react';

const ProactiveSupportPage = () => {
  const features = [
    {
      icon: Bell,
      title: 'Proactive Notifications',
      description: 'Automatically notify customers about important updates, changes, or issues before they become problems.',
      benefits: ['Service alerts', 'Account updates', 'Preventive notifications']
    },
    {
      icon: Shield,
      title: 'Issue Prevention',
      description: 'Identify potential problems early and reach out to customers with solutions.',
      benefits: ['Early detection', 'Preventive measures', 'Problem resolution']
    },
    {
      icon: Clock,
      title: 'Timely Communication',
      description: 'Deliver critical information at the right time to maximize customer satisfaction.',
      benefits: ['Optimal timing', 'Urgency awareness', 'Scheduled delivery']
    }
  ];

  const notificationTypes = [
    {
      type: 'Service Outages',
      description: 'Inform customers about planned maintenance or unexpected service disruptions',
      examples: ['Planned maintenance windows', 'Unexpected outages', 'Service restoration updates'],
      urgency: 'High',
      timing: 'Immediate'
    },
    {
      type: 'Account Changes',
      description: 'Notify customers about important changes to their accounts or services',
      examples: ['Policy updates', 'Rate changes', 'Feature modifications'],
      urgency: 'Medium',
      timing: 'Advance notice'
    },
    {
      type: 'Security Alerts',
      description: 'Alert customers to potential security issues or suspicious activities',
      examples: ['Login attempts', 'Password changes', 'Account access'],
      urgency: 'High',
      timing: 'Real-time'
    },
    {
      type: 'Product Updates',
      description: 'Share information about new features, improvements, or changes',
      examples: ['New features', 'App updates', 'Service enhancements'],
      urgency: 'Low',
      timing: 'Scheduled'
    },
    {
      type: 'Billing Notifications',
      description: 'Proactive communication about billing, payments, and account status',
      examples: ['Payment due dates', 'Failed payments', 'Credit updates'],
      urgency: 'Medium',
      timing: 'Advance notice'
    },
    {
      type: 'Delivery Updates',
      description: 'Keep customers informed about shipment and delivery status changes',
      examples: ['Shipping delays', 'Delivery confirmations', 'Address issues'],
      urgency: 'Medium',
      timing: 'Real-time'
    }
  ];

  const benefits = [
    { metric: '70%', description: 'Reduction in reactive support calls' },
    { metric: '85%', description: 'Customer satisfaction with proactive updates' },
    { metric: '50%', description: 'Decrease in customer churn' },
    { metric: '24/7', description: 'Automated monitoring and alerts' }
  ];

  const automationFeatures = [
    'Real-time system monitoring',
    'Intelligent alert prioritization',
    'Customer preference management',
    'Multi-channel delivery options',
    'Escalation protocols',
    'Performance analytics'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <Bell className="w-16 h-16 text-teal-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Proactive Customer Support
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Stay ahead of customer issues with intelligent proactive notifications. 
              Automatically inform customers about service updates, account changes, 
              and important information before they need to call you.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-700 transition-colors"
            >
              Enable Proactive Support
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
              Intelligent Proactive Features
            </h2>
            <p className="text-xl text-gray-600">
              Advanced automation that anticipates customer needs and prevents issues
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
                <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-blue-600 rounded-lg flex items-center justify-center mb-6">
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

      {/* Notification Types */}
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
              Comprehensive Notification Types
            </h2>
            <p className="text-xl text-gray-600">
              Cover all aspects of customer communication with intelligent automation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {notificationTypes.map((notification, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900">{notification.type}</h3>
                  <div className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    notification.urgency === 'High' ? 'bg-red-100 text-red-800' :
                    notification.urgency === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {notification.urgency}
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4">{notification.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 text-sm mb-2">Examples:</h4>
                  <div className="space-y-1">
                    {notification.examples.map((example, exampleIndex) => (
                      <div key={exampleIndex} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-teal-600 rounded-full mr-2"></div>
                        <span className="text-xs text-gray-700">{example}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Timing: {notification.timing}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Features */}
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
                Advanced Automation Engine
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our intelligent automation system continuously monitors your services and 
                customer accounts, automatically triggering appropriate notifications based 
                on predefined rules and customer preferences.
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Zap className="w-6 h-6 text-teal-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Real-Time Monitoring</h3>
                    <p className="text-gray-600">Continuous system and account monitoring</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <AlertTriangle className="w-6 h-6 text-teal-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Smart Prioritization</h3>
                    <p className="text-gray-600">Intelligent alert ranking and delivery</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Shield className="w-6 h-6 text-teal-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Customer Preferences</h3>
                    <p className="text-gray-600">Respect individual communication preferences</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Automation Features</h3>
              <div className="grid grid-cols-1 gap-3">
                {automationFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-white rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Live Monitoring</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Active Monitors:</span>
                    <span className="font-semibold text-teal-600">1,247</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Notifications Sent:</span>
                    <span className="font-semibold text-blue-600">3,892</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Issues Prevented:</span>
                    <span className="font-semibold text-green-600">156</span>
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
              Proactive Support Impact
            </h2>
            <p className="text-xl text-gray-600">
              Measurable improvements in customer satisfaction and support efficiency
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
                <div className="text-4xl font-bold text-teal-600 mb-4">{benefit.metric}</div>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Get Ahead of Customer Issues?</h2>
            <p className="text-xl mb-8 opacity-90">
              Transform your customer support with intelligent proactive notifications and issue prevention
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Proactive Support
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors"
              >
                See Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProactiveSupportPage;
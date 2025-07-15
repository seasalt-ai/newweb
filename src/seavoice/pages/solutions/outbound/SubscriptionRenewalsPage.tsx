
import { motion } from 'framer-motion';
import { RefreshCw, CreditCard, Users, BarChart3, CheckCircle, Calendar } from 'lucide-react';

const SubscriptionRenewalsPage = () => {
  const features = [
    {
      icon: RefreshCw,
      title: 'Automated Renewal Reminders',
      description: 'Intelligent reminders sent at optimal times to maximize renewal rates and reduce churn.',
      benefits: ['Personalized timing', 'Multiple touchpoints', 'Renewal optimization']
    },
    {
      icon: CreditCard,
      title: 'Payment Processing',
      description: 'Seamless payment collection and processing for subscription renewals over the phone.',
      benefits: ['Secure transactions', 'Multiple payment methods', 'Failed payment recovery']
    },
    {
      icon: Users,
      title: 'Customer Retention',
      description: 'Proactive engagement to address concerns and retain valuable subscribers.',
      benefits: ['Churn prevention', 'Value reinforcement', 'Loyalty building']
    }
  ];

  const renewalProcess = [
    {
      step: 1,
      title: 'Early Notification',
      description: 'Initial reminder sent 30 days before renewal date',
      timing: '30 days before',
      action: 'Awareness and preparation'
    },
    {
      step: 2,
      title: 'Value Reinforcement',
      description: 'Highlight subscription benefits and usage statistics',
      timing: '14 days before',
      action: 'Value demonstration'
    },
    {
      step: 3,
      title: 'Renewal Confirmation',
      description: 'Direct renewal request with payment processing',
      timing: '7 days before',
      action: 'Renewal processing'
    },
    {
      step: 4,
      title: 'Last Chance Offer',
      description: 'Final reminder with special retention offers',
      timing: '1 day before',
      action: 'Retention attempt'
    }
  ];

  const benefits = [
    { metric: '85%', description: 'Subscription renewal rate' },
    { metric: '40%', description: 'Reduction in involuntary churn' },
    { metric: '60%', description: 'Decrease in payment failures' },
    { metric: '25%', description: 'Increase in customer lifetime value' }
  ];

  const subscriptionTypes = [
    {
      type: 'Software as a Service (SaaS)',
      description: 'Monthly and annual software subscription renewals',
      strategies: ['Feature usage reports', 'ROI demonstrations', 'Upgrade opportunities']
    },
    {
      type: 'Media & Entertainment',
      description: 'Streaming services and digital content subscriptions',
      strategies: ['Content recommendations', 'Viewing statistics', 'Exclusive offers']
    },
    {
      type: 'Professional Services',
      description: 'Consulting, coaching, and professional service renewals',
      strategies: ['Success metrics', 'Relationship building', 'Service expansion']
    },
    {
      type: 'E-commerce Subscriptions',
      description: 'Product delivery and membership renewals',
      strategies: ['Delivery convenience', 'Cost savings', 'Product variety']
    }
  ];

  const retentionTactics = [
    'Personalized renewal offers',
    'Usage analytics and insights',
    'Loyalty rewards and discounts',
    'Service upgrade options',
    'Payment plan flexibility',
    'Win-back campaigns'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <RefreshCw className="w-16 h-16 text-green-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Subscription Renewal Automation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Maximize subscription renewals with intelligent AI-powered campaigns that engage 
              customers at the right time with personalized messages, process payments seamlessly, 
              and reduce churn through proactive retention strategies.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Automate Renewals
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
              Smart Renewal Management
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive automation that maximizes renewals and reduces churn
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
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center mb-6">
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

      {/* Renewal Process */}
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
              Strategic Renewal Timeline
            </h2>
            <p className="text-xl text-gray-600">
              Optimized touchpoint sequence to maximize renewal success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {renewalProcess.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{process.title}</h3>
                <p className="text-gray-600 mb-4">{process.description}</p>
                <div className="space-y-2">
                  <div className="p-2 bg-green-50 rounded-lg">
                    <p className="text-sm font-semibold text-green-800">{process.timing}</p>
                  </div>
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">{process.action}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Types */}
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
              Industry-Specific Strategies
            </h2>
            <p className="text-xl text-gray-600">
              Tailored renewal approaches for different subscription models
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {subscriptionTypes.map((subscription, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{subscription.type}</h3>
                <p className="text-gray-600 mb-6">{subscription.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-3">Renewal Strategies:</h4>
                  <div className="space-y-2">
                    {subscription.strategies.map((strategy, strategyIndex) => (
                      <div key={strategyIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                        <span className="text-sm text-gray-700">{strategy}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Retention Tactics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Advanced Retention Strategies
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our AI analyzes customer behavior, usage patterns, and engagement levels to 
                determine the most effective retention approach for each subscriber, maximizing 
                renewal rates and customer lifetime value.
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Calendar className="w-6 h-6 text-green-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Optimal Timing</h3>
                    <p className="text-gray-600">AI determines best contact times for each customer</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <BarChart3 className="w-6 h-6 text-green-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Usage Analytics</h3>
                    <p className="text-gray-600">Leverage customer data for personalized approaches</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-green-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Segmented Campaigns</h3>
                    <p className="text-gray-600">Tailored messages for different customer segments</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Retention Tactics</h3>
              <div className="grid grid-cols-1 gap-3">
                {retentionTactics.map((tactic, index) => (
                  <div key={index} className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700 font-medium">{tactic}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-white rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Renewal Dashboard</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Renewals This Month:</span>
                    <span className="font-semibold text-green-600">1,247</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Renewal Rate:</span>
                    <span className="font-semibold text-green-600">85.3%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Revenue Retained:</span>
                    <span className="font-semibold text-green-600">$2.1M</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Metrics */}
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
              Renewal Performance Results
            </h2>
            <p className="text-xl text-gray-600">
              Proven impact on subscription business metrics
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
                <div className="text-4xl font-bold text-green-600 mb-4">{benefit.metric}</div>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Maximize Subscription Renewals?</h2>
            <p className="text-xl mb-8 opacity-90">
              Automate your renewal process and reduce churn with intelligent AI-powered campaigns
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Renewal Automation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                Calculate ROI
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SubscriptionRenewalsPage;
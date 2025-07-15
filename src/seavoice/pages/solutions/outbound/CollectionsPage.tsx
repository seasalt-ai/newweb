
import { motion } from 'framer-motion';
import { CreditCard, Shield, Clock, BarChart3, CheckCircle } from 'lucide-react';

const CollectionsPage = () => {
  const features = [
    {
      icon: CreditCard,
      title: 'Automated Payment Reminders',
      description: 'Gentle, professional reminders that maintain customer relationships while encouraging payment.',
      benefits: ['Customizable messaging', 'Multiple contact attempts', 'Payment plan options']
    },
    {
      icon: Shield,
      title: 'Compliance & Regulation',
      description: 'Built-in compliance with FDCPA, TCPA, and other debt collection regulations.',
      benefits: ['Regulatory compliance', 'Call recording', 'Audit trails']
    },
    {
      icon: Clock,
      title: 'Optimal Timing',
      description: 'AI determines the best times to contact customers for maximum response rates.',
      benefits: ['Time zone awareness', 'Behavioral patterns', 'Response optimization']
    }
  ];

  const collectionProcess = [
    {
      stage: 'Early Reminder',
      description: 'Friendly payment reminders for recently overdue accounts',
      approach: 'Soft, helpful tone with payment options',
      success: '65% payment rate'
    },
    {
      stage: 'Follow-up',
      description: 'More direct communication for persistent overdue accounts',
      approach: 'Clear consequences, payment plan offers',
      success: '45% payment rate'
    },
    {
      stage: 'Final Notice',
      description: 'Last attempt before escalation to human collectors',
      approach: 'Urgent tone, final payment deadline',
      success: '30% payment rate'
    },
    {
      stage: 'Human Handoff',
      description: 'Complex cases transferred to human collectors with full context',
      approach: 'Detailed account history and previous interactions',
      success: '25% resolution rate'
    }
  ];

  const benefits = [
    { metric: '40%', description: 'Increase in collection rates' },
    { metric: '60%', description: 'Reduction in collection costs' },
    { metric: '80%', description: 'Faster payment processing' },
    { metric: '95%', description: 'Regulatory compliance rate' }
  ];

  const complianceFeatures = [
    'FDCPA Compliance',
    'TCPA Compliance',
    'State Regulation Adherence',
    'Call Recording & Monitoring',
    'Dispute Handling',
    'Cease & Desist Management'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-red-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <CreditCard className="w-16 h-16 text-orange-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Collections Service Automation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Streamline your debt collection process with AI-powered calling that maintains 
              customer relationships while improving collection rates. Fully compliant with 
              FDCPA and TCPA regulations.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-colors"
            >
              Improve Collection Rates
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
              Smart Collections Features
            </h2>
            <p className="text-xl text-gray-600">
              Professional, compliant, and effective debt collection automation
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
                <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg flex items-center justify-center mb-6">
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

      {/* Collection Process */}
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
              Progressive Collection Strategy
            </h2>
            <p className="text-xl text-gray-600">
              Escalating approach that maximizes collection while preserving relationships
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {collectionProcess.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-200"
              >
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{process.stage}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-3">{process.description}</p>
                <p className="text-gray-500 text-xs mb-3 italic">{process.approach}</p>
                <div className="p-2 bg-orange-50 rounded-lg">
                  <p className="text-sm font-semibold text-orange-800">{process.success}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
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
                Built-in Compliance
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our collections platform is designed with compliance at its core, ensuring 
                all interactions meet federal and state regulations while maintaining 
                professional standards.
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Shield className="w-6 h-6 text-orange-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Regulatory Compliance</h3>
                    <p className="text-gray-600">FDCPA, TCPA, and state-specific regulations</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <BarChart3 className="w-6 h-6 text-orange-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Complete Audit Trail</h3>
                    <p className="text-gray-600">Detailed logging of all interactions and outcomes</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-orange-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Timing Controls</h3>
                    <p className="text-gray-600">Automatic adherence to calling time restrictions</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Compliance Features</h3>
              <div className="grid grid-cols-1 gap-3">
                {complianceFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
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
              Proven Collection Results
            </h2>
            <p className="text-xl text-gray-600">
              See the impact of AI-powered collections on your recovery rates
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
                <div className="text-4xl font-bold text-orange-600 mb-4">{benefit.metric}</div>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Improve Your Collection Rates?</h2>
            <p className="text-xl mb-8 opacity-90">
              Start recovering more debt with compliant, professional AI-powered collections
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CollectionsPage;
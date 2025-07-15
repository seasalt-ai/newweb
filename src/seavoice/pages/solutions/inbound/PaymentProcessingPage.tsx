
import { motion } from 'framer-motion';
import { CreditCard, Shield, Clock, BarChart3, CheckCircle, Lock } from 'lucide-react';

const PaymentProcessingPage = () => {
  const features = [
    {
      icon: CreditCard,
      title: 'Secure Payment Processing',
      description: 'Process payments safely over the phone with PCI-compliant voice technology.',
      benefits: ['PCI DSS compliance', 'Encrypted transactions', 'Multiple payment methods']
    },
    {
      icon: Shield,
      title: 'Fraud Protection',
      description: 'Advanced fraud detection and prevention to protect both business and customers.',
      benefits: ['Real-time fraud detection', 'Risk assessment', 'Secure authentication']
    },
    {
      icon: Clock,
      title: 'Instant Processing',
      description: 'Process payments immediately with real-time authorization and confirmation.',
      benefits: ['Real-time authorization', 'Instant confirmation', 'Immediate receipts']
    }
  ];

  const paymentMethods = [
    {
      method: 'Credit Cards',
      description: 'Accept all major credit cards with secure voice processing',
      features: ['Visa, Mastercard, Amex', 'CVV verification', 'Expiry validation']
    },
    {
      method: 'Debit Cards',
      description: 'Process debit card payments with PIN verification',
      features: ['PIN entry via voice', 'Bank verification', 'Instant deduction']
    },
    {
      method: 'Bank Transfers',
      description: 'Direct bank account transfers and ACH payments',
      features: ['Account verification', 'Routing number validation', 'ACH processing']
    },
    {
      method: 'Digital Wallets',
      description: 'Support for popular digital payment platforms',
      features: ['Apple Pay', 'Google Pay', 'PayPal integration']
    }
  ];

  const benefits = [
    { metric: '99.9%', description: 'Payment processing uptime' },
    { metric: '< 3s', description: 'Average transaction time' },
    { metric: '100%', description: 'PCI DSS compliance' },
    { metric: '0.1%', description: 'Fraud rate with AI protection' }
  ];

  const securityFeatures = [
    'End-to-end encryption',
    'PCI DSS Level 1 compliance',
    'Tokenization of card data',
    'Multi-factor authentication',
    'Real-time fraud monitoring',
    'Secure voice recognition'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <CreditCard className="w-16 h-16 text-emerald-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Secure Payment Processing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Enable secure, PCI-compliant payment processing through voice interactions. 
              Let customers make payments safely over the phone with advanced fraud protection 
              and instant transaction processing.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-700 transition-colors"
            >
              Enable Secure Payments
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
              Secure Voice Payment Features
            </h2>
            <p className="text-xl text-gray-600">
              Enterprise-grade security meets seamless customer experience
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
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-lg flex items-center justify-center mb-6">
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

      {/* Payment Methods */}
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
              Comprehensive Payment Options
            </h2>
            <p className="text-xl text-gray-600">
              Accept all major payment methods with secure voice processing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {paymentMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{method.method}</h3>
                <p className="text-gray-600 mb-6">{method.description}</p>
                <div className="space-y-2">
                  {method.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
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
                Bank-Level Security
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our payment processing system meets the highest security standards in the industry, 
                ensuring that every transaction is protected with multiple layers of encryption 
                and fraud prevention.
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Lock className="w-6 h-6 text-emerald-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">End-to-End Encryption</h3>
                    <p className="text-gray-600">All payment data encrypted in transit and at rest</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Shield className="w-6 h-6 text-emerald-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">PCI DSS Compliance</h3>
                    <p className="text-gray-600">Level 1 PCI DSS certified infrastructure</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <BarChart3 className="w-6 h-6 text-emerald-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Real-Time Monitoring</h3>
                    <p className="text-gray-600">Continuous fraud detection and prevention</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Security Features</h3>
              <div className="grid grid-cols-1 gap-3">
                {securityFeatures.map((feature, index) => (
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
              Payment Processing Performance
            </h2>
            <p className="text-xl text-gray-600">
              Industry-leading reliability and security metrics
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
                <div className="text-4xl font-bold text-emerald-600 mb-4">{benefit.metric}</div>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready for Secure Voice Payments?</h2>
            <p className="text-xl mb-8 opacity-90">
              Enable PCI-compliant payment processing with advanced fraud protection
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-emerald-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Secure Processing
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors"
              >
                Security Overview
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PaymentProcessingPage;
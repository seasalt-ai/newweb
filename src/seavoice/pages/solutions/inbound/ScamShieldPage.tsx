
import { motion } from 'framer-motion';
import { Shield, AlertTriangle, Phone, BarChart3, CheckCircle, Zap } from 'lucide-react';

const ScamShieldPage = () => {
  const features = [
    {
      icon: Shield,
      title: 'Real-Time Scam Detection',
      description: 'Advanced AI algorithms identify and block fraudulent calls before they reach your customers.',
      benefits: ['Pattern recognition', 'Behavioral analysis', 'Instant blocking']
    },
    {
      icon: AlertTriangle,
      title: 'Threat Intelligence',
      description: 'Continuously updated database of known scam patterns and fraudulent phone numbers.',
      benefits: ['Global threat data', 'Real-time updates', 'Machine learning']
    },
    {
      icon: Phone,
      title: 'Customer Protection',
      description: 'Proactively protect customers from financial fraud and identity theft attempts.',
      benefits: ['Fraud prevention', 'Identity protection', 'Financial security']
    }
  ];

  const scamTypes = [
    {
      type: 'Phishing Calls',
      description: 'Attempts to steal personal information or login credentials',
      detection: 'Voice pattern analysis and keyword detection',
      action: 'Immediate call termination and customer alert'
    },
    {
      type: 'Tech Support Scams',
      description: 'Fake technical support claiming computer problems',
      detection: 'Script pattern recognition and caller ID verification',
      action: 'Block call and provide legitimate support contact'
    },
    {
      type: 'Financial Fraud',
      description: 'Impersonating banks or financial institutions',
      detection: 'Institution verification and voice authentication',
      action: 'Terminate call and notify real financial institution'
    },
    {
      type: 'Romance Scams',
      description: 'Building fake relationships to extract money',
      detection: 'Conversation pattern analysis and emotional manipulation detection',
      action: 'Warning alerts and resource provision'
    }
  ];

  const benefits = [
    { metric: '95%', description: 'Scam call detection accuracy' },
    { metric: '80%', description: 'Reduction in successful fraud attempts' },
    { metric: '24/7', description: 'Continuous protection coverage' },
    { metric: '99.9%', description: 'Legitimate call preservation rate' }
  ];

  const protectionLayers = [
    'Caller ID verification',
    'Voice pattern analysis',
    'Script detection algorithms',
    'Behavioral anomaly detection',
    'Real-time threat intelligence',
    'Customer education alerts'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 via-white to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <Shield className="w-16 h-16 text-red-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Scam Shield Protection
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Protect your customers from phone scams and fraudulent calls with AI-powered 
              detection that identifies and blocks threats in real-time, keeping your 
              community safe from financial fraud.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Activate Scam Protection
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
              Advanced Scam Detection
            </h2>
            <p className="text-xl text-gray-600">
              Multi-layered protection against evolving fraud tactics
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
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg flex items-center justify-center mb-6">
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

      {/* Scam Types Section */}
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
              Protected Against All Scam Types
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive protection against the most common fraud tactics
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {scamTypes.map((scam, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-200"
              >
                <div className="flex items-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">{scam.type}</h3>
                </div>
                <p className="text-gray-600 mb-4">{scam.description}</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Detection Method:</h4>
                    <p className="text-gray-600 text-sm">{scam.detection}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Protection Action:</h4>
                    <p className="text-gray-600 text-sm">{scam.action}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Protection Layers */}
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
                Multi-Layer Protection System
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our comprehensive scam shield uses multiple detection methods working together 
                to provide maximum protection while ensuring legitimate calls always get through.
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Zap className="w-6 h-6 text-red-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Real-Time Analysis</h3>
                    <p className="text-gray-600">Instant evaluation of every incoming call</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <BarChart3 className="w-6 h-6 text-red-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Continuous Learning</h3>
                    <p className="text-gray-600">AI improves detection with every blocked scam</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Shield className="w-6 h-6 text-red-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Zero False Positives</h3>
                    <p className="text-gray-600">Legitimate calls are never blocked</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Protection Layers</h3>
              <div className="grid grid-cols-1 gap-3">
                {protectionLayers.map((layer, index) => (
                  <div key={index} className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700 font-medium">{layer}</span>
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
              Protection Results
            </h2>
            <p className="text-xl text-gray-600">
              Proven effectiveness in stopping fraud and protecting customers
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
                <div className="text-4xl font-bold text-red-600 mb-4">{benefit.metric}</div>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Customers?</h2>
            <p className="text-xl mb-8 opacity-90">
              Stop scammers in their tracks with AI-powered fraud detection and protection
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Activate Protection
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ScamShieldPage;
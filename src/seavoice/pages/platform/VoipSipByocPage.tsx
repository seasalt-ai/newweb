
import { motion } from 'framer-motion';
import { Network, Server, Shield, Zap, Globe, Settings } from 'lucide-react';

const VoipSipByocPage = () => {
  const connectionTypes = [
    {
      icon: Network,
      title: 'VoIP Integration',
      description: 'Connect your existing VoIP infrastructure seamlessly with our AI voice platform.',
      features: ['SIP trunk compatibility', 'Codec optimization', 'Quality of Service (QoS)', 'Bandwidth management'],
      pricing: 'Starting at $0.08/minute'
    },
    {
      icon: Server,
      title: 'SIP Trunking',
      description: 'Direct SIP connectivity for maximum control and customization of your voice traffic.',
      features: ['Direct SIP endpoints', 'Custom routing rules', 'Failover protection', 'Real-time monitoring'],
      pricing: 'Starting at $0.06/minute'
    },
    {
      icon: Globe,
      title: 'Bring Your Own Carrier (BYOC)',
      description: 'Use your preferred carriers while leveraging our AI voice capabilities.',
      features: ['Carrier independence', 'Cost optimization', 'Global reach', 'Vendor flexibility'],
      pricing: 'Platform fee + carrier rates'
    }
  ];

  const benefits = [
    {
      title: 'Cost Savings',
      description: 'Reduce communication costs by up to 60% with optimized routing and carrier selection.',
      metric: '60%'
    },
    {
      title: 'Reliability',
      description: 'Enterprise-grade uptime with automatic failover and redundant infrastructure.',
      metric: '99.99%'
    },
    {
      title: 'Scalability',
      description: 'Handle thousands of concurrent calls with elastic scaling capabilities.',
      metric: '10,000+'
    },
    {
      title: 'Global Reach',
      description: 'Connect to customers worldwide with local presence in major markets.',
      metric: '200+'
    }
  ];

  const technicalSpecs = [
    { feature: 'Supported Protocols', value: 'SIP 2.0, RTP, SRTP' },
    { feature: 'Audio Codecs', value: 'G.711, G.722, G.729, Opus' },
    { feature: 'Encryption', value: 'TLS 1.3, SRTP, AES-256' },
    { feature: 'Network Requirements', value: '100 kbps per concurrent call' },
    { feature: 'Latency', value: '< 150ms end-to-end' },
    { feature: 'Jitter Buffer', value: 'Adaptive, 20-200ms' }
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
              <Network className="w-16 h-16 text-blue-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              VoIP, SIP & BYOC Voice Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Enterprise-grade voice connectivity with maximum flexibility. Choose from VoIP integration, 
              direct SIP trunking, or bring your own carrier for complete control.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Talk to Connectivity Specialist
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Connection Types */}
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
              Flexible Connectivity Options
            </h2>
            <p className="text-xl text-gray-600">
              Choose the connection method that best fits your infrastructure and requirements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {connectionTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center mb-6">
                  <type.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{type.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{type.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700 text-sm">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm font-semibold text-blue-800">{type.pricing}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
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
              Enterprise Benefits
            </h2>
            <p className="text-xl text-gray-600">
              Why leading enterprises choose our voice connectivity solutions
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
                className="bg-white rounded-xl p-8 shadow-lg text-center"
              >
                <div className="text-4xl font-bold text-blue-600 mb-4">{benefit.metric}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
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
                Technical Excellence
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Built on industry-standard protocols with enterprise-grade security and performance. 
                Our platform supports all major codecs and provides real-time quality monitoring.
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Shield className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">End-to-End Encryption</h3>
                    <p className="text-gray-600">TLS 1.3 and SRTP for secure voice transmission</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Zap className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Low Latency</h3>
                    <p className="text-gray-600">Sub-150ms latency for crystal clear conversations</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Settings className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Advanced Configuration</h3>
                    <p className="text-gray-600">Granular control over routing and quality settings</p>
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
                {technicalSpecs.map((spec, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                    <span className="text-gray-600 font-medium">{spec.feature}</span>
                    <span className="font-semibold text-gray-900">{spec.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Architecture Diagram */}
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
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple integration with your existing infrastructure
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Server className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Your Infrastructure</h3>
                <p className="text-gray-600">Existing PBX, VoIP system, or carrier</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Network className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">SeaVoice Platform</h3>
                <p className="text-gray-600">AI voice processing and routing</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Global Network</h3>
                <p className="text-gray-600">Worldwide carrier connections</p>
              </div>
            </div>
          </motion.div>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Optimize Your Voice Infrastructure?</h2>
            <p className="text-xl mb-8 opacity-90">
              Speak with our connectivity specialists to design the perfect solution for your needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Schedule Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                View Technical Docs
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default VoipSipByocPage;
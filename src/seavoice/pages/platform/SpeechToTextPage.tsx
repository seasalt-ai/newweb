
import { motion } from 'framer-motion';
import { Mic, Zap, Globe, Shield, BarChart3, Settings } from 'lucide-react';

const SpeechToTextPage = () => {
  const features = [
    {
      icon: Zap,
      title: 'Real-Time Processing',
      description: 'Convert speech to text in real-time with ultra-low latency for live conversations.',
      specs: ['< 100ms latency', 'Streaming recognition', 'Live transcription']
    },
    {
      icon: Globe,
      title: 'Multi-Language Support',
      description: 'Support for 50+ languages and dialects with automatic language detection.',
      specs: ['50+ languages', 'Auto-detection', 'Regional accents']
    },
    {
      icon: Shield,
      title: 'Industry Accuracy',
      description: 'Specialized models trained for different industries and use cases.',
      specs: ['99%+ accuracy', 'Domain-specific', 'Custom vocabularies']
    }
  ];

  const accuracyStats = [
    { category: 'General Conversation', accuracy: '99.2%', improvement: '+15%' },
    { category: 'Medical Terminology', accuracy: '98.8%', improvement: '+22%' },
    { category: 'Financial Services', accuracy: '99.1%', improvement: '+18%' },
    { category: 'Technical Support', accuracy: '98.9%', improvement: '+20%' }
  ];

  const languages = [
    'English (US, UK, AU)', 'Spanish (ES, MX, AR)', 'French (FR, CA)', 'German',
    'Italian', 'Portuguese (BR, PT)', 'Japanese', 'Korean', 'Mandarin Chinese',
    'Cantonese', 'Hindi', 'Arabic', 'Russian', 'Dutch', 'Swedish', 'Norwegian'
  ];

  const useCases = [
    {
      title: 'Call Center Transcription',
      description: 'Real-time transcription of customer service calls for quality assurance and training.',
      benefits: ['Quality monitoring', 'Compliance recording', 'Agent training', 'Customer insights']
    },
    {
      title: 'Meeting Documentation',
      description: 'Automatic transcription of meetings, conferences, and business discussions.',
      benefits: ['Meeting minutes', 'Action item extraction', 'Searchable archives', 'Multi-speaker ID']
    },
    {
      title: 'Voice Commands',
      description: 'Convert voice commands to text for voice-controlled applications and interfaces.',
      benefits: ['Hands-free operation', 'Accessibility features', 'Smart home control', 'Mobile apps']
    },
    {
      title: 'Content Creation',
      description: 'Transform audio content into text for podcasts, videos, and media production.',
      benefits: ['Subtitle generation', 'Content indexing', 'SEO optimization', 'Accessibility compliance']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <Mic className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Speech-to-Text Technology
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Industry-leading speech recognition with 99%+ accuracy. Convert any audio to text 
              in real-time with support for 50+ languages and specialized industry vocabularies.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Try Speech Recognition
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
              Advanced Speech Recognition
            </h2>
            <p className="text-xl text-gray-600">
              Built on the original Kaldi framework with modern deep learning enhancements
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
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                <div className="space-y-2">
                  {feature.specs.map((spec, specIndex) => (
                    <div key={specIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-700">{spec}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Accuracy Stats */}
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
              Industry-Leading Accuracy
            </h2>
            <p className="text-xl text-gray-600">
              Specialized models trained for different industries and use cases
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {accuracyStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg text-center"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4">{stat.category}</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.accuracy}</div>
                <p className="text-sm text-green-600 font-semibold">{stat.improvement} vs industry average</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Language Support */}
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
                Global Language Support
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Comprehensive support for major world languages with automatic language detection 
                and regional accent recognition. Our models are continuously trained on diverse 
                datasets to ensure accuracy across different speaking styles and environments.
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Globe className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">50+ Languages</h3>
                    <p className="text-gray-600">Major world languages and regional dialects</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Settings className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Auto-Detection</h3>
                    <p className="text-gray-600">Automatic language identification and switching</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <BarChart3 className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Continuous Learning</h3>
                    <p className="text-gray-600">Models improve with usage and feedback</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Supported Languages</h3>
              <div className="grid grid-cols-1 gap-2">
                {languages.map((language, index) => (
                  <div key={index} className="flex items-center py-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">{language}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-white rounded-lg">
                <p className="text-sm text-gray-600 italic">
                  "Custom language models available for specialized vocabularies and industry-specific terminology"
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
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
              Powerful Use Cases
            </h2>
            <p className="text-xl text-gray-600">
              Transform audio into actionable text across industries and applications
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
                <div className="grid grid-cols-2 gap-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-700">{benefit}</span>
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
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Technical Specifications
            </h2>
            <p className="text-xl text-gray-600">
              Enterprise-grade performance and reliability
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-200"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Performance</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Latency</span>
                  <span className="font-semibold">{"< 100ms"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Accuracy</span>
                  <span className="font-semibold">99%+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Throughput</span>
                  <span className="font-semibold">1000+ concurrent</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Uptime</span>
                  <span className="font-semibold">99.99%</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-200"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Audio Formats</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Sample Rate</span>
                  <span className="font-semibold">8-48 kHz</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Bit Depth</span>
                  <span className="font-semibold">16-32 bit</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Formats</span>
                  <span className="font-semibold">WAV, MP3, FLAC</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Streaming</span>
                  <span className="font-semibold">Real-time</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-200"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Integration</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">API</span>
                  <span className="font-semibold">REST & WebSocket</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">SDKs</span>
                  <span className="font-semibold">Python, Node.js, Go</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Webhooks</span>
                  <span className="font-semibold">Real-time events</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Security</span>
                  <span className="font-semibold">TLS 1.3, OAuth 2.0</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Audio to Text?</h2>
            <p className="text-xl mb-8 opacity-90">
              Experience the power of industry-leading speech recognition technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Try Free Demo
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                View API Docs
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SpeechToTextPage;
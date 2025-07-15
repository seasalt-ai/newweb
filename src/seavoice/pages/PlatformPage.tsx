
import { motion } from 'framer-motion';
import { Mic, Brain, BarChart3, Phone, Globe, Zap } from 'lucide-react';

const PlatformPage = () => {
  const features = [
    {
      icon: Mic,
      title: 'AI Voice Agents',
      description: 'Human-like voice agents that handle inbound and outbound calls 24/7 with perfect consistency.',
      features: ['24/7 availability', 'Human-like conversations', 'Dynamic pauses and tone shifts', 'Multi-language support']
    },
    {
      icon: Brain,
      title: 'Conversational AI',
      description: 'Advanced AI that learns from your documents and remembers past interactions for personalized service.',
      features: ['RAG technology', 'Long-term memory', 'Custom knowledge base', 'Context awareness']
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Real-time transcripts, sentiment analysis, and actionable insights from every conversation.',
      features: ['Real-time transcripts', 'Sentiment analysis', 'Performance metrics', 'Call volume analytics']
    },
    {
      icon: Phone,
      title: 'Telephony & Connectivity',
      description: 'Flexible integration with VoIP, SIP, and BYOC options for seamless connectivity.',
      features: ['VoIP integration', 'SIP trunking', 'BYOC support', 'Global coverage']
    },
    {
      icon: Globe,
      title: 'Integrations & Channels',
      description: 'Connect with your existing tools and reach customers across multiple channels.',
      features: ['CRM integration', 'WhatsApp Voice API', 'LINE Business Calls', 'Calendar sync']
    },
    {
      icon: Zap,
      title: 'Speech Technologies',
      description: 'Industry-leading speech-to-text and text-to-speech with custom voice profiles.',
      features: ['High accuracy STT', 'Natural TTS', 'Voice cloning', '10+ languages']
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
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              The Complete AI Voice Platform
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover the technology that powers human-like voice interactions, 
              seamless integrations, and actionable insights for your business.
            </p>
            <a
              href="https://chat.seasalt.ai/gpt/signup"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Explore Platform Capabilities
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center mr-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Showcase */}
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
              Built on Industry-Leading Technology
            </h2>
            <p className="text-xl text-gray-600">
              Powered by the original Kaldi team's expertise in speech recognition
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Speech Recognition',
                description: 'Advanced STT technology with 99%+ accuracy, even with background noise and industry jargon.',
                metrics: ['99%+ accuracy', 'Real-time processing', 'Noise reduction']
              },
              {
                title: 'Natural Language Processing',
                description: 'Context-aware AI that understands intent and maintains natural conversation flow.',
                metrics: ['Intent recognition', 'Context retention', 'Emotional intelligence']
              },
              {
                title: 'Voice Synthesis',
                description: 'Human-like text-to-speech with customizable voices and natural prosody.',
                metrics: ['Natural prosody', 'Voice cloning', 'Emotion control']
              }
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{tech.title}</h3>
                <p className="text-gray-600 mb-6">{tech.description}</p>
                <div className="space-y-2">
                  {tech.metrics.map((metric, metricIndex) => (
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
    </div>
  );
};

export default PlatformPage;
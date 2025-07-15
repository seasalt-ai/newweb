
import { motion } from 'framer-motion';
import { Brain, Zap, Shield, Database, MessageSquare, BarChart3 } from 'lucide-react';

const EndToEndLLMsPage = () => {
  const features = [
    {
      icon: Brain,
      title: 'Advanced Language Models',
      description: 'State-of-the-art large language models optimized for conversational AI and business applications.',
      capabilities: ['GPT-4 integration', 'Custom fine-tuning', 'Domain-specific models', 'Multi-modal support']
    },
    {
      icon: Database,
      title: 'Knowledge Integration',
      description: 'Seamlessly integrate your business knowledge base with RAG (Retrieval-Augmented Generation) technology.',
      capabilities: ['Document ingestion', 'Real-time updates', 'Semantic search', 'Context awareness']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Enterprise-grade security and compliance for sensitive business conversations.',
      capabilities: ['Data encryption', 'Access controls', 'Audit logging', 'Compliance ready']
    }
  ];

  const llmCapabilities = [
    {
      category: 'Natural Language Understanding',
      description: 'Advanced comprehension of user intent, context, and nuanced communication.',
      metrics: ['Intent accuracy: 98%', 'Context retention: 95%', 'Sentiment analysis: 96%']
    },
    {
      category: 'Conversational Flow',
      description: 'Maintain natural, coherent conversations across multiple turns and topics.',
      metrics: ['Multi-turn coherence: 94%', 'Topic switching: 92%', 'Context preservation: 97%']
    },
    {
      category: 'Business Logic Integration',
      description: 'Execute complex business workflows and decision-making processes.',
      metrics: ['Workflow accuracy: 99%', 'Decision consistency: 98%', 'Error handling: 95%']
    },
    {
      category: 'Personalization',
      description: 'Adapt responses based on user history, preferences, and business context.',
      metrics: ['Personalization score: 93%', 'User satisfaction: 96%', 'Engagement rate: 89%']
    }
  ];

  const architectureComponents = [
    {
      title: 'Speech Input Processing',
      description: 'Convert speech to text with industry-leading accuracy',
      technologies: ['Kaldi-based ASR', 'Noise reduction', 'Speaker diarization']
    },
    {
      title: 'Language Model Processing',
      description: 'Advanced LLM processing with business context integration',
      technologies: ['GPT-4 Turbo', 'Custom fine-tuning', 'RAG integration']
    },
    {
      title: 'Response Generation',
      description: 'Generate contextually appropriate and business-aligned responses',
      technologies: ['Template systems', 'Dynamic content', 'Compliance checking']
    },
    {
      title: 'Speech Output Synthesis',
      description: 'Convert text responses to natural-sounding speech',
      technologies: ['Neural TTS', 'Voice cloning', 'Emotion control']
    }
  ];

  const useCases = [
    {
      title: 'Intelligent Customer Support',
      description: 'Handle complex customer inquiries with human-like understanding and problem-solving capabilities.',
      benefits: ['Reduced escalation rates', 'Faster resolution times', 'Consistent service quality', '24/7 availability']
    },
    {
      title: 'Sales Conversations',
      description: 'Engage prospects with personalized sales conversations that adapt to customer needs and preferences.',
      benefits: ['Higher conversion rates', 'Personalized recommendations', 'Objection handling', 'Lead qualification']
    },
    {
      title: 'Technical Support',
      description: 'Provide expert-level technical assistance with access to comprehensive knowledge bases.',
      benefits: ['Complex troubleshooting', 'Step-by-step guidance', 'Documentation access', 'Escalation intelligence']
    },
    {
      title: 'Healthcare Assistance',
      description: 'Support healthcare workflows with HIPAA-compliant AI that understands medical terminology.',
      benefits: ['Medical knowledge base', 'Appointment scheduling', 'Symptom assessment', 'Care coordination']
    }
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
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center">
                <Brain className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              End-to-End LLM Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Complete large language model integration from speech input to intelligent response generation. 
              Powered by advanced AI that understands context, maintains conversations, and executes business logic.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              Explore LLM Capabilities
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
              Complete LLM Integration
            </h2>
            <p className="text-xl text-gray-600">
              From speech understanding to intelligent response generation
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
                  {feature.capabilities.map((capability, capIndex) => (
                    <div key={capIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-700">{capability}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LLM Capabilities */}
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
              Advanced LLM Capabilities
            </h2>
            <p className="text-xl text-gray-600">
              Sophisticated language understanding and generation for business applications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {llmCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{capability.category}</h3>
                <p className="text-gray-600 mb-6">{capability.description}</p>
                <div className="space-y-2">
                  {capability.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center">
                      <BarChart3 className="w-4 h-4 text-indigo-600 mr-3" />
                      <span className="text-sm text-gray-700">{metric}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Overview */}
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
              End-to-End Architecture
            </h2>
            <p className="text-xl text-gray-600">
              Complete pipeline from speech input to intelligent voice response
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {architectureComponents.map((component, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{component.title}</h3>
                <p className="text-gray-600 mb-4">{component.description}</p>
                <div className="space-y-1">
                  {component.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="text-sm text-indigo-600 font-medium">
                      {tech}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
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
              Intelligent Use Cases
            </h2>
            <p className="text-xl text-gray-600">
              Transform business operations with AI-powered conversations
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
                      <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
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
                Enterprise Performance
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our end-to-end LLM solution delivers enterprise-grade performance with 
                real-time processing, high accuracy, and reliable scalability for 
                mission-critical business applications.
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Zap className="w-6 h-6 text-indigo-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Real-Time Processing</h3>
                    <p className="text-gray-600">Sub-second response times for natural conversations</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Shield className="w-6 h-6 text-indigo-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Enterprise Security</h3>
                    <p className="text-gray-600">SOC 2, HIPAA, and PCI compliant infrastructure</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MessageSquare className="w-6 h-6 text-indigo-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Conversation Quality</h3>
                    <p className="text-gray-600">Human-like interactions with context awareness</p>
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Performance Metrics</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Response Latency</span>
                  <span className="font-semibold text-2xl text-indigo-600">{"< 500ms"}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Intent Accuracy</span>
                  <span className="font-semibold text-2xl text-indigo-600">98.2%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Context Retention</span>
                  <span className="font-semibold text-2xl text-indigo-600">95.8%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Uptime SLA</span>
                  <span className="font-semibold text-2xl text-indigo-600">99.99%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Concurrent Users</span>
                  <span className="font-semibold text-2xl text-indigo-600">10,000+</span>
                </div>
              </div>
            </motion.div>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Deploy Intelligent Conversations?</h2>
            <p className="text-xl mb-8 opacity-90">
              Transform your business with end-to-end LLM solutions that understand, reason, and respond intelligently
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Schedule LLM Demo
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
              >
                Explore Architecture
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EndToEndLLMsPage;
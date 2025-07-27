import { motion } from 'framer-motion';
import { Phone, Brain, BarChart3, CheckCircle, ArrowRight, Star, Bot, Users, Headphones } from 'lucide-react';
import VoiceDemo from '../components/VoiceDemo';
import VoiceConversationFlow from '../components/hero-variants/VoiceConversationFlow';
import InteractiveCallDashboard from '../components/hero-variants/InteractiveCallDashboard';

const HomePage = () => {

  const platformSteps = [
    {
      title: 'Listen & Understand',
      description: 'High-accuracy Speech-to-Text that captures every word and nuance',
      icon: Phone,
    },
    {
      title: 'Think & Respond',
      description: 'Advanced Conversational AI with custom knowledge base integration',
      icon: Brain,
    },
    {
      title: 'Speak & Act',
      description: 'Human-like Text-to-Speech with seamless business integrations',
      icon: BarChart3,
    },
  ];


  const testimonials = [
    {
      quote: "SeaVoice reduced our agent training time by 2 weeks and increased efficiency by 20%",
      author: "Sarah Johnson",
      role: "VP of Customer Success",
      company: "TechCorp Inc."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Voice Conversation Flow */}
      <VoiceConversationFlow />

      {/* Problem/Solution Section */}
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
              Stop Losing Customers to Busy Signals and Long Wait Times
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                problem: 'High call volume overwhelms agents',
                solution: 'Handle 500+ simultaneous calls with AI agents',
                icon: Phone,
              },
              {
                problem: 'Inconsistent customer service',
                solution: 'Deliver perfect, on-brand responses, 24/7',
                icon: CheckCircle,
              },
              {
                problem: 'No data on voice interactions',
                solution: 'Get real-time transcripts and actionable analytics',
                icon: BarChart3,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                  <item.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.problem}</h3>
                <p className="text-blue-600 font-semibold">{item.solution}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">How SeaVoice Works</h2>
            <p className="text-xl text-gray-600">Three simple steps to transform your customer communications</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {platformSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full mb-6 mx-auto">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Voice Demo Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Try Our Voice Technology</h2>
            <p className="text-xl text-gray-600">Experience the human-like quality of our AI voices</p>
          </motion.div>
          
          <VoiceDemo />
        </div>
      </section>

      {/* Persona-Based Navigation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Designed for Your Entire Team</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'For Business Leaders',
                description: 'Drive efficiency and boost CSAT with intelligent automation',
                link: '/solutions',
                color: 'blue',
              },
              {
                title: 'For Developers',
                description: 'Build custom voice experiences with our powerful APIs',
                link: '/developers',
                color: 'teal',
              },
              {
                title: 'For Enterprise',
                description: 'Scale with confidence, security, and compliance',
                link: '/company/enterprise',
                color: 'purple',
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`bg-gradient-to-br from-${card.color}-50 to-${card.color}-100 rounded-xl p-8 hover:shadow-lg transition-all cursor-pointer group`}
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{card.title}</h3>
                <p className="text-gray-600 mb-6">{card.description}</p>
                <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SeaChat Capabilities Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              Capabilities of SeaVoice is brought to you by{' '}
              <span className="text-teal-400">SeaChat</span>
            </h2>
            <p className="text-xl text-gray-300">
              An omni-channel and multi-modal no-code agent platform
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
          >
            <h3 className="text-2xl font-semibold text-center mb-8">
              One Team, Working Together for You
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 bg-teal-500/20 rounded-full flex items-center justify-center">
                    <Bot className="w-10 h-10 text-teal-400" />
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-2">Chat AI Agent</h4>
                <p className="text-gray-300">Instant responses across web, mobile, and messaging platforms</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <Users className="w-10 h-10 text-blue-400" />
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-2">Human Agent</h4>
                <p className="text-gray-300">Seamless handoff for complex queries that need a human touch</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <Headphones className="w-10 h-10 text-purple-400" />
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-2">Voice AI Agent</h4>
                <p className="text-gray-300">Natural phone conversations powered by advanced voice AI</p>
              </motion.div>
            </div>
            
            <div className="mt-8 text-center">
              <a 
                href="/seachat"
                className="inline-flex items-center text-teal-400 hover:text-teal-300 font-semibold transition-colors"
              >
                Learn more about SeaChat
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Customer Case Study */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-2xl font-medium leading-relaxed mb-6">
                "{testimonials[0].quote}"
              </blockquote>
              <div>
                <div className="font-semibold">{testimonials[0].author}</div>
                <div className="text-gray-400">{testimonials[0].role}, {testimonials[0].company}</div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">2 weeks</div>
                <div className="text-gray-400">Reduced training time</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-400 mb-2">20%</div>
                <div className="text-gray-400">Efficiency gain</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">94%</div>
                <div className="text-gray-400">Customer satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-400 mb-2">500+</div>
                <div className="text-gray-400">Simultaneous calls</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Call Dashboard Section */}
      <InteractiveCallDashboard />

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to see it in action?</h2>
            <p className="text-xl mb-8 opacity-90">
              Get a personalized demo and discover how SeaVoice can transform your customer communications
            </p>
            <a
              href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Book a Demo Today
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

import { motion } from 'framer-motion';
import { Zap, MessageSquare, Users, CheckCircle } from 'lucide-react';

const IvrReplacementPage = () => {
  const features = [
    {
      icon: MessageSquare,
      title: 'Natural Language Understanding',
      description: 'Replace confusing menu options with natural conversation that understands what customers really want.',
      benefits: ['Conversational interface', 'Intent recognition', 'Context awareness']
    },
    {
      icon: Zap,
      title: 'Instant Resolution',
      description: 'Resolve customer inquiries immediately without navigating through multiple menu levels.',
      benefits: ['Zero wait time', 'Direct answers', 'Immediate assistance']
    },
    {
      icon: Users,
      title: 'Improved Experience',
      description: 'Transform frustrating phone trees into pleasant, efficient customer interactions.',
      benefits: ['Higher satisfaction', 'Reduced abandonment', 'Better accessibility']
    }
  ];

  const comparison = [
    {
      aspect: 'Customer Experience',
      traditional: 'Press 1 for sales, 2 for support...',
      modern: '"I need help with my order" - Instantly connected',
      improvement: '85% satisfaction increase'
    },
    {
      aspect: 'Time to Resolution',
      traditional: '3-5 minutes navigating menus',
      modern: '30 seconds to reach right department',
      improvement: '80% time reduction'
    },
    {
      aspect: 'Call Abandonment',
      traditional: '25% abandon during menu navigation',
      modern: '5% abandonment rate',
      improvement: '80% reduction'
    },
    {
      aspect: 'Accessibility',
      traditional: 'Difficult for elderly/disabled users',
      modern: 'Natural speech for all users',
      improvement: '100% accessibility'
    }
  ];

  const benefits = [
    { metric: '85%', description: 'Increase in customer satisfaction' },
    { metric: '80%', description: 'Reduction in call abandonment' },
    { metric: '70%', description: 'Faster call resolution' },
    { metric: '90%', description: 'Reduction in misdirected calls' }
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
              <Zap className="w-16 h-16 text-indigo-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              IVR Replacement with Natural Language
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Eliminate frustrating phone trees and menu navigation. Let customers speak naturally 
              to describe their needs and get connected to the right place instantly.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              Replace Your IVR Today
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
              Modern Voice Interface Features
            </h2>
            <p className="text-xl text-gray-600">
              Transform outdated phone systems with intelligent conversation
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

      {/* Comparison Section */}
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
              Traditional IVR vs. Natural Language
            </h2>
            <p className="text-xl text-gray-600">
              See the dramatic difference in customer experience
            </p>
          </motion.div>

          <div className="space-y-8">
            {comparison.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-200"
              >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{item.aspect}</h3>
                  </div>
                  <div className="text-center">
                    <h4 className="text-sm font-semibold text-red-600 mb-2">Traditional IVR</h4>
                    <p className="text-gray-600 text-sm italic">"{item.traditional}"</p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-sm font-semibold text-green-600 mb-2">Natural Language</h4>
                    <p className="text-gray-600 text-sm italic">"{item.modern}"</p>
                  </div>
                  <div className="text-center">
                    <div className="p-3 bg-indigo-50 rounded-lg">
                      <p className="text-sm font-semibold text-indigo-800">{item.improvement}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
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
              Measurable Improvements
            </h2>
            <p className="text-xl text-gray-600">
              Real results from replacing traditional IVR systems
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
                <div className="text-4xl font-bold text-indigo-600 mb-4">{benefit.metric}</div>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
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
            <h2 className="text-4xl font-bold mb-6">Ready to Modernize Your Phone System?</h2>
            <p className="text-xl mb-8 opacity-90">
              Replace frustrating phone trees with natural conversation that customers love
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
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

export default IvrReplacementPage;
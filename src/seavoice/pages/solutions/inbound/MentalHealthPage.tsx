
import { motion } from 'framer-motion';
import { Heart, Shield, Clock, Users, CheckCircle, Phone } from 'lucide-react';

const MentalHealthPage = () => {
  const features = [
    {
      icon: Heart,
      title: 'Empathetic AI Companion',
      description: 'Trained to provide compassionate, non-judgmental support with appropriate emotional responses.',
      benefits: ['Active listening', 'Emotional validation', 'Crisis recognition']
    },
    {
      icon: Shield,
      title: 'Safe & Confidential',
      description: 'HIPAA-compliant platform ensuring complete privacy and confidentiality for all interactions.',
      benefits: ['HIPAA compliance', 'Encrypted conversations', 'Anonymous options']
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Always available when someone needs to talk, providing immediate support during crisis moments.',
      benefits: ['Round-the-clock access', 'Immediate response', 'No wait times']
    }
  ];

  const capabilities = [
    {
      title: 'Initial Mental Health Screening',
      description: 'Conduct preliminary assessments using validated screening tools',
      outcomes: ['Early identification', 'Risk assessment', 'Appropriate referrals']
    },
    {
      title: 'Crisis Intervention',
      description: 'Recognize crisis situations and provide immediate support or escalation',
      outcomes: ['Crisis detection', 'De-escalation techniques', 'Emergency protocols']
    },
    {
      title: 'Resource Navigation',
      description: 'Guide users to appropriate mental health resources and services',
      outcomes: ['Service matching', 'Appointment scheduling', 'Follow-up support']
    },
    {
      title: 'Emotional Support',
      description: 'Provide compassionate listening and emotional validation',
      outcomes: ['Reduced isolation', 'Emotional relief', 'Coping strategies']
    }
  ];

  const benefits = [
    { metric: '24/7', description: 'Always available support' },
    { metric: '60%', description: 'Reduction in crisis escalation' },
    { metric: '85%', description: 'User satisfaction rate' },
    { metric: '40%', description: 'Increase in help-seeking behavior' }
  ];

  const safetyFeatures = [
    'Crisis keyword detection',
    'Suicide risk assessment',
    'Automatic escalation protocols',
    'Emergency contact integration',
    'Professional handoff procedures',
    'Follow-up scheduling'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <Heart className="w-16 h-16 text-pink-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Mental Health Voice Companion
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Provide compassionate, 24/7 mental health support with AI that listens, understands, 
              and responds with empathy. Safely bridge the gap between crisis and professional care.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-pink-700 transition-colors"
            >
              Learn About Mental Health AI
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
              Compassionate AI Support
            </h2>
            <p className="text-xl text-gray-600">
              Advanced AI trained in mental health support and crisis intervention
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
                <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg flex items-center justify-center mb-6">
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

      {/* Capabilities Section */}
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
              Mental Health Support Capabilities
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive support across the mental health care spectrum
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{capability.title}</h3>
                <p className="text-gray-600 mb-6">{capability.description}</p>
                <div className="space-y-2">
                  {capability.outcomes.map((outcome, outcomeIndex) => (
                    <div key={outcomeIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-pink-600 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-700">{outcome}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Features */}
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
                Safety-First Design
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our mental health AI is designed with safety as the top priority, featuring 
                advanced crisis detection and immediate escalation protocols to ensure users 
                receive appropriate professional care when needed.
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Shield className="w-6 h-6 text-pink-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Crisis Detection</h3>
                    <p className="text-gray-600">Advanced algorithms identify crisis situations</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-pink-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Professional Handoff</h3>
                    <p className="text-gray-600">Seamless transfer to human mental health professionals</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-pink-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Emergency Protocols</h3>
                    <p className="text-gray-600">Immediate connection to crisis hotlines when needed</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Safety Features</h3>
              <div className="grid grid-cols-1 gap-3">
                {safetyFeatures.map((feature, index) => (
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
              Mental Health Impact
            </h2>
            <p className="text-xl text-gray-600">
              Measurable improvements in mental health support accessibility
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
                <div className="text-4xl font-bold text-pink-600 mb-4">{benefit.metric}</div>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Support Mental Health?</h2>
            <p className="text-xl mb-8 opacity-90">
              Provide compassionate, 24/7 mental health support with AI that truly cares
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-pink-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Learn More
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-pink-600 transition-colors"
              >
                Contact Specialists
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MentalHealthPage;
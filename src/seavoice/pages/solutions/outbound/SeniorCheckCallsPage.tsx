
import { motion } from 'framer-motion';
import { Heart, Shield, Clock, Phone, CheckCircle, Users } from 'lucide-react';

const SeniorCheckCallsPage = () => {
  const features = [
    {
      icon: Heart,
      title: 'Wellness Monitoring',
      description: 'Regular check-ins to monitor senior health and well-being with compassionate AI conversations.',
      benefits: ['Daily/weekly schedules', 'Health status tracking', 'Medication reminders']
    },
    {
      icon: Shield,
      title: 'Emergency Detection',
      description: 'Advanced AI recognizes distress signals and emergency situations for immediate response.',
      benefits: ['Crisis recognition', 'Emergency contacts', 'First responder alerts']
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Customizable call schedules that adapt to individual preferences and needs.',
      benefits: ['Personalized timing', 'Holiday adjustments', 'Family coordination']
    }
  ];

  const checkTypes = [
    {
      type: 'Daily Wellness Checks',
      description: 'Brief daily calls to ensure seniors are safe and well',
      frequency: 'Daily at preferred time',
      duration: '3-5 minutes',
      focus: ['General well-being', 'Medication compliance', 'Safety confirmation']
    },
    {
      type: 'Weekly Health Reviews',
      description: 'Comprehensive weekly assessments of health and needs',
      frequency: 'Weekly on chosen day',
      duration: '10-15 minutes',
      focus: ['Health changes', 'Appointment reminders', 'Family updates']
    },
    {
      type: 'Emergency Response',
      description: 'Immediate response to missed calls or distress signals',
      frequency: 'As needed',
      duration: 'Variable',
      focus: ['Welfare verification', 'Emergency services', 'Family notification']
    },
    {
      type: 'Social Connection',
      description: 'Friendly conversations to reduce isolation and loneliness',
      frequency: 'Bi-weekly or monthly',
      duration: '15-20 minutes',
      focus: ['Companionship', 'Mental health', 'Activity suggestions']
    }
  ];

  const benefits = [
    { metric: '95%', description: 'Senior satisfaction with AI companion' },
    { metric: '40%', description: 'Reduction in emergency incidents' },
    { metric: '24/7', description: 'Emergency response availability' },
    { metric: '85%', description: 'Family peace of mind improvement' }
  ];

  const safetyProtocols = [
    'Missed call escalation procedures',
    'Emergency keyword recognition',
    'Family and caregiver notifications',
    'Healthcare provider integration',
    'Local emergency services coordination',
    'Medical alert system compatibility'
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
              <Heart className="w-16 h-16 text-blue-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Senior Check Calls & Wellness Monitoring
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Provide peace of mind for families with regular AI-powered wellness checks for seniors. 
              Compassionate conversations that monitor health, detect emergencies, and ensure 
              safety while maintaining dignity and independence.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Start Wellness Monitoring
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
              Compassionate Senior Care
            </h2>
            <p className="text-xl text-gray-600">
              AI technology designed specifically for senior wellness and safety
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

      {/* Check Types */}
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
              Comprehensive Check-In Services
            </h2>
            <p className="text-xl text-gray-600">
              Flexible wellness monitoring tailored to individual needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {checkTypes.map((check, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{check.type}</h3>
                <p className="text-gray-600 mb-6">{check.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">Frequency</h4>
                    <p className="text-gray-600 text-sm">{check.frequency}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">Duration</h4>
                    <p className="text-gray-600 text-sm">{check.duration}</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-3">Focus Areas:</h4>
                  <div className="space-y-1">
                    {check.focus.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Protocols */}
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
                Advanced Safety Protocols
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our senior check call system includes comprehensive safety measures designed 
                to detect emergencies, coordinate with family members, and ensure rapid 
                response when needed.
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Emergency Response</h3>
                    <p className="text-gray-600">Immediate escalation for missed calls or distress</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Family Coordination</h3>
                    <p className="text-gray-600">Automatic notifications to family and caregivers</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Shield className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Healthcare Integration</h3>
                    <p className="text-gray-600">Coordination with healthcare providers and services</p>
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Safety Features</h3>
              <div className="grid grid-cols-1 gap-3">
                {safetyProtocols.map((protocol, index) => (
                  <div key={index} className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700 font-medium">{protocol}</span>
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
              Wellness Monitoring Impact
            </h2>
            <p className="text-xl text-gray-600">
              Measurable improvements in senior safety and family peace of mind
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
                <div className="text-4xl font-bold text-blue-600 mb-4">{benefit.metric}</div>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
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
            <h2 className="text-4xl font-bold mb-6">Ready to Ensure Senior Safety?</h2>
            <p className="text-xl mb-8 opacity-90">
              Provide peace of mind with compassionate AI wellness monitoring for your loved ones
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Monitoring
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
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

export default SeniorCheckCallsPage;
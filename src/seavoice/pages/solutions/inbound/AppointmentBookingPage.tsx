
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, BarChart3, CheckCircle, Bell } from 'lucide-react';

const AppointmentBookingPage = () => {
  const features = [
    {
      icon: Calendar,
      title: 'Intelligent Scheduling',
      description: 'AI-powered appointment booking that understands availability and preferences.',
      benefits: ['Real-time availability', 'Smart conflict resolution', 'Preference matching']
    },
    {
      icon: Clock,
      title: 'Automated Reminders',
      description: 'Reduce no-shows with automated appointment reminders and confirmations.',
      benefits: ['SMS & voice reminders', 'Customizable timing', 'Confirmation tracking']
    },
    {
      icon: Users,
      title: 'Multi-Provider Support',
      description: 'Manage appointments across multiple providers, locations, and services.',
      benefits: ['Provider availability', 'Location management', 'Service categorization']
    }
  ];

  const bookingCapabilities = [
    {
      capability: 'Appointment Scheduling',
      description: 'Book new appointments based on availability and preferences',
      features: ['Available time slots', 'Provider selection', 'Service type matching']
    },
    {
      capability: 'Rescheduling',
      description: 'Modify existing appointments with automatic conflict resolution',
      features: ['Conflict detection', 'Alternative suggestions', 'Automatic updates']
    },
    {
      capability: 'Cancellation Management',
      description: 'Handle cancellations and waitlist management efficiently',
      features: ['Cancellation policies', 'Waitlist automation', 'Refund processing']
    },
    {
      capability: 'Reminder System',
      description: 'Automated reminders to reduce no-shows and improve attendance',
      features: ['Multi-channel reminders', 'Customizable timing', 'Confirmation requests']
    }
  ];

  const benefits = [
    { metric: '40%', description: 'Reduction in no-show rates' },
    { metric: '24/7', description: 'Booking availability' },
    { metric: '85%', description: 'Booking accuracy rate' },
    { metric: '60%', description: 'Reduction in admin workload' }
  ];

  const industries = [
    {
      industry: 'Healthcare',
      description: 'Medical appointments, consultations, and procedures',
      benefits: ['Patient scheduling', 'Provider coordination', 'Insurance verification']
    },
    {
      industry: 'Beauty & Wellness',
      description: 'Salon appointments, spa services, and wellness sessions',
      benefits: ['Service duration tracking', 'Stylist preferences', 'Package bookings']
    },
    {
      industry: 'Professional Services',
      description: 'Consultations, meetings, and service appointments',
      benefits: ['Meeting room booking', 'Consultant availability', 'Client preferences']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <Calendar className="w-16 h-16 text-purple-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Appointment Booking & Management
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Automate appointment scheduling with AI that understands availability, 
              preferences, and business rules. Reduce no-shows and streamline your 
              booking process with intelligent voice interactions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Automate Appointment Booking
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
              Smart Appointment Management
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive booking system that handles complex scheduling scenarios
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
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-6">
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

      {/* Booking Capabilities */}
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
              Complete Booking Solution
            </h2>
            <p className="text-xl text-gray-600">
              Handle every aspect of appointment management automatically
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bookingCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{capability.capability}</h3>
                <p className="text-gray-600 mb-6">{capability.description}</p>
                <div className="space-y-2">
                  {capability.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Applications */}
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
              Industry Applications
            </h2>
            <p className="text-xl text-gray-600">
              Tailored booking solutions for different industries and use cases
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{industry.industry}</h3>
                <p className="text-gray-600 mb-6">{industry.description}</p>
                <div className="space-y-2">
                  {industry.benefits.map((benefit, benefitIndex) => (
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

      {/* Reminder System */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Automated Reminder System
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Significantly reduce no-shows with intelligent reminder campaigns that reach 
                customers through their preferred communication channels at optimal times.
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Bell className="w-6 h-6 text-purple-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Multi-Channel Reminders</h3>
                    <p className="text-gray-600">Voice calls, SMS, and email reminders</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-purple-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Optimal Timing</h3>
                    <p className="text-gray-600">AI determines best times to send reminders</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <BarChart3 className="w-6 h-6 text-purple-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Performance Tracking</h3>
                    <p className="text-gray-600">Monitor reminder effectiveness and optimize</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Reminder Timeline</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center mr-4 text-sm font-bold">
                    7d
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Initial Confirmation</h4>
                    <p className="text-gray-600 text-sm">Appointment confirmation and details</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center mr-4 text-sm font-bold">
                    1d
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Day Before Reminder</h4>
                    <p className="text-gray-600 text-sm">Final reminder with preparation instructions</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center mr-4 text-sm font-bold">
                    2h
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Last Minute Check</h4>
                    <p className="text-gray-600 text-sm">Final confirmation and directions</p>
                  </div>
                </div>
              </div>
            </motion.div>
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
              Booking Performance Results
            </h2>
            <p className="text-xl text-gray-600">
              Measurable improvements in appointment management efficiency
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
                <div className="text-4xl font-bold text-purple-600 mb-4">{benefit.metric}</div>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Automate Appointment Booking?</h2>
            <p className="text-xl mb-8 opacity-90">
              Streamline scheduling and reduce no-shows with intelligent appointment management
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AppointmentBookingPage;
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Utensils, Building, Heart, ChevronLeft, ChevronRight, ArrowRight, Star, TrendingUp } from 'lucide-react';

const IndustryShowcaseCarousel = () => {
  const showcases = [
    {
      id: 'restaurant',
      title: 'Restaurant Reservations',
      description: 'AI handles table bookings, dietary preferences, and special requests with personalized service.',
      industry: 'Food & Hospitality',
      icon: Utensils,
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-50 to-red-50',
      metrics: [
        { value: '90%', label: 'Customer Satisfaction' },
        { value: '50%', label: 'Faster Booking Time' },
        { value: '24/7', label: 'Availability' }
      ],
      conversation: {
        customer: "Hi, I'd like to make a reservation for 4 people tonight at 7 PM.",
        ai: "I'd be happy to help! Let me check our availability for 7 PM tonight for 4 guests. I have a lovely table by the window available. Would you prefer indoor or outdoor seating?"
      },
      features: ['Table Management', 'Dietary Preferences', 'Wait List Automation', 'Special Requests']
    },
    {
      id: 'realestate',
      title: 'Real Estate Inquiries',
      description: 'Qualify leads, schedule property viewings, and provide instant property information.',
      industry: 'Real Estate',
      icon: Building,
      color: 'from-blue-500 to-indigo-500',
      bgColor: 'from-blue-50 to-indigo-50',
      metrics: [
        { value: '300%', label: 'More Qualified Leads' },
        { value: '60%', label: 'Faster Closings' },
        { value: '85%', label: 'Lead Quality Score' }
      ],
      conversation: {
        customer: "I'm interested in the 3-bedroom house on Maple Street. Can I schedule a viewing?",
        ai: "Absolutely! The property at 123 Maple Street is a beautiful 3-bedroom, 2-bath home with a modern kitchen. I can schedule a viewing for you. What days work best this week?"
      },
      features: ['Lead Qualification', 'Viewing Scheduling', 'Property Information', 'Follow-up Automation']
    },
    {
      id: 'healthcare',
      title: 'Healthcare Appointments',
      description: 'Schedule appointments, handle insurance verification, and provide medical support.',
      industry: 'Healthcare',
      icon: Heart,
      color: 'from-green-500 to-teal-500',
      bgColor: 'from-green-50 to-teal-50',
      metrics: [
        { value: '80%', label: 'Reduced Wait Times' },
        { value: '99%', label: 'Booking Accuracy' },
        { value: '95%', label: 'Patient Satisfaction' }
      ],
      conversation: {
        customer: "I need to schedule a follow-up appointment with Dr. Smith for next week.",
        ai: "I'll help you schedule that follow-up with Dr. Smith. I see you're due for a check-up. I have Tuesday at 2 PM or Wednesday at 10 AM available. Which works better for you?"
      },
      features: ['Appointment Scheduling', 'Insurance Verification', 'Prescription Refills', 'Medical Reminders']
    }
  ];

  const [currentShowcase, setCurrentShowcase] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentShowcase((prev) => (prev + 1) % showcases.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, showcases.length]);

  const nextShowcase = () => {
    setIsAutoPlaying(false);
    setCurrentShowcase((prev) => (prev + 1) % showcases.length);
  };

  const prevShowcase = () => {
    setIsAutoPlaying(false);
    setCurrentShowcase((prev) => (prev - 1 + showcases.length) % showcases.length);
  };

  const goToShowcase = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentShowcase(index);
  };

  const currentData = showcases[currentShowcase];

  return (
    <section className={`relative bg-gradient-to-br ${currentData.bgColor} py-20 lg:py-32 overflow-hidden transition-all duration-1000`}>
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 text-gray-700 text-sm font-medium mb-8"
            >
              <Star className="w-4 h-4 mr-2 text-yellow-500" />
              Industry Solutions
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentData.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${currentData.color} rounded-lg flex items-center justify-center mr-4`}>
                    <currentData.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-600">{currentData.industry}</div>
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">{currentData.title}</h1>
                  </div>
                </div>

                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  {currentData.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {currentData.metrics.map((metric, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="text-center p-4 bg-white/40 backdrop-blur-sm rounded-lg border border-white/50"
                    >
                      <div className={`text-2xl font-bold bg-gradient-to-r ${currentData.color} bg-clip-text text-transparent`}>
                        {metric.value}
                      </div>
                      <div className="text-sm text-gray-600 font-medium">{metric.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`bg-gradient-to-r ${currentData.color} text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition-all`}
                  >
                    See {currentData.industry} Demo
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </motion.a>
                  
                  <motion.button
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-gray-400 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors"
                  >
                    {isAutoPlaying ? 'Pause Auto-Play' : 'Resume Auto-Play'}
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right column - Interactive showcase */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentData.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6 }}
                className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 border border-white/30 shadow-2xl"
              >
                {/* Industry Scene Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 bg-gradient-to-r ${currentData.color} rounded-lg flex items-center justify-center`}>
                      <currentData.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{currentData.industry} AI Agent</div>
                      <div className="text-sm text-gray-600">Live Conversation</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-sm text-green-600 font-medium">Active</span>
                  </div>
                </div>

                {/* Conversation Display */}
                <div className="space-y-4 mb-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-medium">C</span>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3 flex-1">
                      <div className="text-sm text-gray-800">{currentData.conversation.customer}</div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex items-start space-x-3"
                  >
                    <div className={`w-8 h-8 bg-gradient-to-r ${currentData.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                      <span className="text-white text-sm font-medium">AI</span>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3 flex-1">
                      <div className="text-sm text-gray-800">{currentData.conversation.ai}</div>
                    </div>
                  </motion.div>
                </div>

                {/* Features List */}
                <div className="border-t border-gray-200 pt-6">
                  <div className="text-sm font-medium text-gray-700 mb-3">Key Capabilities:</div>
                  <div className="grid grid-cols-2 gap-2">
                    {currentData.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 + index * 0.1 }}
                        className="flex items-center space-x-2"
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${currentData.color} rounded-full`} />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center mt-8 space-x-4">
              <motion.button
                onClick={prevShowcase}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`w-12 h-12 bg-gradient-to-r ${currentData.color} text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all`}
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              
              {/* Dots indicator */}
              <div className="flex space-x-2">
                {showcases.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToShowcase(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentShowcase
                        ? `bg-gradient-to-r ${currentData.color}`
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
              
              <motion.button
                onClick={nextShowcase}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`w-12 h-12 bg-gradient-to-r ${currentData.color} text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all`}
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IndustryShowcaseCarousel;


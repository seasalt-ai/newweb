import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Globe, Settings, ArrowRight, Server, Link, ClipboardList } from 'lucide-react';

const VoicePlatformArchitecture = () => {
  const [activeModule, setActiveModule] = useState('integration');
  const [isDetailVisible, setIsDetailVisible] = useState(false);

  const modules = [
    {
      id: 'integration',
      title: 'Integrations',
      icon: Link,
      color: 'from-blue-600 to-blue-800',
      description: 'Seamlessly connects with your existing CRM, ERP, and business tools via API.',
      details: [
        'CRM Integration',
        'Calendar Sync',
        'Social Media Connectors',
        'Data Enrichment APIs'
      ]
    },
    {
      id: 'analytics',
      title: 'Analytics',
      icon: Server,
      color: 'from-purple-600 to-purple-800',
      description: 'Provides real-time insights into customer interactions and call outcomes.',
      details: [
        'Real-Time Transcripts',
        'Customer Sentiment Analysis',
        'Trend Reporting',
        'Performance Metrics'
      ]
    },
    {
      id: 'compliance',
      title: 'Compliance',
      icon: ClipboardList,
      color: 'from-green-600 to-green-800',
      description: 'Ensures all interactions comply with industry standards and regulations.',
      details: [
        'GDPR Compliance',
        'HIPAA Compliance',
        'PCI DSS Support',
        'Data Privacy Tools'
      ]
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-gray-800 to-slate-700 py-20 lg:py-32 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-900/10 rounded-full mix-blend-multiply filter blur-lg animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-900/10 rounded-full mix-blend-multiply filter blur-lg animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-green-900/10 rounded-full mix-blend-multiply filter blur-lg animate-pulse delay-2000"></div>
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
              className="inline-flex items-center px-4 py-2 bg-gray-900/20 backdrop-blur-sm rounded-full border border-gray-700/30 text-gray-300 text-sm font-medium mb-8"
            >
              <Settings className="w-4 h-4 mr-2 text-teal-400" />
              Platform Architecture
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
              <span className="block">Explore Our</span>
              <span className="bg-gradient-to-r from-teal-300 to-blue-300 bg-clip-text text-transparent">
                AI Voice Platform
              </span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Discover the architecture that powers seamless integration, robust analytics, and comprehensive compliance across industries, allowing you to focus on what you do best.
            </p>

            {/* Module Buttons */}
            <div className="grid grid-cols-1 gap-3">
              {modules.map((module) => (
                <motion.button
                  key={module.id}
                  onClick={() => {
                    setActiveModule(module.id);
                    setIsDetailVisible(true);
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`p-4 rounded-lg text-left flex items-center transition-all ${
                    activeModule === module.id
                      ? 'bg-gray-900/30 border-2 border-gray-700'
                      : 'bg-white/10 border border-white/20 hover:bg-white/20'
                  }`}
                >
                  <module.icon className={`w-6 h-6 text-white mr-3`} />
                  <div>
                    <div className="text-white font-medium">{module.title}</div>
                    <div className="text-gray-400 text-sm">{module.description}</div>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Right column - Module Detail */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <AnimatePresence exitBeforeEnter>
              {isDetailVisible && (
                <motion.div
                  key={activeModule}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 border border-white/30 shadow-2xl"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex flex-col">
                      <h3 className="text-xl font-bold text-gray-900">{modules.find((m) => m.id === activeModule)?.title} Details</h3>
                      <p className="text-sm text-gray-500">Explore the capabilities of this component.</p>
                    </div>
                  </div>

                  {/* Details List */}
                  <div className="border-t border-gray-200 pt-4">
                    {modules.find((m) => m.id === activeModule)?.details.map((detail, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index }}
                        className="flex items-center space-x-2 mb-2"
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${modules.find((m) => m.id === activeModule)?.color} rounded-full`}></div>
                        <span className="text-sm text-gray-600">{detail}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VoicePlatformArchitecture;



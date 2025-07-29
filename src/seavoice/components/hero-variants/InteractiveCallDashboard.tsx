import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Users, Clock, BarChart3, Globe, ArrowRight, Activity } from 'lucide-react';

const InteractiveCallDashboard = () => {
  const [activeCalls, setActiveCalls] = useState(247);
  const [queueTime, setQueueTime] = useState(0.3);
  const [resolutionRate, setResolutionRate] = useState(94);
  const [globalCalls, setGlobalCalls] = useState<Array<{id: number, x: number, y: number, country: string}>>([]);

  // Animate metrics
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCalls(prev => prev + Math.floor(Math.random() * 10 - 5));
      setQueueTime(prev => Math.max(0.1, prev + (Math.random() * 0.4 - 0.2)));
      setResolutionRate(prev => Math.min(99, Math.max(85, prev + Math.floor(Math.random() * 4 - 2))));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Add global call indicators
  useEffect(() => {
    const interval = setInterval(() => {
      const newCall = {
        id: Date.now(),
        x: Math.random() * 100,
        y: Math.random() * 100,
        country: ['USA', 'UK', 'Canada', 'Australia', 'Germany'][Math.floor(Math.random() * 5)]
      };
      
      setGlobalCalls(prev => [...prev.slice(-8), newCall]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const conversationBubbles = [
    { id: 1, text: "Hi, I'd like to schedule an appointment", x: 15, y: 20, delay: 0 },
    { id: 2, text: "Thank you for calling TechCorp...", x: 70, y: 35, delay: 1 },
    { id: 3, text: "Can you help me track my order?", x: 25, y: 65, delay: 2 },
    { id: 4, text: "I'm available Tuesday at 2 PM", x: 80, y: 80, delay: 3 },
  ];

  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 py-20 lg:py-32 overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
            animate={{
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
          />
        ))}
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
              className="inline-flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/30 text-blue-200 text-sm font-medium mb-8"
            >
              <Activity className="w-4 h-4 mr-2 text-green-400" />
              Live Dashboard
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
              <span className="block">Control Center</span>
              <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                Real-Time Analytics
              </span>
            </h1>

            <p className="text-xl text-blue-100 leading-relaxed mb-8">
              Watch our AI voice platform handle thousands of simultaneous calls with 
              human-like conversations and real-time analytics.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center"
              >
                Book a Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Right column - Interactive Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Dashboard */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-white">SeaVoice Control Center</h3>
                <div className="flex items-center space-x-2">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-3 h-3 bg-green-400 rounded-full"
                  />
                  <span className="text-green-300 text-sm">Live</span>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <motion.div
                  key={activeCalls}
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  className="text-center p-4 bg-blue-500/20 rounded-lg"
                >
                  <motion.div
                    animate={{ color: ['#60A5FA', '#A78BFA', '#60A5FA'] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-3xl font-bold mb-2"
                  >
                    {activeCalls}
                  </motion.div>
                  <div className="text-blue-200 text-sm">Active Calls</div>
                </motion.div>

                <div className="text-center p-4 bg-purple-500/20 rounded-lg">
                  <motion.div
                    key={queueTime}
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    className="text-3xl font-bold text-green-400 mb-2"
                  >
                    {queueTime.toFixed(1)}s
                  </motion.div>
                  <div className="text-purple-200 text-sm">Avg Queue Time</div>
                </div>

                <div className="text-center p-4 bg-green-500/20 rounded-lg">
                  <motion.div
                    key={resolutionRate}
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    className="text-3xl font-bold text-yellow-400 mb-2"
                  >
                    {resolutionRate}%
                  </motion.div>
                  <div className="text-green-200 text-sm">Resolution Rate</div>
                </div>

                <div className="text-center p-4 bg-orange-500/20 rounded-lg">
                  <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
                  <div className="text-orange-200 text-sm">Availability</div>
                </div>
              </div>

              {/* Global Activity Map */}
              <div className="relative h-32 bg-slate-800/50 rounded-lg overflow-hidden mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20" />
                <AnimatePresence>
                  {globalCalls.map((call) => (
                    <motion.div
                      key={call.id}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      className="absolute w-3 h-3 bg-blue-400 rounded-full"
                      style={{
                        left: `${call.x}%`,
                        top: `${call.y}%`,
                      }}
                    >
                      <motion.div
                        animate={{ scale: [1, 2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 bg-blue-400/30 rounded-full"
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
                <div className="absolute bottom-2 left-2 text-xs text-blue-200">
                  Global Call Activity
                </div>
              </div>

              {/* Recent Activity */}
              <div className="space-y-3">
                <div className="text-sm font-medium text-white mb-3">Recent Conversations</div>
                {['Customer inquiry resolved', 'Appointment scheduled', 'Payment processed', 'Support ticket created'].map((activity, index) => (
                  <motion.div
                    key={activity}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="flex items-center space-x-3 p-2 bg-white/5 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-sm text-blue-100">{activity}</span>
                    <span className="text-xs text-blue-300 ml-auto">Just now</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Floating Conversation Bubbles */}
            {conversationBubbles.map((bubble) => (
              <motion.div
                key={bubble.id}
                initial={{ opacity: 0, scale: 0, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: bubble.delay, duration: 0.5 }}
                className="absolute bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg max-w-xs"
                style={{
                  left: `${bubble.x}%`,
                  top: `${bubble.y}%`,
                }}
              >
                <div className="text-sm text-gray-800">{bubble.text}</div>
                <div className="absolute -bottom-2 left-4 w-4 h-4 bg-white/90 transform rotate-45" />
              </motion.div>
            ))}

            {/* Floating Stats */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-lg p-4 shadow-xl"
            >
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm opacity-90">Concurrent Calls</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-400 to-pink-500 text-white rounded-lg p-4 shadow-xl"
            >
              <div className="text-2xl font-bold">99.9%</div>
              <div className="text-sm opacity-90">Uptime</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveCallDashboard;

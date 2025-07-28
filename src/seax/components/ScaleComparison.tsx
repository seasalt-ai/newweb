import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Users, MessageSquare, Phone, Clock, TrendingUp, Zap } from 'lucide-react';

interface ComparisonData {
  manual: {
    messages: number;
    time: string;
    reach: number;
    efficiency: number;
  };
  seax: {
    messages: number;
    time: string;
    reach: number;
    efficiency: number;
  };
}

const ScaleComparison = () => {
  const [animationPhase, setAnimationPhase] = useState(0); // 0: manual, 1: transition, 2: seax
  const [comparisonData, setComparisonData] = useState<ComparisonData>({
    manual: {
      messages: 0,
      time: '8 hours',
      reach: 0,
      efficiency: 25
    },
    seax: {
      messages: 0,
      time: '5 minutes',
      reach: 0,
      efficiency: 95
    }
  });

  useEffect(() => {
    const phaseInterval = setInterval(() => {
      setAnimationPhase(prev => (prev + 1) % 3);
    }, 4000);

    return () => clearInterval(phaseInterval);
  }, []);

  useEffect(() => {
    // Animate counters based on current phase
    const interval = setInterval(() => {
      setComparisonData(prev => ({
        manual: {
          ...prev.manual,
          messages: animationPhase === 0 ? Math.min(prev.manual.messages + 1, 50) : prev.manual.messages,
          reach: animationPhase === 0 ? Math.min(prev.manual.reach + 1, 50) : prev.manual.reach
        },
        seax: {
          ...prev.seax,
          messages: animationPhase === 2 ? Math.min(prev.seax.messages + 50000, 2500000) : 0,
          reach: animationPhase === 2 ? Math.min(prev.seax.reach + 25000, 1000000) : 0
        }
      }));
    }, 100);

    // Reset counters when switching phases
    if (animationPhase === 0) {
      setComparisonData(prev => ({
        ...prev,
        manual: { ...prev.manual, messages: 0, reach: 0 },
        seax: { ...prev.seax, messages: 0, reach: 0 }
      }));
    }

    return () => clearInterval(interval);
  }, [animationPhase]);

  const manualMessages = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: (i % 4) * 25 + 10,
    y: Math.floor(i / 4) * 40 + 20,
    delay: i * 0.5
  }));

  const seaxMessages = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 90,
    y: Math.random() * 80,
    delay: i * 0.02
  }));

  return (
    <section className="relative bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 py-20 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-orange-200/40 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full text-orange-800 text-sm font-medium mb-8"
          >
            <TrendingUp className="w-4 h-4 mr-2" />
            Scale Comparison
          </motion.div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
            <span className="block">Manual vs</span>
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Automated
            </span>
            <span className="block">Outreach</span>
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            See the dramatic difference between traditional manual outreach and 
            SeaX's automated mass communication platform.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Manual Outreach */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Manual Outreach</h2>
                <div className="flex items-center space-x-2 text-orange-600">
                  <User className="w-6 h-6" />
                  <Clock className="w-6 h-6" />
                </div>
              </div>

              {/* Manual Animation Area */}
              <div className="relative h-64 bg-gray-50 rounded-lg mb-6 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <div className="text-center">
                    <User className="w-12 h-12 mx-auto mb-2" />
                    <div className="text-sm">One person typing...</div>
                  </div>
                </div>

                {/* Manual message dots */}
                <AnimatePresence>
                  {animationPhase === 0 && manualMessages.slice(0, Math.floor(comparisonData.manual.messages / 6)).map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ delay: msg.delay }}
                      className="absolute w-3 h-3 bg-orange-500 rounded-full"
                      style={{
                        left: `${msg.x}%`,
                        top: `${msg.y}%`,
                      }}
                    >
                      <motion.div
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 bg-orange-400/30 rounded-full"
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Manual Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <motion.div
                    key={comparisonData.manual.messages}
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    className="text-2xl font-bold text-orange-600 mb-1"
                  >
                    {comparisonData.manual.messages.toLocaleString()}
                  </motion.div>
                  <div className="text-sm text-gray-600">Messages/Day</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600 mb-1">{comparisonData.manual.time}</div>
                  <div className="text-sm text-gray-600">Time Required</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <motion.div
                    key={comparisonData.manual.reach}
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    className="text-2xl font-bold text-orange-600 mb-1"
                  >
                    {comparisonData.manual.reach}
                  </motion.div>
                  <div className="text-sm text-gray-600">People Reached</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600 mb-1">{comparisonData.manual.efficiency}%</div>
                  <div className="text-sm text-gray-600">Efficiency</div>
                </div>
              </div>
            </div>

            {/* Limitations Badge */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -bottom-4 left-4 bg-red-500 text-white rounded-lg p-3 shadow-lg"
            >
              <div className="text-sm font-medium">Limited Scale</div>
            </motion.div>
          </motion.div>

          {/* VS Divider */}
          <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                scale: { duration: 2, repeat: Infinity },
                rotate: { duration: 8, repeat: Infinity, ease: "linear" }
              }}
              className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-xl"
            >
              VS
            </motion.div>
          </div>

          {/* SeaX Automated */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">SeaX Automated</h2>
                <div className="flex items-center space-x-2 text-blue-600">
                  <Zap className="w-6 h-6" />
                  <Users className="w-6 h-6" />
                </div>
              </div>

              {/* SeaX Animation Area */}
              <div className="relative h-64 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg mb-6 overflow-hidden">
                <div className="absolute top-4 left-4 flex items-center space-x-2 text-blue-600">
                  <Zap className="w-4 h-4" />
                  <span className="text-sm font-medium">AI-Powered</span>
                </div>

                {/* SeaX message explosion */}
                <AnimatePresence>
                  {animationPhase === 2 && seaxMessages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ 
                        opacity: 1, 
                        scale: [0, 1, 0.8]
                      }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{ 
                        delay: msg.delay,
                        duration: 0.5,
                        scale: { duration: 1 }
                      }}
                      className="absolute w-3 h-3 bg-blue-500 rounded-full"
                      style={{
                        left: `${msg.x}%`,
                        top: `${msg.y}%`,
                      }}
                    >
                      <motion.div
                        animate={{ scale: [1, 2, 1], opacity: [0.6, 0, 0.6] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="absolute inset-0 bg-blue-400/40 rounded-full"
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Central command center */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <motion.div
                    animate={{ 
                      scale: animationPhase === 2 ? [1, 1.2, 1] : 1,
                      rotate: [0, 360]
                    }}
                    transition={{ 
                      scale: { duration: 2, repeat: Infinity },
                      rotate: { duration: 10, repeat: Infinity, ease: "linear" }
                    }}
                    className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center"
                  >
                    <Users className="w-6 h-6 text-white" />
                  </motion.div>
                </div>
              </div>

              {/* SeaX Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <motion.div
                    key={comparisonData.seax.messages}
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    className="text-2xl font-bold text-blue-600 mb-1"
                  >
                    {comparisonData.seax.messages.toLocaleString()}
                  </motion.div>
                  <div className="text-sm text-gray-600">Messages/Day</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-1">{comparisonData.seax.time}</div>
                  <div className="text-sm text-gray-600">Time Required</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <motion.div
                    key={comparisonData.seax.reach}
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    className="text-2xl font-bold text-blue-600 mb-1"
                  >
                    {comparisonData.seax.reach.toLocaleString()}
                  </motion.div>
                  <div className="text-sm text-gray-600">People Reached</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-1">{comparisonData.seax.efficiency}%</div>
                  <div className="text-sm text-gray-600">Efficiency</div>
                </div>
              </div>
            </div>

            {/* Advantage Badge */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              className="absolute -bottom-4 right-4 bg-green-500 text-white rounded-lg p-3 shadow-lg"
            >
              <div className="text-sm font-medium">Unlimited Scale</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-3xl font-bold mb-4">The SeaX Advantage</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-4xl font-bold mb-2">5000x</div>
                <div className="text-blue-100">Faster Execution</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">20000x</div>
                <div className="text-blue-100">More Reach</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">280%</div>
                <div className="text-blue-100">Higher Efficiency</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ScaleComparison;

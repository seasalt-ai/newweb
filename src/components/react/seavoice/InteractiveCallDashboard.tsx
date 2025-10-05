import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Users,
  Clock,
  BarChart3,
  Globe,
  ArrowRight,
  Activity,
} from "lucide-react";
import {
  getTranslationHelpers,
  type SupportedLanguage,
} from "../../../i18n/helpers";
import { getMeetingUrl } from "../../../constants/urls";

interface InteractiveCallDashboardProps {
  lang: SupportedLanguage;
}

const InteractiveCallDashboard: React.FC<InteractiveCallDashboardProps> = ({
  lang,
}) => {
  const [clientMounted, setClientMounted] = useState(false);
  const [tFunc, setTFunc] = useState<((key: string) => string) | null>(null);
  const [activeCalls, setActiveCalls] = useState(247);
  const [queueTime, setQueueTime] = useState(0.3);
  const [resolutionRate, setResolutionRate] = useState(94);
  const [globalCalls, setGlobalCalls] = useState<
    Array<{ id: number; x: number; y: number; country: string }>
  >([]);
  const [particles, setParticles] = useState<
    Array<{ id: number; x: number; y: number; duration: number; delay: number }>
  >([]);

  // Load translations on client mount
  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const { t } = await getTranslationHelpers(lang);
        setTFunc(() => t);
        setClientMounted(true);
      } catch (error) {
        console.error("Failed to load translations:", error);
        setClientMounted(true); // Still mount, will use fallbacks
      }
    };

    loadTranslations();
  }, [lang]);

  // Helper function to get text from translations
  const getText = (key: string, fallback: string = key): string => {
    if (tFunc) {
      return tFunc(key) || fallback;
    }
    return fallback;
  };

  // Fix hydration by setting mounted state
  useEffect(() => {
    if (!clientMounted) return;

    // Generate particles only on client side after translations load
    const generatedParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: 10 + Math.random() * 20,
      delay: Math.random() * 5,
    }));
    setParticles(generatedParticles);
  }, [clientMounted]);

  // Animate metrics
  useEffect(() => {
    if (!clientMounted) return;

    const interval = setInterval(() => {
      setActiveCalls((prev) => prev + Math.floor(Math.random() * 10 - 5));
      setQueueTime((prev) => Math.max(0.1, prev + (Math.random() * 0.4 - 0.2)));
      setResolutionRate((prev) =>
        Math.min(99, Math.max(85, prev + Math.floor(Math.random() * 4 - 2)))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [clientMounted]);

  // Add global call indicators
  useEffect(() => {
    if (!clientMounted) return;

    const interval = setInterval(() => {
      const newCall = {
        id: Date.now(),
        x: Math.random() * 100,
        y: Math.random() * 100,
        country: ["USA", "UK", "Canada", "Australia", "Germany"][
          Math.floor(Math.random() * 5)
        ],
      };

      setGlobalCalls((prev) => [...prev.slice(-8), newCall]);
    }, 2000);

    return () => clearInterval(interval);
  }, [clientMounted]);

  if (!clientMounted) {
    return (
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 py-20 lg:py-32 overflow-hidden animate-pulse">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="h-8 bg-blue-400/20 rounded w-1/3 mb-8"></div>
              <div className="h-16 bg-blue-400/20 rounded w-3/4 mb-8"></div>
              <div className="h-20 bg-blue-400/20 rounded w-full mb-8"></div>
              <div className="h-12 bg-blue-400/20 rounded w-1/2"></div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="h-6 bg-white/20 rounded w-1/2 mb-6"></div>
              <div className="grid grid-cols-2 gap-6 mb-8">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="text-center p-4 bg-white/10 rounded-lg"
                  >
                    <div className="h-8 bg-white/20 rounded w-16 mx-auto mb-2"></div>
                    <div className="h-4 bg-white/20 rounded w-20 mx-auto"></div>
                  </div>
                ))}
              </div>
              <div className="h-32 bg-white/10 rounded-lg mb-6"></div>
              <div className="space-y-3">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-10 bg-white/5 rounded-lg"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const conversationBubbles = [
    {
      id: 1,
      text: getText(
        "seavoice.components.interactiveCallDashboard.conversations.appointmentRequest",
        "Appointment request handled"
      ),
      x: 15,
      y: 20,
      delay: 0,
    },
    {
      id: 2,
      text: getText(
        "seavoice.components.interactiveCallDashboard.conversations.techCorpGreeting",
        "TechCorp greeting completed"
      ),
      x: 70,
      y: 35,
      delay: 1,
    },
    {
      id: 3,
      text: getText(
        "seavoice.components.interactiveCallDashboard.conversations.orderTracking",
        "Order tracking inquiry"
      ),
      x: 25,
      y: 65,
      delay: 2,
    },
    {
      id: 4,
      text: getText(
        "seavoice.components.interactiveCallDashboard.conversations.availabilityResponse",
        "Availability confirmed"
      ),
      x: 80,
      y: 80,
      delay: 3,
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 py-20 lg:py-32 overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {clientMounted &&
          particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
              animate={{
                x: [particle.x, (particle.x + 50) % 100],
                y: [particle.y, (particle.y + 30) % 100],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                ease: "linear",
                delay: particle.delay,
              }}
              style={{
                left: particle.x + "%",
                top: particle.y + "%",
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
              {getText(
                "seavoice.components.interactiveCallDashboard.liveDashboard",
                "Live Dashboard"
              )}
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
              <span className="block">
                {getText(
                  "seavoice.components.interactiveCallDashboard.controlCenter",
                  "Control Center"
                )}
              </span>
              <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                {getText(
                  "seavoice.components.interactiveCallDashboard.realTimeAnalytics",
                  "Real-time Analytics"
                )}
              </span>
            </h1>

            <p className="text-xl text-blue-100 leading-relaxed mb-8">
              {getText(
                "seavoice.components.interactiveCallDashboard.description",
                "Monitor and manage your voice AI operations with comprehensive real-time insights."
              )}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href={getMeetingUrl(lang)}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center"
              >
                {getText(
                  "seavoice.components.interactiveCallDashboard.bookDemo",
                  "Book a Demo"
                )}
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
                <h3 className="text-xl font-semibold text-white">
                  {getText(
                    "seavoice.components.interactiveCallDashboard.controlCenterTitle",
                    "Command Center"
                  )}
                </h3>
                <div className="flex items-center space-x-2">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-3 h-3 bg-green-400 rounded-full"
                  />
                  <span className="text-green-300 text-sm">
                    {getText(
                      "seavoice.components.interactiveCallDashboard.live",
                      "Live"
                    )}
                  </span>
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
                    animate={{ color: ["#60A5FA", "#A78BFA", "#60A5FA"] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-3xl font-bold mb-2"
                  >
                    {activeCalls}
                  </motion.div>
                  <div className="text-blue-200 text-sm">
                    {getText(
                      "seavoice.components.interactiveCallDashboard.activeCalls",
                      "Active Calls"
                    )}
                  </div>
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
                  <div className="text-purple-200 text-sm">
                    {getText(
                      "seavoice.components.interactiveCallDashboard.avgQueueTime",
                      "Avg Queue Time"
                    )}
                  </div>
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
                  <div className="text-green-200 text-sm">
                    {getText(
                      "seavoice.components.interactiveCallDashboard.resolutionRate",
                      "Resolution Rate"
                    )}
                  </div>
                </div>

                <div className="text-center p-4 bg-orange-500/20 rounded-lg">
                  <div className="text-3xl font-bold text-orange-400 mb-2">
                    24/7
                  </div>
                  <div className="text-orange-200 text-sm">
                    {getText(
                      "seavoice.components.interactiveCallDashboard.availability",
                      "Availability"
                    )}
                  </div>
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
                  {getText(
                    "seavoice.components.interactiveCallDashboard.globalCallActivity",
                    "Global Call Activity"
                  )}
                </div>
              </div>

              {/* Recent Activity */}
              <div className="space-y-3">
                <div className="text-sm font-medium text-white mb-3">
                  {getText(
                    "seavoice.components.interactiveCallDashboard.recentConversations",
                    "Recent Conversations"
                  )}
                </div>
                {[
                  getText(
                    "seavoice.components.interactiveCallDashboard.customerInquiryResolved",
                    "Customer inquiry resolved"
                  ),
                  getText(
                    "seavoice.components.interactiveCallDashboard.appointmentScheduled",
                    "Appointment scheduled"
                  ),
                  getText(
                    "seavoice.components.interactiveCallDashboard.paymentProcessed",
                    "Payment processed"
                  ),
                  getText(
                    "seavoice.components.interactiveCallDashboard.supportTicketCreated",
                    "Support ticket created"
                  ),
                ].map((activity, index) => (
                  <motion.div
                    key={activity}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="flex items-center space-x-3 p-2 bg-white/5 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-sm text-blue-100">{activity}</span>
                    <span className="text-xs text-blue-300 ml-auto">
                      {getText(
                        "seavoice.components.interactiveCallDashboard.justNow",
                        "Just now"
                      )}
                    </span>
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
              <div className="text-sm opacity-90">
                {getText(
                  "seavoice.components.interactiveCallDashboard.concurrentCalls",
                  "Concurrent Calls"
                )}
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-400 to-pink-500 text-white rounded-lg p-4 shadow-xl"
            >
              <div className="text-2xl font-bold">99.9%</div>
              <div className="text-sm opacity-90">
                {getText(
                  "seavoice.components.interactiveCallDashboard.uptime",
                  "Uptime"
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveCallDashboard;

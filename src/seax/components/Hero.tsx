import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Play, ArrowRight, MessageCircle, Phone, Mail } from 'lucide-react';
import MassCommunicationFlow from './MassCommunicationFlow';

const Hero = () => {
  const { i18n: _i18n } = useTranslation();
  const [, setIsVideoPlaying] = useState(false);
  const [messagesSent, setMessagesSent] = useState(2456789);
  const [delivered, setDelivered] = useState(2389654);
  const [activeNow, setActiveNow] = useState(12847);

  const handleStatsUpdate = (stats: { totalSent: number; delivered: number; active: number }) => {
    setMessagesSent(stats.totalSent + 2456789); // Add base number for display
    setDelivered(stats.delivered + 2389654);
    setActiveNow(stats.active);
  };

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
    // In a real implementation, you would trigger the video modal here
  };

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Main content */}
          <div className="text-center lg:text-left">
            {/* Social proof badge */}
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-sm">
              <div className="flex -space-x-2">
                <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-white"></div>
                <div className="w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                <div className="w-6 h-6 bg-purple-500 rounded-full border-2 border-white"></div>
              </div>
              <span className="text-sm font-medium text-gray-700">
                Trusted by 10,000+ businesses
              </span>
            </div>

            {/* Main headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="block">Reach</span>
              <span className="block text-blue-400">Millions.</span>
              <span className="block">Instantly.</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              The ultimate platform for sending millions of SMS, WhatsApp messages, and automated phone calls. 
              Fill your pipeline, drive revenue, and scale your business with powerful outreach.
            </p>

            {/* Key benefits */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10 text-sm">
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-5 h-5 text-blue-400" />
                <span className="font-medium text-gray-300">10M+ Messages Daily</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-green-400" />
                <span className="font-medium text-gray-300">500K+ Calls Per Hour</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-purple-400" />
                <span className="font-medium text-gray-300">99.9% Uptime</span>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <span>Book a Demo</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              
              <a
                href="https://seax.seasalt.ai/signup"
                className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl border"
              >
                <Play className="w-5 h-5" />
                <span>Sign Up</span>
              </a>
            </div>

            {/* Live Statistics */}
            <div className="mt-10 bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-center mb-4">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-300">Live Activity</span>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <motion.div 
                    className="text-lg font-bold text-blue-400 mb-1"
                    key={messagesSent}
                    initial={{ scale: 1.2, color: '#60a5fa' }}
                    animate={{ scale: 1, color: '#60a5fa' }}
                    transition={{ duration: 0.3 }}
                  >
                    {messagesSent.toLocaleString()}
                  </motion.div>
                  <div className="text-xs text-gray-400">Messages Sent</div>
                </div>
                
                <div className="text-center">
                  <motion.div 
                    className="text-lg font-bold text-green-400 mb-1"
                    key={delivered}
                    initial={{ scale: 1.2, color: '#4ade80' }}
                    animate={{ scale: 1, color: '#4ade80' }}
                    transition={{ duration: 0.3 }}
                  >
                    {delivered.toLocaleString()}
                  </motion.div>
                  <div className="text-xs text-gray-400">Delivered</div>
                </div>
                
                <div className="text-center">
                  <motion.div 
                    className="text-lg font-bold text-purple-400 mb-1"
                    key={activeNow}
                    initial={{ scale: 1.2, color: '#c084fc' }}
                    animate={{ scale: 1, color: '#c084fc' }}
                    transition={{ duration: 0.3 }}
                  >
                    {activeNow.toLocaleString()}
                  </motion.div>
                  <div className="text-xs text-gray-400">Active Now</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Visual */}
          <div className="space-y-6">
            {/* Animation Title */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-white mb-2">
                Central Marketing Hub
              </h3>
              <p className="text-gray-300 text-base">
                Real-time reach to millions
              </p>
            </div>
            
            {/* Animation Container */}
            <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 rounded-xl shadow-2xl p-6">
              <MassCommunicationFlow onStatsUpdate={handleStatsUpdate} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;

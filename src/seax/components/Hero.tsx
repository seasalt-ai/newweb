import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Play, ArrowRight, MessageCircle, Phone, Mail } from 'lucide-react';

const Hero = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const getLocalizedPath = (path: string) => `/${currentLanguage}/seax${path}`;

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
    // In a real implementation, you would trigger the video modal here
  };

  return (
    <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              <span className="block">Reach</span>
              <span className="block text-blue-600">Millions.</span>
              <span className="block">Instantly.</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              The ultimate platform for sending millions of SMS, WhatsApp messages, and automated phone calls. 
              Fill your pipeline, drive revenue, and scale your business with powerful outreach.
            </p>

            {/* Key benefits */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10 text-sm">
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-5 h-5 text-blue-600" />
                <span className="font-medium">10M+ Messages Daily</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-green-600" />
                <span className="font-medium">500K+ Calls Per Hour</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-purple-600" />
                <span className="font-medium">99.9% Uptime</span>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to={getLocalizedPath('/contact-sales')}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <span>Book a Demo</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <button
                onClick={handleVideoPlay}
                className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl border"
              >
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 text-sm text-gray-500">
              <p>No credit card required • Setup in 5 minutes • 14-day free trial</p>
            </div>
          </div>

          {/* Right column - Visual */}
          <div className="relative">
            {/* Dashboard mockup */}
            <div className="bg-white rounded-2xl shadow-2xl p-6 border">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-sm font-medium text-gray-600">SeaX Dashboard</span>
              </div>

              {/* Campaign stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-600 mb-1">2.4M</div>
                  <div className="text-sm text-gray-600">Messages Sent</div>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-green-600 mb-1">85%</div>
                  <div className="text-sm text-gray-600">Delivery Rate</div>
                </div>
              </div>

              {/* Recent activity */}
              <div className="space-y-3">
                <div className="text-sm font-medium text-gray-700 mb-2">Recent Activity</div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div className="flex-1 text-sm">
                    <div className="font-medium">Flash Sale Campaign</div>
                    <div className="text-gray-500">50,000 SMS sent • 2 min ago</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="flex-1 text-sm">
                    <div className="font-medium">Lead Follow-up</div>
                    <div className="text-gray-500">12,000 calls completed • 5 min ago</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <div className="flex-1 text-sm">
                    <div className="font-medium">WhatsApp Campaign</div>
                    <div className="text-gray-500">25,000 messages queued • 8 min ago</div>
                  </div>
                </div>
              </div>

              {/* Live indicator */}
              <div className="mt-6 flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-600">Live campaigns running</span>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-blue-600 text-white rounded-lg p-3 shadow-lg">
              <div className="text-sm font-medium">+2,456</div>
              <div className="text-xs opacity-90">New leads</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-green-600 text-white rounded-lg p-3 shadow-lg">
              <div className="text-sm font-medium">400%</div>
              <div className="text-xs opacity-90">Avg ROI</div>
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

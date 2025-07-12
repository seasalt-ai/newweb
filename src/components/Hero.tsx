import React, { useEffect, useState } from 'react';
import { Phone, MessageSquare, MessageCircle, Mail, Monitor, Smartphone, Megaphone, BarChart3, Users, Inbox } from 'lucide-react';

const Hero = () => {
  const [activeTab, setActiveTab] = useState('marketing');

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prevTab) => (prevTab === 'marketing' ? 'support' : 'marketing'));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-16 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center space-y-12 lg:space-y-0">
          {/* Left Column - Content */}
          <div className="lg:pr-8 w-full">
            <div className="text-center lg:text-left w-full">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Stop Juggling Apps.{' '}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Unify Every Customer
                </span>{' '}
                Call, WhatsApp, and Chat in One Simple Inbox.
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                Seasalt.ai is the all-in-one contact center built for businesses. Automate support, 
                capture every lead, and manage all your conversations from a single screen.
              </p>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 sm:mb-12">
                <a
                  href="https://seax.seasalt.ai/signup"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-200"
                >
                  Start for Free
                </a>
                <a
                   href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/" className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
                >
                  Book A Demo
                </a>
              </div>

              {/* Social Proof */}
              <div className="border-t border-gray-200 pt-6 sm:pt-8">
                <p className="text-sm text-gray-500 mb-4">
                  Seasalt.ai brings developers an agentic communication tool for the following{' '}
                  <code className="text-sm font-mono bg-red-50 text-red-800 px-3 py-1.5 rounded-md border border-red-200 font-semibold whitespace-nowrap">
                    tool use
                  </code>
                  :
                </p>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
                  <code className="text-sm font-mono bg-red-50 text-red-800 px-3 py-1.5 rounded-md border border-red-200 font-semibold whitespace-nowrap">
                    phone use
                  </code>
                  <code className="text-sm font-mono bg-red-50 text-red-800 px-3 py-1.5 rounded-md border border-red-200 font-semibold whitespace-nowrap">
                    message use
                  </code>
                  <code className="text-sm font-mono bg-red-50 text-red-800 px-3 py-1.5 rounded-md border border-red-200 font-semibold whitespace-nowrap">
                    email use
                  </code>
                  <code className="text-sm font-mono bg-red-50 text-red-800 px-3 py-1.5 rounded-md border border-red-200 font-semibold whitespace-nowrap">
                    meeting use
                  </code>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="mt-8 lg:mt-0">
            <div className="relative">
              {/* Main Inbox Interface */}
              <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">Unified Omni-Channel Hub</h3>
                  <div className="flex space-x-1 sm:space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
                
                {/* Tab Navigation */}
                <div className="flex space-x-1 mb-3 sm:mb-4 bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => setActiveTab('support')}
                    className={`flex-1 flex items-center justify-center px-2 sm:px-3 py-1 sm:py-2 rounded-md text-xs sm:text-sm font-medium transition-all duration-200 ${
                      activeTab === 'support' 
                        ? 'bg-white text-blue-600 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <Users className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                    Support
                  </button>
                  <button
                    onClick={() => setActiveTab('marketing')}
                    className={`flex-1 flex items-center justify-center px-2 sm:px-3 py-1 sm:py-2 rounded-md text-xs sm:text-sm font-medium transition-all duration-200 ${
                      activeTab === 'marketing' 
                        ? 'bg-white text-orange-600 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <Megaphone className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                    Marketing
                  </button>
                </div>

                <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">AI & Human Agents, 24/7</p>
                
                {/* Support Tab Content */}
                {activeTab === 'support' && (
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center p-2 sm:p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                      <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 mr-2 sm:mr-3 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="text-xs sm:text-sm font-medium text-gray-900">Sarah Johnson</p>
                        <p className="text-xs text-gray-600 truncate">Phone call about order status (Human Agent)</p>
                      </div>
                      <span className="text-xs text-gray-500 ml-1 flex-shrink-0">2m ago</span>
                    </div>
                    
                    <div className="flex items-center p-2 sm:p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                      <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mr-2 sm:mr-3 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="text-xs sm:text-sm font-medium text-gray-900">Mike Chen</p>
                        <p className="text-xs text-gray-600 truncate">WhatsApp: Shipping question (AI Chatbot)</p>
                      </div>
                      <span className="text-xs text-gray-500 ml-1 flex-shrink-0">5m ago</span>
                    </div>
                    
                    <div className="flex items-center p-2 sm:p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                      <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600 mr-2 sm:mr-3 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="text-xs sm:text-sm font-medium text-gray-900">Lisa Park</p>
                        <p className="text-xs text-gray-600 truncate">Website chat: Product inquiry (AI & Human)</p>
                      </div>
                      <span className="text-xs text-gray-500 ml-1 flex-shrink-0">8m ago</span>
                    </div>

                    <div className="flex items-center p-2 sm:p-3 bg-indigo-50 rounded-lg border-l-4 border-indigo-500">
                      <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-indigo-600 mr-2 sm:mr-3 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="text-xs sm:text-sm font-medium text-gray-900">David Kim</p>
                        <p className="text-xs text-gray-600 truncate">Support call: Technical issue (AI Voicebot)</p>
                      </div>
                      <span className="text-xs text-gray-500 ml-1 flex-shrink-0">12m ago</span>
                    </div>
                  </div>
                )}

                {/* Marketing Tab Content */}
                {activeTab === 'marketing' && (
                  <div className="space-y-3">
                    <div className="flex items-center p-3 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                      <Megaphone className="h-5 w-5 text-orange-600 mr-3" />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">Black Friday Campaign</p>
                        <p className="text-xs text-gray-600">SMS: 2,847 sent • 312 replies (AI & Human)</p>
                      </div>
                      <span className="text-xs text-green-600 font-medium">+47 leads</span>
                    </div>
                    
                    <div className="flex items-center p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                      <MessageCircle className="h-5 w-5 text-green-600 mr-3" />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">WhatsApp Product Launch</p>
                        <p className="text-xs text-gray-600">1,523 messages • 89 conversations (AI Copilot)</p>
                      </div>
                      <span className="text-xs text-green-600 font-medium">+23 sales</span>
                    </div>
                    
                    <div className="flex items-center p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                      <BarChart3 className="h-5 w-5 text-blue-600 mr-3" />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">Abandoned Cart Recovery</p>
                        <p className="text-xs text-gray-600">Email + SMS: 156 recovered (AI Automation)</p>
                      </div>
                      <span className="text-xs text-green-600 font-medium">+$12.4k</span>
                    </div>

                    <div className="flex items-center p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                      <Phone className="h-5 w-5 text-purple-600 mr-3" />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">Follow-up Call Campaign</p>
                        <p className="text-xs text-gray-600">AI Voicebot: 89 calls • 34 appointments booked</p>
                      </div>
                      <span className="text-xs text-green-600 font-medium">+34 appts</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Floating Channel Icons */}
              <div className="absolute -top-6 -left-6 bg-blue-600 p-3 rounded-full shadow-lg animate-bounce">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div className="absolute -top-4 -right-8 bg-green-500 p-3 rounded-full shadow-lg animate-bounce" style={{ animationDelay: '0.5s' }}>
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <div className="absolute -bottom-6 -left-4 bg-purple-600 p-3 rounded-full shadow-lg animate-bounce" style={{ animationDelay: '1s' }}>
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
              <div className="absolute -bottom-4 -right-6 bg-orange-600 p-3 rounded-full shadow-lg animate-bounce" style={{ animationDelay: '1.5s' }}>
                <Megaphone className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
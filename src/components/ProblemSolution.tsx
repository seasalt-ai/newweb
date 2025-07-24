import { MessageSquareWarning, Clock, Activity, Megaphone, Bot, Users, Phone, MessageCircle, MessageSquare, BarChart3 } from 'lucide-react';
import { useEffect, useState } from 'react';

const ProblemSolution = () => {
  const [activeTab, setActiveTab] = useState('marketing');
  const [fade, setFade] = useState(true);
  const [scale, setScale] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setScale(false);
      setTimeout(() => {
        setActiveTab((prevTab) => (prevTab === 'marketing' ? 'support' : 'marketing'));
        setFade(true);
        setScale(true);
      }, 250); // fade/scale out, then switch
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const problems = [
    {
      icon: <MessageSquareWarning className="h-12 w-12" />,
      title: 'Fragmented Conversations',
      description: 'Jumping between WhatsApp, phone logs, and web chat creates chaos and wastes time.',
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    },
    {
      icon: <Clock className="h-12 w-12" />,
      title: 'Lost Revenue',
      description: 'Missed messages after-hours and slow responses mean lost leads and frustrated customers.',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    },
    {
      icon: <Activity className="h-12 w-12" />,
      title: 'Operational Overload',
      description: 'Your team is stretched thin managing too many tools instead of focusing on customers.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Losing Leads in a Maze of Apps and Inboxes?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Your customers are trying to reach you everywhere. A missed message is a missed sale. 
            Seasalt.ai brings all your communications into one place, so you never miss an opportunity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group text-center"
            >
              <div className={`${problem.bgColor} ${problem.color} p-4 rounded-2xl w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {problem.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                {problem.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* Solution CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 sm:p-8 text-white">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
              Seasalt.ai: Your Omni-Channel Copiloted Solution
            </h3>
            {/* Unified Omni-Channel Hub Animation */}
            <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 relative z-10 mb-6">
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
              
              {/* Animated Tab Content */}
              <div
                className={`transition-all duration-300
                  ${fade ? 'opacity-100' : 'opacity-0'}
                  ${scale ? 'scale-100' : 'scale-95'}
                  ${activeTab === 'support' ? 'shadow-[0_0_24px_4px_rgba(37,99,235,0.15)] bg-cyan-200' : 'shadow-[0_0_24px_4px_rgba(251,146,60,0.15)] bg-orange-50'}
                  rounded-xl
                `}
                style={{
                  boxShadow: activeTab === 'support'
                    ? '0 0 32px 8px rgba(37,99,235,0.18), 0 2px 8px 0 rgba(0,0,0,0.04)'
                    : '0 0 32px 8px rgba(251,146,60,0.18), 0 2px 8px 0 rgba(0,0,0,0.04)'
                }}
                key={activeTab}
              >
                {activeTab === 'support' && (
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-start p-2 sm:p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                      <Phone className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-blue-600 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs sm:text-sm font-medium text-gray-900 truncate">Sarah Johnson</p>
                        <p className="text-xs text-gray-600 truncate">Phone call about order status</p>
                      </div>
                      <span className="text-xs text-gray-500 ml-2 flex-shrink-0 whitespace-nowrap">2m ago</span>
                    </div>
                    <div className="flex items-start p-2 sm:p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                      <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-green-600 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs sm:text-sm font-medium text-gray-900 truncate">Mike Chen</p>
                        <p className="text-xs text-gray-600 truncate">WhatsApp: Shipping question</p>
                      </div>
                      <span className="text-xs text-gray-500 ml-2 flex-shrink-0 whitespace-nowrap">5m ago</span>
                    </div>
                    <div className="flex items-start p-2 sm:p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                      <MessageSquare className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-purple-600 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs sm:text-sm font-medium text-gray-900 truncate">Lisa Park</p>
                        <p className="text-xs text-gray-600 truncate">Website chat: Product inquiry</p>
                      </div>
                      <span className="text-xs text-gray-500 ml-2 flex-shrink-0 whitespace-nowrap">8m ago</span>
                    </div>
                    <div className="flex items-start p-2 sm:p-3 bg-indigo-50 rounded-lg border-l-4 border-indigo-500">
                      <Phone className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-indigo-600 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs sm:text-sm font-medium text-gray-900 truncate">David Kim</p>
                        <p className="text-xs text-gray-600 truncate">Support call: Technical issue</p>
                      </div>
                      <span className="text-xs text-gray-500 ml-2 flex-shrink-0 whitespace-nowrap">12m ago</span>
                    </div>
                  </div>
                )}
                {activeTab === 'marketing' && (
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-start p-2 sm:p-3 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                      <Megaphone className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-orange-600 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs sm:text-sm font-medium text-gray-900 truncate">Black Friday Campaign</p>
                        <p className="text-xs text-gray-600 truncate">SMS: 2,847 sent • 312 replies</p>
                      </div>
                      <span className="text-xs text-green-600 font-medium ml-2 flex-shrink-0 whitespace-nowrap">+47 leads</span>
                    </div>
                    <div className="flex items-start p-2 sm:p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                      <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-green-600 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs sm:text-sm font-medium text-gray-900 truncate">WhatsApp Product Launch</p>
                        <p className="text-xs text-gray-600 truncate">1,523 messages • 89 conversations</p>
                      </div>
                      <span className="text-xs text-green-600 font-medium ml-2 flex-shrink-0 whitespace-nowrap">+23 sales</span>
                    </div>
                    <div className="flex items-start p-2 sm:p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                      <BarChart3 className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-blue-600 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs sm:text-sm font-medium text-gray-900 truncate">Abandoned Cart Recovery</p>
                        <p className="text-xs text-gray-600 truncate">Email + SMS: 156 recovered</p>
                      </div>
                      <span className="text-xs text-green-600 font-medium ml-2 flex-shrink-0 whitespace-nowrap">+$12k</span>
                    </div>
                    <div className="flex items-start p-2 sm:p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                      <Phone className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-purple-600 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs sm:text-sm font-medium text-gray-900 truncate">Follow-up Call Campaign</p>
                        <p className="text-xs text-gray-600 truncate">AI Voicebot: 89 calls • 34 appts</p>
                      </div>
                      <span className="text-xs text-green-600 font-medium ml-2 flex-shrink-0 whitespace-nowrap">+34 appts</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Visual Marketing/Support/Human Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
              {/* Marketing Section */}
              <div className="text-center">
                <div className="bg-white bg-opacity-20 p-3 sm:p-4 rounded-2xl mb-3 sm:mb-4 inline-block">
                  <Megaphone className="h-8 w-8 sm:h-10 sm:w-10 text-white mx-auto" />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">Copilot Your Marketing Campaigns</h4>
                <p className="text-white opacity-90 text-xs sm:text-sm">
                  Acquire more customers with AI-driven outbound campaigns and smart lead nurturing.
                </p>
              </div>

              {/* Support Section */}
              <div className="text-center">
                <div className="bg-white bg-opacity-20 p-3 sm:p-4 rounded-2xl mb-3 sm:mb-4 inline-block">
                  <Bot className="h-8 w-8 sm:h-10 sm:w-10 text-white mx-auto" />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">Autopilot Your Customer Support</h4>
                <p className="text-white opacity-90 text-xs sm:text-sm">
                  Reduce support costs with 24/7 AI agents handling routine queries and seamless human handoff.
                </p>
              </div>

              {/* Human Agents Section */}
              <div className="text-center">
                <div className="bg-white bg-opacity-20 p-3 sm:p-4 rounded-2xl mb-3 sm:mb-4 inline-block">
                  <Users className="h-8 w-8 sm:h-10 sm:w-10 text-white mx-auto" />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">Never Lose the Human Touch</h4>
                <p className="text-white opacity-90 text-xs sm:text-sm">
                  Choose your automation level: Human-only, AI Copilot, or Full Autopilot based on your needs.
                </p>
              </div>
            </div>

            <a
              href="https://seax.seasalt.ai/signup"
              className="inline-flex items-center bg-white text-blue-600 hover:bg-gray-50 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Use Seasalt.ai to Solve This
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
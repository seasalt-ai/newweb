import { MessageSquareWarning, Clock, Activity, Megaphone, Bot, Users } from 'lucide-react';

const ProblemSolution = () => {
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
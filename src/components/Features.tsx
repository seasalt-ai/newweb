import { Inbox, Bot, Globe, Zap, Shield, BarChart3 } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Inbox className="h-8 w-8" />,
      title: 'Unified Omni-Channel Inbox',
      description: 'Never miss a lead. See every customer interaction from every channel in one unified view, enabling seamless human-AI collaboration and saving your team 5+ hours per week.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: 'AI Voicebot & Chatbot',
      description: 'Your first digital employee works 24/7. Automate up to 80% of routine queries, book 5+ appointments daily, and seamlessly handoff to human agents when needed.',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Native Voice & WhatsApp Integration',
      description: 'Serve every customer on their preferred channel, seamlessly. Instantly see WhatsApp chat history when they call.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Outbound Marketing Campaigns',
      description: 'Create seamless, closed-loop customer journeys. Launch targeted campaigns and manage all replies on the same platform.',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Enterprise-Grade Security',
      description: 'HIPAA-compliant solution with bank-level encryption. Trust your customer data is always protected.',
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: 'Simple, Predictable Pricing',
      description: 'Budget with confidence. Transparent pricing means you know exactly what you\'ll pay each month.',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            The Omni-Channel Copiloted Contact Center for SMEs
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Seamlessly blend AI automation with human expertise across all channels. 
            Empower your team to deliver exceptional service and drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-6 sm:p-8 rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
            >
              <div className={`${feature.bgColor} ${feature.color} p-3 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonial Quote */}
        <div className="mt-20 text-center">
          <blockquote className="text-xl sm:text-2xl font-medium text-gray-900 mb-4">
            "I recommend Seasalt.ai for its powerful knowledge base system and omni-channel support!"
          </blockquote>
          <cite className="text-base sm:text-lg text-gray-600">— Solution Architect Review</cite>
        </div>
      </div>
    </section>
  );
};

export default Features;
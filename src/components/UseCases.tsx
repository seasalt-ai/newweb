import React from 'react';
import { Headphones, Bot, MessageSquareText, Megaphone, MessageCircleMore, MessageSquare } from 'lucide-react';

const UseCases = () => {
  const useCases = [
    {
      icon: <Headphones className="h-10 w-10" />,
      title: 'Contact Center Operations',
      headline: 'Professional Contact Center with Full Call Management',
      description: 'Transform your business into a professional contact center with enterprise-grade features.',
      features: [
        'Advanced IVR system for call routing',
        'Automatic call recording & transcription',
        'Intelligent voicemail with notifications',
        'Real-time call analytics & reporting',
        'Agent performance dashboards',
        'Call queue management'
      ],
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      icon: <Bot className="h-10 w-10" />,
      title: '24/7 Virtual Receptionist',
      headline: 'Never Miss a Call Again with AI-Powered Reception',
      description: 'Deploy an intelligent voicebot that works around the clock to capture inbound calls and qualify leads.',
      features: [
        'AI voicebot answers calls 24/7',
        'Appointment booking & scheduling',
        'Lead qualification & routing',
        'Custom greeting & responses',
        'Seamless handoff to human agents',
        'Multi-language support'
      ],
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      icon: <MessageSquareText className="h-10 w-10" />,
      title: 'Unified SMS Management',
      headline: 'Manage Multiple Phone Lines & Two-Way SMS in One Platform',
      description: 'Consolidate all your business phone lines and SMS communications into a single, powerful platform.',
      features: [
        'Multiple phone lines in one dashboard',
        'Two-way SMS conversations',
        'SMS & call history unified',
        'Team collaboration on messages',
        'Automated SMS responses',
        'Local & toll-free number support'
      ],
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      icon: <Megaphone className="h-10 w-10" />,
      title: 'SMS Marketing Campaigns',
      headline: 'Launch Powerful A2P SMS Campaigns with 10DLC & Toll-Free',
      description: 'Execute professional SMS marketing campaigns with high deliverability and compliance.',
      features: [
        '10DLC registered campaigns',
        'Toll-free & short code support',
        'High-volume message delivery',
        'Campaign performance analytics',
        'Compliance & opt-out management',
        'Automated drip campaigns'
      ],
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200'
    },
    {
      icon: <MessageCircleMore className="h-10 w-10" />,
      title: 'WhatsApp Business Campaigns',
      headline: 'Reach Global Customers with WhatsApp Business Platform',
      description: 'Launch targeted WhatsApp campaigns using the official WhatsApp Business Platform.',
      features: [
        'WhatsApp Business API integration',
        'Template message campaigns',
        'Automated chatbot responses',
        'Rich media message support',
        'Global customer reach',
        'Conversation analytics'
      ],
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      icon: <MessageSquare className="h-10 w-10" />,
      title: 'Intelligent Chatbot Support',
      headline: 'AI-Powered Customer Support That Never Sleeps',
      description: 'Deploy intelligent chatbots across all your communication channels to handle customer inquiries 24/7.',
      features: [
        '24/7 automated customer support',
        'Multi-channel chatbot deployment',
        'Instant response to common queries',
        'Seamless human agent handoff',
        'Continuous learning & improvement',
        'Custom knowledge base integration'
      ],
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Powerful Use Cases for Every Business Need
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            From contact centers to marketing campaigns, see how Seasalt.ai adapts to your specific business requirements 
            with enterprise-grade features in a simple, unified platform.
          </p>
        </div>

        <div className="space-y-12">
          {useCases.map((useCase, index) => (
            <div 
              key={index}
              className={`p-6 sm:p-8 rounded-2xl border-2 ${useCase.borderColor} ${useCase.bgColor} hover:shadow-lg transition-all duration-300 group`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">
                {/* Left Column - Icon, Title, Headline, and Description */}
                <div>
                  <div className={`${useCase.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    {useCase.title}
                  </h3>
                  <h4 className={`text-base sm:text-lg font-semibold ${useCase.color} mb-3 sm:mb-4`}>
                    {useCase.headline}
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                    {useCase.description}
                  </p>
                </div>

                {/* Right Column - Features */}
                <div>
                  <h5 className="text-xs sm:text-sm font-semibold text-gray-900 mb-3 sm:mb-4 uppercase tracking-wide">
                    Key Features
                  </h5>
                  <ul className="space-y-2 sm:space-y-3">
                    {useCase.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className={`w-2 h-2 ${useCase.color.replace('text-', 'bg-')} rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0`}></div>
                        <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 sm:p-8 md:p-12 text-white">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
            Ready to Transform Your Business Communications?
          </h3>
          <p className="text-lg sm:text-xl opacity-90 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Choose the use cases that fit your business needs. Start with our free plan and scale as you grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="#signup"
              className="bg-white text-blue-600 hover:bg-gray-50 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-200"
            >
              Start Free Trial
            </a>
            <a
              href="#demo"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-200"
            >
              See Live Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
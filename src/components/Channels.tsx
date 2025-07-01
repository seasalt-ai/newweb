import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MessageSquare, Phone, MessageCircle, Instagram, Mail, Globe, Smartphone, FileText, Monitor } from 'lucide-react';

const Channels = () => {
  const { t, i18n } = useTranslation();

  const channels = [
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: 'WhatsApp Business',
      description: 'Connect with customers on the world\'s most popular messaging platform',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: <Phone className="h-8 w-8" />,
      title: 'Voice & Phone Calls',
      description: 'Professional phone system with AI voicebot and human agent support',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: 'SMS Messaging',
      description: 'Reach customers instantly with personalized SMS campaigns',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: 'Website Chat Widget',
      description: 'Turn website visitors into conversations with AI-powered chat',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Connect Every Customer Channel
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Unify all your customer communications in one platform. From WhatsApp to phone calls, 
            SMS to social media - manage every conversation from a single dashboard.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mb-8 sm:mb-12">
          {channels.map((channel, index) => (
            <div 
              key={index}
              className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group text-center"
            >
              <div className={`${channel.bgColor} ${channel.color} p-3 sm:p-4 rounded-2xl w-fit mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <div className="h-6 w-6 sm:h-8 sm:w-8">
                  {channel.icon}
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">
                {channel.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                {channel.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to={`/${i18n.language}/channels-overview`}
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Explore All Channels
          </Link>
          <p className="text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4">See how all 9 channels work together seamlessly</p>
        </div>
      </div>
    </section>
  );
};

export default Channels;
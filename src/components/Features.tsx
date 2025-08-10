import { Inbox, Bot, Globe, Zap, Shield, BarChart3 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Features = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: <Inbox className="h-8 w-8" />,
      title: t('features.omniChannel.title'),
      description: t('features.omniChannel.description'),
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: t('features.aiVoicebot.title'),
      description: t('features.aiVoicebot.description'),
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: t('features.voiceWhatsapp.title'),
      description: t('features.voiceWhatsapp.description'),
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: t('features.outboundMarketing.title'),
      description: t('features.outboundMarketing.description'),
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: t('features.enterpriseSecurity.title'),
      description: t('features.enterpriseSecurity.description'),
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: t('features.predictablePricing.title'),
      description: t('features.predictablePricing.description'),
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t('features.mainTitle')}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            {t('features.mainDescription')}
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
            {t('features.testimonial.quote')}
          </blockquote>
          <cite className="text-base sm:text-lg text-gray-600">{t('features.testimonial.author')}</cite>
        </div>
      </div>
    </section>
  );
};

export default Features;
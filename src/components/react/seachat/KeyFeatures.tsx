import { Users, Bot, Globe, ArrowRight, Infinity, Download, MessageCircle, Clock } from 'lucide-react';
import { useTranslation, type SupportedLanguage } from '../../../i18n/helpers';

interface KeyFeaturesProps {
  lang: SupportedLanguage;
  translations?: any;
}

const KeyFeatures: React.FC<KeyFeaturesProps> = ({ lang, translations }) => {
  const { t: hookT, isLoading } = translations ? 
    { t: null, isLoading: false } : 
    useTranslation(lang);

  const getText = (key: string, fallback: string = key): string => {
    if (translations) {
      const keys = key.split('.');
      let result: any = translations;
      
      for (const k of keys) {
        if (result && typeof result === 'object' && k in result) {
          result = result[k];
        } else {
          console.warn(`Missing translation key: "${key}" in locale "${lang}"`);
          return fallback;
        }
      }
      
      return typeof result === 'string' ? result : fallback;
    }
    
    return hookT ? hookT(key) : fallback;
  };

  // 處理載入狀態
  if (isLoading) {
    return (
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse space-y-8">
            <div className="h-8 bg-gray-200 rounded w-1/2 mx-auto"></div>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-gray-200 h-64 rounded-2xl"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  const features = [
    {
      icon: Users,
      title: getText('seachat.keyFeatures.humanAgents.title', 'Human Agent Support'),
      description: getText('seachat.keyFeatures.humanAgents.description', 'Seamlessly hand off conversations to human agents when needed'),
      highlights: [
        getText('seachat.keyFeatures.humanAgents.highlights.0', 'Smart handoff triggers'),
        getText('seachat.keyFeatures.humanAgents.highlights.1', 'Agent workload balancing'),
        getText('seachat.keyFeatures.humanAgents.highlights.2', 'Context preservation'),
      ],
      color: 'from-green-500 to-emerald-500',
      badge: getText('seachat.keyFeatures.humanAgents.badge', 'Popular')
    },
    {
      icon: Bot,
      title: getText('seachat.keyFeatures.aiAutomation.title', 'AI Automation'),
      description: getText('seachat.keyFeatures.aiAutomation.description', 'Automate repetitive tasks and provide instant responses'),
      highlights: [
        getText('seachat.keyFeatures.aiAutomation.highlights.0', 'Natural language processing'),
        getText('seachat.keyFeatures.aiAutomation.highlights.1', 'Smart intent recognition'),
        getText('seachat.keyFeatures.aiAutomation.highlights.2', 'Automated workflows'),
      ],
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Globe,
      title: getText('seachat.keyFeatures.omnichannel.title', 'Omnichannel Support'),
      description: getText('seachat.keyFeatures.omnichannel.description', 'Connect with customers across all platforms'),
      highlights: [
        getText('seachat.keyFeatures.omnichannel.highlights.0', 'WhatsApp Business integration'),
        getText('seachat.keyFeatures.omnichannel.highlights.1', 'Social media channels'),
        getText('seachat.keyFeatures.omnichannel.highlights.2', 'Website chat widget'),
      ],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const freeFeatures = [
    {
      icon: MessageCircle,
      title: getText('seachat.keyFeatures.trulyFree.freeFeatures.unlimitedChat.title', 'Unlimited Conversations'),
      description: getText('seachat.keyFeatures.trulyFree.freeFeatures.unlimitedChat.description', 'No limits on chat volume')
    },
    {
      icon: Clock,
      title: getText('seachat.keyFeatures.trulyFree.freeFeatures.unlimitedHistory.title', 'Full Chat History'),
      description: getText('seachat.keyFeatures.trulyFree.freeFeatures.unlimitedHistory.description', 'Access complete conversation history')
    },
    {
      icon: Users,
      title: getText('seachat.keyFeatures.trulyFree.freeFeatures.unlimitedContacts.title', 'Unlimited Contacts'),
      description: getText('seachat.keyFeatures.trulyFree.freeFeatures.unlimitedContacts.description', 'Manage unlimited customer contacts')
    },
    {
      icon: Download,
      title: getText('seachat.keyFeatures.trulyFree.freeFeatures.freedomToExport.title', 'Data Export'),
      description: getText('seachat.keyFeatures.trulyFree.freeFeatures.freedomToExport.description', 'Export your data anytime')
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {getText('seachat.keyFeatures.title', 'Key Features')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {getText('seachat.keyFeatures.subtitle', 'Everything you need for intelligent customer support')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden"
              >
                {feature.badge && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {feature.badge}
                    </span>
                  </div>
                )}
                
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {feature.highlights.map((highlight: string, idx: number) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                      {highlight}
                    </li>
                  ))}
                </ul>
                
                <button className="flex items-center text-teal-600 hover:text-teal-700 font-semibold group-hover:gap-2 transition-all">
                  {getText('seachat.common.learnMore', 'Learn More')}
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Detailed Free Features Showcase */}
        <div className="bg-gradient-to-br from-green-50 via-blue-50 to-teal-50 rounded-3xl p-12 border border-green-100">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Infinity className="w-12 h-12 text-green-600 mr-4" />
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                {getText('seachat.keyFeatures.trulyFree.title', 'Truly Free Forever')}
              </h3>
            </div>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              {getText('seachat.keyFeatures.trulyFree.description', 'Start with our comprehensive free plan and upgrade when you need more advanced features.')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {freeFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">
              {getText('seachat.keyFeatures.trulyFree.whyChoose', 'Why Choose SeaChat?')}
            </h4>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h5 className="font-bold text-green-600 mb-3">{getText('seachat.keyFeatures.trulyFree.whatYouGet', 'What You Get Free')}</h5>
                <ul className="text-left space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    {getText('seachat.keyFeatures.trulyFree.freeForeverFeatures.0', 'Unlimited conversations')}
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    {getText('seachat.keyFeatures.trulyFree.freeForeverFeatures.1', 'All integrations included')}
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    {getText('seachat.keyFeatures.trulyFree.freeForeverFeatures.2', 'Full analytics dashboard')}
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h5 className="font-bold text-blue-600 mb-3">{getText('seachat.keyFeatures.trulyFree.scaleWhenReady', 'Scale When Ready')}</h5>
                <ul className="text-left space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {getText('seachat.keyFeatures.trulyFree.scaleFeatures.0', 'Advanced AI features')}
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {getText('seachat.keyFeatures.trulyFree.scaleFeatures.1', 'Priority support')}
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {getText('seachat.keyFeatures.trulyFree.scaleFeatures.2', 'Custom integrations')}
                  </li>
                </ul>
              </div>
            </div>

            <a href="https://chat.seasalt.ai/gpt/signup" className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white px-12 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg inline-block">
              {getText('seachat.keyFeatures.trulyFree.startButton', 'Start Free Now')}
            </a>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-20 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">∞</div>
              <div className="text-gray-600">{getText('seachat.keyFeatures.statsBar.unlimited', 'Unlimited')}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-600 mb-2">30+</div>
              <div className="text-gray-600">{getText('seachat.keyFeatures.statsBar.fileTypes', 'Integrations')}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">2min</div>
              <div className="text-gray-600">{getText('seachat.keyFeatures.statsBar.setupTime', 'Setup Time')}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">{getText('seachat.keyFeatures.statsBar.availability', 'Available')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
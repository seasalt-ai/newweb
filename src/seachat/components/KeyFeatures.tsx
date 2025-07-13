import React from 'react';
import { Users, Bot, Globe, ArrowRight, Infinity, Download, MessageCircle, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const KeyFeatures = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: Users,
      title: t('seachat.keyFeatures.humanAgents.title'),
      description: t('seachat.keyFeatures.humanAgents.description'),
      highlights: t('seachat.keyFeatures.humanAgents.highlights', { returnObjects: true }),
      color: 'from-green-500 to-emerald-500',
      badge: t('seachat.keyFeatures.humanAgents.badge')
    },
    {
      icon: Bot,
      title: t('seachat.keyFeatures.aiAutomation.title'),
      description: t('seachat.keyFeatures.aiAutomation.description'),
      highlights: t('seachat.keyFeatures.aiAutomation.highlights', { returnObjects: true }),
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Globe,
      title: t('seachat.keyFeatures.omnichannel.title'),
      description: t('seachat.keyFeatures.omnichannel.description'),
      highlights: t('seachat.keyFeatures.omnichannel.highlights', { returnObjects: true }),
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const freeFeatures = [
    {
      icon: MessageCircle,
      title: t('seachat.keyFeatures.trulyFree.freeFeatures.unlimitedChat.title'),
      description: t('seachat.keyFeatures.trulyFree.freeFeatures.unlimitedChat.description')
    },
    {
      icon: Clock,
      title: t('seachat.keyFeatures.trulyFree.freeFeatures.unlimitedHistory.title'),
      description: t('seachat.keyFeatures.trulyFree.freeFeatures.unlimitedHistory.description')
    },
    {
      icon: Users,
      title: t('seachat.keyFeatures.trulyFree.freeFeatures.unlimitedContacts.title'),
      description: t('seachat.keyFeatures.trulyFree.freeFeatures.unlimitedContacts.description')
    },
    {
      icon: Download,
      title: t('seachat.keyFeatures.trulyFree.freeFeatures.freedomToExport.title'),
      description: t('seachat.keyFeatures.trulyFree.freeFeatures.freedomToExport.description')
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('seachat.keyFeatures.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('seachat.keyFeatures.subtitle')}
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
                  {(feature.highlights as string[]).map((highlight: string, idx: number) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                      {highlight}
                    </li>
                  ))}
                </ul>
                
                <button className="flex items-center text-teal-600 hover:text-teal-700 font-semibold group-hover:gap-2 transition-all">
                  {t('seachat.common.learnMore')}
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
                {t('seachat.keyFeatures.trulyFree.title')}
              </h3>
            </div>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
               dangerouslySetInnerHTML={{ __html: t('seachat.keyFeatures.trulyFree.description') }}>
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
              {t('seachat.keyFeatures.trulyFree.whyChoose')}
            </h4>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h5 className="font-bold text-green-600 mb-3">{t('seachat.keyFeatures.trulyFree.whatYouGet')}</h5>
                <ul className="text-left space-y-2 text-gray-700">
                  {(t('seachat.keyFeatures.trulyFree.freeForeverFeatures', { returnObjects: true }) as string[]).map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h5 className="font-bold text-blue-600 mb-3">{t('seachat.keyFeatures.trulyFree.scaleWhenReady')}</h5>
                <ul className="text-left space-y-2 text-gray-700">
                  {(t('seachat.keyFeatures.trulyFree.scaleFeatures', { returnObjects: true }) as string[]).map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <a href="https://chat.seasalt.ai/gpt/signup" className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white px-12 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg inline-block">
              {t('seachat.keyFeatures.trulyFree.startButton')}
            </a>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-20 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">∞</div>
              <div className="text-gray-600">{t('seachat.keyFeatures.statsBar.unlimited')}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-600 mb-2">30+</div>
              <div className="text-gray-600">{t('seachat.keyFeatures.statsBar.fileTypes')}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">2min</div>
              <div className="text-gray-600">{t('seachat.keyFeatures.statsBar.setupTime')}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">{t('seachat.keyFeatures.statsBar.availability')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
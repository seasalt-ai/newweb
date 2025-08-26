import { useState, useEffect, useMemo } from 'react';
import { Users, Bot, BookOpen, Zap, Check, Brain, Clock, Search, Database, FileText, Target } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// Define interfaces for type safety
interface AdvancedFeature {
  icon: any;
  title: string;
  description: string;
  details: string[];
}


const FeatureTabs = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('agent-chat');

  const tabs = useMemo(() => [
    { id: 'agent-chat', label: t('seachat.featureTabs.tabs.humanAgent', 'Human Agent'), icon: Users },
    { id: 'ai-agent', label: t('seachat.featureTabs.tabs.aiAgent'), icon: Bot },
    { id: 'advanced-ai', label: t('seachat.featureTabs.tabs.advancedAI'), icon: Brain },
    { id: 'knowledge-base', label: t('seachat.featureTabs.tabs.knowledgeBase'), icon: BookOpen },
    { id: 'integrations', label: t('seachat.featureTabs.tabs.integrations'), icon: Zap }
  ], [t]);

  // Auto-cycle tabs every 3 seconds
  useEffect(() => {
    const tabIds = tabs.map(tab => tab.id);
    const interval = setInterval(() => {
      setActiveTab(prev => {
        const idx = tabIds.indexOf(prev);
        return tabIds[(idx + 1) % tabIds.length];
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [tabs]);

  const tabContent: Record<string, any> = useMemo(() => ({
    'agent-chat': {
      title: t('seachat.featureTabs.content.agentChat.title'),
      subtitle: t('seachat.featureTabs.content.agentChat.subtitle'),
      features: t('seachat.featureTabs.content.agentChat.features', { returnObjects: true }),
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
    },
    'ai-agent': {
      title: t('seachat.featureTabs.content.aiAgent.title'),
      subtitle: t('seachat.featureTabs.content.aiAgent.subtitle'),
      features: t('seachat.featureTabs.content.aiAgent.features', { returnObjects: true }),
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
    },
    'advanced-ai': {
      title: t('seachat.featureTabs.content.advancedAI.title'),
      subtitle: t('seachat.featureTabs.content.advancedAI.subtitle'),
      features: t('seachat.featureTabs.content.advancedAI.features', { returnObjects: true }),
      image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      advancedFeatures: [
        {
          icon: Search,
          title: t('seachat.featureTabs.advancedAI.features.rag.title'),
          description: t('seachat.featureTabs.advancedAI.features.rag.description'),
          details: [
            t('seachat.featureTabs.advancedAI.features.rag.details.0'),
            t('seachat.featureTabs.advancedAI.features.rag.details.1'),
            t('seachat.featureTabs.advancedAI.features.rag.details.2'),
            t('seachat.featureTabs.advancedAI.features.rag.details.3')
          ]
        },
        {
          icon: Brain,
          title: t('seachat.featureTabs.advancedAI.features.memory.title'),
          description: t('seachat.featureTabs.advancedAI.features.memory.description'),
          details: [
            t('seachat.featureTabs.advancedAI.features.memory.details.0'),
            t('seachat.featureTabs.advancedAI.features.memory.details.1'),
            t('seachat.featureTabs.advancedAI.features.memory.details.2'),
            t('seachat.featureTabs.advancedAI.features.memory.details.3')
          ]
        },
        {
          icon: Clock,
          title: t('seachat.featureTabs.advancedAI.features.timeAware.title'),
          description: t('seachat.featureTabs.advancedAI.features.timeAware.description'),
          details: [
            t('seachat.featureTabs.advancedAI.features.timeAware.details.0'),
            t('seachat.featureTabs.advancedAI.features.timeAware.details.1'),
            t('seachat.featureTabs.advancedAI.features.timeAware.details.2'),
            t('seachat.featureTabs.advancedAI.features.timeAware.details.3')
          ]
        },
        {
          icon: Target,
          title: t('seachat.featureTabs.advancedAI.features.contextExtraction.title'),
          description: t('seachat.featureTabs.advancedAI.features.contextExtraction.description'),
          details: [
            t('seachat.featureTabs.advancedAI.features.contextExtraction.details.0'),
            t('seachat.featureTabs.advancedAI.features.contextExtraction.details.1'),
            t('seachat.featureTabs.advancedAI.features.contextExtraction.details.2'),
            t('seachat.featureTabs.advancedAI.features.contextExtraction.details.3')
          ]
        },
        {
          icon: FileText,
          title: t('seachat.featureTabs.advancedAI.features.referencedResults.title'),
          description: t('seachat.featureTabs.advancedAI.features.referencedResults.description'),
          details: [
            t('seachat.featureTabs.advancedAI.features.referencedResults.details.0'),
            t('seachat.featureTabs.advancedAI.features.referencedResults.details.1'),
            t('seachat.featureTabs.advancedAI.features.referencedResults.details.2'),
            t('seachat.featureTabs.advancedAI.features.referencedResults.details.3')
          ]
        },
        {
          icon: Database,
          title: t('seachat.featureTabs.advancedAI.features.knowledgeRefinement.title'),
          description: t('seachat.featureTabs.advancedAI.features.knowledgeRefinement.description'),
          details: [
            t('seachat.featureTabs.advancedAI.features.knowledgeRefinement.details.0'),
            t('seachat.featureTabs.advancedAI.features.knowledgeRefinement.details.1'),
            t('seachat.featureTabs.advancedAI.features.knowledgeRefinement.details.2'),
            t('seachat.featureTabs.advancedAI.features.knowledgeRefinement.details.3')
          ]
        }
      ]
    },
    'knowledge-base': {
      title: t('seachat.featureTabs.content.knowledgeBase.title'),
      subtitle: t('seachat.featureTabs.content.knowledgeBase.subtitle'),
      features: t('seachat.featureTabs.content.knowledgeBase.features', { returnObjects: true }),
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
    },
    'integrations': {
      title: t('seachat.featureTabs.content.integrations.title'),
      subtitle: t('seachat.featureTabs.content.integrations.subtitle'),
      features: t('seachat.featureTabs.content.integrations.features', { returnObjects: true }),
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
    }
  }), [t]);

  const currentContent = tabContent[activeTab as keyof typeof tabContent];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('seachat.featureTabs.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('seachat.featureTabs.subtitle')}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12 bg-gray-100 rounded-2xl p-2 max-w-4xl mx-auto">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-3 rounded-xl font-semibold transition-all duration-300 text-sm ${
                  activeTab === tab.id
                    ? 'bg-white text-blue-600 shadow-md transform scale-105'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        {activeTab === 'advanced-ai' ? (
          // Advanced AI Features Layout
          <div className="space-y-16">
            {/* Header */}
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {currentContent.title}
              </h3>
              <p className="text-xl text-gray-600 mb-8">
                {currentContent.subtitle}
              </p>
            </div>

            {/* Advanced Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentContent.advancedFeatures?.map((feature: AdvancedFeature, index: number) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 border border-blue-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      {feature.title}
                    </h4>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {feature.details.map((detail: string, idx: number) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700">
                          <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 flex-shrink-0"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            {/* Demo Section */}
            {/* Removed Watch Demo and Live Demo Available */}
          </div>
        ) : (
          // Standard Tab Content Layout
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {currentContent.title}
                </h3>
                <p className="text-xl text-gray-600 mb-8">
                  {currentContent.subtitle}
                </p>
              </div>

              <div className="grid gap-4">
                {(currentContent.features as string[]).map((feature: string, index: number) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 group"
                  >
                    <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://chat.seasalt.ai/gpt/signup" className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 inline-block">
                  {activeTab === 'agent-chat' ? t('seachat.featureTabs.content.agentChat.tryFeature') : 
                   activeTab === 'ai-agent' ? t('seachat.featureTabs.content.aiAgent.tryFeature') :
                   activeTab === 'knowledge-base' ? t('seachat.featureTabs.content.knowledgeBase.tryFeature') :
                   t('seachat.featureTabs.content.integrations.tryFeature')}
                </a>
                {/* Removed Watch Demo button */}
              </div>
            </div>

            {/* Image/Demo */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src={currentContent.image}
                  alt={currentContent.title}
                  className="w-full h-80 object-cover"
                />
                {/* Removed Live Demo Available */}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeatureTabs;